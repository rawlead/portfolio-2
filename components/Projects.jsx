import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';
import SlideshowGallery from './SlideshowGallery';

class Projects extends React.Component {
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
    return (
      <React.Fragment>
        <h1 className="is-size-3 sticky-title section-title section-title__dark">Projects</h1>
        {/* Project 1 */}
        <div className="container-wrapper">
          <div className="container sticky-container has-background-white">
            <a className="octocat-container image" target="_blank" rel="noopener noreferrer" href="https://github.com/rawlead/Photo-IS">
              <div className="octocat" />
            </a>
            <div className="columns is-variable is-8">
              <div className="column is-three-fifths">
                <div className="sticky-item">
                  <Parallax
                    className="custom-class"
                    offsetXMax={80}
                    offsetXMin={0}
                    tag="figure"
                  >
                    <h1 className="is-size-4 has-text-weight-bold">
                      Photo IS
                    </h1>
                  </Parallax>
                  <SlideshowGallery
                    images={[
                      '../static/p/portal-1.jpg',
                      '../static/p/portal-2.jpg',
                      '../static/p/portal-3.jpg',
                      '../static/p/portal-4.jpg',
                      '../static/p/portal-5.jpg',
                      '../static/p/portal-6.jpg',
                    ]}
                    color="#0a0a0a"
                  />
                </div>
              </div>
              <div className="column content">
                <Fade bottom delay={500}>
                  <h3>About this project</h3>
                  <h5>Photo IS is a web application for sharing photos.</h5>
                  <p>
                    Application built with Java and Spring Framework as back-end technologies,
                    with MySQL database for keeping user accounts, photos, comments and other stuff.
                  </p>
                  <p>Interface was built using Vue.js and Bootstrap libraries.</p>
                  <p>Communication with server is done through JSON format and REST API. </p>
                  <p>
                    Application lives on Amazon Web Services and
                     is using EB for deploying, S3 for storing image files and RDS as a
                     database provider.
                  </p>
                  <div className="content-collapse">
                    <h3>Functional</h3>
                    <h5>Users are able to:</h5>
                    <ul>
                      <li>Create a new account</li>
                      <li>Login into existing account</li>
                      <li>Upload profile image</li>
                      <li>Modify personal data</li>
                      <li>Upload photo with a short title, description and selecting a category</li>
                      <li>Explore photos uploaded by other users</li>
                      <li>Sort photos by category</li>
                      <li>Add or remove photos to or from collection of favorites</li>
                      <li>Comment photos and explore comments made by other users</li>
                      <li>Search for categories or other users</li>
                    </ul>
                    <h3>Technical Sheet</h3>
                    <h5>Technologies I got involved with while working on this project.</h5>
                    <ul>
                      <li>Java 8</li>
                      <li>Spring Framework - Security, MVC, Data</li>
                      <li>MySQL</li>
                      <li>Amazon Web Services - EB, S3, RDS</li>
                      <li>oAuth 2.0</li>
                      <li>HTML5 / CSS3 / Javascript ES6</li>
                      <li>UI/UX Architecture</li>
                      <li>UI/UX Animations</li>
                      <li>Vue.js</li>
                      <li>Bootstrap</li>
                    </ul>
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

        { /* PROJECT 2 */}
        <div className="container-wrapper wrapper-project2">
          <div className="container sticky-container has-background-white">
            <a className="octocat-container image" target="_blank" rel="noopener noreferrer" href="https://github.com/rawlead/Photo-IS">
              <div className="octocat" />
            </a>
            <div className="columns is-variable is-8">
              <div className="column is-three-fifths">
                <div className="sticky-item">
                  <Parallax
                    className="custom-class"
                    offsetXMax={80}
                    offsetXMin={0}
                    tag="figure"
                  >
                    <h1 className="is-size-4 has-text-weight-bold">
                      Ebrofy
                    </h1>
                  </Parallax>
                  <SlideshowGallery
                    images={[
                      '../static/p/ebro-1.jpg',
                      '../static/p/ebro-2.jpg',
                      '../static/p/ebro-3.png',
                      '../static/p/ebro-4.png',
                      '../static/p/ebro-5.png',
                      '../static/p/ebro-6.jpg',
                    ]}
                    color="#2c3e50"
                  />
                </div>
              </div>
              <div className="column content">
                <Fade bottom delay={500}>
                  <h3>About this project</h3>
                  <h5>Photo IS is a web application for sharing photos.</h5>
                  <p>
                    Application built with Java and Spring Framework as back-end technologies,
                    with MySQL database for keeping user accounts, photos, comments and other stuff.
                  </p>
                  <p>Interface was built using Vue.js and Bootstrap libraries.</p>
                  <p>Communication with server is done through JSON format and REST API. </p>
                  <p>
                    Application lives on Amazon Web Services and
                     is using EB for deploying, S3 for storing image files and RDS as a
                     database provider.
                  </p>
                  <div className="content-collapse">
                    <h3>Functional</h3>
                    <h5>Users are able to:</h5>
                    <ul>
                      <li>Create a new account</li>
                      <li>Login into existing account</li>
                      <li>Upload profile image</li>
                      <li>Modify personal data</li>
                      <li>Upload photo with a short title, description and selecting a category</li>
                      <li>Explore photos uploaded by other users</li>
                      <li>Sort photos by category</li>
                      <li>Add or remove photos to or from collection of favorites</li>
                      <li>Comment photos and explore comments made by other users</li>
                      <li>Search for categories or other users</li>
                    </ul>
                    <h3>Technical Sheet</h3>
                    <h5>Technologies I got involved with while working on this project.</h5>
                    <ul>
                      <li>Java 8</li>
                      <li>Spring Framework - Security, MVC, Data</li>
                      <li>MySQL</li>
                      <li>Amazon Web Services - EB, S3, RDS</li>
                      <li>oAuth 2.0</li>
                      <li>HTML5 / CSS3 / Javascript ES6</li>
                      <li>UI/UX Architecture</li>
                      <li>UI/UX Animations</li>
                      <li>Vue.js</li>
                      <li>Bootstrap</li>
                    </ul>
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

        { /* PROJECT 3 */}
        <div className="container-wrapper wrapper-project3">
          <div className="container sticky-container has-background-white">
            <a className="octocat-container image" target="_blank" rel="noopener noreferrer" href="https://github.com/rawlead/Photo-IS">
              <div className="octocat" />
            </a>
            <div className="columns is-variable is-8">
              <div className="column is-three-fifths">
                <div className="sticky-item">
                  <Parallax
                    className="custom-class"
                    offsetXMax={80}
                    offsetXMin={0}
                    tag="figure"
                  >
                    <h1 className="is-size-4 has-text-weight-bold has-text-grey-light">
                      Filter App
                    </h1>
                  </Parallax>
                  <SlideshowGallery
                    images={[
                      '../static/p/filterapp-1.jpg',
                      '../static/p/filterapp-2.jpg',
                      '../static/p/filterapp-3.jpg',
                      '../static/p/filterapp-4.jpg',
                      '../static/p/filterapp-5.jpeg',
                      '../static/p/filterapp-6.jpg',
                    ]}
                    color="hsl(0, 0%, 40%)"
                  />
                </div>
              </div>
              <div className="column content">
                <Fade bottom delay={500}>
                  <h3>About this project</h3>
                  <h5>Photo IS is a web application for sharing photos.</h5>
                  <p>
                    Application built with Java and Spring Framework as back-end technologies,
                    with MySQL database for keeping user accounts, photos, comments and other stuff.
                  </p>
                  <p>Interface was built using Vue.js and Bootstrap libraries.</p>
                  <p>Communication with server is done through JSON format and REST API. </p>
                  <p>
                    Application lives on Amazon Web Services and
                     is using EB for deploying, S3 for storing image files and RDS as a
                     database provider.
                  </p>
                  <div className="content-collapse">
                    <h3>Functional</h3>
                    <h5>Users are able to:</h5>
                    <ul>
                      <li>Create a new account</li>
                      <li>Login into existing account</li>
                      <li>Upload profile image</li>
                      <li>Modify personal data</li>
                      <li>Upload photo with a short title, description and selecting a category</li>
                      <li>Explore photos uploaded by other users</li>
                      <li>Sort photos by category</li>
                      <li>Add or remove photos to or from collection of favorites</li>
                      <li>Comment photos and explore comments made by other users</li>
                      <li>Search for categories or other users</li>
                    </ul>
                    <h3>Technical Sheet</h3>
                    <h5>Technologies I got involved with while working on this project.</h5>
                    <ul>
                      <li>Java 8</li>
                      <li>Spring Framework - Security, MVC, Data</li>
                      <li>MySQL</li>
                      <li>Amazon Web Services - EB, S3, RDS</li>
                      <li>oAuth 2.0</li>
                      <li>HTML5 / CSS3 / Javascript ES6</li>
                      <li>UI/UX Architecture</li>
                      <li>UI/UX Animations</li>
                      <li>Vue.js</li>
                      <li>Bootstrap</li>
                    </ul>
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
        <style jsx>
          {`
            .wrapper-project2 {
              background: -webkit-gradient(linear, left top, right top, from(#e67e22), to(#e74c3c));
              background: -webkit-linear-gradient(left, #e67e22, #e74c3c);
              background: -o-linear-gradient(left, #e67e22, #e74c3c);
              background: linear-gradient(to right, #e67e22, #e74c3c);
            }
            .wrapper-project3 {
              background: #232526;  /* fallback for old browsers */
              background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
              background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            }
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
           
            .sticky-title {
              margin-top: 3rem;
              margin-bottom: -3rem;
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
export default Projects;
