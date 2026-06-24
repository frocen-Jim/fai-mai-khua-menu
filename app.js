// v70 note dropdown readable + clean order popup header
// v69 store hours 10:00-5:00
// v68 variant-specific cart + custom note fix
// v67 fried rice egg label + note dropdown
// v66 add Bacon option to Spaghetti Spicy
// v65 single visible price + steak standard options
// v64 clean protein option UI
// v63 fried rice + pad see ew price options
// v62 tiger crying beef option price = 65000 Kip
// v61 protein options + auto price
// v60 requested tag text + remove tea menu
// v59 menu badge text updated
// v57 Lao menu names + luxury Lao typography
// ================================
// จุดที่ 1: แก้ข้อมูลร้านจริงตรงนี้
// phone ใส่เครื่องหมาย + ได้ แต่ whatsapp ต้องใช้รหัสประเทศและตัด 0 หน้าออก เช่น 02099469995 = 8562099469995
// ================================
const restaurant = {
  name: "ໄຟໄໝ້ຄົວ",
  googleMapName: "ຮ້ານ ໄຟໄໝ້ຄົວ",
  phone: "+8562099469995",
  whatsapp: "8562099469995",
  openHours: "10:00 - 5:00",
  location: "Vientiane, Laos",
  storeLat: 17.9822450,
  storeLng: 102.6284250,
  storeMapsUrl: "https://www.google.com/maps/search/?api=1&query=%E0%BA%AE%E0%BB%89%E0%BA%B2%E0%BA%99%20%E0%BB%84%E0%BA%9F%E0%BB%84%E0%BB%9D%E0%BB%89%E0%BA%84%E0%BA%BB%E0%BA%A7",
  deliveryNote: "ค่าส่งคิดตามระยะทาง / ร้านจะยืนยันอีกครั้ง"
};

// ================================
// v55 item note per menu: each cart item has its own note field
// v54 food images updated: first 7 menu images now use local images/menu-v54-*.jpg
// จุดที่ 2: แก้เมนู ราคา และรูปอาหารจริงตรงนี้
// image ใช้ได้ 2 แบบ:
// 1) รูปในโฟลเดอร์ images เช่น image: "images/krapao.jpg"
// 2) ลิงก์รูปออนไลน์ เช่น image: "https://..."
// id ห้ามซ้ำกัน และ price ไม่ต้องใส่ comma เช่น 60000
// theme คือสี animation ของเมนูแนะนำ ถ้ายังไม่ถนัด ปล่อยไว้แบบเดิมได้
// ================================

const currencyOptions = {
  LAK: {
    label: "Kip",
    suffix: "Kip",
    rateFromKip: 1,
    decimals: 0
  },
  THB: {
    label: "Baht",
    suffix: "THB",
    rateFromKip: 1 / 620,
    decimals: 0
  },
  USD: {
    label: "USD",
    suffix: "USD",
    rateFromKip: 1 / 21500,
    decimals: 2
  }
};

// หมายเหตุ: ราคาในระบบตั้งต้นเป็น Kip.
// THB / USD เป็นราคาแสดงโดยประมาณเท่านั้น สามารถแก้ rateFromKip ได้ในไฟล์ app.js.

const menuItems = [
  {
    id: 1,
    name: "ກະເພົາ",
    category: "ข้าวไฟแรง",
    price: 55000,
    description: "กะเพราหมูรสจัด ผัดไฟแรง เสิร์ฟพร้อมข้าวหอมและไข่ดาว",
    image: "images/menu-v54-07-krapao-egg.jpg",
    tag: "ໄຟແຮງ",
    ingredients: ["หมู", "พริก", "กระเทียม", "ใบกะเพรา", "ไข่ดาว"],
    variants: [{"id": "chicken", "label": "ໄກ່", "price": 55000}, {"id": "pork", "label": "ໝູ", "price": 55000}, {"id": "beef", "label": "ງົວ", "price": 60000}, {"id": "tiger", "label": "ເສືອຮ້ອງໃຫ້", "price": 65000}],
    theme: { accent: "#ffb636", fire: "#e8431f", glow: "rgba(232,67,31,.30)", deep: "#130806" }
  },
  {
    id: 2,
    name: "ຂັ້ວພິກໄທດຳ",
    category: "ข้าวไฟแรง",
    price: 55000,
    description: "ไก่นุ่ม ซอสเทอริยากิ หอมหวานเค็มกำลังดี",
    image: "images/menu-v54-01-rice-fire.jpg",
    tag: "ແສບຮ້ອນ",
    ingredients: ["ไก่", "ซอสเทอริยากิ", "ข้าว", "แตงกวา"],
    variants: [{"id": "chicken", "label": "ໄກ່", "price": 55000}, {"id": "pork", "label": "ໝູ", "price": 55000}, {"id": "beef", "label": "ງົວ", "price": 60000}, {"id": "tiger", "label": "ເສືອຮ້ອງໃຫ້", "price": 65000}],
    theme: { accent: "#f6c85f", fire: "#2dc071", glow: "rgba(45,192,113,.28)", deep: "#06140d" }
  },
  {
    id: 3,
    name: "ເຂົ້າພັດ",
    category: "ข้าวไฟแรง",
    price: 50000,
    description: "ไก่หมักมิโสะ ย่างหอม กินง่าย อิ่มพอดี",
    image: "images/menu-v54-03-fried-rice-egg.jpg",
    tag: "ຫອມກະທະ",
    ingredients: ["ไก่", "มิโสะ", "ข้าว", "ผัก"],
    variants: [{"id": "egg", "label": "ໄຂ່", "price": 50000}, {"id": "chicken", "label": "ໄກ່", "price": 50000}, {"id": "pork", "label": "ໝູ", "price": 50000}, {"id": "beef", "label": "ງົວ", "price": 55000}],
    theme: { accent: "#ffd166", fire: "#4cc9f0", glow: "rgba(76,201,240,.22)", deep: "#07101a" }
  },
  {
    id: 4,
    name: "ຂັ້ວສະເຕັກ",
    category: "เมนูพิเศษ",
    price: 55000,
    description: "เนื้อหอม ย่างฉ่ำ เสิร์ฟพร้อมน้ำจิ้มแจ่วสไตล์ไฟไหม้ครัว",
    image: "images/menu-v54-02-beef-rice.jpg",
    tag: "ເນື້ອນຸ້ມ",
    ingredients: ["เนื้อ NZ", "น้ำจิ้มแจ่ว", "พริก", "ข้าวคั่ว"],
    variants: [{"id": "chicken", "label": "ໄກ່", "price": 55000}, {"id": "pork", "label": "ໝູ", "price": 55000}, {"id": "beef", "label": "ງົວ", "price": 60000}, {"id": "tiger", "label": "ເສືອຮ້ອງໃຫ້", "price": 65000}],
    theme: { accent: "#ffb636", fire: "#a4161a", glow: "rgba(164,22,26,.34)", deep: "#120707" }
  },
  {
    id: 5,
    name: "Spaghetti Spicy",
    category: "เมนูพิเศษ",
    price: 55000,
    description: "แซลมอนย่างเกลือ หอมพริกไทย เสิร์ฟพร้อมข้าวและผักสด",
    image: "images/menu-v54-04-spaghetti-fire.jpg",
    tag: "ເຜັດຮ້ອນ",
    ingredients: ["แซลมอน", "เกลือ", "พริกไทย", "ข้าว", "ผักสด"],
    variants: [{"id": "chicken", "label": "ໄກ່", "price": 55000}, {"id": "pork", "label": "ໝູ", "price": 55000}, {"id": "beef", "label": "ງົວ", "price": 60000}, {"id": "tiger", "label": "ເສືອຮ້ອງໃຫ້", "price": 65000}, {"id": "bacon", "label": "Bacon", "price": 65000}],
    theme: { accent: "#ffcf70", fire: "#ff6b35", glow: "rgba(255,107,53,.25)", deep: "#140b06" }
  },
  {
    id: 6,
    name: "Spaghetti Khymao",
    category: "สุขภาพ",
    price: 55000,
    description: "ผักสด ไก่อบ ซอสเบา ๆ เหมาะกับคนรักสุขภาพ",
    image: "images/menu-v54-05-spaghetti-pork.jpg",
    tag: "ຈັດຈ້ານ",
    ingredients: ["ไก่อบ", "ผักสด", "ซอสเบา", "แตงกวา"],
    variants: [{"id": "chicken", "label": "ໄກ່", "price": 55000}, {"id": "pork", "label": "ໝູ", "price": 55000}, {"id": "beef", "label": "ງົວ", "price": 60000}, {"id": "tiger", "label": "ເສືອຮ້ອງໃຫ້", "price": 65000}],
    theme: { accent: "#b7ef8a", fire: "#2dc071", glow: "rgba(45,192,113,.25)", deep: "#071407" }
  },
  {
    id: 7,
    name: "ພັດຊິອິວ",
    category: "สุขภาพ",
    price: 50000,
    description: "ผักกรอบ ซอสซีซาร์ ขนมปังกรอบ และโปรตีนแน่น",
    image: "images/menu-v54-06-noodle-fire.jpg",
    tag: "ຫອມໆ",
    ingredients: ["ผักสลัด", "ซีซาร์ซอส", "ขนมปังกรอบ", "โปรตีน"],
    variants: [{"id": "chicken", "label": "ໄກ່", "price": 50000}, {"id": "pork", "label": "ໝູ", "price": 50000}, {"id": "beef", "label": "ງົວ", "price": 55000}],
    theme: { accent: "#d9ed92", fire: "#76c893", glow: "rgba(118,200,147,.24)", deep: "#07150c" }
  },
  {
    id: 8,
    name: "S’more Brownie Cookie",
    category: "ของหวาน",
    price: 35000,
    description: "คุกกี้บราวนี่เข้มข้น มาร์ชเมลโลว์ และบิสกิตกรอบ",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
    tag: "SWEET",
    ingredients: ["ช็อกโกแลต", "มาร์ชเมลโลว์", "บิสกิต", "เนย"],
    theme: { accent: "#f5c7a9", fire: "#8b5e34", glow: "rgba(139,94,52,.28)", deep: "#130c08" }
  },
];

const state = {
  category: "ทั้งหมด",
  search: "",
  cart: {},
  itemNotes: {},
  noteSelect: {},
  selectedVariants: {},
  featuredIndex: 0,
  soundEnabled: true,
  audioContext: null,
  locationConfirmed: false,
  map: null,
  marker: null,
  selectedLatLng: null,
  mapMode: "street",
  mapLayers: [],
  storeMarker: null,
  userMarker: null,
  userAccuracyCircle: null,
  userWatchId: null,
  bestGpsPosition: null,
  gpsImproveTimer: null,
  placeSearchTimer: null,
  placeSearchController: null,
  lastPlaceQuery: "",
  selectedCurrency: "LAK",
  mapLoadingPromise: null,
  mapAssetsLoaded: false,
  mapRequested: false,
  stock: {
    enabled: false,
    loading: false,
    error: "",
    items: {},
    lastLoadedAt: 0
  },
  store: {
    isOpen: true,
    message: "ร้านเปิดรับออเดอร์แล้ว"
  },
  orderSubmitting: false
};

function money(value) {
  const currency = currencyOptions[state?.selectedCurrency || "LAK"] || currencyOptions.LAK;
  const converted = Number(value || 0) * currency.rateFromKip;
  const formatted = new Intl.NumberFormat("lo-LA", {
    minimumFractionDigits: currency.decimals,
    maximumFractionDigits: currency.decimals
  }).format(converted);
  return `${formatted} ${currency.suffix}`;
}
const $ = (selector) => document.querySelector(selector);
const LEAFLET_ASSET_TIMEOUT_MS = 6500;
const SEARCH_TIMEOUT_MS = 7500;
const CUSTOMER_MEMORY_KEY = 'faiMaiKhuaCustomerInfoV1';
const CUSTOMER_MEMORY_COOKIE = 'faiMaiKhuaCustomerInfoV1';
const CUSTOMER_MEMORY_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;
const CUSTOMER_MEMORY_TEXT_KEYS = [
  "customerName",
  "customerPhone",
  "tableText",
  "deliveryAddress",
  "mapLink",
  "customerNote"
];
const CUSTOMER_MEMORY_FIELD_SELECTORS = [
  "#customerName",
  "#customerPhone",
  "#tableInput",
  "#deliveryAddress",
  "#customerNote"
];
const LEAFLET_ASSET_SOURCES = [
  {
    css: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
    js: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
  },
  {
    css: "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css",
    js: "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js"
  }
];

