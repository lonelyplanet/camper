import React from "react";

export default function Head({ title }) {
  return (
    <head>
      {title && <title>{title}</title>}
    </head>
  );
}

Head.propTypes = {
  title: React.PropTypes.string,
};
