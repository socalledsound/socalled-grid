import React, { Component } from 'react'


class Card extends Component {
    state = { expanded: false };
    randomNumber = Math.floor(Math.random() * 5) + 1;
  
    render() {
      return (
        <div
          class={`card card--${this.randomNumber} ${
            this.state.expanded ? "card--expanded" : ""
          }`}
          onClick={() => {
            this.setState({ expanded: !this.state.expanded });
          }}
        >
          <div>
            <div className="card__avatar" />
            <div className="card__title" />
            <div className="card__description" />
          </div>
        </div>
      );
    }
  }

  export default Card