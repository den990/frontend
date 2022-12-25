import React from 'react';
import style from './WorkSpace.module.css';

export function WorkSpace()
{
    return (
        <div className={style.workspace__background}>
            <div className={style.workspace__content}>
            </div>
        </div>
    );
}

export default WorkSpace;