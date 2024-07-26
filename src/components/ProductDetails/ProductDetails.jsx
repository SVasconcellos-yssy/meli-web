import React from "react";
import { useParams } from "react-router-dom";
import { useBreadcrumbUpdater } from "../../hooks/useBreadcrumbUpdater";
import { useGetCategory } from "../../hooks/react-query/useGetCategory";
import { useGetItemDetail } from "./../../hooks/react-query/useGetItemDetail";
import "./ProductDetail.scss";

function ProductDetail() {
  const { id } = useParams();
  const { data } = useGetItemDetail(id);
  const { data: category } = useGetCategory(id);
  useBreadcrumbUpdater(category);

  
  return (
    <div className="product-detail">
      {data?.item ? (
        <>
          <div className="containercard">
            <div className="main-info-container">
              <div className="container-image">
                <img src={data?.item?.picture} alt={data?.item?.title} />
              </div>
              <div className="details-container">
                <div className="info-container">
                  <h2>{data?.item?.title}</h2>
                  <h1>
                    {data?.item?.price.currency} {data?.item?.price.amount},
                    {data?.item?.price.decimals}
                  </h1>
                  <button className="comprar-button">Comprar</button>
                </div>
              </div>
            </div>
            <div className="main-container-description">
              <div className="description-container">
                <h3>Descripción del Producto</h3>
                <p>{data?.item?.description}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default ProductDetail;
