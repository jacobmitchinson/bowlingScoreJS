TenthFrame.prototype = new Frame();

TenthFrame.prototype.constructor=TenthFrame;

function TenthFrame() {

  this.rollCount = 0;
  this.rolls = [];
  this.score = 0;
  this.roll1Score = 0;
  this.roll2Score = 0;
  this.roll3Score = 0;

}


TenthFrame.prototype.store = function(roll) {

  if (this.isOver() === false && this.rollCount != 3) {
    this.rolls.push(roll);
    this.rollCount += 1;
    this.calculateScore();
    this.calculateRollScore();
  } else {
    return false
  }


};

//  if strike or spare then there is a third throw else there isn't
//
//

TenthFrame.prototype.isOver = function() {

  if ( this.rollCount < 2 || (this.rolls.slice(-1)[0].totalNumberOfHitPins === 10) || (this.roll1Score + this.roll2Score === 10) ) {
    return false;
  } else {
    return true;
  }

};

TenthFrame.prototype.calculateRollScore = function() {

  var self = this;

  var i = 0;

  this.rolls.forEach( function(roll) {

    if (i === 0) {
      self.roll1Score = roll.totalNumberOfHitPins;
      i++;
    } else if (i === 1) {
      self.roll2Score = roll.totalNumberOfHitPins;
      i++;
    } else {
      self.roll2Score = roll.totalNumberOfHitPins;
    }

  });


};
