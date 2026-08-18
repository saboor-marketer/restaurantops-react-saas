# RestaurantOps - Restaurant Management Dashboard

A production-quality React.js frontend SaaS dashboard for restaurant management. Built with modern web technologies and designed to provide a comprehensive overview of restaurant operations.

## Features

- **Interactive Dashboard**: Real-time overview of restaurant metrics and performance
- **KPI Cards**: Track today's revenue, total orders, and active orders with trend indicators
- **Income Analytics**: Monthly/yearly income visualization with interactive bar charts
- **Category Performance**: Top-performing menu items with visual indicators
- **POS Overview**: Point of sale metrics with donut chart visualization
- **Order Management**: Recent orders table with daily/weekly/monthly filtering and search
- **Staff Management**: Staff on duty tracking with workload indicators
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Interactive Components**: 
  - Sidebar navigation with mobile offcanvas support
  - Search functionality for orders
  - Filter toggles for time periods
  - Modal dialogs for detailed views
  - Dropdown menus for notifications and user profile

## Technology Stack

- **React.js**: 18.2.0 - UI library
- **Vite**: 5.0.8 - Build tool and development server
- **Bootstrap 5**: 5.3.2 - CSS framework for grid and responsive utilities
- **Bootstrap Icons**: 1.11.1 - Icon library
- **React Router DOM**: 6.20.0 - Client-side routing
- **JavaScript ES6+**: Modern JavaScript features

## Project Structure

```
restaurantops/
├── package.json
├── index.html
├── vite.config.js
├── src/
│   ├── assets/
│   │   ├── food/              # Food category images (SVG)
│   │   ├── staff/             # Staff avatar images (SVG)
│   │   ├── user-avatar.svg    # Default user avatar
│   │   └── upgrade-food.svg   # Upgrade card image
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx    # Main navigation sidebar
│   │   │   ├── Header.jsx     # Top header with search and user menu
│   │   │   └── AppShell.jsx   # Main layout wrapper
│   │   ├── dashboard/
│   │   │   ├── MetricCard.jsx      # KPI metric cards
│   │   │   ├── IncomeChart.jsx     # Income bar chart component
│   │   │   ├── CategoryList.jsx    # Top categories list
│   │   │   ├── POSOverview.jsx     # POS overview with donut chart
│   │   │   ├── RecentOrders.jsx    # Orders table with filters
│   │   │   └── StaffOnDuty.jsx     # Staff list component
│   │   └── common/
│   │       ├── StatusBadge.jsx     # Order status badges
│   │       └── Avatar.jsx          # Reusable avatar component
│   ├── pages/
│   │   └── Dashboard.jsx          # Main dashboard page
│   ├── data/
│   │   ├── dashboardData.js    # KPI, income, and POS data
│   │   ├── orders.js           # Orders data with time filters
│   │   ├── categories.js       # Food category data
│   │   └── staff.js            # Staff member data
│   ├── styles/
│   │   ├── variables.css       # CSS custom properties
│   │   ├── global.css          # Global styles and resets
│   │   ├── sidebar.css         # Sidebar-specific styles
│   │   ├── dashboard.css       # Dashboard component styles
│   │   └── responsive.css      # Responsive breakpoints
│   ├── App.jsx                 # Root application component
│   └── main.jsx                # Application entry point
└── README.md
```

## Installation

1. Clone the repository or navigate to the project directory:
```bash
cd restaurantops-react
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

Create an optimized production build:
```bash
npm run build
```

The build output will be in the `dist/` directory.

Preview the production build:
```bash
npm run preview
```

## Component Architecture

### Layout Components
- **AppShell**: Main application wrapper handling responsive sidebar behavior
- **Sidebar**: Navigation sidebar with menu items and upgrade card
- **Header**: Top header with search, notifications, and user profile

### Dashboard Components
- **MetricCard**: Reusable KPI card with trend indicators
- **IncomeChart**: Interactive bar chart with monthly/yearly toggle
- **CategoryList**: Top performing categories with food thumbnails
- **POSOverview**: POS metrics with donut chart visualization
- **RecentOrders**: Orders table with search and time-based filtering
- **StaffOnDuty**: Staff list with avatars and workload indicators

### Common Components
- **StatusBadge**: Reusable status badge component (Active/Completed/Cancelled)
- **Avatar**: Reusable avatar image component with size customization

## Data Management

All mock data is centralized in the `src/data/` directory:
- `dashboardData.js`: KPI metrics, income chart data, and POS statistics
- `orders.js`: Order data with daily, weekly, and monthly views
- `categories.js`: Food category information with images
- `staff.js`: Staff member information with roles and workload

## Styling Approach

The application uses a custom CSS design system built on top of Bootstrap 5:

### CSS Variables
Primary color tokens defined in `variables.css`:
- `--primary`: Main coral/orange accent (#E96B4D)
- `--primary-dark`: Darker accent shade (#D9573A)
- `--background`: Page background (#F4EEEE)
- `--surface`: Card background (#FFFFFF)
- `--surface-soft`: Secondary background (#FAF7F7)
- `--text`: Primary text color (#252525)
- `--muted`: Secondary text color (#858585)
- `--border`: Border color (#E8DFDD)
- `--success`: Success state (#64C79A)
- `--danger`: Error state (#EA7D82)
- `--warning`: Warning state (#F4B36C)

### Design Principles
- Warm color palette with coral/orange accents
- Rounded corners and soft shadows
- Clean typography using Inter font
- Consistent spacing and visual hierarchy
- Smooth transitions and hover effects

## Responsive Breakpoints

The application is optimized for the following screen sizes:
- **Desktop**: 1920px, 1600px, 1440px, 1200px
- **Tablet**: 992px, 768px
- **Mobile**: 576px, 375px

### Responsive Behavior
- **Desktop**: Full sidebar, multi-column layout
- **Tablet**: Reduced columns, adjusted spacing
- **Mobile**: 
  - Offcanvas sidebar with hamburger menu
  - Single-column layout
  - Horizontal scrolling for tables
  - Touch-optimized interactions

## Interactive Features

### Sidebar
- Click navigation items to change active state
- Mobile: Hamburger menu opens offcanvas drawer
- Auto-close on mobile after navigation

### Header
- Search input for filtering orders
- Notification dropdown
- User profile dropdown with logout option

### Dashboard
- **Income Chart**: Toggle between Monthly/Yearly views
- **Recent Orders**: 
  - Daily/Weekly/Monthly filter buttons
  - Real-time search by order name or ID
- **POS Overview**: "View Details" button opens modal
- **Status Badges**: Color-coded order statuses

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- Uses functional React components with hooks
- No TypeScript - pure JavaScript ES6+
- Bootstrap used primarily for grid and utilities
- Custom CSS for all visual design elements
- SVG assets for images to avoid external dependencies
- All data is mock data in JavaScript files

## Future Enhancements

Potential improvements for production use:
- Connect to real backend API
- Implement authentication
- Add data persistence
- Create additional pages (Settings, Analytics, etc.)
- Add real-time updates with WebSockets
- Implement data export functionality
- Add more comprehensive error handling
- Include unit and integration tests

## License

This project is created as a demonstration of modern React development practices.

## Support

For issues or questions about this project, please refer to the documentation or contact the development team.
