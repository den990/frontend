import React from "react";
import style from "./MiniSlide.module.css";
import {selectSlideHandler} from "../../stateManager/stateManagerFunctions";

const MiniSlide = (Props: {slideIndex: number, selected: boolean, background: string}) => {
    let styleContainer = {
        background: Props.background
    }
    return (
        <div key={Props.slideIndex} className={style.miniSlide}>
            <span className={Props.slideIndex < 10 ? style.miniSlide__index : Props.selected ? style.miniSlide__index_doubleDigits : style.miniSlide__index}>{Props.slideIndex}</span>
            <div className={Props.selected ? style.miniSlide__borders : undefined}>
                <div onClick={(e) => selectSlideHandler(Props.slideIndex - 1, e, Props.selected)} style={styleContainer} className={style.miniSlide__container}></div>
            </div>
        </div>
    );
}

export default MiniSlide