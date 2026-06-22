// ================================
// เธเธธเธ”เธ—เธตเน 1: เนเธเนเธเนเธญเธกเธนเธฅเธฃเนเธฒเธเธเธฃเธดเธเธ•เธฃเธเธเธตเน
// phone เนเธชเนเน€เธเธฃเธทเนเธญเธเธซเธกเธฒเธข + เนเธ”เน เนเธ•เน whatsapp เธ•เนเธญเธเนเธเนเธฃเธซเธฑเธชเธเธฃเธฐเน€เธ—เธจเนเธฅเธฐเธ•เธฑเธ” 0 เธซเธเนเธฒเธญเธญเธ เน€เธเนเธ 02099469995 = 8562099469995
// ================================
const restaurant = {
  name: "เปเบเปเปเปเบเบปเบง",
  googleMapName: "เบฎเปเบฒเบ เปเบเปเปเปเบเบปเบง",
  phone: "+8562099469995",
  whatsapp: "8562099469995",
  openHours: "10:30 - 22:00",
  location: "Vientiane, Laos",
  storeLat: 17.9822450,
  storeLng: 102.6284250,
  storeMapsUrl: "https://www.google.com/maps/search/?api=1&query=%E0%BA%AE%E0%BB%89%E0%BA%B2%E0%BA%99%20%E0%BB%84%E0%BA%9F%E0%BB%84%E0%BB%9D%E0%BB%89%E0%BA%84%E0%BA%BB%E0%BA%A7",
  deliveryNote: "เธเนเธฒเธชเนเธเธเธดเธ”เธ•เธฒเธกเธฃเธฐเธขเธฐเธ—เธฒเธ / เธฃเนเธฒเธเธเธฐเธขเธทเธเธขเธฑเธเธญเธตเธเธเธฃเธฑเนเธ"
};

// ================================
// เธเธธเธ”เธ—เธตเน 2: เนเธเนเน€เธกเธเธน เธฃเธฒเธเธฒ เนเธฅเธฐเธฃเธนเธเธญเธฒเธซเธฒเธฃเธเธฃเธดเธเธ•เธฃเธเธเธตเน
// image เนเธเนเนเธ”เน 2 เนเธเธ:
// 1) เธฃเธนเธเนเธเนเธเธฅเน€เธ”เธญเธฃเน images เน€เธเนเธ image: "images/krapao.jpg"
// 2) เธฅเธดเธเธเนเธฃเธนเธเธญเธญเธเนเธฅเธเน เน€เธเนเธ image: "https://..."
// id เธซเนเธฒเธกเธเนเธณเธเธฑเธ เนเธฅเธฐ price เนเธกเนเธ•เนเธญเธเนเธชเน comma เน€เธเนเธ 60000
// theme เธเธทเธญเธชเธต animation เธเธญเธเน€เธกเธเธนเนเธเธฐเธเธณ เธ–เนเธฒเธขเธฑเธเนเธกเนเธ–เธเธฑเธ” เธเธฅเนเธญเธขเนเธงเนเนเธเธเน€เธ”เธดเธกเนเธ”เน
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

// เธซเธกเธฒเธขเน€เธซเธ•เธธ: เธฃเธฒเธเธฒเนเธเธฃเธฐเธเธเธ•เธฑเนเธเธ•เนเธเน€เธเนเธ Kip.
// THB / USD เน€เธเนเธเธฃเธฒเธเธฒเนเธชเธ”เธเนเธ”เธขเธเธฃเธฐเธกเธฒเธ“เน€เธ—เนเธฒเธเธฑเนเธ เธชเธฒเธกเธฒเธฃเธ–เนเธเน rateFromKip เนเธ”เนเนเธเนเธเธฅเน app.js.

const menuItems = [
  {
    id: 1,
    name: "เธเนเธฒเธงเธเธฐเน€เธเธฃเธฒเธซเธกเธน + เนเธเนเธ”เธฒเธง",
    category: "เธเนเธฒเธงเนเธเนเธฃเธ",
    price: 60000,
    description: "เธเธฐเน€เธเธฃเธฒเธซเธกเธนเธฃเธชเธเธฑเธ” เธเธฑเธ”เนเธเนเธฃเธ เน€เธชเธดเธฃเนเธเธเธฃเนเธญเธกเธเนเธฒเธงเธซเธญเธกเนเธฅเธฐเนเธเนเธ”เธฒเธง",
    image: "images/krapao-moo-kai-dao.jpg",
    tag: "เธเธฒเธขเธ”เธต",
    theme: { accent: "#ffb636", fire: "#e8431f", glow: "rgba(232,67,31,.30)", deep: "#130806" }
  },
  {
    id: 2,
    name: "เธเนเธฒเธงเนเธเนเน€เธ—เธญเธฃเธดเธขเธฒเธเธด",
    category: "เธเนเธฒเธงเนเธเนเธฃเธ",
    price: 55000,
    description: "เนเธเนเธเธธเนเธก เธเธญเธชเน€เธ—เธญเธฃเธดเธขเธฒเธเธด เธซเธญเธกเธซเธงเธฒเธเน€เธเนเธกเธเธณเธฅเธฑเธเธ”เธต",
    image: "images/teriyaki-chicken.jpg",
    tag: "เธเธตเนเธเธธเนเธ",
    theme: { accent: "#f6c85f", fire: "#2dc071", glow: "rgba(45,192,113,.28)", deep: "#06140d" }
  },
  {
    id: 3,
    name: "เธเนเธฒเธงเธซเธเนเธฒเนเธเนเธกเธดเนเธชเธฐ",
    category: "เธเนเธฒเธงเนเธเนเธฃเธ",
    price: 58000,
    description: "เนเธเนเธซเธกเธฑเธเธกเธดเนเธชเธฐ เธขเนเธฒเธเธซเธญเธก เธเธดเธเธเนเธฒเธข เธญเธดเนเธกเธเธญเธ”เธต",
    image: "images/miso-chicken-rice.jpg",
    tag: "เธชเธธเธเธ เธฒเธ",
    theme: { accent: "#ffd166", fire: "#4cc9f0", glow: "rgba(76,201,240,.22)", deep: "#07101a" }
  },
  {
    id: 4,
    name: "เน€เธเธทเนเธญเน€เธชเธทเธญเธฃเนเธญเธเนเธซเน New Zealand",
    category: "เน€เธกเธเธนเธเธดเน€เธจเธฉ",
    price: 95000,
    description: "เน€เธเธทเนเธญเธซเธญเธก เธขเนเธฒเธเธเนเธณ เน€เธชเธดเธฃเนเธเธเธฃเนเธญเธกเธเนเธณเธเธดเนเธกเนเธเนเธงเธชเนเธ•เธฅเนเนเธเนเธซเธกเนเธเธฃเธฑเธง",
    image: "images/new-zealand-steak.jpg",
    tag: "เธเธฃเธตเน€เธกเธตเธขเธก",
    theme: { accent: "#ffb636", fire: "#a4161a", glow: "rgba(164,22,26,.34)", deep: "#120707" }
  },
  {
    id: 5,
    name: "เธเนเธฒเธงเธซเธเนเธฒเนเธเธฅเธกเธญเธเธขเนเธฒเธ",
    category: "เน€เธกเธเธนเธเธดเน€เธจเธฉ",
    price: 110000,
    description: "เนเธเธฅเธกเธญเธเธขเนเธฒเธเน€เธเธฅเธทเธญ เธซเธญเธกเธเธฃเธดเธเนเธ—เธข เน€เธชเธดเธฃเนเธเธเธฃเนเธญเธกเธเนเธฒเธงเนเธฅเธฐเธเธฑเธเธชเธ”",
    image: "images/salmon-rice.jpg",
    tag: "เนเธเธฐเธเธณ",
    theme: { accent: "#ffcf70", fire: "#ff6b35", glow: "rgba(255,107,53,.25)", deep: "#140b06" }
  },
  {
    id: 6,
    name: "เธชเธฅเธฑเธ”เนเธเนเธญเธ",
    category: "เธชเธธเธเธ เธฒเธ",
    price: 65000,
    description: "เธเธฑเธเธชเธ” เนเธเนเธญเธ เธเธญเธชเน€เธเธฒ เน เน€เธซเธกเธฒเธฐเธเธฑเธเธเธเธฃเธฑเธเธชเธธเธเธ เธฒเธ",
    image: "images/roasted-chicken-salad.jpg",
    tag: "เธเธฅเธตเธ",
    theme: { accent: "#b7ef8a", fire: "#2dc071", glow: "rgba(45,192,113,.25)", deep: "#071407" }
  },
  {
    id: 7,
    name: "Caesar Salad",
    category: "เธชเธธเธเธ เธฒเธ",
    price: 70000,
    description: "เธเธฑเธเธเธฃเธญเธ เธเธญเธชเธเธตเธเธฒเธฃเน เธเธเธกเธเธฑเธเธเธฃเธญเธ เนเธฅเธฐเนเธเธฃเธ•เธตเธเนเธเนเธ",
    image: "images/caesar-salad.jpg",
    tag: "เธชเธ”เนเธซเธกเน",
    theme: { accent: "#d9ed92", fire: "#76c893", glow: "rgba(118,200,147,.24)", deep: "#07150c" }
  },
  {
    id: 8,
    name: "Sโ€more Brownie Cookie",
    category: "เธเธญเธเธซเธงเธฒเธ",
    price: 35000,
    description: "เธเธธเธเธเธตเนเธเธฃเธฒเธงเธเธตเนเน€เธเนเธกเธเนเธ เธกเธฒเธฃเนเธเน€เธกเธฅเนเธฅเธงเน เนเธฅเธฐเธเธดเธชเธเธดเธ•เธเธฃเธญเธ",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
    tag: "เธเธญเธเธซเธงเธฒเธ",
    theme: { accent: "#f5c7a9", fire: "#8b5e34", glow: "rgba(139,94,52,.28)", deep: "#130c08" }
  },
  {
    id: 9,
    name: "เธเธฒเน€เธขเนเธเนเธเนเธซเธกเน",
    category: "เน€เธเธฃเธทเนเธญเธเธ”เธทเนเธก",
    price: 20000,
    description: "เธเธฒเน€เธขเนเธเธซเธญเธก เธซเธงเธฒเธเธกเธฑเธเธเธณเธฅเธฑเธเธ”เธต เธ”เธฑเธเน€เธเนเธ”เธซเธฅเธฑเธเธเธฒเธเนเธเนเธฃเธ",
    image: "images/thai-tea.jpg",
    tag: "เน€เธขเนเธ",
    theme: { accent: "#ffd166", fire: "#f77f00", glow: "rgba(247,127,0,.25)", deep: "#130b03" }
  }
];

