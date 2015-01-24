describe("Roll", function() {

  var roll;

  it("should record the total number of pins hit", function() {
    roll = new Roll(3);
    expect(roll.totalNumberOfHitPins).toEqual(3);
  });

});
