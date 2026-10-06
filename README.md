# 🍽️ Hush Lush — Restaurant Menu Web App

A modern, responsive restaurant ordering web application built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Redux Toolkit**. It features a fully functional authentication flow, animated food menu, and a Zomato-inspired image slider banner.

---

## 📸 Screenshots

| Login Screen | Home / Menu Screen |
|---|---|
| Clean branded login with social options & guest access | Full-width banner slider, category tabs, food card grid |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** `>= 18`
- **npm** `>= 9`

### Install & Run

```bash
# 1. Navigate to the FrontEnd directory
cd FrontEnd

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app will be available at **http://localhost:5173**

### Other Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on all source files |

---

## 🔐 Demo Credentials

> [!IMPORTANT]
> The app uses a **mock authentication service** — no real backend is required.
> Use the credentials below to log in, or click **"Sign as Guest"** to skip authentication.

```
Email:    test@hushlush.com
Password: Test@123
```

| Field | Value |
|---|---|
| 📧 Email | `test@hushlush.com` |
| 🔑 Password | `Test@123` |

> **Tip:** You can also click **"Sign as Guest"** to bypass login and access the menu directly.

---

## 📁 Project Structure

```
FrontEnd/
├── public/                   # Static assets
├── src/
│   ├── assets/
│   │   └── images/           # Local images (banner, food items)
│   │       ├── banner.jpg
│   │       ├── img1.jpg
│   │       ├── img2.jpg
│   │       ├── img3.jpg
│   │       └── img4.jpg
│   │
│   ├── components/
│   │   ├── common/           # Reusable UI primitives
│   │   │   ├── Button.tsx    # Multi-variant button (primary / outline / text)
│   │   │   ├── Input.tsx     # Labelled input with eye-toggle for passwords
│   │   │   └── Loader.tsx    # Loading spinner
│   │   │
│   │   └── menu/             # Feature-specific components
│   │       ├── Banner.tsx        # Auto-playing image slider with dot nav
│   │       ├── BottomNavigation.tsx  # Mobile bottom tab bar
│   │       ├── CategoryTabs.tsx  # Horizontal scrollable category filter
│   │       ├── FoodCard.tsx      # Animated food item card
│   │       └── Header.tsx        # Sticky top nav with desktop links & logout
│   │
│   ├── data/
│   │   ├── menuData.ts       # Menu items array (id, name, price, image, category)
│   │   └── navItems.tsx      # Nav item definitions using Lucide icons
│   │
│   ├── features/
│   │   ├── authService.ts    # Mock login / guest login API (with simulated delay)
│   │   └── auth/
│   │       └── authSlice.ts  # Redux slice (loginSuccess, guestLogin, logout)
│   │
│   ├── hooks/                # Custom React hooks (ready for expansion)
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.tsx      # Restaurant menu page
│   │   └── Login/
│   │       └── Login.tsx     # Authentication page
│   │
│   ├── routes/
│   │   ├── AppRoutes.tsx     # Route definitions
│   │   └── ProtectedRoute.tsx # Auth guard — redirects unauthenticated users
│   │
│   ├── store/
│   │   └── store.ts          # Redux store configuration
│   │
│   ├── types/
│   │   └── index.ts          # Shared TypeScript interfaces & types
│   │
│   ├── utils/
│   │   └── validation.ts     # Zod schema for login form validation
│   │
│   ├── App.tsx               # App root (BrowserRouter + Toaster + AppRoutes)
│   ├── main.tsx              # React DOM entry point (Redux Provider)
│   └── index.css             # Global styles, Tailwind theme, keyframe animations
│
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## 🧰 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 19 |
| **Language** | TypeScript 6 |
| **Styling** | Tailwind CSS v4 (Vite plugin) |
| **State Management** | Redux Toolkit + React Redux |
| **Routing** | React Router DOM v7 |
| **Form Handling** | React Hook Form + Zod |
| **Icons** | Lucide React |
| **Notifications** | Sonner (toast) |
| **Build Tool** | Vite 8 |

---

## ✨ Features

### 🔐 Authentication
- Email + password login with real-time Zod validation
- Error messages shown inline under each field
- Toast notifications for login success/failure
- "Sign as Guest" one-click access
- Auth state persisted in `localStorage` across page refreshes
- Protected routes — unauthenticated users are redirected to `/login`
- Fully functional **Logout** button clears state and redirects

### 🏠 Home / Menu Screen
- **Auto-playing banner slider** — 4 slides, 4-second interval, clickable dot navigation
- **Category tabs** — horizontally scrollable, active state with brand red colour
- **Food card grid** — 2 columns (mobile) → 3 (tablet) → 4 (desktop)
- **Empty state** shown with icon when no menu items exist
- **Floating cart button** (bottom-right)
- **Bottom navigation bar** on mobile with Outlet / Menu / Account / More tabs
- **Desktop navigation** in header with Outlet / Menu / Account links

### 💫 Micro-interactions & Animations
| Element | Animation |
|---|---|
| Login page entry | Fade + slide up (`fadeSlideUp`) |
| Food cards | Staggered fade-in on load (80ms delay per card) |
| Food card hover | Card lift, image zoom, overlay, add-button fade-in, title colour change |
| Banner slides | Smooth `translateX` CSS transition |
| Nav items | `border-b` + colour transition on active state |
| Buttons | `active:scale-95` press feedback |
| All transitions | Disabled for `prefers-reduced-motion` users |

### 📱 Responsiveness
| Breakpoint | Layout |
|---|---|
| Mobile (`< 768px`) | Single-column logo header, bottom navigation bar |
| Tablet (`768px+`) | 3-column grid, desktop header nav visible |
| Desktop (`1280px+`) | 4-column grid, full header with Logout button |

---

## 🧩 Reusable Components

### `<Button variant="..." />`
Three built-in variants:
```tsx
<Button>Submit</Button>                    // primary (black, full-width)
<Button variant="outline">...</Button>     // outline border (social login buttons)
<Button variant="text">Forgot?</Button>   // text-only with underline
```
All variants support `loading`, `disabled`, and `className` override props.

### `<Input label="..." type="..." />`
```tsx
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  registration={register("email")}
  error={errors.email?.message}
/>
```
- Built-in Show/Hide toggle for `type="password"` fields
- Renders error message automatically when `error` prop is provided

---

## 🗂️ State Management

Auth state shape (Redux + `localStorage`):

```ts
interface AuthState {
  isAuthenticated: boolean;  // true after login or guest
  isGuest: boolean;          // true only for guest sessions
}
```

Actions available:
- `loginSuccess()` — set authenticated as registered user
- `guestLogin()` — set authenticated as guest
- `logout()` — clear state and remove from localStorage

---

## 🛡️ Validation Rules

Defined in `src/utils/validation.ts` using Zod:

| Field | Rules |
|---|---|
| Email | Required, valid email format |
| Password | Required, minimum 6 characters |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

This project is proprietary to **Hush Lush Advertising & Technologies**.

---

<div align="center">
  <strong>Powered by <em>Hush Lush</em></strong>
</div>
