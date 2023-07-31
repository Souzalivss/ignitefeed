import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css';
import { Avatar } from './Avatar';


export function Comment({content, onDeleteComment}) {
function handleDeleteComment() {
  onDeleteComment(content);
}

    return (
    <div className={styles.comment}> 
        <Avatar hasBorder={false} src="https://github.com/Souzalivss.png" alt="" />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Lívia Souza</strong>
                        <time title="11 de julho de 2023" dateTime="2023-07-11">Cerca de 1 hora atrás</time>

                    </div>
                    <button onClick={handleDeleteComment} title="deletar comentário">
                        <Trash size={24} /> 

                    </button>
                </header>
                <p>{content}</p>
            </div>
<footer>
    <button>
        < ThumbsUp />
        aplaudir <span>20</span>
    </button>
</footer>

        </div>

     </div>
     
    )
}