'use strict';
module.exports = (sequelize, DataTypes) => {
  const WorkingDay = sequelize.define('WorkingDay', {
    weekDay: DataTypes.STRING,
    workingDay: DataTypes.DATE,
    isWorking: DataTypes.BOOLEAN
  }, {});
  WorkingDay.associate = function(models) {
    // associations can be defined here
    WorkingDay.belongsToMany(models.User, {through: 'UserWorkingDays', foreignKey: 'workingDayId', as: 'employes'})
  };
  return WorkingDay;
};