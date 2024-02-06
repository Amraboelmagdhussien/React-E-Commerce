import React from "react";
import Loader from "../Components/loader";
import { chLoader } from "../store/action/loaderAction";
import { useDispatch, useSelector } from "react-redux";

export default function CartPage() {
  const items = useSelector((state) => state.cart.cart);
  console.log(items);
  const dispatch = useDispatch();

  return (
    <>
      <section className="h-100">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p className="mb-0">
                    <span className="text-muted">Sort by:</span>{" "}
                    <a href="#!" className="text-body">
                      price <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>

              {items.map((item, index) => (
                <div key={index} className="card rounded-3 mb-4">
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        {/* Use the first image from the 'images' array as the product image */}
                        <img
                          src={item.images[0]}
                          className="img-fluid rounded-3"
                          alt={item.title}
                        />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{item.title}</p>
                        <p>
                          <span className="text-muted">Brand: </span>
                          {item.brand}
                        </p>
                        <p>
                          <span className="text-muted">Category: </span>
                          {item.category}
                        </p>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <input
                          id={`quantity-${index}`}
                          min="0"
                          name={`quantity-${index}`}
                          value={item.quantity}
                          type="number"
                          className="form-control form-control-sm"
                        />
                      </div>
                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">{`$${item.price.toFixed(2)}`}</h5>
                      </div>
                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-danger">
                          <i className="fas fa-trash fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="card mb-4">
                <div className="card-body p-4 d-flex flex-row">
                  <div className="form-outline flex-fill">
                    <input
                      type="text"
                      id="discountCode"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="discountCode">
                      Discount code
                    </label>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-warning btn-lg ms-3"
                  >
                    Apply
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-warning btn-block btn-lg"
                  >
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
