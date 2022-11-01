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
            <div className={styles.container}>
                <center>
                    {menu && <div>
                        <Link href="/" ><h3 className={styles.topLink}>Home</h3></Link><Link href="/pokemon"><h3>All Pokemon</h3></Link><Link href="/contact"><h3>Impressum/Contact</h3></Link>
                    </div>}
                    <a onClick={() => handleClick()}>
                        <img alt="Pokeball" src="/pokeball.svg" className={styles.pokeball} /></a>
                </center>
            </div>

        </>

    )
}