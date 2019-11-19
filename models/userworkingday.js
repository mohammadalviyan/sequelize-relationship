'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserWorkingDay = sequelize.define('UserWorkingDay', {
    userId: DataTypes.INTEGER,
    workingId: DataTypes.INTEGER
  }, {});
  UserWorkingDay.associate = function(models) {
    // associations can be defined here
    UserWorkingDay.belongsTo(models.User, {foreignKey: 'userId'})
    UserWorkingDay.belongsTo(models.WorkingDay, {foreignKey: 'workingDayId'})
  };
  return UserWorkingDay;
};