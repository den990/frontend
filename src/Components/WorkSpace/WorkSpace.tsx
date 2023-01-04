import React from 'react';
import styles from './WorkSpace.module.css';
import {TextComponent} from "../Slide/Components/Text/TextComponent";

export function WorkSpace(Props: {presentation: Presentation, slideIndex: number})
{
    const textBlocks = Props.presentation.slideList[Props.slideIndex - 1].blockList.map((block, index) => {
        if (block.content.data.type === 'text') {
            return <TextComponent key={index} 
            fontFamily={block.content.data.fontFamily} 
            fontColor={block.content.data.fontColor} 
            fontSize={block.content.data.fontSize} 
            symbols={block.content.data.symbols}/>;
        }
        return null;
    });

    const newBackground: color | pictureBackground = Props.presentation.selectedSlides[0].background;
    console.log(newBackground);
    let style;
    if (newBackground.type === 'color') {
        style = {
            background: newBackground.code
        }
    } else {
        style = {
            background: 'url(' + newBackground.code + ') no-repeat'
        }
    }

    return (
        <div className={styles.workspace__background}>
            <div className={styles.workspace__content} style={style}>
                {textBlocks}
            </div>
        </div>
    );
}

export default WorkSpace;