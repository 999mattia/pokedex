import styles from "../styles/Header.module.css"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        if (menu) {
            setMenu(false)
        } else {
            setMenu(true)
        }
    }

    return (
        <>
            <div className={menu ? styles.containerOpen : styles.container}>
                <center>
                    <Link href="/" ><h3 className={styles.topLink}>Home</h3></Link><Link href="/pokemon"><h3>All Pokemon</h3></Link><Link href="/contact"><h3>Impressum/Contact</h3></Link>
                    <a onClick={() => handleClick()}>
                        <img src="/pokeball.svg" className={styles.pokeball} /></a>
                </center>
            </div>

        </>

    )
}