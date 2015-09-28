'use strict';
angular.module('oz.mdPagination', []).directive('ozMdPagination', function () {
  return {
    restrict: 'E',
    template: '<div layout="row">' +
    '<md-button flex="10" ng-click="prev()"><span class="ion-arrow-left-b"></span></md-button>' +
    '<md-slider flex ng-model="ngModel" min="{{min}}" max="{{max}}" ng-class="sliderClass"></md-slider>' +
    '<md-button flex="10" ng-click="next()"><span class="ion-arrow-right-b"></span></md-button>' +
    '</div>',
    scope: {
      ngModel: '=',
      min: '@',
      max: '@',
      step: '@',
      sliderClass: '@'
    },
    link: function (scope) {
      scope.next = function () {
        scope.ngModel = parseInt(scope.ngModel) + parseInt(scope.step);
        if (scope.ngModel > scope.max) {
          scope.ngModel = scope.max;
        }
      };
      scope.prev = function () {
        scope.ngModel = parseInt(scope.ngModel) - parseInt(scope.step);
        if (scope.ngModel < scope.min) {
          scope.ngModel = scope.min;
        }
      }
    }
  };
});