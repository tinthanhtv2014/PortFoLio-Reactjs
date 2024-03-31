import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styleCarou.css";

import logo from "../image/carousel.jpg";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: logo,

    key: 1,
  },
  {
    src: logo,

    key: 2,
  },
  {
    src: logo,

    key: 3,
  },
];
class Carousel1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      animating: false,
    };
  }

  next = () => {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = (newIndex) => {
    if (this.state.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex, animating } = this.state;

    const slides = items.map((item) => (
      <CarouselItem
        onExiting={() => this.setState({ animating: true })}
        onExited={() => this.setState({ animating: false })}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{ width: "100%", height: "auto" }}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    ));

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        {...this.props}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Carousel1;
