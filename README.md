# S11 Clothing Studio

Build a complete, premium, modern and highly attractive T-shirt selling website as a frontend/client-side only website.

IMPORTANT:

I have limited Lovable credits, so implement EVERYTHING in this prompt in the first generation.

Do not ask me unnecessary questions.

Do not create any backend, server, database, authentication system, API, payment gateway, admin panel, checkout system, booking system, or server-side functionality.

The entire website must work as a static/client-side website.

Use realistic sample products and content so the website looks complete immediately.

Make the code production-ready and clean.

Make the entire website fully responsive for desktop, tablet and mobile.

Do not leave placeholder sections or unfinished components.

BRAND

Create a stylish clothing brand identity from scratch.

Brand name:
S11 CLOTHING

Create a premium custom logo for S11 CLOTHING from your own design direction.

Logo requirements:

Modern fashion/streetwear aesthetic

Minimal but memorable

Professional enough for a real clothing brand

Use a strong typographic "S11" symbol/mark combined with "CLOTHING"

The logo should work on both light and dark backgrounds

Prefer a clean monochrome logo with one tasteful accent colour

Do NOT use an existing brand logo or copied design

Create the logo as a reusable SVG/component where possible rather than relying on an external logo image

Use the exact same logo throughout the website

Use the logo as the website's main brand logo

Use the logo as the browser favicon/site icon

Set the page title/brand name to "S11 Clothing"

DESIGN DIRECTION

The website should feel like a premium Indian streetwear / fashion brand, not like a generic template.

Overall visual style:

Premium

Modern

Minimal

Bold

Fashion-forward

High-end

Clean

Mobile-first

Strong product photography

Excellent whitespace

Smooth micro-interactions

Suggested colour palette:

Primary: deep black / near-black

Secondary: warm off-white / ivory

Accent: sophisticated red/orange or another tasteful fashion accent

Text: charcoal/black on light backgrounds and white on dark backgrounds

Use the accent colour sparingly for CTA buttons, highlights and important UI elements.

Do not use too many colours.
Maintain a consistent premium visual identity throughout the site.

Typography:

Use a modern premium sans-serif font.

Strong bold typography for headings.

Clean readable typography for descriptions and product details.

Large editorial-style headings for hero sections.

WEBSITE STRUCTURE

Create the following complete website:

1. STICKY NAVBAR

Desktop:

S11 CLOTHING logo on left

Home

Shop

New Arrivals

Best Sellers

About

Contact

Primary "Shop Now" CTA

Mobile:

Logo

Hamburger menu

Mobile navigation drawer

Shop Now CTA

Navbar should:

Be sticky

Have subtle backdrop blur/shadow when scrolling

Have smooth transitions

Look premium and uncluttered

Do NOT add cart, login, account or wishlist functionality because this is intentionally a simple WhatsApp-ordering website.

2. HERO SECTION

Create a visually impressive fashion hero section.

Headline example:
WEAR YOUR ATTITUDE.

Supporting text:
"Premium everyday essentials designed for your style."

CTA buttons:

"SHOP COLLECTION"

"EXPLORE BEST SELLERS"

Hero should include a large high-quality T-shirt fashion visual using suitable generated/placeholder product imagery.

The hero should feel like a real clothing brand campaign.

Add subtle animations:

Text fade/slide

Image reveal

Button hover animation

Very subtle movement/parallax if appropriate

Do not overdo animations.

3. BRAND TRUST / HIGHLIGHTS BAR

Immediately below hero create a clean horizontal feature strip with 3–4 benefits:

Premium Quality

Comfortable Fabrics

Modern Fits

Easy WhatsApp Ordering

On mobile make it horizontally scrollable or stack elegantly.

4. SHOP / PRODUCT COLLECTION

Create a premium product catalogue.

Include at least 8 realistic T-shirt products with attractive product imagery.

Example products:

Essential Black Tee

Classic White Oversized Tee

Urban Red Graphic Tee

Midnight Street Tee

Sand Beige Essential Tee

Minimal Logo Tee

Vintage Wash Tee

Premium Oversized Black Tee

Each product card must show:

Product image

Product name

Short category/tag

Price in ₹

Optional original price/discount

Available colours

"View Product" / "Order Now" button

Use Indian Rupee pricing.

