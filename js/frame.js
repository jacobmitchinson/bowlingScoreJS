var Frame = function() {

  this.rollCount = 0;
  this.isOver = false;
  this.score = 0;
  this.rolls = [];

};

Frame.prototype.store = function(roll) {

  if (this.rollCount < 2) {
    this.rolls.push(roll);
    this.rollCount += 1;
  }

};

Frame.prototype.calculateScore = function() {

  this.score = 0;

  var self = this;

  this.rolls.forEach( function(roll) {
    self.score += roll.totalNumberOfHitPins;
  });

};

Frame.prototype.checkOver = function() {

  if (this.rollCount === 2) {
    this.isOver = true;
  }

};
