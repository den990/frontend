import React, { useEffect, useState } from "react";
import style from './MenuBar.module.css';
import {
    createPresentationHandler,
    openJsonHandler,
    renamePresentationHandler,
    saveAsJsonHandler
} from "../../stateManager/stateManagerFunctions";

export function MenuBar(Props: { presentation: Presentation }) {
    let name = Props.presentation.name
    const [namePresentation, setName] = useState(name);

    useEffect(() => {
        setName(name);
      }, [name]);

    const fileChangeHandle = (e: any) => {
        const file: any  = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            let result = reader.result
            if (typeof result === 'string') {
                openJsonHandler(result);
            }
        }
    }

    return (
        <div className={style.header}>
            <button onClick={e => window.location.reload()} className={style.header__icon}></button>
            <div className={style.header__input}>
                <input 
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.currentTarget.blur();
                      renamePresentationHandler(namePresentation);
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
                <button 
                  onClick={createPresentationHandler} 
                  className={style.header__action__create}>Создать
                </button>
                <label htmlFor='json-file-handler' className={style.header__action__open__label}>Открыть</label>
                <input
                    onChange={fileChangeHandle}
                    id='json-file-handler'
                    type='file'
                    accept='.txt'
                    className={style.header__action__open}
                />
                <button 
                  onClick={saveAsJsonHandler} 
                  className={style.header__action__save}>Сохранить
                </button>
            </div>
        </div>
    );
}

export default MenuBar;