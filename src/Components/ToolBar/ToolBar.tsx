import React from 'react';
import {useState} from 'react';
import {useReducer} from "react";
import style from './ToolBar.module.css';




export function ToolBar() {
    const [inputSize, setInputSize] = useState(36);

    function increment(){
        setInputSize(inputSize + 1)
    }

    function decrement(){
        setInputSize(inputSize - 1)
    }

    return (
        <div className={style.toolbar}>
            <div className={style.toolbar__slideButtons}>
                <button className={style.toolbar__slideButtons__addButton}>
                    <img src={require('../../images/add-slide.svg').default} alt={'AddingSlide'} />
                    <span className={style.toolbar__slideButtons__addButton__text}>Добавить слайд</span>
                </button>
                <button className={style.toolbar__slideButtons__deleteButton}>
                    <img src={require('../../images/delete-slide.svg').default} alt={'DeletingSlide'} />
                </button>
            </div>
            <div className={style.toolbar__blockFunctions}>
                <img className={style.toolbar__blockFunctions__dividingLine} src={require('../../images/dividing-line.svg').default} alt={'DividingLine'} />

                <button className={style.toolbar__blockFunctions__button}><img src={require('../../images/redo.svg').default} alt={'RedoButton'} /></button>
                <button className={style.toolbar__blockFunctions__button}><img src={require('../../images/undo.svg').default} alt={'UndoButton'} /></button>
                <button className={style.toolbar__blockFunctions__button}><img src={require('../../images/text.svg').default} alt={'TextButton'} /></button>
                <button className={style.toolbar__blockFunctions__primitiveButton}><img src={require('../../images/primitive.svg').default} alt={'PrimitiveButton'} /></button>
                <button className={style.toolbar__blockFunctions__expand}><img src={require('../../images/arrow.svg').default} alt={'ExpandButton'} /></button>
                <button className={style.toolbar__blockFunctions__button}><img src={require('../../images/picture.svg').default} alt={'PictureButton'} /></button>
                <button className={style.toolbar__blockFunctions__backgroundButton}><img src={require('../../images/background.svg').default} alt={'BackgroundButton'} /></button>
                <button className={style.toolbar__blockFunctions__expand}><img src={require('../../images/arrow.svg').default} alt={'ExpandButton'} /></button>

                <img className={style.toolbar__blockFunctions__dividingLine} src={require('../../images/dividing-line.svg').default} alt={'DividingLine'} />
                
                <input type={"button"} value="Arial" className={style.toolbar__blockFunction__editFontFamily} alt={"EditFontFamily"}/>
                <button className={style.toolbar__blockFunctions__expand}><img src={require('../../images/arrow.svg').default} alt={'ExpandButton'} /></button>


                <button onClick={decrement} className={style.toolbar__blockFunctions__textSize}><img src={require('../../images/decrease-text.svg').default} alt={'DecreaseText'} /></button>
                <input type={"number"} value={inputSize} onChange={e => setInputSize(e.target.valueAsNumber)} className={style.toolbar__blockFunction__editFontSize} alt={"EditFontSize"}/>
                <button onClick={increment} className={style.toolbar__blockFunctions__textSize}><img src={require('../../images/increase-text.svg').default} alt={'IncreaseText'} /></button>


                <button className={style.toolbar__blockFunctions__textColor}><img src={require('../../images/text-color.svg').default} alt={'EditTextColor'} /></button>

                <img className={style.toolbar__blockFunctions__dividingLine} src={require('../../images/dividing-line.svg').default} alt={'DividingLine'} />

                <button className={style.toolbar__blockFunctions__primitiveColor}><img src={require('../../images/primitive-color-background.svg').default} alt={'EditPrimitiveColorBackground'} /></button>
                <button className={style.toolbar__blockFunctions__primitiveColor}><img src={require('../../images/primitive-color-border.svg').default} alt={'EditPrimitiveColorBorder'} /></button>

                <img className={style.toolbar__blockFunctions__dividingLine} src={require('../../images/dividing-line.svg').default} alt={'DividingLine'} />
            </div>
            <div className={style.toolbar__slideShow}>
                <button className={style.toolbar__slideShowButton}>
                    <img src={require('../../images/slide-show.svg').default} alt={'SlideShowButton'} />
                    <span className={style.toolbar__slideShowButton__text}>Слайд-шоу</span>
                </button>
            </div>
        </div>
    );
}

export default ToolBar;