import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation  } from 'react-router-dom';
import useBreadcrumbStore from "../../store/useBreadCrumbStore";
import { useGetQueryItems } from './../../hooks/react-query/useGetQueryItems';
import "./SearchResult.scss"



function SearchResults() {

  const [query, setQuery] = useState("")
  const location = useLocation();
  

  const { setBreadcrumb, breadcrumb  } = useBreadcrumbStore(state => state);

  const {data, isLoading} = useGetQueryItems(query)



  useEffect(() => {

    if(data?.categories){
     
      setBreadcrumb(data.categories)

    }
  }, [data?.categories, setBreadcrumb]);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('search');

    if (query) {
      setQuery(query)
    }
  }, [data?.items, location.search]);


  return (
    <div className="search-results">
      <div className="results">
        {data?.items ? (
          data?.items.map(item => (
            <div className="result-item" key={item.id}>
              <Link to={`/items/${item.id}`} className="item-link">
                <img src={item.picture} alt={item.title} className="item-image" />
                <div className="item-info">
                  <p className="item-price">{item.price.currency} {item.price.amount},{item.price.decimals}</p>
                  <h2 className="item-title">{item.title}</h2>
                  {item.free_shipping && <span className="free-shipping">Frete grátis</span>}
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
