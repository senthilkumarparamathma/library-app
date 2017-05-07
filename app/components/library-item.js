import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		deleteLibrary(libraryData) {
			let confirmation =confirm('Are you sure?');
			if(confirmation)
			{
			  libraryData.destroyRecord();
			}
		}
	}
});
