describe("Frame", function() {

  var frame;



  it("should know how many rolls there have been", function() {
    frame = new Frame();
    frame.roll();
    expect(frame.rollCount).toEqual(1);
  });

  it("should know that there are a maximum of 2 rolls", function() {
    frame = new Frame();
    frame.roll();
    frame.roll();
    expect(frame.isOver).toBe(true);
  });


});