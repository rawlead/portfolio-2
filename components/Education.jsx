import React from 'react';
import Fade from 'react-reveal/Fade';

const Education = () => (

  <section className="wrapper" style={{ paddingBottom: '5rem' }}>
    <Fade delay={200} cascade>

      <h1 className="is-size-3 section-title section-title__dark">Education</h1>
      <div className="columns">
        <div className="column has-text-centered">
          <div className="content">
            <h3 className="is-uppercase">University of Social Sciences</h3>
            <h5 className="is-uppercase">
              <i className="fas fa-map-marker-alt" />
              &nbsp;Warsaw, Poland
            </h5>
            <p className="is-uppercase">Bachelor of Computer Science</p>
            <p>Graduated: June 2018</p>
          </div>
        </div>
        <div className="column has-text-centered">
          <div className="content">
            <h3 className="is-uppercase">Machine Building College</h3>
            <h5 className="is-uppercase">
              <i className="fas fa-map-marker-alt" />
              &nbsp;Sumy, Ukraine
            </h5>
            <p className="is-uppercase">Associate of Chemical Engineering</p>
            <p>Graduated: June 2014</p>
          </div>
        </div>
      </div>
    </Fade>
    <style jsx>
      {`
        .section-title {
          margin-bottom: 4rem;
        }
        .column {
        }
        .columns {
          max-width: 936px;
          margin-left: auto;
          margin-right: auto;
        }
        .wrapper {
          background-color: #fff;
          position: relative;
          padding-top: 2rem;
          box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);
          border-bottom: 1px solid hsl(0, 0%, 86%);
        }
      `}
    </style>
  </section>

);

export default Education;
