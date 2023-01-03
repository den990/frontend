import React from 'react';
import {useState} from 'react';
import style from './ToolBar.module.css';
import {
    addBlockHandler,
    addSlideHandler,
    editSlideBackgroundHandler,
    removeSlideHandler
} from "../../stateManager/stateManagerFunctions";
import {defaultTextType} from "../../utils/consts";

export function ToolBar(Props:{ presentation: Presentation }) {

    const [inputSize, setInputSize] = useState(36);
    function increment(){
        setInputSize(inputSize + 1)
    }

    function decrement(){
        if (inputSize > 1)
        {
            setInputSize(inputSize - 1)
        }
    }

    const [color, setColor] = useState("fff");
    const colorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const colorInput = event.target.value;
        setColor(colorInput);
        editSlideBackgroundHandler(Props.presentation.selectedSlides[0].slideIndex, color);
    }
    return (
        <div className={style.toolbar}>
            <div className={style.toolbar__slideButtons}>
                <button onClick={addSlideHandler} className={style.toolbar__slideButtons__addButton}>
                    <img src={require('../../images/add-slide.svg').default} alt={'AddingSlide'} />
                    <span className={style.toolbar__slideButtons__addButton__text}>Добавить слайд</span>
                </button>
                <button onClick={() => removeSlideHandler(Props.presentation)} className={style.toolbar__slideButtons__deleteButton}>
                    <img src={require('../../images/delete-slide.svg').default} alt={'DeletingSlide'} />
                </button>
            </div>
            <div className={style.toolbar__blockFunctions}>
                <img className={style.toolbar__blockFunctions__dividingLine} src={require('../../images/dividing-line.svg').default} alt={'DividingLine'} />

                <button className={style.toolbar__blockFunctions__button}><img src={require('../../images/redo.svg').default} alt={'RedoButton'} /></button>
                <button className={style.toolbar__blockFunctions__button}><img src={require('../../images/undo.svg').default} alt={'UndoButton'} /></button>
                <button onClick={() => addBlockHandler(Props.presentation.selectedSlides[0].slideIndex, defaultTextType)} className={style.toolbar__blockFunctions__button}>
                    <img src={require('../../images/text.svg').default} alt={'TextButton'} />
                </button>

                <button className={style.toolbar__blockFunctions__primitiveButton}><img src={require('../../images/primitive.svg').default} alt={'PrimitiveButton'} /></button>
                <button className={style.toolbar__blockFunctions__expand}><img src={require('../../images/arrow.svg').default} alt={'ExpandButton'} /></button>
                

                <button className={style.toolbar__blockFunctions__button}><img src={require('../../images/picture.svg').default} alt={'PictureButton'} /></button>
                <img className={style.toolbar__blockFunctions__backgroundButton} src={require('../../images/background.svg').default} alt={'BackgroundButton'} />
                <ul className={style.toolbar__blockFunctions__backgroundButton__arrow}>
                    <li><img src={require('../../images/arrow.svg').default} alt={'ExpandButton'} />
                        <ul>
                            <li className={style.toolbar__blockFunctions__backgroundButton__arrow__elem}>Изображение</li>
                            <li className={style.toolbar__blockFunctions__backgroundButton__arrow__elem}>
                                <input
                                    onChange={colorHandler}
                                    className={style.toolbar__blockFunctions__backgroundButton__arrow__elem__colorChooser}
                                    type='color'
                                    id='colorChooser'
                                    value={color}
                                />
                                <label htmlFor='colorChooser'>Цвет</label>
                            </li>
                        </ul>
                    </li>
                </ul>

                <img className={style.toolbar__blockFunctions__dividingLine} src={require('../../images/dividing-line.svg').default} alt={'DividingLine'} />

                <input type={"button"} value="Arial" className={style.toolbar__blockFunction__editFontFamily} alt={"EditFontFamily"}/>
                <button className={style.toolbar__blockFunctions__expand}><img src={require('../../images/arrow.svg').default} alt={'ExpandButton'} /></button>


                <button onClick={decrement} className={style.toolbar__blockFunctions__textSize_decrement}><img src={require('../../images/decrease-text.svg').default} alt={'DecreaseText'} /></button>
                <input type={"number"} value={inputSize} onChange={e => setInputSize(e.target.valueAsNumber)} className={style.toolbar__blockFunction__editFontSize} alt={"EditFontSize"}/>
                <button onClick={increment} className={style.toolbar__blockFunctions__textSize_increment}><img src={require('../../images/increase-text.svg').default} alt={'IncreaseText'} /></button>


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