import React from "react";
import style from './Slide.module.css';

type Props = {
    blockList: Block[];
    selectedBlockList: Block[];
    background: color | pictureBackground;
    slideIndex: number;
}

const Slide = ({ blockList, selectedBlockList, background, slideIndex }: Props) => {
    return (
        <div className={style.slide}>
            <span className={style.slide__index}>{slideIndex}</span>
            <div className={style.slide__container}>
            </div>
        </div>
    );
}

export default Slide;