import React from "react";
import {
    editBlockPositionHandler, editBlockSizeHandler,
    removeBlockHandler,
    selectBlockHandler, unselectedBlockHandler
} from "../../../../stateManager/stateManagerFunctions";
import useDragAndDrop from "../../../../hooks/useDragAndDrop";
import styles from "./ImageComponent.module.css";
import * as url from "url";

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
        "width": "200px",
        "height": "200px",
        "background-image": "url("+ Props.url + ")",
    }

    let idBlocks = Math.random()
    useDragAndDrop(Props.slideIndex, Props.blockIndex, String(idBlocks), Props.position.x, Props.position.y);

    return (
        <div style={{position: "absolute"}}>
            <div style={style} className={styles.image_block}
                 onClick={(e) => {selectBlockHandler(Props.slideIndex, Props.blockIndex)}}
                 id={String(idBlocks)}>
            </div>
        </div>
    );
}
