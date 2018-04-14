import { readJsonFile, writeJsonFile, getRestaurantLists } from './utils';

const inputFileFolder = 'inputFiles/';
const outputFileFolder = 'outputFiles/';

let filePath = inputFileFolder;
const arg = process.argv.slice(2, 3);
if (arg) {
  filePath = arg + '.json';
} else {
  filePath = filePath + 'input.json';
}

const { restaurants } = readJsonFile(filePath);
const {
  restaurantList,
  restaurantAddressList,
  restaurantGradeList,
  restaurantGradeScoreList,
} = getRestaurantLists(restaurants);

writeJsonFile(restaurantList, outputFileFolder + 'restaurant.json');
writeJsonFile(
  restaurantAddressList,
  outputFileFolder + 'restaurant_address.json',
);
writeJsonFile(restaurantGradeList, outputFileFolder + 'restaurant_grade.json');
writeJsonFile(
  restaurantGradeScoreList,
  outputFileFolder + 'restaurant_grade_score.json',
);
