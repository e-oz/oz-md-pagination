'use strict';
angular.module('oz.mdPagination', []).directive('ozMdPagination', function () {
  return {
    restrict: 'E',
    template: '<div layout="row">' +
    '<md-button flex="10" ng-click="prev()" aria-label="Previous"><span ng-class="leftIcon"></span></md-button>' +
    '<md-slider flex ng-model="ngModel" min="{{min}}" max="{{max}}" aria-label="Pages slider" ng-class="sliderClass"></md-slider>' +
    '<md-button flex="10" ng-click="next()" aria-label="Next"><span ng-class="rightIcon"></span></md-button>' +
    '</div>',
    scope: {
      ngModel: '=',
      min: '@',
      max: '@',
      step: '@',
      sliderClass: '@',
      leftIcon: '@',
      rightIcon: '@'
    },
    link: function (scope) {
      scope.leftIcon = scope.leftIcon || 'ion-arrow-left-b';
      scope.rightIcon = scope.rightIcon || 'ion-arrow-right-b';
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