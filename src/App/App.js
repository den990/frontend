import './App.css';
import '../header.css';
import icon from '../image/icon.png';

function App() {
  return (
    <div className="header">
        <img src={icon} height="80px" width="80px" alt=""/>
        <div className="header__input">
            <span className="header__input-text">Новая презентация</span>
        </div>
        <div className="header__action">
            <div className="header__action-text">Создать</div>
            <div className="header__action-text">Открыть</div>
            <div className="header__action-text">Сохранить</div>
        </div>
    </div>
  );
}

export default App;
