import * as uuid from "uuid";
import * as path from "path";
import { Product, Img, Info } from "../models/models.js";
import ApiError from "../error/ApiError.js";

class ProductController {
  async getAll(req, res) {
    let { categoryId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 15;
    let offset = page * limit - limit;
    let products;

    console.log(categoryId);

    if (!categoryId) {
      products = await Product.findAndCountAll({ limit, offset, include: [{ model: Img, as: "img" }] });
    }

    if (categoryId) {
      products = await Product.findAndCountAll({
        where: { categoryId },
        limit,
        offset,
        include: [{ model: Img, as: "img" }],
      });
    }

    res.json(products);
  }

  async createProduct(req, res, next) {
    try {
      let { name, description, price, categoryId, info, sale, percent_sale } = req.body;
      const { img } = req.files;

      const product = await Product.create({ name, description, price, categoryId, sale, percent_sale });

      if (img) {
        let fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve("static", fileName));
        let productImg = await Img.create({
          productId: product.id,
          img_name: fileName,
        });
      }

      if (info) {
        //[{"title": "a", "description":"2"},{"title": "b", "description":"3"} ]
        info = JSON.parse(info);
        info.forEach((i) => {
          Info.create({
            title: i.title,
            desc_info: i.description,
            productId: product.id,
          });
        });
      }

      return res.json(product);
    } catch (e) {
      console.log(e);
      return res.status(403).json({ message: "Щось не так. Перевірте введені дані" });
    }
  }

  async getOneProduct(req, res) {}

  async deleteProduct(req, res) {}
}
export default new ProductController();
