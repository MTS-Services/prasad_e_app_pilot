# Firebase Setup Instructions

## Important: Firebase Authentication Setup

The 400 Bad Request error you're seeing is likely because Firebase Authentication with Email/Password is not enabled in your Firebase Console.

### Steps to Fix:

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Select your project**: "prasad-80f29"
3. **Navigate to Authentication**:
   - Click on "Authentication" in the left sidebar
   - Go to "Sign-in method" tab
4. **Enable Email/Password Authentication**:

   - Click on "Email/Password" provider
   - Toggle "Enable" to ON
   - Click "Save"

5. **Optional - Enable Anonymous Authentication** (for testing):
   - Also enable "Anonymous" provider if you want to test without email/password

### Firebase Security Rules (if using Firestore)

If you plan to use Firestore, add these rules in the Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Allow authenticated users to read public data
    match /public/{document=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null; // Adjust based on your needs
    }
  }
}
```

### Testing the Application

1. Start the development server: `npm run dev`
2. Navigate to: http://localhost:5173/
3. Click "Get Started" or "Login"
4. Use one of these demo accounts:
   - admin@example.com
   - marketing@example.com
   - employee@example.com
   - fieldagent@example.com
5. Use any password (e.g., "password123")

The application will automatically create these demo accounts on first login.

### Environment Variables

Your `.env.local` file has been configured with your Firebase credentials:

```
VITE_FIREBASE_API_KEY=AIzaSyDQvQa33Bg9JZ4-VAlMqvx1f7C7Wkyd7lw
VITE_FIREBASE_AUTH_DOMAIN=prasad-80f29.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=prasad-80f29
# ... other config values
```

### Troubleshooting

If you still get authentication errors:

1. **Check Firebase Console**: Ensure Email/Password authentication is enabled
2. **Check Browser Console**: Look for detailed error messages
3. **Network Tab**: Check if requests to Firebase are being blocked
4. **Try Different Browser**: Sometimes browser extensions can interfere

### Production Deployment

For production deployment:

1. Update `.env.production` with your production Firebase config
2. Ensure Firebase Authentication is enabled in production project
3. Update allowed domains in Firebase Authentication settings
