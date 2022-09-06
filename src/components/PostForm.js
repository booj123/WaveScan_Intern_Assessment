import React, { Component } from "react";
import axios from "axios";
import './PostForm.css';

class PostForm extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
      projectName: '',
      scanningMode: '',
      scanDimensionsX: '',
      scanDimensionsY: '',
      scannerFrequency: ''
    }
  }


  changeHandler = event => {
    this.setState({ [event.target.name] : event.target.value })
  }
  submitHandler = event => {
    event.preventDefault();
    
    const postData = {
      projectName: this.state.projectName,
      scanningMode : this.state.scanningMode,
      scanDimensionsX : Number(this.state.scanDimensionsX),
      scanDimensionsY: Number(this.state.scanDimensionsY),
      scannerFrequency: Number(this.state.scannerFrequency)
    };


    
    axios.post('https://wavescan-internship.saurabhmudgal.repl.co/submitForm', postData )
    .then(response => {
      console.log(response);
      alert('success!')
     
    })
    .catch(error => {
      console.log(error)
      
      if (this.state.scannerFrequency < 1) {
        alert("Please ensure that the Scanner Frequncy Value is greater than or equal to 1");
      }
      if (this.state.scannerFrequency % 1 !== 0) {
        alert("Please ensure that the Scanner Frequncy Value has 1 dp");
      }
       if (this.state.scanDimensionsX < 1) {
        alert("Please ensure that the Scan X Dimension Value to be greater than or equal to 1");
      }
       if (this.state.scanDimensionsY < 1) {
        alert("Please ensure that the Scan Y Dimension Value to be greater than or equal to 1");
      }

      if (this.state.projectName.length < 3) {
        alert("Please ensure that the Project Name has at least 3 characters");
      }
    })
  }

  render() {

    return (
      <div className="displayform">
        <form onSubmit={this.submitHandler}>
          <div className="projname">
            <p>Project Name</p>
            <input type="text" name="projectName" value={this.state.projectName} onChange={this.changeHandler} ></input>
          </div>

          <div className="scanmode">
          <p>Scanning Mode</p>
            <select name="scanningMode" value={this.state.scanningMode} onChange={this.changeHandler}  >
              <option value="none" selected >Select a Scanning Mode</option>
              <option value="GANTRY">GANTRY</option>
              <option value="CRAWLER">CRAWLER</option>
              <option value="AUTO">AUTO</option>
              <option value="MANUAL">MANUAL</option>
              <option value="ARM">ARM</option>
            </select>
          </div>

          <p>Scan Dimensions (cm)</p>

          <div className="dimensionsX">
            <input type="number" name="scanDimensionsX" value={this.state.scanDimensionsX} onChange={this.changeHandler}  ></input>
            <h6>X</h6>
          </div>

          <div className="dimensionsY">
            <input type="number" name="scanDimensionsY" value={this.state.scanDimensionsY} onChange={this.changeHandler} ></input>
            <h6>Y</h6>
          </div>

          <div className="scanfreq">
          <p>Scanner Frequency (GHz)</p>
            <input type="number" name="scannerFrequency" value={this.state.scannerFrequency} onChange={this.changeHandler} ></input>
          </div>

          <button className="btn" type="submit"> SCAN </button>
        </form>

      </div>
    )
  }
  
}

export default PostForm