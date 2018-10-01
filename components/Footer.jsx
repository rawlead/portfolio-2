import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'prismic-reactjs';
import { ScaleLoader } from 'react-spinners';
import Social from './Social';
import linkResolver from '../helpers';
import { getMainContentAPI } from '../api';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mainContent: '' };
    this.fetchMainContent = this.fetchMainContent.bind(this);
  }

  componentDidMount() {
    this.fetchMainContent();
  }

  async fetchMainContent() {
    const response = await getMainContentAPI();
    this.setState({
      mainContent: response.data,
    });
  }

  render() {
    const { mainContent } = this.state;

    return (
      <footer className="footer">
        <Fade delay={200}>
          <div className="container">
            <div className="columns" style={{ marginBottom: '2rem' }}>
              <div className="column has-text-centered">
                <h1 className="is-size-4 section-title section-title__light">Get in Touch</h1>
              </div>
            </div>

            <Social linkStyle={{ color: '#f2f2f2' }} />

            <div className="columns">
              <div className="column has-text-centered">
                <h3 className="is-size-5 has-text-grey-lighter">
                  {mainContent
                    ? (
                      <a href={Link.url(mainContent.resume, linkResolver)} className="linear-text" target="_blank" rel="noopener noreferrer">
                        &nbsp;DOWNLOAD RESUME
                      </a>
                    )
                    : (
                      <ScaleLoader
                        className="preloader-spinner"
                        sizeUnit="px"
                        size={120}
                        color="#f2f2f2"
                      />
                    )
                  }
                </h3>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <figure className="image is-96x96">
                  <a
                    href="https://www.youracclaim.com/badges/61136f12-504c-475c-941f-7657fdd8c37e/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="../static/oracle.png" alt="oracle-budge" />
                  </a>
                </figure>
              </div>
            </div>

            <div className="columns">
              <div className="column has-text-centered has-text-grey-light">
                <p className="has-text-centered">
                  Designed and Built by
                  <span className="has-text-weight-bold"> IVAN SHYRAI</span>
                  &nbsp;in 2018
                </p>
                <p>
                  Made with
                  <a
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp;React
                  </a>
                  ,&nbsp;
                  <a
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Next.js
                  </a>
                  ,&nbsp;
                  <a
                    href="https://bulma.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bulma
                  </a>
                  &nbsp;and
                  <a
                    href="https://prismic.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp;Prismic.io
                  </a>
                </p>
                <p>
                  <a href="https://github.com/rawlead/portfolio-2" target="_blank" rel="noopener noreferrer">
                    View Source Code
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Fade>
        <style jsx>
          {`
        .image {
          transition: all .1s ease-in-out;        
          margin: 0 auto;
        }
        .image:hover {
          -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
          filter: grayscale(100%);
        }
        .footer {
          background: #0a0a0a;
          padding-top: 5rem;
        }
        .bulma {
          height: 30px;
        }
        .columns {
          margin-top: 1.5rem;
        }
        .content {
          display: flex;
          align-items: center;
        }
        a {
          color: #f2f2f2;
        }
        a:hover {
          color: #888888;
        }
      `}
        </style>
      </footer>
    );
  }
}
export default Footer;
