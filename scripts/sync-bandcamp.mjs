import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RELEASES_JSON_PATH = path.join(__dirname, '../src/data/releases.json');
const IMAGES_DIR = path.join(__dirname, '../public/images');
const BANDCAMP_URL = 'https://lostfuzz.bandcamp.com';

function slugify(name) {
  return name
    .trim()
    .replace(/[\n\r\t]+/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/[/\\?%*:|"<>]/g, '') // remove illegal filename chars
    .replace(/\s+/g, '_');         // spaces -> underscores
}

async function syncReleases() {
  console.log('Fetching Bandcamp page...');
  const response = await fetch(BANDCAMP_URL);
  const html = await response.text();
  const $ = cheerio.load(html);

  if (!fs.existsSync(RELEASES_JSON_PATH)) {
    console.error('Releases JSON not found at:', RELEASES_JSON_PATH);
    return;
  }

  const existingReleases = JSON.parse(fs.readFileSync(RELEASES_JSON_PATH, 'utf8'));
  const existingLinks = new Set(existingReleases.map(r => r.link));

  const newReleases = [];

  // Bandcamp music grid items
  const items = $('ol#music-grid > li').get();
  
  for (const li of items) {
    const $li = $(li);
    const $a = $li.find('a').first();
    
    // Bandcamp titles are often inside a <p class="title"> or just the text of the link
    let name = $li.find('.title').text().trim();
    if (!name) {
        // Fallback to searching all text nodes in the link but excluding hidden ones
        name = $a.text().trim().split('\n')[0].trim();
    }

    const href = $a.attr('href') || '';
    if (!href) continue;

    const releaseUrl = href.startsWith('http')
      ? href
      : BANDCAMP_URL.replace(/\/$/, '') + '/' + href.replace(/^\//, '');

    if (existingLinks.has(releaseUrl)) {
      continue;
    }

    console.log(`Found potential new release: ${name}`);

    const $img = $li.find('img');
    // Bandcamp uses lazy loading often, check src and data-original
    const imgUrl = $img.attr('src') || $img.attr('data-original');
    
    if (!imgUrl) {
      console.warn(`No image found for ${name}, skipping.`);
      continue;
    }

    const fileName = slugify(name) + '.jpg';
    const localImagePath = path.join(__dirname, '../public/images', fileName);

    console.log(`Downloading image for ${name} from ${imgUrl}...`);
    try {
        const imgRes = await fetch(imgUrl);
        if (!imgRes.ok) throw new Error(`Failed to fetch image: ${imgRes.statusText}`);
        const buffer = Buffer.from(await imgRes.arrayBuffer());
        fs.writeFileSync(localImagePath, buffer);

        newReleases.push({
          name,
          link: releaseUrl,
          image: `/images/${fileName}`
        });
    } catch (err) {
        console.error(`Error downloading image for ${name}:`, err.message);
    }
  }

  if (newReleases.length > 0) {
    // We want newest first, and usually music-grid is already newest first.
    // existingReleases are already in some order. 
    // If we prepended them, we'd have the new ones at the top.
    const updatedReleases = [...newReleases, ...existingReleases];
    fs.writeFileSync(RELEASES_JSON_PATH, JSON.stringify(updatedReleases, null, 2));
    console.log(`Added ${newReleases.length} new releases.`);
  } else {
    console.log('No new releases found.');
  }
}

syncReleases().catch(console.error);
