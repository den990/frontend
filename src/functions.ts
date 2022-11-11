// presentation functions
function createPresentation(presentation: Presentation, name: string): Presentation {
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
function renamePresentation(presentation: Presentation, name: string): Presentation {
    return presentation;
}
function editPresentationSlidesResolution(presentation: Presentation, resolution: Resolution): Presentation {
    return presentation;
}

// slide functions
function createSlide(presentation: Presentation): Presentation {

    return presentation;
}
function removeSlide(presentation: Presentation): Presentation {
    return presentation;
}
function removeSlides(presentation: Presentation, Slides: Array<Slide>): Presentation {
    return presentation;
}
function editBackground(presentation: Presentation, slide: Slide, background: string): Presentation {
    return presentation;
}
function selectSlide(presentation: Presentation, slideId: number): Presentation {
    return presentation;
}
function selectSlides(presentation:Presentation, slideId: number): Presentation {
    return presentation;
}
function moveSlide(presentation: Presentation, slide: Slide, position: Object): Presentation {
    return presentation;
}

// block functions
function copyBlock(presentation: Presentation, block: Block): Presentation {
    return presentation;
}
function insertBlock(presentation: Presentation, block: Block): Presentation {
    return presentation;
}
function createBlock(presentation: Presentation, content: blockContent): Presentation {
    return presentation;
}
function removeBlock(presentation: Presentation, block: Block): Presentation {
    return presentation;
}
function selectBlock(presentation: Presentation, blockId: number): Presentation {
    return presentation;
}
function moveBlock(presentation: Presentation, block: Block): Presentation {
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
