import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useBreadcrumbUpdater } from "../../hooks/useBreadcrumbUpdater";
import { useGetQueryItems } from "./../../hooks/react-query/useGetQueryItems";
import Skeleton from "../Skeleton/Skeleton";
import "./SearchResult.scss";

function SearchResults() {
  const [query, setQuery] = useState(undefined);
  const { data, isLoading } = useGetQueryItems(query);
  const location = useLocation();
  useBreadcrumbUpdater(data?.categories);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("search");

    if (query) {
      setQuery(query);
    }
  }, [data?.items, location.search]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <Skeleton width="60vw" height="100vh" />
      </div>
    );
  }

  const title = query
    ? `Resultados para "${query}" - Mercado Livre`
    : "Resultados da busca - Mercado Livre";
  const description = data?.items
    ? `Encontre os melhores resultados para "${query}" no Mercado Livre.`
    : "Nenhum resultado encontrado.";

  return (
    <div className="search-results">
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={query ? `${query}, compra, busca` : "compra, busca"}
        />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={window?.location?.href} />
      </Helmet>
      <div className="results">
        {data?.items ? (
          data?.items.map((item) => (
            <div className="result-item" key={item.id}>
              <Link to={`/items/${item.id}`} className="item-link">
                <figure className="item-image-container">
                  <img
                    src={item.picture}
                    alt={item.title}
                    className="item-image"
                  />
                </figure>
                <div className="item-info">
                  <p className="item-price">
                    {item.price.currency} {item.price.amount},
                    {item.price.decimals}
                  </p>
                  <h2 className="item-title">{item.title}</h2>
                  {item.free_shipping && (
                    <span className="free-shipping">Frete grátis</span>
                  )}
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
