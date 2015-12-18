module.exports = function(AppUser) {
	AppUser.disableRemoteMethod("count", true);
};
