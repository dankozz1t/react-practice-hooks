export const ProductList = ({ products, onDelete })=>{
    const elements = products.map(({ name, price, description, id }) =>(
        <li key={id} >
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{description}</p>

            <button id={id} type="button" onClick={onDelete}>Delete</button>
        </li>))
    return (
        <ol>
            {elements}
        </ol>

    )
}
