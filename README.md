turf-remove
===========
[![Build Status](https://travis-ci.org/Turfjs/turf-remove.svg)](https://travis-ci.org/Turfjs/turf-remove)

Removes any features from a feature collection that match a property value.

```js
var remove = require('turf-remove')
var point = require('turf-point')
var featurecollection = require('turf-featurecollection')

var trees = t.featurecollection([t.point(1,2, {species: 'oak'}),
                                 t.point(2,1, {species: 'dogwood'}),
                                 t.point(3,1, {species: 'maple'})])

var remaining = remove(points, 'species', 'dogwood')

console.log(remaining)
```