export default function Pokemon({ name, type, img }) {

    return (
        <>
            <h2>{name}</h2>
            <h3>{type}</h3>
            <img src={img} />
        </>
    )

}