import { Header } from './components/Header';
import { Post } from './Post'
import styles from "./App.module.css";
import { SideBar } from './components/SideBar';
import "./global.css"

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          <Post 
            author= "Orlando"
            content="Texto muito bom!"  
          />
        </main>
      </div>

    </div>
  )
}



export default App
