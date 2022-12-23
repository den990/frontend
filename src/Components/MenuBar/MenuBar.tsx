import React from "react";
import style from './MenuBar.module.css';


export function MenuBar() {
    return (
        <div className={style.header}>
            <div className={style.header__icon}></div>
            <div className={style.header__input}>
                <span className={style.header__input__text}>Название презентации</span>
            </div>
            <div className={style.header__action}>
                <div className={style.header__action__text}>Создать</div>
                <div className={style.header__action__text}>Открыть</div>
                <div className={style.header__action__text}>Сохранить</div>
            </div>
        </div>
    );
}

export default MenuBar;