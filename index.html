// Google Apps Script backend for Fai Mai Khua QR Menu stock/order system.
// 1) Open https://script.google.com and create a new project.
// 2) Paste this whole file into Code.gs.
// 3) Change ADMIN_TOKEN to your private admin password.
// 4) Run setupStockSystem() once, then Deploy > New deployment > Web app.
// 5) Copy the Web app URL into config.js > stockApiUrl.

const QR_MENU_CONFIG = {
  SPREADSHEET_ID: "",
  ORDER_TOKEN: "fai-mai-khua-order",
  ADMIN_TOKEN: "CHANGE_THIS_ADMIN_PASSWORD",
  TIMEZONE: "Asia/Bangkok"
};

const SHEETS = {
  STOCK: "Stock",
  ORDERS: "Orders",
  ORDER_ITEMS: "OrderItems",
  SETTINGS: "Settings"
};

const MENU_SEED = [
  [1, "ข้าวกะเพราหมู + ไข่ดาว", 20, true],
  [2, "ข้าวไก่เทอริยากิ", 20, true],
  [3, "ข้าวหน้าไก่มิโสะ", 20, true],
  [4, "เนื้อเสือร้องไห้ New Zealand", 10, true],
  [5, "ข้าวหน้าแซลมอนย่าง", 10, true],
  [6, "สลัดไก่อบ", 15, true],
  [7, "Caesar Salad", 15, true],
  [8, "S'more Brownie Cookie", 25, true],
  [9, "ชาเย็นไฟไหม้", 30, true]
];

function setupStockSystem() {
  const ss = getSpreadsheet_();
  const stock = getOrCreateSheet_(ss, SHEETS.STOCK);
  const orders = getOrCreateSheet_(ss, SHEETS.ORDERS);
  const orderItems = getOrCreateSheet_(ss, SHEETS.ORDER_ITEMS);
  const settings = getOrCreateSheet_(ss, SHEETS.SETTINGS);
  const today = businessDate_();

  setHeaders_(stock, ["itemId", "name", "stockToday", "soldToday", "active", "businessDate", "updatedAt"]);
  setHeaders_(orders, ["orderNo", "dateTime", "businessDate", "customerName", "customerPhone", "orderType", "tableText", "deliveryAddress", "mapLink", "customerNote", "totalKip", "displayTotal", "status", "source"]);
  setHeaders_(orderItems, ["orderNo", "dateTime", "businessDate", "itemId", "name", "qty", "priceKip", "subtotalKip"]);
  setHeaders_(settings, ["key", "value", "updatedAt"]);
  ensureSettings_(settings);

  if (stock.getLastRow() < 2) {
    const now = new Date();
    stock.getRange(2, 1, MENU_SEED.length, 7).setValues(MENU_SEED.map(item => [
      item[0],
      item[1],
      item[2],
      0,
      item[3],
      today,
      now
    ]));
  }

  stock.autoResizeColumns(1, 7);
  orders.autoResizeColumns(1, 14);
  orderItems.autoResizeColumns(1, 8);
  settings.autoResizeColumns(1, 3);
}

function doGet(e) {
  const action = (e.parameter.action || "stock").toLowerCase();

  if (action === "stock") {
    return json_({
      ok: true,
      businessDate: businessDate_(),
      store: storeStatus_(),
      items: stockSnapshot_()
    });
  }

  if (action === "summary") {
    if ((e.parameter.adminToken || "") !== QR_MENU_CONFIG.ADMIN_TOKEN) {
      return json_({ ok: false, message: "Admin token ไม่ถูกต้อง" });
    }
    return json_(adminSummary_(e.parameter.date || businessDate_()));
  }

  return json_({ ok: false, message: "Unknown action" });
}

function doPost(e) {
  let payload;
  try {
    payload = JSON.parse(e.postData.contents || "{}");
  } catch (error) {
    return json_({ ok: false, message: "ข้อมูล order ไม่ถูกต้อง" });
  }

  const action = String(payload.action || "").toLowerCase();
  if (action !== "submitorder" && action !== "updatestore") {
    return json_({ ok: false, message: "Unknown post action" });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    if (action === "updatestore") {
      if ((payload.adminToken || "") !== QR_MENU_CONFIG.ADMIN_TOKEN) {
        return json_({ ok: false, message: "Admin token ไม่ถูกต้อง" });
      }
      return json_(updateStoreStatus_(payload));
    }

    if ((payload.token || "") !== QR_MENU_CONFIG.ORDER_TOKEN) {
      return json_({ ok: false, message: "Order token ไม่ถูกต้อง" });
    }
    return json_(submitOrder_(payload));
  } finally {
    lock.releaseLock();
  }
}

