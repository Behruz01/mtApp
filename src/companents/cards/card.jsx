const Card = (props) => {
  return (
    <>
      <div className="col-4 ">
        <div className="card" />
        <img src={props.product.image} className="card-img-top" alt="/" />
        <div className="card-body">
          <h5 className="card-title">{props.product.name}</h5>
          <p className="card-text">{props.product.description}</p>
          <a href="/" className="btn btn-primary">
            {props.product.price}
          </a>
        </div>
      </div>
    </>
  );
};
export default Card;
