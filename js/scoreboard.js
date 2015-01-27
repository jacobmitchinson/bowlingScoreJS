var Scoreboard = function() {

  this.frames = [];
  this.generateFrames();
  this.totalScore = 0;

};

Scoreboard.prototype.generateFrames = function() {

  for(var i = 0; i < 9; i++) {
    this.frames.push(new Frame());
  }

  this.frames.push(new TenthFrame());

};

Scoreboard.prototype.addToScore = function(roll) {
  var currentFrame = this.findCurrentFrame();
  currentFrame.store(roll);
  this.calculateTotalScore();
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

  self.calculateStrikeBonuses();
  self.calculateSpareBonuses();
  return this.totalScore;

};


Scoreboard.prototype.calculateStrikeBonuses = function() {

  var self = this;
  var nextFrame;

  this.frames.forEach( function(frame, index) {

    if ((frame.rollCount === 1)) {

      if (frame.roll1Score === 10) {
        nextFrame = self.frames[index + 1];
        self.totalScore += nextFrame.score;
      }

    }

  });

};

Scoreboard.prototype.calculateSpareBonuses = function() {

  var self = this;
  var nextFrame;

  this.frames.forEach( function(frame, index) {

    if ((frame.rollCount === 2 && frame.score === 10 && frame.roll1Score != 10)) {
        nextFrame = self.frames[index + 1];
        self.totalScore += nextFrame.roll1Score;
    }

  });

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