/* jshint node: true */

module.exports = function(environment) {
    var ENV = {
        environment: environment,
        baseURL: '/',
        locationType: 'auto',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        }
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        ENV.APP.LOG_ACTIVE_GENERATION = true;
        ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        ENV.APP.LOG_VIEW_LOOKUPS = true;

        ENV.APP.API_HOST = 'http://localhost:8080'
    }

    if (environment === 'test') {
        ENV.baseURL = '/'; // Testem prefers this...
    }

    if (environment === 'production') {
        // ENV.APP.API_HOST = 'http://58.251.151.194:8210'
        ENV.APP.API_HOST = ''
    }

    return ENV;
};
