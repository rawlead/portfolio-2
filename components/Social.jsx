import * as React from 'react';

const Social = ({ linkStyle }) => (
  <div className="container">
    <div className="columns">
      <div className="column has-text-centered">
        <div className="social-item">
          <a
            href="https://www.facebook.com/ivanshyrai"
            className="social-item__anchor"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <i className="fab fa-facebook fa-lg" />
          </a>
        </div>

        <div className="social-item">
          <a
            href="mailto:ivan.shyrai@yahoo.com"
            className="social-item__anchor"
            target="_top"
            style={linkStyle}
          >
            <i className="fas fa-envelope fa-lg" />
          </a>
        </div>

        <div className="social-item">
          <a
            href="https://www.linkedin.com/in/ivan-shyrai/"
            className="social-item__anchor"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <i className="fab fa-linkedin fa-lg" />
          </a>
        </div>

        <div className="social-item">
          <a
            href="https://github.com/rawlead"
            className="social-item__anchor"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <i className="fab fa-github fa-lg" />
          </a>
        </div>
      </div>
      <style jsx>
        {`
      .container {}
      .social-item {
          display: inline-block;
          margin: 0 1rem;
        }
        .social-item__anchor {
          color: #4a4a4a;
          font-size: 2rem;
          transition: color .1s ease-in-out;        
        }
        .social-item__anchor:hover {
          color: #aaa;
        }
      `}
      </style>
    </div>
  </div>
);

export default Social;
