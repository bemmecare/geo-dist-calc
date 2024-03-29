/**
 * CreatedOn- 07/06/2016
 * 1.sourcePoints is an object containing latitude,longitude of a one point(start point).
 * 2.destinationPoints is an object containing latitude,longitude of a another point(end point).
 * 3.Get the latitude and longitude of both the points.
 * 4.Get the Radius of earth which is approximate to 6371 km.
 * 5.calculate the difference of two lat long.
 * 6.apply the ‘haversine’ formula.
 */

exports.discal = function(sourcePoints,destinationPoints) {
 
 	var destinationLat = destinationPoints.latitude; 
	var destinationLong = destinationPoints.longitude; 
	var sourceLat = sourcePoints.latitude; 
	var sourceLong = sourcePoints.longitude; 

	var earthRadius = 6371; // km 

	var latitudeDiff = destinationLat-sourceLat;
	var dLat = latitudeDiff.toRad();  
	var longitudeDiff = destinationLong-sourceLong;
	var dLon = longitudeDiff.toRad();  
	
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(sourceLat * Math.PI / 180) * Math.cos(destinationLat * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);  
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	
	var d = earthRadius * c;
	var m = d * 0.621371; 
	
	var obj = {
		kilometers: d,
		miles: m
	};
	
	return obj;
};
Number.prototype.toRad = function() {
	   return this * Math.PI / 180;
};