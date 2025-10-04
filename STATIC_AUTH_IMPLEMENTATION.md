# Static Authentication Implementation

## Overview

Firebase authentication has been replaced with a static authentication system using localStorage. This provides the same API structure for easy future migration while using predefined user credentials.

## Static User Credentials

### Admin Dashboard

- **Email**: `admin@example.com`
- **Password**: `12345`
- **Role**: `admin`
- **Redirects to**: Admin Dashboard

### Marketing Dashboard

- **Email**: `marketing@example.com`
- **Password**: `12345`
- **Role**: `marketing`
- **Redirects to**: Marketing Dashboard

### Employee Dashboard

- **Email**: `employee@example.com`
- **Password**: `12345`
- **Role**: `employee`
- **Redirects to**: Employee Dashboard

### Field Agent Dashboard

- **Email**: `fieldagent@example.com`
- **Password**: `12345`
- **Role**: `field_agent`
- **Redirects to**: Field Agent Dashboard

## Implementation Details

### Authentication Service (`src/services/authService.js`)

- Simulates Firebase API structure for compatibility
- Uses localStorage for session persistence
- Creates mock JWT tokens for role-based authentication
- Includes 1-second delay to simulate network requests
- Token expiration set to 24 hours

### Token Structure

The mock token contains:

```javascript
{
  email: user.email,
  role: user.role,
  exp: Date.now() + 24 * 60 * 60 * 1000 // 24 hours expiry
}
```

### API Integration Ready

When real API is available, you can:

1. Replace the static users with actual API calls
2. Use the `decodeToken()` helper function to parse real JWT tokens
3. The existing role-based routing will work without changes
4. Authentication state management remains the same

### Key Files Modified

- `src/services/authService.js` - Static authentication logic
- `src/context/AuthProvider.jsx` - Updated for static auth
- `src/locales/en/common.json` - Updated password hint
- `src/locales/hi/common.json` - Updated password hint (Hindi)

### UI Changes

- Login page design remains exactly the same
- Password hint now shows "Password: 12345" instead of generic hint
- All demo account displays updated with correct credentials

## Testing the Implementation

1. Go to `http://localhost:5173/login`
2. Use any of the credential combinations above
3. System will authenticate and redirect to the appropriate dashboard
4. User session persists across browser refreshes
5. Logout clears the stored authentication data

## Future API Integration

When integrating with a real API:

1. Replace `authService.login()` with actual API call
2. Use real JWT tokens from the API response
3. Decode the token to extract user role
4. The existing routing and role checking will work unchanged

The current implementation maintains the same interface as Firebase, making the transition to a real API seamless.
