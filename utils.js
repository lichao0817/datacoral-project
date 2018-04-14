import fs from 'fs';

const readJsonFile = function(filePath) {
  const obj = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return obj;
};

const writeJsonFile = function(obj, filePath) {
  fs.writeFile(filePath, JSON.stringify(obj), function(err) {
    if (err) throw err;
  });
};

const getRestaurantList = function(restaurants) {
  const restaurantList = restaurants.map((restaurant, index, restaurants) => ({
    id: restaurant.id,
    borough: restaurant.borough,
    name: restaurant.name,
    cuisine: restaurant.cuisine,
  }));
  return restaurantList;
};

const getRestaurantAddressList = function(restaurants) {
  const restaurantAddressList = restaurants.map(
    (restaurant, index, restaurants) => {
      const { id, address } = restaurant;
      return {
        id,
        ...address,
      };
    },
  );
  return restaurantAddressList;
};

const getRestaurantGradeList = function(restaurants) {
  const restaurantGradeList = restaurants.map((restaurant, i, restaurants) => {
    const { grades, id } = restaurant;
    const gradeList = grades.map((grade, index, grades) => ({
      id,
      __index: index,
      date: grade.date,
      grade: grade.grade,
    }));
    return gradeList;
  });
  return restaurantGradeList;
};

const getRestaurantGradeScoreList = function(restaurants) {
  const restaurantGradeScoreList = restaurants.map(
    (restaurant, i, restaurants) => {
      const { grades, id } = restaurant;
      const gradeScoreList = grades.map((grade, index, grades) => ({
        id,
        __index: index,
        ...grade.score,
      }));
      return gradeScoreList;
    },
  );
  return restaurantGradeScoreList;
};

const getRestaurantLists = function(restaurants) {
  const restaurantList = getRestaurantList(restaurants);
  const restaurantAddressList = getRestaurantAddressList(restaurants);
  const restaurantGradeList = getRestaurantGradeList(restaurants);
  const restaurantGradeScoreList = getRestaurantGradeScoreList(restaurants);

  return {
    restaurantList,
    restaurantAddressList,
    restaurantGradeList,
    restaurantGradeScoreList,
  };
};

export { readJsonFile, writeJsonFile, getRestaurantLists };
