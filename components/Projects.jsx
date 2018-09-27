import React from 'react';
import { getProjectsAPI } from '../api';
import SingleProject from './SingleProject';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [''] };
    this.fetchProjects = this.fetchProjects.bind(this);
  }

  componentDidMount() {
    this.fetchProjects();
  }

  async fetchProjects() {
    // Call the API and request 5 documnets
    const response = await getProjectsAPI({ pageSize: 5 });
    this.setState({
      projects: response.results,
    });
  }

  render() {
    const { projects } = this.state;
    const projectsView = projects.map(project => (
      <SingleProject key={project.uid} content={project} />
    ));
    return (
      <div className="projects-section">
        <h1 className="is-size-3 sticky-title section-title section-title__dark">Projects</h1>

        {projectsView}

        <style jsx>
          {`
            .sticky-title {
              margin-top: 3rem;
              margin-bottom: -3rem;
            }  
        `}
        </style>
      </div>
    );
  }
}
export default Projects;

// openCollapse(e) {
//   this.funcName = 'openCollapse';
//   const content = e.target.previousElementSibling;
//   if (content.style.maxHeight) {
//     content.style.maxHeight = null;
//     e.target.value = 'More...';
//   } else {
//     content.style.maxHeight = `${content.scrollHeight}px`;
//     e.target.value = 'Less...';
//   }
// }

//  {/* Project 1 */}
//         <div className="container-wrapper">
//           <div className="container sticky-container has-background-white">
//             <a className="octocat-container image" target="_blank" rel="noopener noreferrer" href="https://github.com/rawlead/Photo-IS">
//               <div className="octocat" />
//             </a>
//             <div className="columns is-variable is-8">
//               <div className="column is-three-fifths">
//                 <div className="sticky-item">
//                   <Parallax
//                     className="custom-class"
//                     offsetXMax={80}
//                     offsetXMin={0}
//                     tag="figure"
//                   >
//                     <h1 className="is-size-4 has-text-weight-bold">
//                       Photo IS
//                     </h1>
//                   </Parallax>
//                   <SlideshowGallery
//                     images={[
//                       '../static/p/portal-1.jpg',
//                       '../static/p/portal-2.jpg',
//                       '../static/p/portal-3.jpg',
//                       '../static/p/portal-4.jpg',
//                       '../static/p/portal-5.jpg',
//                       '../static/p/portal-6.jpg',
//                     ]}
//                     color="#0a0a0a"
//                   />
//                 </div>
//               </div>
//               <div className="column content">
//                 <Fade bottom delay={500}>
//                   <h3>About this project</h3>
//                   <h5>Photo IS is a web application for sharing photos.</h5>
//                   <p>
//                     Application built with Java and Spring Framework as back-end technologies,
//                     with MySQL database for keeping user accounts, photos,
// comments and other stuff.
//                   </p>
//                   <p>Interface was built using Vue.js and Bootstrap libraries.</p>
//                   <p>Communication with server is done through JSON format and REST API. </p>
//                   <p>
//                     Application lives on Amazon Web Services and
//                      is using EB for deploying, S3 for storing image files and RDS as a
//                      database provider.
//                   </p>
//                   <div className="content-collapse">
//                     <h3>Functional</h3>
//                     <h5>Users are able to:</h5>
//                     <ul>
//                       <li>Create a new account</li>
//                       <li>Login into existing account</li>
//                       <li>Upload profile image</li>
//                       <li>Modify personal data</li>
//                       <li>Upload photo with a short title,
//  description and selecting a category</li>
//                       <li>Explore photos uploaded by other users</li>
//                       <li>Sort photos by category</li>
//                       <li>Add or remove photos to or from collection of favorites</li>
//                       <li>Comment photos and explore comments made by other users</li>
//                       <li>Search for categories or other users</li>
//                     </ul>
//                     <h3>Technical Sheet</h3>
//                     <h5>Technologies I got involved with while working on this project.</h5>
//                     <ul>
//                       <li>Java 8</li>
//                       <li>Spring Framework - Security, MVC, Data</li>
//                       <li>MySQL</li>
//                       <li>Amazon Web Services - EB, S3, RDS</li>
//                       <li>oAuth 2.0</li>
//                       <li>HTML5 / CSS3 / Javascript ES6</li>
//                       <li>UI/UX Architecture</li>
//                       <li>UI/UX Animations</li>
//                       <li>Vue.js</li>
//                       <li>Bootstrap</li>
//                     </ul>
//                   </div>
//                   <input
//                     className="button is-outlined has-text-weight-bold is-black"
//                     type="button"
//                     onClick={this.openCollapse.bind(this)}
//                     value="More..."
//                   />
//                 </Fade>
//               </div>
//             </div>
//           </div>
//         </div>


