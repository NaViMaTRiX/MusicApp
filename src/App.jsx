import MainPage from "./pages/MainPage/MainPage"
import style from "./global.module.scss"
import Playbar from "./component/Playbar/Playbar.jsx"

const App = () => 
  <div className={style.wrapper}>
    <MainPage />
    <Playbar />
  </div>

export default App
