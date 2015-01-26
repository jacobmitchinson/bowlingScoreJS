var Scoreboard = function() {

  this.frames = [];
  this.generateFrames();
  this.totalScore = 0;

};

Scoreboard.prototype.generateFrames = function() {

  for(var i = 0; i < 10; i++) {
    this.frames.push(new Frame());
  }

};

Scoreboard.prototype.addToScore = function(roll) {
  var currentFrame = this.findCurrentFrame();
  currentFrame.store(roll);
};

Scoreboard.prototype.frameScore = function() {
  var currentFrame = this.findCurrentFrame();
  return currentFrame.score;
};

Scoreboard.prototype.calculateTotalScore = function () {

  this.totalScore = 0;

  var self = this;

  this.frames.forEach( function(frame) {

    self.totalScore += frame.score;

  });

  return this.totalScore;

};



Scoreboard.prototype.findFrame = function (frame_number) {

  return this.frames[(frame_number - 1)];

};

Scoreboard.prototype.findCurrentFrame = function() {

  var remainingFrames = [];

  this.frames.forEach( function(frame) {
    if (frame.isOver() === false) {
      remainingFrames.push(frame);
    }
  });

  var currentFrame = remainingFrames.shift();
  return currentFrame;
};