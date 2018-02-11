import React ,{Component} from 'react';
import './App.css'

class Clock extends Component{
  constructor(props){
    super(props)
    this.state = {
       days:0,
       minutes:0,
       hours:0,
       seconds:0
    }
    console.log(this.props)
  }

  componentWillMount(){
    this.getTimeUntil(this.props.deadline)
  }


  leadingZero(num){
   console.log(num)
    return num  < 10 ? '0'+num : num;
  }

  getTimeUntil(deadline){
   const time = Date.parse(deadline) - Date.parse(new Date());
   console.log(time);
   const seconds = Math.floor((time/1000)%60);
   const minutes =  Math.floor((time/(1000*60))%60);
   const hours =  Math.floor((time/(1000*60*60))%24);
   const days =  Math.floor((time/(1000*60*60*24)));
   console.log("Days :"+days)
   console.log("Hours :"+hours)
   console.log("Minutes :"+minutes)
   console.log("Seconds :"+seconds)

   this.setState({days,minutes,hours,seconds})

  }

  componentDidMount(){
    setInterval(() => this.getTimeUntil(this.props.deadline),1000)

  }


  render(){

    return (
      <div>
      <div className="clock-days"> {this.leadingZero(this.state.days)} days </div>
      <div className="clock-hours"> {this.leadingZero(this.state.hours)} hours </div>
      <div className="clock-minutes">  {this.leadingZero(this.state.minutes)} minutes  </div>
      <div className="clock-seconds">  {this.leadingZero(this.state.seconds)} seconds  </div>
      </div>
      )

  }
}

export default Clock;
