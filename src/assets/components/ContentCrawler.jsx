import React, { useState } from "react";
import Icon from "@mui/material/Icon";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const ContentCrawler = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialItems = [
    {
      name: "John Doe",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Alice Johnson",
      rating: 3,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const nextItem = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialItems.length);
  };

  const prevItem = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonialItems.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<StarIcon key={i} />);
      } else {
        stars.push(<StarBorderIcon key={i} />);
      }
    }
    return stars;
  };

  return (
    <div>
      <h2>Testimonials</h2>
      <div>
        <p>{testimonialItems[activeIndex].text}</p>
        <p>- {testimonialItems[activeIndex].name}</p>
        <div>{renderStars(testimonialItems[activeIndex].rating)}</div>
      </div>
      <div>
        <button onClick={prevItem}>Previous</button>
        <button onClick={nextItem}>Next</button>
      </div>
    </div>
  );
};

export default ContentCrawler;
