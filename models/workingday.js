'use strict';
module.exports = (sequelize, DataTypes) => {
  const WorkingDay = sequelize.define('WorkingDay', {
    weekDay: DataTypes.STRING,
    workingDay: DataTypes.DATE,
    isWorking: DataTypes.BOOLEAN
  }, {});
  WorkingDay.associate = function(models) {
    // associations can be defined here
  };
  return WorkingDay;
};