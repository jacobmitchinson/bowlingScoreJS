describe("Scoreboard", function() {

  var scoreboard;
  var frame1;
  var roll;

  beforeEach( function() {
    scoreboard = new Scoreboard();
    frame = new Frame();
    roll = new Roll(5);
  });


  it("should add to the score of a frame", function() {
    scoreboard.addToScore(1, roll);
    expect(scoreboard.showScoreForFrame(1)).toEqual(5);
  });

  it("should show the score for a frame", function() {
    expect(scoreboard.showScoreForFrame(1)).toEqual(0);
  });

});