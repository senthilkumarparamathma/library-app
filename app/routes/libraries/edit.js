import Ember from 'ember';

export default Ember.Route.extend({

 model(paramas) {

 	return this.store.findRecord('library',paramas.library_id);
 
 },

 actions: {
 	/*
 	saveLibrary(libraryData) {

      libraryData.save().then(() => this.transitionTo('libraries.new'));
    
    },
     
    */
    willTransition(transition) {
   
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
        
        debugger;

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
      
    }
    

 }

});
