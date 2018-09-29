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
      <div className="projects-section" style={{background: 'linear-gradient(to right, rgb(187, 187, 187), rgb(204, 204, 204))'}}>
        <Fade delay={500}>

          <h1 className="is-size-4 sticky-title section-title section-title__dark">Projects</h1>

        </Fade>
        {projectsView}

        <style jsx>
          {`
       
            .sticky-title {
              padding-top: 2rem;
              margin-bottom: 2rem;
            }  
        `}
        </style>
      </div>
    );
  }
}
export default Projects;
