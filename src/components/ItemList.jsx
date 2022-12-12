import { Link } from "react-router-dom";

const Product = ({ id, title, price, stock, thumbnail, description }) => {
  return (
    <>
      {
        <article className="productCard">
          <img
            src={thumbnail}
            alt="Imagen del producto"
            className="productImage"
          />
          <p className="productStock">stock: {stock}</p>
          <div className="productContent">
            <h3 className="productTitle">{title}</h3>
            <p className="productPrice">
              <span className="priceTag">Precio: </span> $ {price}
            </p>
          </div>
          <Link to={`/productDetail/${id}`}>
            <button type="" className="button">
              Ver Más
            </button>
          </Link>
        </article>
      }
    </>
  );
};

export default Product;
