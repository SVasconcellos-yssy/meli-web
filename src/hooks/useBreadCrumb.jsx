import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useBreadcrumbStore from "../store/useBreadCrumbStore";

const useBreadcrumb = () => {
  const location = useLocation();
  const { breadcrumb, productTitle, setBreadcrumb, setProductTitle, setSearchQuery , searchQuery} = useBreadcrumbStore();

  useEffect(() => {
    const pathnames = location.pathname.split('/').filter(x => x);
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('search');

    const breadcrumbItems = pathnames.map((value, index) => ({
      name: value,
      href: `/${pathnames.slice(0, index + 1).join('/')}${location.search ? `?${location.search}` : ''}`
    }));

    if (query) {
      setSearchQuery(query);
      breadcrumbItems.push({
        name: query,
        href: `${pathnames.length > 0 ? `/${pathnames[pathnames.length - 1]}` : ''}?search=${query}`
      });
    }

    if (productTitle) {
      breadcrumbItems.push({
        name: productTitle,
        href: location.pathname
      });
    }

    setBreadcrumb(breadcrumbItems);
  }, [location, productTitle, setBreadcrumb]);

  return { breadcrumb, setProductTitle, searchQuery };
};

export default useBreadcrumb;
