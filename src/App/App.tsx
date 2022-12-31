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
    const presentationSlideList: Slide[] = presentation.slideList;
    const presentationSelectedSlideList: Slide[]= presentation.selectedSlides;

    return (
      <div>
          <MenuBar presentation={presentation} />
          <ToolBar presentation={presentation}/>
          <div className={style.content}>
            <SlideList slideList={presentationSlideList} selectedSlides={presentationSelectedSlideList}/>
            <WorkSpace presentation={presentation} slideIndex={presentation.selectedSlides[0].slideIndex}/>
          </div>
      </div>
  );
}

export default App;
