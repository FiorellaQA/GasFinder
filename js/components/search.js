'use strict';

const StationItem = (station,update)=>{
    const stationItem = $("<div></div>");

    const name = $("<span>"+station.name+"</span>");
    const address = $("<p>"+station.address+"</p>");
    const district = $("<p>"+station.district+"</p>");

    const link = $("<a href='#'></a>");
    const iconMap =$("<i class='fa fa-map'></i>");

    link.append(iconMap);

    stationItem.append(name);
    stationItem.append(link);
    stationItem.append(address);
    stationItem.append(district);

    link.on("click",(e) => {
        e.preventDefault();
        state.selectedStation = station;
        update();

    });
    return stationItem;
};

const reRender = (listStations,filterStation,update)=>{
    listStations.empty();

    filterStation.forEach(station=>{
        listStations.append(StationItem(station, update));

    });
};
const Search = (update) => {
    const containerSearch = $("<section id='search'></section>");
	const containerInput = $("<div></div>");
	const input = $("<input type='text' placeholder='Ingresa tu distrito a buscar'/>");
    const iconSearch = $("<i class='fa fa-search'></i>");
    const listStations = $("<div class='list-stations'></div>");

    containerInput.append(input);
    containerInput.append(iconSearch);

    containerSearch.append(containerInput);
    containerSearch.append(listStations);

    input.on("keyup", () =>{
        if(input.val() != ""){
            var filterStation = filterByDistrict(state.stations,input.val());
        }

        reRender(listStations,filterStation,update);
    });

	return containerSearch;
};