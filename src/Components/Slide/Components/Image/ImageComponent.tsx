import React from "react";
import {
    editBlockPositionHandler,
    removeBlockHandler,
    selectBlockHandler
} from "../../../../stateManager/stateManagerFunctions";
import useDragAndDrop from "../../../../hooks/useDragAndDrop";
import styles from "./ImageComponent.module.css";
import * as url from "url";

export function ImageComponent(Props: {
    url: string
    id: string,
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
    let targets = document.getElementById(Props.id);
    let startX: number = Props.position.x;
    let startY: number = Props.position.y;
    let [coordX, coordY] = useDragAndDrop(Props.id, Props.position.x, Props.position.y);
    if (Number(Props.id[0]) === Props.slideIndex) {
        if (targets !== null) {
            if ((startX !== coordX && startY !== coordY) && (targets.id === Props.id)) {
                {
                    editBlockPositionHandler(Props.slideIndex, Props.blockIndex + 1, coordX, coordY);
                }
                let startX = 0;
                let startY = 0;
            }
        }
    }

    return (
        <div style={{position: "absolute"}}>
            <div style={style} className={styles.image_block}
                 onClick={(e) => selectBlockHandler(Props.slideIndex, Props.blockIndex)}
                 onKeyDown={(e) => {
                     if (e.key === 'Delete') {
                         removeBlockHandler(Props.presentation.slideList[Props.presentation.selectedSlides[0].slideIndex - 1].slideIndex, Props.presentation.slideList[Props.presentation.selectedSlides[0].slideIndex - 1].selectedBlockList[0].blockIndex)
                     }
                 }}
                 id={Props.id}>
            </div>
        </div>
    );
}

{/*<img*/}
{/*    onClick={(e) => {*/}
{/*        selectBlockHandler(Props.slideIndex, Props.blockIndex)*/}
{/*    }}*/}
{/*    onKeyDown={(e) => {*/}
{/*        if (e.key === 'Delete') {*/}
{/*            removeBlockHandler(Props.presentation.slideList[Props.presentation.selectedSlides[0].slideIndex - 1].slideIndex, Props.presentation.slideList[Props.presentation.selectedSlides[0].slideIndex - 1].selectedBlockList[0].blockIndex)*/}
{/*        }*/}
{/*    }}*/}
{/*    src={Props.url}*/}
{/*    id={Props.id}*/}
{/*    className={styles.image}*/}
{/*    alt={'img' + Props.id}*/}
{/*    style={style}*/}
{/*/>*/}