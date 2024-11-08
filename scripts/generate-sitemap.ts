// scripts/generate-sitemap.ts
import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

async function generate() {
  try {
    const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
    const pages = await globby([
      'app/**/*.tsx',
      'pages/**/*.tsx',
      '!app/**/_*.tsx',
      '!pages/**/_*.tsx',
      '!pages/**/[*.tsx',
    ]);

    const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace('pages', '')
              .replace('app', '')
              .replace(/\.tsx$/, '')
              .replace(/\/page$/, '');
            const route = path === '/index' ? '' : path;
            return `
              <url>
                <loc>${`https://coltonspyker.com${route}`}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>${route === '' ? '1.0' : '0.8'}</priority>
              </url>
            `;
          })
          .join('')}
      </urlset>
    `;

    const formatted = await prettier.format(sitemap, {
      ...prettierConfig,
      parser: 'html',
    });

    writeFileSync('public/sitemap.xml', formatted);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

// Self-executing async function
(async () => {
  await generate();
})();