import React from 'react';
import Fade from 'react-reveal/Fade';
// import { Parallax } from 'react-scroll-parallax';

const Education = () => (
  <div className="wrapper">
    {/* <Parallax
      offsetYMax={0}
      offsetYMin={0}
      tag="figure"
    > */}
    <Fade delay={200} cascade>
      <h1 className="is-size-4 section-title section-title__dark" id="education">Education</h1>
      <div className="columns">
        <div className="column has-text-centered">
          <div className="content">
            <h4 className="is-uppercase">University of Social Sciences</h4>
            <h6 className="is-uppercase">
              <i className="fas fa-map-marker-alt" />
              &nbsp;Warsaw, Poland
            </h6>
            <p className="is-uppercase">Bachelor of Computer Science</p>
            <p>Graduated: June 2018</p>
          </div>
        </div>
        <div className="column has-text-centered">
          <div className="content">
            <h4 className="is-uppercase">Machine Building College</h4>
            <h6 className="is-uppercase">
              <i className="fas fa-map-marker-alt" />
              &nbsp;Sumy, Ukraine
            </h6>
            <p className="is-uppercase">Associate of Chemical Engineering</p>
            <p>Graduated: June 2014</p>
          </div>
        </div>
      </div>
    </Fade>
    {/* </Parallax> */}

    <style jsx>
      {`
        .section-title {
          margin-bottom: 2rem;
        }
        .column {
          padding-bottom: 3.5rem;
        }
        .columns {
          max-width: 936px;
          margin-left: auto;
          margin-right: auto;
        }
        .wrapper {
          position: relative;
          padding-top: 1.5rem;
          border-bottom: 1px solid hsl(0, 0%, 86%);
          background-color: #f0e0e0
        }
        @media screen and (max-width: 736px) {
          .wrapper {
            margin: 0;
          }
        }
      `}
    </style>
  </div>

);

export default Education;
