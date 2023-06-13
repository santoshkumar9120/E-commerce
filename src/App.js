import { Routes, Route, useNavigate, createSearchParams } from "react-router-dom"

import  NavBar  from "../src/components/navbar/navar";
import { Products } from "../src/pages/products/products"
import { Product } from "../src/pages/product/product"
import { Cart } from "../src/pages/cart/cart"
import { NotFound } from "../src/pages/not-found/not-found"

import { useCart } from '../src/context/cart'

function App() {

  const navigate = useNavigate();
  const { cartItemCount } = useCart()

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
    <>
      <NavBar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;