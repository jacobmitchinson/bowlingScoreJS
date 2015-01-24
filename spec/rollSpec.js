describe("Roll", function() {

  var roll;

  it("should record the total number of pins hit", function() {
    roll = new Roll(3);
    expect(roll.totalNumberOfHitPins).toEqual(3);
  });

  it("should know when a roll is a strike", function() {
    roll = new Roll(10);
    expect(roll.isStrike()).toBe(true);
  });

});
