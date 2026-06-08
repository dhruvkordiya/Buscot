# Buscot - Garment Shop E-Commerce Platform

<div align="center">

![Buscot Logo](https://img.shields.io/badge/Buscot-E--Commerce-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-In%20Development-yellow)

A modern, feature-rich e-commerce platform for garment shops in Surat, built with cutting-edge web technologies.

[Features](#features) • [Tech Stack](#tech-stack) • [Installation](#installation) • [Usage](#usage) • [Contributing](#contributing)

</div>

---

## 📋 Overview

**Buscot** is a comprehensive e-commerce solution designed specifically for garment shops, inspired by industry leaders like Myntra. It provides a seamless shopping experience with modern UI/UX, robust backend architecture, and scalable infrastructure.

## ✨ Features

- **Product Management**
  - Comprehensive product catalog
  - Category and subcategory organization
  - Advanced filtering and search capabilities
  - Product reviews and ratings

- **Shopping Experience**
  - Intuitive product browsing
  - Shopping cart management
  - Wishlist functionality
  - Secure checkout process

- **User Management**
  - User authentication and authorization
  - Profile management
  - Order history tracking
  - Address management

- **Admin Dashboard**
  - Product inventory management
  - Order management system
  - Customer analytics
  - Sales reports and insights

- **Payment Integration**
  - Multiple payment gateway support
  - Secure transaction processing
  - Order confirmation system

- **Responsive Design**
  - Mobile-first approach
  - Cross-browser compatibility
  - Optimized performance

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js / Next.js
- **Styling**: Tailwind CSS / Material-UI
- **State Management**: Redux / Context API
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **API**: RESTful API

### DevOps & Deployment
- **Version Control**: Git & GitHub
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel / Heroku / AWS

### Tools & Libraries
- **Package Manager**: npm / yarn
- **Testing**: Jest & React Testing Library
- **Code Quality**: ESLint, Prettier
- **Documentation**: JSDoc

## 📦 Project Structure

```
Buscot/
├── frontend/                 # React/Next.js application
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── styles/          # Global styles
│   │   ├── utils/           # Utility functions
│   │   └── App.js           # Main app component
│   └── package.json
│
├── backend/                  # Node.js/Express server
│   ├── src/
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── controllers/     # Route controllers
│   │   ├── middleware/      # Custom middleware
│   │   ├── utils/           # Utility functions
│   │   └── server.js        # Server entry point
│   ├── .env.example         # Environment variables template
│   └── package.json
│
├── docker-compose.yml        # Docker configuration
├── .github/                  # GitHub configuration
│   └── workflows/           # CI/CD workflows
├── .gitignore               # Git ignore rules
├── LICENSE                  # MIT License
└── README.md               # This file
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)
- Git

### Clone Repository

```bash
git clone https://github.com/dhruvkordiya/Buscot.git
cd Buscot
```

### Frontend Setup

```bash
cd frontend
npm install
# or
yarn install
```

Create a `.env.local` file:
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_PAYMENT_KEY=your_payment_key
```

### Backend Setup

```bash
cd backend
npm install
# or
yarn install
```

Create a `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/buscot
JWT_SECRET=your_secret_key
NODE_ENV=development
PAYMENT_SECRET=your_payment_secret
```

### Run Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## 📖 Usage

### Register & Login
1. Navigate to the application
2. Sign up with email and password
3. Verify your email address
4. Log in to access the platform

### Browse Products
1. Browse the catalog by categories
2. Use filters to narrow down search
3. Click on products to view details
4. Add items to cart or wishlist

### Checkout
1. Review cart items
2. Apply discount codes (if available)
3. Enter delivery address
4. Select payment method
5. Complete payment

### Admin Features
1. Access admin dashboard (admin credentials required)
2. Manage product inventory
3. View and process orders
4. Generate sales reports

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Generate coverage report
npm run test:coverage
```

## 🔒 Security

- All passwords are hashed using bcrypt
- JWT tokens for secure authentication
- HTTPS enforced in production
- Input validation and sanitization
- SQL injection and XSS protection
- CSRF token implementation

## 📝 Environment Variables

Create `.env` files in both `frontend` and `backend` directories:

**Backend (.env):**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/buscot
JWT_SECRET=your_super_secret_key_here
REFRESH_TOKEN_SECRET=your_refresh_token_secret
NODE_ENV=development
PAYMENT_GATEWAY=razorpay
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

**Frontend (.env.local):**
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENVIRONMENT=development
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards
- Follow ESLint and Prettier rules
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed
- Write tests for new features

## 📋 Code of Conduct

Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct.

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 🐛 Bug Reports & Feature Requests

Found a bug or have a suggestion? Please [open an issue](https://github.com/dhruvkordiya/Buscot/issues) on GitHub.

### Bug Report Template
- Description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Your environment

## 📞 Support

For support, email us at [support@buscot.in](mailto:support@buscot.in) or open an issue on GitHub.

## 🙏 Acknowledgments

- Inspired by modern e-commerce platforms
- Built with love for the garment business community
- Thanks to all contributors and users

## 📊 Project Status

- [x] Project initialization
- [ ] Frontend setup
- [ ] Backend setup
- [ ] Database design
- [ ] Authentication system
- [ ] Product management
- [ ] Shopping cart
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Deployment

## 🔗 Links

- [GitHub Repository](https://github.com/dhruvkordiya/Buscot)
- [Issue Tracker](https://github.com/dhruvkordiya/Buscot/issues)
- [Wiki](https://github.com/dhruvkordiya/Buscot/wiki)

---

<div align="center">

Made with ❤️ by [Dhruv Kordiya](https://github.com/dhruvkordiya)

⭐ If you find this helpful, please give it a star!

</div>
