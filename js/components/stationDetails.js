'use strict';
const StationDetails = _=>{
    const stationDetails = $("<div class='stationDetails'></div>");
    const name = $("<p>"+state.selectedStation.name+"</p>");
    const address = $("<p>"+state.selectedStation.address+"</p>");
    const description = $("<div class='container-product'></div>");

    const link = $("<a id='regresar' href='#'></a>");
    const iconLeft = $("<i class='fa fa-chevron-left'></i>");

    state.selectedStation.products.forEach((elemento)=>{
        let product = $("<div class='product'>"+elemento+"</div>");
        description.append(product);
    });

    link.append(iconLeft);
    stationDetails.append(name);
    stationDetails.append(address);
    stationDetails.append(description);
    stationDetails.append(link);

    link.on('click',(e) => {
        e.preventDefault();
        state.selectedStation = null;
        update();
    });

    return stationDetails;
};
