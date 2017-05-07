import Ember from 'ember';

export default Ember.Route.extend({

  model()
  {
      return this.store.createRecord('library');
  },

 actions: {
   /*
   saveLibrary(data) {
      debugger;
       data.save().then(()=>{   
        console.log("recorded added - Library");
     	this.transitionTo('libraries.list')});
   },
    */
    willTransition() {
       debugger;
      // rollbackAttributes() removes the record from the store
      //this.controller.get('model').rollbackAttributes();


      let model = this.controller.get('model');

      if (model.get('isNew')) {
            model.destroyRecord();
       }
    }
    
 }

});
