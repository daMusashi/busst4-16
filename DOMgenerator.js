function DOMgenerator(){}

DOMgenerator.getBusstopDom = function(busstop){
    // container
    var dom = $("<div>");
    $(dom).addClass("busstop");
    $(dom).addClass("panel");
    $(dom).addClass("panel-primary");

    // namn + avstånd
    var name = $("<p>");
    $(name).addClass("busstop-name");
    $(name).addClass("panel-heading");
    $(name).text(busstop.name + " - " + busstop.distance + "m");

    var departures = $("<p>");
    $(departures).addClass("panel-body");
    $(departures).text("TODO: Avgångar");

    $(dom).append(name);
    $(dom).append(departures);

    return dom;
};

DOMgenerator.getBusstopListDom = function(title, busstopList){
    var dom = $("<div>");
    $(dom).addClass("busstop-list");
    $(dom).addClass("well");

    var listTitle = $("<h3>");
    $(listTitle).addClass("busstop-list-title");
    $(listTitle).text(title);

    var chDist = $("<button>");
    $(chDist).text("Ändra avstånd");
    $(chDist).addClass("btn");
    $(chDist).addClass("btn-info");
    $(chDist).addClass("btn-xs");
    $(chDist).addClass("pull-right");

    $(listTitle).append(chDist);

    $(dom).append(listTitle);

    var listBody = $("<div>");
    $(listBody).addClass("busstop-list-body");

    for(var i = 0; i < busstopList.count(); i++){
        var stop = busstopList.stops[i];
        $(listBody).append(this.getBusstopDom(stop));
    }

    $(dom).append(listBody);

    return dom;
};
