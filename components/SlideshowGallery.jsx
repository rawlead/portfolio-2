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
    const { galleryImages } = this.props;
    const { slideIndex } = this.state;
    if (slideIndex + n > galleryImages.length - 1) {
      this.setState({ slideIndex: 0 });
      return;
    } if (slideIndex + n < 0) {
      this.setState({ slideIndex: galleryImages.length - 1 });
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
    const { galleryImages } = this.props;
    const slides = galleryImages.map((item, index) => (
      <div key={item.gallery_image.url} className={`fade ${slideIndex === index ? 'swing-out-top-bck' : 'nonactive'}`}>
        <div className="numbertext has-background-white-ter has-text-weight-bold">
          {/* E.G. 1/6 */}
          {index + 1}
          &nbsp;/&nbsp;
          {galleryImages.length}
        </div>
        {/* SLIDE IMAGE */}
        <figure className="image is-3by2">
          <img src={item.gallery_image.url} alt={`slide-${item + 1}`} />
        </figure>
        <style jsx>
          {`
            .active {
                display:block;
            }
            .nonactive {
                display: none;
            }
            .image {
            box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);
            }
            .image img {
            }
            .numbertext {
                color: #000;
                font-size: 1rem;
                font-weight:bolder;
                padding: 8px 12px;
                position: absolute;
                z-index: 30;
                bottom: -30px;
                left: 20px;
                transform: translate(-50%, -50%);
                border-radius: 5px;
                box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);
                cursor: default;
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
      </div>
    ));
    return slides;
  }

  createPreviews() {
    const { galleryImages } = this.props;
    const { slideIndex } = this.state;
    const previews = galleryImages.map((item, index) => (
      <div key={item.gallery_image.url} className="column">
        {/* PREVIEW IMAGE */}
        <figure className="image is-3by2">
          <img
            className={slideIndex === index ? 'preview-active' : 'preview-inactive'}
            src={item.gallery_image.url}
            onClick={() => this.currentSlide(index)}
            role="presentation"
            alt={`preview-${index}`}
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
            .image img {
              box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);
            }
            .column {
                padding: 0.25rem;
            }
          `}
        </style>
      </div>
    ));
    return previews;
  }

  render() {
    const slides = this.createSlides();
    const previews = this.createPreviews();

    return (
      <div className="gallery-container">
        {/* SLIDES */}
        <Fade delay={200}>
          <div className="columns is-mobile" style={{ marginBottom: '1.5rem' }}>
            <div className="column" style={{ padding: 0 }}>
              {slides}
            </div>
          </div>
        </Fade>
        {/* SLIDE PREVIEW ITEMS */}
        <Fade delay={200}>
          <div className="columns is-variable is-1 is-mobile">
            {previews}
          </div>
        </Fade>
        {/* GALLERY BUTTONS */}
        <div className="buttons-container">
          <Fade delay={200}>
            {/* PREVIOUS BUTTON */}
            <button className="prev button is-dark" type="button" onClick={() => this.plusSlides(-1)}>
              <i className="fas fa-angle-left" />
            </button>
            {/* NEXT BUTTON */}
            <button className="next button is-dark" type="button" onClick={() => this.plusSlides(1)}>
              <i className="fas fa-angle-right" />
            </button>
          </Fade>
        </div>
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
            .buttons-container {
              position: absolute;
              bottom: -4rem;
              user-select: none;
              -webkit-user-select: none;
              z-index:15;
              left: 50%;
              -webkit-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
            }
            .prev,
            .next {
              cursor: pointer;
              color: white;
              font-weight: bold;
              box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);
            }
            .prev {
              margin-right: .7rem;
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
