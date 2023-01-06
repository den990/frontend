import React, { useState } from "react";
import useDragAndDrop from "../../../../hooks/useDragAndDrop";
import { editTextSymbolsHandler, selectBlockHandler } from "../../../../stateManager/stateManagerFunctions";
import styles from "./TextComponent.module.css";

export function TextComponent(Props: {
    fontFamily: string, 
    fontColor: string, 
    fontSize: number, 
    symbols: string, 
    id: string,
    position: {x:number, y:number},
    height: number,
    width: number,
    slideIndex: number,
    blockIndex: number,
    presentation: Presentation
    }){
    let style = {
        fontFamily: Props.fontFamily,
        color: Props.fontColor,
        fontSize: Props.fontSize,
        top: Props.position.y,
        left: Props.position.x,
        width: Props.width,
        height: Props.height
    }
    
    useDragAndDrop(Props.id, Props.position.x, Props.position.y)
    const [symbols, setSymbols] = useState("Новый текст");
    let symbolsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let symbolInput = event.target.value;
        setSymbols(symbolInput);
        editTextSymbolsHandler(Props.slideIndex, Props.blockIndex + 1, symbolInput);
    }

    return (
        <input
        onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.currentTarget.blur();}}
        }
        onClick={(e) => {selectBlockHandler(Props.slideIndex, Props.blockIndex)}}
        type="textarea" 
        id={Props.id}
        className={styles.text} 
        value={Props.symbols}
        onChange={symbolsHandler}
        style={style}/>
    );
}