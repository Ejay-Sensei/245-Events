# 245 Events - Premium Event Booking System

A streamlined digital workflow for the 245 Events space, providing a premium, user-friendly booking experience for organizers and an efficient management dashboard for the internal team.

## 🏗️ Tech Stack

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Backend**: Supabase (PostgreSQL, Auth, Storage, Real-time)
- **Deployment**: Vercel
- **Development**: Stagewise for UI-to-AI integration

## 🎨 Design System

The project uses a comprehensive design system with:
- Custom CSS variables from `tokens.json`
- Inter font family with Next.js font optimization
- Brand colors: Primary accent (#E85E2C), hover (#D05528)
- Responsive design with glassmorphism cards

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account and project
- Vercel account (optional, for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 245-events
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   NEXTAUTH_SECRET=your-nextauth-secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # Global styles with design system
│   │   ├── layout.tsx      # Root layout with font optimization
│   │   └── page.tsx        # Homepage
│   └── lib/
│       └── supabase.ts     # Supabase client configuration
├── public/
│   └── images/             # Static assets (logos, backgrounds)
├── docs/                   # Project documentation
│   ├── prd/               # Product Requirements (sharded)
│   └── stories/           # Development stories
├── tokens.json            # Design system tokens
└── environment-setup.md   # Environment configuration guide
```

## 🎯 Features

### Public Portal
- **Landing Page**: Immersive welcome with background effects
- **Booking Form**: Multi-section form with interactive calendar
- **Policy Modal**: Terms and conditions display
- **Confirmation Page**: Success confirmation
- **Secure Upload**: Document upload functionality

### Admin Dashboard
- **Login System**: Secure authentication
- **Request Management**: View and manage booking requests
- **Communication Hub**: Interact with organizers
- **Calendar View**: Full calendar of events
- **Create Booking**: Internal booking creation

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Design System

The project uses a token-based design system. All design tokens are defined in `tokens.json` and converted to CSS variables in `globals.css`.

**Key Design Rules:**
- Use CSS variables for all colors and spacing
- Never apply landing page gradients to buttons/text
- Reserve accent colors for interactive elements only

## 📦 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `.next` folder to your hosting provider

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Yes |
| `NEXTAUTH_SECRET` | NextAuth secret for sessions | Yes |
| `NEXTAUTH_URL` | Application URL | Yes |

## 📖 Documentation

- [Product Requirements Document](./docs/prd/)
- [Architecture Design Document](./245%20Architecture%20Design%20Document%20(ADD).md)
- [Environment Setup Guide](./environment-setup.md)
- [Development Stories](./docs/stories/)

## 🤝 Contributing

This project follows the BMAD (Business Methodology for Agile Development) framework:

1. Stories are created by the Scrum Master
2. Implementation by Development Agent
3. Review by QA Agent
4. All changes tracked in story files

## 📄 License

Private project for 245 Events internal use.

## 🆘 Support

For technical issues or questions:
1. Check the documentation in `/docs`
2. Review environment setup guide
3. Ensure all dependencies are correctly installed
