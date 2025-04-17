import { Header } from './components/Header';
import { Post } from './Post'
import "./global.css";

function App() {

  return (
    <>
      <Header/>
      <Post 
        author="Orlando Junior" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias eveniet possimus! Labore et atque veritatis consequuntur numquam quia fuga, deleniti enim vitae iure optio facere explicabo eveniet, cum nisi."
      />
      <Post
        author="Gabriel buzzi"
        content="Post muito bom!"
      />
    </>
  )
}



export default App
