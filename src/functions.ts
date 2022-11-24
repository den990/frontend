// presentation functions
function createPresentation(): Presentation {
    return {
        name: 'Новая презентация',
        slideList: [],
        selectedSlides: [],
        slideResolution: HDResolution
    };
}
function savePresentation(presentation: Presentation): Presentation {
    return presentation;
}
function openPresentation(presentation: Presentation, file: object): Presentation {
    return presentation;
}
function renamePresentation(presentation: Presentation, inputName: string): Presentation {
    return{
        ...presentation,
        name: inputName
    };
}
function editPresentationSlidesResolution(presentation: Presentation, inputResolution: Resolution): Presentation {
    return{
        ...presentation,
        slideResolution: inputResolution
    };
}

// slide functions
function createSlide(presentation: Presentation): Presentation {
    const newSlide: Slide = {
        slideIndex: presentation.slideList.length + 1,
        blockList: [],
        selectedBlockList: [],
        background: defaultColor
    };
    const newSlideList = [...presentation.slideList, newSlide];
    return {
        ...presentation,
        slideList: newSlideList
    };
}
function removeSlide(presentation: Presentation, slideIndex: number): Presentation {
    return presentation;
}
function removeSlides(presentation: Presentation, slideIndexes: []): Presentation {
    return presentation;
}
function editSlideBackground(presentation: Presentation, slideIndex: number, newBackground: color | pictureBackground): Presentation {
    const slide = presentation.slideList[slideIndex];
    const newSlide: Slide = {
        ...slide,
        background: newBackground
    };
    return {
        ...presentation,
        slideList: presentation.slideList.map((currentSlide, index) => {
            return (index == slideIndex) ? newSlide : currentSlide;
        })
    }
}
function selectSlide(presentation: Presentation, slideIndex: number): Presentation {
    const slide = presentation.slideList[slideIndex];
    const newSelectedSlideList = [...presentation.selectedSlides, slide];
    return {
        ...presentation,
        selectedSlides: newSelectedSlideList
    };
}

function selectSlides(presentation:Presentation, slideIndexes: []): Presentation {
    slideIndexes.forEach((item) => {
        selectSlide(presentation, item)
    });
    return presentation;
}
function moveSlide(presentation: Presentation, oldSlideIndex: number, newSlideIndex: number): Presentation {
    if (newSlideIndex <= 1) {
        newSlideIndex = 1;
    }
    if (newSlideIndex > presentation.slideList.length + 1) {
        newSlideIndex = presentation.slideList.length + 1;
    }
    const slide = {
        ...presentation.slideList[oldSlideIndex],
    }
    const newSlide = {
        ...slide,
        slideIndex: newSlideIndex
    }
    const newSlideList = [];
    const slideList = presentation.slideList;
    for (let i = 0; i < presentation.slideList.length; i++) {
        if (slideList[i].slideIndex < newSlideIndex) {
            newSlideList.push(slideList[i]);
        } else {
            if (slideList[i].slideIndex == newSlideIndex) {
                newSlideList.push(newSlide);
            }
            slideList[i].slideIndex++;
            newSlideList.push(slideList[i]);
        }
    }
    return {
        ...presentation,
        slideList: newSlideList
    };
}

