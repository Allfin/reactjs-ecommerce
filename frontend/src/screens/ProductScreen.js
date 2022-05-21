import React from "react";
import { useParams } from "react-router-dom";

const ProductScreen = () => {
  let params = useParams();

  console.log(params);

  return <div>adsad</div>;
};

export default ProductScreen;
