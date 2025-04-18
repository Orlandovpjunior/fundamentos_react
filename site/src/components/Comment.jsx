import { ThumbsUp, Trash } from 'phosphor-react';
import style from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({content, onDeleteComment}){

    function handleDeleteComment() {
        onDeleteComment(content); 
    }
    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time 
                                title='17 de abril as 11:12' 
                                dateTime='2025-04-17 11:12:30'
                            >Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Apaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}