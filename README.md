# The Wild Oasis Website

A luxurious cabin hotel booking website located in the heart of the Italian Dolomites. This project is a modern web application built with Next.js, allowing users to browse cabins, manage reservations, and update their profiles.

## 🚀 Live Demo

**[View Live Application](https://the-wild-oasis-website-pkjv.vercel.app/)**

## 🌟 Features

- **Cabin Browsing:** View detailed information about various luxury cabins.
- **Reservation System:** Select dates and book cabins. Handles date ranges and availability.
- **User Authentication:** Secure sign-in using Google Authentication (NextAuth.js).
- **User Dashboard:** Manage reservations and update user profile settings (national ID, nationality).
- **Responsive Design:** Fully responsive layout for Desktop, Tablet, and Mobile devices.
- **Server-Side Rendering:** Optimized performance and SEO using Next.js App Router.
- **Image Optimization:** High-quality image delivery using Next.js Image component.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** JavaScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Backend / Database:** [Supabase](https://supabase.com/)
- **Authentication:** [NextAuth.js](https://authjs.dev/) (v5)
- **State Management:** React Context API & Server Actions
- **Date Handling:** [date-fns](https://date-fns.org/) & [React Day Picker](https://react-day-picker.js.org/)
- **Fonts:** [Google Fonts](https://fonts.google.com/) (Josefin Sans)

## 📂 Project Structure

```
.
├── app/                  # Next.js App Router source
│   ├── _components/      # Reusable React components
│   ├── _lib/             # Utility functions, auth config, Supabase client
│   ├── _style/           # Global styles
│   ├── about/            # About page
│   ├── account/          # User account section (Reservations, Profile)
│   ├── api/              # API routes (NextAuth)
│   ├── cabins/           # Cabins listing and details
│   ├── login/            # Login page
│   ├── layout.js         # Root layout
│   └── page.js           # Home page
├── public/               # Static assets
└── ...
```
