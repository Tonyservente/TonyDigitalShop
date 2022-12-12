import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../utils/ProductsData";
import fetchData from "../utils/FetchData";
import Product from "./ItemList";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams(); 

  useEffect(() => {
    if(idCategory) {
    fetchData(2000, ProductsData.filter(item => item.categoryId == idCategory))
      .then((response) => setDatos(response))
      .catch((err) => console.log(err));
  } else { 
    fetchData(2000, ProductsData)
    .then((response) => setDatos(response))
    .catch((err) => console.log(err));
  }}, [idCategory]);

  return (
    <>
      {datos.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          title={item.title}
          stock={item.stock}
          price={item.price}
          thumbnail={item.thumbnail}
          description={item.description}
        />
      ))}
    </>
  );
};

export default ItemListContainer;