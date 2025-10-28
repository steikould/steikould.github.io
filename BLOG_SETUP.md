# Dynamic Blog Post Generation

Your blog now automatically loads posts from markdown files in the `blog-details/` directory.

## ✅ What's Working

- Blog post cards and detail pages are automatically generated from markdown files
- Markdown content is properly rendered with syntax highlighting
- Three blog posts are already set up and working:
  - `industrial-iot-sensor-intelligence.md`
  - `multi-agent-llm-industrial-optimization.md`
  - `genetic-algorithm-fuel-blending.md`

## 📝 Adding New Blog Posts

To add a new blog post:

1. Create a `.md` file in the `blog-details/` directory

2. Add YAML frontmatter at the top:

```markdown
---
id: my-blog-post-slug
title: "My Blog Post Title"
excerpt: "A brief description of the blog post"
category: technical
tags:
  - Tag 1
  - Tag 2
  - Tag 3
publishedDate: 2024-01-15
featured: true
status: published
readTime: 10
---

# My Blog Post Title

Your content here...
```

### Frontmatter Fields:

- **id**: URL-friendly slug (required)
- **title**: Post title - use quotes if it contains colons (required)
- **excerpt**: Short description - use quotes (required)
- **category**: technical | career | insights | tutorial (required)
- **tags**: Array of tags (required)
- **publishedDate**: YYYY-MM-DD format (required)
- **featured**: true | false (optional, default: false)
- **status**: published | draft (optional, default: published)
- **readTime**: Estimated read time in minutes (optional)

### Important Notes:

1. **Always quote titles and excerpts** that contain special characters (colons, asterisks, etc.)
2. **Use consistent indentation** in YAML (2 spaces for nested items)
3. Only files with `status: published` will appear on the blog
4. Featured posts can be highlighted on the homepage

## 🔧 Existing Blog Posts Without Frontmatter

Some files in `blog-details/` don't have frontmatter yet. These will be skipped and errors logged to the console. You can either:

1. Add frontmatter to them using the format above
2. Delete or move them if they're not needed
3. Leave them - they won't break the site, just won't appear on the blog

## 🎨 Markdown Features Supported

- Headers (H1-H6)
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Tables
- Blockquotes
- Links and images
- Bold, italic, strikethrough
- Horizontal rules

## 🚀 Development

```bash
npm run dev
```

Visit http://localhost:3000/blog to see your blog posts!

## 📁 File Structure

```
/steikould.github.io
├── app/
│   └── blog/
│       ├── page.tsx          # Blog list page
│       └── [id]/
│           └── page.tsx      # Individual blog post page
├── components/
│   └── blog/
│       ├── BlogCard.tsx      # Blog card component
│       └── MarkdownRenderer.tsx  # Markdown content renderer
├── lib/
│   ├── blog.ts              # Blog post utilities
│   └── markdown.ts          # Markdown parser
└── blog-details/            # Your blog markdown files
    ├── industrial-iot-sensor-intelligence.md  ✅
    ├── multi-agent-llm-industrial-optimization.md  ✅
    ├── genetic-algorithm-fuel-blending.md  ✅
    └── your-new-post.md
```

## 🐛 Troubleshooting

If a blog post doesn't appear:

1. Check that the frontmatter is valid YAML
2. Ensure `status: published` is set
3. Check the console for parsing errors
4. Verify the file is in the `blog-details/` directory
5. Make sure titles/excerpts are quoted if they contain special characters

The system will gracefully skip files with errors and continue loading other posts.
