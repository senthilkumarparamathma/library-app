import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('library');
	},
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
