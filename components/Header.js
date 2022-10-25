import styles from "../styles/Header.module.css"
import Link from "next/link"

export default function Header() {
    return (
        <div className={styles.container}>
            <center>
                <Link href="/">
                    <img src="/pokeball.svg" className={styles.pokeball} /></Link>
            </center>
        </div>
    )
}