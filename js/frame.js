var Frame = function() {

  this.rollCount = 0;
  this.isOver = false;
  this.score = 0;

};

Frame.prototype.roll = function(hits) {

 var roll = new Roll();
 roll.inputForPinHits(hits);
 this.recordHits(roll);
 this.rollCount += 1;
 this.checkOver();

};

Frame.prototype.recordHits = function(roll) {

  this.score += roll.totalNumberOfHitPins;

};

Frame.prototype.checkOver = function() {

  if (this.rollCount === 2) {
    this.isOver = true;
  }

};
