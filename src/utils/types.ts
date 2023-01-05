type Presentation = {
    name: string;
    slideList: Slide[];
    selectedSlides: Slide[];
}

type Slide = {
    blockList: Block[];
    selectedBlockList: Block[];
    background: color | pictureBackground;
    slideIndex: number;
}

type color = {
    type: 'color';
    code: string;
}

type pictureBackground = {
    type: 'picture';
    code: string;
}

type Block = {
    content: blockContent;
    blockIndex: number;
    position: {
        x: number;
        y: number;
    };
    width: number;
    height: number;
}

type blockContent = {
    data:  primitive | picture | text;
}

type text = {
    type: 'text';
    fontFamily: string;
    fontColor: string;
    fontSize: number;
    symbols: string;
}

type picture = {
    type: 'picture';
    url: string;
}

type primitive = {
    type: 'primitive';
    content: Triangle | Rectangle | Circle;
    background: string;
    border: string;
}

type Triangle = {
    type: 'Triangle';
}

type Rectangle = {
    type: 'Rectangle';
}

type Circle = {
    type: 'Circle';
}