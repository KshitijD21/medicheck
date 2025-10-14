# Bento Services Grid Component

A modern, responsive Bento Grid layout component for showcasing professional healthcare services. Built with Next.js, TypeScript, and Tailwind CSS with advanced hover effects and accessibility features.

## Features

### 🎨 Design

- **Modern Asymmetric Layout**: Pinterest/Apple-style Bento Grid
- **Professional Medical Aesthetic**: Clean, trustworthy design suitable for B2B healthcare
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dynamic Card Sizes**: Different heights and widths for visual interest

### 🎯 Grid Structure

- **Desktop**: 3-column asymmetric grid with varying card spans
- **Tablet**: 2-column responsive grid
- **Mobile**: Single-column stack with touch interactions

### 🎬 Interactive Features

- **Smooth Hover Effects**: Image scaling (1.0 to 1.1) with 700ms transitions
- **Dynamic Content**: Features list slides up on hover
- **Mobile Touch Support**: Tap to expand content on mobile devices
- **Glass Morphism**: Subtle backdrop blur effects

### ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support with proper focus states
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **High Contrast**: Meets accessibility color contrast requirements
- **Focus Management**: Visible focus indicators

## Card Layout Specifications

| Card Index | Service       | Desktop Size   | Tablet Size | Mobile Size |
| ---------- | ------------- | -------------- | ----------- | ----------- |
| 0          | OHC           | 2×2 (Featured) | 2×2         | 1×1         |
| 1          | Maritime      | 1×2 (Tall)     | 1×1         | 1×1         |
| 2          | Wellness      | 1×1            | 1×1         | 1×1         |
| 3          | Ambulance     | 2×1 (Wide)     | 2×1         | 1×1         |
| 4          | Training      | 1×1            | 1×1         | 1×1         |
| 5          | Mobile Health | 1×1            | 1×1         | 1×1         |
| 6          | Institutional | 1×1            | 1×1         | 1×1         |

## Color Scheme

The component uses Medi-Check's exact brand colors:

```css
Primary Blue: #1976D2
Dark Blue: #1565C0
Light Blue: #2196F3
Primary Green: #7CB342
Dark Green: #689F38
Light Green: #8BC34A
Background: #F8FAFB
White: #FFFFFF
Text Primary: #1E293B
Text Secondary: #64748B
Border: #E2E8F0
```

## Usage

### Basic Implementation

```tsx
import { BentoServicesGrid } from "@/components/sections/bento-services-grid";
import { services } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <BentoServicesGrid
      services={services}
      title="Our Comprehensive Healthcare Services"
      subtitle="Trusted Healthcare Partner"
    />
  );
}
```

### Custom Styling

```tsx
<BentoServicesGrid
  services={customServices}
  title="Custom Title"
  subtitle="Custom Subtitle"
  className="py-20 px-6"
/>
```

## Service Data Structure

Each service object must include:

```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  category?: string;
  image?: string;
  gridSize?: {
    desktop: { cols: number; rows: number };
    tablet: { cols: number; rows: number };
    mobile: { cols: number; rows: number };
  };
}
```

### Example Service Object

```typescript
{
  id: "ohc",
  title: "Occupational Health Centre (OHC)",
  description: "30+ centers nationally providing comprehensive occupational health services",
  category: "Primary Care",
  image: "/service/1st service.png",
  features: [
    "Pre-employment medical examinations",
    "Periodic health check-ups",
    "Fitness certifications",
    "Occupational disease prevention",
    "Health surveillance programs"
  ],
  gridSize: {
    desktop: { cols: 2, rows: 2 },
    tablet: { cols: 2, rows: 2 },
    mobile: { cols: 1, rows: 1 }
  }
}
```

## Component Props

| Prop        | Type        | Default  | Description              |
| ----------- | ----------- | -------- | ------------------------ |
| `services`  | `Service[]` | Required | Array of service objects |
| `title`     | `string`    | Optional | Main section title       |
| `subtitle`  | `string`    | Optional | Section subtitle         |
| `className` | `string`    | `""`     | Additional CSS classes   |

## Responsive Behavior

### Desktop (1024px+)

- Full 3-column asymmetric grid
- All hover effects active
- Complex card span configurations
- Optimal typography scaling

### Tablet (768px - 1023px)

- 2-column responsive grid
- Hover effects remain active
- Simplified card spans
- Adjusted typography

### Mobile (< 768px)

- Single-column stack
- Touch interactions replace hover
- Tap to expand feature lists
- Optimized for touch navigation

## Performance Optimizations

- **Lazy Loading**: Images below the fold are lazy loaded
- **Next.js Image**: Automatic image optimization
- **GPU Acceleration**: CSS transforms for smooth animations
- **Efficient Animations**: Uses transform and opacity for performance

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility Features

### Keyboard Navigation

- Tab through all interactive elements
- Enter/Space to activate cards on mobile
- Proper focus management

### Screen Readers

- Semantic HTML structure
- ARIA labels and descriptions
- Proper heading hierarchy
- Descriptive alt text for images

### Visual Accessibility

- High contrast ratios
- Clear focus indicators
- Consistent interaction patterns
- Readable typography scaling

## Customization

### Adding New Services

1. Update the `services` array in `@/lib/constants`
2. Include all required properties
3. Specify grid sizes for responsive behavior
4. Add appropriate category and features

### Modifying Grid Layout

Adjust grid spans in the `getGridClasses()` function:

```typescript
case 0: // OHC - Large featured card
  return `${baseClasses} col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2`;
```

### Custom Animations

Modify transition durations and effects:

```typescript
transition={{ duration: 0.6, delay: index * 0.1 }}
className="transition-all duration-700 ease-out"
```

## Testing

To test the component:

1. Start the development server: `npm run dev`
2. Navigate to `/bento-test` to see the test page
3. Test responsive behavior by resizing the browser
4. Verify keyboard navigation and accessibility
5. Check hover effects and mobile touch interactions

## Dependencies

- Next.js 15.5.4+
- React 18+
- Tailwind CSS 3+
- Framer Motion (for animations)
- Lucide React (for icons)

## Files Structure

```
src/
├── components/
│   └── sections/
│       ├── bento-services-grid.tsx    # Main component
│       └── services-grid.tsx          # Original grid (preserved)
├── lib/
│   └── constants.ts                   # Service data
├── types/
│   └── index.ts                       # TypeScript interfaces
└── app/
    └── bento-test/
        └── page.tsx                   # Test page
```

This component represents a modern, professional solution for showcasing healthcare services with excellent user experience and accessibility standards.
