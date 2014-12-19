app.factory('appService', function() {
    'use strict';

    var user = '',
        repo = '';

    return {
        setUser: function(username) {
            user = username;
        },
        getUser: function() {
            return user;
        },

        setRepo: function(reponame) {
            repo = reponame;
        },
        getRepo: function() {
            return repo;
        }
    };
});
