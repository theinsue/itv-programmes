/** CONFIG **/
var apiUrl = 'http://promoted.hubsvc.itv.com/promoted/itvonline/dotcom/programmes/mostpopular';
var apiResponseSize = 21;
var apiParams = '?broadcaster=itv&features=rtmpe,subs-ttml&thor=false&size=' + apiResponseSize;
var apiHeaders = 'application/vnd.itv.hubsvc.programme.v3+hal+json';

angular
    .module('app', ['ngRoute'] )
    .config(function($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl : "templates/programmes_list.htm"
        })
});
