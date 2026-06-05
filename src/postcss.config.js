export default {
  plugins: [
    await import('tailwindcss').then(m => m.default),
    await import('autoprefixer').then(m => m.default)
  ]
}
