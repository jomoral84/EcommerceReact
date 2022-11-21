import React from "react";


const Home = () => {
  return (
    <>
      <div>
        <h2>Mejores Productos</h2>
        <p>Descripcion</p>
      </div>
      <div>{["Product1, Prodcut2"].map((product) => product)}</div>
    </>
  );
};

export default Home;
