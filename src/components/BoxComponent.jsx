import React, {Component} from 'react'
import ActionContainer from "./ActionContainer";
import ListContainer from "./ListContainer"
import {v4 as uuidv4} from "uuid"

class BoxComponent extends Component {
  state = {
    timers:[ {
            title: "Apprendre MySQL",
            project: "Mise en place d'une base de donnée",
            elapsed: 609620,
            id: "0a4a79cb-b06d-4cb1-883d-549a1e3b66d7",
            runningSince: null
        },
        {
            title: "Apprendre Figma",
            project: "Realisation d'une maquette web",
            elapsed: 1349620,
            id: "0a4a79cb-b06d-4cb1-883d-549a1e3b66d4",
            runningSince: null
        }]
      }

      handleCreateFormSubmit = ( {title, project} ) => {
        const timer = {
          title,
          project,
          id: uuidv4(),
          elapsed: 0,
          runningSince: null
        };
        this.setState({ timers: [...this.state.timers, timer] });
      };

    handleEditTimer = (id, title, project ) => {
      this.setState({
        timers: this.state.timers.map(timer => {
          if (timer.id === id) {
            return {
              ...timer,
              title,
              project
            };
          }
          return { ...timer };
        })
      });
    }

    handleDelete = (id) => {
      this.setState({
        timers: this.state.timers.filter(timer => {
          return timer.id !== id;
        })
      });
    }

    handlePlayClick = timerId => {
      const now = Date.now();
      this.setState({
        timers: this.state.timers.map(timer => {
          if(timerId === timer.id) {
            return {
              ...timer,
              runningSince: now
            }
          } else {
            return { ...timer };
          }
        })
      });
      };

     handlePauseClick = timerId => {
      const now = Date.now();
      this.setState({
        timers: this.state.timers.map(timer => {
          if(timerId === timer.id) {
            const lastElapsed = now - timer.runningSince;
            return {
              ...timer,
              runningSince: null,
              elapsed: timer.elapsed + lastElapsed
            }
          } else {
            return { ...timer };
          }
        })
      });
      };

   render() {
    return (
      <div>
          <ListContainer
              timers={this.state.timers} 
              onFormSubmit={this.handleEditTimer}
              onDelete={this.handleDelete}
              onPauseClick={this.handlePauseClick}
              onPlayClick={this.handlePlayClick}
            />
          <ActionContainer onFormSubmit={this.handleCreateFormSubmit} />
      </div>
    )

   }



    
}

export default BoxComponent

