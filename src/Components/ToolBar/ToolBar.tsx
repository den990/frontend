import React from 'react';
import style from './ToolBar.module.css';

export function ToolBar() {
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
                <img className={style.toolbar__blockFunctions__dividingLine_left} src={require('../../images/dividing-line.svg').default} alt={'DividingLine'} />
                <button className={style.toolbar__blockFunctions__button}><img src={require('../../images/redo.svg').default} alt={'RedoButton'} /></button>
                <button className={style.toolbar__blockFunctions__button}><img src={require('../../images/undo.svg').default} alt={'UndoButton'} /></button>
                <button className={style.toolbar__blockFunctions__button}><img src={require('../../images/text.svg').default} alt={'TextButton'} /></button>
                <button className={style.toolbar__blockFunctions__button}><img src={require('../../images/primitive.svg').default} alt={'PrimitiveButton'} /></button>
                <button className={style.toolbar__blockFunctions__button}><img src={require('../../images/picture.svg').default} alt={'PictureButton'} /></button>
                <img className={style.toolbar__blockFunctions__dividingLine_right} src={require('../../images/dividing-line.svg').default} alt={'DividingLine'} />
                <button className={style.toolbar__blockFunctions__button}><img src={require('../../images/background.svg').default} alt={'BackgroundButton'} /></button>
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