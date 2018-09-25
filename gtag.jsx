import * as React from 'react';
/*eslint-disable */

const gtag = () => (
  <div>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-122686270-2" />
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());
      gtag('config', 'UA-122686270-2');
    </script>
  </div>
);

export default gtag;
