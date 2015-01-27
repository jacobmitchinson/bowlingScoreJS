describe("TenthFrame", function() {

  var frame;
  var roll;

  beforeEach( function() {
    frame = new TenthFrame();
    roll = new Roll(5);
    roll_strike = new Roll(10);
  });


  it("should know when a 3rd roll is applicable", function() {
    frame.store(roll_strike);
    frame.store(roll_strike);
    frame.store(roll_strike);
    expect(frame.score).toEqual(30);
  });

  it("should know when a 3rd roll is not applicable", function() {
    frame.store(roll);
    roll = new Roll(3);
    frame.store(roll);
    frame.store(roll_strike);
    expect(frame.score).toEqual(8);
  });

  it("should return the score for each roll", function() {
    frame.store(roll);
    frame.store(roll);
    frame.store(roll_strike);
    expect(frame.roll1Score).toEqual(5);
    expect(frame.roll2Score).toEqual(5);
    expect(frame.roll3Score).toEqual(10);
  });

});