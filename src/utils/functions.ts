import {defaultSlide, defaultSlideColor} from "./consts";

// presentation functions
export function createPresentation(): Presentation {
    return {
        name: 'Новая презентация',
        slideList: [defaultSlide],
        selectedSlides: [defaultSlide]
    };
}

export function convertPresentationToJson(presentation: Presentation): Presentation {
    const json: string = JSON.stringify(presentation);
    const blob = new Blob([json], { type: "text/plain" });
    const link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", presentation.name + "");
    link.click();
    return presentation;
}

export function convertJsonToPresentation(presentation: Presentation, json: string): Presentation {
    presentation = JSON.parse(json);
    return presentation;
}

export function renamePresentation(presentation: Presentation, inputName: string): Presentation {
    return{
        ...presentation,
        name: inputName
    };
}

// slide functions
export function createSlide(presentation: Presentation): Presentation {
    const newSlide: Slide = {
        slideIndex: presentation.slideList.length + 1,
        blockList: [],
        selectedBlockList: [],
        background: defaultSlideColor
    };
    const newSlideList = [...presentation.slideList, newSlide];
    return {
        ...presentation,
        slideList: newSlideList
    };
}

export function removeSlides(presentation:Presentation, slideIndexes: number[]): Presentation {
    if (slideIndexes.length === 1) {
        if (presentation.slideList.length === 1) {
            return presentation;
        }
        const slideList = presentation.slideList;
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
        const newSelectedSlides: Slide[] = [presentation.slideList[saveIndex]];
        return {
            ...presentation,
            slideList: newSlideList,
            selectedSlides: newSelectedSlides
        };
    }
    else {
        if (presentation.slideList.length === slideIndexes.length) {
            return presentation;
        }
        slideIndexes.sort((a, b) => a - b);
        let slideList = presentation.slideList;
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
            ...presentation,
            slideList: newSlideList,
            selectedSlides: newSelectedSlides
        };
    }
}

export function editSlideBackground(presentation: Presentation, payload: { slideIndex: number, newBackground: color | pictureBackground }): Presentation {
    const slide = presentation.slideList[payload.slideIndex - 1];
    const newSlide: Slide = {
        ...slide,
        background: payload.newBackground
    };
    return {
        ...presentation,
        slideList: presentation.slideList.map((currentSlide, index) => {
            return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
        })
    }
}

export function selectSlide(presentation: Presentation, slideIndex: number): Presentation {
    const slide = presentation.slideList[slideIndex];
    const newSelectedSlideList = [slide];
    return {
        ...presentation,
        selectedSlides: newSelectedSlideList
    };
}

export function selectSlides(presentation: Presentation, slideIndex: number): Presentation {
    const slide = presentation.slideList[slideIndex];
    presentation.selectedSlides.push(slide)
    return {
        ...presentation,
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
export function createBlock(presentation: Presentation, payload: {slideIndex: number, inputContent: blockContent}): Presentation {
    const newBlock = {
        content: payload.inputContent,
        blockIndex: presentation.slideList[payload.slideIndex - 1].blockList.length + 1,
        position: {
            x: 200,
            y: 200
        },
        width: 500,
        height: 100
    }
    const newBlockList = [...presentation.slideList[payload.slideIndex - 1].blockList, newBlock];
    const newSlide = {
        ...presentation.slideList[payload.slideIndex - 1],
        blockList: newBlockList
    }
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
        })
    };
}

export function removeBlock(presentation: Presentation, blockIndex: number, slideIndex: number): Presentation {
    const slideList = presentation.slideList;
    const slide = slideList[slideIndex];
    const newSlide = {
        ...slide,
        blockList: slide.blockList.filter((block, index) => index !== slideIndex)
    }
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index === slideIndex) ? newSlide : currentSlide;
        })
    };
}

export function selectBlock(presentation: Presentation, payload: {slideIndex: number, blockIndex: number}): Presentation {
    const newSelectedBlock = presentation.slideList[payload.slideIndex - 1].blockList[payload.blockIndex];
    const newSelectedBlockList = [newSelectedBlock];
    const newSlide = {
        ...presentation.slideList[payload.slideIndex - 1],
        selectedBlockList: newSelectedBlockList
    }
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
        })
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
export function editFontFamily(presentation: Presentation, payload: {slideIndex: number, blockIndex: number, newFontFamily: string}): Presentation {
    const slide = presentation.slideList[payload.slideIndex - 1];
    const block = slide.selectedBlockList[0];
    console.log(payload.newFontFamily)
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
    console.log(newBlock)
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, index) => {
            return (index === payload.blockIndex - 1) ? newBlock : currentBlock;
    })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
        })
    };
}


export function editFontSize(presentation: Presentation, payload:{slideIndex: number, blockIndex: number, newFontSize: number}): Presentation {
    console.log(payload.slideIndex, payload.blockIndex, payload.newFontSize)
    const slide = presentation.slideList[payload.slideIndex - 1];
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
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
        })
    };
}

export function editFontColor(presentation: Presentation, payload:{slideIndex: number, blockIndex: number, newFontColor: string}): Presentation {
    const slide = presentation.slideList[payload.slideIndex - 1];
    const block = slide.selectedBlockList[payload.blockIndex];
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
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
        })
    };
}

export function editTextSymbols(presentation: Presentation, payload:{slideIndex: number, blockIndex: number, newSymbols: string}): Presentation {
    console.log(payload.slideIndex, payload.blockIndex, payload.newSymbols)
    const slide = presentation.slideList[payload.slideIndex - 1];
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
    console.log(newBlock);
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, index) => {
            return (index === payload.blockIndex - 1) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
        })
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

export function editBlockPosition(presentation: Presentation, payload:{slideIndex: number, blockIndex: number, coordX: number, coordY: number}): Presentation {
    const slide = presentation.slideList[payload.slideIndex - 1];
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
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index === payload.slideIndex - 1) ? newSlide : currentSlide;
        })
    };
}