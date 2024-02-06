import React from "react";

export default function StarsRating(props) {
  const { rateSt } = props;

  let showEmptyStars = (rateSt) => {
    let flooredStars = Math.floor(rateSt);
    let emptyStars = 5 - flooredStars;
    const starIcons = (
      <i class="fa-regular fa-star" style={{ color: "#FFD43B" }}></i>
    );
    let emptyStarsArray = Array.from({ length: emptyStars }, (_, index) => (
      <span key={`empty-star-${index}`}>{starIcons}</span>
    ));
    return emptyStarsArray;
  };

  let showStars = (rateSt) => {
    let flooredStars = Math.floor(rateSt);
    const starIcon = (
      <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
    );
    let starsArray = Array.from({ length: flooredStars }, (_, index) => (
      <span key={`filled-star-${index}`}>{starIcon}</span>
    ));
    return starsArray;
  };

  const emptyStarsArray = showEmptyStars(rateSt);
  const starsArray = showStars(rateSt);

  return (
    <div>
      {starsArray}
      {emptyStarsArray}
    </div>
  );
}
