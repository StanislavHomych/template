# Next.js Blog Template

A clean, reusable single-page website template built with Next.js, TypeScript, and Tailwind CSS. Perfect for SaaS websites with a built-in blog system.

## Features

- ✅ Fixed top navigation bar with logo and links
- ✅ Footer with organized sections (Product, Legal, Resources)
- ✅ Data-driven blog system
- ✅ Blog list page with card layout
- ✅ Dynamic blog post pages with Markdown rendering
- ✅ Reusable components (Navbar, Footer, BlogCard)
- ✅ Modern SaaS-style design
- ✅ Fully responsive
- ✅ TypeScript for type safety

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
template/
├── src/
│   ├── app/
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx      # Dynamic blog post page
│   │   │   └── page.tsx          # Blog list page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   ├── layout.tsx            # Root layout with Navbar & Footer
│   │   ├── page.tsx              # Home page
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── Navbar.tsx            # Navigation component
│   │   ├── Footer.tsx            # Footer component
│   │   └── BlogCard.tsx          # Blog card component
│   └── data/
│       └── blogs.ts              # Blog data array
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Configuration

All site-wide data is centralized in `src/config/site.ts`. This includes:

- Site name and branding
- Navigation links
- Footer sections
- Contact information
- Home page content
- Contact page content
- Blog data (imported from `src/data/blogs.ts`)

To customize the site, simply edit the values in `src/config/site.ts`.

## Adding New Blog Posts

To add a new blog post, simply add a new object to the `blogs` array in `src/data/blogs.ts`:

```typescript
{
  slug: 'your-blog-slug',
  title: 'Your Blog Title',
  date: '2024-01-30',
  excerpt: 'A short description of your blog post',
  content: `# Your Blog Title

Your markdown content here...

## Section

More content...
`
}
```

The blog post will automatically appear on the blog list page and be accessible at `/blog/your-blog-slug`.

## Markdown Support

Blog posts support full Markdown formatting including:

- Headers (# ## ###)
- **Bold** and *italic* text
- Code blocks with syntax highlighting
- Lists (ordered and unordered)
- Links
- Images
- Tables (via GitHub Flavored Markdown)
- And more!

You can paste content from Google Docs and format it as Markdown. The content is rendered using `react-markdown` with GitHub Flavored Markdown support.

## Customization

### Styling

The project uses Tailwind CSS. You can customize the design by:

1. Modifying `tailwind.config.ts` for theme customization
2. Updating component styles in the component files
3. Adjusting global styles in `src/app/globals.css`

### Components

All components are reusable and can be easily modified:

- **Navbar**: Update links, logo, or styling in `src/components/Navbar.tsx`
- **Footer**: Modify sections and links in `src/components/Footer.tsx`
- **BlogCard**: Customize the blog card appearance in `src/components/BlogCard.tsx`

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [react-markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering
- [remark-gfm](https://github.com/remarkjs/remark-gfm) - GitHub Flavored Markdown support

## License

This template is open source and available for use in your projects.

