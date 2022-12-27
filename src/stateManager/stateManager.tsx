import {createPresentation} from "../utils/functions";

let presentation: Presentation = createPresentation();

let onChangeHandler: Function = () => {};

export function dispatch(modifyFn: Function, payload: Object): void {
    setState(modifyFn(presentation, payload));
}

export function getState(): Presentation {
    return presentation;
}

export function setState(newPresentation: Presentation): void {
    presentation = newPresentation;
    onChangeHandler();
}

export function addOnChangeHandler(handler: Function): void {
    onChangeHandler = handler;
}
