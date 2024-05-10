import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return (
      <div className={styles.comment}>
         <Avatar
              hasBorder={false}
              src="https://avatars.githubusercontent.com/u/56198906?v=4" 
          />
          <div className={styles.commentBox}>
              <div className={styles.commentContent}>
                 <header>
                    <div className={styles.authorAndTime}>
                       <strong>Cordeiro Luis</strong>
                       <time title='09 de Maio às 02:o9h' datetime="2024-05-09">Cerca de 1h atrás</time>
                    </div>
                    <button title='Deletar comentário'>
                       <Trash size={20} />
                    </button>
                 </header>
                 <p>Muito bom Devon, parabéns!! 👏👏</p>
              </div>
            
             
             <footer>
                <button>
                  <ThumbsUp />
                  Aplaudir <span>20</span>
                </button>
             </footer>
          </div>

      </div>
    );
}