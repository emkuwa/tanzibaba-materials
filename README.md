# Tanzibaba

**Find Verified Concrete Suppliers in Dar es Salaam**

Tanzibaba is a procurement and supplier-network platform that connects construction buyers with verified ready-mix concrete suppliers in Dar es Salaam, Tanzania.

> **Tanzibaba is NOT a concrete supplier.** Tanzibaba is a network of verified suppliers.

## Architecture

```
tanzibaba/
├── backend/           # Express + TypeScript + Prisma + PostgreSQL
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── types/
│   │   └── index.ts
│   └── prisma/
│       └── schema.prisma
├── frontend/          # Next.js 14 + TypeScript + Tailwind CSS
│   └── src/
│       ├── app/       # App Router pages
│       ├── components/
│       ├── lib/
│       └── types/
└── README.md
```

## Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

## Setup Instructions

### 1. Database Setup

```bash
# Create PostgreSQL database
createdb tanzibaba

# Or via psql
psql -U postgres -c "CREATE DATABASE tanzibaba;"
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env
# Edit .env with your database credentials

# Generate Prisma client and push schema
npx prisma generate
npx prisma db push

# Seed database with sample data
npm run prisma:seed

# Start development server
npm run dev
```

Backend runs on **http://localhost:4000**

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env.local
echo "NEXT_PUBLIC_API_URL=http://localhost:4000/api" > .env.local

# Start development server
npm run dev
```

Frontend runs on **http://localhost:3000**

## Default Credentials

| Role     | Email                          | Password      |
|----------|--------------------------------|---------------|
| Admin    | admin@tanzibaba.co.tz          | admin123      |
| Supplier | info@tanzibaba.co.tz           | supplier123   |
## API Endpoints

### Authentication
| Method | Endpoint            | Description      |
|--------|---------------------|------------------|
| POST   | /api/auth/register  | Register user    |
| POST   | /api/auth/login     | Login            |
| GET    | /api/auth/me        | Get current user |

### Quotes
| Method | Endpoint                    | Description          |
|--------|-----------------------------|----------------------|
| POST   | /api/quotes                 | Request a quote      |
| GET    | /api/quotes                 | List quotes          |
| GET    | /api/quotes/:id             | Get quote details    |
| PATCH  | /api/quotes/:id/accept      | Accept quote         |
| PATCH  | /api/quotes/:id/status      | Update quote status  |
| PUT    | /api/quotes/:id             | Update quote         |

### Suppliers
| Method | Endpoint                | Description           |
|--------|-------------------------|-----------------------|
| GET    | /api/suppliers          | List suppliers        |
| GET    | /api/suppliers/:id      | Get supplier details  |
| POST   | /api/suppliers          | Create supplier       |
| PUT    | /api/suppliers/:id      | Update supplier       |
| POST   | /api/suppliers/match    | Match supplier to quote |

### Orders
| Method | Endpoint                  | Description              |
|--------|---------------------------|--------------------------|
| GET    | /api/orders               | List orders              |
| GET    | /api/orders/stats         | Get dashboard stats      |
| GET    | /api/orders/:id           | Get order details        |
| PATCH  | /api/orders/:id/status    | Update order status      |

### Invoices
| Method | Endpoint                | Description                |
|--------|-------------------------|----------------------------|
| GET    | /api/invoices/:id/pdf   | Download invoice PDF       |

## Database Tables

- `users` - User accounts and roles
- `customers` - Customer profiles
- `suppliers` - Supplier profiles
- `supplier_coverage` - Supplier coverage districts
- `supplier_pricing` - Supplier pricing by concrete grade
- `quotes` - Customer quote requests
- `quote_items` - Quote line items
- `orders` - Supplier assignments
- `order_status_updates` - Order status history
- `invoices` - Generated invoices
- `notes` - Admin notes

## User Roles

### Customer
- Request a quote
- View quote details
- Accept quote
- Download invoice PDF
- Track order status

### Supplier
- View assigned orders
- Accept/reject orders
- Update delivery status
- View customer information

### Admin
- Dashboard with metrics
- Manage quotes and leads
- Manage suppliers
- Match suppliers to quotes
- Update order statuses

## Deployment

### Backend (Production)

```bash
cd backend
npm run build
npm start
```

Recommended: Deploy using PM2 or Docker.

### Frontend (Production)

```bash
cd frontend
npm run build
npm start
```

Recommended: Deploy to Vercel, Netlify, or a VPS with Nginx.

### Environment Variables

**Backend (.env)**
```
DATABASE_URL="postgresql://user:password@host:5432/tanzibaba"
JWT_SECRET="your-random-secret-here"
JWT_EXPIRES_IN="7d"
PORT=4000
NODE_ENV=production
FRONTEND_URL="https://your-frontend-domain.com"
```

**Frontend (.env.local)**
```
NEXT_PUBLIC_API_URL="https://your-api-domain.com/api"
```

## Google Maps Integration

To enable the GPS location picker, add a Google Maps API key to your frontend environment:

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your-api-key"
```

## WhatsApp Integration

The platform includes WhatsApp number capture and WhatsApp-ready contact links. For automated WhatsApp messaging, integrate with the WhatsApp Business API.

## License

Private - All rights reserved.
