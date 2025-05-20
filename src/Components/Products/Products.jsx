import React, { useState, useEffect } from "react";
import {
  filterProductsByCategory,
  getProducts,
  getSingleProduct,
} from "../../firebase/firebase";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import ProductCard from "./ProductCard";
import "react-toastify/dist/ReactToastify.css";
import "./Products.css";

const Products = () => {
  const [singleProd, setSingleProd] = useState([]);
  const [myProds, setMyProds] = useState([]);
  const { Id } = useParams();
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (Id) {
          const singleProd = await getSingleProduct(Id);
          setSingleProd(singleProd);
          setMyProds([]);
          console.log("dentro del detail");
        } else if (categoryId) {
          const products = await filterProductsByCategory(categoryId);
          setMyProds(products);
          setSingleProd([]);
        } else {
          const allProducts = await getProducts();
          setMyProds(allProducts);
        }
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Banner />

      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          {myProds.length > 0 ? (
            myProds.map((prod) => (
              <div
                className="col-md-4 col-lg-3 d-flex justify-content-center"
                key={prod.id}
              >
                <ProductCard prod={prod} />
              </div>
            ))
          ) : (
            <h2 className="text-center text-muted">
              No hay productos para mostrar
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
