import withPWA from 'next-pwa';

export default withPWA({
  dest: 'public', // Directory for the service worker and precache manifest
  register: true, // Automatically register the service worker
  skipWaiting: true, // Skip waiting and activate the new service worker immediately
  // disable: process.env.NODE_ENV === 'production', 
});
