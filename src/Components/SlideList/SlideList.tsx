import React from "react";
import style from './SlideList.module.css';
import MiniSlide from "../Slide/MiniSlide";

export function SlideList( Props: { slideList: Slide[], selectedSlides: Slide[] }) {
    const slides = Props.slideList.map((slide, index) => (
        <MiniSlide slideIndex={slide.slideIndex} selected={Props.selectedSlides.some((Slide) => Slide.slideIndex === slide.slideIndex)} />
    ));
    return (
        <div className={style.slideList}>
            <div className={style.slideList__container}>
                {slides}
            </div>
        </div>
    );
}

export default SlideList;