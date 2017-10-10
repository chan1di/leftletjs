

Meteor.startup(() => {

    Meteor.methods({

    	'Create' : function(abc){
    		console.log(abc);
    			Demo.insert({
                naming : abc,
                status: 'active'
            });
    	},

    	'Updatedata': function(abc, getID){

    		Demo.update(getID, {
                $set: {
                    naming: abc,        
                    createdAt: new Date()
                }
            });

    	},

    	'Deletdata': function(abc){
    		Demo.remove(abc);
    	}

    });

});