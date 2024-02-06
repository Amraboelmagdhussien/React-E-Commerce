import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { chLoader } from "../store/action/loaderAction";
import Card from "react-bootstrap/Card";
import Loader from "../Components/loader";
import BtnsCo from "../Components/Btns";
import StarsRating from "../Components/rate";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../Components/footer";

export default function SpecficProd() {
  const loader = useSelector((state) => state.loader.onLoad);
  const dispatch = useDispatch();
  const [speProducts, setSpeProduct] = useState([]);
  const { prodId } = useParams();
  let sessionLogin = JSON.parse(sessionStorage.getItem("login") || "[]");

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${prodId}`)
      .then((res) => {
        setTimeout(() => {
          dispatch(chLoader(false));
        }, 2000);
        setSpeProduct(res.data);
      })
      .catch((rej) => {
        console.log("err");
      });
  }, []);

  console.log(speProducts);

  return (
    <>
      {loader ? (
        <>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Loader />
          </div>
        </>
      ) : (
        <>
          <div className="pt-3 container d-flex justify-content-center align-items-center gap-3 flex-column vh-100">
            <div>
              <h2>{speProducts.title}</h2>
              <p>{speProducts.category}</p>
              <Carousel fade>
                <Carousel.Item>
                  <Image
                    src={speProducts.images[0]}
                    width="300"
                    height="400"
                    rounded
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src={speProducts.images[1]}
                    width="300"
                    height="400"
                    rounded
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src={speProducts.images[2]}
                    width="300"
                    height="400"
                    rounded
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <p className="border-bottom  border-black">
              {speProducts.description}
            </p>
            <StarsRating rateSt={speProducts.rating} />
            <div className="pt-3 m-0 d-flex align-items-center gap-3">
              {speProducts.stock > 0 && (
                <p style={{ color: "green" }} className="m-0">
                  Stock: {speProducts.stock}
                </p>
              )}
              {speProducts.stock < 0 && (
                <p style={{ color: "green" }} className="m-0">
                  Stock: {speProducts.stock}
                </p>
              )}
              <p className="m-0">Price: {speProducts.price}$</p>
              <p className="m-0">Brand: {speProducts.brand}</p>
            </div>
            <div className="pt-3 m-0 d-flex align-items-center gap-3">
              {sessionLogin.length > 0 && (
                <i class="fa-regular fa-heart" style={{ color: "#FF0000" }}></i>
              )}
              {sessionLogin.length > 0 && (
                <BtnsCo btnText="Add to Cart" btnCo="danger" />
              )}
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
