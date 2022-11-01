import styles from "../styles/Loader.module.css"

export default function Loader() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>

                <img alt="pokeball" src="/pokeball.svg" className={styles.pokeball} />

            </div>
        </div >
    )
}