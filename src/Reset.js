import React, { Component } from 'react'

class Reset extends Component {
   
    Reset = () => {
        window.location.reload(false);
    }

  render() {
    return (
      <React.Fragment>
        <button id = "reset" class="button" onClick = {this.reset}>RESET</button>
      </React.Fragment>
    )
  }
}
export default Reset