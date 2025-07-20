(function () {
'use strict';

angular.module('MenuApp', [])
.controller('MenuCategoriesController', MenuCategoriesController)
.service('MenuCategoriesService', MenuCategoriesService);

MenuCategoriesController.$inject = ['MenuCategoriesService'];
function MenuCategoriesController(MenuCategoriesService) {
  var menu = this;

  MenuCategoriesService.getMenuCategories().then(function (response) {
    menu.categories = response.data;
  })
  .catch(function (error) {
    console.log("Something went wrong:", error);
  });
}

MenuCategoriesService.$inject = ['$http'];
function MenuCategoriesService($http) {
  var service = this;

  service.getMenuCategories = function () {
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/categories.json"
    });
  };
}

})();
