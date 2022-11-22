import React from "react";
import { Footer, FooterBanner, HeroBanner, Product } from "../components";
import { client } from "../lib/client";

const Home = ({ productsData, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Mejores Productos</h2>
        <p>Auriculares Razer</p>
      </div>
      <div className="products-container">
        <div>{productsData?.map((product) => product.name)}</div>
      </div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const productsData = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { productsData, bannerData },
  };
};

export default Home;
