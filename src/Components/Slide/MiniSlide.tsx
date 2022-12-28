import React from "react";
import style from "./MiniSlide.module.css";

const MiniSlide = (Props: {slideIndex: number, selected: boolean}) => {
    return (
        <div className={style.miniSlide}>
            <span className={style.miniSlide__index}>{Props.slideIndex}</span>
            <div className={Props.selected && style.miniSlide__borders}>
                <div className={style.miniSlide__container}></div>
            </div>
        </div>
    );
}

export default MiniSlide