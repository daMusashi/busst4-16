function DOMgenerator(){}

DOMgenerator.getBusstopDom = function(busstop){
    // container
    var dom = $("<div>");
    $(dom).addClass("busstop");

    // namn
    var name = $("<p>");
    $(name).addClass("busstop-name");
    $(name).text(busstop.name);

    // avstånd
    var dist = $("<p>");
    $(dist).addClass("busstop-dist");
    $(dist).html("Avstånd: <strong>"+busstop.distance+"</strong>m");

    $(dom).append(name);
    $(dom).append(dist);

    return dom;
};

DOMgenerator.getBusstopListDom = function(title, busstopList){
    var dom = $("<div>");
    $(dom).addClass("busstop-list");

    var listTitle = $("<h3>");
    $(listTitle).addClass("busstop-list-title");
    $(listTitle).text(title);

    $(dom).append(listTitle);

    for(var i = 0; i < busstopList.count(); i++){
        var stop = busstopList.stops[i];
        $(dom).append(this.getBusstopDom(stop));
    }

    return dom;
};
