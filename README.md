# QR Menu Website - ไฟไหม้ครัว

เว็บเมนูร้านอาหารแบบสแกน QR พร้อม animation แนว Dark Premium / Fire Kitchen

## ไฟล์หลัก

- `index.html` โครงหน้าเว็บ
- `styles.css` สี ฟอนต์ layout และ animation
- `app.js` ข้อมูลร้าน เมนู ราคา รูปภาพ ระบบตะกร้า และส่ง WhatsApp

## แก้ข้อมูลร้าน

เปิด `app.js` แล้วแก้ส่วนนี้:

```js
const restaurant = {
  name: "ไฟไหม้ครัว",
  phone: "+8562000000000",
  whatsapp: "8562000000000",
  openHours: "10:30 - 22:00",
  location: "Vientiane, Laos"
};
```

## แก้เมนู

แก้ใน `menuItems` เช่น:

```js
{
  id: 1,
  name: "ข้าวกะเพราหมู + ไข่ดาว",
  category: "ข้าวไฟแรง",
  price: 60000,
  description: "กะเพราหมูรสจัด ผัดไฟแรง เสิร์ฟพร้อมข้าวหอมและไข่ดาว",
  image: "images/krapao.jpg",
  tag: "ขายดี"
}
```

## ใส่รูปตัวเอง

สร้างโฟลเดอร์ `images` แล้วใส่รูปอาหาร เช่น:

```text
images/krapao.jpg
images/beef.jpg
images/salmon.jpg
```

จากนั้นเปลี่ยนค่า `image` ใน `app.js` เป็น path รูปนั้น

## ทดสอบในเครื่อง

เปิดโฟลเดอร์นี้ใน Visual Studio Code แล้วใช้ extension `Live Server` เปิดไฟล์ `index.html`

## เอาขึ้นออนไลน์

ลากโฟลเดอร์นี้ไปวางบน Netlify Drop หรืออัปขึ้น GitHub Pages แล้วนำลิงก์ไปสร้าง QR Code


## v4 update
- Removed sticker/emoji add-to-cart effect.
- Removed "+ เพิ่มแล้ว" floating text.
- Added realistic flame click effect on add button.
- Added low moving flame/heat background.


## v5 update
- Removed the visible "+ เพิ่ม" button from menu cards.
- Customers now tap the food image to select a menu item.
- Added a realistic fire ring around the selected food image.
- Kept the cart, total price, table/customer input, and WhatsApp order flow.


## v6 update
- Fire effect is stronger and more brutal.
- Tapping a food image creates a larger burning frame around the image.
- Added fire tongues, stronger sparks, heat glow, and heavier background flame.
- No generated images, no sticker, no emoji, no "+ เพิ่ม" button.


## v7 update
- Added fire sound effect when customer taps a menu image or hero add button.
- The sound is generated in the browser with Web Audio API; no extra audio file needed.
- Added a small toggle button: “เสียงไฟ: เปิด/ปิด”.
- Visual heavy-fire effect from v6 remains.


## v8 update
- Added Customer Info / Delivery Location section.
- Fields: customer name, phone, order type, table/pickup point, delivery address, Google Maps location, notes.
- Added "Use current location" button using browser geolocation.
- WhatsApp message now includes customer details, location, order list, and total.
- Menu data is still edited in app.js inside the menuItems array.


## v9 update
- Moved the Location status/help text slightly lower.
- Improved spacing and readability under the Google Maps / Location input.


## v10 update
- Replaced the hard-to-read order type dropdown with 3 large delivery choice cards.
- Choices are easier to read on desktop and mobile.
- WhatsApp order message still includes the selected order type.


## v11 update
- Added the real restaurant logo to the website.
- Removed the white background from the uploaded logo and saved it as transparent PNG.
- Logo is used in the top navigation, hero section, footer, and favicon.
- Logo file path: images/logo-fai-mai-khua.png


## v12 update
- Smoothed the hard visual cut between the hero section and lower content.
- Added soft gradient blending so sections flow into each other.
- Reduced the separated horizontal line between sections.


## v13 update
- Removed the large duplicated logo in the hero section.
- Kept only the small logo in the top navigation bar.


## v14 update
- Removed the visible horizontal background break line.
- Removed the previous blend overlay that created a dark band.
- Changed the page to use one continuous fixed background across all sections.


