import React from "react";
import Header from "../../shared/header";
import Head from "../../shared/head";

export default function HomePage({
  hello,
  title,
}){
  return (
    <html>
      <Head
        title={title}
      />
      <body>
        <div>
          <Header>{hello} home page</Header>
        </div>
      </body>
    </html>
  );
}

HomePage.propTypes = {
  hello: React.PropTypes.string,
  title: React.PropTypes.string,
};