//         { /* PROJECT 2 */}
//         <div className="container-wrapper wrapper-project2">
//           <div className="container sticky-container has-background-white">
//             <a className="octocat-container image" target="_blank" rel="noopener noreferrer" href="https://github.com/rawlead/Photo-IS">
//               <div className="octocat" />
//             </a>
//             <div className="columns is-variable is-8">
//               <div className="column is-three-fifths">
//                 <div className="sticky-item">
//                   <Parallax
//                     className="custom-class"
//                     offsetXMax={80}
//                     offsetXMin={0}
//                     tag="figure"
//                   >
//                     <h1 className="is-size-4 has-text-weight-bold">
//                       Ebrofy
//                     </h1>
//                   </Parallax>
//                   <SlideshowGallery
//                     images={[
//                       '../static/p/ebro-1.jpg',
//                       '../static/p/ebro-2.jpg',
//                       '../static/p/ebro-3.png',
//                       '../static/p/ebro-4.png',
//                       '../static/p/ebro-5.png',
//                       '../static/p/ebro-6.jpg',
//                     ]}
//                     color="#2c3e50"
//                   />
//                 </div>
//               </div>
//               <div className="column content">
//                 <Fade bottom delay={500}>
//                   <h3>About this project</h3>
//                   <h5>Photo IS is a web application for sharing photos.</h5>
//                   <p>
//                     Application built with Java and Spring Framework as back-end technologies,
//                     with MySQL database for keeping user accounts,
//  photos, comments and other stuff.
//                   </p>
//                   <p>Interface was built using Vue.js and Bootstrap libraries.</p>
//                   <p>Communication with server is done through JSON format and REST API. </p>
//                   <p>
//                     Application lives on Amazon Web Services and
//                      is using EB for deploying, S3 for storing image files and RDS as a
//                      database provider.
//                   </p>
//                   <div className="content-collapse">
//                     <h3>Functional</h3>
//                     <h5>Users are able to:</h5>
//                     <ul>
//                       <li>Create a new account</li>
//                       <li>Login into existing account</li>
//                       <li>Upload profile image</li>
//                       <li>Modify personal data</li>
//                       <li>Upload photo with a short title,
// description and selecting a category</li>
//                       <li>Explore photos uploaded by other users</li>
//                       <li>Sort photos by category</li>
//                       <li>Add or remove photos to or from collection of favorites</li>
//                       <li>Comment photos and explore comments made by other users</li>
//                       <li>Search for categories or other users</li>
//                     </ul>
//                     <h3>Technical Sheet</h3>
//                     <h5>Technologies I got involved with while working on this project.</h5>
//                     <ul>
//                       <li>Java 8</li>
//                       <li>Spring Framework - Security, MVC, Data</li>
//                       <li>MySQL</li>
//                       <li>Amazon Web Services - EB, S3, RDS</li>
//                       <li>oAuth 2.0</li>
//                       <li>HTML5 / CSS3 / Javascript ES6</li>
//                       <li>UI/UX Architecture</li>
//                       <li>UI/UX Animations</li>
//                       <li>Vue.js</li>
//                       <li>Bootstrap</li>
//                     </ul>
//                   </div>
//                   <input
//                     className="button is-outlined has-text-weight-bold is-black"
//                     type="button"
//                     onClick={this.openCollapse.bind(this)}
//                     value="More..."
//                   />
//                 </Fade>
//               </div>
//             </div>
//           </div>
//         </div>

