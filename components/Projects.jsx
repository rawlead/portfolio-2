import React from 'react';
import Fade from 'react-reveal/Fade';
import { getProjectsAPI } from '../api';
import SingleProject from './SingleProject';

/* eslint-disable */

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
    const projectsView = projects.map((project, index) => (
      <SingleProject key={index} content={project} />
    ));
    return (
      <div className="projects-section" >
        <Fade delay={500}>

          <h1 className="is-size-4 has-background-black sticky-title section-title section-title__light">Projects</h1>

        </Fade>
        {projectsView}

        <style jsx>
          {`
          {/* style={{background: 'linear-gradient(to right, rgb(187, 187, 187), rgb(204, 204, 204))'}} */}
            .sticky-title {
              padding-top: 2rem;
              margin-bottom: -2rem;
              box-shadow:0 1rem 1rem -1rem rgba(10,10,10,.2);
            }  
        `}
        </style>
      </div>
    );
  }
}
export default Projects;
