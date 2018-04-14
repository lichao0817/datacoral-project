var _utils = require('./utils');

var inputFileFolder = 'inputFiles/';
var outputFileFolder = 'outputFiles/';

var filePath = inputFileFolder;
var arg = process.argv.slice(2, 3);
if (arg) {
  filePath = arg + '.json';
} else {
  filePath = filePath + 'input.json';
}

var _readJsonFile = (0, _utils.readJsonFile)(filePath),
    restaurants = _readJsonFile.restaurants;

var _getRestaurantLists = (0, _utils.getRestaurantLists)(restaurants),
    restaurantList = _getRestaurantLists.restaurantList,
    restaurantAddressList = _getRestaurantLists.restaurantAddressList,
    restaurantGradeList = _getRestaurantLists.restaurantGradeList,
    restaurantGradeScoreList = _getRestaurantLists.restaurantGradeScoreList;

(0, _utils.writeJsonFile)(restaurantList, outputFileFolder + 'restaurant.json');
(0, _utils.writeJsonFile)(restaurantAddressList, outputFileFolder + 'restaurant_address.json');
(0, _utils.writeJsonFile)(restaurantGradeList, outputFileFolder + 'restaurant_grade.json');
(0, _utils.writeJsonFile)(restaurantGradeScoreList, outputFileFolder + 'restaurant_grade_score.json');