## v15 update
- Connected the website order button to the real WhatsApp number.
- Phone shown/called by the site: +8562099469995
- WhatsApp order target: 8562099469995
- The order button text is now clearer: "ยืนยันออเดอร์ / ส่งเข้า WhatsApp ร้าน"


## v16 update
- Added required customer information validation before order confirmation.
- Customers must choose food and fill important info before the WhatsApp confirm button works.
- Required: customer name, phone, order type, table/pickup point.
- If delivery is selected, address and Google Maps location are also required.
- Missing information is shown in a validation box.


## v17 update
- Enhanced Location section with Google Maps preview.
- Customers can use current location and immediately see the map pin before confirming order.
- Added "Open in Google Maps" and "Clear Location" controls.
- The WhatsApp order still includes the Google Maps link.
- Location accuracy text is shown when the browser provides accuracy data.


## v18 update
- Fixed Google Maps flow so customers do not feel stuck outside the website.
- Added in-page "ยืนยันตำแหน่งนี้" button.
- Delivery order cannot be confirmed until customer checks and confirms the map pin inside the website.
- Google Maps open button is now optional for checking only.


## v19 update
- Made the location flow safer for customers.
- Removed the primary "Open Google Maps" button so customers do not get stuck outside the website.
- The embedded map is now view-only for checking the pin.
- Customers confirm the location inside the website.
- If the pin is wrong, they clear location and use current location again or paste a Google Maps link.


## v20 update
- Added draggable delivery pin directly inside the website using Leaflet/OpenStreetMap.
- Customers can drag the marker or tap the map to select an exact delivery point.
- Customers can order for another person by moving the pin to the real delivery location.
- The system generates a Google Maps link from the selected pin and sends it in WhatsApp.
- No Google Maps API key is required.


## v21 update
- Changed delivery map from normal street map to satellite imagery.
- Customers can see buildings/houses more clearly and drag the pin to the exact delivery point.
- Added smoother map animations and a custom fire-style map pin.
- Google Maps link is still generated from the selected satellite pin and sent in WhatsApp.


## v22 update
- Added place names and road labels over the satellite map.
- Added transportation/road overlay to make the delivery point easier to understand.
- When the customer taps the map, the fire pin smoothly moves/follows to that point.
- The map smoothly flies to the selected point before the customer confirms the location.


## v23 update
- Added place search field for customers to type a location, village, shop, or nearby landmark.
- Search results move the draggable pin to the selected place.
- Customers can still drag the pin manually after selecting a result.
- Final WhatsApp order still sends a Google Maps link generated from the selected pin.
- This version uses OpenStreetMap/Nominatim search so it works without a Google API key.


## v24 update
- Added a map mode switch for Street Map and Satellite Map.
- Customers can switch between normal map and satellite imagery while keeping the same selected pin.
- The draggable pin, place search, and WhatsApp Google Maps link still work as before.


## v25 update
- Added restaurant logo marker on the map at 17.9835367, 102.6279902.
- The store marker shows customers where Fai Mai Khua is located.
- Customers still select/drag their own delivery pin separately.
- Store logo marker has a glow effect and popup with Google Maps link.


## v26 update
- Updated store marker name to Google Maps name: ຮ້ານ ໄຟໄໝ້ຄົວ
- Moved the restaurant logo marker to 17.9820278, 102.6283056
- Popup now includes a Google Maps search link for the store name and an exact coordinate link.


## v27 update
- Moved the restaurant logo marker slightly upward/right to 17.9822450, 102.6284250 based on the user's circled screenshot.
- Cleaned up satellite imagery style to look less noisy.
- Reduced label overlay intensity to make the satellite view easier to read.
- Added a real-time customer location marker after the customer allows Location.
- Blue marker = customer's current/live position; fire marker = selected delivery point; logo marker = restaurant.


## v28 update
- Improved browser location accuracy handling.
- When customers tap "use current location", the app collects multiple GPS/location samples and uses the best accuracy result.
- Added GPS Accuracy panel showing estimated error in meters.
- If accuracy is poor, customers are warned to drag the fire delivery pin to the real destination before confirming.
- This helps because desktop browsers and Wi-Fi/IP based location can be inaccurate even near the restaurant.


