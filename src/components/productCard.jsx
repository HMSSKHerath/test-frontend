import "./productCard.css"; 

export default function ProductCard(props)
{
    console.log(props);

    return(
        <div className="productCard">
            <h1>{props.name}</h1>
            <p>Price: {props.price}</p>
            <img className="productImage" src={props.image} alt={props.name}/>
            <button>Add to Cart</button>
        </div>
    );
} 