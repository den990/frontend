import React, {useEffect, useRef, useState} from "react";
import useDragAndDrop from "../../../../hooks/useDragAndDrop";
import {
    editTextSymbolsHandler,
    removeBlockHandler,
    selectBlockHandler, unselectedBlockHandler
} from "../../../../stateManager/stateManagerFunctions";
import styles from "./TextComponent.module.css";
import useResize from "../../../../hooks/useResize";

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
    let symbolsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let symbolInput = event.target.value;
        setSymbols(symbolInput);
        editTextSymbolsHandler(Props.slideIndex, Props.blockIndex, symbolInput);
    }

    let idBlocks = Math.random()
    useDragAndDrop(Props.slideIndex, Props.blockIndex, String(idBlocks), Props.position.x, Props.position.y);

    let [refBox, refLeft, refTop, refRight, refBottom] = useResize();
    return (
        <div ref={refBox} className={styles.resizable_box} id={String(idBlocks)}>
            <div ref={refLeft}  className={`${styles.resizer} ${styles.rl}`}></div>
            <div ref={refTop} className={`${styles.resizer} ${styles.rt}`}></div>
            <input type='text'
                   onClick={(e ) => {{selectBlockHandler(Props.slideIndex, Props.blockIndex)}}}
                   onKeyDown={(e) => {
                       if (e.key === "Shift") {
                           unselectedBlockHandler(Props.slideIndex);
                           e.currentTarget.blur()}
                       if (e.key === "Delete") {
                           removeBlockHandler(Props.slideIndex, Props.blockIndex)
                       }
                   }}
                   className={styles.text}
                   autoComplete="off"
                   value={Props.symbols}
                   onChange={(e) => symbolsHandler(e)}
                   style={style}/>
            <div ref={refRight} className={`${styles.resizer} ${styles.rr}`}></div>
            <div ref={refBottom} className={`${styles.resizer} ${styles.rb}`}></div>
        </div>
    );
}