import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Header from 'components/header';
import Head from 'components/head';
import data from './data.json';

const AboutPage = ({
  title
}) => (
  <html>
    <Head
      title={title}
    />
    <body>
      <div>
        <Header>{title}</Header>
      </div>
    </body>
  </html>
);

AboutPage.propTypes = {
  title: React.PropTypes.string,
};

module.exports = ReactDOMServer.renderToStaticMarkup(
  React.createElement(AboutPage, data)
);
