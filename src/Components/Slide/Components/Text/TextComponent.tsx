import React from "react";
import styles from "./TextComponent.module.css";

export function TextComponent(Props: {fontFamily: string, fontColor: string, fontSize: number, symbols: string}) {
    const style = {
        fontFamily: Props.fontFamily,
        color: Props.fontColor,
        fontSize: Props.fontSize
    }
    return (
        <input type="textarea" className={styles.text} defaultValue={Props.symbols} style={style}/>
    );
}