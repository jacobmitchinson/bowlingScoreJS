var Frame = function() {

  this.rollCount = 0;
  this.score = 0;
  this.rolls = [];

};

Frame.prototype.store = function(roll) {

  if (this.rollCount < 2) {
    this.rolls.push(roll);
    this.rollCount += 1;
    this.calculateScore();
  }

};

Frame.prototype.isRollStrike = function() {

};


Frame.prototype.calculateScore = function() {

  this.score = 0;

  var self = this;

  this.rolls.forEach( function(roll) {
    self.score += roll.totalNumberOfHitPins;
  });

};

Frame.prototype.isOver = function() {

  if (this.rollCount === 2 || this.score === 10) {
    this.over = true;
    return true;
  } else {
    return false;
  }

};
