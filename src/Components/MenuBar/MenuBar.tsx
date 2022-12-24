import React, { useEffect, useState } from "react";
import style from './MenuBar.module.css';
import { createPresentation, renamePresentation } from "../../utils/functions";

type Props = {
    presentation: Presentation;
  };



export function MenuBar({ presentation }: Props) {
    let name= presentation.name
    const [namePresentation, setName] = useState(name);

    useEffect(() => {
        setName(name);
      }, [name]);

    const setTitle = () => {
        presentation = renamePresentation(presentation, namePresentation);
      };

    return (
        <div className={style.header}>
            <button onClick={e => window.location.reload()} className={style.header__icon}></button>
            <div className={style.header__input}>
                <input 
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.currentTarget.blur();
                      setTitle();
                    }
                  }}
                onFocus={(e) => {
                        e.currentTarget.select();
                      }}
                onChange={(e) => setName(e.target.value)}
                className={style.header__input__namePresentation} 
                value={namePresentation} />
            </div>
            <div className={style.header__action}>
                <button onClick={(e) => {{presentation = createPresentation()}; setName(name); setTitle()}} className={style.header__action__create}>Создать</button>
                <input type="button" value="Открыть" className={style.header__action__open}/>
                <button className={style.header__action__save}>Сохранить</button>
            </div>
        </div>
    );
}

export default MenuBar;