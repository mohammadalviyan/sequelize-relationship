'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserWorkingDay = sequelize.define('UserWorkingDay', {
    userId: DataTypes.INTEGER,
    workingId: DataTypes.INTEGER
  }, {});
  UserWorkingDay.associate = function(models) {
    // associations can be defined here
  };
  return UserWorkingDay;
};