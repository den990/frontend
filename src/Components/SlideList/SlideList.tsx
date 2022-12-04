import React from "react";
import style from './SlideList.module.css';
import Slide from '../Slide/Slide';

export function SlideList() {
    return (
        <div className={style.slideList}>
            <div className={style.slideList__container}>
                <span className={style.slideList__container__text}>1</span>
                <Slide />
                <span className={style.slideList__container__text}>2</span>
                <Slide />
                <span className={style.slideList__container__text}>3</span>
                <Slide />
                <span className={style.slideList__container__text}>4</span>
                <Slide />
                <span className={style.slideList__container__text}>5</span>
                <Slide />
            </div>
        </div>
    );
}

export default SlideList;