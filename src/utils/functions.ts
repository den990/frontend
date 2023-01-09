import {defaultSlide, defaultSlideColor} from "./consts";

// presentation functions
export function createPresentation(): Editor {
    return {
        history: {
            index: 0,
            states: []
        },
        presentation: {
            name: 'Новая презентация',
            slideList: [defaultSlide],
            selectedSlides: [defaultSlide]
        }
    };
}

export function convertPresentationToJson(editor: Editor): Editor {
    const json: string = JSON.stringify(editor.presentation);
    const blob = new Blob([json], { type: "text/plain" });
    const link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", editor.presentation.name + ".json");
    link.click();
    return editor;
}

export function convertJsonToPresentation(editor: Editor, json: string): Editor {
    editor.presentation = JSON.parse(json);
    return editor;
}

export function renamePresentation(editor: Editor, inputName: string): Editor {
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            name: inputName
        }
    };
}

// slide functions
export function createSlide(editor: Editor): Editor {
    const newSlide: Slide = {
        slideIndex: editor.presentation.slideList.length + 1,
        blockList: [],
        selectedBlockList: [],
        background: defaultSlideColor
    };
    const newSlideList = [...editor.presentation.slideList, newSlide];
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slideList: newSlideList
        }
    };
}

export function removeSlides(editor: Editor, slideIndexes: number[]): Editor {
    if (slideIndexes.length === 1) {
        if (editor.presentation.slideList.length === 1) {
            return editor;
        }
        const slideList = editor.presentation.slideList;
        const newSlideList = [];
        let saveIndex = 0;
        for (let i = 0; i < slideList.length; i++) {
            if (slideList[i].slideIndex !== slideIndexes[0]) {
                if (slideList[i].slideIndex < slideIndexes[0]) {
                    newSlideList.push(slideList[i]);
                } else {
                    slideList[i].slideIndex--;
                    newSlideList.push(slideList[i]);
                    saveIndex = slideIndexes[0] - 1;
                }
            }
        }
        const newSelectedSlides: Slide[] = [editor.presentation.slideList[saveIndex]];
        return {
            ...editor,
            presentation: {
                ...editor.presentation,
                slideList: newSlideList,
                selectedSlides: newSelectedSlides
            }
        };
    }
    else {
        if (editor.presentation.slideList.length === slideIndexes.length) {
            return editor;
        }
        slideIndexes.sort((a, b) => a - b);
        let slideList = editor.presentation.slideList;
        let slideListCounter = 0;
        while (slideIndexes.length !== 0) {
            if (slideIndexes[0] !== slideList[slideListCounter].slideIndex) {
                slideListCounter++;
            } else {
                const index = slideList.indexOf(slideList[slideListCounter], 0);
                if (index > -1) {
                    slideList.splice(index, 1);
                }
                slideIndexes.splice(0,1);
            }
        }
        const newSlideList = slideList.map((slide, index) => {
            slide.slideIndex = index + 1;
            return slide;
        });
        const newSelectedSlides = [newSlideList[0]];
        return {
            ...editor,
            presentation: {
                ...editor.presentation,
                slideList: newSlideList,
                selectedSlides: newSelectedSlides
            }
        };
    }
}

export function editSlideBackground(editor: Editor, payload: { slideIndex: number, newBackground: color | pictureBackground }): Editor {
    const slide = editor.presentation.slideList[payload.slideIndex - 1];
    const newSlide: Slide = {
        ...slide,
        background: payload.newBackground
    };
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slideList: editor.presentation.slideList.map((currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            })
        }
    }
}

export function selectSlide(editor: Editor, slideIndex: number): Editor {
    const slide = editor.presentation.slideList[slideIndex];
    const newSelectedSlideList = [slide];
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            selectedSlides: newSelectedSlideList
        }
    };
}

export function selectSlides(editor: Editor, slideIndex: number): Editor {
    const slide = editor.presentation.slideList[slideIndex];
    editor.presentation.selectedSlides.push(slide)
    return {
        ...editor,
    };
}

