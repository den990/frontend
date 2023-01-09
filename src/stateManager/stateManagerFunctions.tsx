import {
    convertJsonToPresentation,
    convertPresentationToJson,
    createBlock,
    createPresentation,
    createSlide,
    editBlockPosition,
    editFontColor,
    editFontSize,
    editFontFamily,
    editSlideBackground,
    editTextSymbols,
    removeSlides, renamePresentation,
    selectBlock,
    selectSlide, selectSlides, undo, redo, updateHistory, removeBlock, unselectedBlock
} from "../utils/functions";
import {MouseEvent} from "react";
import {dispatch} from "./stateManager";

export const undoHandler = () => {
    dispatch(undo, {});
}

export const redoHandler = () => {
    dispatch(redo, {});
}

export const updateHistoryHandler = () => {
    dispatch(updateHistory, {});
}

export const renamePresentationHandler = (name: string) => {
    updateHistoryHandler();
    dispatch(renamePresentation, name);
}

export const addSlideHandler = () => {
    updateHistoryHandler();
    dispatch(createSlide, {});
}

export const removeSlideHandler = (selectedSlides: Slide[]) => {
    updateHistoryHandler();
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
        dispatch(selectSlides, slideIndex);
    }
    else {
        dispatch(selectSlide, slideIndex);
    }
}

export const addBlockHandler = (slideIndex: number, inputContent: blockContent) => {
    updateHistoryHandler();
    dispatch(createBlock, {slideIndex, inputContent});
}

export const editSlideBackgroundHandler = (slideIndex: number, value: string, type: string) => {
    updateHistoryHandler();
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
    dispatch(selectBlock, {slideIndex, blockIndex});
}

export const editFontSizeHandler = (slideIndex: number, blockIndex: number, newFontSize: number) => {
    updateHistoryHandler();
    dispatch(editFontSize, {slideIndex, blockIndex, newFontSize});
}

export const editTextSymbolsHandler = (slideIndex: number, blockIndex: number, newSymbols: string) => {
    updateHistoryHandler();
    dispatch(editTextSymbols, {slideIndex, blockIndex, newSymbols});
}

export const editBlockPositionHandler = (slideIndex: number, blockIndex: number, coordX: number, coordY: number) => {
    updateHistoryHandler();
    dispatch(editBlockPosition, {slideIndex, blockIndex, coordX, coordY});
}

export const editFontColorHandler = (slideIndex: number, blockIndex: number, newFontColor: string) => {
    updateHistoryHandler();
    dispatch(editFontColor, {slideIndex, blockIndex, newFontColor})
}

export const editFontFamilyHandler = (slideIndex: number, blockIndex: number, newFontFamily: string) => {
    updateHistoryHandler();
    dispatch(editFontFamily,{slideIndex, blockIndex, newFontFamily});
}

export const removeBlockHandler = (slideIndex: number, blockIndex: number) => {
    updateHistoryHandler();
    dispatch(removeBlock, {slideIndex, blockIndex});
}
export const unselectedBlockHandler = (slideIndex: number) => {
    updateHistoryHandler();
    dispatch(unselectedBlock,  {slideIndex})
}