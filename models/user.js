'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    companyId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    // 1:1
    User.belongsTo(models.Company, {foreignKey: 'companyId', as: 'company'})
    User.belongsToMany(models.WorkingDays, {through: 'UserWorkingDays', foreignKey: 'userId', as: 'days'})
  };
  return User;
};