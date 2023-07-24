import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, src }) { //valor true pra essa propredade

    return (
        <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar} //se tem borda e se não
        src={src} />
    );
}
