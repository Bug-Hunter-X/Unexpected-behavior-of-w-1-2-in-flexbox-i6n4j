```javascript
<div class="flex">
  <div class="bg-red-500 p-4 w-1/2 flex-grow"></div>
  <div class="bg-blue-500 p-4 w-1/2 flex-grow"></div>
</div>
```
By adding `flex-grow`, the divs will now correctly occupy half the width of their parent container. Alternatively, using `flex-1` achieves the same result more concisely: 
```javascript
<div class="flex">
  <div class="bg-red-500 p-4 flex-1"></div>
  <div class="bg-blue-500 p-4 flex-1"></div>
</div>
```