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

  it("should retrieve frame rolls", function() {
    frame.newRoll(roll);
    frame.newRoll(roll);
    expect(scoreboard.retreiveRollsFromFrame(frame)).toEqual([roll,roll]);
  });






});