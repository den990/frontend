import React from "react";
import style from './SlideList.module.css';
import Slide from '../Slide/Slide';

export function SlideList() {
    return (
        <div className={style.slideList}>
            <div className={style.slideList__container}>
                <span className={style.slideList__container__text}>1</span>
                <Slide />
            </div>
        </div>
    );
}

export default SlideList;