function myMap() {
    let uluru = {lat: 33.125555, lng:-117.315329};
    let mapProp= {
      mapId: "4705919bdd5ab86a",
      center:new google.maps.LatLng(33.125555,-117.315329),
      zoom:10,



    };
    let map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    let marker = new google.maps.Marker({position: uluru, map: map});
  }

  //Personal note: This won't display in the small view. It seems to be because there is default styling applied to
  //instances of the Google Map object. Because the default styling is written inline, it's not possible to override 
  //that styling without using !important inside a CSS rule, but that's obviously a little janky. I'm not sure how
  //to change that default styling to make it work in small views. 