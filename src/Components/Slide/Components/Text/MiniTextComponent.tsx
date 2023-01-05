import React, { useState } from "react";
import styles from "./MiniTextComponent.module.css";

export function MiniTextComponent(Props: {
    fontFamily: string, 
    fontColor: string, 
    fontSize: number, 
    symbols: string, 
    position: {x:number, y:number},
    height: number,
    width: number
    }){
    const style = {
        fontFamily: Props.fontFamily,
        color: Props.fontColor,
        fontSize: (Props.fontSize/5),
        top: (Props.position.y/8),
        left: (Props.position.x/8),
        width: (Props.width/5),
        height: (Props.height/5)
    }

    return (
        <input
        onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.currentTarget.blur();}}
        }
        type="textarea" 
        className={styles.text} 
        defaultValue={Props.symbols} 
        style={style}/>
    );
}