## v29 update
- Added autocomplete for the place search field.
- Customers now see suggested places automatically while typing.
- Suggestions appear after at least 2 characters and use a debounce delay to avoid too many requests.
- Customers can click a suggested place and the map pin moves there smoothly.
- The manual search button and Enter key search still work.


## v30 fix
- Fixed JavaScript syntax error from v29 that caused the page to show only the background.
- Autocomplete search remains enabled.

- JavaScript syntax check passed.


## v31 update
- Added Google Places / Google Maps search support.
- Add your Google Maps Platform API key in config.js:
  window.FAI_MAI_KHUA_CONFIG.googleMapsApiKey = "YOUR_API_KEY";
- Enable Places API (New) for the key.
- Restrict the key before using it online.
- If no Google API key is provided, the website automatically uses the fallback search system.
- Improved fallback search to search wider in Laos, not only one city.

## v32 update
- Added Lao typography polish.
- Body/UI font: Noto Sans Lao.
- Display/headline font: Noto Serif Lao.
- Improved Lao/Thai text readability, headings, buttons, forms, menu cards, validation boxes, and map/location text.
- Fonts are loaded from Google Fonts via CSS import; no font files are bundled.


## v33 update
- Changed visible brand spelling to Lao: ໄຟໄໝ້ຄົວ.
- Kept major UI micro labels in English: SIGNATURE, MENU, CUSTOMER, ORDER.
- Changed sound toggle text to Sound: On / Sound: Off.
- Changed order/call button text from Thai "โทรสั่ง" to Lao "ໂທ".

## v34 update
- Kept the tagline "Fire cooked • fresh served" in English.
- Removed QR-scan wording from the website copy because customers are already inside the QR menu after scanning from a poster.
- Updated the hero/intro copy to guide customers to choose menu items, fill information, and send the order to the restaurant.


## v35 update
- Fixed requested Lao/English text:
  - "10:30 ເປີດຮ້ານ"
  - Restored "Fire"
  - Replaced kitchen-strength wording with "ໄຟແຮງ"
  - Replaced odd currency text with "Kip"
  - Replaced "ລາຄາທີແຈ່ມແຈ້ງ" with "ລາຄ່າ"
- Added customer currency switcher:
  - Kip
  - Baht
  - USD
- Base menu prices remain in Kip; Baht/USD display values use editable approximate rates in app.js.

## v36 update - Mobile/PWA Ready
- Added manifest.json for mobile install support.
- Added service-worker.js for app shell caching.
- Added iOS/Android mobile meta tags.
- Added app icons: 192px, 512px, and Apple touch icon.
- Added mobile touch/padding improvements and safe-area support.
- Added mobile-guide.html with short instructions.
- Important: customer phones need a hosted HTTPS website URL. Opening files directly from a zip on phone is not enough for Location/PWA features.

## v37 update - Faster initial loading
- Removed Leaflet map CSS/JS from initial page load.
- Map library now loads lazily only when customer uses delivery/location/search/map switch.
- Default delivery map mode changed to Street Map first for faster load; Satellite is still available by switch.
- Added preconnect hints for fonts/CDN/map servers.
- Reduced first service worker cache list to core files only.
- Added smooth placeholder while the map loads.

## v38 fix - Real mobile / online stability
- Fixed service worker caching so it no longer stores every external image, map tile, font, or search request.
- Added Leaflet CDN fallback and timeout so map loading cannot hang forever on phones.
- Optimized first-load images and switched nav/footer to the small logo file.
- Improved iOS/Android touch behavior for dragging the delivery pin.
- Location capture no longer waits for map CDN loading before filling the Google Maps link.
- Removed duplicate Google Fonts loading through CSS `@import`.

## v39 fix - Cache update safety
- Core code files now use network-first caching so deployed fixes are picked up faster instead of staying stuck on an old `app.js` or `styles.css`.

## v40 fix - Mobile overflow guard
- Locked horizontal overflow at the root and category tabs so mobile screens do not widen after the map loads.

## v41 fix - Brand logo visibility
- Restored a clear shop logo on the hero section and adjusted the navigation logo so it is not visually cropped or hidden.


## v44 mobile safe
Use this package if iPhone/Safari shows a black page. It keeps content visible and clears old service worker caches.
