import Ember from 'ember';

export default Ember.Component.extend({
	isNew:true,

	actions: {

   saveNewLibrary(data) {
      debugger;
       data.save().then(()=>{   
        console.log("recorded added - Library");
     	this.transitionTo('libraries.list')});
   },

   saveExistingLibrary(libraryData) {
      debugger;
      libraryData.save().then(() => this.transitionTo('libraries.new'));
    
    }

   
   }

});
