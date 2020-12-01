import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      something: "",
      charactersLeft: 280
    };
  }

  handleInputChange = (e) => {
    if (e.target.value.length > this.props.maxChars) {
      // do something
    } else {
    this.setState({
      something: e.target.value,
      charactersLeft: 280-e.target.value.length
    })
  }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleInputChange}type="text" value={this.state.something} name="message" id="message" />
      <p>{this.state.charactersLeft} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
