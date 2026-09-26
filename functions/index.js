// Cloudflare Pages Function for "/" only (this file maps to the site root).
// Same language detection as the Worker; see worker/locale.js.
import { redirectToLocale } from '../worker/locale.js';

export const onRequest = ({ request }) => redirectToLocale(request);
