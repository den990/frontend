const block1 = {
    content: text,
    point: {
        x: 100,
        y: 150
    },
    //condition: "not selected"
};
const block2 = {
    
    content: picture,
    point: {
        x: 300,
        y: 450
    },
    //condition: "selected"
};
const block3 = {
    content: primitive,
    point: {
        x: 900,
        y: 1350
    },
    //condition: "selected"
};
const slide1 = {
    blocks: [block1, block2, block3],
    background: "white",
    resolution: "big" //"small"
};
const presentation = {
    name: "Новая презентация",
    slides: [slide1]
};
const text = {
    type: "text",
    fontFamily: "Times New Roman",
    fontColor: "black",
    fontSize: 14,
    height: 40,
    width: 50,
    symbols: "Russian",
};
const picture = {
    type: "picture",
    url: "C:\\Program Files\\picture.png",
    width: 500,
    height: 300,
};
const primitive = {
    content: triangle, //  "rectangle" | "circle",
    background: "blue",
    border: "black",
};
const triangle = {
    type: "triangle",
    height: 500,
    width: 300,
};
const rectangle = {
    type: "rectangle",
    height: 500,
    width: 300,
};
const circle = {
    type: "circle",
    radius: 200,
};