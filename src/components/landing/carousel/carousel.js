import classes from "./carousel.module.css";
import Avatar from "../../../asset/image/avatar.svg";
import { slideData } from "../../../constants/index.";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

const Carousel = () => {
  return (
    <div className={classes.main}>
      <div>
        <Splide
          hasTrack={false}
          options={{
            type: "slide",
            rewind: true,
            arrows: false,
            pauseOnHover: false,
            autoplay: true,
            interval: 3000,
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
          <SplideTrack className={classes.splide}>
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
        </Splide>
      </div>
    </div>
  );
};

export default Carousel;
