describe("Scoreboard", function() {

  var scoreboard;
  var frame1;
  var roll;

  beforeEach( function() {
    scoreboard = new Scoreboard();
    roll = new Roll(5);
  });

  it("should store 10 frames", function() {
    expect(scoreboard.frames.length).toEqual(10);
  });

  it("should know which frame player is on", function() {
    expect(scoreboard.findCurrentFrame()).toEqual(scoreboard.frames.shift());
  });



  it("should be able to add to the score of the frame", function() {
    scoreboard.addToScore(roll);
    expect(scoreboard.frameScore()).toEqual(5);
  });

});