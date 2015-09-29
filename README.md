# oz-md-pagination
Pagination directive for AngularMaterial

#Live example 
[http://codepen.io/evgeniyoz/pen/meRbMy?editors=101](CodePen)

#Code Example  
```
<oz-md-pagination ng-model="Impl.listOffset" min="0" max="{{Impl.users.length - Impl.listBy}}" step="{{Impl.listBy}}" slider-class="md-primary"></oz-md-pagination>
...
<tr ng-repeat="user in Impl.users | limitTo:Impl.listBy:Impl.listOffset">
 ...
</tr>
```
