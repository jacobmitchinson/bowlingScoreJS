var Frame = function() {

  this.rollCount = 0;
  this.rolls = [];
  this.score = 0;
  this.roll1Score = 0;
  this.roll2Score = 0;

};

Frame.prototype.store = function(roll) {

  if (this.rollCount < 2 && this.isOver() === false) {
    this.rolls.push(roll);
    this.rollCount += 1;
    this.calculateScore();
    this.calculateRollScore();
  } else {
    return false
  }

};


Frame.prototype.calculateScore = function() {

  this.score = 0;

  var self = this;

  this.rolls.forEach( function(roll) {
    self.score += roll.totalNumberOfHitPins;
  });

};

Frame.prototype.calculateRollScore = function() {

  var self = this;

  var i = 0;

  this.rolls.forEach( function(roll) {

    if (i === 0) {
      self.roll1Score = roll.totalNumberOfHitPins;
      i++;
    } else {
      self.roll2Score = roll.totalNumberOfHitPins;
    }

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
