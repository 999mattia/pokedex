import styles from "../styles/Footer.module.css"
import Link from "next/link"

export default function Footer() {
    return (
        <div className={styles.container}>
            <Link href="/contact">Contact and Impressum</Link>
        </div>
    )
}