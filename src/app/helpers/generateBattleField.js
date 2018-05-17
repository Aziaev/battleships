import { shipTypes } from "../constants/constants";

/*
* Method generates battlefield with placed ships
* */
export const getBattleField = () => {
  let battleField = [10];
  for (let i = 0; i < 10; i++) {
    battleField[i] = [10];
    for (let j = 0; j < 10; j++) {
      battleField[i][j] = null;
    }
  }
  for (let i = 0; i < shipTypes.length; i++) {
    battleField = generateShipPositions(shipTypes[i], battleField);
  }
  return battleField;
};

/*
* Generates random ship positions
*
* @param1 initial ship
* @param2 initial battlefield
*
* @returns updated battlefield
* */
const generateShipPositions = (ship, battleField) => {
  let shipStartPosition = null;
  let continueLoop = true;
  while (continueLoop) {
    shipStartPosition = getRandomCoordinate();
    if (positionIsFree(battleField, shipStartPosition)) {
      let x = shipStartPosition[0];
      let y = shipStartPosition[1];
      let directions = getDirections();
      battleField[x][y] = ship.id * 100;
      battleField = refillNeighbourCells(battleField, x, y, ship.id);

      for (let i = 0; i < directions.length; i++) {

        let tempBattlefield = makeClone(battleField);
        let newBattleField = tryDirections(directions[i], ship, shipStartPosition, tempBattlefield);
        if (newBattleField !== null) {
          continueLoop = false;
          battleField = [...newBattleField];
          break;
        } else {
          tempBattlefield = newBattleField = null;
        }
      }
    }
  }
  return battleField;
};

/*
*  Method tries different direction of ship placement
*    @param1 direction
*    @param2 initialship
*    @param3 start position
*    @param4 initial battlefield
*
*    @returns new battlefield or null
* */
function tryDirections(direction, ship, shipStartPosition, battleField) {
  let x = shipStartPosition[0];
  let y = shipStartPosition[1];
  let wrongDirection = false;

  for (let i = 1; i < ship.size; i++) {
    switch (direction) {
      case 0:
        if (y + i > 9) {
          wrongDirection = true;
          break;
        } else if (positionIsFree(battleField, [x, y + i]) || battleField[x][y + i] === ship.id) {
          battleField[x][y + i] = ship.id * 100;
          refillNeighbourCells(battleField, x, y + i, ship.id);
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }
      case 1:
        if (x + i > 9) {
          wrongDirection = true;
          break;
        } else if (positionIsFree(battleField, [x + i, y]) || battleField[x + i][y] === ship.id) {
          battleField[x + i][y] = ship.id * 100;
          refillNeighbourCells(battleField, x + i, y, ship.id);
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }
      case 2:
        if (y - i < 0) {
          wrongDirection = true;
          break;
        } else if (positionIsFree(battleField, [x, y - i]) || battleField[x][y - i] === ship.id) {
          battleField[x][y - i] = ship.id * 100;
          refillNeighbourCells(battleField, x, y - i, ship.id);
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }
      case 3:
        if (x - i < 0) {
          wrongDirection = true;
          break;
        } else if (positionIsFree(battleField, [x - i, y]) || battleField[x - i][y] === ship.id) {
          battleField[x - i][y] = ship.id * 100;
          refillNeighbourCells(battleField, x - i, y, ship.id);
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }

      default:
        break;
    }
  }
  if (wrongDirection) {
    return null;
  } else {
    return battleField;
  }
}

/*
*  Method marks neighbour cells of initial position on battlefield
*
*  @param1 initial battlefield
*  @param2 x axis coordinate
*  @param3 y axis coordinate
*  @param4 initial ship id
*
*  @returns updated battleField
* */
const refillNeighbourCells = (battleField, x, y, shipId) => {
  if (y < 9 && battleField[x][y + 1] === null) {
    battleField[x][y + 1] = shipId;
  }
  if (x < 9 && y < 9 && battleField[x + 1][y + 1] === null) {
    battleField[x + 1][y + 1] = shipId;
  }
  if (x < 9 && battleField[x + 1][y] === null) {
    battleField[x + 1][y] = shipId;
  }
  if (x < 9 && y > 0 && battleField[x + 1][y - 1] === null) {
    battleField[x + 1][y - 1] = shipId;
  }
  if (y > 0 && battleField[x][y - 1] === null) {
    battleField[x][y - 1] = shipId;
  }
  if (x > 0 && y > 0 && battleField[x - 1][y - 1] === null) {
    battleField[x - 1][y - 1] = shipId;
  }
  if (x > 0 && battleField[x - 1][y] === null) {
    battleField[x - 1][y] = shipId;
  }
  if (x > 0 && y < 9 && battleField[x - 1][y + 1] === null) {
    battleField[x - 1][y + 1] = shipId;
  }
  return battleField;
};

/*
*  Checks position
*
*  @param1 initial battlefield
*  @param2 initial positin
*
*  @return true if position is free
* */
const positionIsFree = (battleField, position) => {
  let x = position[0];
  let y = position[1];
  return !(battleField[x][y] > 0);
};

/*
* Returns random sequence of ship placing directions
* */
const getDirections = () => {
  let directions = [];
  for (let i = 0; directions.length < 4; i++) {
    let number = getRandomNumber(4);
    if (directions.indexOf(number) === -1) {
      directions.push(number);
    }
  }
  return directions;
};

/*
* Returns random coordinate
* */
const getRandomCoordinate = () => {
  const max = 9;
  return [Math.floor(Math.random() * max), Math.floor(Math.random() * max)]
};

/*
* Returns random number in range from 0 to @param 'max'
* */
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max)
};

/*
*  Makes clone of battleField
*
*  @param initial battleField
*
*  @returns clone of initial battleField
* */
export const makeClone = (battleField) => {
  let clone = [10];
  for (let i = 0; i < 10; i++) {
    clone[i] = [10];
    for (let j = 0; j < 10; j++) {
      clone[i][j] = battleField[i][j];
    }
  }
  return clone;
};


