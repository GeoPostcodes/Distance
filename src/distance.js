/*
    Compute the great-circle distance between two geographic points

    (C) 2019 by GeoPostcodes - GeoData Ltd


    The formula used to calculate the distance between two geographical points is called orthodromy, 
    and is defined as follows:
    
    Distance(A,B) = 6371 * ACos( Cos(LatA) * Cos(LatB) * Cos(LngB - LngA) + Sin(LatA) * Sin(LatB) )
    
    The resulting number is the distance in kilometers between point A and point B. If you wish to 
    return a result in miles (or any other unit), you must substitute the value 6371, which stands
    for the approximate radius of the Earth in km, by its equivalent in miles (or any other unit),
    that is, 3959 miles. Latitude and longitude values must be input in radians : radians = degrees * PI/180.

*/

brussels = {"lat":50.846710, "lng":4.352629};
paris = {"lat": 48.853286, "lng": 2.348792 };

d = distance(brussels, paris);


function distance(from, to)
{
  var R = 6371; // Radius of the earth in km, can be changed to 3959 for miles
  
  var dLat = deg2rad(to.lat - from.lat);
  var dLon = deg2rad(to.lng - from.lng); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(from.lat)) * Math.cos(deg2rad(to.lat)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;

  return d;
}

function deg2rad(deg)
{
  return deg * (Math.PI/180);
}
