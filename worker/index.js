// Cloudflare Workers entry point. Only "/" reaches this code (see run_worker_first
// in wrangler.jsonc); every other request is served straight from the static build.
import { redirectToLocale } from './locale.js';

export default {
  async fetch(request, env) {
    if (new URL(request.url).pathname === '/') return redirectToLocale(request);
    return env.ASSETS.fetch(request);
  },
};
