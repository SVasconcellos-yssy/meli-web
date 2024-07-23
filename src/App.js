import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home/Home';
import Layout from './components/layout/Layout';
import SearchResultPage from './pages/SearchResult/SearchResult'
import ProductDetailPage from './pages/ProductDetail/ProductDetail';

function App() {
  return (
   <BrowserRouter>
   <Layout>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/items" element={<SearchResultPage />} />
    <Route path="/items/:id" element={<ProductDetailPage />} />
   </Routes>
   </Layout>
   </BrowserRouter>
  );
}

export default App
