'use strict';

const filterByDistrict = (stations,query) => {
	if(stations){
		return stations.filter(station =>{
			if(station.district.toLowerCase().indexOf(query.toLowerCase())!= -1){
				return station;
			}
		});
	}

}
