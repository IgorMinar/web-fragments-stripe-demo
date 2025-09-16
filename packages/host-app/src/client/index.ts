import { initializeWebFragments, WebFragment } from 'web-fragments';
initializeWebFragments();

console.log('🐣 Welcome to the web-fragments-stripe-demo app! 🐣');

history.pushState({}, '', '/checkout');
const webFragment = new WebFragment();
webFragment.setAttribute('fragment-id', 'stripe-fragment-app');
document.body.appendChild(webFragment);