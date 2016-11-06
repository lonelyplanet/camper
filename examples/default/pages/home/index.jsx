import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Header from 'components/header';
import Head from 'components/head';
import lpLogo from 'assets/images/lp-logo-lp-blue.png';
import data from './data.json';

const HomePage = ({
  title,
  username
}) => (
  <html>
    <Head
      title={title}
    />
    <body>
      <img src={lpLogo} />
      <div>
        <Header>{`Hello, ${username}!`}</Header>
      </div>
    </body>
  </html>
);

HomePage.propTypes = {
  title: React.PropTypes.string,
  username: React.PropTypes.string
};

module.exports = ReactDOMServer.renderToStaticMarkup(
  React.createElement(HomePage, data)
);
