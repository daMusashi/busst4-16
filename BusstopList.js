function BusstopList(){
    this.stops = [];
}

BusstopList.prototype.count = function(){
    return this.stops.length;
};

BusstopList.prototype.add = function(busstop){
    this.stops.push(busstop);
    // TODO kör förvald sorteringsfunktion (byDistance)
};

BusstopList.prototype.remove = function(busstop){
    // TODO
};

BusstopList.prototype.sortBybDistance = function(){
    // TODO
};
