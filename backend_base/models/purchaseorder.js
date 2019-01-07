'use strict';
module.exports = (sequelize, DataTypes) => {
  const purchase_orders = sequelize.define('purchase_orders', {
    PurchaseOrderId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    AmountOrdered: DataTypes.INTEGER,
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
  purchase_orders.associate = function (models) {
    purchase_orders.belongsTo(models.users, {
      foreignKey: 'UserId'
    });
    purchase_orders.hasMany(models.products, {
      foreignKey: 'ProductId'
    });
  };
  return purchase_orders;
};