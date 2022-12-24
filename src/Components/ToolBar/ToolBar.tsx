import React, { ReactNode } from 'react';
import {useState} from 'react';
import style from './ToolBar.module.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {ButtonBase, experimentalStyled, styled} from '@mui/material';
import * as events from "events";



const optionsFonts = [
    'None',
    'Times New Roman',
    'Calibri',
    'Arial',
    'Callisto',
    'Dione',
];

export function ToolBar() {


    const [inputSize, setInputSize] = useState(36);
    function increment(){
        setInputSize(inputSize + 1)
    }

    function decrement(){
        if (inputSize > 1)
        {
            setInputSize(inputSize - 1)
        }
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
    const open1 = Boolean(anchorEl1);
    const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };

    const [value, setValue] = React.useState<string | null>(optionsFonts[0]);
    const [inputValue, setInputValue] = React.useState('');



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
                <img className={style.toolbar__blockFunctions__dividingLine} src={require('../../images/dividing-line.svg').default} alt={'DividingLine'} />

                <button className={style.toolbar__blockFunctions__button}><img src={require('../../images/redo.svg').default} alt={'RedoButton'} /></button>
                <button className={style.toolbar__blockFunctions__button}><img src={require('../../images/undo.svg').default} alt={'UndoButton'} /></button>
                <button className={style.toolbar__blockFunctions__button}><img src={require('../../images/text.svg').default} alt={'TextButton'} /></button>



                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <img src={require('../../images/primitive.svg').default} alt={'ExpandButton'}/>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}

                >
                    <MenuItem onClick={handleClose}>Квадрат</MenuItem>
                    <MenuItem onClick={handleClose}>Треугольник</MenuItem>
                    <MenuItem onClick={handleClose}>Круг</MenuItem>
                </Menu>
                
                

                <button className={style.toolbar__blockFunctions__button}><img src={require('../../images/picture.svg').default} alt={'PictureButton'} /></button>
                <button className={style.toolbar__blockFunctions__backgroundButton}><img src={require('../../images/background.svg').default} alt={'BackgroundButton'} /></button>
                <button className={style.toolbar__blockFunctions__expand}><img src={require('../../images/arrow.svg').default} alt={'ExpandButton'} /></button>

                <img className={style.toolbar__blockFunctions__dividingLine} src={require('../../images/dividing-line.svg').default} alt={'DividingLine'} />

                <Autocomplete
                    value={value}
                    onChange={(event: any, newValue: string | null) => {
                        setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={optionsFonts}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Font" />}
                />


                <button onClick={decrement} className={style.toolbar__blockFunctions__textSize_decrement}><img src={require('../../images/decrease-text.svg').default} alt={'DecreaseText'} /></button>
                <input type={"number"} value={inputSize} onChange={e => setInputSize(e.target.valueAsNumber)} className={style.toolbar__blockFunction__editFontSize} alt={"EditFontSize"}/>
                <button onClick={increment} className={style.toolbar__blockFunctions__textSize_increment}><img src={require('../../images/increase-text.svg').default} alt={'IncreaseText'} /></button>


                <button className={style.toolbar__blockFunctions__textColor}><img src={require('../../images/text-color.svg').default} alt={'EditTextColor'} /></button>

                <img className={style.toolbar__blockFunctions__dividingLine} src={require('../../images/dividing-line.svg').default} alt={'DividingLine'} />

                <button className={style.toolbar__blockFunctions__primitiveColor}><img src={require('../../images/primitive-color-background.svg').default} alt={'EditPrimitiveColorBackground'} /></button>
                <button className={style.toolbar__blockFunctions__primitiveColor}><img src={require('../../images/primitive-color-border.svg').default} alt={'EditPrimitiveColorBorder'} /></button>

                <img className={style.toolbar__blockFunctions__dividingLine} src={require('../../images/dividing-line.svg').default} alt={'DividingLine'} />
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