function Position(lat, long){
    this.long = long || 0;
    this.lat = lat || 0;
    this.adress = null;
}

Position.prototype.getAdress = function(){
    if(this.adress){
        return this.adress;
    } else {
        // hämta adress från Google
        // this.adress = svar
    }
};

Position.prototype.getDistance = function(otherPosition){
    // return distance from Google API
}
