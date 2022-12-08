import React from 'react';
import style from './WorkSpace.module.css';

export function WorkSpace()
{
    return (
        <div className={style.workspace__background}>
            <div className={style.workspace__content}>
                <span className={style.workspace__content__text}>Тестовый текст</span>
                <div className={style.workspace__content__square}></div>
                <div className={style.workspace__content__triangle}></div>
                <div className={style.workspace__content__circle}></div>
                <img className={style.workspace__content__picture} src={require('../../images/priora.jpeg')} alt={'Priora'} />
            </div>
        </div>
    );
}

export default WorkSpace;