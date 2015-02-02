var Scoreboard = function() {
  this.frames = [];
  this._generateFrames();
  this.totalScore = 0;
};

Scoreboard.prototype._generateFrames = function() {
  for(var i = 0; i < 9; i++) {
    this.frames.push(new Frame());
  }
  this.frames.push(new TenthFrame());
};

