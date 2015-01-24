describe("Frame", function() {

  var frame;

  beforeEach( function() {
    frame = new Frame();
  });

  it("should know how many rolls there have been", function() {

    frame.roll();
    expect(frame.rollCount).toEqual(1);
  });

  it("should know that there are a maximum of 2 rolls", function() {
    frame.roll();
    frame.roll();
    expect(frame.isOver).toBe(true);
  });

  it("should record the score from each roll", function() {
    frame.roll(1);
    expect(frame.score).toEqual(1);
  });


});