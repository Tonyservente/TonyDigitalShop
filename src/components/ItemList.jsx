import { Link } from "react-router-dom";

const Product = ({ id, title, price, stock, thumbnail, description }) => {

  const agregarProducto = () => {

    //TODO: agregar el producto al array que permanece en el estado global
    //TODO: estudiar hooks y estados
    console.log('Quiero agregar este producto', id);
  }


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
            <button onClick={agregarProducto} type="" className="button">
              Agregar
            </button>
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