function submitOrder_(payload) {
  const items = Array.isArray(payload.items) ? payload.items : [];
  if (!items.length) return { ok: false, message: "ไม่มีรายการอาหาร" };

  const ss = getSpreadsheet_();
  setupStockSystem();
  const store = storeStatus_();
  if (!store.isOpen) {
    return {
      ok: false,
      message: store.message || "ร้านปิดรับออเดอร์ชั่วคราว",
      store,
      items: stockSnapshot_()
    };
  }

  const stockSheet = ss.getSheetByName(SHEETS.STOCK);
  ensureStockBusinessDate_(stockSheet);
  const stockMap = stockMap_();

  const errors = [];
  items.forEach(item => {
    const id = Number(item.id);
    const qty = Number(item.qty || 0);
    const stock = stockMap[id];
    if (!stock || !stock.active) {
      errors.push(`${item.name || id} ปิดขายแล้ว`);
      return;
    }
    if (qty <= 0) {
      errors.push(`${item.name || id} จำนวนไม่ถูกต้อง`);
      return;
    }
    if (qty > stock.remaining) {
      errors.push(`${item.name || id} เหลือ ${stock.remaining} ชุด`);
    }
  });

  if (errors.length) {
    return {
      ok: false,
      message: errors.join(" / "),
      items: stockSnapshot_()
    };
  }

  const now = new Date();
  const date = businessDate_();
  const orderNo = Utilities.formatDate(now, QR_MENU_CONFIG.TIMEZONE, "yyyyMMdd-HHmmss") + "-" + Math.floor(Math.random() * 900 + 100);
  const customer = payload.customer || {};
  const order = payload.order || {};

  ss.getSheetByName(SHEETS.ORDERS).appendRow([
    orderNo,
    now,
    date,
    customer.customerName || "",
    customer.customerPhone || "",
    customer.orderType || "",
    customer.tableText || "",
    customer.deliveryAddress || "",
    customer.mapLink || "",
    customer.customerNote || "",
    Number(order.totalKip || 0),
    order.displayTotal || "",
    "confirmed",
    order.source || "qr-menu"
  ]);

  const itemRows = items.map(item => [
    orderNo,
    now,
    date,
    Number(item.id),
    item.name || "",
    Number(item.qty || 0),
    Number(item.priceKip || 0),
    Number(item.subtotalKip || 0)
  ]);
  const orderItemsSheet = ss.getSheetByName(SHEETS.ORDER_ITEMS);
  orderItemsSheet.getRange(orderItemsSheet.getLastRow() + 1, 1, itemRows.length, 8).setValues(itemRows);

  items.forEach(item => {
    const stock = stockMap[Number(item.id)];
    const soldCell = stockSheet.getRange(stock.row, 4);
    soldCell.setValue(Number(soldCell.getValue() || 0) + Number(item.qty || 0));
    stockSheet.getRange(stock.row, 7).setValue(now);
  });

  return {
    ok: true,
    message: "ตัด stock และบันทึก order แล้ว",
    orderNo,
    store: storeStatus_(),
    items: stockSnapshot_()
  };
}

function stockSnapshot_() {
  const ss = getSpreadsheet_();
  setupStockSystem();
  const sheet = ss.getSheetByName(SHEETS.STOCK);
  ensureStockBusinessDate_(sheet);
  const values = sheet.getDataRange().getValues();
  const items = {};

  for (let row = 1; row < values.length; row += 1) {
    const itemId = Number(values[row][0]);
    if (!itemId) continue;
    const stockToday = Number(values[row][2] || 0);
    const soldToday = Number(values[row][3] || 0);
    const active = values[row][4] === true || String(values[row][4]).toLowerCase() === "true";
    const remaining = Math.max(0, stockToday - soldToday);
    items[itemId] = {
      id: itemId,
      name: values[row][1],
      stockToday,
      soldToday,
      remaining,
      available: active && remaining > 0
    };
  }

  return items;
}

function stockMap_() {
  const sheet = getSpreadsheet_().getSheetByName(SHEETS.STOCK);
  const values = sheet.getDataRange().getValues();
  const map = {};

  for (let index = 1; index < values.length; index += 1) {
    const itemId = Number(values[index][0]);
    const stockToday = Number(values[index][2] || 0);
    const soldToday = Number(values[index][3] || 0);
    const active = values[index][4] === true || String(values[index][4]).toLowerCase() === "true";
    map[itemId] = {
      row: index + 1,
      name: values[index][1],
      stockToday,
      soldToday,
      remaining: Math.max(0, stockToday - soldToday),
      active
    };
  }

  return map;
}

function adminSummary_(date) {
  const ss = getSpreadsheet_();
  setupStockSystem();
  const orders = ss.getSheetByName(SHEETS.ORDERS).getDataRange().getValues();
  const orderItems = ss.getSheetByName(SHEETS.ORDER_ITEMS).getDataRange().getValues();
  let orderCount = 0;
  let totalKip = 0;
  const items = {};

  for (let row = 1; row < orders.length; row += 1) {
    if (String(orders[row][2]) !== String(date)) continue;
    orderCount += 1;
    totalKip += Number(orders[row][10] || 0);
  }

  for (let row = 1; row < orderItems.length; row += 1) {
    if (String(orderItems[row][2]) !== String(date)) continue;
    const itemId = Number(orderItems[row][3]);
    if (!items[itemId]) {
      items[itemId] = {
        itemId,
        name: orderItems[row][4],
        qty: 0,
        revenueKip: 0
      };
    }
    items[itemId].qty += Number(orderItems[row][5] || 0);
    items[itemId].revenueKip += Number(orderItems[row][7] || 0);
  }

  return {
    ok: true,
    date,
    orderCount,
    totalKip,
    spreadsheetUrl: ss.getUrl(),
    items: Object.values(items).sort((a, b) => b.qty - a.qty),
    store: storeStatus_(),
    stock: stockSnapshot_()
  };
}

