import React from 'react';

const Footer = () => (
  <footer className="footer has-background-white">
    <div className="container">
      <div className="columns">
        <div className="column is-one-fifth">
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
        <div className="column content has-text-centered">
          <p>Built with BULMA, REACT.JS and NEXT.JS</p>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .footer {
          padding-top: 8rem;
        }
        .content {
          display: flex;
          align-items: center;
        }
      `}
    </style>
  </footer>
);

export default Footer;
