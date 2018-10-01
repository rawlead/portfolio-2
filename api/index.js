import Prismic from 'prismic-javascript';
import { PRISMIC_API_URL } from '../config';

const getProjectsAPI = async (params) => {
  try {
    // API initialization with Prismics kit
    const API = await Prismic.api(PRISMIC_API_URL);
    // Query documents with a filter returning only types of project
    // and order them
    const response = await API.query(
      Prismic.Predicates.at('document.type', 'project'),
      {
        // Order by last publication date from most recent to oldest
        orderings: '[my.project.date]',
        ...params,
        // params will be extra parameters we can pass through with api calls
        // such as how many documents to return
      },
    );
    return response;
  } catch (error) {
    return error;
  }
};

const getMainContentAPI = async () => {
  try {
    // API initialization with Prismics kit
    const API = await Prismic.api(PRISMIC_API_URL);
    // Query documents with a filter returning only types of project
    // and order them
    const response = await API.query(
      Prismic.Predicates.at('document.type', 'main_content'),
    ).then(content => content.results[0]);

    return response;
  } catch (error) {
    return error;
  }
};

/* eslint-disable */
export { getProjectsAPI, getMainContentAPI };
