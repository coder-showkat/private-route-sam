import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Card from "./Card";
import Spinner from "./Spinner";

const Order = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.com/walmart")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="bg-base-200">
      <div className="container mx-auto p-6 py-12">
        <h2 className="text-center font-semibold text-2xl mb-4">
          Hi, {user.displayName}
        </h2>
        <p className="max-w-md mx-auto px-2 mb-6 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          sed natus dolorum debitis
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
