import React from "react";
import PropTypes from "prop-types";

class Copyright extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      name: props.name,
    };
  }

  render() {
    return <>&copy; {this.state.year} {this.state.name}</>
  }
}

Copyright.propTypes = {
  /**
   * Name of the copyright owner.
   */
  name: PropTypes.string.isRequired
}

export default Copyright;