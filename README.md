# Mitra — Fashion & Lifestyle E-Commerce

A static e-commerce website built with HTML, CSS, and vanilla JavaScript. Categories: Womens Wear, Mens Wear, Kids Wear, and Accessories. Every product card has live search and a quantity selector.

## Features

- Live product search, filters cards as you type
- Quantity selector (- / +), stops at 1
- Responsive CSS Grid layout
- Shared shared.js for search and quantity
- Shared upgrad1.css for base styles
- No frameworks, no build step, no npm

## Files

- mytra.html — Home page
- womenswear.html — Womens Wear
- first html.html — Mens Wear
- kidswear.html — Kids Wear
- accessories.html — Accessories
- shared.js — Search + quantity logic
- upgrad1.css — Base stylesheet

## Run

Open mytra.html in a browser. Done.

Or serve locally:

python -m http.server 8000

Then open http://localhost:8000/mytra.html

## How search works

shared.js filters .box cards by matching text. If no card matches, the #noResults message shows.

## How quantity works

Each card has:

<div class="qty-box">
  <button class="qty-minus">-</button>
  <span class="qty-value">1</span>
  <button class="qty-plus">+</button>
</div>

Minus stops at 1. Plus has no limit.

## Colors

- Primary: #062673
- Accent: #ff9900
- Background: #f7f7f7
- Card: #ffffff

## Add a product

Copy any .box block inside .grid-container and change the image, price, and name.

## Deploy to GitHub Pages

Settings, Pages, Deploy from branch, main, root. Site goes live at https://Ashok-Nani.github.io/E-Commerce-webpage/mytra.html

## License

MIT

## Author

Repana Ashok

github.com/Ashok-Nani
