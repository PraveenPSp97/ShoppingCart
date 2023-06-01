import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useProvider } from "./BuyProvider";

export const Product = ({ product }) => {
  const { handleAddToCart } = useProvider();
  return (
    <Card style={{ width: "18rem" }} className="mt-5">
      <Link to="/buyNow" state={{ product }}>
        <Card.Img
          variant="top"
          src={product.thumbnail}
          style={{ height: "250px" }}
          className="mt-2"
        />
      </Link>
      <Card.Body>
        <button
          className="button cartButton"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>

        <Link to="/buyNow" state={{ product }}>
          <button className="button">Buy Now</button>
        </Link>
      </Card.Body>
    </Card>
  );
};
