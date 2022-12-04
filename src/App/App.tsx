import './App.css';
import React from 'react';
import MenuBar from "../Components/MenuBar/MenuBar"
import ToolBar from "../Components/ToolBar/ToolBar";
import SlideList from "../Components/SlideList/SlideList";

function App() {
  return (
      <div>
          <MenuBar />
          <ToolBar />
          <SlideList />
      </div>
  );
}

export default App;
