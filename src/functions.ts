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
    let blankSlide: Slide = {
        slideId: presentation.slideList.length + 1,
        blockList: [],
        selectedBlockList: [],
        background: defaultColor
    };
    const newSlideList = [...presentation.slideList, blankSlide];
    return {
        ...presentation,
        slideList: newSlideList
    };
}
function removeSlide(presentation: Presentation): Presentation {
    return presentation;
}
function removeSlides(presentation: Presentation, Slides: Array<Slide>): Presentation {
    return presentation;
}
function editBackground(presentation: Presentation, slide: Slide, background: color | pictureBackground): Presentation {
    let newSlide: Slide = {
        blockList: [...slide.blockList],
        selectedBlockList: [],
        background: background,
        slideId: slide.slideId,
    };
    let newSlideList = presentation.slideList;
    newSlideList[slide.slideId] = newSlide;
    return{
        ...presentation,
        slideList: newSlideList
    }
}
function selectSlide(presentation: Presentation, slideId: number): Presentation {
    let i: number = 0;
    while (presentation.slideList[i].slideId != slideId) {
        i++;
    }
    const selectedSlide = presentation.slideList[i];
    const newSelectedSlides = [...presentation.selectedSlides, selectedSlide];
    return {
        ...presentation,
        selectedSlides: newSelectedSlides
    };
}
function selectSlides(presentation:Presentation, slideIds: []): Presentation {
    for (let i = 0; i < slideIds.length; i++) {
        selectSlide(presentation, slideIds[i]);
    }
    return presentation;
}
function moveSlide(presentation: Presentation, oldSlideId: number, newSlideId: number): Presentation {
    if (newSlideId <= 1) {
        newSlideId = 1;
    }
    if (newSlideId > presentation.slideList.length + 1) {
        newSlideId = presentation.slideList.length + 1;
    }
    let i: number = 0;
    while (presentation.slideList[i].slideId != oldSlideId) {
        i++;
    }
    presentation.slideList[i].slideId = newSlideId
    for (i; i < presentation.slideList.length; i++) {
        presentation.slideList[i].slideId++;
    }
    return presentation;
}

// block functions
function copyBlock(presentation: Presentation, block: Block): Presentation {
    return presentation;
}
function insertBlock(presentation: Presentation, block: Block): Presentation {
    return presentation;
}
function createBlock(presentation: Presentation, slideId: number, inputContent: blockContent): Presentation {
    const newBlock = {
        content: inputContent,
        blockId: presentation.slideList[slideId].blockList.length++,
        position: {
            x: 1,
            y: 1
        },
        width: 50,
        height: 50
    }
    presentation.slideList[slideId].blockList = [...presentation.slideList[slideId].blockList, newBlock];
    return presentation;
}
function removeBlock(presentation: Presentation, block: Block): Presentation {
    return presentation;
}
function selectBlock(presentation: Presentation, slideId: number, blockId: number): Presentation {
    let i: number = 0;
    while (presentation.slideList[i].slideId != slideId) {
        i++;
    }
    let j: number = 0;
    while (presentation.slideList[i].blockList[j].blockId != blockId) {
        j++;
    }
    presentation.slideList[i].selectedBlockList = [...presentation.slideList[i].selectedBlockList, presentation.slideList[i].blockList[j]];
    return presentation;
}
function moveBlock(presentation: Presentation, slideId: number, blockId: number, inputX: number, inputY: number ): Presentation {
    presentation.slideList[slideId].blockList[blockId] = {
        ...presentation.slideList[slideId].blockList[blockId],
        position: {
            x: inputX,
            y: inputY
        }
    };
    return presentation;
}
function editBlockSize(presentation: Presentation, block: Block, width: number, height: number): Presentation {
    return presentation;
}

// content of block functions
function editFontFamily(presentation: Presentation, block: Block, fontFamily: string): Presentation {
    return presentation;
}
function editFontSize(presentation: Presentation, block: Block, size: number): Presentation {
    return presentation;
}
function editFontColor(presentation: Presentation, block: Block, color: string): Presentation {
    return presentation;
}
function editTextSymbols(presentation: Presentation, block: Block, symbols: string): Presentation {
    return presentation;
}
function editPrimitiveBackground(presentation: Presentation, block: Block, color: string): Presentation {
    return presentation;
}
function editPrimitiveBorder(presentation: Presentation, block: Block, color: string): Presentation {
    return presentation;
}