function ensureStockBusinessDate_(sheet) {
  const today = businessDate_();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return;

  const dateRange = sheet.getRange(2, 6, lastRow - 1, 1);
  const dates = dateRange.getValues();
  let changed = false;

  dates.forEach((row, index) => {
    if (String(row[0]) !== today) {
      sheet.getRange(index + 2, 4).setValue(0);
      sheet.getRange(index + 2, 6).setValue(today);
      sheet.getRange(index + 2, 7).setValue(new Date());
      changed = true;
    }
  });

  if (changed) SpreadsheetApp.flush();
}

function ensureSettings_(sheet) {
  const existing = {};
  const values = sheet.getDataRange().getValues();
  for (let row = 1; row < values.length; row += 1) {
    const key = String(values[row][0] || "");
    if (key) existing[key] = true;
  }

  const now = new Date();
  const defaults = [
    ["storeOpen", "TRUE", now],
    ["storeMessage", "ร้านเปิดรับออเดอร์แล้ว", now]
  ];
  defaults.forEach(row => {
    if (!existing[row[0]]) sheet.appendRow(row);
  });
}

function truthy_(value) {
  const text = String(value).trim().toLowerCase();
  return value === true || text === "true" || text === "yes" || text === "open" || text === "1";
}

function getSetting_(key, fallback) {
  const sheet = getSpreadsheet_().getSheetByName(SHEETS.SETTINGS);
  const values = sheet.getDataRange().getValues();
  for (let row = 1; row < values.length; row += 1) {
    if (String(values[row][0]) === key) return values[row][1];
  }
  return fallback;
}

function setSetting_(key, value) {
  const sheet = getSpreadsheet_().getSheetByName(SHEETS.SETTINGS);
  const values = sheet.getDataRange().getValues();
  for (let row = 1; row < values.length; row += 1) {
    if (String(values[row][0]) === key) {
      sheet.getRange(row + 1, 2, 1, 2).setValues([[value, new Date()]]);
      return;
    }
  }
  sheet.appendRow([key, value, new Date()]);
}

function storeStatus_() {
  setupStockSystem();
  const isOpen = truthy_(getSetting_("storeOpen", "TRUE"));
  const defaultMessage = isOpen ? "ร้านเปิดรับออเดอร์แล้ว" : "ร้านปิดรับออเดอร์ชั่วคราว";
  return {
    isOpen,
    message: String(getSetting_("storeMessage", defaultMessage) || defaultMessage),
    updatedAt: new Date().toISOString()
  };
}

function updateStoreStatus_(payload) {
  setupStockSystem();
  const isOpen = payload.isOpen === true || String(payload.isOpen).toLowerCase() === "true";
  const message = String(payload.message || (isOpen ? "ร้านเปิดรับออเดอร์แล้ว" : "ร้านปิดรับออเดอร์ชั่วคราว")).trim();
  setSetting_("storeOpen", isOpen ? "TRUE" : "FALSE");
  setSetting_("storeMessage", message);
  SpreadsheetApp.flush();
  return {
    ok: true,
    message: isOpen ? "เปิดร้านแล้ว" : "ปิดร้านแล้ว",
    store: storeStatus_()
  };
}

function businessDate_() {
  return Utilities.formatDate(new Date(), QR_MENU_CONFIG.TIMEZONE, "yyyy-MM-dd");
}

function getOrCreateSheet_(ss, name) {
  return ss.getSheetByName(name) || ss.insertSheet(name);
}

function getSpreadsheet_() {
  if (QR_MENU_CONFIG.SPREADSHEET_ID) {
    return SpreadsheetApp.openById(QR_MENU_CONFIG.SPREADSHEET_ID);
  }

  const props = PropertiesService.getScriptProperties();
  const savedId = props.getProperty("STOCK_SPREADSHEET_ID");
  if (savedId) {
    return SpreadsheetApp.openById(savedId);
  }

  const active = SpreadsheetApp.getActiveSpreadsheet();
  if (active) {
    props.setProperty("STOCK_SPREADSHEET_ID", active.getId());
    return active;
  }

  const ss = SpreadsheetApp.create("Fai Mai Khua QR Menu Backend");
  props.setProperty("STOCK_SPREADSHEET_ID", ss.getId());
  return ss;
}

function setHeaders_(sheet, headers) {
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.setFrozenRows(1);
}

function json_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
