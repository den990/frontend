import React from "react";
import { selectBlockHandler } from "../../../../stateManager/stateManagerFunctions";
import useDragAndDrop from "../../../../hooks/useDragAndDrop";
import styles from "./ImageComponent.module.css";

export function ImageComponent(Props: {
    url: string
    position: {
        x: number,
        y: number
    },
    slideIndex: number,
    blockIndex: number,
    width: number,
    height: number,
    presentation: Presentation
}) {
    let style = {
        top: Props.position.y,
        left: Props.position.x,
        width: Props.width,
        height: Props.height,
        "background-image": "url("+ Props.url + ")",
    }

    let idBlocks = Math.random()
    useDragAndDrop(Props.slideIndex, Props.blockIndex, String(idBlocks), Props.position.x, Props.position.y, 'picture');

    return (
        <div style={{position: "absolute"}}>
            <div style={style} className={styles.image_block}
                 onClick={(e) => {selectBlockHandler(Props.slideIndex, Props.blockIndex)}}
                 id={String(idBlocks)}>
            </div>
        </div>
    );
}
