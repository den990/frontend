export const defaultColor: color = {
    type: 'color',
    code : '#000000'
}

export const defaultSlideColor: color = {
    type: 'color',
    code: '#ffffff'
}

export const defaultText: text = {
    type: 'text',
    fontFamily: 'Arial',
    fontColor: '#000000',
    fontSize: 32,
    symbols: 'Новый текст'
}

export const defaultTextType: blockContent = {
    data: defaultText
}

export const defaultSlide: Slide = {
    slideIndex: 1,
    blockList: [],
    selectedBlockList: [],
    background: defaultSlideColor
}