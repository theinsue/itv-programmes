(function () {
    angular
        .module('app')
        .factory('programmes', programmes);

    programmes.$inject = ['$http'];
    
    function programmes($http) {
        
        var vm = this;
        vm.configHeader = { headers:  { 'Accept': apiHeaders    }};

        var service = { getProgrammes:  getProgrammes };
        return service;

        /** GET THE LIST OF PROGRAMMES FROM API **/
        function getProgrammes(){
            return $http.get(apiUrl + apiParams, vm.configHeader)
                    .then(getComplete)
                    .catch(getFailed);
            
            function getComplete(response) {
                return response.data;
            }

            function getFailed(response) {
                alert ('Failed to connect to API');
                return response.status;
            }
        }  
    }
})();