#!/usr/bin/env node

/**
 * Helper script to add frontmatter to blog markdown files
 *
 * Usage: node scripts/add-blog-frontmatter.js <filename> [options]
 *
 * Example:
 * node scripts/add-blog-frontmatter.js my-blog-post.md \
 *   --title "My Blog Post" \
 *   --excerpt "This is my blog post excerpt" \
 *   --category technical \
 *   --tags "AI,Machine Learning,Python"
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage: node scripts/add-blog-frontmatter.js <filename> [options]');
  console.log('\nOptions:');
  console.log('  --title <title>          Blog post title');
  console.log('  --excerpt <excerpt>      Short excerpt');
  console.log('  --category <category>    Category (technical, career, insights, tutorial)');
  console.log('  --tags <tags>            Comma-separated tags');
  console.log('  --featured               Mark as featured');
  console.log('  --draft                  Mark as draft');
  console.log('  --date <YYYY-MM-DD>      Publish date (defaults to today)');
  process.exit(1);
}

const filename = args[0];
const options = {};

// Parse options
for (let i = 1; i < args.length; i++) {
  if (args[i].startsWith('--')) {
    const key = args[i].substring(2);
    if (key === 'featured' || key === 'draft') {
      options[key] = true;
    } else if (i + 1 < args.length && !args[i + 1].startsWith('--')) {
      options[key] = args[i + 1];
      i++;
    }
  }
}

// Generate frontmatter
const id = options.id || path.basename(filename, '.md');
const title = options.title || 'Untitled Post';
const excerpt = options.excerpt || '';
const category = options.category || 'technical';
const tags = options.tags ? options.tags.split(',').map(t => t.trim()) : [];
const publishedDate = options.date || new Date().toISOString().split('T')[0];
const featured = options.featured ? 'true' : 'false';
const status = options.draft ? 'draft' : 'published';

const frontmatter = `---
id: ${id}
title: ${title}
excerpt: ${excerpt}
category: ${category}
tags:
${tags.map(tag => `  - ${tag}`).join('\n')}
publishedDate: ${publishedDate}
featured: ${featured}
status: ${status}
---

`;

// Read existing file
const blogDetailsDir = path.join(process.cwd(), 'blog-details');
const filepath = path.join(blogDetailsDir, filename);

if (!fs.existsSync(filepath)) {
  console.error(`File not found: ${filepath}`);
  process.exit(1);
}

const content = fs.readFileSync(filepath, 'utf8');

// Check if frontmatter already exists
if (content.trim().startsWith('---')) {
  console.log(`Frontmatter already exists in ${filename}`);
  console.log('Skipping...');
  process.exit(0);
}

// Add frontmatter to file
const newContent = frontmatter + content;
fs.writeFileSync(filepath, newContent, 'utf8');

console.log(`✅ Added frontmatter to ${filename}`);
console.log('\nFrontmatter:');
console.log(frontmatter);
