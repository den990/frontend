import React from "react";
import styles from "./WorkSpace.module.css";
import {TextComponent} from "../Slide/Components/Text/TextComponent";
import {ImageComponent} from "../Slide/Components/Image/ImageComponent"

export function WorkSpace(Props: { presentation: Presentation, slideIndex: number }) {
    const textBlocks = Props.presentation.slideList[Props.slideIndex - 1].blockList.map((block, index) => {
        if ((block.content.data.type === "text")) {

            return <TextComponent
                key={index}
                fontFamily={block.content.data.fontFamily}
                fontColor={block.content.data.fontColor}
                fontSize={block.content.data.fontSize}
                symbols={block.content.data.symbols}
                position={block.position}
                width={block.width}
                height={block.height}

                slideIndex={Props.slideIndex}
                blockIndex={block.blockIndex}
                presentation={Props.presentation}/>;
        }
        return null;
    });
    const imageBlocks = Props.presentation.slideList[Props.slideIndex - 1].blockList.map((block, index) => {
        if (block.content.data.type === "picture") {
            return <ImageComponent url={block.content.data.url}
                                   key={index}
                                   position={block.position}
                                   slideIndex={Props.slideIndex}
                                   blockIndex={block.blockIndex}
                                   width={block.width}
                                   height={block.height}
                                   presentation={Props.presentation}/>;
        }
        return null;
    });
    const newBackground: color | pictureBackground = Props.presentation.slideList[Props.slideIndex - 1].background;
    let style;
    if (newBackground.type === "color") {
        style = {
            background: newBackground.code
        }
    } else {
        style = {
            background: "url(" + newBackground.code + ") no-repeat",
            backgroundSize: "cover"
        }
    }
    return (
        <div className={styles.workspace__background}>
            <div className={styles.workspace__content} style={style}>
                {textBlocks}
                {imageBlocks}
            </div>
        </div>
    );
}

export default WorkSpace;