# Environment Configuration Setup

## Development Environment

Create a `.env.local` file in the root directory with the following variables:

```bash
# 245 Events - Development Environment Configuration

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Vercel Configuration (for local development)
VERCEL_URL=localhost:3000

# App Configuration
NEXT_PUBLIC_APP_NAME="245 Events"
NEXT_PUBLIC_APP_VERSION="1.0.0"

# Security
NEXTAUTH_SECRET=your-nextauth-secret-here
NEXTAUTH_URL=http://localhost:3000

# Feature Flags
NEXT_PUBLIC_ENABLE_ADMIN_DASHBOARD=true
NEXT_PUBLIC_ENABLE_FILE_UPLOAD=true
```

## Production Environment

For production deployment on Vercel, set these environment variables in the Vercel dashboard:

### Required Variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

### Optional Variables:
- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_APP_VERSION`
- `NEXT_PUBLIC_ENABLE_ADMIN_DASHBOARD`
- `NEXT_PUBLIC_ENABLE_FILE_UPLOAD`

## Instructions

1. Copy the development environment template above into `.env.local`
2. Replace placeholder values with actual credentials
3. Ensure `.env.local` is in `.gitignore` (already configured)
4. Never commit environment files with real credentials 