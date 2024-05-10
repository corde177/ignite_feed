import { PencilLine } from 'phosphor-react';
import styles from '../components/Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
              className={styles.cover} 
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=800&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           />
           <div className={styles.profile}>
               <Avatar src="https://avatars.githubusercontent.com/u/33294549?v=4" />
               <strong>Pedro Massango</strong>
               <span>Software Engineer & Flutter GDE</span>
           </div>

           <footer>
            <a href="#">
               <PencilLine  size={20}/> 
               Editar seu perfil 
            </a>
           </footer>
        </aside>
    );
}