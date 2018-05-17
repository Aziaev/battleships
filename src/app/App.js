import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash'
import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import '../assets/css/App.css';
import BattleField from './components/BattleField.js';
import Nav from "./components/Nav";
import Stats from "./components/Stats";
import { shipTypes } from './constants/constants';
import { getBattleField, makeClone } from './helpers/generateBattleField';
import { getMaxHits } from './helpers/getMaxHits';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      battleField: null,
      flotilla: null,
      shots: 0,
      hits: 0,
      maxHits: 0,
      screenMode: null
    }
  }

  componentWillMount() {
    const maxHits = getMaxHits();
    let newFlotilla = _.cloneDeep(shipTypes);
    this.setState({
      flotilla: newFlotilla,
      maxHits: maxHits
    });
  }

  onClick() {
    let newFlotilla = _.cloneDeep(shipTypes);
    this.setState({
      battleField: getBattleField(),
      hits: 0,
      shots: 0,
      flotilla: newFlotilla
    })
  }

  resetGame() {
    let newFlotilla = _.cloneDeep(shipTypes);
    this.setState({
      battleField: null,
      hits: 0,
      shots: 0,
      flotilla: newFlotilla
    })
  }

  onCellClick(x, y) {
    let newBattleField = makeClone(this.state.battleField);
    let shot = this.state.shots + 1;
    let hits = this.state.hits;
    let newFlotilla = [...this.state.flotilla];
    let cellValue = this.state.battleField[x][y];
    if (cellValue >= 100) {
      switch (cellValue) {
        case 100:
          newFlotilla[0].hits = newFlotilla[0].hits + 1;
          break;
        case 200:
          newFlotilla[1].hits = newFlotilla[1].hits + 1;
          break;
        case 300:
          newFlotilla[2].hits = newFlotilla[2].hits + 1;
          break;
        case 400:
          newFlotilla[3].hits = newFlotilla[3].hits + 1;
          break;
        case 500:
          newFlotilla[4].hits = newFlotilla[4].hits + 1;
          break;
      }
      newBattleField[x][y] = 'hitted';
      hits += 1;
      this.setState({
        battleField: newBattleField,
        hits: hits,
        shots: shot,
        flotilla: newFlotilla
      })
    } else {
      newBattleField[x][y] = 'miss';
      this.setState({
        battleField: newBattleField,
        shots: shot
      })
    }
  }

  updateDimensions(dimension) {
    if (dimension < 992) {
      this.setState({
        screenMode: 'tablet'
      })
    } else {
      this.setState({
        screenMode: 'desktop'
      })
    }
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.updateDimensions(window.innerWidth));
    this.updateDimensions(window.innerWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.updateDimensions(window.innerWidth));
  }

  render() {
    let { battleField, flotilla, hits, screenMode, shots } = this.state;
    let statsPanel = (
      <Stats
        flotilla={flotilla}
        hits={hits}
        shots={shots}
      />
    );
    let battleFieldPanel = (
      <BattleField
        hits={hits}
        battleField={battleField}
        onClick={() => this.onClick()}
        onCellClick={(x, y) => this.onCellClick(x, y)}
        screenMode={screenMode}
      />
    );

    return (
      <div className='main-content'>
        <Nav
          resetGame={() => this.resetGame()}
          screenMode={screenMode}
        />
        <Grid>
          {
            screenMode === 'desktop'
              ? <Row className='show-grid'>{statsPanel}{battleFieldPanel}</Row>
              : <Row className='show-grid'>{battleFieldPanel}{statsPanel}</Row>
          }
        </Grid>
      </div>
    );
  }
}

export default App;