function optimizedImageUrl(src, width = 520, quality = 62) {
  if (!/^https?:\/\//i.test(src || "")) return src;

  try {
    const url = new URL(src);
    if (url.hostname === "images.unsplash.com") {
      url.searchParams.set("auto", "format");
      url.searchParams.set("fit", "crop");
      url.searchParams.set("w", String(width));
      url.searchParams.set("q", String(quality));
    }
    return url.toString();
  } catch (error) {
    return src;
  }
}

function appConfig() {
  return window.FAI_MAI_KHUA_CONFIG || {};
}

function stockApiUrl() {
  return (appConfig().stockApiUrl || "").trim();
}

function stockApiToken() {
  return appConfig().stockApiToken || "";
}

function isStockApiEnabled() {
  return Boolean(stockApiUrl());
}

function stockUrlWithParams(params = {}) {
  const url = new URL(stockApiUrl());
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });
  url.searchParams.set("t", String(Date.now()));
  return url.toString();
}

function normalizeStockItems(rawItems) {
  const items = {};
  const source = rawItems || {};

  if (Array.isArray(source)) {
    source.forEach(item => {
      const id = Number(item.id || item.itemId || item.menuId);
      if (!id) return;
      const remaining = Number(item.remaining ?? item.stock ?? item.qty ?? 0);
      items[id] = {
        remaining: Math.max(0, remaining),
        soldToday: Number(item.soldToday || item.sold || 0),
        available: item.available !== false && remaining > 0,
        name: item.name || item.itemName || ""
      };
    });
    return items;
  }

  Object.entries(source).forEach(([idKey, item]) => {
    const id = Number(idKey);
    if (!id || !item) return;
    const remaining = Number(item.remaining ?? item.stock ?? item.qty ?? 0);
    items[id] = {
      remaining: Math.max(0, remaining),
      soldToday: Number(item.soldToday || item.sold || 0),
      available: item.available !== false && remaining > 0,
      name: item.name || ""
    };
  });

  return items;
}

function normalizeStoreStatus(rawStore) {
  const store = rawStore || {};
  const isOpen = store.isOpen !== false;
  return {
    isOpen,
    message: store.message || (isOpen ? "ร้านเปิดรับออเดอร์แล้ว" : "ร้านปิดรับออเดอร์ชั่วคราว")
  };
}

function isStoreClosed() {
  return state.stock.enabled && state.store?.isOpen === false;
}

function getStockItem(id) {
  return state.stock.items?.[Number(id)] || null;
}

function getRemainingStock(id) {
  if (!state.stock.enabled) return null;
  const stock = getStockItem(id);
  if (!stock) return null;
  return Number(stock.remaining || 0);
}

function isItemSoldOut(id) {
  if (!state.stock.enabled) return false;
  const remaining = getRemainingStock(id);
  if (remaining === null) return false;
  return remaining <= 0 || getStockItem(id)?.available === false;
}

function availableToAdd(id) {
  const remaining = getRemainingStock(id);
  if (remaining === null) return Infinity;
  return Math.max(0, remaining - cartQtyForMenu(id));
}

function updateStockStatus(message, tone = "muted") {
  const status = $("#stockStatus");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("is-ready", tone === "ready");
  status.classList.toggle("is-error", tone === "error");
  status.classList.toggle("is-loading", tone === "loading");
}

async function loadLiveStock(options = {}) {
  const { silent = false } = options;
  if (!isStockApiEnabled()) {
    state.stock.enabled = false;
    state.stock.items = {};
    state.store = normalizeStoreStatus();
    updateStockStatus("Stock ยังไม่ได้เชื่อมหลังบ้าน ร้านสามารถขายได้ทุกเมนูตามปกติ");
    return;
  }

  state.stock.enabled = true;
  state.stock.loading = true;
  state.stock.error = "";
  if (!silent) updateStockStatus("กำลังโหลด stock ล่าสุดจากหลังบ้าน...", "loading");

  try {
    const response = await fetch(stockUrlWithParams({
      action: "stock",
      token: stockApiToken()
    }), {
      method: "GET",
      cache: "no-store"
    });
    const result = await response.json();
    if (!result.ok) throw new Error(result.message || "โหลด stock ไม่สำเร็จ");

    state.stock.items = normalizeStockItems(result.items || result.stock);
    state.store = normalizeStoreStatus(result.store);
    state.stock.lastLoadedAt = Date.now();
    if (isStoreClosed()) {
      updateStockStatus(state.store.message || "ร้านปิดรับออเดอร์ชั่วคราว", "error");
    } else {
      updateStockStatus("ร้านเปิดอยู่: stock ออนไลน์ เมนูหมดจะปิดขายอัตโนมัติ", "ready");
    }
    renderMenu();
    renderCart();
  } catch (error) {
    state.stock.error = error?.message || "โหลด stock ไม่สำเร็จ";
    updateStockStatus("โหลด stock ไม่สำเร็จ ระบบยังแสดงเมนูเดิม กรุณาตรวจ URL หลังบ้าน", "error");
  } finally {
    state.stock.loading = false;
  }
}

function stockValidationMessages() {
  if (isStoreClosed()) return [state.store.message || "ร้านปิดรับออเดอร์ชั่วคราว"];
  if (!state.stock.enabled) return [];

  return Object.keys(state.cart).map(Number).reduce((messages, id) => {
    const item = menuItems.find(menu => menu.id === id);
    const remaining = getRemainingStock(id);
    if (!item || remaining === null) return messages;

    if (remaining <= 0) {
      messages.push(`${item.name} ขายหมดแล้ว`);
    } else if (state.cart[id] > remaining) {
      messages.push(`${item.name} เหลือ ${remaining} ชุด กรุณาลดจำนวน`);
    }

    return messages;
  }, []);
}

function orderPayload(total) {
  return {
    action: "submitOrder",
    token: stockApiToken(),
    customer: getCustomerInfo(),
    order: {
      totalKip: total,
      displayTotal: money(total),
      currency: state.selectedCurrency,
      source: "github-pages-qr-menu",
      orderText: buildOrderText(total)
    },
    items: Object.keys(state.cart).map(key => {
      const line = cartLineFromKey(key);
      return {
        id: line?.id || 0,
        key,
        name: line?.name || `Item ${key}`,
        variant: line?.variant?.label || "",
        qty: line?.qty || 0,
        note: itemNoteValue(key),
        priceKip: line?.price || 0,
        subtotalKip: (line?.price || 0) * (line?.qty || 0)
      };
    })
  };
}

async function submitStockOrder(total) {
  if (!isStockApiEnabled()) return { ok: true };

  const response = await fetch(stockApiUrl(), {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(orderPayload(total))
  });
  const result = await response.json();
  if (result.store) {
    state.store = normalizeStoreStatus(result.store);
  }
  if (result.items || result.stock) {
    state.stock.items = normalizeStockItems(result.items || result.stock);
  }

  if (!result.ok) {
    renderMenu();
    renderCart();
    throw new Error(result.message || "Stock ไม่พอสำหรับออเดอร์นี้");
  }

  if (result.items || result.stock) {
    renderMenu();
    renderCart();
  } else {
    loadLiveStock({ silent: true });
  }

  return result;
}

function setMapPreviewState(mode) {
  const preview = $("#mapPreview");
  if (!preview) return;

  preview.classList.toggle("is-loading", mode === "loading");
  preview.classList.toggle("has-map", mode === "ready");
}

function appendLeafletCss(href) {
  if (document.querySelector(`link[data-leaflet-css-url="${href}"]`)) return;

  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = href;
  css.dataset.leafletCss = "true";
  css.dataset.leafletCssUrl = href;
  document.head.appendChild(css);
}

function loadScriptWithTimeout(src, timeoutMs) {
  return new Promise((resolve, reject) => {
    if (window.L) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      script.remove();
      reject(new Error(`Timed out loading ${src}`));
    }, timeoutMs);

    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve();
    };
    script.onerror = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      script.remove();
      reject(new Error(`Failed loading ${src}`));
    };

    document.body.appendChild(script);
  });
}

function fetchWithTimeout(url, options = {}, timeoutMs = SEARCH_TIMEOUT_MS) {
  const controller = new AbortController();
  const parentSignal = options.signal;
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  if (parentSignal) {
    if (parentSignal.aborted) {
      controller.abort();
    } else {
      parentSignal.addEventListener("abort", () => controller.abort(), { once: true });
    }
  }

  return fetch(url, {
    ...options,
    signal: controller.signal
  }).finally(() => clearTimeout(timer));
}

function initRestaurantInfo() {
  $("#restaurantName").textContent = restaurant.name;
  $("#footerName").textContent = restaurant.name;
  $("#openHours").textContent = restaurant.openHours;
  $("#locationText").textContent = restaurant.location;
  $("#callBtn").href = `tel:${restaurant.phone}`;
}

function featuredItems() {
  return menuItems.filter(item => [1, 4, 5, 8].includes(item.id));
}

function applyHeroTheme(item) {
  const root = document.documentElement;
  root.style.setProperty("--accent", item.theme?.accent || "#ffb636");
  root.style.setProperty("--fire", item.theme?.fire || "#e8431f");
  root.style.setProperty("--hero-glow", item.theme?.glow || "rgba(232,67,31,.30)");
  root.style.setProperty("--deep", item.theme?.deep || "#120806");
}

function renderHeroDish(item) {
  const image = $("#heroImage");
  image.classList.add("is-changing");
  setTimeout(() => {
    image.src = optimizedImageUrl(item.image, 560, 65);
    image.alt = item.name;
    $("#heroDishName").textContent = item.name;
    $("#heroDishDesc").textContent = item.description;
    $("#heroDishPrice").textContent = money(item.price);
    $("#heroAddBtn").dataset.id = item.id;
    applyHeroTheme(item);
    image.classList.remove("is-changing");
  }, 260);
}

function startHeroSlider() {
  const items = featuredItems();
  if (!items.length) return;
  renderHeroDish(items[0]);
  setInterval(() => {
    if (document.hidden) return;
    state.featuredIndex = (state.featuredIndex + 1) % items.length;
    renderHeroDish(items[state.featuredIndex]);
  }, 7000);
}

function renderTabs() {
  const categories = ["ทั้งหมด", ...new Set(menuItems.map(item => item.category))];
  $("#categoryTabs").innerHTML = categories.map(category => `
    <button class="tab ${state.category === category ? "active" : ""}" data-category="${category}">${category}</button>
  `).join("");

  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      state.category = tab.dataset.category;
      renderTabs();
      renderMenu();
    });
  });
}

function filteredItems() {
  const keyword = state.search.trim().toLowerCase();
  return menuItems.filter(item => {
    const matchCategory = state.category === "ทั้งหมด" || item.category === state.category;
    const matchSearch = !keyword || [item.name, item.category, item.description, ...(item.ingredients || [])].join(" ").toLowerCase().includes(keyword);
    return matchCategory && matchSearch;
  });
}



function getSelectedVariant(item) {
  if (!item?.variants?.length) return null;
  const selectedId = state.selectedVariants[item.id];
  return item.variants.find(variant => variant.id === selectedId) || item.variants[0];
}

function itemDisplayName(item) {
  const variant = getSelectedVariant(item);
  return variant ? `${item.name} (${variant.label})` : item.name;
}

function itemEffectivePrice(item) {
  const variant = getSelectedVariant(item);
  return variant?.price ?? item.price;
}


function selectedVariantId(item) {
  return getSelectedVariant(item)?.id || "base";
}

function cartKeyForItem(item) {
  return `${item.id}::${selectedVariantId(item)}`;
}

function parseCartKey(key) {
  const [idPart, variantId = "base"] = String(key).split("::");
  return { id: Number(idPart), variantId };
}

function itemVariantById(item, variantId) {
  if (!item?.variants?.length || variantId === "base") return null;
  return item.variants.find(variant => variant.id === variantId) || item.variants[0];
}

function cartLineFromKey(key) {
  const parsed = parseCartKey(key);
  const item = menuItems.find(menu => menu.id === parsed.id);
  if (!item) return null;

  const variant = itemVariantById(item, parsed.variantId);
  const price = variant?.price ?? item.price;
  return {
    key,
    id: parsed.id,
    variantId: parsed.variantId,
    item,
    variant,
    name: variant ? `${item.name} (${variant.label})` : item.name,
    price,
    qty: state.cart[key] || 0
  };
}

