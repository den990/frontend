import React, { useEffect, useState } from "react";
import style from './MenuBar.module.css';

type Props = {
    name: string,
  };

export function MenuBar({ name }: Props) {
    const [namePresentation, setName] = useState(name);

    useEffect(() => {
        setName(name);
      }, [name]);


    return (
        <div className={style.header}>
            <div className={style.header__icon}></div>
            <div className={style.header__input}>
                <input 
                onFocus={(e) => {
                        e.currentTarget.select();
                      }}
                onChange={(e) => setName(e.target.value)}
                className={style.header__input__namePresentation} 
                value={namePresentation} />
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