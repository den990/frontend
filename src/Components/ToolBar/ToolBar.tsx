import React from 'react';
import {useState} from 'react';
import style from './ToolBar.module.css';
import {
    addBlockHandler,
    addSlideHandler,
    editSlideBackgroundHandler,
    removeSlideHandler,
} from "../../stateManager/stateManagerFunctions";
import {defaultText, defaultTextType} from "../../utils/consts";

export function ToolBar(Props:{ presentation: Presentation }) {

    const [inputSize, setInputSize] = useState(defaultText.fontSize);
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
        editSlideBackgroundHandler(Props.presentation.selectedSlides[0].slideIndex, color, 'color')
    }

    const fileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileInput = event.target.value;
        setColor(fileInput);
        editSlideBackgroundHandler(Props.presentation.selectedSlides[0].slideIndex, fileInput, 'picture');
    }

    return (
        <div className={style.toolbar}>
            <div className={style.toolbar__slideButtons}>
                <button 
                    onClick={addSlideHandler} 
                    className={style.toolbar__slideButtons__addButton}>
                    <img 
                        src={require('../../images/add-slide.svg').default} 
                        alt={'Добавить слайд'} 
                    />
                    <span 
                        className={style.toolbar__slideButtons__addButton__text}>Добавить слайд
                    </span>
                </button>
                <button 
                    onClick={() => removeSlideHandler(Props.presentation.selectedSlides)} 
                    className={style.toolbar__slideButtons__deleteButton}>
                    <img 
                        src={require('../../images/delete-slide.svg').default} 
                        alt={'Удалить слайд'} 
                    />
                </button>
            </div>
            <div className={style.toolbar__blockFunctions}>
                <img 
                    className={style.toolbar__blockFunctions__dividingLine} 
                    src={require('../../images/dividing-line.svg').default} 
                    alt={'Линия разделения'} 
                />
                <button 
                    className={style.toolbar__blockFunctions__button}>
                    <img 
                        src={require('../../images/redo.svg').default} 
                        alt={'Отмена'}
                    />
                </button>
                <button 
                    className={style.toolbar__blockFunctions__button}>
                    <img 
                        src={require('../../images/undo.svg').default} 
                        alt={'Вперёд'} 
                    />
                </button>
                <button 
                    onClick={() => addBlockHandler(Props.presentation.selectedSlides[0].slideIndex, defaultTextType)} 
                    className={style.toolbar__blockFunctions__button}>
                    <img 
                        src={require('../../images/text.svg').default} 
                        alt={'Добавить текст'} 
                    />
                </button>
                <button 
                    className={style.toolbar__blockFunctions__primitiveButton}>
                    <img 
                        src={require('../../images/primitive.svg').default} 
                        alt={'Добавить примитив'} 
                    />
                </button>
                <ul className={style.toolbar__blockFunctions__primitiveButton__arrow}>
                    <li><img src={require('../../images/arrow.svg').default} alt={'Развернуть'} />
                        <ul>
                            <li className={style.toolbar__blockFunctions__primitiveButton__arrow__elem}>
                                <span>Треугольник</span>
                            </li>
                            <li className={style.toolbar__blockFunctions__primitiveButton__arrow__elem}>
                                <span >Квадрат</span>
                            </li>
                            <li className={style.toolbar__blockFunctions__primitiveButton__arrow__elem}>
                                <span >Круг</span>
                            </li>
                        </ul>
                    </li>
                </ul>
                <button 
                    className={style.toolbar__blockFunctions__button}>
                    <img 
                        src={require('../../images/picture.svg').default} 
                        alt={'Добавить картинку'} 
                    />
                </button>
                <img 
                    className={style.toolbar__blockFunctions__backgroundButton} 
                    src={require('../../images/background.svg').default} 
                    alt={'Изменить фон'} 
                />
                <ul className={style.toolbar__blockFunctions__backgroundButton__arrow}>
                    <li><img src={require('../../images/arrow.svg').default} alt={'Развернуть'} />
                        <ul>
                            <li className={style.toolbar__blockFunctions__backgroundButton__arrow__elem}>
                                <input
                                    onChange={fileHandler}
                                    className={style.toolbar__blockFunctions__backgroundButton__arrow__elem__fileChooser}
                                    type='file'
                                    id='file-upload'
                                    accept='.jpg, .jpeg, .png'
                                />
                                <label htmlFor='file-upload'>Изображение</label>
                            </li>
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
                <img 
                    className={style.toolbar__blockFunctions__dividingLine} 
                    src={require('../../images/dividing-line.svg').default} 
                    alt={'Линия разделения'} 
                />
                <input 
                    type={"button"} 
                    value="Arial" 
                    className={style.toolbar__blockFunction__editFontFamily} 
                    alt={"Изменить шрифт"}
                />
                <button 
                    className={style.toolbar__blockFunctions__expand}>
                    <img 
                        src={require('../../images/arrow.svg').default} 
                        alt={'Развернуть'} 
                    />
                </button>
                <button 
                    onClick={decrement} 
                    className={style.toolbar__blockFunctions__textSize_decrement}>
                    <img 
                        src={require('../../images/decrease-text.svg').default} 
                        alt={'Уменьшить размер текста'} 
                    />
                </button>
                <input  
                    type={"number"} 
                    value={inputSize}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.currentTarget.blur();
                        }
                    }}  
                    onChange={e => setInputSize(e.target.valueAsNumber)} 
                    className={style.toolbar__blockFunction__editFontSize} 
                    alt={"Изменить размер текста"}
                />
                <button 
                    onClick={increment} 
                    className={style.toolbar__blockFunctions__textSize_increment}>
                    <img 
                        src={require('../../images/increase-text.svg').default} 
                        alt={'Увеличить размер текста'} 
                    />
                </button>
                <button 
                    className={style.toolbar__blockFunctions__textColor}>
                    <img 
                        src={require('../../images/text-color.svg').default} 
                        alt={'Изменить цвет текста'} 
                    />
                </button>
                <img 
                    className={style.toolbar__blockFunctions__dividingLine} 
                    src={require('../../images/dividing-line.svg').default} 
                    alt={'Линия разделения'} 
                />
                <button
                    className={style.toolbar__blockFunctions__primitiveColor}>
                    <img 
                        src={require('../../images/primitive-color-background.svg').default} 
                        alt={'Изменить цвет фона примитива'} 
                    />
                </button>
                <button   
                    className={style.toolbar__blockFunctions__primitiveColor}>
                    <img 
                        src={require('../../images/primitive-color-border.svg').default} 
                        alt={'Изменить цвет границ примитива'} 
                    />
                </button>
                <img 
                    className={style.toolbar__blockFunctions__dividingLine} 
                    src={require('../../images/dividing-line.svg').default} 
                    alt={'Линия разделения'} 
                />
            </div>
            <div className={style.toolbar__slideShow}>
                <button className={style.toolbar__slideShowButton}>
                    <img 
                        src={require('../../images/slide-show.svg').default} 
                        alt={'Слайд-шоу'} 
                    />
                    <span 
                        className={style.toolbar__slideShowButton__text}>Слайд-шоу
                    </span>
                </button>
            </div>
        </div>
    );
}

export default ToolBar;