function cartQtyForMenu(id) {
  return Object.keys(state.cart).reduce((sum, key) => {
    const parsed = parseCartKey(key);
    return parsed.id === Number(id) ? sum + (state.cart[key] || 0) : sum;
  }, 0);
}


function proteinOptionsTemplate(item) {
  if (!item.variants?.length) return "";

  const selected = getSelectedVariant(item);
  return `
    <div class="protein-options" aria-label="ເລືອກເນື້ອ">
      <div class="protein-title">ເລືອກເນື້ອ</div>
      <div class="protein-choice-list">
        ${item.variants.map(option => `
          <button
            class="protein-choice ${option.id === selected.id ? "is-selected" : ""}"
            type="button"
            data-action="select-variant"
            data-id="${item.id}"
            data-variant="${option.id}"
          >
            <span>${escapeHtml(option.label)}</span>
          </button>
        `).join("")}
      </div>

    </div>
  `;
}


function ingredientStickersTemplate(item) {
  if (!item.ingredients || !item.ingredients.length) return "";
  return `
    <div class="ingredient-stickers" aria-label="วัตถุดิบหลัก">
      ${item.ingredients.map(ingredient => `<span class="ingredient-sticker">${escapeHtml(ingredient)}</span>`).join("")}
    </div>
  `;
}


