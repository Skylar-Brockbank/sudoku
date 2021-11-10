//([0],[8]) ([1],[8]) ([2],[8]) ([3],[8]) ([4],[8]) ([5],[8]) ([6],[8]) ([7],[8]) ([8],[8])
//([0],[7]) ([1],[7]) ([2],[7]) ([3],[7]) ([4],[7]) ([5],[7]) ([6],[7]) ([7],[7]) ([8],[7])
//([0],[6]) ([1],[6]) ([2],[6]) ([3],[6]) ([4],[6]) ([5],[6]) ([6],[6]) ([7],[6]) ([8],[6])
//([0],[5]) ([1],[5]) ([2],[5]) ([3],[5]) ([4],[5]) ([5],[5]) ([6],[5]) ([7],[5]) ([8],[5])
//([0],[4]) ([1],[4]) ([2],[4]) ([3],[4]) ([4],[4]) ([5],[4]) ([6],[4]) ([7],[4]) ([8],[4])
//([0],[3]) ([1],[3]) ([2],[3]) ([3],[3]) ([4],[3]) ([5],[3]) ([6],[3]) ([7],[3]) ([8],[3])
//([0],[2]) ([1],[2]) ([2],[2]) ([3],[2]) ([4],[2]) ([5],[2]) ([6],[2]) ([7],[2]) ([8],[2])
//([0],[1]) ([1],[1]) ([2],[1]) ([3],[1]) ([4],[1]) ([5],[1]) ([6],[1]) ([7],[1]) ([8],[1])
//([0],[0]) ([1],[0]) ([2],[0]) ([3],[0]) ([4],[0]) ([5],[0]) ([6],[0]) ([7],[0]) ([8],[0])
//([i],[j])


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