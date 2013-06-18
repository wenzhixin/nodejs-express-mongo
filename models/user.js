/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */

var config = require('../config'),
	db = require('monk')(config.hostDb),
	users = db.get('users');

function User() {
	this.username = '';
	this.password = '';
}

User.prototype = {
	
	construct: User,
	
	login: function(callback) {
		users.findOne({
			username: this.username, 
			password: this.password
		}, callback);
	}
};

module.exports = User;