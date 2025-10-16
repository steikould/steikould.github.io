# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with animations, showcasing projects, skills, and professional experience.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with dark/light contrast
- **Responsive**: Mobile-first design that looks great on all devices
- **Animated**: Smooth animations and transitions using Framer Motion
- **Fast**: Built with Next.js 14+ App Router for optimal performance
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags, structured data, and optimized content

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📱 Pages

### Home Page
- Hero section with animated background
- Featured projects showcase
- Skills and expertise overview
- Call-to-action buttons

### Projects Page
- Filterable project grid
- Detailed project cards with metrics
- Individual project detail pages
- Technology tags and links

### About Page
- Professional photo and bio
- Interactive timeline of experience
- Comprehensive skills breakdown
- Education and certifications

### Blog Page
- Blog post cards with categories
- Reading time estimates
- Tag-based organization
- Coming soon: full blog functionality

## 🎨 Design System

### Color Palette
- **Primary Dark**: `#0f0f1e` - Main dark backgrounds
- **Secondary Dark**: `#1a1a2e` - Card backgrounds
- **Primary Light**: `#f8f9fa` - Light section backgrounds
- **Accent Blue**: `#4169e1` - Buttons, links, highlights
- **Accent Blue Light**: `#e8eeff` - Badges, hover states

### Typography
- **Font Family**: Inter (Google Fonts)
- **Display 1**: 56px, Bold (Main headings)
- **Display 2**: 40px, Semibold (Section titles)
- **Body Large**: 18px, Regular (Main content)

### Components
- **Cards**: Rounded corners (16px), subtle shadows, hover animations
- **Buttons**: Primary and secondary variants, hover effects
- **Badges**: Pill-shaped tags for technologies and categories

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd professional-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── projects/         # Projects pages
│   ├── about/            # About page
│   └── blog/             # Blog pages
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   ├── home/             # Home page components
│   ├── projects/         # Project components
│   ├── about/            # About page components
│   └── blog/             # Blog components
├── lib/                  # Utility functions and data
│   ├── utils.ts          # Utility functions
│   ├── projects.ts       # Project data
│   └── blog.ts           # Blog data
└── public/               # Static assets
```

## 🎯 Customization

### Personal Information
Update the following files with your information:

1. **Personal Details**: Update names, titles, and contact info in:
   - `components/layout/Navbar.tsx`
   - `components/layout/Footer.tsx`
   - `components/home/Hero.tsx`
   - `components/about/Hero.tsx`

2. **Projects**: Edit `lib/projects.ts` to add your projects

3. **Experience**: Update the timeline in `components/about/Timeline.tsx`

4. **Skills**: Modify skills in `components/about/SkillsList.tsx`

5. **Blog Posts**: Add your content in `lib/blog.ts`

### Styling
- **Colors**: Update the color palette in `tailwind.config.ts`
- **Fonts**: Change fonts in `app/layout.tsx` and Tailwind config
- **Animations**: Modify Framer Motion settings in components

### Content
- **Metadata**: Update SEO information in page files
- **Images**: Add your professional photos to `/public`
- **Resume**: Link your resume in the download buttons

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with each push

### Other Platforms
- **Netlify**: Drag and drop the `out` folder after running `npm run build`
- **AWS S3**: Upload the static files after building
- **Docker**: Use the included Dockerfile for containerized deployment

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for speed and user experience
- **Bundle Size**: Optimized with Next.js automatic splitting
- **Images**: Use Next.js Image component for optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Built with amazing open-source tools and libraries
- Icons by [Lucide](https://lucide.dev)
- Fonts by [Google Fonts](https://fonts.google.com)

---

**Note**: This is a template portfolio website. Remember to customize all content, images, and personal information before deploying to production.