export function moveSlide(presentation: Presentation, oldSlideIndex: number, newSlideIndex: number): Presentation {
    const newSlideList = [...presentation.slideList];
    [newSlideList[oldSlideIndex], newSlideList[newSlideIndex]] = [newSlideList[newSlideIndex], newSlideList[oldSlideIndex]]
    return {
        ...presentation,
        slideList: newSlideList
    };
}

// block functions
export function createBlock(editor: Editor, payload: {slideIndex: number, inputContent: blockContent}): Editor {
    const newBlock = {
        content: payload.inputContent,
        blockIndex: editor.presentation.slideList[payload.slideIndex - 1].blockList.length + 1,
        position: {
            x: 200,
            y: 200
        },
        width: 500,
        height: 100
    }
    const newBlockList = [...editor.presentation.slideList[payload.slideIndex - 1].blockList, newBlock];
    const newSlide = {
        ...editor.presentation.slideList[payload.slideIndex - 1],
        blockList: newBlockList
    }
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slideList: editor.presentation.slideList.map(( currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            })
        }
    };
}
export function removeBlock(editor: Editor, payload: {blockIndex: number, slideIndex: number}): Editor {
    const slideList = editor.presentation.slideList;
    const slide = slideList[payload.slideIndex - 1];
    const blockList = slide.blockList;
    const newBlockList = [];
    for (let i = 0; i < blockList.length; i++) {
        if (blockList[i].blockIndex !== payload.blockIndex) {
            if (blockList[i].blockIndex < payload.blockIndex) {
                newBlockList.push(blockList[i]);
            } else {
                blockList[i].blockIndex--;
                newBlockList.push(blockList[i]);
            }
        }
    }
    const newSlide = {
        ...slide,
        blockList: newBlockList,
        selectedBlockList: []
    }
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slideList: editor.presentation.slideList.map(( currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            })
        }
    };
}

export function selectBlock(editor: Editor, payload: {slideIndex: number, blockIndex: number}): Editor {
    const newSelectedBlock = editor.presentation.slideList[payload.slideIndex - 1].blockList[payload.blockIndex];
    const newSelectedBlockList = [newSelectedBlock];
    const newSlide = {
        ...editor.presentation.slideList[payload.slideIndex - 1],
        selectedBlockList: newSelectedBlockList
    }
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slideList: editor.presentation.slideList.map(( currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            })
        }
    };
}

export function editBlockSize(presentation: Presentation, slideIndex: number, blockIndex: number, newWidth: number, newHeight: number): Presentation {
    const slide = presentation.slideList[slideIndex];
    const block = slide.blockList[blockIndex];
    const newBlock = {
        ...block,
        width: newWidth,
        height: newHeight
    }
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, index) => {
            return (index === blockIndex) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index === slideIndex) ? newSlide : currentSlide;
        })
    };
}

// content of block functions
export function editFontFamily(editor: Editor, payload: {slideIndex: number, blockIndex: number, newFontFamily: string}): Editor {
    const slide = editor.presentation.slideList[payload.slideIndex - 1];
    const block = slide.selectedBlockList[0];
    const data = {
        ...block.content.data
    };
    const newData = {
        ...data,
        fontFamily: payload.newFontFamily
    }
    const newContent = {
        ...block.content,
        data: newData
    }
    const newBlock = {
        ...block,
        content: newContent
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, index) => {
            return (index === payload.blockIndex - 1) ? newBlock : currentBlock;
    })};
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slideList: editor.presentation.slideList.map(( currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            })
        }

    };
}


export function editFontSize(editor: Editor, payload:{slideIndex: number, blockIndex: number, newFontSize: number}): Editor {
    const slide = editor.presentation.slideList[payload.slideIndex - 1];
    const block = slide.selectedBlockList[0];
    const data = {
        ...block.content.data
    };
    const newData = {
        ...data,
        fontSize: payload.newFontSize
    }
    const newContent = {
        ...block.content,
        data: newData
    }
    const newBlock = {
        ...block,
        content: newContent
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, index) => {
            return (index === payload.blockIndex - 1) ? newBlock : currentBlock;
        })};
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slideList: editor.presentation.slideList.map(( currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            })
        }
    };
}

