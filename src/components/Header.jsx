import styles from './Header.module.css' ; //styles pq é a estilização que eu quero
import IgniteLogo from '../assets/ignite-logo.svg';


export function Header() {
    return (
        <header className={styles.header}>
        <img src={IgniteLogo} alt="logotipo" />
        
        </header>
        //esse header é oq esta em header.module.css
    )
}