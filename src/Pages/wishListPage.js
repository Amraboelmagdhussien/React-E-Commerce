import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Loader from "../Components/loader";
import { chLoader } from "../store/action/loaderAction";
import Footer from "../Components/footer";

export default function Favourite() {
  const items = useSelector((state) => state.favourite.fav);
  console.log(items);
  const dispatch = useDispatch();

  const loader = useSelector((state) => state.loader.onLoad);
  const handleClick = () => {
    dispatch(chLoader(true));
  };
  return (
    <>
      <div className="pt-3 d-flex container justify-content-center gap-3 flex-wrap vh-100">
        {items.map((prods) => (
          <Card key={prods.id} style={{ width: "20rem" }}>
            <Card.Img
              style={{ width: "100%", height: "180px" }}
              variant="top"
              src={prods.images[1]}
            />
            <Card.Body>
              <Card.Title>{prods.title}</Card.Title>
              <Card.Text>{prods.description}</Card.Text>
            </Card.Body>
            <div className="d-flex gap-3 p-3 flex-column">
              <Link
                to={`/prods/${prods.id}`}
                onClick={handleClick}
                className="link-1"
              >
                <p>View Details</p>
              </Link>
            </div>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  );
}
