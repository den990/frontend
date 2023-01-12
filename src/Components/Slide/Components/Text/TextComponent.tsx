import React, {useState} from "react";
import useDragAndDrop from "../../../../hooks/useDragAndDrop";
import {
    editTextSymbolsHandler,
    removeBlockHandler,
    selectBlockHandler, unselectedBlockHandler
} from "../../../../stateManager/stateManagerFunctions";
import styles from "./TextComponent.module.css";

export function TextComponent(Props: {
    fontFamily: string,
    fontColor: string,
    fontSize: number,
    symbols: string,
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
        editTextSymbolsHandler(Props.slideIndex, Props.blockIndex, symbolInput);
    }

    let idBlocks = Math.random()
    useDragAndDrop(Props.slideIndex, Props.blockIndex, String(idBlocks), Props.position.x, Props.position.y, "text");

    return (
        <div className={styles.textBlock}>
            <textarea
                onClick={(e) => {
                    selectBlockHandler(Props.slideIndex, Props.blockIndex)
                }}
                onKeyDown={(e) => {
                    if (e.key === "Alt") {
                        unselectedBlockHandler(Props.slideIndex);
                        e.currentTarget.blur()
                    }
                    if (e.key === "Delete") {
                        removeBlockHandler(Props.slideIndex, Props.blockIndex)
                    }
                }}
                id={String(idBlocks)}
                className={styles.text}
                autoComplete="off"
                value={Props.symbols}
                onChange={(e) => symbolsHandler(e)}
                style={style}/>
        </div>
    );
}