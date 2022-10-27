type Presentation = {
    name: string;
    slideList: Slide[];
    currentSlide: Slide;
    selectedSlide: Slide[];
    slideResolution: Resolution;
}

type Resolution = {
    content: Big | Small;
}

type Big = {
    type: string;
    width: 1920;
    height: 1080;
}

type Small = {
    type: string;
    width: 1280;
    height: 1024;
}

type Slide = {
    blockList: Block[];
    background: string;
    slideId: number;
}

type Block = {
    content: blockContent;
    blockId: number;
    point: {
        x: number;
        y: number;
    };
}

type blockContent = {
    content:  primitive | picture | text;
}

type text = {
    type: string;
    fontFamily: string;
    fontColor: string;
    fontSize: number;
    width: number;
    height: number;
    symbols: string;
}

type picture = {
    type: string;
    url: string;
    width: number;
    height: number;
}

type primitive = {
    content: Triangle | Rectangle | Circle;
    background: string;
    border: string;
}

type Triangle = {
    type: string;
    width: number;
    height: number;
}

type Rectangle = {
    type: string;
    width: number;
    height: number;
}

type Circle = {
    type: string;
    radius: number;
}