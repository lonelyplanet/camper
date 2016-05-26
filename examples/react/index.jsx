import React from "react";
import Header from "./header";
import Head from "./head";

export default class HomePage extends React.Component {
  render() {
    const {
      hello,
      title,
    } = this.props;

    return (
      <html>
        <Head
          title={title}
        />
        <body>
          <div>
            <Header>{hello}</Header>
          </div>
        </body>
      </html>
    );
  }
}

HomePage.propTypes = {
  hello: React.PropTypes.string,
  title: React.PropTypes.string,
};
