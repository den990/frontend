let editor: {};

export function getEditor(){
    return editor
}

export function setEditor({newEditor}: { newEditor: any }){
    editor = newEditor
}
