import React from "react";
import PropTypes from "prop-types";

class GoogleMapsLocation extends React.Component {

  constructor(props) {
    super(props);
    const propsToCopy = {...props};
    delete propsToCopy.postalCode;
    delete propsToCopy.locationName;
    delete propsToCopy.country;
    this.state = {
      postalCode: props.postalCode,
      locationName: props.locationName,
      country: props.country,
      propsToCopy: propsToCopy
    }
    this._buildUrl = this._buildUrl.bind(this);
  }

  _buildUrl() {
    let urlStart = "https://www.google.com/maps/place/";
    return urlStart +
        [this.state.postalCode, this.state.locationName]
        .filter(Boolean)
        .join("+");
  }

  render() {
    return <a {...this.state.propsToCopy} href={this._buildUrl()}>
      {[this.state.locationName, this.state.country].filter(Boolean).join(", ")}
    </a>
  }
}

GoogleMapsLocation.propTypes = {
  postalCode: PropTypes.string,
  locationName: PropTypes.string.isRequired,
  country: PropTypes.string
}

export default GoogleMapsLocation;