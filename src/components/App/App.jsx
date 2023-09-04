import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import BasketPage from "../../pages/BasketPage/BasketPage";
import CategoriesPage from "../../pages/CategoriesPage/CategoriesPage";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import ProductDescriptionPage from "../../pages/ProductDescriptionPage/ProductDescriptionPage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import { asyncLoadCategoriesAction } from "../../store/asyncAction/categories";
import { asyncLoadProductsAction } from "../../store/asyncAction/products";

import "./index.css";

export default function App() {
const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(asyncLoadCategoriesAction);
    dispatch(asyncLoadProductsAction);
    // eslint-disable-next-line
  },[])
  return (
    <>
     
      <Routes>
        <Route element={<HomePage/>} path="/"/>
        <Route element={<CategoriesPage />} path="/categories" />
        <Route element={<BasketPage />} path="/cart" />
        <Route element={<NotFoundPage />} path="/*" />
        <Route element={<ProductsPage />} path="/products/all" />
        <Route element={<ProductsPage/>} path="/category/:category"/>
        <Route element={<ProductDescriptionPage/>} path="/product/:id"/>
        <Route element={<LoginPage/>} path="/login"/>
      </Routes>
    </>
  );
}