// block functions
function copyBlock(presentation: Presentation, block: Block): Presentation {
    return presentation;
}
function insertBlock(presentation: Presentation, block: Block): Presentation {
    return presentation;
}
function createBlock(presentation: Presentation, slideIndex: number, inputContent: blockContent): Presentation {
    const newBlock = {
        content: inputContent,
        blockIndex: presentation.slideList[slideIndex].blockList.length++,
        position: {
            x: 1,
            y: 1
        },
        width: 50,
        height: 50
    }
    const newBlockList = [...presentation.slideList[slideIndex].blockList, newBlock];
    const newSlide = {
        ...presentation.slideList[slideIndex],
        blockList: newBlockList
    }
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index == slideIndex) ? newSlide : currentSlide;
        })
    };
}
function removeBlock(presentation: Presentation, blockIndex: number): Presentation {
    return presentation;
}
function selectBlock(presentation: Presentation, slideIndex: number, blockIndex: number): Presentation {
    const newSelectedBlock = presentation.slideList[slideIndex].blockList[blockIndex];
    const newSelectedBlockList = [...presentation.slideList[slideIndex].selectedBlockList, newSelectedBlock];
    const newSlide = {
        ...presentation.slideList[slideIndex],
        selectedBlockList: newSelectedBlockList
    }
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index == slideIndex) ? newSlide : currentSlide;
        })
    };
}
function moveBlock(presentation: Presentation, slideIndex: number, blockIndex: number, inputX: number, inputY: number ): Presentation {
    const slide = presentation.slideList[slideIndex];
    const block = slide.blockList[blockIndex];
    const newBlock = {
        ...block,
        position: {
            x: inputX,
            y: inputY
        }
    }
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, index) => {
            return (index == blockIndex) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index == slideIndex) ? newSlide : currentSlide;
        })
    };
}
function editBlockSize(presentation: Presentation, slideIndex: number, blockIndex: number, newWidth: number, newHeight: number): Presentation {
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
            return (index == blockIndex) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index == slideIndex) ? newSlide : currentSlide;
        })
    };
}

// content of block functions
function editFontFamily(presentation: Presentation, slideIndex: number, blockIndex: number, newFontFamily: string): Presentation {
    const slide = presentation.slideList[slideIndex];
    const block = slide.blockList[blockIndex];
    const newBlock = {
        ...block,
        fontFamily: newFontFamily
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, index) => {
            return (index == blockIndex) ? newBlock : currentBlock;
    })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index == slideIndex) ? newSlide : currentSlide;
        })
    };
}
function editFontSize(presentation: Presentation, slideIndex: number, blockIndex: number, newFontSize: string): Presentation {
    const slide = presentation.slideList[slideIndex];
    const block = slide.blockList[blockIndex];
    const newBlock = {
        ...block,
        fontSize: newFontSize
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, index) => {
            return (index == blockIndex) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index == slideIndex) ? newSlide : currentSlide;
        })
    };
}
function editFontColor(presentation: Presentation, slideIndex: number, blockIndex: number, newFontColor: string): Presentation {
    const slide = presentation.slideList[slideIndex];
    const block = slide.blockList[blockIndex];
    const newBlock = {
        ...block,
        fontColor: newFontColor
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, index) => {
            return (index == blockIndex) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index == slideIndex) ? newSlide : currentSlide;
        })
    };
}
function editTextSymbols(presentation: Presentation, slideIndex: number, blockIndex: number, newSymbols: string): Presentation {
    const slide = presentation.slideList[slideIndex];
    const block = slide.blockList[blockIndex];
    const newBlock = {
        ...block,
        symbols: newSymbols
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, index) => {
            return (index == blockIndex) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index == slideIndex) ? newSlide : currentSlide;
        })
    };
}
function editPrimitiveBackground(presentation: Presentation, slideIndex: number, blockIndex: number, newPrimitiveBackground: string): Presentation {
    const slide = presentation.slideList[slideIndex];
    const block = slide.blockList[blockIndex];
    const newBlock = {
        ...block,
        background: newPrimitiveBackground
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, index) => {
            return (index == blockIndex) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index == slideIndex) ? newSlide : currentSlide;
        })
    };
}
function editPrimitiveBorder(presentation: Presentation, slideIndex: number, blockIndex: number, newPrimitiveBorder: string): Presentation {
    const slide = presentation.slideList[slideIndex];
    const block = slide.blockList[blockIndex];
    const newBlock = {
        ...block,
        border: newPrimitiveBorder
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, index) => {
            return (index == blockIndex) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, index) => {
            return (index == slideIndex) ? newSlide : currentSlide;
        })
    };
}