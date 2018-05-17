import React, { Component } from 'react';
import Hitpoints from "./Hitpoints";


class Flotilla extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let { flotilla } = this.props;
    return (
      <ul className='flotillaContainer'>
        {
          flotilla.map((ship, index) => {
            return (
              <li key={index} className='shipItem'>
                <img src={ship.icon} className="shipIcon" alt="shipIcon"/>
                <Hitpoints hitPoints={ship.hitPoints - ship.hits} hits={ship.hits}/>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default Flotilla;
