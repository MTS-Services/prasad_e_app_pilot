# API Integration Setup

## Quick Start

1. Install dependencies:

```bash
npm install axios
```

2. Set environment variables in `.env.local`:

```bash
VITE_API_BASE_URL=http://localhost:3000/api
```

3. Import and use services:

```javascript
import { UserService, ApiAuthService } from '../services';

// Get users
const users = await UserService.getAllUsers();

// Login
await ApiAuthService.login({ email, password });
```

## Available Services

- `ApiService` - Generic CRUD operations
- `UserService` - User management
- `ApiAuthService` - Authentication
- `JobService` - Job management
- `ComplaintService` - Complaint handling
- `ReportService` - Reports and analytics

## Custom Hooks

- `useApi()` - Fetch data with loading states
- `useMutation()` - Handle create/update/delete operations
- `usePagination()` - Paginated data fetching

## Features

- Automatic token management
- Request/response interceptors
- Error handling
- File upload/download support
- Development logging
