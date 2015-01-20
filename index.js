var featureCollection = require('turf-featurecollection');

/**
 * Takes a FeatureCollection, a property, and a value and
 * returns a FeatureCollection with features matching that
 * property-value pair removed.
 *
 * @module turf/remove
 * @param {FeatureCollection} features a FeatureCollection of any type
 * @param {String} property the property to filter
 * @param {String} value the value to filter
 * @return {FeatureCollection} the resulting FeatureCollection without features that match the property-value pair
 * @example
 * var trees = turf.featurecollection([
 *  turf.point(1,2, {species: 'oak'}),
 *  turf.point(2,1, {species: 'birch'}),
 *  turf.point(3,1, {species: 'oak'}),
 *  turf.point(2,2, {species: 'redwood'}),
 *  turf.point(2,3, {species: 'maple'}),
 *  turf.point(4,2, {species: 'oak'})
 * ]);
 * //=trees
 * var filtered = turf.remove(trees, 'species', 'oak');
 * //=filtered
*/
module.exports = function(collection, key, val) {
  var newFC = featureCollection([]);
  for(var i = 0; i < collection.features.length; i++) {
    if(collection.features[i].properties[key] != val) {
      newFC.features.push(collection.features[i]);
    }
  }
  return newFC;
}
