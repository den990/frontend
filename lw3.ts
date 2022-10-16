type pptx = {
    mode: "View" | "Edit",
    presentation : "presentation",
};

type Presentation = {
    name: string;
    slideList: Slide[];
    currentSlide: Slide;
    selectedSlide: Slide[];
};

type Slide = {
    animation: SlideAnimation;
    elementList: SlideElement[];
    background: Background;
};

type SlideAnimation = {
    fadeIn: 0;
    fadeOut: 1;
};

type Background = {
    color: string;
    picture: Image;
};

type SlideElement = {
    width: number;
    heigth: number;
    position: {
        x: number;
        y: number;
    };
    color: string;
    border: Border;
    data: SlideText | Image | Figure;
};

type Border = {
    width: number;
    type: "solid" | "dotted" | "dashed";
    color: string;
};

type SlideText = {
    fontFamily: string;
    fontColor: string;
    fontSize: number;
    bold: boolean;
    italic: boolean;
    underline: boolean;
};

type Image = {
    url: string;
    filter: Filter;
};

type Filter = {
    blur: 0;
    colorSelection: 1;
};

type Figure = {
    type: "circle" | "triangle" | "sguare";
};