import React, { Component } from "react";
import {FaTrashAlt , FaEdit, FaPlay, FaPause} from 'react-icons/fa'
import "../helpers";
import "../stylesheets/timer.css";

class Timer extends Component {
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }
  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  onPauseClick = () => {
    console.log("Pause clicked");

    this.props.onPauseClick(this.props.id);
  };
  onPlayClick = () => {
    console.log("Play clicked");
    this.props.onPlayClick(this.props.id);
  };

  renderButton = () => {
    if (this.props.runningSince) {
      return (
        <button className="Play__button" onClick={this.onPauseClick}>
          <FaPause />
        </button>
      );
    } else {
      return (
        <button className="Pause__button" onClick={this.onPlayClick}>
         <FaPlay />
        </button>
      );
    }
  };

  render() {
    const elapsedString = window.helpers.renderElapsedString(
      this.props.elapsed,
      this.props.runningSince
    );

    return (
      <div className="timerContente">
        <h4 className="title__timer"> {this.props.title} </h4>
        <p className="projet_timer"> {this.props.project} </p>
        <h3 className="time"> {elapsedString} </h3>
        <div className="action">
          <span
            onClick={() => {
              this.props.onDelete(this.props.id);
            }}
          >
            <FaTrashAlt />
          </span>
          <span onClick={this.props.onEditFormOpen}>
            <FaEdit />
          </span>
        </div>
        {this.renderButton()}
      </div>
    );
  }
}

export default Timer;
