var TopPot = function(storeLoc, minCustPerHour, maxCustPerHour,
  avgDonutsPerHour, hoursOpen) {
  this.location = storeLoc;
  this.minimum = minCustPerHour;
  this.maximum = maxCustPerHour;
  this.average = avgDonutsPerHour;
  this.hours = hoursOpen;

  this.donutsPerHour = function() {
    return Math.floor(Math.random() * (this.maximum - this.minimum + 1)+
      this.minimum) * this.average;
  };
  this.donutsPerDay = function() {
    return Math.floor(this.donutsPerHour() * this.hours);
  };
  };

var DonutMaster = function() {
  this.storeList = [];
  this.addStore = function(storeLoc, minCustPerHour, maxCustPerHour,
    avgDonutsPerHour, hoursOpen) {
      var newStore = new TopPot(storeLoc, minCustPerHour,
        maxCustPerHour, avgDonutsPerHour, hoursOpen);
      this.storeList.push(newStore);
    };
  this.generateReport = function() {
    for (var index = 0; index < this.storeList.length; index++) {
      console.log("The " + this.storeList[index].location + " store sells " +
        this.storeList[index].donutsPerHour().toFixed(2) +
        " donuts per hour and bakes " +
        this.storeList[index].donutsPerDay().toFixed(2) + " donuts a day.");
    }
  };
};

var dm = new DonutMaster();

dm.addStore('Downtown', 8, 43, 4.5, 12);
dm.addStore('Capitol Hill', 4, 37, 2, 11);
dm.addStore('South Lake Union', 9, 23, 6.33, 11);
dm.addStore('Wedgewood', 2, 28, 1.25, 10);
dm.addStore('Ballard', 8, 58, 3.75, 10);
dm.addStore('Pike Market', 9, 55, 5, 12);
dm.generateReport();
