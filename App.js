
// Konstruktor för singeltonen App. Den är meningslös då den inte körs
function App(){};

// Sparar användarens position rapporterad av webbläsaren
App.userPosition = null; // sparar en Position

// Körs när HTML-dokumentet laddats (sätter upp miljön)
App.init = function(){
    // Ta reda på user position, kör start() när färdigt (skicka som callback)
    navigator.geolocation.getCurrentPosition(App.start);
}

// Körs när miljön är satt och appen ska starta
App.start = function(userPosition){
    this.userPosition = new Position(userPosition.coords.latitude, userPosition.coords.longitude);

    API.getClosestStops(this.userPosition);

    console.log(this.userPosition);
}