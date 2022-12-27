import './App.module.css';
import style from './App.module.css';
import React from 'react';
import MenuBar from "../Components/MenuBar/MenuBar"
import ToolBar from "../Components/ToolBar/ToolBar";
import SlideList from "../Components/SlideList/SlideList";
import WorkSpace from "../Components/WorkSpace/WorkSpace";
import {getState} from "../stateManager/stateManager";

function App() {

    const presentation: Presentation = getState();

    return (
      <div>
          <MenuBar presentation={presentation} />
          <ToolBar presentation={presentation}/>
          <div className={style.content}>
            <SlideList slideList={presentation.slideList} />
            <WorkSpace />
          </div>
      </div>
  );
}

export default App;
