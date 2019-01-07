'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    UserId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email: {
      type: DataTypes.STRING,
      unique: true
    },
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    Deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  users.associate = function (models) {
    users.hasMany(models.purchase_orders, {
      foreignKey: 'PurchaseOrderId'
    });
  };
  return users;
};