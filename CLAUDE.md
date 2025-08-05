# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Development Server
```bash
npm run dev           # Start Vite development server
npm run preview       # Preview production build locally
```

### Build & Testing
```bash
npm run build                # Production build
npm run build-with-check     # TypeScript check + production build
npm run lint                 # ESLint with TypeScript extensions
```

### Linting & Type Checking
- Always run `npm run lint` after making changes
- Use `npm run build-with-check` for TypeScript compilation verification
- TypeScript strict mode is enabled with custom unused locals/parameters disabled

## Architecture Overview

### Tech Stack
- **Framework**: React 18 + TypeScript + Vite
- **UI Library**: Material-UI v7 with custom theme
- **State Management**: Zustand with persistence and devtools
- **Routing**: React Router v7
- **Charts**: Chart.js + react-chartjs-2
- **Mock Data**: Faker.js for realistic data generation
- **QR Codes**: qrcode library for certificate generation

### Project Structure

#### Core Directories
- `src/components/` - Reusable UI components organized by type
  - `charts/` - Chart components using Chart.js
  - `forms/` - Form components for user input
  - `common/` - Shared components (Layout, Cards, etc.)
- `src/pages/` - Page-level components for routing
- `src/stores/` - Zustand state management stores
- `src/services/` - Business logic and API simulation
- `src/hooks/` - Custom React hooks for data fetching
- `src/types/` - TypeScript type definitions
- `src/utils/` - Utility functions and mock data generators
- `public/mock-data/` - Static JSON files for mock data

### State Management Architecture

#### Main Stores (Zustand)
1. **useAppStore** (`src/stores/useAppStore.ts`):
   - Global application state (users, power plants, companies, certificates)
   - LocalStorage persistence for user preferences and certificates
   - Mock data loading and real-time prediction updates

2. **useMatchingStore** (`src/stores/useMatchingStore.ts`):
   - Carbon offset matching state (selected company, criteria, results)
   - Session-only state (not persisted)

#### Data Flow Pattern
- Mock data loaded from JSON files in `public/mock-data/`
- Real-time updates generated using `mockDataGenerator.ts`
- State persisted using Zustand's persist middleware
- UI components consume state via store hooks

### Key Service Layers

#### Certificate Service (`src/services/certificateService.ts`)
- Blockchain-simulated certificate generation
- QR code generation for verification
- PDF export simulation
- Social sharing URL generation

#### Mock Matching Service (`src/services/mockMatchingService.ts`)
- Carbon offset matching algorithm simulation
- Contract execution with 90% success rate
- Price calculation based on carbon intensity

#### Custom Hooks Pattern (`src/hooks/useMockData.ts`)
- Data fetching abstraction layer
- Real-time update management
- Component-specific data access patterns

### UI Theme & Styling

#### Material-UI Theme Configuration
- Custom green/teal color palette for carbon/environmental branding
- Enhanced shadow system and border radius (16px)
- Custom component overrides for Cards, Buttons, AppBar
- Typography using Inter + Noto Sans KR fonts

#### Component Patterns
- Page components handle routing and layout
- Chart components use consistent Chart.js configuration
- Forms use Material-UI controlled components
- Cards have hover effects and gradient backgrounds

### Mock Data Architecture

#### Data Generation Strategy
- Static base data in JSON files
- Dynamic predictions generated using `generateRealTimeData()`
- Realistic patterns based on actual power plant data
- 10-second auto-refresh for real-time simulation

#### Key Data Types
- `PowerPlant` - Power generation facilities with capacity and emissions
- `Company` - Corporate entities with carbon reduction targets
- `Certificate` - Blockchain-verified carbon offset certificates
- `MatchResult` - AI matching results for carbon offset trading
- `PredictionData` - 24-hour carbon intensity predictions

### Development Patterns

#### Component Architecture
- Functional components with TypeScript interfaces
- Custom hooks for data management
- Material-UI components with theme integration
- Responsive design patterns

#### State Management Conventions
- Use Zustand stores for global state
- LocalStorage persistence for user data
- Session state for temporary UI interactions
- Real-time updates via intervals, not WebSockets

#### Mock Data Conventions
- JSON files in `public/mock-data/` for static data
- Faker.js for generating realistic data
- Deterministic patterns for predictable behavior
- 90% success rates for optimistic user experience

### Deployment Configuration
- Vercel deployment with SPA routing support
- Build output to `dist/` directory
- Environment variables not used (mock data only)
- No backend dependencies