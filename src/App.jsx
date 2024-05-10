import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from '../src/App.module.css';
import './global.css';

export function App() {
  
  return (
    <div>
       <Header />
       <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
             author="Cordeiro Luis"
             content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta assumenda, eveniet quisquam quis dolorum sunt, iste eaque beatae, repudiandae cumque autem quaerat fugit explicabo provident ipsam delectus magni dicta velit!" 
          />
          <Post 
            author="Clementina Marta"
            content="Um novo post vem surgindo legal."
          />
        </main>
       </div> 
    </div>
  )
}



