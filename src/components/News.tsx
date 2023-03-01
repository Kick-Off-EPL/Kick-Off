import * as React from "react";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const News: any = ({ allNews }) => {
  allNews.articles.sort(function (a: any, b: any) {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });

  allNews = allNews.articles.slice(0);

  // console.log(allNews)
  return (
    <div>
      {allNews[0].title}
      <Carousel
        className="h-75 w-5/12"
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-1-px"
      >
        <figure>
          <img src={allNews[0].urlToImage} alt="image description" />
          <figcaption className="absolute bottom-6 px-4 text-lg text-white">
            <p>
              {allNews[0].title} - {allNews[0].source.name}
            </p>
          </figcaption>
        </figure>
        <figure>
          <img src={allNews[1].urlToImage} alt="image description" />
          <figcaption className=" absolute top-12 px-4 text-lg text-black">
            <p>
              {allNews[1].title} - {allNews[1].source.name}
            </p>
          </figcaption>
        </figure>
        <figure>
          <img src={allNews[2].urlToImage} alt="image description" />
          <figcaption className=" absolute px-4 text-lg text-white">
            <p>
              {allNews[2].title} - {allNews[2].source.name}
            </p>
          </figcaption>
        </figure>
        <figure>
          <img src={allNews[3].urlToImage} alt="image description" />
          <figcaption className=" absolutepx-4 text-lg text-white">
            <p>
              {allNews[3].title} - {allNews[3].source.name}
            </p>
          </figcaption>
        </figure>
      </Carousel>
      ;
    </div>
  );
};
export default News;
