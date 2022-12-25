import React from "react";
import style from './SlideList.module.css';
import Slide from '../Slide/Slide';

type Props = {
    slideList: Slide[];
}

export function SlideList({ slideList }: Props) {
    const slides = slideList.map((slide, index) => (
        <Slide
            slideIndex={slide.slideIndex}
            blockList={slide.blockList}
            selectedBlockList={slide.selectedBlockList}
            background={slide.background}
        />
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