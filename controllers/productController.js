// server/controllers/productController.js
// Puisque nous n'avons pas de base de données pour ce projet simple, utilisons des produits statiques
const products = [
  {
    id: 1,
    name: 'Smartphone XYZ',
    image: '.',/bureau.jpg
    description: 'Un smartphone de dernière génération avec des fonctionnalités avancées',
    price: 699.99,
    countInStock: 15
  },
  {
    id: 2,
    name: 'Ordinateur Portable ABC',
    image: '/api/placeholder/200/200',
    description: 'Ordinateur portable puissant pour les professionnels et les gamers',
    price: 1299.99,
    countInStock: 10
  },
  {
    id: 3,
    name: 'Casque Audio Pro',
    image: '/api/placeholder/200/200',
    description: 'Casque audio sans fil avec réduction de bruit active',
    price: 249.99,
    countInStock: 25
  },
  {
    id: 4,
    name: 'Montre Connectée Smart',
    image: '/api/placeholder/200/200',
    description: 'Montre intelligente avec suivi de la santé et notifications',
    price: 199.99,
    countInStock: 8
  }
];

// Obtenir tous les produits
const getProducts = (req, res) => {
  res.json(products);
};

// Obtenir un produit par ID
const getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Produit non trouvé' });
  }
};

module.exports = {
  getProducts,
  getProductById
};