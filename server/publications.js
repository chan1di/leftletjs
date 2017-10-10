// USED ON THE SERVER-SIDE TO DEFINE WHAT DATA SHOULD BE AVAILABLE TO USERS OF THE APPLICATION

Meteor.publish("demo", function () {
    return Demo.find();
});
