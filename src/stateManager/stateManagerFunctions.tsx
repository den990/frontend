import {
    convertJsonToPresentation,
    convertPresentationToJson,
    createBlock,
    createPresentation,
    createSlide,
    editBlockPosition,
    editFontSize,
    editSlideBackground,
    editTextSymbols,
    removeSlides, renamePresentation,
    selectBlock,
    selectSlide, selectSlides
} from "../utils/functions";
import {MouseEvent} from "react";
import {dispatch} from "./stateManager";

export const renamePresentationHandler = (name: string) => {
    dispatch(renamePresentation, name)
}

export const addSlideHandler = () => {
    dispatch(createSlide, {});
}

export const removeSlideHandler = (selectedSlides: Slide[]) => {
    let slideIndexes: number[] = [];
    for (let i = 0; i < selectedSlides.length; i++) {
        slideIndexes.push(selectedSlides[i].slideIndex);
    }
    dispatch(removeSlides, slideIndexes);
}

export const createPresentationHandler = () => {
    dispatch(createPresentation, {});
}

export const selectSlideHandler = (slideIndex: number, e: MouseEvent<HTMLDivElement>, selectedSlides: boolean) => {
    if (e.ctrlKey)
    {
        dispatch(selectSlides, slideIndex)
    }
    else {
        dispatch(selectSlide, slideIndex);
    }
}

export const addBlockHandler = (slideIndex: number, inputContent: blockContent) => {
    dispatch(createBlock, {slideIndex, inputContent})
}

export const editSlideBackgroundHandler = (slideIndex: number, value: string, type: string) => {
    let newBackground: color | pictureBackground;
    if (type === 'color') {
        newBackground = {
            type: 'color',
            code: value
        }
    } else {
        newBackground = {
            type: 'picture',
            code: value
        }
    }
    dispatch(editSlideBackground, {slideIndex, newBackground});
}

export const saveAsJsonHandler = () => {
    dispatch(convertPresentationToJson, {})
}

export const openJsonHandler = (json: string) => {
    dispatch(convertJsonToPresentation, json);
}

export const selectBlockHandler = (slideIndex: number, blockIndex: number) => {
    dispatch(selectBlock, {slideIndex, blockIndex})
}

export const editFontSizeHandler = (slideIndex: number, blockIndex: number, newFontSize: number) => {
    dispatch(editFontSize, {slideIndex, blockIndex, newFontSize})
}

export const editTextSymbolsHandler = (slideIndex: number, blockIndex: number, newSymbols: string) => {
    dispatch(editTextSymbols, {slideIndex, blockIndex, newSymbols})
}

export const editBlockPositionHandler = (slideIndex: number, blockIndex: number, coordX: number, coordY: number) => {
    dispatch(editBlockPosition, {slideIndex, blockIndex, coordX, coordY})
}