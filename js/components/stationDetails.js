'use strict';
const StationDetails = _=>{
    const stationDetails = $("<div class='stationDetails'></div>");
    const name = $("<p>"+state.selectedStation.name+"</p>");
    const address = $("<p>"+state.selectedStation.address+"</p>");
    const description = $("<div class='container-product'></div>");

    state.selectedStation.products.forEach((elemento)=>{
        let product = $("<div class='product'>"+elemento+"</div>");
        description.append(product);
    });

    stationDetails.append(name);
    stationDetails.append(address);
    stationDetails.append(description);

    return stationDetails;
};
