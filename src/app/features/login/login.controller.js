(function() {
  'use strict';

  angular
    .module('front')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(AuthenticateService) {
    var vm = this;
    console.log(AuthenticateService);

    vm.user = {};
    vm.user.username = "test@gmail.com";
    vm.user.password = "password";

    vm.send = send;


    /* functions */
    function send() {
      console.log("send");
      AuthenticateService.check();
      AuthenticateService.login(vm.user).then(function(response) {
        if (response.status == 200) {
          console.log("login success");
        }
        else {
          console.log("unsuccessful login");
        }
      })
    }

  }
})();