function renderMenu() {
  const items = filteredItems();
  if (!items.length) {
    $("#menuGrid").innerHTML = `<div class="order-items empty">ไม่พบเมนูที่ค้นหา</div>`;
    return;
  }

  $("#menuGrid").innerHTML = items.map((item, index) => {
    const storeClosed = isStoreClosed();
    const imageSrc = optimizedImageUrl(item.image, index < 2 ? 520 : 420, index < 2 ? 62 : 58);
    const loading = index < 2 ? "eager" : "lazy";
    const quantity = state.cart[item.id] || 0;
    const selectedClass = quantity ? " is-selected" : "";
    const quantityClass = quantity ? " is-visible" : "";
    const remaining = getRemainingStock(item.id);
    const soldOut = isItemSoldOut(item.id);
    const lowStock = remaining !== null && remaining > 0 && remaining <= 3;
    const unavailable = storeClosed || soldOut;
    const stockClass = unavailable ? " is-sold-out" : lowStock ? " is-low-stock" : "";
    const stockText = storeClosed
      ? "ร้านปิด"
      : soldOut
      ? "ขายหมดแล้ว"
      : remaining !== null
        ? `เหลือ ${remaining} ชุด`
        : "พร้อมขาย";
    const tapText = storeClosed ? "ร้านปิดรับออเดอร์" : soldOut ? "ปิดขายอัตโนมัติ" : "แตะรูปเพื่อเลือก";
    const disabledAttr = unavailable ? " disabled aria-disabled=\"true\"" : "";

    return `
      <article class="menu-card${stockClass}" style="transition-delay:${Math.min(index * 55, 330)}ms">
        <button type="button" class="menu-image image-add-trigger${selectedClass}" data-id="${item.id}" aria-label="${unavailable ? `${item.name} ปิดขายอยู่` : `เลือก ${item.name}`}"${disabledAttr}>
          <img src="${imageSrc}" alt="${item.name}" width="520" height="300" loading="${loading}" decoding="async" fetchpriority="low" referrerpolicy="no-referrer" />
          <span class="badge">${item.tag}</span>
          <span class="stock-badge${stockClass}">${stockText}</span>
          <span class="menu-quantity-badge${quantityClass}" data-menu-qty="${item.id}" aria-label="จำนวนที่เลือก">${quantity}</span>
        </button>
        <div class="menu-body">
          <h3>${item.name}</h3>
          <p class="desc">${item.description}</p>
          ${proteinOptionsTemplate(item)}
        <div class="card-bottom">
            <span class="price">${money(itemEffectivePrice(item))}</span>
            <span class="tap-note">${tapText}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".image-add-trigger").forEach(trigger => {
    trigger.addEventListener("click", (event) => addToCart(Number(trigger.dataset.id), event.currentTarget));
  });

  document.querySelectorAll('[data-action="select-variant"]').forEach(button => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      const variantId = button.dataset.variant;
      if (!id || !variantId) return;
      state.selectedVariants[id] = variantId;
      renderMenu();
      renderCart();
    });
  });

  document.querySelectorAll(".menu-image img").forEach((image) => {
    image.addEventListener("error", () => {
      const holder = image.closest(".menu-image");
      if (holder) holder.classList.add("image-failed");
      image.remove();
    }, { once: true });
  });
  revealMenuCards();
  updateMenuQuantityBadges();
}

function updateMenuQuantityBadges() {
  document.querySelectorAll(".image-add-trigger").forEach(trigger => {
    const id = Number(trigger.dataset.id);
    const quantity = cartQtyForMenu(id);
    const soldOut = isStoreClosed() || isItemSoldOut(id);
    const badge = trigger.querySelector(".menu-quantity-badge");

    trigger.classList.toggle("is-selected", quantity > 0);
    trigger.disabled = soldOut;
    trigger.setAttribute("aria-disabled", String(soldOut));
    trigger.setAttribute("aria-label", quantity > 0
      ? `เลือกเพิ่ม ${quantity} ชิ้นแล้ว`
      : soldOut ? "เมนูนี้ขายหมดแล้ว" : "เลือกเมนูนี้");

    if (!badge) return;
    badge.textContent = String(quantity);
    badge.classList.toggle("is-visible", quantity > 0);
    badge.setAttribute("aria-label", quantity > 0 ? `เลือกแล้ว ${quantity} ชิ้น` : "ยังไม่ได้เลือก");
  });
}

function addToCart(id, sourceButton) {
  if (isStoreClosed()) {
    updateStockStatus(state.store.message || "ร้านปิดรับออเดอร์ชั่วคราว", "error");
    renderCart();
    return;
  }

  if (isItemSoldOut(id) || availableToAdd(id) <= 0) {
    const item = menuItems.find(menu => menu.id === id);
    updateStockStatus(`${item?.name || "เมนูนี้"} ขายหมดแล้วหรือเหลือไม่พอ`, "error");
    renderMenu();
    renderCart();
    return;
  }

  const item = menuItems.find(menu => menu.id === id);
  if (!item) return;
  const key = cartKeyForItem(item);
  state.cart[key] = (state.cart[key] || 0) + 1;

  updateMenuQuantityBadges();
  renderCart();
  igniteAddEffect(sourceButton);
  playFireSound();
}

function igniteAddEffect(sourceButton) {
  if (!sourceButton) return;

  const rect = sourceButton.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  sourceButton.classList.add("is-igniting", "is-photo-igniting");
  const sourceCard = sourceButton.closest(".menu-card");
  if (sourceCard) sourceCard.classList.add("card-burn");

  const imageRing = document.createElement("span");
  imageRing.className = "image-fire-ring";

  for (let index = 0; index < 10; index += 1) {
    const edgeFlame = document.createElement("i");
    edgeFlame.style.setProperty("--flame-left", `${6 + index * 9.7}%`);
    edgeFlame.style.setProperty("--flame-delay", `${index * 34}ms`);
    edgeFlame.style.setProperty("--flame-height", `${52 + (index % 4) * 16}px`);
    imageRing.appendChild(edgeFlame);
  }

  sourceButton.appendChild(imageRing);

  setTimeout(() => {
    sourceButton.classList.remove("is-igniting", "is-photo-igniting");
    if (sourceCard) sourceCard.classList.remove("card-burn");
    imageRing.remove();
  }, 1350);

  // Brutal real fire-style click effect: no text, no emoji, no sticker.
  const fire = document.createElement("div");
  fire.className = "real-fire-click fire-click-strong";
  fire.style.setProperty("--left", `${centerX}px`);
  fire.style.setProperty("--top", `${centerY}px`);

  ["flame-a", "flame-b", "flame-c", "flame-d", "flame-e", "flame-f", "flame-g"].forEach((className) => {
    const flame = document.createElement("span");
    flame.className = className;
    fire.appendChild(flame);
  });

  for (let index = 0; index < 30; index += 1) {
    const spark = document.createElement("i");
    const angle = (-168 + index * 11.6) * Math.PI / 180;
    const distance = 46 + (index % 7) * 16;
    spark.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    spark.style.setProperty("--y", `${Math.sin(angle) * distance - 48}px`);
    spark.style.setProperty("--delay", `${index * 10}ms`);
    spark.style.setProperty("--spark-size", `${3 + (index % 4)}px`);
    fire.appendChild(spark);
  }

  document.body.appendChild(fire);
  setTimeout(() => fire.remove(), 1350);

  const orderPanel = document.querySelector("#order");
  if (orderPanel) {
    orderPanel.classList.remove("is-ignited");
    void orderPanel.offsetWidth;
    orderPanel.classList.add("is-ignited");
  }
}


function playFireSound() {
  if (!state.soundEnabled) return;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  if (!state.audioContext) {
    state.audioContext = new AudioContext();
  }

  const ctx = state.audioContext;
  if (ctx.state === "suspended") {
    ctx.resume();
  }

  const now = ctx.currentTime;

  // Fire whoosh noise: generated in browser, no audio file needed.
  const noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.74), ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    const t = i / data.length;
    const attack = Math.min(1, t / 0.08);
    const decay = Math.pow(1 - t, 1.8);
    const body = (Math.random() * 2 - 1) * attack * decay;
    const rough = (Math.random() * 2 - 1) * Math.pow(1 - t, 3.2);
    data[i] = body * 0.72 + rough * 0.28;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;

  const lowpass = ctx.createBiquadFilter();
  lowpass.type = "lowpass";
  lowpass.frequency.setValueAtTime(560, now);
  lowpass.frequency.exponentialRampToValueAtTime(2900, now + 0.12);
  lowpass.frequency.exponentialRampToValueAtTime(680, now + 0.72);

  const highpass = ctx.createBiquadFilter();
  highpass.type = "highpass";
  highpass.frequency.setValueAtTime(80, now);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.34, now + 0.032);
  gain.gain.exponentialRampToValueAtTime(0.11, now + 0.22);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.74);

  noise.connect(highpass);
  highpass.connect(lowpass);
  lowpass.connect(gain);
  gain.connect(ctx.destination);
  noise.start(now);
  noise.stop(now + 0.74);

  // Low heat thump.
  const thump = ctx.createOscillator();
  const thumpGain = ctx.createGain();
  thump.type = "sine";
  thump.frequency.setValueAtTime(92, now);
  thump.frequency.exponentialRampToValueAtTime(42, now + 0.26);
  thumpGain.gain.setValueAtTime(0.0001, now);
  thumpGain.gain.exponentialRampToValueAtTime(0.14, now + 0.018);
  thumpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
  thump.connect(thumpGain);
  thumpGain.connect(ctx.destination);
  thump.start(now);
  thump.stop(now + 0.29);

  // Crackling sparks.
  for (let i = 0; i < 8; i += 1) {
    const sparkTime = now + 0.035 + Math.random() * 0.38;
    const spark = ctx.createOscillator();
    const sparkGain = ctx.createGain();
    const sparkFilter = ctx.createBiquadFilter();

    spark.type = "triangle";
    spark.frequency.setValueAtTime(1500 + Math.random() * 2900, sparkTime);
    spark.frequency.exponentialRampToValueAtTime(480 + Math.random() * 850, sparkTime + 0.05);

    sparkFilter.type = "bandpass";
    sparkFilter.frequency.setValueAtTime(1150 + Math.random() * 2100, sparkTime);
    sparkFilter.Q.setValueAtTime(7, sparkTime);

    sparkGain.gain.setValueAtTime(0.0001, sparkTime);
    sparkGain.gain.exponentialRampToValueAtTime(0.052 + Math.random() * 0.052, sparkTime + 0.006);
    sparkGain.gain.exponentialRampToValueAtTime(0.0001, sparkTime + 0.058);

    spark.connect(sparkFilter);
    sparkFilter.connect(sparkGain);
    sparkGain.connect(ctx.destination);
    spark.start(sparkTime);
    spark.stop(sparkTime + 0.065);
  }
}

function initSoundToggle() {
  const button = document.querySelector("#soundToggle");
  if (!button) return;

  button.addEventListener("click", () => {
    state.soundEnabled = !state.soundEnabled;
    button.textContent = state.soundEnabled ? "Sound: On" : "Sound: Off";
    button.setAttribute("aria-pressed", String(state.soundEnabled));

    if (state.soundEnabled) {
      playFireSound();
    }
  });
}

function updateQty(idOrKey, change) {
  const parsedId = String(idOrKey).includes("::") ? parseCartKey(idOrKey).id : Number(idOrKey);

  if (change > 0 && isStoreClosed()) {
    updateStockStatus(state.store.message || "ร้านปิดรับออเดอร์ชั่วคราว", "error");
    renderCart();
    return;
  }

  if (change > 0 && availableToAdd(parsedId) <= 0) {
    const item = menuItems.find(menu => menu.id === parsedId);
    updateStockStatus(`${item?.name || "เมนูนี้"} เหลือไม่พอสำหรับเพิ่มแล้ว`, "error");
    renderCart();
    return;
  }

  let key;
  if (String(idOrKey).includes("::")) {
    key = String(idOrKey);
  } else {
    const item = menuItems.find(menu => menu.id === Number(idOrKey));
    if (!item) return;
    key = cartKeyForItem(item);
  }

  state.cart[key] = (state.cart[key] || 0) + change;
  if (state.cart[key] <= 0) {
    delete state.cart[key];
    delete state.itemNotes[key];
    delete state.noteSelect[key];
  }

  updateMenuQuantityBadges();
  renderCart();
}

function getCustomerInfo() {
  return {
    customerName: $("#customerName")?.value.trim() || "",
    customerPhone: $("#customerPhone")?.value.trim() || "",
    orderType: document.querySelector('input[name="orderType"]:checked')?.value || "",
    tableText: $("#tableInput")?.value.trim() || "",
    deliveryAddress: $("#deliveryAddress")?.value.trim() || "",
    mapLink: $("#mapLink")?.value.trim() || "",
    customerNote: $("#customerNote")?.value.trim() || ""
  };
}


function canUseCustomerMemory() {
  try {
    const key = "__fai_mai_khua_storage_test__";
    window.localStorage.setItem(key, "1");
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

function setCustomerMemoryStatus(message) {
  const status = $("#savedCustomerStatus");
  if (status) status.textContent = message;
}

function writeCustomerMemoryCookie(snapshot) {
  try {
    const encoded = encodeURIComponent(JSON.stringify(snapshot));
    document.cookie = `${CUSTOMER_MEMORY_COOKIE}=${encoded}; max-age=${CUSTOMER_MEMORY_MAX_AGE_SECONDS}; path=/; SameSite=Lax`;
  } catch (error) {
    // Cookie backup is optional. localStorage remains the primary storage.
  }
}

function readCustomerMemoryCookie() {
  try {
    const prefix = `${CUSTOMER_MEMORY_COOKIE}=`;
    const value = document.cookie
      .split(";")
      .map(part => part.trim())
      .find(part => part.startsWith(prefix));
    if (!value) return null;
    return JSON.parse(decodeURIComponent(value.slice(prefix.length)));
  } catch (error) {
    return null;
  }
}

function clearCustomerMemoryCookie() {
  try {
    document.cookie = `${CUSTOMER_MEMORY_COOKIE}=; max-age=0; path=/; SameSite=Lax`;
  } catch (error) {
    // Ignore cookie cleanup failures.
  }
}

function readCustomerMemory() {
  const cookieMemory = readCustomerMemoryCookie();
  if (!canUseCustomerMemory()) return cookieMemory;

  try {
    const stored = JSON.parse(window.localStorage.getItem(CUSTOMER_MEMORY_KEY) || "null");
    if (stored) return stored;
    if (cookieMemory) {
      window.localStorage.setItem(CUSTOMER_MEMORY_KEY, JSON.stringify(cookieMemory));
    }
    return cookieMemory;
  } catch (error) {
    return cookieMemory;
  }
}

function hasCustomerMemoryData(info) {
  return CUSTOMER_MEMORY_TEXT_KEYS.some(key => Boolean(info[key]));
}

function saveCustomerMemory(options = {}) {
  const { force = false, silent = false } = options;
  const storageAvailable = canUseCustomerMemory();

  if (!storageAvailable) {
    if (!silent) {
      setCustomerMemoryStatus("browser นี้ไม่อนุญาตให้เว็บจำข้อมูลอัตโนมัติ ถ้าใช้โหมดส่วนตัว/Incognito ข้อมูลอาจหาย");
    }
  }

  try {
    const info = getCustomerInfo();
    const previous = readCustomerMemory();

    // Do not let a blank page load overwrite previously saved customer details.
    if (previous && hasCustomerMemoryData(previous) && !hasCustomerMemoryData(info)) return;
    if (!force && previous && !hasCustomerMemoryData(info)) return;

    const snapshot = {
      ...info,
      locationConfirmed: Boolean(info.mapLink && state.locationConfirmed),
      selectedCurrency: state.selectedCurrency,
      savedAt: Date.now()
    };

    if (storageAvailable) {
      window.localStorage.setItem(CUSTOMER_MEMORY_KEY, JSON.stringify(snapshot));
    }
    writeCustomerMemoryCookie(snapshot);
    if (!silent) {
      setCustomerMemoryStatus("ระบบจำข้อมูลลูกค้าไว้ใน browser นี้แล้ว รอบหน้าจะเติมให้อัตโนมัติ");
    }
  } catch (error) {
    if (!silent) {
      setCustomerMemoryStatus("browser นี้ไม่อนุญาตให้จำข้อมูลอัตโนมัติ");
    }
  }
}

function restoreCustomerMemory() {
  if (!canUseCustomerMemory()) {
    setCustomerMemoryStatus("browser นี้ไม่อนุญาตให้เว็บจำข้อมูลอัตโนมัติ ถ้าใช้โหมดส่วนตัว/Incognito ข้อมูลอาจหาย");
    return;
  }

  const saved = readCustomerMemory();
  if (!saved) {
    setCustomerMemoryStatus("ข้อมูลลูกค้าจะถูกจำไว้ใน browser นี้หลังจากเริ่มกรอก");
    return;
  }

  const textFields = {
    customerName: "#customerName",
    customerPhone: "#customerPhone",
    tableText: "#tableInput",
    deliveryAddress: "#deliveryAddress",
    mapLink: "#mapLink",
    customerNote: "#customerNote"
  };

  Object.entries(textFields).forEach(([key, selector]) => {
    const element = $(selector);
    if (element && typeof saved[key] === "string") element.value = saved[key];
  });

  if (saved.orderType) {
    document.querySelectorAll('input[name="orderType"]').forEach(input => {
      input.checked = input.value === saved.orderType;
    });
  }

  if (saved.selectedCurrency && currencyOptions[saved.selectedCurrency]) {
    state.selectedCurrency = saved.selectedCurrency;
    document.querySelectorAll(".currency-btn").forEach(btn => {
      const active = btn.dataset.currency === state.selectedCurrency;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  if (saved.mapLink && saved.locationConfirmed) {
    state.locationConfirmed = true;
    setLocationConfirmed(true);
  }

  setCustomerMemoryStatus("เติมข้อมูลจากครั้งก่อนให้แล้ว สามารถแก้ไขได้ตามปกติ");
}

function clearCustomerMemory() {
  if (canUseCustomerMemory()) {
    window.localStorage.removeItem(CUSTOMER_MEMORY_KEY);
  }
  clearCustomerMemoryCookie();

  ["#customerName", "#customerPhone", "#tableInput", "#deliveryAddress", "#mapLink", "#customerNote"].forEach(selector => {
    const element = $(selector);
    if (element) element.value = "";
  });

  const defaultOrderType = document.querySelector('input[name="orderType"][value="นั่งทานที่ร้าน"]');
  if (defaultOrderType) defaultOrderType.checked = true;

  setLocationConfirmed(false);
  updateMapPreview("");
  setCustomerMemoryStatus("ล้างข้อมูลที่จำไว้แล้ว ลูกค้าสามารถกรอกใหม่ได้");
  renderCart();
}

function validateOrderForm() {
  const info = getCustomerInfo();
  const ids = Object.keys(state.cart);
  const missing = [];

  if (!ids.length) missing.push("เลือกรายการอาหารอย่างน้อย 1 รายการ");
  if (!info.customerName) missing.push("กรอกชื่อลูกค้า");
  if (!info.customerPhone) missing.push("กรอกเบอร์โทรติดต่อ");
  if (info.customerPhone && info.customerPhone.replace(/\D/g, "").length < 8) {
    missing.push("ตรวจสอบเบอร์โทรให้ถูกต้อง");
  }
  if (!info.orderType) missing.push("เลือกรูปแบบรับอาหาร");

  if (info.orderType === "นั่งทานที่ร้าน") {
    if (!info.tableText) missing.push("กรอกเลขโต๊ะ");
  }

  if (info.orderType === "รับเองหน้าร้าน") {
    if (!info.tableText) missing.push("กรอกชื่อ/จุดรับอาหารหน้าร้าน");
  }

  if (info.orderType === "จัดส่งเดลิเวอรี") {
    if (!info.deliveryAddress) missing.push("กรอกสถานที่จัดส่ง / ที่อยู่");
    if (!info.mapLink) missing.push("ใส่ Location หรือกดใช้ตำแหน่งปัจจุบัน");
    if (info.mapLink && !state.locationConfirmed) missing.push("กดปุ่มยืนยันตำแหน่งนี้หลังตรวจสอบหมุดในแผนที่");
  }

  missing.push(...stockValidationMessages());

  return {
    isValid: missing.length === 0,
    missing,
    info
  };
}

function updateValidationBox(validation) {
  const box = $("#orderValidation");
  const button = $("#sendOrderBtn");
  if (!box || !button) return;

  if (validation.isValid) {
    box.className = "validation-box is-ready";
    box.innerHTML = "ข้อมูลครบแล้ว สามารถกดยืนยันออเดอร์ได้";
    button.classList.remove("is-disabled");
    button.setAttribute("aria-disabled", "false");
    button.textContent = "ยืนยันออเดอร์ / ส่งเข้า WhatsApp ร้าน";
  } else {
    box.className = "validation-box";
    box.innerHTML = `
      <strong>กรอกข้อมูลให้ครบก่อนยืนยันออเดอร์</strong>
      <ul>${validation.missing.map(item => `<li>${item}</li>`).join("")}</ul>
    `;
    button.classList.add("is-disabled");
    button.setAttribute("aria-disabled", "true");
    button.textContent = "กรอกข้อมูลให้ครบก่อนยืนยันออเดอร์";
  }
}

function updateFloatingValidationBox(validation) {
  const box = $("#floatingValidation");
  const button = $("#floatingSendOrderBtn");
  if (!box || !button) return;

  if (validation.isValid) {
    box.className = "validation-box is-ready";
    box.innerHTML = "ข้อมูลครบแล้ว สามารถส่งออเดอร์ได้";
    button.classList.remove("is-disabled");
    button.setAttribute("aria-disabled", "false");
    button.textContent = "ส่งออเดอร์เข้า WhatsApp";
  } else {
    box.className = "validation-box";
    box.innerHTML = `
      <strong>ยังส่งไม่ได้</strong>
      <ul>${validation.missing.map(item => `<li>${item}</li>`).join("")}</ul>
    `;
    button.classList.add("is-disabled");
    button.setAttribute("aria-disabled", "true");
    button.textContent = "กรอกข้อมูลให้ครบก่อนส่ง";
  }
}

function orderRowsTemplate(keys, rowClass = "order-row", controlsClass = "qty-controls") {
  return keys.map(key => {
    const line = cartLineFromKey(key);
    if (!line) return "";

    const subtotal = line.price * line.qty;
    const safeKey = escapeHtml(key);
    const safeDomKey = String(key).replace(/[^a-zA-Z0-9_-]/g, "-");
    const noteId = `item-note-${rowClass.replace(/\s+/g, "-")}-${safeDomKey}`;
    const customId = `item-note-custom-${rowClass.replace(/\s+/g, "-")}-${safeDomKey}`;
    const currentNote = state.itemNotes[key] || "";
    const selectedNote = state.noteSelect[key] || noteSelectValue(currentNote);
    const isCustom = selectedNote === "__custom__";
    const customValue = escapeHtml(isCustom ? currentNote : noteCustomValue(currentNote));

    return `
      <div class="${rowClass}">
        <strong>${escapeHtml(line.name)}</strong>
        <div class="${controlsClass}">
          <button data-action="minus" data-key="${safeKey}" type="button">−</button>
          <span>${line.qty}</span>
          <button data-action="plus" data-key="${safeKey}" type="button">+</button>
        </div>
        <span>${money(subtotal)}</span>
        <label class="item-note-box" for="${noteId}">
          <span>หมายเหตุเมนูนี้</span>
          <select
            id="${noteId}"
            class="item-note-select"
            data-key="${safeKey}"
          >
            ${noteOptionsTemplate(selectedNote === "__custom__" ? "__custom__" : currentNote)}
          </select>
          <input
            id="${customId}"
            class="item-note-custom ${isCustom ? "is-visible" : ""}"
            data-key="${safeKey}"
            type="text"
            value="${customValue}"
            placeholder="ພິມຄຳຂໍພິເສດບ່ອນນີ້..."
            autocomplete="off"
            ${isCustom ? "" : "disabled"}
          />
        </label>
      </div>
    `;
  }).join("");
}

function bindQuantityButtons(selector) {
  document.querySelectorAll(selector).forEach(button => {
    button.addEventListener("click", (event) => {
      const key = button.dataset.key;
      const id = Number(button.dataset.id);
      const change = button.dataset.action === "plus" ? 1 : -1;
      updateQty(key || id, change);
      if (change > 0) igniteAddEffect(event.currentTarget);
    });
  });
}

function cartTotal(keys) {
  return keys.reduce((total, key) => {
    const line = cartLineFromKey(key);
    return total + (line ? line.price * line.qty : 0);
  }, 0);
}

function cartCount(keys) {
  return keys.reduce((total, key) => total + (state.cart[key] || 0), 0);
}

function orderHref(total, validation) {
  if (!validation.isValid) return "#";
  const text = buildOrderText(total);
  return `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(text)}`;
}

function updateFloatingCart(ids, total, validation) {
  const count = cartCount(ids);
  const barCount = $("#floatingCartCount");
  const summary = $("#floatingCartSummary");
  const barTotal = $("#floatingCartTotal");
  const drawerTotal = $("#floatingDrawerTotal");
  const itemsBox = $("#floatingOrderItems");
  const sendButton = $("#floatingSendOrderBtn");
  const floatingCart = $("#floatingCart");

  if (barCount) barCount.textContent = String(count);
  if (summary) summary.textContent = count ? `${count} รายการในออเดอร์` : "ยังไม่มีรายการ";
  if (barTotal) barTotal.textContent = money(total);
  if (drawerTotal) drawerTotal.textContent = money(total);
  if (floatingCart) floatingCart.classList.toggle("has-items", count > 0);

  if (itemsBox) {
    if (!ids.length) {
      itemsBox.className = "floating-order-items empty";
      itemsBox.textContent = "ยังไม่มีรายการที่เลือก";
    } else {
      itemsBox.className = "floating-order-items";
      itemsBox.innerHTML = orderRowsTemplate(ids, "floating-order-row", "floating-qty-controls");
      bindQuantityButtons(".floating-qty-controls button");
      bindItemNoteInputs();
    }
  }

  updateFloatingValidationBox(validation);
  if (sendButton) sendButton.href = orderHref(total, validation);
}

function renderCart() {
  const ids = Object.keys(state.cart);
  const orderItems = $("#orderItems");
  const total = cartTotal(ids);
  const validation = validateOrderForm();

  if (!ids.length) {
    orderItems.className = "order-items empty";
    orderItems.textContent = "ยังไม่มีรายการที่เลือก";
    $("#totalPrice").textContent = money(0);
    $("#sendOrderBtn").href = "#";
    updateValidationBox(validation);
    updateFloatingCart(ids, total, validation);
    return;
  }

  orderItems.className = "order-items";
  orderItems.innerHTML = orderRowsTemplate(ids);

  $("#totalPrice").textContent = money(total);

  bindQuantityButtons(".qty-controls button");
  bindItemNoteInputs();

  updateValidationBox(validation);
  updateFloatingCart(ids, total, validation);

  $("#sendOrderBtn").href = orderHref(total, validation);
}

function buildOrderText(total) {
  const info = getCustomerInfo();

  const lines = [
    `สวัสดีครับ/ค่ะ ต้องการสั่งอาหารจาก ${restaurant.name}`,
    "",
    "ข้อมูลลูกค้า",
    `ชื่อ: ${info.customerName}`,
    `เบอร์โทร: ${info.customerPhone}`,
    `รูปแบบรับอาหาร: ${info.orderType}`,
    `เลขโต๊ะ/จุดรับอาหาร: ${info.tableText}`,
    info.deliveryAddress ? `สถานที่จัดส่ง: ${info.deliveryAddress}` : "สถานที่จัดส่ง: -",
    info.mapLink ? `Location: ${info.mapLink}` : "Location: -",
    "",
    "รายการอาหาร",
    ...Object.keys(state.cart).map(key => {
      const line = cartLineFromKey(key);
      if (!line) return "";
      const note = itemNoteValue(key);
      const row = `- ${line.name} x ${line.qty} = ${money(line.price * line.qty)}`;
      return note ? `${row}\n  หมายเหตุเมนูนี้: ${note}` : row;
    }).filter(Boolean),
    "",
    `รวมโดยประมาณ: ${money(total)}`,
    state.selectedCurrency !== "LAK" ? `ราคาอ้างอิง Kip: ${new Intl.NumberFormat("lo-LA").format(total)} Kip` : null,
    `หมายเหตุจากร้าน: ${restaurant.deliveryNote}`
  ];
  return lines.filter(Boolean).join("\n");
}





function setLocationConfirmed(isConfirmed) {
  state.locationConfirmed = Boolean(isConfirmed);

  const confirmBtn = $("#confirmLocationBtn");
  const status = $("#locationStatus");

  if (confirmBtn) {
    if (state.locationConfirmed) {
      confirmBtn.classList.add("is-confirmed");
      confirmBtn.classList.remove("is-disabled");
      confirmBtn.setAttribute("aria-disabled", "false");
      confirmBtn.textContent = "ยืนยันตำแหน่งแล้ว";
    } else {
      confirmBtn.classList.remove("is-confirmed");
      confirmBtn.textContent = "ยืนยันตำแหน่งนี้";
    }
  }

  if (state.locationConfirmed && status) {
    status.textContent = "ยืนยัน Location แล้ว ลูกค้าสามารถกดยืนยันออเดอร์ได้เมื่อข้อมูลครบ";
  }

  saveCustomerMemory({ force: true });
  renderCart();
}



function loadLeafletAssets() {
  if (window.L) {
    state.mapAssetsLoaded = true;
    return Promise.resolve();
  }

  if (state.mapLoadingPromise) return state.mapLoadingPromise;

  const status = $("#locationStatus");
  if (status) status.textContent = "กำลังโหลดแผนที่ กรุณารอสักครู่...";

  state.mapLoadingPromise = (async () => {
    let lastError = null;

    for (const source of LEAFLET_ASSET_SOURCES) {
      appendLeafletCss(source.css);

      try {
        await loadScriptWithTimeout(source.js, LEAFLET_ASSET_TIMEOUT_MS);
        if (window.L) {
          state.mapAssetsLoaded = true;
          return;
        }
      } catch (error) {
        lastError = error;
      }
    }

    throw lastError || new Error("Leaflet failed to load");
  })().catch((error) => {
    state.mapLoadingPromise = null;
    throw error;
  });

  return state.mapLoadingPromise;
}

async function ensureDeliveryMap() {
  state.mapRequested = true;

  if (state.map) {
    setMapPreviewState("ready");
    return state.map;
  }

  const fallback = $("#mapFallback");
  setMapPreviewState("loading");
  if (fallback) {
    fallback.style.display = "grid";
    fallback.textContent = "กำลังโหลดแผนที่...";
  }

  try {
    await loadLeafletAssets();
    initDeliveryMap();
    setMapPreviewState("ready");

    // Leaflet sometimes needs a resize after appearing in a responsive layout.
    setTimeout(() => state.map?.invalidateSize?.(), 120);

    return state.map;
  } catch (error) {
    if (fallback) {
      fallback.style.display = "grid";
      fallback.textContent = "โหลดแผนที่ไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ต หรือวางลิงก์ Google Maps เอง";
    }
    setMapPreviewState("fallback");
    const status = $("#locationStatus");
    if (status) {
      const hasLocationLink = Boolean($("#mapLink")?.value.trim());
      status.textContent = hasLocationLink
        ? "แผนที่โหลดไม่สำเร็จ แต่ระบบมีลิงก์ Location แล้ว สามารถกดยืนยันตำแหน่งได้หากลิงก์ถูกต้อง"
        : "โหลดแผนที่ไม่สำเร็จ แต่ยังสามารถวางลิงก์ Google Maps เองได้";
    }
    return null;
  }
}

function setMapMode(mode) {
  if (!state.map || !window.L) {
    state.mapMode = mode;
    return;
  }

  state.mapLayers.forEach(layer => state.map.removeLayer(layer));
  state.mapLayers = [];
  state.mapMode = mode;

  if (mode === "street") {
    const street = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap",
      updateWhenIdle: true,
      keepBuffer: 4
    }).addTo(state.map);

    state.mapLayers.push(street);
  } else {
    const satellite = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 19,
      attribution: "Tiles &copy; Esri",
      updateWhenIdle: true,
      keepBuffer: 4,
      crossOrigin: true
    }).addTo(state.map);

    const places = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 19,
      opacity: 0.50,
      crossOrigin: true
    }).addTo(state.map);

    const roads = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 19,
      opacity: 0.50,
      crossOrigin: true
    }).addTo(state.map);

    state.mapLayers.push(satellite, places, roads);
  }

  document.querySelectorAll(".map-mode-btn").forEach(button => {
    const active = button.dataset.mapMode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  const status = $("#locationStatus");
  if (status && state.selectedLatLng && !state.locationConfirmed) {
    status.textContent = mode === "satellite"
      ? "เปลี่ยนเป็นภาพดาวเทียมแล้ว ดูบ้าน/อาคารให้ชัด แล้วกดยืนยันตำแหน่งนี้"
      : "เปลี่ยนเป็นแผนที่ถนนแล้ว ดูชื่อถนน/สถานที่ แล้วกดยืนยันตำแหน่งนี้";
  }
}


function addStoreLogoMarker() {
  if (!state.map || !window.L) return;

  const storeIcon = L.divIcon({
    className: "store-logo-marker",
    html: `
      <div class="store-logo-pin">
        <img src="images/logo-fai-mai-khua-small.png" alt="ຮ້ານ ໄຟໄໝ້ຄົວ" />
        <span>ໄຟໄໝ້ຄົວ</span>
      </div>
    `,
    iconSize: [86, 92],
    iconAnchor: [43, 82],
    popupAnchor: [0, -78]
  });

  state.storeMarker = L.marker([restaurant.storeLat, restaurant.storeLng], {
    icon: storeIcon,
    interactive: true,
    keyboard: false,
    zIndexOffset: 650
  }).addTo(state.map);

  state.storeMarker.bindPopup(`
    <strong>${restaurant.googleMapName}</strong><br>
    ตำแหน่งร้านบน Google Maps<br>
    <a href="${restaurant.storeMapsUrl}" target="_blank" rel="noopener">ค้นหาชื่อร้านใน Google Maps</a><br>
    <a href="https://www.google.com/maps?q=${restaurant.storeLat},${restaurant.storeLng}" target="_blank" rel="noopener">เปิดพิกัดร้าน</a>
  `);

  L.circle([restaurant.storeLat, restaurant.storeLng], {
    radius: 60,
    color: "#ffb636",
    weight: 1,
    opacity: 0.55,
    fillColor: "#e8431f",
    fillOpacity: 0.10,
    interactive: false
  }).addTo(state.map);
}

function initDeliveryMap() {
  const mapElement = $("#deliveryMap");
  const fallback = $("#mapFallback");
  if (!mapElement) return;

  if (!window.L) {
    if (fallback) {
      fallback.style.display = "grid";
      fallback.textContent = "แผนที่จะโหลดเมื่อเริ่มใช้งาน Location";
    }
    return;
  }

  const defaultLatLng = [restaurant.storeLat, restaurant.storeLng];
  const savedLat = Number(state.selectedLatLng?.latitude);
  const savedLng = Number(state.selectedLatLng?.longitude);
  const hasSavedLatLng = Number.isFinite(savedLat) && Number.isFinite(savedLng);
  const initialLatLng = hasSavedLatLng ? [savedLat, savedLng] : defaultLatLng;
  state.map = L.map(mapElement, {
    zoomControl: true,
    scrollWheelZoom: false,
    dragging: true,
    touchZoom: true,
    tapTolerance: 16,
    tap: true,
    zoomAnimation: true,
    fadeAnimation: true,
    markerZoomAnimation: true,
    inertia: true,
    inertiaDeceleration: 2600,
    inertiaMaxSpeed: 1400
  }).setView(initialLatLng, hasSavedLatLng ? 17 : 15);

  setMapMode(state.mapMode || "street");

  const firePinIcon = L.divIcon({
    className: "fire-map-pin",
    html: "<span></span>",
    iconSize: [34, 46],
    iconAnchor: [17, 42]
  });

  state.marker = L.marker(initialLatLng, {
    draggable: true,
    autoPan: true,
    icon: firePinIcon
  }).addTo(state.map);

  addStoreLogoMarker();

  if (fallback) fallback.style.display = "none";
  setMapPreviewState("ready");

  state.marker.on("dragstart", () => setLocationConfirmed(false));
  state.marker.on("dragend", () => {
    const position = state.marker.getLatLng();
    setSelectedLocation(position.lat, position.lng, "เลื่อนหมุดแล้ว ถ้าจุดส่งถูกต้องให้กด “ยืนยันตำแหน่งนี้”");
  });

  state.map.on("click", (event) => {
    setLocationConfirmed(false);
    setSelectedLocation(event.latlng.lat, event.latlng.lng, "หมุดวิ่งไปตำแหน่งที่เลือกแล้ว ถ้าจุดส่งถูกต้องให้กด “ยืนยันตำแหน่งนี้”");
  });

  if (hasSavedLatLng) {
    const wasLocationConfirmed = state.locationConfirmed;
    setSelectedLocation(initialLatLng[0], initialLatLng[1], "เปิดแผนที่ตาม Location ที่เลือกไว้แล้ว ตรวจสอบหมุดก่อนกดยืนยันตำแหน่ง");
    if (wasLocationConfirmed) setLocationConfirmed(true);
  } else {
    state.selectedLatLng = null;
    state.locationConfirmed = false;

    const confirmBtn = $("#confirmLocationBtn");
    if (confirmBtn) {
      confirmBtn.classList.add("is-disabled");
      confirmBtn.classList.remove("is-confirmed");
      confirmBtn.setAttribute("aria-disabled", "true");
      confirmBtn.textContent = "ยืนยันตำแหน่งนี้";
    }

    const status = $("#locationStatus");
    if (status) {
      status.textContent = "แผนที่พร้อมแล้ว โลโก้ร้านคือจุดร้าน ຮ້ານ ໄຟໄໝ້ຄົວ ให้ลูกค้าแตะบนแผนที่ ลากหมุด ใช้ตำแหน่งปัจจุบัน หรือค้นหาจุดส่งก่อนกดยืนยันตำแหน่ง";
    }

    renderCart();
  }
}


function moveMarkerSmoothly(targetLat, targetLng) {
  if (!state.marker) return;

  const current = state.marker.getLatLng();
  const startLat = current.lat;
  const startLng = current.lng;
  const endLat = Number(targetLat);
  const endLng = Number(targetLng);
  const duration = 460;
  const startTime = performance.now();

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animate(time) {
    const progress = Math.min((time - startTime) / duration, 1);
    const eased = easeOutCubic(progress);
    const lat = startLat + (endLat - startLat) * eased;
    const lng = startLng + (endLng - startLng) * eased;

    state.marker.setLatLng([lat, lng]);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      state.marker.setLatLng([endLat, endLng]);
    }
  }

  requestAnimationFrame(animate);
}

function setSelectedLocation(latitude, longitude, message) {
  const numericLat = Number(latitude);
  const numericLng = Number(longitude);

  if (!Number.isFinite(numericLat) || !Number.isFinite(numericLng) || Math.abs(numericLat) > 90 || Math.abs(numericLng) > 180) {
    const status = $("#locationStatus");
    if (status) status.textContent = "พิกัดไม่ถูกต้อง กรุณาเลือกตำแหน่งใหม่ หรือวางลิงก์ Google Maps ที่ถูกต้อง";
    return;
  }

  const lat = numericLat.toFixed(7);
  const lng = numericLng.toFixed(7);
  const link = `https://www.google.com/maps?q=${lat},${lng}`;

  state.selectedLatLng = { latitude: lat, longitude: lng };
  state.locationConfirmed = false;

  const mapInput = $("#mapLink");
  if (mapInput) mapInput.value = link;

  const confirmBtn = $("#confirmLocationBtn");
  if (confirmBtn) {
    confirmBtn.classList.remove("is-disabled", "is-confirmed");
    confirmBtn.setAttribute("aria-disabled", "false");
    confirmBtn.textContent = "ยืนยันตำแหน่งนี้";
  }

  if (state.marker && state.map) {
    moveMarkerSmoothly(lat, lng);
    const targetZoom = Math.max(state.map.getZoom(), 17);
    state.map.flyTo([lat, lng], targetZoom, {
      animate: true,
      duration: 0.62,
      easeLinearity: 0.18
    });
  }

  const status = $("#locationStatus");
  if (status && message) status.textContent = message;

  renderCart();
}

function updateMapPreview(link) {
  const value = (link || "").trim();

  if (!value) {
    state.locationConfirmed = false;
    state.selectedLatLng = null;

    const confirmBtn = $("#confirmLocationBtn");
    if (confirmBtn) {
      confirmBtn.classList.add("is-disabled");
      confirmBtn.classList.remove("is-confirmed");
      confirmBtn.setAttribute("aria-disabled", "true");
      confirmBtn.textContent = "ยืนยันตำแหน่งนี้";
    }
    return;
  }

  const coords = extractCoordinates(value);
  if (coords) {
    ensureDeliveryMap().then(() => {
      setSelectedLocation(coords.latitude, coords.longitude, "พบพิกัดจากลิงก์แล้ว ตรวจสอบหมุดแล้วกด “ยืนยันตำแหน่งนี้”");
    });
  } else {
    state.locationConfirmed = false;
    const confirmBtn = $("#confirmLocationBtn");
    if (confirmBtn) {
      confirmBtn.classList.remove("is-disabled", "is-confirmed");
      confirmBtn.setAttribute("aria-disabled", "false");
      confirmBtn.textContent = "ยืนยันตำแหน่งนี้";
    }
    const status = $("#locationStatus");
    if (status) status.textContent = "วางลิงก์ Google Maps แล้ว ถ้าลิงก์ถูกต้องให้กด “ยืนยันตำแหน่งนี้”";
    renderCart();
  }
}

function extractCoordinates(value) {
  const text = String(value || "");
  const buildCoords = (latitude, longitude) => {
    const lat = Number(latitude);
    const lng = Number(longitude);
    if (!Number.isFinite(lat) || !Number.isFinite(lng) || Math.abs(lat) > 90 || Math.abs(lng) > 180) return null;
    return { latitude: lat, longitude: lng };
  };

  let match = text.match(/q=(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/);
  if (match) return buildCoords(match[1], match[2]);

  match = text.match(/@(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/);
  if (match) return buildCoords(match[1], match[2]);

  match = text.match(/(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/);
  if (match) return buildCoords(match[1], match[2]);

  return null;
}




function updateGpsAccuracyPanel(accuracy, status = "checking") {
  const panel = $("#gpsAccuracyPanel");
  const text = $("#gpsAccuracyText");
  if (!panel || !text) return;

  panel.classList.remove("is-good", "is-medium", "is-bad", "is-checking");

  if (!accuracy) {
    panel.classList.add("is-checking");
    text.textContent = status === "checking" ? "กำลังจับตำแหน่ง..." : "ยังไม่มีข้อมูลความแม่นยำ";
    return;
  }

  const rounded = Math.round(accuracy);
  text.textContent = `คลาดเคลื่อนประมาณ ${rounded} เมตร`;

  if (rounded <= 25) {
    panel.classList.add("is-good");
  } else if (rounded <= 80) {
    panel.classList.add("is-medium");
  } else {
    panel.classList.add("is-bad");
  }
}

function getAccuracyMessage(accuracy) {
  if (!accuracy) return "ระบบไม่ทราบค่าความแม่นยำ กรุณาตรวจสอบหมุดก่อนยืนยัน";
  const rounded = Math.round(accuracy);
  if (rounded <= 25) {
    return `ตำแหน่งค่อนข้างแม่น คลาดเคลื่อนประมาณ ${rounded} เมตร`;
  }
  if (rounded <= 80) {
    return `ตำแหน่งพอใช้ได้ แต่ยังอาจคลาดเคลื่อนประมาณ ${rounded} เมตร กรุณาดูหมุดก่อนยืนยัน`;
  }
  return `ตำแหน่งจากเครื่องนี้คลาดเคลื่อนสูงประมาณ ${rounded} เมตร ห้ามยืนยันจนกว่าจะลากหมุดไฟไปจุดส่งจริง`;
}

function updateUserLiveLocation(latitude, longitude, accuracy) {
  if (!state.map || !window.L) return;

  const lat = Number(latitude);
  const lng = Number(longitude);

  const userIcon = L.divIcon({
    className: "live-user-marker",
    html: `<span></span><b>คุณอยู่ตรงนี้</b>`,
    iconSize: [96, 54],
    iconAnchor: [48, 28]
  });

  if (!state.userMarker) {
    state.userMarker = L.marker([lat, lng], {
      icon: userIcon,
      interactive: false,
      zIndexOffset: 900
    }).addTo(state.map);
  } else {
    state.userMarker.setLatLng([lat, lng]);
  }

  if (!state.userAccuracyCircle) {
    state.userAccuracyCircle = L.circle([lat, lng], {
      radius: Math.max(accuracy || 25, 18),
      color: "#55c7ff",
      weight: 1,
      opacity: 0.64,
      fillColor: "#55c7ff",
      fillOpacity: 0.10,
      interactive: false
    }).addTo(state.map);
  } else {
    state.userAccuracyCircle.setLatLng([lat, lng]);
    state.userAccuracyCircle.setRadius(Math.max(accuracy || 25, 18));
  }
}

function startLiveUserLocation() {
  if (!navigator.geolocation || state.userWatchId !== null) return;

  state.userWatchId = navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude, accuracy } = position.coords;
      updateUserLiveLocation(latitude, longitude, accuracy);
      updateGpsAccuracyPanel(accuracy, "done");
    },
    () => {
      // Keep the order flow working even if live tracking is blocked.
    },
    { enableHighAccuracy: true, timeout: 18000, maximumAge: 5000 }
  );
}


function getGooglePlacesApiKey() {
  return window.FAI_MAI_KHUA_CONFIG?.googleMapsApiKey?.trim() || "";
}

function shouldUseGooglePlaces() {
  const provider = window.FAI_MAI_KHUA_CONFIG?.searchProvider || "auto";
  const key = getGooglePlacesApiKey();
  return (provider === "google" || provider === "auto") && Boolean(key);
}

function updateSearchProviderStatus() {
  const status = $("#searchProviderStatus");
  if (!status) return;

  if (shouldUseGooglePlaces()) {
    status.className = "place-provider-status is-google";
    status.textContent = "กำลังใช้ฐานข้อมูล Google Maps / Google Places";
  } else {
    status.className = "place-provider-status is-fallback";
    status.textContent = "ยังไม่ได้ใส่ Google API key: ตอนนี้ใช้ระบบค้นหาสำรองก่อน";
  }
}

async function searchPlace(options = {}) {
  const { auto = false } = options;
  const input = $("#placeSearchInput");
  const resultsBox = $("#placeResults");
  const status = $("#locationStatus");
  const query = input?.value.trim() || "";

  updateSearchProviderStatus();

  if (!resultsBox) return;

  if (query.length < 2) {
    resultsBox.className = "place-results is-empty";
    resultsBox.innerHTML = auto ? "พิมพ์อย่างน้อย 2 ตัวอักษร เพื่อให้ระบบแนะนำสถานที่" : "กรุณาพิมพ์ชื่อสถานที่ก่อนค้นหา";
    return;
  }

  if (state.placeSearchController) {
    state.placeSearchController.abort();
  }

  state.placeSearchController = new AbortController();

  resultsBox.className = "place-results is-loading";
  resultsBox.innerHTML = shouldUseGooglePlaces()
    ? "กำลังค้นหาจาก Google Maps..."
    : "กำลังค้นหาสถานที่จากระบบสำรอง...";

  try {
    const places = shouldUseGooglePlaces()
      ? await searchGooglePlaces(query, state.placeSearchController.signal)
      : await searchOpenStreetMapPlaces(query, state.placeSearchController.signal);

    state.lastPlaceQuery = query;
    renderPlaceResults(places, query, auto);
  } catch (error) {
    if (error.name === "AbortError") return;

    // If Google has an issue, fall back to OpenStreetMap so the customer can still order.
    if (shouldUseGooglePlaces()) {
      try {
        const fallbackPlaces = await searchOpenStreetMapPlaces(query);
        renderPlaceResults(fallbackPlaces, query, auto, true);
        if (status) status.textContent = "Google Places ขัดข้องชั่วคราว ระบบแสดงผลค้นหาสำรองให้ก่อน";
        return;
      } catch (fallbackError) {
        // Continue to generic error below.
      }
    }

    resultsBox.className = "place-results is-empty";
    resultsBox.innerHTML = "ค้นหาสถานที่ไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ต หรือใช้ตำแหน่งปัจจุบัน";
    if (status) status.textContent = "ระบบค้นหาสถานที่ขัดข้อง กรุณากดใช้ตำแหน่งปัจจุบัน หรือวางลิงก์ Google Maps เอง";
  }
}

async function searchGooglePlaces(query, signal) {
  const key = getGooglePlacesApiKey();
  if (!key) return [];

  const response = await fetchWithTimeout("https://places.googleapis.com/v1/places:autocomplete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": key
    },
    body: JSON.stringify({
      input: query,
      languageCode: "lo",
      regionCode: "LA",
      locationBias: {
        circle: {
          center: {
            latitude: restaurant.storeLat,
            longitude: restaurant.storeLng
          },
          radius: 45000
        }
      }
    }),
    signal
  });

  if (!response.ok) {
    throw new Error("Google Places autocomplete failed");
  }

  const data = await response.json();
  const suggestions = data.suggestions || [];

  return suggestions
    .map(item => item.placePrediction)
    .filter(Boolean)
    .map(place => ({
      provider: "google",
      placeId: place.placeId,
      short_name: place.structuredFormat?.mainText?.text || place.text?.text || "Google Maps result",
      display_name: place.text?.text || place.structuredFormat?.mainText?.text || "Google Maps result",
      lat: "",
      lon: ""
    }));
}

