var Frame = function() {

  this.rollCount = 0;

};

Frame.prototype.roll = function() {

 var roll = new Roll();
 this.rollCount += 1;

};