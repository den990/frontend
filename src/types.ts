type Presentation = {
    name: string;
    slideList: Slide[];
    selectedSlides: Slide[];
    slideResolution: Resolution;
}

type Resolution = {
    content: Big | Small;
}

type Big = {
    type: "Big";
    width: 1920;
    height: 1080;
}

type Small = {
    type: "Small";
    width: 1280;
    height: 1024;
}

type Slide = {
    blockList: Block[];
    background: color | pictureBackground;
    slideId: string;
}

type color = {
    codeColor: string;
}
type pictureBackground = {
    url: string;
    resolution : Big | Small;
}
type Block = {
    content: blockContent;
    blockId: string;
    position: {
        x: number;
        y: number;
    };
    width: number;
    height: number;
}

type blockContent = {
    content:  primitive | picture | text;
}

type text = {
    type: "text";
    fontFamily: string;
    fontColor: string;
    fontSize: number;
    width: number;
    height: number;
    symbols: string;
}

type picture = {
    type: "picture";
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
    type: "Triangle";
}

type Rectangle = {
    type: "Rectangle";
}

type Circle = {
    type: "Circle";
}
export type{
    Presentation,
    Resolution,
    Big,
    Small,
    Slide,
    color,
    pictureBackground,
    Block,
    blockContent,
    text,
    picture,
    primitive,
    Triangle,
    Rectangle,
    Circle
};