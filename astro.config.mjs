// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://thenudesign.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  image: {
    // Every <Photo> gets responsive srcset + AVIF/WebP at build time.
    layout: 'constrained',
    responsiveStyles: true,
    // A focused set of widths keeps build time sane with large photo sets.
    breakpoints: [480, 800, 1200, 1600, 2000, 2560],
  },
});