async function getGooglePlaceDetails(placeId) {
  const key = getGooglePlacesApiKey();
  const response = await fetchWithTimeout(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=lo&regionCode=LA`, {
    headers: {
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask": "id,displayName,formattedAddress,location,googleMapsUri"
    }
  });

  if (!response.ok) {
    throw new Error("Google Place details failed");
  }

  const data = await response.json();
  return {
    lat: data.location?.latitude,
    lon: data.location?.longitude,
    title: data.displayName?.text || data.formattedAddress || "Google Maps place",
    address: data.formattedAddress || data.googleMapsUri || "",
    googleMapsUri: data.googleMapsUri || ""
  };
}

async function searchOpenStreetMapPlaces(query, signal) {
  const queries = [
    `${query}, Laos`,
    `${query}, Vientiane, Laos`
  ];

  const allResults = [];

  for (const searchQuery of queries) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=8&addressdetails=1&dedupe=1&countrycodes=la&q=${encodeURIComponent(searchQuery)}`;
    try {
      const response = await fetchWithTimeout(url, {
        headers: { "Accept": "application/json" },
        signal
      });

      if (!response.ok) continue;

      const data = await response.json();
      allResults.push(...data.map(place => ({
        provider: "osm",
        placeId: "",
        short_name: place.display_name.split(",").slice(0, 2).join(","),
        display_name: place.display_name,
        lat: place.lat,
        lon: place.lon
      })));
    } catch (error) {
      if (signal?.aborted) throw error;
    }
  }

  const seen = new Set();
  return allResults.filter(place => {
    const key = `${Number(place.lat).toFixed(5)},${Number(place.lon).toFixed(5)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 8);
}

function renderPlaceResults(places, query, auto = false, usedFallback = false) {
  const resultsBox = $("#placeResults");
  const status = $("#locationStatus");
  if (!resultsBox) return;

  if (!places.length) {
    resultsBox.className = "place-results is-empty";
    resultsBox.innerHTML = auto
      ? `ยังไม่พบ “${query}” ลองพิมพ์ชื่อให้ละเอียดขึ้น เช่น ชื่อหมู่บ้าน + เมือง`
      : "ไม่พบสถานที่ ลองพิมพ์ชื่อให้ละเอียดขึ้น เช่น ชื่อหมู่บ้าน + เมือง";
    if (status) status.textContent = "ค้นหาไม่เจอ กรุณาลองพิมพ์ชื่อสถานที่ใหม่ หรือใช้ตำแหน่งปัจจุบัน";
    return;
  }

  const providerTitle = usedFallback
    ? "สถานที่แนะนำจากระบบสำรอง"
    : (places[0]?.provider === "google" ? "สถานที่แนะนำจาก Google Maps" : "สถานที่แนะนำ");

  resultsBox.className = "place-results";
  resultsBox.innerHTML = `
    <div class="suggestion-title">${providerTitle}</div>
    ${places.map((place) => {
      return `
        <button type="button" class="place-result" data-provider="${place.provider}" data-place-id="${place.placeId || ""}" data-lat="${place.lat || ""}" data-lng="${place.lon || ""}">
          <strong>${highlightMatch(place.short_name || place.display_name, query)}</strong>
          <span>${highlightMatch(place.display_name, query)}</span>
          <em>${place.provider === "google" ? "Google Maps" : "Map fallback"}</em>
        </button>
      `;
    }).join("")}
  `;

  resultsBox.querySelectorAll(".place-result").forEach(button => {
    button.addEventListener("click", async () => {
      await selectPlaceResult(button, resultsBox);
    });
  });
}

async function selectPlaceResult(button, resultsBox) {
  const provider = button.dataset.provider;
  let lat = button.dataset.lat;
  let lng = button.dataset.lng;
  let title = button.querySelector("strong")?.textContent || "สถานที่ที่เลือก";

  button.classList.add("is-loading");

  try {
    if (provider === "google") {
      const details = await getGooglePlaceDetails(button.dataset.placeId);
      lat = details.lat;
      lng = details.lon;
      title = details.title;
    }

    if (!lat || !lng) throw new Error("No coordinates");

    await ensureDeliveryMap();
    setSelectedLocation(lat, lng, `เลือกสถานที่ “${title}” แล้ว ถ้าหมุดตรงกับจุดส่งจริงให้กด “ยืนยันตำแหน่งนี้”`);

    resultsBox.querySelectorAll(".place-result").forEach(item => item.classList.remove("is-selected"));
    button.classList.add("is-selected");

    const input = $("#placeSearchInput");
    if (input) input.value = title;

    document.querySelector("#mapPreview")?.scrollIntoView({ behavior: "smooth", block: "center" });
  } catch (error) {
    const status = $("#locationStatus");
    if (status) status.textContent = "ดึงพิกัดสถานที่ไม่สำเร็จ กรุณาเลือกผลลัพธ์อื่น หรือลากหมุดเอง";
  } finally {
    button.classList.remove("is-loading");
  }
}

function highlightMatch(text, query) {
  const safeText = escapeHtml(String(text || ""));
  const q = String(query || "").trim();
  if (!q) return safeText;

  const escapedQuery = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escapedQuery})`, "ig");
  return safeText.replace(regex, "<mark>$1</mark>");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}



const quickNoteOptions = [
  { value: "", label: "ປົກກະຕິ" },
  { value: "ບໍ່ໃສ່ພິກ", label: "ບໍ່ໃສ່ພິກ" },
  { value: "ເຜັດນ້ອຍ", label: "ເຜັດນ້ອຍ" },
  { value: "ເຜັດຫຼາຍ", label: "ເຜັດຫຼາຍ" },
  { value: "ບໍ່ໃສ່ຜັກ", label: "ບໍ່ໃສ່ຜັກ" },
  { value: "ແຍກນ້ຳຈິ້ມ", label: "ແຍກນ້ຳຈິ້ມ" },
  { value: "__custom__", label: "ອື່ນໆ / ພິມເອງ" }
];

function noteSelectValue(note) {
  const text = String(note || "").trim();
  if (!text) return "";
  if (text === "__custom__") return "__custom__";
  return quickNoteOptions.some(option => option.value === text) ? text : "__custom__";
}

function noteCustomValue(note) {
  const text = String(note || "").trim();
  if (!text) return "";
  return quickNoteOptions.some(option => option.value === text) ? "" : text;
}

function noteOptionsTemplate(note) {
  const selected = noteSelectValue(note);
  return quickNoteOptions.map(option => `
    <option value="${escapeHtml(option.value)}" ${option.value === selected ? "selected" : ""}>
      ${escapeHtml(option.label)}
    </option>
  `).join("");
}


function itemNoteValue(key) {
  return String(state.itemNotes?.[key] || "").trim();
}

function setItemNoteValue(key, value) {
  const text = String(value || "");
  if (!key) return;

  if (text.trim()) {
    state.itemNotes[key] = text;
  } else {
    delete state.itemNotes[key];
  }
}

function refreshOrderLinksOnly() {
  const keys = Object.keys(state.cart);
  const total = cartTotal(keys);
  const validation = validateOrderForm();
  const mainSend = $("#sendOrderBtn");
  const floatingSend = $("#floatingSendOrderBtn");

  if (mainSend) mainSend.href = orderHref(total, validation);
  if (floatingSend) floatingSend.href = orderHref(total, validation);
}

function bindItemNoteInputs() {
  document.querySelectorAll(".item-note-select").forEach(select => {
    if (select.dataset.boundItemNote === "true") return;
    select.dataset.boundItemNote = "true";

    select.addEventListener("change", () => {
      const key = select.dataset.key;
      const customInput = document.querySelector(`.item-note-custom[data-key="${CSS.escape(key)}"]`);
      const value = select.value;

      state.noteSelect[key] = value;

      if (value === "__custom__") {
        customInput?.classList.add("is-visible");
        customInput?.removeAttribute("disabled");
        setItemNoteValue(key, customInput?.value || "");
        setTimeout(() => customInput?.focus(), 20);
      } else {
        customInput?.classList.remove("is-visible");
        customInput?.setAttribute("disabled", "disabled");
        if (customInput) customInput.value = "";
        setItemNoteValue(key, value);
      }

      refreshOrderLinksOnly();
    });
  });

  document.querySelectorAll(".item-note-custom").forEach(input => {
    if (input.dataset.boundItemNote === "true") return;
    input.dataset.boundItemNote = "true";

    input.addEventListener("input", () => {
      const key = input.dataset.key;
      state.noteSelect[key] = "__custom__";
      setItemNoteValue(key, input.value);
      refreshOrderLinksOnly();
    });

    input.addEventListener("blur", refreshOrderLinksOnly);
  });
}

function schedulePlaceAutocomplete() {
  const input = $("#placeSearchInput");
  const resultsBox = $("#placeResults");
  const query = input?.value.trim() || "";

  if (state.placeSearchTimer) clearTimeout(state.placeSearchTimer);

  if (query.length < 2) {
    if (resultsBox) {
      resultsBox.className = "place-results is-empty";
      resultsBox.innerHTML = query.length ? "พิมพ์เพิ่มอีกนิด ระบบจะแนะนำสถานที่ให้เลือก" : "";
    }
    return;
  }

  if (resultsBox) {
    resultsBox.className = "place-results is-loading";
    resultsBox.innerHTML = shouldUseGooglePlaces() ? "กำลังเตรียมค้นหาจาก Google Maps..." : "กำลังรอข้อความให้ครบ...";
  }

  state.placeSearchTimer = setTimeout(() => {
    searchPlace({ auto: true });
  }, 520);
}

async function useCurrentLocation() {
  const status = $("#locationStatus");
  const mapReadyPromise = ensureDeliveryMap().catch(() => null);

  if (!navigator.geolocation) {
    if (status) status.textContent = "เครื่องนี้ไม่รองรับการดึงตำแหน่ง กรุณาวางลิงก์ Google Maps เอง";
    updateGpsAccuracyPanel(null, "failed");
    return;
  }

  if (status) status.textContent = "กำลังจับตำแหน่งให้แม่นขึ้น... กรุณารอสักครู่และเปิด GPS/Wi‑Fi";
  updateGpsAccuracyPanel(null, "checking");

  state.bestGpsPosition = null;

  let sampleCount = 0;
  let finished = false;

  function acceptPosition(position) {
    const { latitude, longitude, accuracy } = position.coords;
    sampleCount += 1;

    updateUserLiveLocation(latitude, longitude, accuracy);
    updateGpsAccuracyPanel(accuracy, "checking");

    if (!state.bestGpsPosition || (accuracy || 99999) < (state.bestGpsPosition.coords.accuracy || 99999)) {
      state.bestGpsPosition = position;
    }

    const best = state.bestGpsPosition;
    const bestAccuracy = best?.coords?.accuracy;
    const bestMessage = getAccuracyMessage(bestAccuracy);

    if (status && !finished) {
      status.textContent = `กำลังปรับตำแหน่ง... ได้ข้อมูล ${sampleCount} ครั้ง / ดีที่สุดตอนนี้: ${bestMessage}`;
    }

    if (!finished && accuracy && accuracy <= 20) {
      finishBestGps();
    }
  }

  function finishBestGps() {
    if (finished) return;
    finished = true;

    if (state.gpsImproveTimer) {
      clearTimeout(state.gpsImproveTimer);
      state.gpsImproveTimer = null;
    }

    const best = state.bestGpsPosition;
    if (!best) {
      if (status) status.textContent = "ยังจับตำแหน่งไม่ได้ กรุณาลองอีกครั้ง หรือวางลิงก์ Google Maps เอง";
      updateGpsAccuracyPanel(null, "failed");
      return;
    }

    const { latitude, longitude, accuracy } = best.coords;
    const lat = Number(latitude).toFixed(7);
    const lng = Number(longitude).toFixed(7);

    updateUserLiveLocation(latitude, longitude, accuracy);
    updateGpsAccuracyPanel(accuracy, "done");

    const message = getAccuracyMessage(accuracy);
    setSelectedLocation(lat, lng, `${message} หมุดสีฟ้าคือตำแหน่งลูกค้าปัจจุบัน ส่วนหมุดไฟคือจุดส่ง หากไม่ตรงให้ลากหมุดไฟไปตำแหน่งจริงก่อนกด “ยืนยันตำแหน่งนี้”`);

    mapReadyPromise.then(() => {
      if (state.map) {
        setSelectedLocation(lat, lng, `${message} หมุดสีฟ้าคือตำแหน่งลูกค้าปัจจุบัน ส่วนหมุดไฟคือจุดส่ง หากไม่ตรงให้ลากหมุดไฟไปตำแหน่งจริงก่อนกด “ยืนยันตำแหน่งนี้”`);
      }
    });
    startLiveUserLocation();
  }

  navigator.geolocation.getCurrentPosition(
    (position) => acceptPosition(position),
    (error) => {
      let message = "ไม่สามารถดึงตำแหน่งได้ กรุณาเปิด Location หรือวางลิงก์ Google Maps เอง";
      if (error.code === error.PERMISSION_DENIED) {
        message = "ลูกค้ายังไม่ได้อนุญาต Location กรุณากดอนุญาต หรือวางลิงก์ Google Maps เอง";
      }
      if (error.code === error.POSITION_UNAVAILABLE) {
        message = "เครื่องไม่สามารถหาตำแหน่งได้ตอนนี้ กรุณาเปิด GPS/Wi‑Fi หรือวางลิงก์ Google Maps เอง";
      }
      if (error.code === error.TIMEOUT) {
        message = "ใช้เวลาหาตำแหน่งนานเกินไป กรุณาลองอีกครั้ง หรือวางลิงก์ Google Maps เอง";
      }
      if (status) status.textContent = message;
      updateGpsAccuracyPanel(null, "failed");
    },
    { enableHighAccuracy: true, timeout: 18000, maximumAge: 0 }
  );

  const tempWatchId = navigator.geolocation.watchPosition(
    (position) => acceptPosition(position),
    () => {},
    { enableHighAccuracy: true, timeout: 18000, maximumAge: 0 }
  );

  state.gpsImproveTimer = setTimeout(() => {
    navigator.geolocation.clearWatch(tempWatchId);
    finishBestGps();
  }, 8500);
}

function setupReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function revealMenuCards() {
  requestAnimationFrame(() => {
    document.querySelectorAll(".menu-card").forEach(card => card.classList.add("is-visible"));
  });
}

function setFloatingCartOpen(isOpen) {
  const drawer = $("#floatingCartDrawer");
  const toggle = $("#floatingCartToggle");
  if (!drawer || !toggle) return;

  drawer.hidden = !isOpen;
  toggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("floating-cart-open", isOpen);
}

function clearCart() {
  state.cart = {};
  state.itemNotes = {};
  state.noteSelect = {};
  updateMenuQuantityBadges();
  renderCart();
}

function setOrderSubmitting(isSubmitting) {
  state.orderSubmitting = isSubmitting;
  [$("#sendOrderBtn"), $("#floatingSendOrderBtn")].forEach(button => {
    if (!button) return;
    button.classList.toggle("is-loading", isSubmitting);
    button.setAttribute("aria-busy", String(isSubmitting));
    if (isSubmitting) button.textContent = "กำลังตัด stock...";
  });
}

function openWhatsappOrder(total) {
  window.location.href = orderHref(total, { isValid: true });
}

async function handleSendOrderClick(event) {
  event.preventDefault();
  if (state.orderSubmitting) return;

  const validation = validateOrderForm();
  updateValidationBox(validation);
  updateFloatingValidationBox(validation);

  if (!validation.isValid) {
    setFloatingCartOpen(false);
    document.querySelector("#customer")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  saveCustomerMemory({ force: true });
  const ids = Object.keys(state.cart);
  const total = cartTotal(ids);

  try {
    setOrderSubmitting(true);
    await submitStockOrder(total);
    saveCustomerMemory({ force: true, silent: true });
    openWhatsappOrder(total);
  } catch (error) {
    const message = error?.message || "ส่งออเดอร์ไม่สำเร็จ กรุณาลองใหม่";
    updateStockStatus(message, "error");
    const failedValidation = {
      isValid: false,
      missing: [message],
      info: getCustomerInfo()
    };
    updateValidationBox(failedValidation);
    updateFloatingValidationBox(failedValidation);
    setFloatingCartOpen(true);
  } finally {
    setOrderSubmitting(false);
  }
}

$("#searchInput").addEventListener("input", (event) => {
  state.search = event.target.value;
  renderMenu();
});

$("#clearBtn").addEventListener("click", () => {
  clearCart();
});

$("#heroAddBtn").addEventListener("click", (event) => {
  const id = Number(event.currentTarget.dataset.id);
  if (id) addToCart(id, event.currentTarget);
});

$("#sendOrderBtn").addEventListener("click", handleSendOrderClick);

const floatingCartToggle = $("#floatingCartToggle");
if (floatingCartToggle) {
  floatingCartToggle.addEventListener("click", () => {
    const drawer = $("#floatingCartDrawer");
    setFloatingCartOpen(Boolean(drawer?.hidden));
  });
}

const floatingCartClose = $("#floatingCartClose");
if (floatingCartClose) floatingCartClose.addEventListener("click", () => setFloatingCartOpen(false));

const floatingCartBackdrop = $("#floatingCartBackdrop");
if (floatingCartBackdrop) floatingCartBackdrop.addEventListener("click", () => setFloatingCartOpen(false));

const floatingClearButton = $("#floatingClearBtn");
if (floatingClearButton) floatingClearButton.addEventListener("click", clearCart);

const floatingSendOrderButton = $("#floatingSendOrderBtn");
if (floatingSendOrderButton) floatingSendOrderButton.addEventListener("click", handleSendOrderClick);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setFloatingCartOpen(false);
});

