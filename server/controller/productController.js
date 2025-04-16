class ProductController {
  async getAll(req, res) {
    console.log("aaaaa");
    res.json("ok");
  }

  async createProduct(req, res) {}

  async getOneProduct(req, res) {}

  async deleteProduct(req, res) {}
}
export default new ProductController();
