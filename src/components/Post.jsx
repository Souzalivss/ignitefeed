import styles from './Post.module.css';

export function Post() {
    return (
<article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/Souzalivss.png"  />
                <div className={styles.authorInfo}>
                    <strong>Lívia Souza</strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <time title="11 de julho de 2023" dateTime="2023-07-11">Publicado há 1 hora</time> 
        </header>

        <div className={styles.content}>
        Fala galeraa 👋

<p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

<p><a href="">jane.design/doctorcare</a></p>

<p><a href="">#novoprojeto #nlw #rocketseat</a></p>


        </div>
</article>   
 )
}