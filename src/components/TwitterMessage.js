import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charsRemaining: this.props.maxChars,
      input: ""
    };
  }

  updateRemaining = (e) => {
    let currentTotal = Number.parseInt(e.target.value.length)
    let message = e.target.value
    this.setState({
        input: message,
        charsRemaining: this.props.maxChars - currentTotal
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.input} onChange={this.updateRemaining} type="text" name="message" id="message" />
        <h5>{this.state.charsRemaining}</h5>
      </div>
    );
  }
}

export default TwitterMessage;
