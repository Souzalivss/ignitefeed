import { format, formatDistanceToNow } from 'date-fns'; 
import { useState } from 'react';

import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {

    //o use state retorna um array com duas posições
    const [comments, setComments] = useState([
        1,
        2,
    ])

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true, //coloca 'há' no date
  }) //qual é a distancia do ddia do post ate agora
  
function handleCreateNewComment() {
event.preventDefault();
//imutabiliidade:
setComments([...comments, comments.length + 1]);  //add comentarios
}

  return (
<article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src={author.avatarUrl}  />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
                </time> 
        </header>

        <div className={styles.content}>
            {content.map(line => {
                if (line.type == 'paragraph') {
                    return <p>{line.content}</p>;
                } else if (line.type == 'link') {
                    return <p><a href="#">{line.content}</a></p>
                }
            })}
        </div>

<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
    <strong>Deixe seu feedback</strong>
    <textarea
    placeholder="deixe um comentário"
     />
     
<footer>
<button type="submit">Publicar</button>
</footer>

</form>
        <div className={styles.commentList}>
            {comments.map(comment => {
                return <Comment />
            })}
        </div>
</article>   
 )
}