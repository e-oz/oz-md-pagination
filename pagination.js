'use strict';
angular.module('oz.mdPagination', []).directive('ozMdPagination', function () {
  return {
    restrict: 'E',
    template: '<div layout="row" style="position: relative">' +
    '<md-button type="button" flex="5" ng-click="prev()" aria-label="Previous" style="min-width: 25px;"><span ng-class="leftIcon"></span></md-button>' +
    '<span style="position: absolute; text-align: center; font-size: 0.75rem; right: 10%; left: 10%; margin-top: 5px;" ng-show="step && max && textOf && textRecords">{{((ngModel-0)+1)}}-{{((ngModel-0)+(step-0))}} {{textOf}} {{(max-0)+(step-0)}} {{textRecords}}</span>' +
    '<md-slider flex ng-model="ngModel" min="{{min}}" max="{{max}}" step="1" aria-label="Pages slider" ng-class="sliderClass"></md-slider>' +
    '<md-button type="button" flex="5" ng-click="next()" aria-label="Next" style="min-width: 25px;"><span ng-class="rightIcon"></span></md-button>' +
    '</div>',
    scope: {
      ngModel: '=',
      min: '@',
      max: '@',
      step: '@',
      sliderClass: '@',
      leftIcon: '@',
      rightIcon: '@',
      textOf: '@',
      textRecords: '@'
    },
    link: function (scope) {
      if (!scope.textOf) {
        scope.textOf = 'of';
      }
      if (!scope.textRecords) {
        scope.textRecords = 'records';
      }
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
