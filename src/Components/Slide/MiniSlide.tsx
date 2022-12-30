import React from "react";
import style from "./MiniSlide.module.css";
import {selectSlideHandler} from "../../stateManager/stateManagerFunctions";

const MiniSlide = (Props: {slideIndex: number, selected: boolean}) => {
    return (
        <div key={Props.slideIndex} className={style.miniSlide}>
            <span className={style.miniSlide__index}>{Props.slideIndex}</span>
            <div className={Props.selected ? style.miniSlide__borders : undefined}>
                <div onClick={() => selectSlideHandler(Props.slideIndex - 1)} className={style.miniSlide__container}></div>
            </div>
        </div>
    );
}

export default MiniSlide