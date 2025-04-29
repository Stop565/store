import sequelize from "../database.js";
import { DataTypes } from "sequelize";

const Admin = sequelize.define(
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

const Product = sequelize.define(
  "product",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    description: { type: DataTypes.TEXT, unique: false, allowNull: true },
    sale: { type: DataTypes.BOOLEAN, defaultValue: false },
    percent_sale: { type: DataTypes.INTEGER, defaultValue: 0 },
  },
  {
    timestamps: false,
  }
);

const Category = sequelize.define(
  "category",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category_name: { type: DataTypes.STRING, unique: true, allowNull: false },
  },
  {
    timestamps: false,
  }
);

const Img = sequelize.define(
  "img",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    img_name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
  }
);

const Info = sequelize.define(
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

Product.hasMany(Img, { as: "img" });
Img.belongsTo(Product);

Product.hasMany(Info, { as: "info" });
Info.belongsTo(Product);

Category.hasMany(Product);
Product.belongsTo(Category);

export { Admin, Product, Category, Img, Info };
