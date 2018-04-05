var lat_data;
var long_data;
var mymap = null;
// var marker_arr = [];
var Group1_val = [];
var Group2_val = [];
var Group3_val = [];
var Group4_val = [];
var marker;

Template.Demo.events({

    'submit form': function(event) {

        event.preventDefault();
        var abc = event.target.chandresh.value;
        console.log(abc);
        Meteor.call('Create', abc);
    },
    'click #go': function(event) {
        // alert("working");
        var domain = $('#domain').val();
        console.log(domain);
        $('#web').load(domain); // SERIOUSLY!
 
        // $.ajax({
        //     url: 'http://news.bbc.co.uk',
        //     type: 'GET',
        //     success: function(res) {
        //         var headline = $(res.responseText).text();
        //         alert(headline);
        //     }
        // });
 
// Works with $.get too!
         // $("#web").html('<object data="https://www.google.co.in"/>');
    //     $('#web').load('https://www.google.co.in', function(response, status, xhr) {
    //         if (status == "error") {
    //             var msg = "Sorry but there was an error: ";
    //             console.log(msg + xhr.status + "<=====");
    //         }
    //     });
    }

});


Template.Demo.helpers({

    'categories': function() { //RETURN DEVICE COLLECTION
        return Demo.find();
    }

});


// Template.Listview.events({

//     'click #delete': function(event) {

//         event.preventDefault();
//         var abc = this._id;
//         console.log(abc);
//         Meteor.call('Deletdata', abc);

//     },

//     'click #edit': function(event) {

//         event.preventDefault();
//         var abc = this._id;
//         console.log(abc);
//         Session.set('getId', abc);

//     }

// });

// Template.Update.events({

//     'submit form': function(event) {

//         var abc = event.target.chandreshs.value;
//         var getID = Session.get('getId');
//         Meteor.call('Updatedata', abc, getID);

//     }

// });

// Template.Update.helpers({

//     'getUpdate': function() {
//         return Demo.findOne({ _id: Session.get('getId') });
//     }

// });

// Template.wowza.events({

//     'click #find_Geolocation': function(event) {
//         event.preventDefault();
//         var getVal = $("#address").val();
//         console.log(getVal);
//         var blue;
//         var geocoder = new google.maps.Geocoder();
//         Group1_val = [];
//         Group2_val = [];
//         Group3_val = [];
//         Group4_val = [];
//         marker;
//         // marker_arr = [];


//         var planes = [

//             {
//                 group: "Group1",
//                 marking: ["7C6B07", -40.99497, 174.50808],
//                 linkUrl: "/map1.png"
//             },
//             {
//                 group: "Group2",
//                 marking: ["7C6B38", -41.30269, 173.63696],
//                 linkUrl: "/map2.png"
//             },
//             {
//                 group: "Group3",
//                 marking: ["7C6CA1", -41.49413, 173.5421],
//                 linkUrl: "/map3.png"
//             },
//             {
//                 group: "Group4",
//                 marking: ["7C6CA2", -40.98585, 174.50659],
//                 linkUrl: "/map4.png"
//             },
//             {
//                 group: "Group3",
//                 marking: ["7C6CA2", -40.93163, 173.81726],
//                 linkUrl: "/map3.png"
//             },
//             {
//                 group: "Group2",
//                 marking: ["7C6CA2", -41.42079, 173.5783],
//                 linkUrl: "/map2.png"
//             },
//             {
//                 group: "Group1",
//                 marking: ["7C6CA2", -42.08414, 173.96632],
//                 linkUrl: "/map1.png"
//             },


//         ];

//         console.log(planes.length);

//         // ***********For custom markers ********

//         var LeafIcon = L.Icon.extend({
//             options: {
//                 // shadowUrl: 'leaf-shadow.png',
//                 iconSize: [45, 70],
//                 // shadowSize: [50, 64],
//                 iconAnchor: [22, 94],
//                 // shadowAnchor: [4, 62],
//                 popupAnchor: [-3, -76]
//             }
//         });


// mymap = L.map('mapid').setView([-41.3058, 174.82082], 13);


// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'pk.eyJ1IjoiY2hhbi0xZGkiLCJhIjoiY2o4azN6cjNkMDlzcTJxbXV1NmkwanYzciJ9.iEs0CzDiLng_q1Kvl2dAAQ'
// }).addTo(mymap);


// for (var i = 0; i < planes.length; i++) {

//     blue = new LeafIcon({ iconUrl: planes[i].linkUrl });
//     marker = L.marker([planes[i].marking[1], planes[i].marking[2]], {
//         draggable: true,
//         title: "Resource location",
//         icon: blue,
//         riseOnHover: true
//     }).bindPopup(planes[i].group).openPopup();
//     // marker_arr.push(marker);

//     if (planes[i].group == "Group1") {
//         Group1_val.push(marker);
//     } else if (planes[i].group == "Group2") {
//         Group2_val.push(marker);
//     } else if (planes[i].group == "Group3") {
//         Group3_val.push(marker);
//     } else {
//         Group4_val.push(marker);
//     }

// }


// var group1_layer = L.layerGroup(Group1_val);
// var group2_layer = L.layerGroup(Group2_val);
// var group3_layer = L.layerGroup(Group3_val);
// var group4_layer = L.layerGroup(Group4_val);

// $("#hide_blue").click(function(event) {
//     event.preventDefault();

//     if (mymap.hasLayer(group1_layer)) {
//         $(this).removeClass('selected');
//         mymap.removeLayer(group1_layer);
//     } else {
//         mymap.addLayer(group1_layer);
//         $(this).addClass('selected');
//     }
// });

// $("#hide_pink").click(function(event) {
//     event.preventDefault();

//     if (mymap.hasLayer(group2_layer)) {
//         $(this).removeClass('selected');
//         mymap.removeLayer(group2_layer);
//     } else {
//         mymap.addLayer(group2_layer);
//         $(this).addClass('selected');
//     }
// });

// $("#hide_lightblue").click(function(event) {
//     event.preventDefault();

//     if (mymap.hasLayer(group3_layer)) {
//         $(this).removeClass('selected');
//         mymap.removeLayer(group3_layer);
//     } else {
//         mymap.addLayer(group3_layer);
//         $(this).addClass('selected');
//     }
// });

// $("#hide_green").click(function(event) {
//     event.preventDefault();

//     if (mymap.hasLayer(group4_layer)) {
//         $(this).removeClass('selected');
//         mymap.removeLayer(group4_layer);
//     } else {
//         mymap.addLayer(group4_layer);
//         $(this).addClass('selected');
//     }
// });



// console.log(Group1_val, "group1");
// console.log(Group2_val, "group2");
// console.log(Group3_val, "group3");
// console.log(Group4_val, "group4");


// } else {
//     alert("value undefined");
// }
// console.log(mymap, "mymap called");


// }

// });