import React, { useState } from "react";
import useDragAndDrop from "../../../../hooks/useDragAndDrop";
import {
    editBlockPositionHandler,
    editTextSymbolsHandler,
    removeBlockHandler,
    selectBlockHandler
} from "../../../../stateManager/stateManagerFunctions";
import styles from "./TextComponent.module.css";

export function TextComponent(Props: {
    fontFamily: string, 
    fontColor: string, 
    fontSize: number, 
    symbols: string, 
    id: string,
    position: {
        x: number,
        y: number
    },
    height: number,
    width: number,
    slideIndex: number,
    blockIndex: number,
    presentation: Presentation;
    }) {
    let style = {
        fontFamily: Props.fontFamily,
        color: Props.fontColor,
        fontSize: Props.fontSize,
        top: Props.position.y,
        left: Props.position.x,
        width: Props.width,
        height: Props.height
    }
    const [symbols, setSymbols] = useState("Новый текст");
    let symbolsHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let symbolInput = event.target.value;
        setSymbols(symbolInput);
        editTextSymbolsHandler(Props.slideIndex, Props.blockIndex + 1, symbolInput);
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
                    coordX = 0;
                    coordY = 0;
                }
            }
        }


    return (
        <div className={styles.textBlock}>
            <textarea
            onKeyDown={(e) => {
                if (e.key === 'Delete') {
                    removeBlockHandler(Props.presentation.slideList[Props.presentation.selectedSlides[0].slideIndex - 1].slideIndex, Props.presentation.slideList[Props.presentation.selectedSlides[0].slideIndex - 1].selectedBlockList[0].blockIndex)
                }
            }}
            onClick={(e) => {
                selectBlockHandler(Props.slideIndex, Props.blockIndex);
                for (let i = 0; i < Props.presentation.slideList[Props.presentation.selectedSlides[0].slideIndex -1].selectedBlockList.length; i++)
                {
                    console.log(i);
                }
            }}
            id={Props.id}
            className={styles.text}
            autoComplete="off"
            value={Props.symbols}
            onChange={(e) => symbolsHandler(e)}
            style={style}/>
        </div>
    );
}