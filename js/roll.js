var Roll = function(hits) {

  this.totalNumberOfHitPins = 0;
  this.inputForPinHits(hits);

};

Roll.prototype.inputForPinHits = function(hits) {

  this.totalNumberOfHitPins += hits;

};

Roll.prototype.isStrike = function() {

  if (this.totalNumberOfHitPins === 10) {
    return true;
  }

};
