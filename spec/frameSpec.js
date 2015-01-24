describe("Frame", function() {

  var frame;
  var roll;

  beforeEach( function() {
    frame = new Frame();
    roll = new Roll(5);
    roll_strike = new Roll(10);
  });

  describe("should use rolls and", function() {

    it("should store a roll", function() {
      frame.store(roll);
      expect(frame.rollCount).toEqual(1);
    });

    it("should not allow more than 2 rolls", function() {
      frame.store(roll);
      frame.store(roll);
      frame.store(roll);
      expect(frame.rollCount).toEqual(2);
    });

    it("should know how many rolls there have been", function() {
      frame.store(roll);
      expect(frame.rollCount).toEqual(1);
    });


  });

  describe("should use scores and", function() {

    it("should calculate the score", function() {
      frame.store(roll);
      frame.store(roll);
      frame.calculateScore();
      expect(frame.score).toEqual(10);
    });

    it("should know when frame is over", function() {
      frame.store(roll_strike);
      expect(frame.isOver()).toBe(true);
    });


  });



});