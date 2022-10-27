import styles from "../styles/Pokemon.module.css"

export default function Pokemon({ name, type, img }) {

    let color;

    function setColor() {
        if (type == "grass") {
            color = "#65ba5c"
        } else if (type == "fire") {
            color = "#fe9c51"
        } else if (type == "water") {
            color = "#4c8fd5"
        } else if (type == "bug") {
            color = "#91be2c"
        } else if (type == "normal") {
            color = "#8f99a2"
        } else if (type == "poison") {
            color = "#ab69ca"
        } else if (type == "electric") {
            color = "#f4d03a"
        } else if (type == "ground") {
            color = "#d97746"
        } else if (type == "fairy") {
            color = "#ed90e8"
        } else if (type == "fighting") {
            color = "#ce3f6b"
        } else if (type == "psychic") {
            color = "#f97175"
        } else if (type == "rock") {
            color = "#c8b58a"
        } else if (type == "ghost") {
            color = "#516aab"
        } else if (type == "ice") {
            color = "#73cebe"
        } else if (type == "dragon") {
            color = "#086cc2"
        }
    }

    setColor()

    console.log(name, type, color)

    return (
        <div className={styles.container} style={{ borderColor: color }}>
            {name}
            < br />
            {type}
            < br />
            <img src={img} />
        </div >
    )

}