import sequelize from "../database.js";
import { DataTypes } from "sequelize";

const admin = sequelize.define(
  "admin",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: false, allowNull: false },
    password: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
);

const product = sequelize.define(
  "product",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    description: { type: DataTypes.TEXT, unique: false, allowNull: true },
  },
  {
    timestamps: false,
  }
);

const category = sequelize.define(
  "category",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category_name: { type: DataTypes.STRING, unique: true, allowNull: false },
  },
  {
    timestamps: false,
  }
);

const img = sequelize.define(
  "img",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    img_name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
  }
);

const info = sequelize.define(
  "info",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, unique: false, allowNull: false },
    desc_info: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
  }
);

const sale = sequelize.define("sale", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

product.hasMany(img, { as: "img" });
img.belongsTo(product);

product.hasMany(info, { as: "info" });
info.belongsTo(product);

category.hasMany(product);
product.belongsTo(category);

sale.hasOne(product);
sale.belongsTo(product);

export { admin, product, category, img, info, sale };
