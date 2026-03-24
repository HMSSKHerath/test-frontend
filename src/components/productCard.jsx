import "./productCard.css"; 

export default function ProductCard(props)
{
    console.log(props);

    return(
        <div className="product-card">
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <img src={props.image} alt={"Product Image"}/>
        </div>
    );
} 