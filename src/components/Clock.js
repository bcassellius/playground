import moment from 'moment';
import React, {Component} from 'react';
import Clock from 'react-live-clock';
import { Switch } from 'antd';
import "./Clock.css";

class Time extends Component {
  constructor(props) {
    super(props)
    this.state={
      todaysDate: false
    }
  }

  toggleSwitch = () => {
    this.setState({
      todaysDate: !this.state.todaysDate
    })
  }

  render(){
    return(
      <div className="Time">
        <div className="toggleButton">
          <Switch onClick={this.toggleSwitch}/>
        </div>
        <Clock format={'h:mm:ssa'} ticking={true} timezone={'US/Central'} />
        <div className="toggleDate">
          {this.state.todaysDate ? moment().format('MMMM Do YYYY') : ''}
        </div>
      </div>
    );
  }
}

export default Time;