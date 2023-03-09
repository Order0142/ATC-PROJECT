import classes from "./carousel.module.css";
import Avatar from "../../../asset/image/avatar.svg";
import { slideData } from "../../../constants/index.";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { ReactComponent as RightArrow } from "../../../asset/image/rightArrow.svg";
import { ReactComponent as LeftArrow } from "../../../asset/image/leftArrow.svg";

const Carousel = () => {
  return (
    <div className={classes.main}>
      <div>
        <Splide
          hasTrack={false}
          options={{
            type: "slide",
            rewind: true,
            pagination: true,
            pauseOnHover: false,
            autoplay: false,
            //   mediaQuery: "max",
            //   breakpoints: {
            //     1024: {
            //       perPage: 1,
            //       pagination: false,
            //     },
            //     768: {
            //       destroy: true,
            //     },
            //   },
          }}
        >
          <SplideTrack className={classes.splide} aria-label="...">
            {slideData.map((item, i) => (
              <SplideSlide key={i}>
                <div className={classes.carousel}>
                  <div className={classes.slideContent}>
                    <h3>{item.heading}</h3>
                    <span></span>
                  </div>
                  <section>
                    <div>
                      <img src={item.image} alt="" />
                      <article>
                        <h4>{item.title}</h4>
                        <p>{item.subtitle}</p>
                      </article>
                    </div>
                    <p className={classes.article}>{item.article}</p>
                  </section>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              {" "}
              <LeftArrow />
            </button>
            <button className="splide__arrow splide__arrow--next">
              <RightArrow />
            </button>
          </div>
        </Splide>
      </div>
    </div>
  );
};

export default Carousel;