export function editFontColor(editor: Editor, payload:{slideIndex: number, blockIndex: number, newFontColor: string}): Editor {
    const slide = editor.presentation.slideList[payload.slideIndex - 1];
    const block = slide.selectedBlockList[0];
    const data = {
        ...block.content.data
    };
    const newData = {
        ...data,
        fontColor: payload.newFontColor
    }
    const newContent = {
        ...block.content,
        data: newData
    }
    const newBlock = {
        ...block,
        content: newContent
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, index) => {
            return (index === payload.blockIndex - 1) ? newBlock : currentBlock;
        })};
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slideList: editor.presentation.slideList.map(( currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            })
        }
    };
}

export function editTextSymbols(editor: Editor, payload:{slideIndex: number, blockIndex: number, newSymbols: string}): Editor {
    const slide = editor.presentation.slideList[payload.slideIndex - 1];
    const block = slide.selectedBlockList[0];
    const data = {
        ...block.content.data
    };
    const newData = {
        ...data,
        symbols: payload.newSymbols
    }
    const newContent = {
        ...block.content,
        data: newData
    }
    const newBlock = {
        ...block,
        content: newContent
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, index) => {
            return (index === payload.blockIndex - 1) ? newBlock : currentBlock;
        })};
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slideList: editor.presentation.slideList.map(( currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            })
        }
    };
}

export function editPrimitiveBackground(presentation: Presentation, slideIndex: number, blockIndex: number, newPrimitiveBackground: string): Presentation {
    const slide = presentation.slideList[slideIndex];
    const block = slide.blockList[blockIndex];
    const newBlock = {
        ...block,
        background: newPrimitiveBackground
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, index) => {
            return (index === blockIndex) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index === slideIndex) ? newSlide : currentSlide;
        })
    };
}

export function editPrimitiveBorder(presentation: Presentation, slideIndex: number, blockIndex: number, newPrimitiveBorder: string): Presentation {
    const slide = presentation.slideList[slideIndex];
    const block = slide.blockList[blockIndex];
    const newBlock = {
        ...block,
        border: newPrimitiveBorder
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, index) => {
            return (index === blockIndex) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index === slideIndex) ? newSlide : currentSlide;
        })
    };
}

export function editBlockPosition(editor: Editor, payload:{slideIndex: number, blockIndex: number, coordX: number, coordY: number}): Editor {
    const slide = editor.presentation.slideList[payload.slideIndex - 1];
    const block = slide.selectedBlockList[0];
    const newBlock = {
        ...block,
        position: {x: payload.coordX, y: payload.coordY},
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, index) => {
            return (index === payload.blockIndex - 1) ? newBlock : currentBlock;
        })};
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slideList: editor.presentation.slideList.map(( currentSlide, index) => {
                return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
            })
        }
    };
}

// отменить
export function undo(editor: Editor): Editor {
    const newEditor: Editor = {
        ...editor,
    };

    if (editor.history.index > 0) {
        newEditor.history.index = editor.history.index - 1;
        newEditor.presentation = editor.history.states[newEditor.history.index];
    }


    return newEditor;
}
// вернуть
export function redo(editor: Editor): Editor {
    const newEditor: Editor = {
        ...editor,
    };

    if (editor.history.index < editor.history.states.length - 1) {
        newEditor.history.index = editor.history.index + 1;
        newEditor.presentation = editor.history.states[newEditor.history.index];
    }

    return newEditor;
}

export function updateHistory(editor: Editor): Editor {
    const newEditor: Editor = {
        ...editor,
        history: {
            ...editor.history,
            index: editor.history.index + 1,
        },
    };

    const newStates = newEditor.history.states.filter((value, id) =>
        id <= newEditor.history.index && value)

    newEditor.history.states = [...newStates, editor.presentation]

    return newEditor;
}
