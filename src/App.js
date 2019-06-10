import React, {Component} from 'react';
import Plaintext from './components/Plaintext';
import Ciphertext from './components/Ciphertext';
import Shift from './components/Shift';
import Paper from '@material-ui/core/Paper';

function shiftText (str, shift) {
  if (str) {
    let newArr = [];
    for (let i=0; i< str.length; i++) {
      let newChar = String.fromCharCode(str.charCodeAt(i) + parseInt(shift));
      console.log(str.charCodeAt(i), newChar)
      newArr.push(newChar);
    }
    return newArr.join("");
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shift: 1,
      plainTextVal: "",
      cipherTextVal: ""
    };
    this.onPlainTextChange = this.onPlainTextChange.bind(this);
    this.onCipherTextChange = this.onCipherTextChange.bind(this);
    this.setShift = this.setShift.bind(this);
  }


  onPlainTextChange (event) {
    const {shift} = this.state;
    this.setState({plainTextVal: event.target.value});
    let newCipherVal = shiftText( event.target.value, shift);
    this.setState({cipherTextVal: newCipherVal});
  }

  onCipherTextChange (event) {
    const {shift} = this.state;
    this.setState({cipherTextVal: event.target.value});
    let newPlainVal = shiftText( event.target.value, `-${shift}`);
    this.setState({plainTextVal: newPlainVal});
  }

  setShift(event) {
    console.log(event.target.value)
    this.setState({shift: event.target.value})
  }

    render() {
        return (
      <div className="container">
          <center><h1>Caesar's Cipher</h1></center>
                  <Shift shiftVal={this.state.shift} selectShift={this.setShift}></Shift>
          <Paper elevation={10} className="child-container">
                      <Plaintext plainTextVal={this.state.plainTextVal} onPlainTextChange={this.onPlainTextChange}></Plaintext>
                      <Ciphertext cipherTextVal={this.state.cipherTextVal} onCipherTextChange={this.onCipherTextChange}></Ciphertext>
               </Paper>
      </div>);
    }
}

export default Main;