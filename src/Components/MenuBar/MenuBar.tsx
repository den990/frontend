import React, { useEffect, useState } from "react";
import style from './MenuBar.module.css';
import { renamePresentation} from "../../utils/functions";
import {createPresentationHandler, saveAsJsonHandler} from "../../stateManager/stateManagerFunctions";

export function MenuBar(Props: { presentation: Presentation }) {
    let name = Props.presentation.name
    const [namePresentation, setName] = useState(name);

    useEffect(() => {
        setName(name);
      }, [name]);

    const setTitle = () => {
        Props.presentation = renamePresentation(Props.presentation, namePresentation);
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
                <button onClick={createPresentationHandler} className={style.header__action__create}>Создать</button>
                <button onClick={(e) => console.log("Нужно сделать загрузку файла")} className={style.header__action__open}>Открыть</button>
                <button onClick={saveAsJsonHandler} className={style.header__action__save}>Сохранить</button>
            </div>
        </div>
    );
}

export default MenuBar;