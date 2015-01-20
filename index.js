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
 * var points = turf.featurecollection([
 *  turf.point(-0.235004, 5.551918, {'marker-color': '#00f'}),
 *  turf.point(-0.209598, 5.56439, {'marker-color': '#f00'}),
 *  turf.point(-0.197753, 5.556018, {'marker-color': '#00f'}),
 *  turf.point(-0.217323, 5.549526, {'marker-color': '#000'}),
 *  turf.point(-0.211315, 5.543887, {'marker-color': '#0f0'}),
 *  turf.point(-0.202217, 5.547134, {'marker-color': '#00f'}),
 *  turf.point(-0.231227, 5.56644, {'marker-color': '#0f0'})
 * ]);
 *
 * //=points
 *
 * var filtered = turf.remove(points, 'marker-color', '#00f');
 *
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
