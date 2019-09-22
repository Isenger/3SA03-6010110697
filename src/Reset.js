import React, { Component } from 'react'

class Reset extends Component {
   
    Reset = () => {
            document.getElementById('newgame').style.display = "inline-block";
            document.getElementById('Reset').style.display = "none";
            this.props.getReset(true);
    }

  render() {
    return (
      <React.Fragment>
        <button id="reset" class="button"  onClick={this.reset}>RESET</button>
      </React.Fragment>
    )
  }
}

export default Reset