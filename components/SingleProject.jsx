import * as React from 'react';
import { ScaleLoader } from 'react-spinners';
import { Link, RichText } from 'prismic-reactjs';
import Fade from 'react-reveal/Fade';
import SlideshowGallery from './SlideshowGallery';

class SingleProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isGalleryLarge: false, isCollapseActive: false };
    this.switchGallerySize = this.switchGallerySize.bind(this);
    this.switchCollapse = this.switchCollapse.bind(this);
  }

  switchGallerySize() {
    this.setState(prevState => ({
      isGalleryLarge: !prevState.isGalleryLarge,
    }));
  }

  switchCollapse() {
    this.setState(prevState => ({
      isCollapseActive: !prevState.isCollapseActive,
    }));
  }

  // SEO
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
    const { isGalleryLarge, isCollapseActive } = this.state;
    const project = content.data;
    let gradientBackground = {};
    let technologies = [];
    let titleColor = {};

    // COLORS & TECHNOLOGY TAGS
    if (project) {
      gradientBackground = {
        backgroundColor: `${project.back_grad_color_2}`,
        background: `linear-gradient(to right, ${project.back_grad_color_1}, ${project.back_grad_color_2})`,
      };
      titleColor = {
        color: `${project.title_color}`,
      };
      technologies = project.technologies.map(item => (
        <span key={item.technology} style={{ margin: '3px' }} className="tag is-dark">{item.technology}</span>
      ));
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
                {/* TECHNOLOGIES */}
                <div className="technologies-tags">
                  {technologies}
                </div>
                <div className="columns">
                  {/* GALLERY COLUMN */}
                  <div className={`column ${isGalleryLarge && 'is-three-fifths'}`}>
                    <div className="sticky-item">
                      {/* PROJECT TITLE */}
                      <Fade delay={700}>
                        <h4 className=" is-size-4 has-text-weight-bold has-text-right" style={titleColor}>{project.title[0].text}</h4>
                      </Fade>
                      {/* GALLLERY COMPONENT */}
                      <SlideshowGallery
                        galleryImages={project.gallery_images}
                      />
                      <Fade delay={600}>
                        {/* EXPAND BTN */}
                        <span className="size-switch-btn is-medium is-hidden-mobile"
                          onClick={() => this.switchGallerySize()}>
                          <i className="fas fa-expand fa-lg" />
                        </span>
                      </Fade>
                    </div>
                  </div>
                  {/* DESCRIPTION COLUMN */}
                  <div className="column content">
                    <Fade delay={500}>
                      {/* PRISMIC CMS */}
                      {RichText.render(project.description_overall)}
                    </Fade>
                    {/* DESCRIPTION COLLAPSE CONTAINER */}
                    <div className={`content-collapse ${isCollapseActive ? 'content-collapse-active' : ''}`}>
                      {/* PRISMIC CMS */}
                      <Fade delay={150}>
                        {RichText.render(project.description_collapse)}
                      </Fade>
                    </div>
                    {/* DESCRIPTION COLLAPSE BUTTON */}
                    {RichText.asText(project.description_collapse) !== ''
                      ? (
                        <button
                          className="button has-text-weight-bold is-dark"
                          type="button"
                          onClick={() => this.switchCollapse()}
                        >
                          {isCollapseActive
                            ? 'Less'
                            : 'More'
                          }
                        </button>
                      ) : ''
                    }
                  </div>
                </div>
                <div className="project-links-container">
                  {/* GITHUB LINK */}
                  {Link.url(project.github_url) && (
                    <a
                      className="project-link-item project-link__github image"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={Link.url(project.github_url)}
                    >
                      <div className="octocat" />
                    </a>)
                  }
                  {/* HOST LINK */}
                  {Link.url(project.host_url) && (
                    <a
                      className="project-link-item project-link__host image"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={Link.url(project.host_url)}
                    >
                      <i className="fas fa-external-link-alt fa-2x" />
                    </a>)
                  }
                </div>
              </div>
              {/* SEO SCRIPT */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={this.addJSONLD(project, content)}
              />
            </div>
          )
        }
        <style jsx>
          {`
          .content {
            position: relative;
          }
          .technologies-tags {
            position: absolute;
            cursor: default;
            bottom: 1rem;
            right: 1rem;
          }
          .size-switch-btn {
            position:absolute;
            top: 2rem;
            right: -.6rem;
            cursor: pointer;
            padding: .3rem;
            color: #d4d1d1;
          }
          .spinner-container {
            margin: 8rem 0;
          }
          .spinner {
            display: block;
            margin: 0 auto;
            border-color: red;
            text-align: center;
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
            -webkit-transition: max-height 400ms ease;
            transition: max-height 400ms ease;
          }
          .content-collapse-active {
            max-height: 100%;
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
          .project-links-container {
            position: absolute;
            z-index: 10;
            bottom: 4.6rem;
            right: .5rem;
            display: flex;
          }
          .project-link-item {
            margin-right: 15px;
          }
          .project-link__host {
            color: #888888;
            -webkit-transition: all .3s ease-in-out;
            transition: all .3s ease-in-out;
          }
          .project-link__host:hover {
            color: #363636;
            -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
          }
          .octocat {
            background: url('../static/github.png');
            background-size: contain;
            position:relative;
            z-index: 10;
            width:33px;
            height:33px;
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
            .technologies-tags {
              bottom:.3rem;
              right:.3rem;
              margin-left:.3rem;
            }
            .project-links-container {
              right:0;
            }

          }
        `}
        </style>
      </React.Fragment>
    );
  }
}
export default SingleProject;
