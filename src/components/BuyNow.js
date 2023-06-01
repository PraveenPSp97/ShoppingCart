import React from "react";
import { useLocation } from "react-router";
import CartItem from "./CartItem";
import { Product } from "./Product";

const BuyNow = () => {
  const location = useLocation();

  return <CartItem product={location.state.product} />;
};

export default BuyNow;
