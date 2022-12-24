import {
    FcMoneyTransfer,
    FcShop,
    FcOvertime,
    FcNumericalSorting12,
    FcCurrencyExchange,
  } from "react-icons/fc";
  
  const ProductDetail = ({ item }) => {
    return (
      <>
        <section className="detailMainContainer">
          <article className="detailCard">
            <h2 className="detailTitle">{item.title}</h2>
            <div className="detailContent">
              <div className="detailAvailability">
                <div className="detailTextDiv">
                  <p className="detailContentText">
                    <FcMoneyTransfer className="shopIcon" />{" "}
                    <span className="detailContentSpan">Precio Contado: </span>{" "}
                    <span className="detailPriceSimbol">$</span>
                    {item.price}
                  </p>
                </div>
                <div className="detailTextDiv">
                  <p className="detailContentText">
                    <FcCurrencyExchange className="shopIcon" />{" "}
                    <span className="detailContentSpan">Precio de Lista:</span>{" "}
                    <span className="detailPriceSimbol">$</span>
                    {item.priceList}
                  </p>
                </div>
                <div className="detailTextDiv">
                  <p className="detailContentText">
                    <FcNumericalSorting12 className="shopIcon" />{" "}
                    <span className="detailContentSpan">Stock:</span> {item.stock}
                  </p>
                </div>
                <div className="detailTextDiv">
                  <p className="detailContentText">
                    <FcOvertime className="shopIcon" />{" "}
                    <span className="detailContentSpan">Garantía:</span>{" "}
                    {item.warranty}
                  </p>
                </div>
                <div className="detailTextDiv">
                  <p className="detailContentText">
                    <FcShop className="shopIcon" />{" "}
                    <span className="detailContentSpan">Retiro:</span> ¡GRATIS!
                  </p>
                  <p className="detailContentTextShip">
                    
                  </p>
                </div>
                <div className="detailDescriptionDiv">
                  <h3 className="detailDescriptionTitle">
                    Descripción del{" "}
                    <span className="detailPriceSimbol"> Producto</span>
                  </h3>
                  <p className="detailContentText">{item.description}</p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </>
    );
  };
  
  export default ProductDetail;