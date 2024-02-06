// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Form from "react-bootstrap/Form";
// import Card from "react-bootstrap/Card";
// import BtnsCo from "../Components/Btns";
// import { useDispatch, useSelector } from "react-redux";
// import { chLoader } from "../store/action/loaderAction";
// import Loader from "../Components/loader";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import StarsRating from "../Components/rate";
// import "../Pages/product.css";
// import { addToFav } from "../store/action/action";
// import { addToCart } from "../store/action/AddToCartAction";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import SearchBar from "../Components/SearchBar";
// import Pagination from "react-bootstrap/Pagination";

// function ProductPage() {
//   const [products, setProduct] = useState([]);
//   const [cate, setCate] = useState([]);
//   const loader = useSelector((state) => state.loader.onLoad);
//   const dispatch = useDispatch();
//   let sessionLogin = JSON.parse(sessionStorage.getItem("login") || "[]");
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   let active = 2;
//   let items = [];
//   for (let number = 1; number <= 5; number++) {
//     items.push(
//       <Pagination.Item key={number} active={number === active}>
//         {number}
//       </Pagination.Item>
//     );
//   }

//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 8; // You can adjust this number as per your requirement

//   // Calculate indexes for slicing products array based on current page
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products?limit=100")
//       .then((res) => {
//         setTimeout(() => {
//           dispatch(chLoader(false));
//         }, 2000);
//         setProduct(res.data.products);
//       })
//       .catch((rej) => {
//         console.log("err");
//       });
//   }, []);

//   useEffect(() => {
//     axios
//       .get(`https://dummyjson.com/products/categories`)
//       .then((res) => {
//         setTimeout(() => {
//           dispatch(chLoader(false));
//         }, 2000);
//         setCate(res.data);
//       })
//       .catch((rej) => {
//         console.log("err");
//       });
//   }, []);

//   const handleClick = () => {
//     dispatch(chLoader(true));
//   };

//   const addtoFave = (products) => {
//     console.log(products);
//     dispatch(addToFav(products));
//   };

//   const addtoCarti = (products) => {
//     console.log(products);
//     dispatch(addToCart(products));
//   };
//   console.log(products);
//   console.log(cate);
//   return (
//     <>
//       {loader ? (
//         <>
//           <div className="d-flex justify-content-center align-items-center vh-100">
//             <Loader />
//           </div>
//         </>
//       ) : (
//         <>
//           <div className="container d-flex gap-3">
//             <BtnsCo btnText="Filter" btnCo="warning" btnAct={handleShow} />
//             <SearchBar />
//             <Offcanvas show={show} onHide={handleClose}>
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title>Categories</Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <div
//                   className="d-flex flex-column gap-2"
//                   style={{ width: "auto" }}
//                 >
//                   {cate.map((cates) => (
//                     <>
//                       <div key={cate}>
//                         <Link
//                           onClick={handleClick}
//                           to={`/nameC/${cates}`}
//                           className="link-1"
//                         >
//                           {cates}
//                         </Link>
//                       </div>
//                     </>
//                   ))}
//                 </div>
//               </Offcanvas.Body>
//             </Offcanvas>
//           </div>
//           <div className="d-flex container gap-3">
//             <div className="pt-3 d-flex container justify-content-center gap-3 flex-wrap">
//               {products.map((prods) => {
//                 return (
//                   <Card key={prods.id} style={{ width: "20rem" }}>
//                     <Card.Img
//                       style={{ width: "100%", height: "180px" }}
//                       variant="top"
//                       src={prods.images[1]}
//                     />
//                     <Card.Body>
//                       <Card.Title>{prods.title}</Card.Title>
//                       <Card.Text>{prods.description}</Card.Text>
//                     </Card.Body>
//                     <div className="d-flex gap-3 p-3 flex-column">
//                       {sessionLogin && sessionLogin.length > 0 && (
//                         <BtnsCo
//                           btnAct={() => addtoCarti(prods)}
//                           btnStyle="bg-black border-0"
//                           btnLogo="fa-solid fa-cart-shopping"
//                           btnText="Add To Cart"
//                         />
//                       )}
//                       <Link
//                         to={`/prods/${prods.id}`}
//                         onClick={handleClick}
//                         className="link-1"
//                       >
//                         {" "}
//                         <p>View Details</p>
//                       </Link>
//                       <div className="d-flex justify-content-center gap-3">
//                         {sessionLogin && sessionLogin.length > 0 && (
//                           <i
//                             onClick={() => addtoFave(prods)}
//                             class="fa-regular fa-heart"
//                             style={{ color: "#FF0000" }}
//                           ></i>
//                         )}
//                         <div>
//                           <StarsRating rateSt={prods.rating} />
//                         </div>
//                       </div>
//                     </div>
//                   </Card>
//                 );
//               })}
//               <Pagination>
//                 {Array.from({
//                   length: Math.ceil(products.length / productsPerPage),
//                 }).map((_, index) => (
//                   <Pagination.Item
//                     key={index + 1}
//                     active={index + 1 === currentPage}
//                     onClick={() => paginate(index + 1)}
//                   >
//                     {index + 1}
//                   </Pagination.Item>
//                 ))}
//               </Pagination>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }

