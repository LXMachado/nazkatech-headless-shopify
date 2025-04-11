# Nazka.Tech - Headless Shopify E-commerce Platform

![Nazka.Tech Logo](public/images/nazka-logo.png)

A modern, high-performance headless e-commerce platform for Nazka.Tech, selling eco-friendly tech accessories. The platform leverages Shopify's powerful backend infrastructure while providing a completely custom, brand-aligned frontend experience.

## 🚀 Features

- **Headless Architecture**: Decoupled frontend and backend for maximum flexibility and performance
- **Responsive Design**: Fully responsive design that works seamlessly on all devices
- **Real-time Inventory**: Live inventory updates from Shopify
- **Dynamic Product Catalog**: Automatic product synchronization with Shopify
- **Shopping Cart**: Persistent shopping cart with local storage
- **Custom Checkout**: Streamlined checkout process integrated with Shopify
- **SEO Optimized**: Built with SEO best practices in mind
- **Dark Mode Theme**: Sophisticated dark UI with vibrant green accents
- **Performance Optimized**: Fast loading times and optimized assets

## 🛠️ Technology Stack

### Frontend
- **Next.js 15.2.4**: React framework for server-side rendering and static site generation
- **TypeScript**: For type safety and better developer experience
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **React Hooks**: For state management and side effects

### Backend & APIs
- **Shopify Storefront API**: For product, collection, and checkout data
- **Shopify Admin API**: For advanced shop management capabilities
- **GraphQL**: For efficient data fetching

### Development & Build Tools
- **ESLint**: JavaScript linting tool
- **Prettier**: Code formatter
- **npm**: Package manager

## 📦 Project Structure

```
nazka-tech/
├── public/               # Static files
│   └── images/           # Image assets
├── src/
│   ├── components/       # Reusable UI components
│   ├── context/          # React context for state management
│   ├── data/             # Data utilities and sample data
│   ├── lib/              # Utility functions and API clients
│   ├── pages/            # Next.js pages
│   ├── styles/           # Global styles and Tailwind configuration
│   └── types/            # TypeScript type definitions
├── .env.local            # Environment variables (not tracked in git)
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🌱 Environmental Considerations

Nazka.Tech is committed to sustainability not just in our products, but also in our digital footprint:

- **Optimized Assets**: Images and resources are optimized for minimal bandwidth usage
- **Efficient Caching**: Implemented to reduce server load and energy consumption
- **Dark Mode UI**: Designed to consume less power on OLED/AMOLED screens

## 🔧 Setup & Installation

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- A Shopify store with Storefront API access

### Environment Variables
Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token
SHOPIFY_API_KEY=your_api_key
SHOPIFY_API_SECRET=your_api_secret
SHOPIFY_STORE_PASSWORD=your_store_password
```

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/nazka-tech.git
   cd nazka-tech
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Responsive Design

The application is designed with a mobile-first approach and is fully responsive across the following breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔒 Security

- **HTTPS Only**: The application is configured to be served over HTTPS only
- **API Key Protection**: All API keys are securely stored as environment variables
- **Content Security Policy**: Implemented to prevent XSS attacks
- **CORS Configuration**: Properly configured to prevent unauthorized access

## 📊 Performance

The application is optimized for performance:

- **Server-Side Rendering**: Critical pages are server-rendered for fast initial load
- **Static Generation**: Where possible, pages are statically generated at build time
- **Image Optimization**: Images are automatically optimized by Next.js
- **Code Splitting**: Automatic code splitting to reduce initial bundle size
- **Lazy Loading**: Components and images are lazy-loaded when off-screen

## 🧪 Testing

- **Unit Tests**: Coming soon with Jest and React Testing Library
- **Integration Tests**: Coming soon with Cypress
- **Accessibility Testing**: Coming soon with axe-core

## 📈 Continuous Integration/Deployment

- **Automatic Deployments**: Set up with Replit Deployments
- **Preview Environments**: Each pull request gets a preview environment

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Design inspiration from Techna and EcoBulk
- Special thanks to the Next.js and Shopify teams for their excellent documentation and tooling