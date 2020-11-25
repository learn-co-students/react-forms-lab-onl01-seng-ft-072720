import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  // handleChange = event => {
  //   this.setState({
  //     value: event.target.value
  //   })
  // }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.setState({text: event.target.value})} value={this.state.text}/>
        <h4>Characters Left: {this.props.maxChars - this.state.text.length}</h4>
      </div>
    );
  }
}

export default TwitterMessage;
