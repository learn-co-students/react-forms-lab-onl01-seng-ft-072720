import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let remainingCharacters = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        onChange={event => this.handleChange(event)}
        value={this.state.message}
        name="message" 
        id="message" />
        {remainingCharacters}
      </div>
    );
  }
}

export default TwitterMessage;
