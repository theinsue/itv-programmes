(function () {
   angular
        .module('app')
        .controller('programmesController', programmesController);

    programmesController.$inject = ['programmes'];
    
    function programmesController(programmes) {
        
        var vm = this;
        vm.programmes = [];

        init();

        function init() {
            getProgrammes();
        }

        /** LIST FROM API **/
        function getProgrammes() {
            programmes.getProgrammes()
                .then(function (data) {
                    vm.programmes = reArrangeProgrammes(data._embedded.programmes);
                });
        }

        /** RE-ARRANGE LIST **/
        function reArrangeProgrammes(programmes) {

            var popularCount = 0;
            var pointer = 7;

            for (var i = 0; i < programmes.length; i++) {
                popularCount = (i % pointer == 0) ? popularCount + 1 : popularCount;
            }

            var popular = programmes.splice(1, popularCount - 1);  // cut out popular programmes, start remove from position 1

            for (var i = 0; i < popular.length; i++) {          // loop every popular programmes and move
                var moveTo = (i == 0)  ?   pointer  :  (i+1)*pointer;
                programmes.splice(moveTo, 0, popular[i]);
            }

            return programmes;
        }
    }
})();