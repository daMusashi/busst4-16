// Singelton, ska inte instanseras med new. Konstruktorn därmed inte användbar
function API(){}

/**
 * Metod som använder Trafiklab.se API för att hämta de närmaste busshållplatserna
 * se https://www.trafiklab.se/api/resrobot-reseplanerare/resrobot-reseplanerare-narliggande-hallplatser
 *
 * @param position Position - Postionsobjektet för användarens plats
 * @param searchRadie int - OPTIONAL sökradie i meter
 */
API.getClosestStops = function(position, searchRadie){
    var key = "fa6e9a49-788e-4951-940e-9584e6a05458";
    var lat = position.lat;
    var long = position.long;
    var radie = searchRadie || 1000;
    var apiUrl = "https://api.resrobot.se/v2/location.nearbystops";

    $.get(apiUrl+"?key="+key+"&originCoordLat="+lat+"&originCoordLong="+long+"&format=json&r="+radie, function(data, status){
        // done-handler
        console.log("SVAR!");
        console.log(data);
        // Skapar Busstops av returdatan och lägger dem i BusstopList
        var stopList = new BusstopList();
        for(var i = 0; i < data.StopLocation.length; i++){
            var stop = data.StopLocation[i];
            var busstop = new Busstop(stop.id, stop.name, stop.lat, stop.lon, stop.dist);
            stopList.add(busstop);
        }

        console.log(stopList);

        $("#list").append(DOMgenerator.getBusstopListDom("Hållplatser inom 1km", stopList));

    }).fail(function(ajaxObj, status){
        // fail-handler
        console.log("AJAX MISSLYCKADES");
        console.log("Fel:"+status);
    });
};
