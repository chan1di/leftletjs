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
        var blue;
        var geocoder = new google.maps.Geocoder();
        // geocoder.geocode({ 'address': getVal }, function(results, status) {
        //     if (status == google.maps.GeocoderStatus.OK) {
        //         lat_data = results[0].geometry.location.lat();
        //         long_data = results[0].geometry.location.lng()

        //     } else {
        //         alert("Something got wrong " + status);
        //     }
        // });
        // console.log(lat_data, "lat_long data", long_data);
        // if (lat_data !== undefined) {
        //     console.log("if called");

        var planes = [

            {
                group: "Group1",
                marking: ["7C6B07", -40.99497, 174.50808],
                linkUrl: "/map1.png"
            },
            {
                group: "Group2",
                marking: ["7C6B38", -41.30269, 173.63696],
                linkUrl: "/map2.png"
            },
            {
                group: "Group3",
                marking: ["7C6CA1", -41.49413, 173.5421],
                linkUrl: "/map3.png"
            },
            {
                group: "Group4",
                marking: ["7C6CA2", -40.98585, 174.50659],
                linkUrl: "/map4.png"
            },
            {
                group: "Group3",
                marking: ["7C6CA2", -40.93163, 173.81726],
                linkUrl: "/map3.png"
            },
            {
                group: "Group2",
                marking: ["7C6CA2", -41.42079, 173.5783],
                linkUrl: "/map2.png"
            },
            {
                group: "Group1",
                marking: ["7C6CA2", -42.08414, 173.96632],
                linkUrl: "/map1.png"
            },


        ];

        console.log(planes.length);

        // ***********For custom markers ********

        var LeafIcon = L.Icon.extend({
            options: {
                // shadowUrl: 'leaf-shadow.png',
                iconSize: [45, 70],
                // shadowSize: [50, 64],
                iconAnchor: [22, 94],
                // shadowAnchor: [4, 62],
                popupAnchor: [-3, -76]
            }
        });


        mymap = L.map('mapid').setView([-41.3058, 174.82082], 13);


        for (var i = 0; i < planes.length; i++) {

            blue = new LeafIcon({ iconUrl: planes[i].linkUrl });
            var marker = L.marker([planes[i].marking[1], planes[i].marking[2]], {
                draggable: true,
                title: "Resource location",
                icon: blue,
                riseOnHover: true
            }).addTo(mymap).bindPopup(planes[i].group).openPopup();
            console.log(planes[i].marking[1]);
            marker.on("dragend", function(ev) {
                var chagedPos = ev.target.getLatLng();
                console.log(chagedPos.lat);
                console.log(chagedPos.lng);
                // this.bindPopup(chagedPos.toString()).openPopup();
                // this.bindTooltip(chagedPos.toString()).openTooltip();

            });
           
        }
         // mymap.removeLayer(marker);


        // Update marker on changing it's position

        // }
        // mymap.on('click', onMapClick);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiY2hhbi0xZGkiLCJhIjoiY2o4azN6cjNkMDlzcTJxbXV1NmkwanYzciJ9.iEs0CzDiLng_q1Kvl2dAAQ'
        }).addTo(mymap);


        // } else {
        //     alert("value undefined");
        // }
        console.log(mymap, "mymap called");


    }

});