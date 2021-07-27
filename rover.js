
var grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

let rover = {
 
        direction :"N",
        x:0,
        y:0,
        travelLog: [0,0]

}


function turnRight(){
    console.log("turnRight was called!");
    switch (rover.direction){
      case "N":
        rover.direction="E";
        break;
      case "W":
        rover.direction="N";
        break;
      case "S":
        rover.direction="W";
        break;
      case "E":
        rover.direction="S";
        break; 
    }
}
function turnLeft(){
    console.log("turnLeft was called!");
    switch (rover.direction){
        case "N":
          (rover).direction="W";
          break;
        case "W":
          (rover).direction="S";
          break;
        case "S":
          (rover).direction="E";
          break;
        case "E":
          (rover).direction="N";
          break; 
        default:
 }
}

function moveForward(){
  console.log("moveForward was called!");
  switch (rover.direction){
    case rover.direction = "N": 
    if (rover.y === 0){
      console.log("ne sortez pas du champ!")
    } else {
     rover.y += 1
     grid[rover.y].splice(rover.y , 1, "N")
    }
    break;
    case rover.direction = "S":
      if (rover.y === 10){
        console.log("ne sortez pas du champ!")
      } else {
       rover.y += 1 
       grid[rover.y].splice(rover.y, 1, "S")
      }
      break;
    case rover.direction = "E":
      if(rover.x === 10){
        console.log("ne sortez pas du champ!")
      } else {
       
        rover.x += 1;
        grid[rover.x].splice(rover.x , 1, "E")
       
      }
      break;
    case rover.direction = "W": 
      if(rover.x === 0) {
        console.log("ne sortez pas du champ!")
      } else {
        
        rover.x += 1;
        grid[rover.x].splice(rover.x , 1, "W")
       
      }
  } 
     
}

turnRight()
moveForward()
turnRight()
moveForward()
turnRight()
moveForward()
turnLeft()
moveForward()
console.table(grid)




// SI le robot est y = 0 
//ALORS le robot depasse le champ
//SINON le robot avance de 1y 



















// function moveForward(){
//     console.log("moveForward was called");
//     switch ((rover).direction){
      
//       case rover.direction = "N" :
//         if (rover.y === 0){
//          console.log ("You can't place Rover outside of the board!");
//          console.log (`Rover current position is ${rover.x},${rover.y}`);
//        }
//        else if (grid[rover.y-1] != null) {
//         //report the obstacle as found
//           console.log ("Rover can crash with an obstacle! STOP!");
//           console.log (`Rover current position is ${rover.x},${rover.y}`);
//         }
//        else {
//          rover.y--;
//          rover["travelLog"].push([rover.x,rover.y]);
//          console.log (`The last positions of the Rover are: ${rover.travelLog}`);
//          console.log (`Rover current position is ${rover.x},${rover.y}`);
//        }
//       break;
      
//       case rover.direction = "S" :
//         if (rover.y === 9){
//          console.log ("You can't place Rover outside of the board!");
//          console.log (`Rover current position is ${rover.x}${rover.y}`);
//        }
//         else if (grid[rover.y+1] != null) {
//           console.log ("Rover can crash with an obstacle! STOP!");
//           console.log (`Rover current position is ${rover.x},${rover.y}`);
//         } 
//           else {
//          rover.y++;
//          rover["travelLog"].push([rover.x,rover.y]);
//          console.log (`The last positions of the Rover are: ${rover.travelLog}`);
//          console.log (`Rover current position is ${rover.x},${rover.y}`); 
//        }
//       break;
        
//       case rover.direction = "W" :
//         if (rover.x === 0){
//          console.log ("You can't place Rover outside of the board!");
//          console.log (`Rover current position is ${rover.x},${rover.y}`);
//        }
//         else if (grid[rover.x-1] != null) {
//           console.log ("Rover can crash with an obstacle! STOP!");
//           console.log (`Rover current position is ${rover.x},${rover.y}`);
//         } 
//         else {
//          rover.x--;
//          rover["travelLog"].push([rover.x,rover.y]);
//          console.log (`The last positions of the Rover are: ${rover.travelLog}`);
//          console.log (`Rover current position is ${rover.x},${rover.y}`); 
//        }
//       break;
        
//       case rover.direction = "E" :
//         if (rover.x === 0){
//          console.log ("You can't place Rover outside of the board!");
//          console.log (`Rover current position is ${rover.x},${rover.y}`);
//        }
//         else if (grid[rover.x+1] != null) {
//           console.log ("Rover can crash with an obstacle! STOP!");
//           console.log (`Rover current position is ${rover.x},${rover.y}`);
//         } 
//         else {
//          rover.x++;
//          rover["travelLog"].push([rover.x,rover.y]); 
//          console.log (`The last positions of the Rover are: ${rover.travelLog}`); 
//          console.log (`Rover current position is ${rover.x},${rover.y}`); 
//        }
//       break;  
//    }
//   }
console.log(Object.entries(rover))