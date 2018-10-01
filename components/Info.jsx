import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';

const SkillItems = ({ logos, headings }) => {
  const items = [];
  for (let i = 0; i < logos.length; i += 1) {
    items.push(
      <div key={i} className="level-item has-text-centered" style={{ maxWidth: '25%' }}>
        <div>
          <div className="title" style={{ marginBottom: 0 }}>
            <figure className="image is-32x32 " style={{ margin: 'auto auto 8px auto' }}>
              <img src={logos[i]} alt={`${headings[i]}-logo`} />
            </figure>
          </div>
          <p className="heading has-text-weight-bold has-text-grey-light" style={{ fontSize: '1rem', textTransform: 'none' }}>{headings[i]}</p>
        </div>
      </div>,
    );
  }
  return (
    <nav
      className="level is-mobile"
      style={{
        padding: '.6rem 0 0 0',
        borderTop: '1px solid hsl(0, 0%, 30%)',
        borderBottom: '1px solid hsl(0, 0%, 30%)',
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
      }}
    >
      {items}
    </nav>
  );
};

const Info = () => (
  <section className="section" id="info">
    <div className="main-content has-text-centered">
      {/* row main description */}
      <Parallax
        offsetYMax={50}
        offsetYMin={-50}
        tag="figure"
      >
        <Fade delay={200}>
          <div style={{ minHeight: '40vh' }}>
            <h1 className="is-size-4 section-title section-title__light">About</h1>
            <div className="columns">
              <div className="column content ">
                <h6 className="has-text-grey-light is-size-5">
                  Oracle Certified Java Developer specialised in
                   front-end and back-end development.
                </h6>
                <h6 className="has-text-grey-light is-size-5">Available for hire and open to any ideas of cooperation.</h6>
              </div>
            </div>
          </div>
        </Fade>
      </Parallax>
      <Fade delay={200} cascade>

        <div className="title-row">
          <h1 className="is-size-4 has-text-weight-bold section-title section-title__light">Technical Skills</h1>
        </div>

        {/* row first */}
        <div className="columns is-marginless">
          <h1 className="column is-size-5 has-text-weight-bold has-text-grey-light">
            HTML / CSS
          </h1>
        </div>
        <div className="columns is-gapless">
          <div className="column is-marginless">
            <SkillItems
              headings={[
                'JSX',
                'UI Design',
                'Materialize',
              ]}
              logos={[
                '../static/logos/react.svg',
                '../static/logos/ui.png',
                '../static/logos/materialize.png',
              ]}
            />
          </div>
          <div className="column is-marginless">
            <SkillItems
              headings={[
                'Bootstrap',
                'Bulma',
                'Sass',
              ]}
              logos={[
                '../static/logos/bootstrap.svg',
                '../static/logos/bulma.png',
                '../static/logos/sass.svg',
              ]}
            />
          </div>
        </div>

        {/* row second */}
        <div className="columns">
          <div className="column">
            <h1 className="skills-col-title is-size-5 has-text-grey-light">
              BACK-END
            </h1>
            <SkillItems
              headings={[
                'Java',
                'Spring',
                'MySQL',
                'Hibernate',
              ]}
              logos={[
                '../static/logos/java.svg',
                '../static/logos/spring.png',
                '../static/logos/mysql.svg',
                '../static/logos/hibernate.png',
              ]}
            />
          </div>

          <div className="column">
            <h1 className="skills-col-title is-size-5 has-text-grey-light">
              JAVASCRIPT
            </h1>
            <SkillItems
              headings={[
                'React',
                'Next',
                'Vue',
                'jQuery',
              ]}
              logos={[
                '../static/logos/react.svg',
                '../static/logos/next.png',
                '../static/logos/vuejs.svg',
                '../static/logos/jquery.svg',
              ]}
            />
          </div>
        </div>

        {/* row third */}
        <div className="columns is-marginless">
          <h1 className="column is-size-5 has-text-weight-bold has-text-grey-light">
            OTHER
          </h1>
        </div>

        <div className="columns is-gapless">
          <div className="column is-marginless">
            <SkillItems
              headings={[
                'GIT',
                'AWS',
                'Heroku',
              ]}
              logos={[
                '../static/logos/github.png',
                '../static/logos/amazonwebservices.svg',
                '../static/logos/heroku.svg',
              ]}
            />
          </div>
          <div className="column is-marginless">
            <SkillItems
              headings={[
                'IntelliJ',
                'Excel',
                'Photoshop',
                'Illustrator',
              ]}
              logos={[
                '../static/logos/intellij.svg',
                '../static/logos/excel.png',
                '../static/logos/photoshop.svg',
                '../static/logos/illustrator.svg',
              ]}
            />
          </div>
        </div>
      </Fade>
    </div>
    <style jsx>
      {`
        .main-content {
          padding: 2rem;
          position: relative; 
          max-width: 1152px;
          margin: 0 auto;
        }
        .skills-col-title {
          margin-bottom: .4rem;
          font-weight: bold;
          font-size: 1rem;
        }
        .column {
          margin-top: 1.3rem;
        }
        .columns {
          margin-bottom:0;
        }
        .title-row {
          margin-top:5rem;
        }
        .oracle {
          position: relative;
          z-index: 50;
        }
        @media screen and (max-width: 769px) {
          .section {
              padding: 1rem .25rem;
          }
          .section .column {
              padding: 0;
              margin: 2.5rem 0 0.1rem 0;
          }
        }
        @media screen and (max-width:1024px) {
          .main-content {
              padding: 1rem
          }
        }
    `}
    </style>
  </section>
);
export default Info;