const state = {
  category: "เธ—เธฑเนเธเธซเธกเธ”",
  search: "",
  cart: {},
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
    message: "เธฃเนเธฒเธเน€เธเธดเธ”เธฃเธฑเธเธญเธญเน€เธ”เธญเธฃเนเนเธฅเนเธง"
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
    message: store.message || (isOpen ? "เธฃเนเธฒเธเน€เธเธดเธ”เธฃเธฑเธเธญเธญเน€เธ”เธญเธฃเนเนเธฅเนเธง" : "เธฃเนเธฒเธเธเธดเธ”เธฃเธฑเธเธญเธญเน€เธ”เธญเธฃเนเธเธฑเนเธงเธเธฃเธฒเธง")
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
  return Math.max(0, remaining - (state.cart[id] || 0));
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
    updateStockStatus("Stock เธขเธฑเธเนเธกเนเนเธ”เนเน€เธเธทเนเธญเธกเธซเธฅเธฑเธเธเนเธฒเธ เธฃเนเธฒเธเธชเธฒเธกเธฒเธฃเธ–เธเธฒเธขเนเธ”เนเธ—เธธเธเน€เธกเธเธนเธ•เธฒเธกเธเธเธ•เธด");
    return;
  }

  state.stock.enabled = true;
  state.stock.loading = true;
  state.stock.error = "";
  if (!silent) updateStockStatus("เธเธณเธฅเธฑเธเนเธซเธฅเธ” stock เธฅเนเธฒเธชเธธเธ”เธเธฒเธเธซเธฅเธฑเธเธเนเธฒเธ...", "loading");

  try {
    const response = await fetch(stockUrlWithParams({
      action: "stock",
      token: stockApiToken()
    }), {
      method: "GET",
      cache: "no-store"
    });
    const result = await response.json();
    if (!result.ok) throw new Error(result.message || "เนเธซเธฅเธ” stock เนเธกเนเธชเธณเน€เธฃเนเธ");

    state.stock.items = normalizeStockItems(result.items || result.stock);
    state.store = normalizeStoreStatus(result.store);
    state.stock.lastLoadedAt = Date.now();
    if (isStoreClosed()) {
      updateStockStatus(state.store.message || "เธฃเนเธฒเธเธเธดเธ”เธฃเธฑเธเธญเธญเน€เธ”เธญเธฃเนเธเธฑเนเธงเธเธฃเธฒเธง", "error");
    } else {
      updateStockStatus("เธฃเนเธฒเธเน€เธเธดเธ”เธญเธขเธนเน: stock เธญเธญเธเนเธฅเธเน เน€เธกเธเธนเธซเธกเธ”เธเธฐเธเธดเธ”เธเธฒเธขเธญเธฑเธ•เนเธเธกเธฑเธ•เธด", "ready");
    }
    renderMenu();
    renderCart();
  } catch (error) {
    state.stock.error = error?.message || "เนเธซเธฅเธ” stock เนเธกเนเธชเธณเน€เธฃเนเธ";
    updateStockStatus("เนเธซเธฅเธ” stock เนเธกเนเธชเธณเน€เธฃเนเธ เธฃเธฐเธเธเธขเธฑเธเนเธชเธ”เธเน€เธกเธเธนเน€เธ”เธดเธก เธเธฃเธธเธ“เธฒเธ•เธฃเธงเธ URL เธซเธฅเธฑเธเธเนเธฒเธ", "error");
  } finally {
    state.stock.loading = false;
  }
}

