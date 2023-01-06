import React from "react";
import {editBlockPositionHandler, selectBlockHandler} from "../../../../stateManager/stateManagerFunctions";
import useDragAndDrop from "../../../../hooks/useDragAndDrop";
import styles from "./ImageComponent.module.css";

export function ImageComponent(Props: {
    url: string
    id: string,
    position: {
        x: number,
        y: number
    },
    slideIndex: number,
    blockIndex: number,
}) {
    let style = {
        top: Props.position.y,
        left: Props.position.x
    }

    let [coordX, coordY] = useDragAndDrop(Props.id, Props.position.x, Props.position.y);
    let startX: number = Props.position.x;
    let startY: number = Props.position.y;
    if (startX !== coordX || startY !== coordY) {
        editBlockPositionHandler(Props.slideIndex, Props.blockIndex + 1, coordX, coordY);
        let startX = coordX;
        let startY = coordY;
    }
    console.log(Props.id);
    return (
        <img
            onClick={(e) => {selectBlockHandler(Props.slideIndex, Props.blockIndex)}}
            src={Props.url}
            id={Props.id}
            className={styles.image}
            alt={'img' + Props.id}
            style={style}
        />
    );
}