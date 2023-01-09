import React from "react";
import style from './SlideList.module.css';
import MiniSlide from "../Slide/MiniSlide";
import {unselectedBlockHandler} from "../../stateManager/stateManagerFunctions";

export function SlideList( Props: { slideList: Slide[], selectedSlides: Slide[]}) {
    const slides = Props.slideList.map((slide, index) => (
        <MiniSlide 
            key={index} 
            slideIndex={slide.slideIndex} 
            selected={Props.selectedSlides.some((Slide) => Slide.slideIndex === slide.slideIndex)}
            background={slide.background.code} 
            blockList={slide.blockList}/>
    ));
    return (
        <div className={style.slideList}>
            <div className={style.slideList__container} onClick={(e) => {
                Props.slideList.map((slide, index) => {
                    console.log("1");
                    unselectedBlockHandler(index)
                } )}}>
                {slides}
            </div>
        </div>
    );
}

export default SlideList;