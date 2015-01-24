var Roll = function() {

  this.totalNumberOfHitPins = 0;

};

Roll.prototype.inputForPinHits = function(hits) {

  this.totalNumberOfHitPins += hits;

};