window.addEventListener("pagehide", () => saveCustomerMemory({ force: true, silent: true }));
window.addEventListener("beforeunload", () => saveCustomerMemory({ force: true, silent: true }));
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    saveCustomerMemory({ force: true, silent: true });
  }
});

CUSTOMER_MEMORY_FIELD_SELECTORS.forEach(selector => {
  const element = $(selector);
  if (!element) return;

  ["input", "change", "blur"].forEach(eventName => {
    element.addEventListener(eventName, () => {
      saveCustomerMemory({ force: eventName !== "input" });
      renderCart();
    });
  });
});

const clearSavedCustomerButton = $("#clearSavedCustomerBtn");
if (clearSavedCustomerButton) clearSavedCustomerButton.addEventListener("click", clearCustomerMemory);

const mapInput = $("#mapLink");
if (mapInput) {
  mapInput.addEventListener("input", () => {
    setLocationConfirmed(false);
    updateMapPreview(mapInput.value);
    saveCustomerMemory({ force: true });
    renderCart();
  });
  ["change", "blur"].forEach(eventName => {
    mapInput.addEventListener(eventName, () => {
      saveCustomerMemory({ force: true });
      renderCart();
    });
  });
}

document.querySelectorAll('input[name="orderType"]').forEach(input => {
  input.addEventListener("change", () => {
    if (input.checked && input.value === "จัดส่งเดลิเวอรี") {
      ensureDeliveryMap();
    }
    saveCustomerMemory({ force: true });
    renderCart();
  });
});


