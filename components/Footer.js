import styles from "../styles/Footer.module.css"
import Link from "next/link"

export default function Footer() {
    return (
        <div className={styles.container}>
            <center>
                <Link href="/contact">Contact and Impressum</Link>
            </center>
        </div>
    )
}