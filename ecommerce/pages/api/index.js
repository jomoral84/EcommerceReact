import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <h2>Productos</h2>
        <p>Descripcion</p>
      </div>
      <div>{["Product1, Product2"].map((product) => product)}</div>
    </>
  );
};

export default Home;
