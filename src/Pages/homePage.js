import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/loader";
import { chLoader } from "../store/action/loaderAction";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import BtnsCo from "../Components/Btns";
import Footer from "../Components/footer";

export default function HomePage() {
  const loader = useSelector((state) => state.loader.onLoad);
  const [products, setProduct] = useState([]);
  const dispatch = useDispatch();
  const [commentsApi, setComments] = useState({});

  // useEffect(() => {}, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=3")
      .then((res) => {
        setTimeout(() => {
          dispatch(chLoader(false));
        }, 2000);
        setProduct(res.data.products);
      })
      .catch((rej) => {
        console.log("err");
      });

    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/comments");
      return await this.setComments(res.data.comments);
    } catch (err) {
      console.log(err);
      console.log("Error");
    }
  };

  console.log();

  const handleClick = () => {
    dispatch(chLoader(true));
  };

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Image
            src="https://about.att.com/ecms/dam/snr/2022/september2022/storylevelbanner/iconic_STORY_LEVEL_BANNER_1600x483.jpg"
            fluid
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://i.imgur.com/dwc6PQV.jpg" fluid />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://i.imgur.com/KO6T9w4.jpg" fluid />
        </Carousel.Item>
      </Carousel>
      {loader ? (
        <>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Loader />
          </div>
        </>
      ) : (
        <>
          <div className="d-flex container gap-3">
            <div className="pt-3 d-flex container justify-content-center gap-3 flex-wrap">
              <div className="d-flex justify-content-center align-items-center">
                <h2>Products</h2>
              </div>
              {products.map((product) => (
                <Card key={product.id} style={{ width: "20rem" }}>
                  <Card.Img
                    style={{ width: "100%", height: "180px" }}
                    variant="top"
                    src={product.images[0]}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>
                  <div className="d-flex gap-3 p-3 flex-column">
                    <Link
                      to={`/prods/${product.id}`}
                      onClick={handleClick}
                      className="link-1"
                    >
                      <p>View Details</p>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <h1>Free Delivery WorldWide</h1>
          <div className="p-3">
            <Image
              src="https://cdn.vectorstock.com/i/preview-1x/02/73/delivery-and-logistics-banner-vector-31600273.jpg"
              fluid
            />
          </div>

          <h2>Reviews From Our Website</h2>
          <h3>{commentsApi[0].body}</h3>

          <h2>Choose From Varitey of Products</h2>
          <div class="lightbox p-3">
            <div class="row">
              <div class="col-lg-6">
                <img
                  src="https://cdn.vox-cdn.com/thumbor/s0V50B4OAK9K05tKM0IOEXcSFn0=/0x0:2450x1628/1400x788/filters:focal(1225x814:1226x815)/cdn.vox-cdn.com/uploads/chorus_asset/file/20081590/ps5.png"
                  data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
                  alt="Table Full of Spices"
                  className="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
                />
                <img
                  src="https://i.pinimg.com/736x/0f/46/92/0f46925d57edde7840cd2bbbf22bee43.jpg"
                  data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp"
                  alt="Coconut with Strawberries"
                  className="w-100 shadow-1-strong rounded"
                />
              </div>
              <div class="col-lg-6">
                <img
                  src="https://www.freemockupworld.com/wp-content/uploads/2022/07/Free-Top-Rounded-Corner-Stand-Banner-Mockup-01.jpg"
                  data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
                  alt="Dark Roast Iced Coffee"
                  className="w-100 h-100 shadow-1-strong rounded"
                />
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
