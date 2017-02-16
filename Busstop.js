function Busstop(id, name, lat, long, dist){
    this.id = id;
    this.name = name;
    this.position = new Position(lat, long);
    this.distance = dist;
}