// export default ProductPage;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import BtnsCo from "../Components/Btns";
import { useDispatch, useSelector } from "react-redux";
import { chLoader } from "../store/action/loaderAction";
import Loader from "../Components/loader";
import { Link } from "react-router-dom";
import StarsRating from "../Components/rate";
import "../Pages/product.css";
import { addToFav } from "../store/action/action";
import { addToCart } from "../store/action/AddToCartAction";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchBar from "../Components/SearchBar";
import Pagination from "react-bootstrap/Pagination";
import Footer from "../Components/footer";

function ProductPage() {
  const [products, setProduct] = useState([]);
  const [cate, setCate] = useState([]);
  const loader = useSelector((state) => state.loader.onLoad);
  const dispatch = useDispatch();
  let sessionLogin = JSON.parse(sessionStorage.getItem("login") || "[]");
  const [show, setShow] = useState(false);

  const [search, setSearch] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Array.isArray(products)
    ? products.slice(indexOfFirstProduct, indexOfLastProduct)
    : [];

  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((res) => {
        setTimeout(() => {
          dispatch(chLoader(false));
        }, 2000);
        setProduct(res.data.products);
      })
      .catch((rej) => {
        console.log("err");
      });
  }, []);

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

  // useEffect(() => {
  //   axios
  //     .get(`https://dummyjson.com/products/search?q=${search}`)
  //     .then((res) => {
  //       setTimeout(() => {
  //         dispatch(chLoader(false));
  //       }, 2000);
  //       setCate(res.data);
  //     })
  //     .catch((rej) => {
  //       console.log("err");
  //     });
  // }, []);

  const handleSearch = () => {
    dispatch(chLoader(true)); // Show loader while fetching search results

    axios
      .get(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => {
        setTimeout(() => {
          dispatch(chLoader(false)); // Hide loader when search results are loaded
        }, 2000);

        setProduct(res.data.products); // Assuming the array of products is in the 'products' property of the response
      })
      .catch((rej) => {
        console.log("err");
        dispatch(chLoader(false)); // Hide loader in case of an error
      });
  };

  const addtoFave = (product) => {
    console.log(product);
    dispatch(addToFav(product));
  };

  const handleClick = () => {
    dispatch(chLoader(true));
  };

  const addtoCarti = (product) => {
    console.log(product);
    dispatch(addToCart(product));
  };

  const getVal = (e) => {
    setSearch(e.target.value);
  };

  console.log(search);
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
          <div className="d-flex container gap-3">
            <div className="pt-3 d-flex container justify-content-center gap-3 flex-wrap">
              <div className="container justify-content-center d-flex gap-3">
                <BtnsCo btnText="Filter" btnCo="warning" btnAct={handleShow} />
                <SearchBar changeVal={getVal} />
                <BtnsCo
                  btnText="Search"
                  btnCo="primary"
                  btnAct={handleSearch}
                />
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
              {currentProducts.map((product) => (
                <Card key={product.id} style={{ width: "20rem" }}>
                  <Card.Img
                    style={{ width: "100%", height: "180px" }}
                    variant="top"
                    src={product.images[1]}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>
                  <div className="d-flex gap-3 p-3 flex-column">
                    {sessionLogin && sessionLogin.length > 0 && (
                      <BtnsCo
                        btnAct={() => addtoCarti(product)}
                        btnStyle="bg-black border-0"
                        btnLogo="fa-solid fa-cart-shopping"
                        btnText="Add To Cart"
                      />
                    )}
                    <Link
                      to={`/prods/${product.id}`}
                      onClick={handleClick}
                      className="link-1"
                    >
                      <p>View Details</p>
                    </Link>
                    <div className="d-flex justify-content-center gap-3">
                      {sessionLogin && sessionLogin.length > 0 && (
                        <i
                          onClick={() => addtoFave(product)}
                          className="fa-regular fa-heart"
                          style={{ color: "#FF0000" }}
                        ></i>
                      )}
                      <div>
                        <StarsRating rateSt={product.rating} />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              <div className="container">
                <Pagination className=" d-flex justify-content-center align-items-center flex-wrap">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <Pagination.Item
                      key={index + 1}
                      active={index + 1 === currentPage}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                </Pagination>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default ProductPage;
