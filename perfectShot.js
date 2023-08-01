const moves = ["north", "north", "west", "west", "north", "east", "north"];

// gives final positon of the parade after all the moves.
// takes an array of strings that contains the moves of the parade, consisting of north, south, east and west.
const finalPosition = function (moves) {
  let positionX = 0;
  let positionY = 0;
  const result = [];

  for (const move of moves) {
    try {
      switch (move) {
        case "north":
          positionY += 1;
          break;

        case "south":
          positionY -= 1;
          break;

        case "east":
          positionX += 1;
          break;

        case "west":
          positionX -= 1;
          break;

        default:
          throw new Error(`Invaild input in Array: ${move}`);
          break;
      }
    } catch (error) {
      //exit immediately if an error is caught so that the user can correct
      throw error;
    }
  }

  /*
  returned result is an array. The first position of that array is X
  While the second position is Y.
  */
  result.push(positionX);
  result.push(positionY);

  return result;
};

console.log(finalPosition(moves));
