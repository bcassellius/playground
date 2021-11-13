import React, {Component} from 'react';
import Clock from 'react-live-clock';
// import { Switch } from 'antd';
// import moment from 'moment';
import "./Clock.css";

class Time extends Component {
  render(){
    return(
      <div className="Time">
        <Clock format={'h:mm:ssa'} ticking={true} timezone={'US/Central'} />
      </div>
    );
  }
}

export default Time;