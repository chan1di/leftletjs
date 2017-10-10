var lat_data;
var long_data;
var mymap = null;


Template.Demo.events({

    'submit form': function(event) {

        event.preventDefault();
        var abc = event.target.chandresh.value;
        console.log(abc);
        Meteor.call('Create', abc);
    }

});


Template.Demo.helpers({

    'categories': function() { //RETURN DEVICE COLLECTION
        return Demo.find();
    }

});


Template.Listview.events({

    'click #delete': function(event) {

        event.preventDefault();
        var abc = this._id;
        console.log(abc);
        Meteor.call('Deletdata', abc);

    },

    'click #edit': function(event) {

        event.preventDefault();
        var abc = this._id;
        console.log(abc);
        Session.set('getId', abc);

    }

});

Template.Update.events({

    'submit form': function(event) {

        var abc = event.target.chandreshs.value;
        var getID = Session.get('getId');
        Meteor.call('Updatedata', abc, getID);

    }

});

Template.Update.helpers({

    'getUpdate': function() {
        return Demo.findOne({ _id: Session.get('getId') });
    }

});

Template.wowza.events({

    'click #find_Geolocation': function(event) {
        event.preventDefault();
        var getVal = $("#address").val();
        console.log(getVal);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': getVal }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                lat_data = results[0].geometry.location.lat();
                long_data = results[0].geometry.location.lng()

            } else {
                alert("Something got wrong " + status);
            }
        });
        console.log(lat_data, "lat_long data", long_data);
        if (lat_data !== undefined) {
            console.log("if called");


            // ***********For custom markers ********

            // var greenIcon = L.icon({
            //     iconUrl: './meteor.png',
            //     // shadowUrl: 'leaf-shadow.png',

            //     iconSize: [38, 95], // size of the icon
            //     // shadowSize: [50, 64], // size of the shadow
            //     iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            //     // shadowAnchor: [4, 62], // the same for the shadow
            //     popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
            // });


            // *********Open popup**********
            // var popup = L.popup()
            //     .setLatLng([lat_data, long_data])
            //     .setContent('<p>Hello world!<br />This is a nice popup.</p>')
            //     .openOn(mymap);




            mymap = L.map('mapid').setView([lat_data, long_data], 13);
            // var marker = L.marker([lat_data, long_data], { draggable: true, keyboard: true, bubblingMouseEvents: true, title: "Drag me", attribution: "don't know yet", color: "red" }).addTo(mymap);
            // marker.bindPopup("here i am").openPopup();



            function onMapClick(e) {

	 	    var marker = L.marker(e.latlng, {
	 	        draggable: true,
	 	        title: "Resource location",
	 	        alt: "Resource Location",
	 	        riseOnHover: true
	 	    }).addTo(mymap).bindPopup(e.latlng.toString()).openPopup();
	 	    
	 	     // Update marker on changing it's position
	 	    marker.on("dragend", function (ev) {
	 	        var chagedPos = ev.target.getLatLng();
	 	        console.log(chagedPos.lat);
	 	        console.log(chagedPos.lng);
	 	        // geocoder.reverseGeocode( 33.7489, -84.3789, function ( err, data ) {
 
           //      });
	 	        this.bindPopup(chagedPos.toString()).openPopup();
	 	        this.bindTooltip(chagedPos.toString()).openTooltip();


	 	    });
	 	}
	 	mymap.on('click', onMapClick);
	 	
            // marker.on('dragend ', function(event) {
            //     var markers = event.target;
            //     var position = markers.getLatLng();
            //     var str = "string value";
            //     console.log(event.target.getLatLng());
            //     marker.bindTooltip(str).openTooltip();
            //     // 
            //     // marker.setLatLng(position, {draggable: true }).bindPopup(position).update();
            //     // marker.setLatLng(position, { id: uni, draggable: 'true' }).bindPopup(position).update();
            // });
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1IjoiY2hhbi0xZGkiLCJhIjoiY2o4azN6cjNkMDlzcTJxbXV1NmkwanYzciJ9.iEs0CzDiLng_q1Kvl2dAAQ'
            }).addTo(mymap);


        } else {
            alert("value undefined");
        }
        console.log(mymap, "mymap called");

        // need to check the multiple address code

        // if (mymap !== undefined || mymap !== null) {
        //     mymap.remove(); // should remove the map from UI and clean the inner children of DOM element
        //     console.log(mymap,"consoleing"); // nothing should actually happen to the value of mymap
        // }
    }

});