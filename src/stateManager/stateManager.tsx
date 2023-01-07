import {createPresentation} from "../utils/functions";

let editor: Editor = createPresentation();

let onChangeHandler: Function = () => {};

export function dispatch(modifyFn: Function, payload: Object): void {
    setState(modifyFn(editor, payload));
}

export function getState(): Editor {
    return editor;
}

export function setState(newEditor: Editor): void {
    editor = newEditor;
    onChangeHandler();
}

export function addOnChangeHandler(handler: Function): void {
    onChangeHandler = handler;
}
