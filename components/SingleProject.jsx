import * as React from 'react';
import { ScaleLoader } from 'react-spinners';
import { Link, RichText } from 'prismic-reactjs';
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

  addJSONLD(project, info) {
    this.funcName = 'addJSONLD';
    return {
      __html: `{
      "@context": "http://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
      },
      "headline": "${project.og_title[0].text}",
      "image": [
        "${project.og_image.url}"
      ],
      "datePublished": "${info.first_publication_date}",
      "dateModified": "${info.first_publication_date}",
      "author": {
        "@type": "Person",
        "name": "Ivan Shyrai"
      },
      "publisher": {
        "@type": "Person",
        "name": "Ivan Shyrai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://prismic-io.s3.amazonaws.com/is-portfolio%2F26e26159-2cb3-49eb-8bdf-c468df8622c9_ivan_portfolio.jpg"
        }
      },
      "description": "${project.og_description[0].text}"
    }`,
    };
  }

  render() {
    const { content } = this.props;
    const project = content.data;
    let gradientBackground = {};
    let titleColor = {};

    // COLORS
    if (project) {
      gradientBackground = {
        backgroundColor: `${project.back_grad_color_2}`,
        background: `linear-gradient(to right, ${project.back_grad_color_1}, ${project.back_grad_color_2})`,
      };
      titleColor = {
        color: `${project.title_color}`,
      };
    }

    return (
      <React.Fragment>
        {!project
          ? (
            /* SPINNER IF PROJECT IS LOADING */
            <div className="spinner-container has-text-centered">
              <ScaleLoader
                className="spinner"
                sizeUnit="px"
                size={120}
                color="#4a4a4a"
              />
            </div>
          ) : (
            <div className="container-wrapper" style={gradientBackground}>
              <div className="container sticky-container has-background-white">
                {/* GITHUB LINK */}
                {Link.url(project.project_url) && (
                  <a
                    className="octocat-container image"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={Link.url(project.project_url)}
                  >
                    <div className="octocat" />
                  </a>
                )
                }
                <div className="columns">
                  {/* GALLERY COLUMN */}
                  <div className="column">
                    <div className="sticky-item">
                      {/* PROJECT TITLE */}
                      <Fade delay={700}>
                        <h4 className=" is-size-3 has-text-weight-bold has-text-right" style={titleColor}>{project.title[0].text}</h4>
                      </Fade>
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
                    <Fade delay={500}>
                      {/* PRISMIC CMS */}
                      {RichText.render(project.description_overall)}
                    </Fade>

                    {/* DESCRIPTION COLLAPSE CONTAINER */}
                    <div className="content-collapse">
                      {/* PRISMIC CMS */}
                      <Fade delay={150}>
                        {RichText.render(project.description_collapse)}
                      </Fade>
                    </div>
                    <input
                      className="button is-outlined has-text-weight-bold is-black"
                      type="button"
                      onClick={this.openCollapse.bind(this)}
                      value="More..."
                    />
                  </div>
                </div>
              </div>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={this.addJSONLD(project, content)}
              />
            </div>
          )
        }
        <style jsx>
          {`
          .spinner-container {
            margin: 8rem 0;
          }
          .spinner {
            display: block;
            margin: 0 auto;
            border-color: red;
            text-align: center;
          }
          .content {
            overflow: hidden;
          }
          .sticky-container {
              display: flex;
              justify-content: center;
              align-items: flex-start;
              box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);
              border: 1px solid hsl(0, 0%, 86%);
              padding: 2rem 2rem 4rem 2rem;
              max-width: 1152px;
              border-radius: 5px;
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
              box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);

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
              width:35px;
              height:35px;
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
            @media screen and (min-width: 770px) {
              .content {
                padding-left: 2rem;
              }
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
