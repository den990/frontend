import './App.module.css';
import style from './App.module.css';
import React from 'react';
import MenuBar from "../Components/MenuBar/MenuBar"
import ToolBar from "../Components/ToolBar/ToolBar";
import SlideList from "../Components/SlideList/SlideList";
import WorkSpace from "../Components/WorkSpace/WorkSpace";
import { createPresentation } from '../utils/functions';

interface propsApp{
    editor: any
}
function App(props: propsApp) {
  let NewPresentation : Presentation = createPresentation();
  
  return (
      <div>
          <MenuBar presentation={NewPresentation} />
          <ToolBar />
          <div className={style.content}>
            <SlideList />
            <WorkSpace />
          </div>
      </div>
  );
}

export default App;
