//https://stackoverflow.com/questions/53436428/marker-clustering-google-maps-api for reference
function initMap(){
    
      var location = {
        zoom:5,
        center:{lat:53.3938131, lng:-3.858913}
        }
var map = new google.maps.Map(document.getElementById('map'),location);
     

      //Add marker
      var markers = [

        //ire
        {
          coords:{lat:53.390259, lng:-9.119985},
          content:'<h3>Galway Gals</h3>' + '<p>Weekly Zoom Meet-up to discuss coding and projects<br>Tuesdays at 18:00</p>' 
        },
        {
          coords:{lat:53.37923, lng:-6.27201},
          content:'<h3>Pedicoders</h3>' + '<p>Pedicures and tech talk in Ava Salon, Dublin <br>First Thursdays of every month<br>19:30<br>*Must book in advance</p>'
        },
        {
          coords:{lat:51.9058, lng:-8.6162},
          content:'<h3>Cork Coders</h3>' + '<p>Meeting tbd <br> check back soon!</p>'
        },
        {
          coords:{lat:51.942662896, lng:-9.917162998},
          content:'<h3>Code in Kerry</h3>' + '<p>Meet-up at Curious Cat Cafe<br>Every Wednesday and Thursday Night<br>18:00-19:00</p>'
        },
        
      
       
        //uk

        {
          coords:{lat:52.3555, lng:1.1743},
          content:'<h3>Diss Girls Who Programme </h3>' + '<p>Every Saturday at the village hall, 10:00-11:30, coffee and snacks provided, <br> Bring your computer and programming skills</p>' 
        },
        {
          coords:{lat:52.870580, lng:1.122405},
          content:'<h3>North Norfolk Coding Queens/h3>' + '<p>Meet-up and Hackathon in Holt, at Byfords<br>Saturday May 22 2021</p>'
        },
        {
          coords:{lat:51.9713299, lng:-1.4300415},
          content:'<h3>Commuter Coders</h3>' + '<p>Ladies Night for Cocktail and Code<br>Thursdays at 19:00</p>' 
        },
        {
          coords:{lat:51.4760528, lng:0.0100015},
          content:'<h3>Greenwich Women in Tech </h3>' + '<p>Walk and Talk in Greenwich Park followed by coffee at Greenwich market <br> Every Sunday 11:00-14:00</p>' 
        },
        {
          coords:{lat:53.3667776, lng:-1.5064198},
          content:'<h3>Sheffield Code and Coffee </h3>' + '<p>Coffee and coding meet-up, all ages welcome. <br> 12:00-14:00 Sunday May 9 2021</p>' 
        },
      ];

      // Loop through markers
      var gmarkers = [];
      for(var i = 0; i < markers.length; i++){
        gmarkers.push(addMarker(markers[i]));

      }

      //Add Marker function
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,

        });

       

        //Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });
          marker.addListener('click',function(){
            infoWindow.open(map,marker);
          });
        }
        return marker;
      }
    var markerCluster = new MarkerClusterer(map, gmarkers, 
      {
        imagePath:
        'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
      });
    }
    


