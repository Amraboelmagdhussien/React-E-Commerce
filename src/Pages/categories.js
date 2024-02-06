import React, { useEffect, useState } from "react";
import Loader from "../Components/loader";
import { chLoader } from "../store/action/loaderAction";
import StarsRating from "../Components/rate";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Card from "react-bootstrap/Card";
import BtnsCo from "../Components/Btns";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { addToFav } from "../store/action/action";
import { addToCart } from "../store/action/AddToCartAction";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchBar from "../Components/SearchBar";
import Footer from "../Components/footer";

export default function CatePage() {
  const [cate, setCate] = useState([]);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [catego, setCatego] = useState([]);
  const loader = useSelector((state) => state.loader.onLoad);
  const { cateName } = useParams();
  let sessionLogin = JSON.parse(sessionStorage.getItem("login") || "[]");
  const getVal = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    dispatch(chLoader(true)); // Show loader while fetching search results

    axios
      .get(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => {
        setTimeout(() => {
          dispatch(chLoader(false)); // Hide loader when search results are loaded
        }, 2000);

        setCatego(res.data.products); // Assuming the array of products is in the 'products' property of the response
      })
      .catch((rej) => {
        console.log("err");
        dispatch(chLoader(false)); // Hide loader in case of an error
      });
  };

  const handleClick = () => {
    dispatch(chLoader(true));
  };
  const addtoFave = (products) => {
    console.log(products);
    dispatch(addToFav(products));
  };

  const addtoCarti = (products) => {
    console.log(products);
    dispatch(addToCart(products));
  };
  console.log(cateName);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/categories`)
      .then((res) => {
        setTimeout(() => {
          dispatch(chLoader(false));
        }, 2000);
        setCate(res.data);
      })
      .catch((rej) => {
        console.log("err");
      });
  }, []);

  useEffect(() => {
    dispatch(chLoader(true)); // Start loader when component mounts

    axios
      .get(`https://dummyjson.com/products/category/${cateName}`)
      .then((res) => {
        setCatego(res.data.products);
      })
      .catch((rej) => {
        console.log("err");
      })
      .finally(() => {
        dispatch(chLoader(false)); // Stop loader after API call is complete
      });
  }, [cateName, dispatch]);

  console.log(catego);
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
          <div className="pt-3 d-flex container justify-content-center gap-3 flex-wrap p-3">
            <div className="container justify-content-center d-flex gap-3">
              <BtnsCo btnText="Filter" btnCo="warning" btnAct={handleShow} />
              <SearchBar changeVal={getVal} />
              <BtnsCo btnText="Search" btnCo="primary" btnAct={handleSearch} />
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Categories</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div
                    className="d-flex flex-column gap-2"
                    style={{ width: "auto" }}
                  >
                    {cate.map((category) => (
                      <div key={category}>
                        <Link
                          onClick={handleClick}
                          to={`/nameC/${category}`}
                          className="link-1"
                        >
                          {category}
                        </Link>
                      </div>
                    ))}
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
            {catego.map((cates) => (
              <Card key={cates.id} style={{ width: "20rem" }}>
                <Card.Img
                  style={{ width: "100%", height: "180px" }}
                  variant="top"
                  src={cates.images[1]}
                />
                <Card.Body>
                  <Card.Title>{cates.title}</Card.Title>
                  <Card.Text>{cates.description}</Card.Text>
                </Card.Body>
                <div className="d-flex gap-3 p-3 flex-column">
                  {sessionLogin && sessionLogin.length > 0 && (
                    <BtnsCo
                      btnAct={() => addtoCarti(cates)}
                      btnStyle="bg-black border-0"
                      btnLogo="fa-solid fa-cart-shopping"
                      btnText="Add To Cart"
                    />
                  )}
                  <Link
                    to={`/prods/${cates.id}`}
                    onClick={handleClick}
                    className="link-1"
                  >
                    {" "}
                    <p>View Details</p>
                  </Link>
                  <div className="d-flex justify-content-center gap-3">
                    {sessionLogin && sessionLogin.length > 0 && (
                      <i
                        onClick={() => addtoFave(cates)}
                        className="fa-regular fa-heart"
                        style={{ color: "#FF0000" }}
                      ></i>
                    )}
                    <div>
                      <StarsRating rateSt={cates.rating} />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
