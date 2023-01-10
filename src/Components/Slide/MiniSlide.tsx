import React from "react";
import style from "./MiniSlide.module.css";
import {selectSlideHandler, unselectedBlockHandler} from "../../stateManager/stateManagerFunctions";
import { MiniTextComponent } from "./Components/Text/MiniTextComponent";

const MiniSlide = (Props: {slideIndex: number, selected: boolean, background: string, blockList: Block[]}) => {
    let styleContainer = {
        background: Props.background
    }

    const textBlocks = Props.blockList.map((block, index) => {
        if (block.content.data.type === 'text') {
            return <MiniTextComponent 
            key={index} 
            fontFamily={block.content.data.fontFamily} 
            fontColor={block.content.data.fontColor} 
            fontSize={block.content.data.fontSize} 
            symbols={block.content.data.symbols}
            position={block.position}
            width={block.width}
            height={block.height}/>;
        }
        return null;
    });
    
    return (
        <div key={Props.slideIndex} className={style.miniSlide}>
            <span className={Props.slideIndex < 10 ? style.miniSlide__index : Props.selected ? style.miniSlide__index_doubleDigits : style.miniSlide__index}>{Props.slideIndex}</span>
            <div className={Props.selected ? style.miniSlide__borders : undefined}>
                <div onClick={(e) =>{{selectSlideHandler(Props.slideIndex - 1, e, Props.selected)}; unselectedBlockHandler(Props.slideIndex)}} style={styleContainer} className={style.miniSlide__container}>
                    <div className={style.blockList}>{textBlocks}</div>
                </div>
            </div>
        </div>
    );
}

export default MiniSlide