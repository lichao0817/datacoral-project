Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRestaurantLists = exports.writeJsonFile = exports.readJsonFile = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var readJsonFile = function readJsonFile(filePath) {
  var obj = JSON.parse(_fs2['default'].readFileSync(filePath, 'utf8'));
  return obj;
};

var writeJsonFile = function writeJsonFile(obj, filePath) {
  _fs2['default'].writeFile(filePath, JSON.stringify(obj), function (err) {
    if (err) throw err;
  });
};

var getRestaurantList = function getRestaurantList(restaurants) {
  var restaurantList = restaurants.map(function (restaurant, index, restaurants) {
    return {
      id: restaurant.id,
      borough: restaurant.borough,
      name: restaurant.name,
      cuisine: restaurant.cuisine
    };
  });
  return restaurantList;
};

var getRestaurantAddressList = function getRestaurantAddressList(restaurants) {
  var restaurantAddressList = restaurants.map(function (restaurant, index, restaurants) {
    var id = restaurant.id,
        address = restaurant.address;

    return Object.assign({
      id: id
    }, address);
  });
  return restaurantAddressList;
};

var getRestaurantGradeList = function getRestaurantGradeList(restaurants) {
  var restaurantGradeList = restaurants.map(function (restaurant, i, restaurants) {
    var grades = restaurant.grades,
        id = restaurant.id;

    var gradeList = grades.map(function (grade, index, grades) {
      return {
        id: id,
        __index: index,
        date: grade.date,
        grade: grade.grade
      };
    });
    return gradeList;
  });
  return restaurantGradeList;
};

var getRestaurantGradeScoreList = function getRestaurantGradeScoreList(restaurants) {
  var restaurantGradeScoreList = restaurants.map(function (restaurant, i, restaurants) {
    var grades = restaurant.grades,
        id = restaurant.id;

    var gradeScoreList = grades.map(function (grade, index, grades) {
      return Object.assign({
        id: id,
        __index: index
      }, grade.score);
    });
    return gradeScoreList;
  });
  return restaurantGradeScoreList;
};

var getRestaurantLists = function getRestaurantLists(restaurants) {
  var restaurantList = getRestaurantList(restaurants);
  var restaurantAddressList = getRestaurantAddressList(restaurants);
  var restaurantGradeList = getRestaurantGradeList(restaurants);
  var restaurantGradeScoreList = getRestaurantGradeScoreList(restaurants);

  return {
    restaurantList: restaurantList,
    restaurantAddressList: restaurantAddressList,
    restaurantGradeList: restaurantGradeList,
    restaurantGradeScoreList: restaurantGradeScoreList
  };
};

exports.readJsonFile = readJsonFile;
exports.writeJsonFile = writeJsonFile;
exports.getRestaurantLists = getRestaurantLists;