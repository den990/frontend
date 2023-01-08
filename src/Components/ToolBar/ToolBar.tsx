import React from 'react';
import {useState} from 'react';
import style from './ToolBar.module.css';
import {
    addBlockHandler,
    addSlideHandler,
    editFontColorHandler,
    editFontSizeHandler,
    editFontFamilyHandler,
    editSlideBackgroundHandler,
    removeSlideHandler, redoHandler, undoHandler,
} from "../../stateManager/stateManagerFunctions";
import {defaultText, defaultTextType} from "../../utils/consts";

export function ToolBar(Props:{ presentation: Presentation }) {

    const [inputSize, setInputSize] = useState(defaultText.fontSize);
    function increment(){
        setInputSize(inputSize + 1)
        editFontSizeHandler(Props.presentation.slideList[(Props.presentation.selectedSlides[0].slideIndex) - 1].slideIndex,
                            Props.presentation.slideList[(Props.presentation.selectedSlides[0].slideIndex) - 1].selectedBlockList[0].blockIndex, 
                            inputSize + 1)
    }

    function decrement(){
        if (inputSize > 1)
        {
            setInputSize(inputSize - 1)
            editFontSizeHandler(Props.presentation.slideList[(Props.presentation.selectedSlides[0].slideIndex) - 1].slideIndex,
                                Props.presentation.slideList[(Props.presentation.selectedSlides[0].slideIndex) - 1].selectedBlockList[0].blockIndex, 
                                inputSize - 1)
        }
    }

    function inputFontSize(){
        setInputSize(inputSize)
        editFontSizeHandler(Props.presentation.slideList[(Props.presentation.selectedSlides[0].slideIndex) - 1].slideIndex,
            Props.presentation.slideList[(Props.presentation.selectedSlides[0].slideIndex) - 1].selectedBlockList[0].blockIndex,
            inputSize - 1)
    }

    const [colorBackground, setColorBackground] = useState("fff");
    const colorBackgroundHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColorBackground(event.target.value);
        editSlideBackgroundHandler(Props.presentation.selectedSlides[0].slideIndex, colorBackground, 'color')
    }

    const [colorText, setColorText] = useState(defaultText.fontColor);
    const fontColorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColorText(event.target.value);
        editFontColorHandler(Props.presentation.slideList[(Props.presentation.selectedSlides[0].slideIndex) - 1].slideIndex,
                            Props.presentation.slideList[(Props.presentation.selectedSlides[0].slideIndex) - 1].selectedBlockList[0].blockIndex, 
                            colorText)
    }
    const [file, setFile] = useState('');
    const fileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            let url = URL.createObjectURL(event.target.files[0])
            setFile(url.toString())
            editSlideBackgroundHandler(Props.presentation.selectedSlides[0].slideIndex, url, 'picture' )
        }
    }
    const [image, setImage] = useState('');
    const imageBlockHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            let url = URL.createObjectURL(event.target.files[0])
            setImage(url.toString())
            const image: picture = {
                type: 'picture',
                url: url
            }
            const imageType: blockContent = {
                data: image
            }
            addBlockHandler(Props.presentation.selectedSlides[0].slideIndex, imageType)
        }
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
                    onClick={undoHandler}
                    className={style.toolbar__blockFunctions__button}>
                    <img 
                        src={require('../../images/undo.svg').default}
                        alt={'Отмена'}
                    />
                </button>
                <button
                    onClick={redoHandler}
                    className={style.toolbar__blockFunctions__button}>
                    <img 
                        src={require('../../images/redo.svg').default}
                        alt={'Вперёд'} 
                    />
                </button>
                <button 
                    onClick={() => {
                        addBlockHandler(Props.presentation.slideList[Props.presentation.selectedSlides[0].slideIndex - 1].slideIndex, defaultTextType);
                    }}
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
                <ul className={style.toolbar__blockFunctions__imageButton}>
                    <li><img src={require('../../images/picture.svg').default} alt={'Добавить картинку'}/>
                        <ul>
                            <li className={style.toolbar__blockFunctions__imageButton__elem}>
                                <input
                                    className={style.toolbar__blockFunctions__imageButton__elem__fileChooser}
                                    type='file'
                                    id='image-upload'
                                    accept='.jpg, .jpeg, .png'
                                    onChange={imageBlockHandler}
                                />
                                <label htmlFor='image-upload'>С компьютера</label>
                            </li>
                            <li className={style.toolbar__blockFunctions__imageButton__elem}>
                                <span>Ссылка</span>
                            </li>
                        </ul>
                    </li>
                </ul>
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
                                    onChange={colorBackgroundHandler}
                                    className={style.toolbar__blockFunctions__backgroundButton__arrow__elem__colorChooser}
                                    type='color'
                                    id='colorChooser'
                                    value={colorBackground}
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
                <select placeholder={"Выберите шрифт"} className={style.toolbar__blockFunction__editFontFamily}
                        onChange={(event) => {editFontFamilyHandler(Props.presentation.slideList[(Props.presentation.selectedSlides[0].slideIndex) - 1].slideIndex, Props.presentation.slideList[(Props.presentation.selectedSlides[0].slideIndex) - 1].selectedBlockList[0].blockIndex, event.target.value)}}>
                    <option value={"Arial"} className={style.toolbar__blockFunction__editFontFamily_Arial}>Arial</option>
                    <option value={"Times New Roman"} className={style.toolbar__blockFunction__editFontFamily_TimesNewRoman}>Times New Roman</option>
                    <option value={"Medium Montserrat"} className={style.toolbar__blockFunction__editFontFamily_Montserrat}>Montserrat </option>
                    <option value={"Roboto"} className={style.toolbar__blockFunction__editFontFamily_Roboto}>Roboto </option>
                    <option value={"Tahoma"} className={style.toolbar__blockFunction__editFontFamily_Tahoma}>Tahoma </option>
                </select>
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
                            inputFontSize();
                        };
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
                <input
                    type={"color"}
                    onChange={fontColorHandler}
                    value={colorText}
                    id="colorText"
                    className={style.toolbar__blockFunctions__colorTextChooser}
                />
                <label htmlFor='colorText'
                    className={style.toolbar__blockFunctions__textColor}>                    
                    <img 
                        src={require('../../images/text-color.svg').default} 
                        alt={'Изменить цвет текста'} 
                    />
                </label>
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