Example pricing can be realistic:
₹499
₹599
₹699
₹799

Do not make the website look fake with excessive discounts.

Product cards should have:

Elegant image hover effect

Slight zoom on image hover

Smooth card transition

Clean typography

Premium spacing

Mobile-friendly layout

Desktop:
4-column grid where appropriate.

Tablet:
2–3 columns.

Mobile:
2-column product grid where it remains usable, otherwise 1-column.

5. CATEGORY / FILTER SECTION

Add simple client-side filtering.

Categories:

All

Oversized

Regular Fit

Graphic

Basic

New Arrivals

Filtering must work entirely in the browser.

Also add sorting:

Featured

Price: Low to High

Price: High to Low

Newest

No backend required.

6. PRODUCT QUICK VIEW / PRODUCT DETAILS

When a user clicks a product, open a beautiful client-side product detail modal or dedicated product detail view.

Show:

Large product image

Product name

Price

Product description

Fabric information

Available colours

Available sizes

Size selector

Colour selector

Quantity selector

"ORDER ON WHATSAPP" CTA

IMPORTANT:
The user must select:

Size

Colour

Quantity

before ordering.

Show selected values clearly.

Example sizes:
S
M
L
XL
XXL

Example colours:
Black
White
Red
Beige

Make selected options visually obvious with a premium active state.

WHATSAPP ORDERING

There must be NO integrated checkout/payment/cart system.

The main purchase action is:
ORDER ON WHATSAPP

When the user clicks the button, automatically create a WhatsApp message containing the selected product information.

Example generated message:

"Hi S11 Clothing! I want to order:

Product: Essential Black Tee
Price: ₹599
Size: L
Colour: Black
Quantity: 2

Please confirm availability and order details."

Then redirect the user to WhatsApp using a standard WhatsApp wa.me URL.

Create a single clearly identifiable constant/configuration in the frontend code for the WhatsApp business number, for example:

WHATSAPP_NUMBER

Use a placeholder Indian number that is easy to replace later, and add a clear comment showing where I should replace it.

IMPORTANT:

Do not send messages automatically without user action.

Do not integrate WhatsApp API.

Do not require WhatsApp login.

Just open WhatsApp with the pre-filled order message.

On mobile it should open the WhatsApp app where possible.

On desktop it should open WhatsApp Web where appropriate.

Every "Order Now" / purchase CTA should ultimately use this WhatsApp ordering flow.

7. SIZE GUIDE

Create a clean size-guide section/modal.

Example:

Size | Chest | Length
S | 38" | 27"
M | 40" | 28"
L | 42" | 29"
XL | 44" | 30"
XXL | 46" | 31"

Make it easy to understand on mobile.

8. FEATURED / BEST SELLERS

Create a visually different editorial section for best sellers.

Use 3–4 highlighted products.

Include a large fashion image and product cards.

Heading:
THE ONES EVERYONE'S WEARING

CTA:
SHOP BEST SELLERS

9. BRAND STORY / ABOUT

Create an attractive brand story section.

Heading:
BUILT FOR EVERYDAY. DESIGNED TO STAND OUT.

Copy should communicate:
S11 Clothing creates comfortable, modern and versatile T-shirts for people who want everyday clothing with personality.

Keep the copy concise and premium.

Add a lifestyle image.

10. QUALITY SECTION

Create a premium section explaining:

Premium fabric

Comfortable fit

Durable prints

Carefully finished details

Use icons and clean visual design.

11. INSTAGRAM / SOCIAL STYLE SECTION

Create a visual fashion-gallery section with 6 image tiles.

Do not require Instagram API.

Use static product/lifestyle images.

Add:
FOLLOW THE S11 STYLE

and a button:
FOLLOW US

The social link can be a placeholder that is easy to replace.

12. FAQ

Add a clean accordion FAQ.

Questions:

What sizes are available?

How do I place an order?

Can I choose a different colour?

How do I know my size?

How will I confirm my order?

Do you offer returns/exchanges?

Answers should be concise and realistic.

13. CONTACT / CTA

Create a strong final CTA:

READY TO UPGRADE YOUR TEE GAME?

Text:
"Choose your favourite. Select your size and colour. Place your order directly on WhatsApp."

CTA:
SHOP NOW

14. FOOTER

Premium footer containing:

S11 Clothing logo

