import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductDescriptionItem from "../../components/ProductDescriptionItem/ProductDescriptionItem";
import ProductItem from "../../components/ProductItem/ProductItem";
import s from "./style.module.css";

export default function ProductDescriptionPage() {
  const { id } = useParams();
  const product = useSelector(({ products }) => {
    return products.find((item) => item.id === +id);
  });

  const allProductsInCategory = useSelector(({products}) => {
    return products.filter((item) => item.category === product.category)
  });

  const fiveBestProducts = useSelector (({products}) => {
    const newArr = []
    for (let i = 0; i < products.length; i++) {
      if (products[i].rating > 4.8 && newArr.length < 5) {
        newArr.push(products[i])
      }
    }
    return newArr;
  } )
  
  return (
    <div className={s.page}>
      <Header styleComp='pages'/>
      {product === undefined ? (
        <p>Page is loading</p>
      ) : (
        <ProductDescriptionItem {...product} />
      )}

      <div className={s.offers}>
        <h2>CUSTOMERS ALSO LIKE</h2>
        <div className={s.container_offers}>
          {allProductsInCategory
          .sort((a,b) => b.rating - a.rating)
          .map(product => <ProductItem key = {product.id} {...product}/>)}
        </div>
      </div>
      <div className={s.recommends}>
        <h2>Recommended</h2>
        <div className={s.container_offers}>
          {fiveBestProducts
          .sort((a,b) => a.price - b.price)
          .map(product => <ProductItem key = {product.id} {...product}/>)}
        </div>
      </div>
         <Footer/>
    </div>
  );
}
