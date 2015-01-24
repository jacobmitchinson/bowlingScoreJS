describe("Frame", function() {

  var frame;

  it("should know how many rolls there have been", function() {
    frame = new Frame();
    frame.roll();
    expect(frame.rollCount).toEqual(1);
  });



});