//         { /* PROJECT 3 */}
//         <div className="container-wrapper wrapper-project3">
//           <div className="container sticky-container has-background-white">
//             <a className="octocat-container image" target="_blank" rel="noopener noreferrer" href="https://github.com/rawlead/Photo-IS">
//               <div className="octocat" />
//             </a>
//             <div className="columns is-variable is-8">
//               <div className="column is-three-fifths">
//                 <div className="sticky-item">
//                   <Parallax
//                     className="custom-class"
//                     offsetXMax={80}
//                     offsetXMin={0}
//                     tag="figure"
//                   >
//                     <h1 className="is-size-4 has-text-weight-bold has-text-grey-light">
//                       Filter App
//                     </h1>
//                   </Parallax>
//                   <SlideshowGallery
//                     images={[
//                       '../static/p/filterapp-1.jpg',
//                       '../static/p/filterapp-2.jpg',
//                       '../static/p/filterapp-3.jpg',
//                       '../static/p/filterapp-4.jpg',
//                       '../static/p/filterapp-5.jpeg',
//                       '../static/p/filterapp-6.jpg',
//                     ]}
//                     color="hsl(0, 0%, 40%)"
//                   />
//                 </div>
//               </div>
//               <div className="column content">
//                 <Fade bottom delay={500}>
//                   <h3>About this project</h3>
//                   <h5>Photo IS is a web application for sharing photos.</h5>
//                   <p>
//                     Application built with Java and Spring Framework as back-end technologies,
//                     with MySQL database for keeping user accounts,
// photos, comments and other stuff.
//                   </p>
//                   <p>Interface was built using Vue.js and Bootstrap libraries.</p>
//                   <p>Communication with server is done through JSON format and REST API. </p>
//                   <p>
//                     Application lives on Amazon Web Services and
//                      is using EB for deploying, S3 for storing image files and RDS as a
//                      database provider.
//                   </p>
//                   <div className="content-collapse">
//                     <h3>Functional</h3>
//                     <h5>Users are able to:</h5>
//                     <ul>
//                       <li>Create a new account</li>
//                       <li>Login into existing account</li>
//                       <li>Upload profile image</li>
//                       <li>Modify personal data</li>
//                       <li>Upload photo with a short title,
// description and selecting a category</li>
//                       <li>Explore photos uploaded by other users</li>
//                       <li>Sort photos by category</li>
//                       <li>Add or remove photos to or from collection of favorites</li>
//                       <li>Comment photos and explore comments made by other users</li>
//                       <li>Search for categories or other users</li>
//                     </ul>
//                     <h3>Technical Sheet</h3>
//                     <h5>Technologies I got involved with while working on this project.</h5>
//                     <ul>
//                       <li>Java 8</li>
//                       <li>Spring Framework - Security, MVC, Data</li>
//                       <li>MySQL</li>
//                       <li>Amazon Web Services - EB, S3, RDS</li>
//                       <li>oAuth 2.0</li>
//                       <li>HTML5 / CSS3 / Javascript ES6</li>
//                       <li>UI/UX Architecture</li>
//                       <li>UI/UX Animations</li>
//                       <li>Vue.js</li>
//                       <li>Bootstrap</li>
//                     </ul>
//                   </div>
//                   <input
//                     className="button is-outlined has-text-weight-bold is-black"
//                     type="button"
//                     onClick={this.openCollapse.bind(this)}
//                     value="More..."
//                   />
//                 </Fade>
//               </div>
//             </div>
//           </div>
//         </div>
