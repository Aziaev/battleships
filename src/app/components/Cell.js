import React, { Component } from 'react';
import hit from './../../assets/img/Hit.png';
import miss from './../../assets/img/Miss.png';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onClick(x, y, cellState) {
    if (cellState !== 'miss' && cellState !== 'hitted') {
      this.props.onCellClick(x, y);
    }
  }

  render() {
    let { cellState, onCellClick, x, y } = this.props;
    return (
      <div onClick={() => this.onClick(x, y, cellState)} className='cellStyle'>
        {cellState === 'miss' && <img src={miss} className='miss' alt='miss' width='auto' height='auto'/>}
        {cellState === 'hitted' && <img src={hit} className='hitted' alt='hitted' width='auto' height='auto'/>}
      </div>
    );
  }
}

export default Cell;
