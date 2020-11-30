  
import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ''
    };
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    let charNum = this.props.maxChars - this.state.input.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.input}/>
        {charNum}
      </div>
    );
  }
}

export default TwitterMessage;
