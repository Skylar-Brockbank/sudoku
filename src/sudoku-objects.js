export default function Board() {
  let column = [];
  for (let i = 0; i < 9; i++) {
    let row = [];
    let sequence = [1,2,3,4,5,6,7,8,9];
    for (let j = 0; j < 9; j++) {
      let x = (Math.floor(Math.random()*100)%(sequence.length));
      row.push(sequence[x]);
      sequence.splice(x,1);
    }
    column.push(row);
  }
  this.spaces = column; 
}


Board.prototype.utilityCheckPast = function(y,x){
  for(let i = 0; i<y;i++){
    if (this.spaces[y][x] === this.spaces[i][x]){
      return true;
    }
  }
  return false;
};

Board.prototype.changeSpace = function(y,x){
  let temp = this.spaces[y].splice(x,1);
  this.spaces[y].push(temp);
};

Board.prototype.checkColumn = function () {
  //row loop first
  for(let x = 0; x<9; x++){
    //test printing block
    console.log("=======================");
    console.log(this.displayAllStuff());
    console.log("======================="+x);
    //end test printing block
    for(let y = 0; y<9; y++){
      while(this.utilityCheckPast(y,x)){
        console.log("triggered by: "+y+","+x);
        this.changeSpace(y,x);
      }
    }
  }
};

Board.prototype.displayAllStuff = function() {
  for(let x=0;x < this.spaces.length;x++){
    console.log(this.spaces[x].join());
  }
};