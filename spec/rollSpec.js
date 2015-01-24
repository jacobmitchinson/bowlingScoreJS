describe("Roll", function() {

  var roll;

  it("should record the total number of pins hit", function() {
    roll = new Roll();
    expect(roll.totalNumberOfHitPins).toEqual(0);
  });

  it("should receive input for hit pins", function() {
    roll = new Roll();
    roll.inputForPinHits(2);
    expect(roll.totalNumberOfHitPins).toEqual(2);
  });

});
