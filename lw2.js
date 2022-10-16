const block1 = {
    data: "text",
    point: {
        x: 100,
        y: 150
    },
    condition: "not selected"
};
const block2 = {
    data: "picture",
    point: {
        x: 300,
        y: 450
    },
    condition: "selected"
};
const block3 = {
    data: "primitive",
    point: {
        x: 900,
        y: 1350
    },
    condition: "selected"
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
    fontFamily: "Times New Roman",
    fontColor: "black",
    fontSize: 14,
    height: 40,
    width: 50,
    symbols: "Russian",
};
const picture = {
    url: "C:\\Program Files\\picture.png",
    width: 500,
    height: 300,
};
const primitive = {
    type: "triangle", //  "rectangle" | "circle",
    background: "blue",
    border: "black",
};
const triangle = {
    height: 500,
    width: 300,
};
const rectangle = {
    height: 500,
    width: 300,
};
const circle = {
    radius: 200,
};