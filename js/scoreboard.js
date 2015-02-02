var Scoreboard = function() {
  this.frames = [];
  this._generateFrames();
  this.totalScore = 0;
};

Scoreboard.prototype.addToScore = function(frameNumber, roll) {
  var desiredFrame = this._findFrame(frameNumber);
  desiredFrame.newRoll(roll);
};

Scoreboard.prototype.showScoreForFrame = function(frameNumber) {
  var desiredFrame = this._findFrame(frameNumber);
  var rollsForFrame = this._findRolls(desiredFrame);
  return this._addRolls(rollsForFrame);
};

Scoreboard.prototype._findFrame = function(frameNumber) {
  var frames = this._allFrames();
  var desiredFrame = frames[frameNumber - 1];
  return desiredFrame;
};

Scoreboard.prototype._allFrames = function() {
  return this.frames;
};

Scoreboard.prototype._findRolls = function(frame) {
  return frame.showRolls();
};

Scoreboard.prototype._addRolls = function(frame) {
  var score = 0;
  var self = this;
  frame.forEach( function(roll) {
    score += self._addScoreOfRolls(score, roll);
  });
  return score;
};

Scoreboard.prototype._showScoreForRoll = function(roll) {
  return roll.showTotal();
};

Scoreboard.prototype._addScoreOfRolls = function(score, roll) {
  return score += this._showScoreForRoll(roll);
};


Scoreboard.prototype._generateFrames = function() {
  for(var i = 0; i < 9; i++) {
    this.frames.push(new Frame());
  }
  this.frames.push(new TenthFrame());
};

