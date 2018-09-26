import * as React from 'react';
import { Link, RichText, Date } from 'prismic-reactjs';
import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';
import SlideshowGallery from './SlideshowGallery';

class SingleProject extends React.Component {
  openCollapse(e) {
    this.funcName = 'openCollapse';
    const content = e.target.previousElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      e.target.value = 'More...';
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
      e.target.value = 'Less...';
    }
  }

  render() {
    const { content } = this.props;
    const project = content.data;

    return (
      <React.Fragment>
        {/* // PROJECT WRAPPER */}
        {project ? (
          <div className="container-wrapper" style={{ backgroundColor: project.background_color }}>
            <div className="container sticky-container has-background-white">


              {/* GITHUB LINK */}
              <a className="octocat-container image" target="_blank" rel="noopener noreferrer" href={Link.url(project.project_url)}>
                <div className="octocat" />
              </a>

              <div className="columns is-variable is-8">
                {/* GALLERY COLUMN */}
                <div className="column is-three-fifths">
                  <div className="sticky-item">
                    <Parallax
                      className="custom-class"
                      offsetXMax={80}
                      offsetXMin={0}
                      tag="figure"
                    >
                      {/* PROJECT TITLE */}
                      <span className="content">{RichText.render(project.title)}</span>
                    </Parallax>

                    {/* GALLLERY COMPONENT */}
                    <SlideshowGallery
                      images={[
                        project.project_img_1.url,
                        project.project_img_2.url,
                        project.project_img_3.url,
                        project.project_img_4.url,
                        project.project_img_5.url,
                        project.project_img_6.url,
                      ]}
                    />
                  </div>
                </div>
                {/* DESCRIPTION COLUMN */}
                <div className="column is-two-fifths content">
                  <Fade bottom delay={500}>

                    {RichText.render(project.description_overall)}

                    {/* DESCRIPTION COLLAPSE CONTAINER */}
                    <div className="content-collapse">
                      {RichText.render(project.description_collapse)}
                    </div>
                    <input
                      className="button is-outlined has-text-weight-bold is-black"
                      type="button"
                      onClick={this.openCollapse.bind(this)}
                      value="More..."
                    />
                  </Fade>
                </div>
              </div>

            </div>
          </div>
        )
          : <h1>Poroject contentą</h1>
        }
        <style jsx>
          {`
          .sticky-container {
              display: flex;
              justify-content: center;
              align-items: flex-start;
              box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);
              border: 1px solid hsl(0, 0%, 86%);
              padding: 2rem 2rem 4rem 2rem;
              max-width: 1152px;
            }
            .content-collapse {
              margin-bottom:1rem;
              max-height: 0;
              overflow: hidden;
              -webkit-transition: max-height 300ms ease;
              transition: max-height 300ms ease;
            }
           
           
            .container-wrapper {
              padding-top: 9rem;
              margin-bottom: -3rem;
            }
            .sticky-item {
              position: -webkit-sticky;
              position: sticky;
              top: 15px;
              margin-top: -100px;
              z-index: 100 !important;
            }
            .octocat-container {
              position: absolute;
              z-index: 10;
              bottom:1rem;
              right: 1rem;
            }
            .octocat {
              background: url('../static/github.png');
              background-size: contain;
              position:relative;
              z-index: 10;
              width:45px;
              height:45px;
              transition: all .3s ease-in-out;
            }
            .octocat:hover {
              background: url('../static/octocat.png');
              background-size: contain;
              transform: scale(1.1);
              transform: rotate(-360deg);
              border-radius: 0%;
              cursor: pointer;
            }
            @media screen and (max-width: 769px) {
                .sticky-container {
                    padding: 2rem 1rem 3rem 1rem;
                }
            }
          `}
        </style>
      </React.Fragment>

    );
  }
}

export default SingleProject;