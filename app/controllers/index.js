import Ember from 'ember';

export default Ember.Controller.extend({
	
	emailAddress:'',
	isEmailValid:Ember.computed.match('emailAddress' ,/^.+@.+\..+$/),
	
	isDisabled: Ember.computed.not('isEmailValid'),

	actions : {
      
      saveInvitation() {
      	//alert(`save inprogress : ${this.get('emailAddress')}`);
        var _rootObject=this;
        const emailValue= this.get('emailAddress');

        const newInvitaion = this.store.createRecord('invitation',{email:emailValue});
        newInvitaion.save().then(function(response) {

            console.log("response : {0}",response);
         	_rootObject.set('responseMessage',`Thanks for register , status email will be sent to ${_rootObject.get('emailAddress')}`);
            _rootObject.set('emailAddress','');

        }
        )
        
      
      }

	}
});
