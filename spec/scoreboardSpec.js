describe("Scoreboard", function() {

  var frame;
  var roll;

  beforeEach( function() {
    frame1 = new Frame();
    frame2 = new Frame();
    roll = new Roll(5);
  });

  describe("should show score for all frames", function() {
    frame.store(roll(5))
    frame.store(roll(4))
    expect(scoreboard.totalScore).toEqual(1)
  });

});