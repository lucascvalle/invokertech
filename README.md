# InvokerTech Website

This is the official website for InvokerTech.

## Stack

   * Frontend Framework:
       * React: ^18.3.1
   * Language:
       * TypeScript: ^5.8.3
   * Build and Development Tools:
       * Vite: ^5.4.19
       * @vitejs/plugin-react-swc: ^3.11.0 (React plugin with SWC)
       * ESLint: ^9.32.0 (Code linter)
       * Autoprefixer: ^10.4.21 (CSS preprocessor for vendor prefixes)
       * PostCSS: ^8.5.6 (Tool for transforming CSS styles)
   * Styling:
       * Tailwind CSS: ^3.4.17 (Utility-first CSS framework)
       * tailwindcss-animate: ^1.0.7 (Tailwind plugin for animations)
       * @tailwindcss/typography: ^0.5.16 (Tailwind plugin for typographic styles)
       * class-variance-authority (cva): ^0.7.1 (Utility for managing CSS class variants)
       * clsx: ^2.1.1 (Utility for conditionally constructing className strings)
       * tailwind-merge: ^2.6.0 (Utility for merging Tailwind classes without conflicts)
   * UI Component Library:
       * Shadcn UI: (Collection of reusable components, built on Radix UI and styled with Tailwind CSS)
       * Radix UI: (Low-level component libraries, such as @radix-ui/react-accordion, @radix-ui/react-alert-dialog, etc. - various ^1.x and ^2.x
         versions)
   * Internationalization (i18n):
       * i18next: ^25.3.2 (Internationalization framework)
       * react-i18next: ^15.6.1 (i18next integration for React)
       * i18next-http-backend: ^3.0.2 (HTTP backend for loading translations)
   * Routing:
       * react-router-dom: ^6.30.1
   * State Management / Data Fetching:
       * @tanstack/react-query: ^5.83.0 (For asynchronous data fetching, caching, and synchronization)
   * Form Handling and Validation:
       * react-hook-form: ^7.61.1
       * @hookform/resolvers: ^3.10.0 (Schema resolvers for React Hook Form)
       * zod: ^3.25.76 (Schema declaration and validation library)
   * Date Handling:
       * date-fns: ^3.6.0
       * react-day-picker: ^8.10.1 (Date picker component)
   * Animations and Transitions:
       * embla-carousel-react: ^8.6.0 (Carousel)
       * vaul: ^0.9.9 (Drawer component)
       * sonner: ^1.7.4 (Toast/notification component)
       * react-resizable-panels: ^2.1.9 (Resizable panels)
   * Icons:
       * lucide-react: ^0.462.0
   * Theming (Dark/Light Mode):
       * next-themes: ^0.3.0
   * Miscellaneous Utilities:
       * cmdk: ^1.1.1 (Command Menu component)
       * input-otp: ^1.4.2 (OTP input component)
       * recharts: ^2.15.4 (Charting library)
       * path: (Node.js native module, used in vite.config.ts for path resolution)
       * cn: (Local utility function, typically from @/lib/utils, for merging classes)
   * Package Manager:
       * npm
   * Version Control:
       * Git
   * Deployment:
       * Vercel

       
## Development

To run the project locally:

```bash
npm install
npm run dev
```

## Deployment

This project is deployed using Vercel.

Check the link: https://invokertech.vercel.app/
