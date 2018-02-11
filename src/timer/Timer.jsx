import React , {Component} from 'react';
import '../App.css'

class Timer extends Component{
  constructor(props){
    super(props);
    console.log(this.props)
    this.state={
      hours:0,
      minutes:0,
      seconds:0
    }
  }

  componentDidMount(){
    setInterval(() => this.incrementByOneSecond(),1000)
  }

  leadingZero(num){
    console.log(num)
    return num  < 10 ? '0'+num : num;
  }

  incrementByOneSecond(){

      if( this.props.isStarted === true){
          let seconds = this.state.seconds;
          let minutes = this.state.minutes;
          let hours = this.state.hours;
          seconds = seconds+1;
          if(seconds ===  60){
            seconds = 0;
            minutes = minutes+1;
          }
          if(minutes ===  60){
            minutes = 0;
            hours = hours+1;
          }
          this.setState({hours,minutes,seconds})
      }else{
          if(!(this.state.hours === 0 && this.state.minutes === 0 && this.state.seconds === 0)){
              this.setState({
                hours:0,
                minutes:0,
                seconds:0
              })
          }
      }

  }



  render(){
    return(
      <div>
        <div className="timer">
          <span className="hours">{this.leadingZero(this.state.hours)}</span>
          <span className="semicolon">:</span>
          <span className="minutes">{this.leadingZero(this.state.minutes)}</span>
          <span className="semicolon">:</span>
          <span className="seconds">{this.leadingZero(this.state.seconds)}</span>
        </div>
      </div>
    )

  }
}

export default Timer;
