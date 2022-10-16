type Presentation = {
    name: string;
    slideList: Slide[];
    currentSlide: Slide;
    selectedSlide: Slide[];
}
type Slide = {
    blockList: Block[];
    background: string;
    id: number;
    resolution: Big | Small;
}

type Big = {
    width: 1920;
    height: 1080;
}

type Small = {
    width: 1280;
    height: 1024;
}

type Block = {
    data: Primitive | Picture | Text;
    id: number;
    point: {
        x: number;
        y: number;
    };
    condition: string;
}

type Text = {
    fontFamily: string;
    fontColor: string;
    fontSize: number;
    width: number;
    height: number;
    symbols: string;
}

type Picture = {
    url: string;
    width: number;
    height: number;
}

type Primitive = {
    type: Triangle | Rectangle | Circle;
    background: string;
    border: string;
}

type Triangle = {
    width: number;
    height: number;
}

type Rectangle = {
    width: number;
    height: number;
}

type Circle = {
    radius: number;
}