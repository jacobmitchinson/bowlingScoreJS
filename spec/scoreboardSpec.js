describe("Scoreboard", function() {

  var scoreboard;
  var frame1;
  var roll;

  beforeEach( function() {
    scoreboard = new Scoreboard();
    frame = new Frame();
    roll = new Roll(5);
  });

  it("should store 10 frames", function() {
    expect(scoreboard.frames.length).toEqual(10);
  });

  it("should be able to find a frame", function() {
    scoreboard.addToScore(roll);
    frame1 = scoreboard.findFrame(1);
    expect(frame1.score).toEqual(5);
  });

  it("should know which frame player is on", function() {
    expect(scoreboard.findCurrentFrame()).toEqual(scoreboard.frames.shift());
  });

  it("should be able to add to the score of the frame", function() {
    scoreboard.addToScore(roll);
    expect(scoreboard.frameScore()).toEqual(5);
  });

  it("should calculate the total score", function() {
    scoreboard.addToScore(roll);
    scoreboard.addToScore(roll);
    expect(scoreboard.calculateTotalScore()).toEqual(10);
  });

  it("should calculate bonuses for strikes", function() {
    roll_strike = new Roll(10);
    scoreboard.addToScore(roll_strike);
    scoreboard.addToScore(roll);
    roll = new Roll(3);
    scoreboard.addToScore(roll);
    expect(scoreboard.calculateTotalScore()).toEqual(26);
  });

  it("should calculate bonuses for spares", function() {
    roll = new Roll(7);
    scoreboard.addToScore(roll);
    roll = new Roll(3);
    scoreboard.addToScore(roll);
    scoreboard.addToScore(roll);
    expect(scoreboard.calculateTotalScore()).toEqual(16);
  });

});