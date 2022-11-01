import styles from "../styles/Pokemon.module.css"
import Link from "next/link";
import getColorByType from "../utils/colorType";

export default function Pokemon({ name, type, img }) {

    let color = getColorByType(type)

    return (
        <Link href={`/pokemon/${name}`}>
            <div className={styles.container} style={{ borderColor: color }}>
                {name}
                < br />
                {type}
                < br />
                <img img="Image of the pokemon" src={img} />
            </div >
        </Link>
    )

}