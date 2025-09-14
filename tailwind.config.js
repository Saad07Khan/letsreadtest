/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        border: 'hsl(var(--border))',
        'child-pink': 'hsl(var(--child-pink))',
        'child-yellow': 'hsl(var(--child-yellow))',
        'child-blue': 'hsl(var(--child-blue))',
        'child-green': 'hsl(var(--child-green))'
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-hero': 'var(--gradient-hero)'
      }
    }
  },
  plugins: []
};
