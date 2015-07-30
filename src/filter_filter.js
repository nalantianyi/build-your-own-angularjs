function filterFilter() {
  return function(array, filterExpr) {
    return _.filter(array, filterExpr);
  };
}

register('filter', filterFilter);
