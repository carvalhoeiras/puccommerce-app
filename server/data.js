import bcrypt from 'bcryptjs';

const data = {

  users: [
    {
      name: 'User',
      email: 'test@test.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
    {
      name: 'Admin',
      email: 'admin@admin.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
  ],
  
    products: [
      {
        name: 'Nike',
        category: 'Camisas',
        image: '/images/p1.jpg',
        price: 120,
        countInStock: 0,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'bom',
      },
      {
        name: 'Adidas ',
        category: 'Camisa',
        image: '/images/p2.jpg',
        price: 100,
        countInStock: 1,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'bom',
      },
      {
        name: 'Lacoste',
        category: 'Camisas',
        image: '/images/p3.jpg',
        price: 220,
        countInStock: 20,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'bom',
      },
      {
        name: 'Calça Nike',
        category: 'Calça',
        image: '/images/p4.jpg',
        price: 78,
        countInStock: 3,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'bom',
      },
      {
        name: 'Calça Puma ',
        category: 'Calça',
        image: '/images/p5.jpg',
        price: 65,
        countInStock: 2,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'bom',
      },
      {
        name: 'Calça Adidas',
        category: 'Calça',
        image: '/images/p6.jpg',
        price: 139,
        countInStock: 660,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'bom',
      },
    ],
  };
  export default data;