import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
       <article className={styles.post}>
          <header>
             <div className={styles.author}>
             <Avatar
                src="https://avatars.githubusercontent.com/u/33294549?v=4" 
             />
                 <div className={styles.authorInfo}>
                    <strong>Pedro Massango</strong>
                    <span>Software Engineer & Flutter GDE</span>
                 </div>
             </div>

             <time title='08 de Maio às 00:10h' datetime="2024-09-05">Publicado há 1h</time>
          </header>
          <div className={styles.content}>

             <p> Fala galeraa 👋</p>

              <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>

              <p> <a href=""> 👉 jane.design/doctorcare</a></p>
           
              <p> 
                  <a href=""> #novoprojeto </a>{' '}
                  <a href=""> #nlw </a> 
                  <a href=""> #rocketseat </a> 
               </p> 
          </div>

          <form className={styles.commentForm}>
              <strong>Deixe seu feedback</strong>

              <textarea 
                 placeholder='Deixe um cometário'
              />

              <footer>
                 <button type='submit'>Publicar</button>
              </footer>
          </form>

          <div className={styles.commentList}>
             <Comment />
             <Comment />
             <Comment />
          </div>
       </article>
    );
}