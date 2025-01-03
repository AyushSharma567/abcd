# Shoply

Shoply is an e-commerce platform that allows users to browse and purchase products online. It includes features such as user authentication, product management, cart management, coupon validation, and payment processing.

![Home-page](https://i.ibb.co/sRgKJcT/image.png)

![Analytics-page](https://i.ibb.co/N6YCvSt/image.png)

![Checkout-page](https://i.ibb.co/rGxkrP5/image.png)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Reference video](#reference-video)

## Features
- User authentication and authorization
- Product management
- Cart management
- Coupon validation
- Payment processing with Stripe
- Analytics dashboard for admin

## Installation

1. Clone the repository:

``` bash
git clone https://github.com/AyushSharma567/abcd.git
cd shoply
```
2. Install backend dependencies:
``` bash
npm install
```
3. Install frontend dependencies:
``` bash
cd frontend
npm install
```
4. Create a .env file in the root directory and add the following environment variables:
```
PORT=5000
MONGO_URI=your_mongo_uri
UPSTASH_REDIS_URL=your_redis_url
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```
5. Start the development server:
```
npm run dev
```

## Usage
To start the application, run the following command:
```
npm start
```

The backend server will be running on http://localhost:5000 <br>and the frontend will be running on http://localhost:5173.

## API Endpoints
# Authentication
- POST /api/auth/signup - Sign up a new user
- POST /api/auth/login - Log in a user
- POST /api/auth/logout - Log out a user
- POST /api/auth/refresh-token - Refresh access token
- GET /api/auth/profile - Get user profile

# Products
- GET /api/products - Get all products
- GET /api/products/featured - Get featured products
- POST /api/products - Create a new product
- DELETE /api/products/:id - Delete a product
- GET /api/products/recommendations - Get recommended products
- GET /api/products/category/:category - Get products by category
- PATCH /api/products/:id - Toggle featured product

# Cart
- POST /api/cart - Add product to cart
- DELETE /api/cart - Remove all products from cart
- PUT /api/cart/:id - Update product quantity in cart
- GET /api/cart - Get cart products

# Coupons
- GET /api/coupons - Get active coupon
- POST /api/coupons/validate - Validate a coupon

# Payments
- POST /api/payments/create-checkout-session - Create a checkout session
- POST /api/payments/checkout-success - Handle successful checkout

# Analytics
- GET /api/analytics - Get analytics data

## Reference video:

[video](https://www.youtube.com/watch?v=sX57TLIPNx8)