const _ = require('lodash');
const math = require('mathjs');

class Matrices {
  constructor(options) {
    this._matrices = [];
    this._userLocation = options.userLocation;
  }

  addMatrix(matrix) {
    this._matrices.push(matrix);
  }

  optimizeMatrices() {
    for (let i = 0; i < this._matrices.length; i += 1) {
      const matrix = this._matrices[i];
      matrix.optimizeStores();
    }
  }

  getResult() {
    const optimizedMatrices = [];

    for (let i = 0; i < this._matrices.length; i += 1) {
      const matrix = this._matrices[i];
      const stores = matrix.stores;
      const storesResult = [];
      let storesOptimizedTotal = 0;
      let storesOptimizedTotalWithDistance = 0;
      let goBackDistanceToUserLocation = 0

      for (let j = 0; j < stores.length; j += 1) {
        const store = stores[j];
        let targetStore = null;
        if (j === 0) {
          targetStore = { location: this._userLocation };
        } else {
          targetStore = stores[j - 1];
        }

        const optimizedTotal = store.getTotalOfSelectedStoresGoods();
        const distancePrice = store.getDistancePriceFrom(targetStore);

        storesOptimizedTotal += optimizedTotal;
        storesOptimizedTotalWithDistance += (optimizedTotal + distancePrice);

        if (j === (stores.length - 1)) {
          goBackDistanceToUserLocation = store.getDistancePriceFrom({ location: this._userLocation });
          storesOptimizedTotalWithDistance += goBackDistanceToUserLocation;
        }

        storesResult.push({
          id: store.id,
          name: store.name,
          location: store.location,
          total: store.getTotal(),
          optimizedTotal,
          distance: store.getDistanceFrom(targetStore),
          distancePrice,
          items: store.storesGoods,
        });
      }
      optimizedMatrices.push({
        matrixId: matrix.id,
        stores: storesResult,
        storesOptimizedTotal,
        storesOptimizedTotalWithDistance: math.round(storesOptimizedTotalWithDistance, 2),
        goBackDistanceToUserLocation,
      });
    }

    const singleMinimumMatrix = _.minBy(optimizedMatrices, (o) => {
      return o.storesOptimizedTotalWithDistance;
    });

    const mostOptimizedMatrices = _.filter(optimizedMatrices, (o) => {
      return o.storesOptimizedTotalWithDistance === singleMinimumMatrix.storesOptimizedTotalWithDistance;
    });

    const result = {
      matricesCount: this._matrices.length,
      requesterLocation: this._userLocation,
      optimizedMatrices,
      mostOptimizedMatrices,
      mostOptimizedMatrix: singleMinimumMatrix,
    };

    return result;
  }
}

module.exports = Matrices;
