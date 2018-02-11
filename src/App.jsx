import React ,{ Component } from 'react';
import './App.css';
import Clock from './clock'


import {Form , FormControl,Button} from 'react-bootstrap'
class App extends Component{

  constructor(props){
    super(props);
    this.state={
      deadline : 'February 25, 2018',
      newDeadLine :''
    }
  }

  changeDeadline(){
    console.log(this.state)
    this.setState({deadline :this.state.newDeadLine})
  }



  render(){
      return (
        <div className="App">
        <div className="App-title">Count down to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <Form inline>
        <FormControl className="deadline-input" onChange={event => this.setState({newDeadLine :event.target.value})} placeholder="Test Input"/>
        <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
        
        </div>

      )
  }
}

export default App;
