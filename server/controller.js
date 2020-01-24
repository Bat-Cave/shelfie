module.exports = {

  getProductList: (req, res) => {
    const db = req.app.get('db');
    
    db.get_inventory().then(products => {
      res.status(200).send(products)
    })
    .catch(err => res.status(500).send(err))
  },
  getProduct: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    
    db.get_product(id).then(product => {
      res.status(200).send(product)
    })
    .catch(err => res.status(500).send(err))
  },
  addProduct: (req, res) => {
    const db = req.app.get('db');
    const {img, name, price} = req.body;

    db.create_product(img, name, price).then(products => {
      res.status(200).send(products)
    })
    .catch(err => res.status(500).send(err))
  },
  updateProduct: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const {img, name, price} = req.body;

    db.update_product(id, img, name, price).then(products => {
      res.status(200).send(products)
    })
    .catch(err => res.status(500).send(err))
  },
  deleteProduct: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.delete_product(id).then(product => {
      res.status(200).send('Product Deleted')
    })
    .catch(err => res.status(500).send(err))
  }
}