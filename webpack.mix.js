let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix.sass('src/tailwind.scss', 'assets/main.css').options({
  processCssUrls: false,
  postCss: [tailwindcss('tailwind.config.js')],
});