Short brand description

Shop links

About

Contact

Size Guide

FAQ

WhatsApp

Instagram

Copyright

Do not add unnecessary payment icons or fake certifications.

RESPONSIVE DESIGN

This is extremely important.

The entire website must be fully responsive.

Test and optimize for:

320px mobile

375px mobile

390px mobile

430px mobile

iPad/tablets

1366px desktop

1440px desktop

Large desktop screens

Mobile requirements:

No horizontal overflow

Proper touch targets

Readable typography

Product images fit correctly

Buttons are easy to tap

Product modal fits the screen

Navigation becomes a proper mobile menu

Filters work comfortably

WhatsApp CTA remains obvious

Sticky mobile WhatsApp/order CTA may be used if it improves usability

UX DETAILS

Add polished micro-interactions:

Button hover states

Image hover zoom

Card hover

Smooth scrolling

Section reveal animations

Modal open/close animation

Accordion animation

Filter transitions

Toast/feedback when selections change if useful

Keep animations fast and premium.

Do NOT make the website overly animated or slow.

PRODUCT DATA

Keep all products in a clean frontend data structure so products can easily be edited later.

Each product should contain:

id

name

price

originalPrice if needed

description

category

sizes

colours

images

featured

bestseller

newArrival

Make it very easy for me to add/remove products later.

IMAGES

Use high-quality fashion/product imagery.

Images should look:

Professional

Realistic

Premium

Consistent

Suitable for T-shirt e-commerce

If external image URLs are used, use reliable image sources and make the image structure easy to replace later.

Avoid poor-quality, irrelevant or obviously generic stock imagery.

Product images should have consistent proportions.

Use proper object-fit behavior.

SEO

Even though this is frontend-only, implement basic SEO:

Title:
S11 Clothing | Premium T-Shirts

Meta description:
Shop premium, comfortable and modern T-shirts from S11 Clothing. Choose your size and colour and order directly on WhatsApp.

Add appropriate:

meta description

Open Graph metadata

favicon

semantic HTML

image alt text

proper heading hierarchy

PERFORMANCE

Keep the site fast.

Lazy-load images where appropriate

Avoid unnecessary libraries

Avoid huge assets

Optimize layout shifts

Use reusable components

Keep JavaScript clean

Avoid unnecessary API calls

No backend requests

ACCESSIBILITY

Implement:

Proper button labels

Keyboard accessibility

Focus states

Alt text

Accessible modal

Accessible accordion

Good contrast

Semantic HTML

TECHNICAL REQUIREMENTS

Use a modern frontend stack suitable for Lovable.

Use:

React

TypeScript

Tailwind CSS

Component-based architecture

Everything must remain client-side.

DO NOT create:

Node/Express backend

Database

Supabase

Firebase

Authentication

Payment gateway

Server API

Admin dashboard

Booking system

Cart checkout system

The only external action should be opening WhatsApp with a pre-filled message.

IMPORTANT ORDER FLOW

The exact intended user journey is:

HOME
↓
SHOP
↓
SELECT PRODUCT
↓
PRODUCT DETAILS
↓
SELECT SIZE
↓
SELECT COLOUR
↓
SELECT QUANTITY
↓
ORDER ON WHATSAPP
↓
WHATSAPP OPENS WITH PRE-FILLED MESSAGE

Do NOT create a traditional e-commerce checkout.

Do NOT ask users to create an account.

Do NOT create online payment.

Do NOT create booking functionality.

FINAL QUALITY REQUIREMENT

Before finishing, review the complete website as if you are a professional UI/UX designer and e-commerce developer.

Fix:

spacing

typography

mobile responsiveness

button alignment

image cropping

overflow

accessibility

inconsistent colours

weak sections

empty-looking areas

poor mobile layouts

broken links

broken filters

product selection bugs

WhatsApp message generation bugs

Make the final result feel like a real premium fashion brand website that is ready to show customers, not a basic demo.

The most important priorities are:

Premium visual design

Excellent mobile experience

Strong product presentation

Easy size + colour selection

One-click WhatsApp ordering

Fast frontend-only architecture

Professional S11 Clothing branding

Logo + favicon

No backend/server/payment/booking functionality

Everything working from the first generation

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/55054511-5c80-45f8-bd05-e50de3ac9cf7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
