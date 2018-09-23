import * as React from 'react';
import Fade from 'react-reveal/Fade';

class SlideshowGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slideIndex: 0 };
    this.plusSlides = this.plusSlides.bind(this);
    this.currentSlide = this.currentSlide.bind(this);
    this.createSlides = this.createSlides.bind(this);
    this.createPreviews = this.createPreviews.bind(this);
  }

  plusSlides(n) {
    const { slideIndex } = this.state;
    if (slideIndex + n > 5) {
      this.setState({ slideIndex: 0 });
      return;
    } if (slideIndex + n < 0) {
      this.setState({ slideIndex: 5 });
      return;
    }
    this.setState(prevState => ({
      slideIndex: prevState.slideIndex + n,
    }));
  }

  currentSlide(n) {
    this.setState({ slideIndex: n });
  }

  createSlides() {
    const { slideIndex } = this.state;
    const { images } = this.props;
    const slides = [];
    for (let i = 0; i < images.length; i += 1) {
      slides.push(
        <div key={i} className={`fade ${slideIndex === i ? 'swing-out-top-bck' : 'nonactive'}`}>
          <div className="numbertext has-background-white has-text-weight-bold">
            {i + 1}
            &nbsp;/ 6
          </div>
          <figure className="image is-3by2">
            <img src={images[i]} alt={`slide-${i + 1}`} />
          </figure>
          <style jsx>
            {`
              .active {
                  display:block;
              }
              .nonactive {
                  display: none;
              }
              .numbertext {
                  color: #000;
                  font-size: 1rem;
                  font-weight:bolder;
                  padding: 8px 12px;
                  position: absolute;
                  z-index: 20;
                  bottom: -20px;
                  left:20px;
                  background-color: hsl(0,0,86%);
                  transform: translate(-50%, -50%);
              }
              .swing-out-top-bck {
                  -webkit-animation: swing-out-top-bck 0.45s cubic-bezier(0.600, -0.280, 0.735, 0.045) reverse both;
                          animation: swing-out-top-bck 0.45s cubic-bezier(0.600, -0.280, 0.735, 0.045) reverse both;
                }
                @-webkit-keyframes swing-out-top-bck {
                  0% {
                    -webkit-transform: rotateX(0deg);
                            transform: rotateX(0deg);
                    -webkit-transform-origin: top;
                            transform-origin: top;
                    opacity: 1;
                  }
                  100% {
                    -webkit-transform: rotateX(-100deg);
                            transform: rotateX(-100deg);
                    -webkit-transform-origin: top;
                            transform-origin: top;
                    opacity: 0;
                  }
                }
                @keyframes swing-out-top-bck {
                  0% {
                    -webkit-transform: rotateX(0deg);
                            transform: rotateX(0deg);
                    -webkit-transform-origin: top;
                            transform-origin: top;
                    opacity: 1;
                  }
                  100% {
                    -webkit-transform: rotateX(-100deg);
                            transform: rotateX(-100deg);
                    -webkit-transform-origin: top;
                            transform-origin: top;
                    opacity: 0;
                  }
                }
            `}
          </style>
        </div>,
      );
    }
    return slides;
  }

  createPreviews() {
    const { images } = this.props;
    const { slideIndex } = this.state;
    const previews = [];
    for (let i = 0; i < images.length; i += 1) {
      previews.push(
        <div key={i} className="column">
          <figure className="image is-3by2">
            <img
              className={slideIndex === i ? 'preview-active' : 'preview-inactive'}
              src={images[i]}
              onClick={() => this.currentSlide(i)}
              role="presentation"
              alt={`preview-${i}`}
            />
          </figure>
          <style jsx>
            {`
            .preview-active {
                  cursor: pointer;
              }
              .preview-inactive {
                  opacity: .5;
                  -webkit-filter: grayscale(1);
                  filter: grayscale(1);
                  cursor: pointer;
              }
              .preview-inactive:hover {
                  -webkit-filter: grayscale(0);
                  filter: grayscale(0);
                    opacity: 1;
              }
              .column {
                  padding: 0.25rem;
              }
            `}
          </style>
        </div>,
      );
    }
    return previews;
  }

  render() {
    const { color } = this.props;
    const slides = this.createSlides();
    const previews = this.createPreviews();

    return (
      <div className="gallery-container">
        {/* SLIDES */}
        <div className="columns is-mobile" style={{ marginBottom: '1.5rem' }}>
          <div className="column" style={{ padding: 0 }}>
            {slides}
          </div>
        </div>
        {/* SLIDE PREVIEW ITEMS */}
        <Fade delay={1500}>
          <div className="columns is-variable is-1 is-mobile">
            {previews}
          </div>
        </Fade>

        <Fade delay={1700}>
          {/* PREVIOUS BUTTON */}
          <button className="prev button" style={{ backgroundColor: color }} type="button" onClick={() => this.plusSlides(-1)}>
            <i className="fas fa-angle-left" />
          </button>
          {/* NEXT BUTTON */}
          <button className="next button" style={{ backgroundColor: color }} type="button" onClick={() => this.plusSlides(1)}>
            <i className="fas fa-angle-right" />
          </button>
        </Fade>
        <style jsx>
          {`
            .gallery-container {
                position: relative;
                margin-top: 10px;
            }
            /* Fading animation */
            .fade {
              -webkit-animation-name: fade;
              -webkit-animation-duration: 1.5s;
              animation-name: fade;
              animation-duration: 1.5s;
            }
            @-webkit-keyframes fade {
              from {opacity: .4} 
              to {opacity: 1}
            }
            @keyframes fade {
              from {opacity: .4} 
              to {opacity: 1}
            }
            .prev,
            .next {
              cursor: pointer;
              position: absolute;
              bottom: -3.5rem;
              padding: 5px 15px;
              color: white;
              font-weight: bold;
              font-size: 20px;
              user-select: none;
              -webkit-user-select: none;
              z-index:15;
              opacity: .7;
            }
            .prev {
              left: 35%;
            }
            .next {
              right: 35%;
            }
            .prev:hover,
            .next:hover {
              opacity: .8;
              cursor: pointer;
            }
            @media screen and (max-width: 769px) {
              .numbertext, .prev, .next {
                display:none;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
export default SlideshowGallery;
