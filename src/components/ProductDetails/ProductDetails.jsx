import React from "react";
import { Helmet } from "react-helmet";
import Skeleton from "../Skeleton/Skeleton";
import { useParams } from "react-router-dom";
import { useBreadcrumbUpdater } from "../../hooks/useBreadcrumbUpdater";
import { useGetCategory } from "../../hooks/react-query/useGetCategory";
import { useGetItemDetail } from "./../../hooks/react-query/useGetItemDetail";
import "./ProductDetail.scss";

function ProductDetail() {
  const { id } = useParams();
  const { data, isLoading } = useGetItemDetail(id);
  const { data: category } = useGetCategory(id);
  useBreadcrumbUpdater(category);
  const title = data?.item
    ? `${data.item.title} - Mercado Livre`
    : "Carregando...";
  const description = data?.item
    ? `Compre ${data.item.title} por ${data.item.price.currency} ${data.item.price.amount},${data.item.price.decimals}.`
    : "Detalhes do produto em carregamento";

  const itemTitle = data?.item?.title || "";
  const categoryName = category?.name || "";

  if (isLoading) {
    return (
      <div className="loading-container">
        <Skeleton width="60vw" height="100vh" />
      </div>
    );
  }


  return (
    <div className="product-detail">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={itemTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={data?.item?.picture} />
        <meta property="og:url" content={window?.location?.href} />
        <meta property="og:type" content="product" />
        <meta name="keywords" content={`${itemTitle}, comprar ${itemTitle}, ${categoryName}`} />
      </Helmet>
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
