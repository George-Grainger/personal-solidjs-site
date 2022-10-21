import { writeFile, readdir } from 'fs/promises';

const routes = ['', 'projects', 'languages', 'theme', 'accessibility'];
const site_url = 'https://www.georgegrainger.com';

function formatPage(name, published) {
  return `\n  <sitemap>\n    <loc>${name}</loc>\n    <lastmod>${published}</lastmod>\n  </sitemap>`;
}

async function generateSitemap() {
  const publishDate = new Date().toISOString();
  let content = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="//www.nsb.com/wp-content/plugins/wordpress-seo-premium/css/main-sitemap.xsl"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  routes.forEach((route) => {
    content = `${content}${formatPage(`${site_url}/${route}`, publishDate)}`;
  });

  const examples = await readdir('lang/en/projects');
  examples.forEach((route) => {
    const path = `${site_url}/projects/${route.replace('.md', '')}`;
    content = `${content}${formatPage(path, publishDate)}`;
  });

  content = `${content}\n</sitemapindex>`;
  await writeFile('public/sitemap.xml', content, { encoding: 'utf-8' });
}

generateSitemap();