const placeSearchButton = $("#placeSearchBtn");
if (placeSearchButton) placeSearchButton.addEventListener("click", searchPlace);

const placeSearchInput = $("#placeSearchInput");
if (placeSearchInput) {
  placeSearchInput.addEventListener("focus", () => ensureDeliveryMap());
  placeSearchInput.addEventListener("input", schedulePlaceAutocomplete);
  placeSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchPlace();
    }
  });
}


document.querySelectorAll(".map-mode-btn").forEach(button => {
  button.addEventListener("click", async () => {
    const mode = button.dataset.mapMode || "satellite";
    setMapMode(mode);
    await ensureDeliveryMap();
    setMapMode(mode);
  });
});

const locationButton = $("#useLocationBtn");
if (locationButton) locationButton.addEventListener("click", useCurrentLocation);

const confirmLocationButton = $("#confirmLocationBtn");
if (confirmLocationButton) {
  confirmLocationButton.addEventListener("click", () => {
    const mapInput = $("#mapLink");
    if (!mapInput?.value.trim()) return;
    setLocationConfirmed(true);
    saveCustomerMemory({ force: true });
  });
}

const clearLocationButton = $("#clearLocationBtn");
if (clearLocationButton) {
  clearLocationButton.addEventListener("click", () => {
    const mapInput = $("#mapLink");
    if (mapInput) mapInput.value = "";
    const placeInput = $("#placeSearchInput");
    const placeResults = $("#placeResults");
    if (placeInput) placeInput.value = "";
    if (placeResults) {
      placeResults.className = "place-results";
      placeResults.innerHTML = "";
    }
    setLocationConfirmed(false);
    updateMapPreview("");
    const status = $("#locationStatus");
    if (status) status.textContent = "ล้าง Location แล้ว กรุณากดใช้ตำแหน่งปัจจุบัน หรือวางลิงก์ Google Maps ใหม่";
    saveCustomerMemory({ force: true });
    renderCart();
  });
}

restoreCustomerMemory();
updateMapPreview($("#mapLink")?.value || "");


document.querySelectorAll(".currency-btn").forEach(button => {
  button.addEventListener("click", () => {
    state.selectedCurrency = button.dataset.currency || "LAK";
    document.querySelectorAll(".currency-btn").forEach(btn => {
      const active = btn.dataset.currency === state.selectedCurrency;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
    renderMenu();
    saveCustomerMemory({ force: true });
    renderCart();
  });
});

initRestaurantInfo();
initSoundToggle();
renderTabs();
renderMenu();
renderCart();
setupReveal();
startHeroSlider();
loadLiveStock();

if (isStockApiEnabled()) {
  window.setInterval(() => loadLiveStock({ silent: true }), Number(appConfig().stockRefreshMs || 45000));
}


if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // Service worker is optional. The website still works if registration fails.
    });
  });
}
