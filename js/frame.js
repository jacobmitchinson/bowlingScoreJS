var Frame = function() {

  this.rollCount = 0;
  this.isOver = false;

};

Frame.prototype.roll = function() {

 var roll = new Roll();
 this.rollCount += 1;
 this.checkOver();

};

Frame.prototype.checkOver = function() {

  if (this.rollCount === 2) {
    this.isOver = true;
  }

};
