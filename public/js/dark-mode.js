/**
 * Dark Mode Toggle and Initialization
 * This script handles dark mode functionality across the site
 */

document.addEventListener('alpine:init', () => {
  // Initialize dark mode from localStorage or system preference
  Alpine.data('darkMode', () => ({
    darkMode: false,
    
    init() {
      // Check for saved user preference, then check system preference
      const savedPreference = localStorage.getItem('darkMode');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Set initial state
      this.darkMode = savedPreference !== null 
        ? savedPreference === 'true' 
        : prefersDark;
      
      // Apply the initial state
      this.applyDarkMode(this.darkMode);
      
      // Watch for changes
      this.$watch('darkMode', value => this.applyDarkMode(value));
      
      // Listen for system color scheme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('darkMode') === null) {
          this.darkMode = e.matches;
        }
      });
    },
    
    applyDarkMode(isDark) {
      // Toggle dark class on html element
      document.documentElement.classList.toggle('dark', isDark);
      
      // Save preference
      localStorage.setItem('darkMode', isDark);
      
      // Set a cookie for server-side rendering if needed
      document.cookie = `darkMode=${isDark}; path=/; max-age=31536000; samesite=lax`;
      
      // Update meta theme-color
      const themeColor = isDark ? '#1f2937' : '#ffffff';
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor);
    },
    
    toggle() {
      this.darkMode = !this.darkMode;
    }
  }));
});

// Add a class to the html element if JavaScript is enabled
document.documentElement.classList.add('js-enabled');

// Add a class when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('page-loaded');
});
