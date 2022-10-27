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
                    {menu ? <><h3 className={styles.topLink}>Test</h3><h3>Test2</h3></> : null}
                    <a onClick={() => handleClick()}>
                        <img src="/pokeball.svg" className={styles.pokeball} /></a>
                </center>
            </div>

        </>
    )
}