var Scoreboard = function() {

  this.frames = [];
  this.generateFrames();

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

Scoreboard.prototype.findCurrentFrame = function() {

  var remainingFrames = [];

  this.frames.forEach( function(frame) {
    if (frame.isOver() === false) {
      remainingFrames.push(frame);
    }
  });

  var currentFrame = remainingFrames.shift();
  return currentFrame
};