function stockValidationMessages() {
  if (isStoreClosed()) return [state.store.message || "เธฃเนเธฒเธเธเธดเธ”เธฃเธฑเธเธญเธญเน€เธ”เธญเธฃเนเธเธฑเนเธงเธเธฃเธฒเธง"];
  if (!state.stock.enabled) return [];

  return Object.keys(state.cart).map(Number).reduce((messages, id) => {
    const item = menuItems.find(menu => menu.id === id);
    const remaining = getRemainingStock(id);
    if (!item || remaining === null) return messages;

    if (remaining <= 0) {
      messages.push(`${item.name} เธเธฒเธขเธซเธกเธ”เนเธฅเนเธง`);
    } else if (state.cart[id] > remaining) {
      messages.push(`${item.name} เน€เธซเธฅเธทเธญ ${remaining} เธเธธเธ” เธเธฃเธธเธ“เธฒเธฅเธ”เธเธณเธเธงเธ`);
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
    items: Object.keys(state.cart).map(id => {
      const item = menuItems.find(menu => menu.id === Number(id));
      return {
        id: Number(id),
        name: item?.name || `Item ${id}`,
        qty: state.cart[id],
        priceKip: item?.price || 0,
        subtotalKip: (item?.price || 0) * state.cart[id]
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
    throw new Error(result.message || "Stock เนเธกเนเธเธญเธชเธณเธซเธฃเธฑเธเธญเธญเน€เธ”เธญเธฃเนเธเธตเน");
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
  const categories = ["เธ—เธฑเนเธเธซเธกเธ”", ...new Set(menuItems.map(item => item.category))];
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
    const matchCategory = state.category === "เธ—เธฑเนเธเธซเธกเธ”" || item.category === state.category;
    const matchSearch = !keyword || [item.name, item.category, item.description].join(" ").toLowerCase().includes(keyword);
    return matchCategory && matchSearch;
  });
}

function renderMenu() {
  const items = filteredItems();
  if (!items.length) {
    $("#menuGrid").innerHTML = `<div class="order-items empty">เนเธกเนเธเธเน€เธกเธเธนเธ—เธตเนเธเนเธเธซเธฒ</div>`;
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
      ? "เธฃเนเธฒเธเธเธดเธ”"
      : soldOut
      ? "เธเธฒเธขเธซเธกเธ”เนเธฅเนเธง"
      : remaining !== null
        ? `เน€เธซเธฅเธทเธญ ${remaining} เธเธธเธ”`
        : "เธเธฃเนเธญเธกเธเธฒเธข";
    const tapText = storeClosed ? "เธฃเนเธฒเธเธเธดเธ”เธฃเธฑเธเธญเธญเน€เธ”เธญเธฃเน" : soldOut ? "เธเธดเธ”เธเธฒเธขเธญเธฑเธ•เนเธเธกเธฑเธ•เธด" : "เนเธ•เธฐเธฃเธนเธเน€เธเธทเนเธญเน€เธฅเธทเธญเธ";
    const disabledAttr = unavailable ? " disabled aria-disabled=\"true\"" : "";

    return `
      <article class="menu-card${stockClass}" style="transition-delay:${Math.min(index * 55, 330)}ms">
        <button type="button" class="menu-image image-add-trigger${selectedClass}" data-id="${item.id}" aria-label="${unavailable ? `${item.name} เธเธดเธ”เธเธฒเธขเธญเธขเธนเน` : `เน€เธฅเธทเธญเธ ${item.name}`}"${disabledAttr}>
          <img src="${imageSrc}" alt="${item.name}" width="520" height="300" loading="${loading}" decoding="async" fetchpriority="low" referrerpolicy="no-referrer" />
          <span class="badge">${item.tag}</span>
          <span class="stock-badge${stockClass}">${stockText}</span>
          <span class="menu-quantity-badge${quantityClass}" data-menu-qty="${item.id}" aria-label="เธเธณเธเธงเธเธ—เธตเนเน€เธฅเธทเธญเธ">${quantity}</span>
        </button>
        <div class="menu-body">
          <h3>${item.name}</h3>
          <p class="desc">${item.description}</p>
        <div class="card-bottom">
            <span class="price">${money(item.price)}</span>
            <span class="tap-note">${tapText}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".image-add-trigger").forEach(trigger => {
    trigger.addEventListener("click", (event) => addToCart(Number(trigger.dataset.id), event.currentTarget));
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
    const quantity = state.cart[id] || 0;
    const soldOut = isStoreClosed() || isItemSoldOut(id);
    const badge = trigger.querySelector(".menu-quantity-badge");

    trigger.classList.toggle("is-selected", quantity > 0);
    trigger.disabled = soldOut;
    trigger.setAttribute("aria-disabled", String(soldOut));
    trigger.setAttribute("aria-label", quantity > 0
      ? `เน€เธฅเธทเธญเธเน€เธเธดเนเธก ${quantity} เธเธดเนเธเนเธฅเนเธง`
      : soldOut ? "เน€เธกเธเธนเธเธตเนเธเธฒเธขเธซเธกเธ”เนเธฅเนเธง" : "เน€เธฅเธทเธญเธเน€เธกเธเธนเธเธตเน");

    if (!badge) return;
    badge.textContent = String(quantity);
    badge.classList.toggle("is-visible", quantity > 0);
    badge.setAttribute("aria-label", quantity > 0 ? `เน€เธฅเธทเธญเธเนเธฅเนเธง ${quantity} เธเธดเนเธ` : "เธขเธฑเธเนเธกเนเนเธ”เนเน€เธฅเธทเธญเธ");
  });
}

function addToCart(id, sourceButton) {
  if (isStoreClosed()) {
    updateStockStatus(state.store.message || "เธฃเนเธฒเธเธเธดเธ”เธฃเธฑเธเธญเธญเน€เธ”เธญเธฃเนเธเธฑเนเธงเธเธฃเธฒเธง", "error");
    renderCart();
    return;
  }

  if (isItemSoldOut(id) || availableToAdd(id) <= 0) {
    const item = menuItems.find(menu => menu.id === id);
    updateStockStatus(`${item?.name || "เน€เธกเธเธนเธเธตเน"} เธเธฒเธขเธซเธกเธ”เนเธฅเนเธงเธซเธฃเธทเธญเน€เธซเธฅเธทเธญเนเธกเนเธเธญ`, "error");
    renderMenu();
    renderCart();
    return;
  }

  state.cart[id] = (state.cart[id] || 0) + 1;
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

function updateQty(id, change) {
  if (change > 0 && isStoreClosed()) {
    updateStockStatus(state.store.message || "เธฃเนเธฒเธเธเธดเธ”เธฃเธฑเธเธญเธญเน€เธ”เธญเธฃเนเธเธฑเนเธงเธเธฃเธฒเธง", "error");
    renderCart();
    return;
  }

  if (change > 0 && availableToAdd(id) <= 0) {
    const item = menuItems.find(menu => menu.id === id);
    updateStockStatus(`${item?.name || "เน€เธกเธเธนเธเธตเน"} เน€เธซเธฅเธทเธญเนเธกเนเธเธญเธชเธณเธซเธฃเธฑเธเน€เธเธดเนเธกเนเธฅเนเธง`, "error");
    renderCart();
    return;
  }

  state.cart[id] = (state.cart[id] || 0) + change;
  if (state.cart[id] <= 0) delete state.cart[id];
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
      setCustomerMemoryStatus("browser เธเธตเนเนเธกเนเธญเธเธธเธเธฒเธ•เนเธซเนเน€เธงเนเธเธเธณเธเนเธญเธกเธนเธฅเธญเธฑเธ•เนเธเธกเธฑเธ•เธด เธ–เนเธฒเนเธเนเนเธซเธกเธ”เธชเนเธงเธเธ•เธฑเธง/Incognito เธเนเธญเธกเธนเธฅเธญเธฒเธเธซเธฒเธข");
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
      setCustomerMemoryStatus("เธฃเธฐเธเธเธเธณเธเนเธญเธกเธนเธฅเธฅเธนเธเธเนเธฒเนเธงเนเนเธ browser เธเธตเนเนเธฅเนเธง เธฃเธญเธเธซเธเนเธฒเธเธฐเน€เธ•เธดเธกเนเธซเนเธญเธฑเธ•เนเธเธกเธฑเธ•เธด");
    }
  } catch (error) {
    if (!silent) {
      setCustomerMemoryStatus("browser เธเธตเนเนเธกเนเธญเธเธธเธเธฒเธ•เนเธซเนเธเธณเธเนเธญเธกเธนเธฅเธญเธฑเธ•เนเธเธกเธฑเธ•เธด");
    }
  }
}

function restoreCustomerMemory() {
  if (!canUseCustomerMemory()) {
    setCustomerMemoryStatus("browser เธเธตเนเนเธกเนเธญเธเธธเธเธฒเธ•เนเธซเนเน€เธงเนเธเธเธณเธเนเธญเธกเธนเธฅเธญเธฑเธ•เนเธเธกเธฑเธ•เธด เธ–เนเธฒเนเธเนเนเธซเธกเธ”เธชเนเธงเธเธ•เธฑเธง/Incognito เธเนเธญเธกเธนเธฅเธญเธฒเธเธซเธฒเธข");
    return;
  }

  const saved = readCustomerMemory();
  if (!saved) {
    setCustomerMemoryStatus("เธเนเธญเธกเธนเธฅเธฅเธนเธเธเนเธฒเธเธฐเธ–เธนเธเธเธณเนเธงเนเนเธ browser เธเธตเนเธซเธฅเธฑเธเธเธฒเธเน€เธฃเธดเนเธกเธเธฃเธญเธ");
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

  setCustomerMemoryStatus("เน€เธ•เธดเธกเธเนเธญเธกเธนเธฅเธเธฒเธเธเธฃเธฑเนเธเธเนเธญเธเนเธซเนเนเธฅเนเธง เธชเธฒเธกเธฒเธฃเธ–เนเธเนเนเธเนเธ”เนเธ•เธฒเธกเธเธเธ•เธด");
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

  const defaultOrderType = document.querySelector('input[name="orderType"][value="เธเธฑเนเธเธ—เธฒเธเธ—เธตเนเธฃเนเธฒเธ"]');
  if (defaultOrderType) defaultOrderType.checked = true;

  setLocationConfirmed(false);
  updateMapPreview("");
  setCustomerMemoryStatus("เธฅเนเธฒเธเธเนเธญเธกเธนเธฅเธ—เธตเนเธเธณเนเธงเนเนเธฅเนเธง เธฅเธนเธเธเนเธฒเธชเธฒเธกเธฒเธฃเธ–เธเธฃเธญเธเนเธซเธกเนเนเธ”เน");
  renderCart();
}

function validateOrderForm() {
  const info = getCustomerInfo();
  const ids = Object.keys(state.cart);
  const missing = [];

  if (!ids.length) missing.push("เน€เธฅเธทเธญเธเธฃเธฒเธขเธเธฒเธฃเธญเธฒเธซเธฒเธฃเธญเธขเนเธฒเธเธเนเธญเธข 1 เธฃเธฒเธขเธเธฒเธฃ");
  if (!info.customerName) missing.push("เธเธฃเธญเธเธเธทเนเธญเธฅเธนเธเธเนเธฒ");
  if (!info.customerPhone) missing.push("เธเธฃเธญเธเน€เธเธญเธฃเนเนเธ—เธฃเธ•เธดเธ”เธ•เนเธญ");
  if (info.customerPhone && info.customerPhone.replace(/\D/g, "").length < 8) {
    missing.push("เธ•เธฃเธงเธเธชเธญเธเน€เธเธญเธฃเนเนเธ—เธฃเนเธซเนเธ–เธนเธเธ•เนเธญเธ");
  }
  if (!info.orderType) missing.push("เน€เธฅเธทเธญเธเธฃเธนเธเนเธเธเธฃเธฑเธเธญเธฒเธซเธฒเธฃ");

  if (info.orderType === "เธเธฑเนเธเธ—เธฒเธเธ—เธตเนเธฃเนเธฒเธ") {
    if (!info.tableText) missing.push("เธเธฃเธญเธเน€เธฅเธเนเธ•เนเธฐ");
  }

  if (info.orderType === "เธฃเธฑเธเน€เธญเธเธซเธเนเธฒเธฃเนเธฒเธ") {
    if (!info.tableText) missing.push("เธเธฃเธญเธเธเธทเนเธญ/เธเธธเธ”เธฃเธฑเธเธญเธฒเธซเธฒเธฃเธซเธเนเธฒเธฃเนเธฒเธ");
  }

  if (info.orderType === "เธเธฑเธ”เธชเนเธเน€เธ”เธฅเธดเน€เธงเธญเธฃเธต") {
    if (!info.deliveryAddress) missing.push("เธเธฃเธญเธเธชเธ–เธฒเธเธ—เธตเนเธเธฑเธ”เธชเนเธ / เธ—เธตเนเธญเธขเธนเน");
    if (!info.mapLink) missing.push("เนเธชเน Location เธซเธฃเธทเธญเธเธ”เนเธเนเธ•เธณเนเธซเธเนเธเธเธฑเธเธเธธเธเธฑเธ");
    if (info.mapLink && !state.locationConfirmed) missing.push("เธเธ”เธเธธเนเธกเธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธเธเธตเนเธซเธฅเธฑเธเธ•เธฃเธงเธเธชเธญเธเธซเธกเธธเธ”เนเธเนเธเธเธ—เธตเน");
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
    box.innerHTML = "เธเนเธญเธกเธนเธฅเธเธฃเธเนเธฅเนเธง เธชเธฒเธกเธฒเธฃเธ–เธเธ”เธขเธทเธเธขเธฑเธเธญเธญเน€เธ”เธญเธฃเนเนเธ”เน";
    button.classList.remove("is-disabled");
    button.setAttribute("aria-disabled", "false");
    button.textContent = "เธขเธทเธเธขเธฑเธเธญเธญเน€เธ”เธญเธฃเน / เธชเนเธเน€เธเนเธฒ WhatsApp เธฃเนเธฒเธ";
  } else {
    box.className = "validation-box";
    box.innerHTML = `
      <strong>เธเธฃเธญเธเธเนเธญเธกเธนเธฅเนเธซเนเธเธฃเธเธเนเธญเธเธขเธทเธเธขเธฑเธเธญเธญเน€เธ”เธญเธฃเน</strong>
      <ul>${validation.missing.map(item => `<li>${item}</li>`).join("")}</ul>
    `;
    button.classList.add("is-disabled");
    button.setAttribute("aria-disabled", "true");
    button.textContent = "เธเธฃเธญเธเธเนเธญเธกเธนเธฅเนเธซเนเธเธฃเธเธเนเธญเธเธขเธทเธเธขเธฑเธเธญเธญเน€เธ”เธญเธฃเน";
  }
}

function updateFloatingValidationBox(validation) {
  const box = $("#floatingValidation");
  const button = $("#floatingSendOrderBtn");
  if (!box || !button) return;

  if (validation.isValid) {
    box.className = "validation-box is-ready";
    box.innerHTML = "เธเนเธญเธกเธนเธฅเธเธฃเธเนเธฅเนเธง เธชเธฒเธกเธฒเธฃเธ–เธชเนเธเธญเธญเน€เธ”เธญเธฃเนเนเธ”เน";
    button.classList.remove("is-disabled");
    button.setAttribute("aria-disabled", "false");
    button.textContent = "เธชเนเธเธญเธญเน€เธ”เธญเธฃเนเน€เธเนเธฒ WhatsApp";
  } else {
    box.className = "validation-box";
    box.innerHTML = `
      <strong>เธขเธฑเธเธชเนเธเนเธกเนเนเธ”เน</strong>
      <ul>${validation.missing.map(item => `<li>${item}</li>`).join("")}</ul>
    `;
    button.classList.add("is-disabled");
    button.setAttribute("aria-disabled", "true");
    button.textContent = "เธเธฃเธญเธเธเนเธญเธกเธนเธฅเนเธซเนเธเธฃเธเธเนเธญเธเธชเนเธ";
  }
}

function orderRowsTemplate(ids, rowClass = "order-row", controlsClass = "qty-controls") {
  return ids.map(id => {
    const item = menuItems.find(menu => menu.id === id);
    if (!item) return "";

    const qty = state.cart[id];
    const subtotal = item.price * qty;
    return `
      <div class="${rowClass}">
        <strong>${item.name}</strong>
        <div class="${controlsClass}">
          <button data-action="minus" data-id="${id}" type="button">โ’</button>
          <span>${qty}</span>
          <button data-action="plus" data-id="${id}" type="button">+</button>
        </div>
        <span>${money(subtotal)}</span>
      </div>
    `;
  }).join("");
}

function bindQuantityButtons(selector) {
  document.querySelectorAll(selector).forEach(button => {
    button.addEventListener("click", (event) => {
      const change = button.dataset.action === "plus" ? 1 : -1;
      updateQty(Number(button.dataset.id), change);
      if (change > 0) igniteAddEffect(event.currentTarget);
    });
  });
}

function cartTotal(ids) {
  return ids.reduce((total, id) => {
    const item = menuItems.find(menu => menu.id === id);
    return total + (item ? item.price * state.cart[id] : 0);
  }, 0);
}

function cartCount(ids) {
  return ids.reduce((total, id) => total + (state.cart[id] || 0), 0);
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
  if (summary) summary.textContent = count ? `${count} เธฃเธฒเธขเธเธฒเธฃเนเธเธญเธญเน€เธ”เธญเธฃเน` : "เธขเธฑเธเนเธกเนเธกเธตเธฃเธฒเธขเธเธฒเธฃ";
  if (barTotal) barTotal.textContent = money(total);
  if (drawerTotal) drawerTotal.textContent = money(total);
  if (floatingCart) floatingCart.classList.toggle("has-items", count > 0);

  if (itemsBox) {
    if (!ids.length) {
      itemsBox.className = "floating-order-items empty";
      itemsBox.textContent = "เธขเธฑเธเนเธกเนเธกเธตเธฃเธฒเธขเธเธฒเธฃเธ—เธตเนเน€เธฅเธทเธญเธ";
    } else {
      itemsBox.className = "floating-order-items";
      itemsBox.innerHTML = orderRowsTemplate(ids, "floating-order-row", "floating-qty-controls");
      bindQuantityButtons(".floating-qty-controls button");
    }
  }

  updateFloatingValidationBox(validation);
  if (sendButton) sendButton.href = orderHref(total, validation);
}

function renderCart() {
  const ids = Object.keys(state.cart).map(Number);
  const orderItems = $("#orderItems");
  const total = cartTotal(ids);
  const validation = validateOrderForm();

  if (!ids.length) {
    orderItems.className = "order-items empty";
    orderItems.textContent = "เธขเธฑเธเนเธกเนเธกเธตเธฃเธฒเธขเธเธฒเธฃเธ—เธตเนเน€เธฅเธทเธญเธ";
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

  updateValidationBox(validation);
  updateFloatingCart(ids, total, validation);

  $("#sendOrderBtn").href = orderHref(total, validation);
}

function buildOrderText(total) {
  const info = getCustomerInfo();

  const lines = [
    `เธชเธงเธฑเธชเธ”เธตเธเธฃเธฑเธ/เธเนเธฐ เธ•เนเธญเธเธเธฒเธฃเธชเธฑเนเธเธญเธฒเธซเธฒเธฃเธเธฒเธ ${restaurant.name}`,
    "",
    "เธเนเธญเธกเธนเธฅเธฅเธนเธเธเนเธฒ",
    `เธเธทเนเธญ: ${info.customerName}`,
    `เน€เธเธญเธฃเนเนเธ—เธฃ: ${info.customerPhone}`,
    `เธฃเธนเธเนเธเธเธฃเธฑเธเธญเธฒเธซเธฒเธฃ: ${info.orderType}`,
    `เน€เธฅเธเนเธ•เนเธฐ/เธเธธเธ”เธฃเธฑเธเธญเธฒเธซเธฒเธฃ: ${info.tableText}`,
    info.deliveryAddress ? `เธชเธ–เธฒเธเธ—เธตเนเธเธฑเธ”เธชเนเธ: ${info.deliveryAddress}` : "เธชเธ–เธฒเธเธ—เธตเนเธเธฑเธ”เธชเนเธ: -",
    info.mapLink ? `Location: ${info.mapLink}` : "Location: -",
    info.customerNote ? `เธซเธกเธฒเธขเน€เธซเธ•เธธ: ${info.customerNote}` : "เธซเธกเธฒเธขเน€เธซเธ•เธธ: -",
    "",
    "เธฃเธฒเธขเธเธฒเธฃเธญเธฒเธซเธฒเธฃ",
    ...Object.keys(state.cart).map(id => {
      const item = menuItems.find(menu => menu.id === Number(id));
      return `- ${item.name} x ${state.cart[id]} = ${money(item.price * state.cart[id])}`;
    }),
    "",
    `เธฃเธงเธกเนเธ”เธขเธเธฃเธฐเธกเธฒเธ“: ${money(total)}`,
    state.selectedCurrency !== "LAK" ? `เธฃเธฒเธเธฒเธญเนเธฒเธเธญเธดเธ Kip: ${new Intl.NumberFormat("lo-LA").format(total)} Kip` : null,
    `เธซเธกเธฒเธขเน€เธซเธ•เธธเธเธฒเธเธฃเนเธฒเธ: ${restaurant.deliveryNote}`
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
      confirmBtn.textContent = "เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธเนเธฅเนเธง";
    } else {
      confirmBtn.classList.remove("is-confirmed");
      confirmBtn.textContent = "เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธเธเธตเน";
    }
  }

  if (state.locationConfirmed && status) {
    status.textContent = "เธขเธทเธเธขเธฑเธ Location เนเธฅเนเธง เธฅเธนเธเธเนเธฒเธชเธฒเธกเธฒเธฃเธ–เธเธ”เธขเธทเธเธขเธฑเธเธญเธญเน€เธ”เธญเธฃเนเนเธ”เนเน€เธกเธทเนเธญเธเนเธญเธกเธนเธฅเธเธฃเธ";
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
  if (status) status.textContent = "เธเธณเธฅเธฑเธเนเธซเธฅเธ”เนเธเธเธ—เธตเน เธเธฃเธธเธ“เธฒเธฃเธญเธชเธฑเธเธเธฃเธนเน...";

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
    fallback.textContent = "เธเธณเธฅเธฑเธเนเธซเธฅเธ”เนเธเธเธ—เธตเน...";
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
      fallback.textContent = "เนเธซเธฅเธ”เนเธเธเธ—เธตเนเนเธกเนเธชเธณเน€เธฃเนเธ เธเธฃเธธเธ“เธฒเธ•เธฃเธงเธเธชเธญเธเธญเธดเธเน€เธ—เธญเธฃเนเน€เธเนเธ• เธซเธฃเธทเธญเธงเธฒเธเธฅเธดเธเธเน Google Maps เน€เธญเธ";
    }
    setMapPreviewState("fallback");
    const status = $("#locationStatus");
    if (status) {
      const hasLocationLink = Boolean($("#mapLink")?.value.trim());
      status.textContent = hasLocationLink
        ? "เนเธเธเธ—เธตเนเนเธซเธฅเธ”เนเธกเนเธชเธณเน€เธฃเนเธ เนเธ•เนเธฃเธฐเธเธเธกเธตเธฅเธดเธเธเน Location เนเธฅเนเธง เธชเธฒเธกเธฒเธฃเธ–เธเธ”เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธเนเธ”เนเธซเธฒเธเธฅเธดเธเธเนเธ–เธนเธเธ•เนเธญเธ"
        : "เนเธซเธฅเธ”เนเธเธเธ—เธตเนเนเธกเนเธชเธณเน€เธฃเนเธ เนเธ•เนเธขเธฑเธเธชเธฒเธกเธฒเธฃเธ–เธงเธฒเธเธฅเธดเธเธเน Google Maps เน€เธญเธเนเธ”เน";
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
      ? "เน€เธเธฅเธตเนเธขเธเน€เธเนเธเธ เธฒเธเธ”เธฒเธงเน€เธ—เธตเธขเธกเนเธฅเนเธง เธ”เธนเธเนเธฒเธ/เธญเธฒเธเธฒเธฃเนเธซเนเธเธฑเธ” เนเธฅเนเธงเธเธ”เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธเธเธตเน"
      : "เน€เธเธฅเธตเนเธขเธเน€เธเนเธเนเธเธเธ—เธตเนเธ–เธเธเนเธฅเนเธง เธ”เธนเธเธทเนเธญเธ–เธเธ/เธชเธ–เธฒเธเธ—เธตเน เนเธฅเนเธงเธเธ”เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธเธเธตเน";
  }
}


function addStoreLogoMarker() {
  if (!state.map || !window.L) return;

  const storeIcon = L.divIcon({
    className: "store-logo-marker",
    html: `
      <div class="store-logo-pin">
        <img src="images/logo-fai-mai-khua-small.png" alt="เบฎเปเบฒเบ เปเบเปเปเปเบเบปเบง" />
        <span>เปเบเปเปเปเบเบปเบง</span>
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
    เธ•เธณเนเธซเธเนเธเธฃเนเธฒเธเธเธ Google Maps<br>
    <a href="${restaurant.storeMapsUrl}" target="_blank" rel="noopener">เธเนเธเธซเธฒเธเธทเนเธญเธฃเนเธฒเธเนเธ Google Maps</a><br>
    <a href="https://www.google.com/maps?q=${restaurant.storeLat},${restaurant.storeLng}" target="_blank" rel="noopener">เน€เธเธดเธ”เธเธดเธเธฑเธ”เธฃเนเธฒเธ</a>
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
      fallback.textContent = "เนเธเธเธ—เธตเนเธเธฐเนเธซเธฅเธ”เน€เธกเธทเนเธญเน€เธฃเธดเนเธกเนเธเนเธเธฒเธ Location";
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
    setSelectedLocation(position.lat, position.lng, "เน€เธฅเธทเนเธญเธเธซเธกเธธเธ”เนเธฅเนเธง เธ–เนเธฒเธเธธเธ”เธชเนเธเธ–เธนเธเธ•เนเธญเธเนเธซเนเธเธ” โ€เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธเธเธตเนโ€");
  });

  state.map.on("click", (event) => {
    setLocationConfirmed(false);
    setSelectedLocation(event.latlng.lat, event.latlng.lng, "เธซเธกเธธเธ”เธงเธดเนเธเนเธเธ•เธณเนเธซเธเนเธเธ—เธตเนเน€เธฅเธทเธญเธเนเธฅเนเธง เธ–เนเธฒเธเธธเธ”เธชเนเธเธ–เธนเธเธ•เนเธญเธเนเธซเนเธเธ” โ€เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธเธเธตเนโ€");
  });

  if (hasSavedLatLng) {
    const wasLocationConfirmed = state.locationConfirmed;
    setSelectedLocation(initialLatLng[0], initialLatLng[1], "เน€เธเธดเธ”เนเธเธเธ—เธตเนเธ•เธฒเธก Location เธ—เธตเนเน€เธฅเธทเธญเธเนเธงเนเนเธฅเนเธง เธ•เธฃเธงเธเธชเธญเธเธซเธกเธธเธ”เธเนเธญเธเธเธ”เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธ");
    if (wasLocationConfirmed) setLocationConfirmed(true);
  } else {
    state.selectedLatLng = null;
    state.locationConfirmed = false;

    const confirmBtn = $("#confirmLocationBtn");
    if (confirmBtn) {
      confirmBtn.classList.add("is-disabled");
      confirmBtn.classList.remove("is-confirmed");
      confirmBtn.setAttribute("aria-disabled", "true");
      confirmBtn.textContent = "เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธเธเธตเน";
    }

    const status = $("#locationStatus");
    if (status) {
      status.textContent = "เนเธเธเธ—เธตเนเธเธฃเนเธญเธกเนเธฅเนเธง เนเธฅเนเธเนเธฃเนเธฒเธเธเธทเธญเธเธธเธ”เธฃเนเธฒเธ เบฎเปเบฒเบ เปเบเปเปเปเบเบปเบง เนเธซเนเธฅเธนเธเธเนเธฒเนเธ•เธฐเธเธเนเธเธเธ—เธตเน เธฅเธฒเธเธซเธกเธธเธ” เนเธเนเธ•เธณเนเธซเธเนเธเธเธฑเธเธเธธเธเธฑเธ เธซเธฃเธทเธญเธเนเธเธซเธฒเธเธธเธ”เธชเนเธเธเนเธญเธเธเธ”เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธ";
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
    if (status) status.textContent = "เธเธดเธเธฑเธ”เนเธกเนเธ–เธนเธเธ•เนเธญเธ เธเธฃเธธเธ“เธฒเน€เธฅเธทเธญเธเธ•เธณเนเธซเธเนเธเนเธซเธกเน เธซเธฃเธทเธญเธงเธฒเธเธฅเธดเธเธเน Google Maps เธ—เธตเนเธ–เธนเธเธ•เนเธญเธ";
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
    confirmBtn.textContent = "เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธเธเธตเน";
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
      confirmBtn.textContent = "เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธเธเธตเน";
    }
    return;
  }

  const coords = extractCoordinates(value);
  if (coords) {
    ensureDeliveryMap().then(() => {
      setSelectedLocation(coords.latitude, coords.longitude, "เธเธเธเธดเธเธฑเธ”เธเธฒเธเธฅเธดเธเธเนเนเธฅเนเธง เธ•เธฃเธงเธเธชเธญเธเธซเธกเธธเธ”เนเธฅเนเธงเธเธ” โ€เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธเธเธตเนโ€");
    });
  } else {
    state.locationConfirmed = false;
    const confirmBtn = $("#confirmLocationBtn");
    if (confirmBtn) {
      confirmBtn.classList.remove("is-disabled", "is-confirmed");
      confirmBtn.setAttribute("aria-disabled", "false");
      confirmBtn.textContent = "เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธเธเธตเน";
    }
    const status = $("#locationStatus");
    if (status) status.textContent = "เธงเธฒเธเธฅเธดเธเธเน Google Maps เนเธฅเนเธง เธ–เนเธฒเธฅเธดเธเธเนเธ–เธนเธเธ•เนเธญเธเนเธซเนเธเธ” โ€เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธเธเธตเนโ€";
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
    text.textContent = status === "checking" ? "เธเธณเธฅเธฑเธเธเธฑเธเธ•เธณเนเธซเธเนเธ..." : "เธขเธฑเธเนเธกเนเธกเธตเธเนเธญเธกเธนเธฅเธเธงเธฒเธกเนเธกเนเธเธขเธณ";
    return;
  }

  const rounded = Math.round(accuracy);
  text.textContent = `เธเธฅเธฒเธ”เน€เธเธฅเธทเนเธญเธเธเธฃเธฐเธกเธฒเธ“ ${rounded} เน€เธกเธ•เธฃ`;

  if (rounded <= 25) {
    panel.classList.add("is-good");
  } else if (rounded <= 80) {
    panel.classList.add("is-medium");
  } else {
    panel.classList.add("is-bad");
  }
}

function getAccuracyMessage(accuracy) {
  if (!accuracy) return "เธฃเธฐเธเธเนเธกเนเธ—เธฃเธฒเธเธเนเธฒเธเธงเธฒเธกเนเธกเนเธเธขเธณ เธเธฃเธธเธ“เธฒเธ•เธฃเธงเธเธชเธญเธเธซเธกเธธเธ”เธเนเธญเธเธขเธทเธเธขเธฑเธ";
  const rounded = Math.round(accuracy);
  if (rounded <= 25) {
    return `เธ•เธณเนเธซเธเนเธเธเนเธญเธเธเนเธฒเธเนเธกเนเธ เธเธฅเธฒเธ”เน€เธเธฅเธทเนเธญเธเธเธฃเธฐเธกเธฒเธ“ ${rounded} เน€เธกเธ•เธฃ`;
  }
  if (rounded <= 80) {
    return `เธ•เธณเนเธซเธเนเธเธเธญเนเธเนเนเธ”เน เนเธ•เนเธขเธฑเธเธญเธฒเธเธเธฅเธฒเธ”เน€เธเธฅเธทเนเธญเธเธเธฃเธฐเธกเธฒเธ“ ${rounded} เน€เธกเธ•เธฃ เธเธฃเธธเธ“เธฒเธ”เธนเธซเธกเธธเธ”เธเนเธญเธเธขเธทเธเธขเธฑเธ`;
  }
  return `เธ•เธณเนเธซเธเนเธเธเธฒเธเน€เธเธฃเธทเนเธญเธเธเธตเนเธเธฅเธฒเธ”เน€เธเธฅเธทเนเธญเธเธชเธนเธเธเธฃเธฐเธกเธฒเธ“ ${rounded} เน€เธกเธ•เธฃ เธซเนเธฒเธกเธขเธทเธเธขเธฑเธเธเธเธเธงเนเธฒเธเธฐเธฅเธฒเธเธซเธกเธธเธ”เนเธเนเธเธเธธเธ”เธชเนเธเธเธฃเธดเธ`;
}

function updateUserLiveLocation(latitude, longitude, accuracy) {
  if (!state.map || !window.L) return;

  const lat = Number(latitude);
  const lng = Number(longitude);

  const userIcon = L.divIcon({
    className: "live-user-marker",
    html: `<span></span><b>เธเธธเธ“เธญเธขเธนเนเธ•เธฃเธเธเธตเน</b>`,
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
    status.textContent = "เธเธณเธฅเธฑเธเนเธเนเธเธฒเธเธเนเธญเธกเธนเธฅ Google Maps / Google Places";
  } else {
    status.className = "place-provider-status is-fallback";
    status.textContent = "เธขเธฑเธเนเธกเนเนเธ”เนเนเธชเน Google API key: เธ•เธญเธเธเธตเนเนเธเนเธฃเธฐเธเธเธเนเธเธซเธฒเธชเธณเธฃเธญเธเธเนเธญเธ";
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
    resultsBox.innerHTML = auto ? "เธเธดเธกเธเนเธญเธขเนเธฒเธเธเนเธญเธข 2 เธ•เธฑเธงเธญเธฑเธเธฉเธฃ เน€เธเธทเนเธญเนเธซเนเธฃเธฐเธเธเนเธเธฐเธเธณเธชเธ–เธฒเธเธ—เธตเน" : "เธเธฃเธธเธ“เธฒเธเธดเธกเธเนเธเธทเนเธญเธชเธ–เธฒเธเธ—เธตเนเธเนเธญเธเธเนเธเธซเธฒ";
    return;
  }

  if (state.placeSearchController) {
    state.placeSearchController.abort();
  }

  state.placeSearchController = new AbortController();

  resultsBox.className = "place-results is-loading";
  resultsBox.innerHTML = shouldUseGooglePlaces()
    ? "เธเธณเธฅเธฑเธเธเนเธเธซเธฒเธเธฒเธ Google Maps..."
    : "เธเธณเธฅเธฑเธเธเนเธเธซเธฒเธชเธ–เธฒเธเธ—เธตเนเธเธฒเธเธฃเธฐเธเธเธชเธณเธฃเธญเธ...";

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
        if (status) status.textContent = "Google Places เธเธฑเธ”เธเนเธญเธเธเธฑเนเธงเธเธฃเธฒเธง เธฃเธฐเธเธเนเธชเธ”เธเธเธฅเธเนเธเธซเธฒเธชเธณเธฃเธญเธเนเธซเนเธเนเธญเธ";
        return;
      } catch (fallbackError) {
        // Continue to generic error below.
      }
    }

    resultsBox.className = "place-results is-empty";
    resultsBox.innerHTML = "เธเนเธเธซเธฒเธชเธ–เธฒเธเธ—เธตเนเนเธกเนเธชเธณเน€เธฃเนเธ เธเธฃเธธเธ“เธฒเธ•เธฃเธงเธเธชเธญเธเธญเธดเธเน€เธ—เธญเธฃเนเน€เธเนเธ• เธซเธฃเธทเธญเนเธเนเธ•เธณเนเธซเธเนเธเธเธฑเธเธเธธเธเธฑเธ";
    if (status) status.textContent = "เธฃเธฐเธเธเธเนเธเธซเธฒเธชเธ–เธฒเธเธ—เธตเนเธเธฑเธ”เธเนเธญเธ เธเธฃเธธเธ“เธฒเธเธ”เนเธเนเธ•เธณเนเธซเธเนเธเธเธฑเธเธเธธเธเธฑเธ เธซเธฃเธทเธญเธงเธฒเธเธฅเธดเธเธเน Google Maps เน€เธญเธ";
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
      ? `เธขเธฑเธเนเธกเนเธเธ โ€${query}โ€ เธฅเธญเธเธเธดเธกเธเนเธเธทเนเธญเนเธซเนเธฅเธฐเน€เธญเธตเธขเธ”เธเธถเนเธ เน€เธเนเธ เธเธทเนเธญเธซเธกเธนเนเธเนเธฒเธ + เน€เธกเธทเธญเธ`
      : "เนเธกเนเธเธเธชเธ–เธฒเธเธ—เธตเน เธฅเธญเธเธเธดเธกเธเนเธเธทเนเธญเนเธซเนเธฅเธฐเน€เธญเธตเธขเธ”เธเธถเนเธ เน€เธเนเธ เธเธทเนเธญเธซเธกเธนเนเธเนเธฒเธ + เน€เธกเธทเธญเธ";
    if (status) status.textContent = "เธเนเธเธซเธฒเนเธกเนเน€เธเธญ เธเธฃเธธเธ“เธฒเธฅเธญเธเธเธดเธกเธเนเธเธทเนเธญเธชเธ–เธฒเธเธ—เธตเนเนเธซเธกเน เธซเธฃเธทเธญเนเธเนเธ•เธณเนเธซเธเนเธเธเธฑเธเธเธธเธเธฑเธ";
    return;
  }

  const providerTitle = usedFallback
    ? "เธชเธ–เธฒเธเธ—เธตเนเนเธเธฐเธเธณเธเธฒเธเธฃเธฐเธเธเธชเธณเธฃเธญเธ"
    : (places[0]?.provider === "google" ? "เธชเธ–เธฒเธเธ—เธตเนเนเธเธฐเธเธณเธเธฒเธ Google Maps" : "เธชเธ–เธฒเธเธ—เธตเนเนเธเธฐเธเธณ");

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
  let title = button.querySelector("strong")?.textContent || "เธชเธ–เธฒเธเธ—เธตเนเธ—เธตเนเน€เธฅเธทเธญเธ";

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
    setSelectedLocation(lat, lng, `เน€เธฅเธทเธญเธเธชเธ–เธฒเธเธ—เธตเน โ€${title}โ€ เนเธฅเนเธง เธ–เนเธฒเธซเธกเธธเธ”เธ•เธฃเธเธเธฑเธเธเธธเธ”เธชเนเธเธเธฃเธดเธเนเธซเนเธเธ” โ€เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธเธเธตเนโ€`);

    resultsBox.querySelectorAll(".place-result").forEach(item => item.classList.remove("is-selected"));
    button.classList.add("is-selected");

    const input = $("#placeSearchInput");
    if (input) input.value = title;

    document.querySelector("#mapPreview")?.scrollIntoView({ behavior: "smooth", block: "center" });
  } catch (error) {
    const status = $("#locationStatus");
    if (status) status.textContent = "เธ”เธถเธเธเธดเธเธฑเธ”เธชเธ–เธฒเธเธ—เธตเนเนเธกเนเธชเธณเน€เธฃเนเธ เธเธฃเธธเธ“เธฒเน€เธฅเธทเธญเธเธเธฅเธฅเธฑเธเธเนเธญเธทเนเธ เธซเธฃเธทเธญเธฅเธฒเธเธซเธกเธธเธ”เน€เธญเธ";
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

function schedulePlaceAutocomplete() {
  const input = $("#placeSearchInput");
  const resultsBox = $("#placeResults");
  const query = input?.value.trim() || "";

  if (state.placeSearchTimer) clearTimeout(state.placeSearchTimer);

  if (query.length < 2) {
    if (resultsBox) {
      resultsBox.className = "place-results is-empty";
      resultsBox.innerHTML = query.length ? "เธเธดเธกเธเนเน€เธเธดเนเธกเธญเธตเธเธเธดเธ” เธฃเธฐเธเธเธเธฐเนเธเธฐเธเธณเธชเธ–เธฒเธเธ—เธตเนเนเธซเนเน€เธฅเธทเธญเธ" : "";
    }
    return;
  }

  if (resultsBox) {
    resultsBox.className = "place-results is-loading";
    resultsBox.innerHTML = shouldUseGooglePlaces() ? "เธเธณเธฅเธฑเธเน€เธ•เธฃเธตเธขเธกเธเนเธเธซเธฒเธเธฒเธ Google Maps..." : "เธเธณเธฅเธฑเธเธฃเธญเธเนเธญเธเธงเธฒเธกเนเธซเนเธเธฃเธ...";
  }

  state.placeSearchTimer = setTimeout(() => {
    searchPlace({ auto: true });
  }, 520);
}

async function useCurrentLocation() {
  const status = $("#locationStatus");
  const mapReadyPromise = ensureDeliveryMap().catch(() => null);

  if (!navigator.geolocation) {
    if (status) status.textContent = "เน€เธเธฃเธทเนเธญเธเธเธตเนเนเธกเนเธฃเธญเธเธฃเธฑเธเธเธฒเธฃเธ”เธถเธเธ•เธณเนเธซเธเนเธ เธเธฃเธธเธ“เธฒเธงเธฒเธเธฅเธดเธเธเน Google Maps เน€เธญเธ";
    updateGpsAccuracyPanel(null, "failed");
    return;
  }

  if (status) status.textContent = "เธเธณเธฅเธฑเธเธเธฑเธเธ•เธณเนเธซเธเนเธเนเธซเนเนเธกเนเธเธเธถเนเธ... เธเธฃเธธเธ“เธฒเธฃเธญเธชเธฑเธเธเธฃเธนเนเนเธฅเธฐเน€เธเธดเธ” GPS/Wiโ€‘Fi";
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
      status.textContent = `เธเธณเธฅเธฑเธเธเธฃเธฑเธเธ•เธณเนเธซเธเนเธ... เนเธ”เนเธเนเธญเธกเธนเธฅ ${sampleCount} เธเธฃเธฑเนเธ / เธ”เธตเธ—เธตเนเธชเธธเธ”เธ•เธญเธเธเธตเน: ${bestMessage}`;
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
      if (status) status.textContent = "เธขเธฑเธเธเธฑเธเธ•เธณเนเธซเธเนเธเนเธกเนเนเธ”เน เธเธฃเธธเธ“เธฒเธฅเธญเธเธญเธตเธเธเธฃเธฑเนเธ เธซเธฃเธทเธญเธงเธฒเธเธฅเธดเธเธเน Google Maps เน€เธญเธ";
      updateGpsAccuracyPanel(null, "failed");
      return;
    }

    const { latitude, longitude, accuracy } = best.coords;
    const lat = Number(latitude).toFixed(7);
    const lng = Number(longitude).toFixed(7);

    updateUserLiveLocation(latitude, longitude, accuracy);
    updateGpsAccuracyPanel(accuracy, "done");

    const message = getAccuracyMessage(accuracy);
    setSelectedLocation(lat, lng, `${message} เธซเธกเธธเธ”เธชเธตเธเนเธฒเธเธทเธญเธ•เธณเนเธซเธเนเธเธฅเธนเธเธเนเธฒเธเธฑเธเธเธธเธเธฑเธ เธชเนเธงเธเธซเธกเธธเธ”เนเธเธเธทเธญเธเธธเธ”เธชเนเธ เธซเธฒเธเนเธกเนเธ•เธฃเธเนเธซเนเธฅเธฒเธเธซเธกเธธเธ”เนเธเนเธเธ•เธณเนเธซเธเนเธเธเธฃเธดเธเธเนเธญเธเธเธ” โ€เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธเธเธตเนโ€`);

    mapReadyPromise.then(() => {
      if (state.map) {
        setSelectedLocation(lat, lng, `${message} เธซเธกเธธเธ”เธชเธตเธเนเธฒเธเธทเธญเธ•เธณเนเธซเธเนเธเธฅเธนเธเธเนเธฒเธเธฑเธเธเธธเธเธฑเธ เธชเนเธงเธเธซเธกเธธเธ”เนเธเธเธทเธญเธเธธเธ”เธชเนเธ เธซเธฒเธเนเธกเนเธ•เธฃเธเนเธซเนเธฅเธฒเธเธซเธกเธธเธ”เนเธเนเธเธ•เธณเนเธซเธเนเธเธเธฃเธดเธเธเนเธญเธเธเธ” โ€เธขเธทเธเธขเธฑเธเธ•เธณเนเธซเธเนเธเธเธตเนโ€`);
      }
    });
    startLiveUserLocation();
  }

  navigator.geolocation.getCurrentPosition(
    (position) => acceptPosition(position),
    (error) => {
      let message = "เนเธกเนเธชเธฒเธกเธฒเธฃเธ–เธ”เธถเธเธ•เธณเนเธซเธเนเธเนเธ”เน เธเธฃเธธเธ“เธฒเน€เธเธดเธ” Location เธซเธฃเธทเธญเธงเธฒเธเธฅเธดเธเธเน Google Maps เน€เธญเธ";
      if (error.code === error.PERMISSION_DENIED) {
        message = "เธฅเธนเธเธเนเธฒเธขเธฑเธเนเธกเนเนเธ”เนเธญเธเธธเธเธฒเธ• Location เธเธฃเธธเธ“เธฒเธเธ”เธญเธเธธเธเธฒเธ• เธซเธฃเธทเธญเธงเธฒเธเธฅเธดเธเธเน Google Maps เน€เธญเธ";
      }
      if (error.code === error.POSITION_UNAVAILABLE) {
        message = "เน€เธเธฃเธทเนเธญเธเนเธกเนเธชเธฒเธกเธฒเธฃเธ–เธซเธฒเธ•เธณเนเธซเธเนเธเนเธ”เนเธ•เธญเธเธเธตเน เธเธฃเธธเธ“เธฒเน€เธเธดเธ” GPS/Wiโ€‘Fi เธซเธฃเธทเธญเธงเธฒเธเธฅเธดเธเธเน Google Maps เน€เธญเธ";
      }
      if (error.code === error.TIMEOUT) {
        message = "เนเธเนเน€เธงเธฅเธฒเธซเธฒเธ•เธณเนเธซเธเนเธเธเธฒเธเน€เธเธดเธเนเธ เธเธฃเธธเธ“เธฒเธฅเธญเธเธญเธตเธเธเธฃเธฑเนเธ เธซเธฃเธทเธญเธงเธฒเธเธฅเธดเธเธเน Google Maps เน€เธญเธ";
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
  updateMenuQuantityBadges();
  renderCart();
}

function setOrderSubmitting(isSubmitting) {
  state.orderSubmitting = isSubmitting;
  [$("#sendOrderBtn"), $("#floatingSendOrderBtn")].forEach(button => {
    if (!button) return;
    button.classList.toggle("is-loading", isSubmitting);
    button.setAttribute("aria-busy", String(isSubmitting));
    if (isSubmitting) button.textContent = "เธเธณเธฅเธฑเธเธ•เธฑเธ” stock...";
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
  const ids = Object.keys(state.cart).map(Number);
  const total = cartTotal(ids);

  try {
    setOrderSubmitting(true);
    await submitStockOrder(total);
    saveCustomerMemory({ force: true, silent: true });
    openWhatsappOrder(total);
  } catch (error) {
    const message = error?.message || "เธชเนเธเธญเธญเน€เธ”เธญเธฃเนเนเธกเนเธชเธณเน€เธฃเนเธ เธเธฃเธธเธ“เธฒเธฅเธญเธเนเธซเธกเน";
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
    if (input.checked && input.value === "เธเธฑเธ”เธชเนเธเน€เธ”เธฅเธดเน€เธงเธญเธฃเธต") {
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
    if (status) status.textContent = "เธฅเนเธฒเธ Location เนเธฅเนเธง เธเธฃเธธเธ“เธฒเธเธ”เนเธเนเธ•เธณเนเธซเธเนเธเธเธฑเธเธเธธเธเธฑเธ เธซเธฃเธทเธญเธงเธฒเธเธฅเธดเธเธเน Google Maps เนเธซเธกเน";
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



