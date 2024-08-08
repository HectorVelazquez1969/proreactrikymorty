import "./Card.css";

function Card ({name,image} ){


    return(
        <div className="rounded bg-primary card p-2">
            <img src={image}/>
            <h3> {name}</h3>
            <button className="btn btn-success w-50 p-2">Know More...</button>
        </div>

    )
}

export default Card;
