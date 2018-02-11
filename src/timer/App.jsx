import React ,{Component} from 'react';
import {Form , Button} from 'react-bootstrap'
import Timer from './Timer'
import '../App.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      isStarted :false
    }
  }

  changeStartFlag(isStarted=false){
    this.setState({isStarted})
  }



  render(){
    return(
      <div className="App">
        <div className="title">Stop Watch</div>
        <Form className="timer-content" inline>
        <Timer isStarted={this.state.isStarted}/>
        <Button className="timerButton" onClick={() => this.changeStartFlag(true) }>Start</Button>
        <Button className="timerButton" onClick={() => this.changeStartFlag(false)}>Reset</Button>
        </Form>
      </div>
    )
  }
}

export default App;
