<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Admin Stock | ไฟไหม้คัว</title>
  <style>
    :root {
      color-scheme: dark;
      --bg: #130806;
      --panel: #21130f;
      --line: rgba(255, 214, 138, .18);
      --text: #fff6e8;
      --muted: rgba(255, 246, 232, .68);
      --accent: #ffb636;
      --good: #77e59a;
      --bad: #ff8c76;
      --blue: #8cc7ff;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: "Noto Sans Thai", "Noto Sans Lao", system-ui, sans-serif;
      background: radial-gradient(circle at 20% 0%, rgba(232,67,31,.28), transparent 34%), var(--bg);
      color: var(--text);
      padding: 20px;
    }
    main { width: min(1120px, 100%); margin: 0 auto; }
    h1 { margin: 0 0 6px; font-size: clamp(1.8rem, 5vw, 3rem); }
    h2 { margin: 0 0 12px; }
    p { color: var(--muted); }
    .panel {
      border: 1px solid var(--line);
      border-radius: 18px;
      background: rgba(33, 19, 15, .92);
      padding: 16px;
      margin: 14px 0;
      box-shadow: 0 22px 70px rgba(0,0,0,.36);
    }
    .grid { display: grid; grid-template-columns: 1.4fr 1fr .8fr; gap: 12px; align-items: end; }
    .store-grid { display: grid; grid-template-columns: 1fr 1.8fr auto auto; gap: 12px; align-items: end; }
    label { display: grid; gap: 7px; color: var(--muted); font-weight: 800; }
    input {
      min-height: 44px;
      border: 1px solid var(--line);
      border-radius: 12px;
      background: rgba(255,255,255,.07);
      color: var(--text);
      padding: 10px 12px;
      font: inherit;
      width: 100%;
    }
    button {
      min-height: 44px;
      border: 0;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--accent), #ff7a22);
      color: #170805;
      font: inherit;
      font-weight: 1000;
      cursor: pointer;
      padding: 10px 14px;
      white-space: nowrap;
    }
    button.secondary { background: rgba(255,255,255,.12); color: var(--text); border: 1px solid var(--line); }
    button.danger { background: linear-gradient(135deg, #ff8c76, #d73520); color: #170805; }
    .status-line { margin: 10px 0 0; }
    .pill {
      display: inline-flex;
      align-items: center;
      min-height: 36px;
      border-radius: 999px;
      padding: 7px 12px;
      font-weight: 1000;
      border: 1px solid var(--line);
      background: rgba(255,255,255,.06);
    }
    .pill.open { color: var(--good); }
    .pill.closed { color: var(--bad); }
    .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
    .stat { border: 1px solid var(--line); border-radius: 16px; padding: 14px; background: rgba(255,255,255,.05); }
    .stat strong { display: block; color: var(--accent); font-size: 1.45rem; }
    table { width: 100%; border-collapse: collapse; overflow: hidden; border-radius: 14px; }
    th, td { border-bottom: 1px solid var(--line); padding: 10px; text-align: left; vertical-align: top; }
    th { color: var(--accent); }
    .ok { color: var(--good); font-weight: 900; }
    .bad { color: var(--bad); font-weight: 900; }
    .muted { color: var(--muted); }
    .hint { font-size: .94rem; }
    .sheet-link {
      display: none;
      width: fit-content;
      margin-top: 10px;
      color: var(--blue);
      font-weight: 1000;
      text-decoration: none;
      border-bottom: 1px solid currentColor;
    }
    .sheet-link.is-visible { display: inline-flex; }
    @media (max-width: 850px) {
      body { padding: 12px; }
      .grid, .store-grid, .stats { grid-template-columns: 1fr; }
      table { font-size: .88rem; }
      button { width: 100%; }
    }
  </style>
</head>
<body>
  <main>
    <h1>Admin ร้าน</h1>
    <p>สำหรับเจ้าของร้านเท่านั้น ลูกค้าจะดูหน้านี้ไม่ได้ถ้าไม่มี Admin Token</p>

    <section class="panel">
      <h2>ตั้งค่าหลังบ้าน</h2>
      <div class="grid">
        <label>Apps Script Web App URL
          <input id="apiUrl" placeholder="https://script.google.com/macros/s/..." />
        </label>
        <label>Admin Token
          <input id="adminToken" type="password" placeholder="รหัส admin ที่ตั้งใน Apps Script" />
        </label>
        <label>วันที่
          <input id="dateInput" type="date" />
        </label>
      </div>
      <p><button id="loadBtn" type="button">โหลดข้อมูลล่าสุด</button></p>
      <a id="sheetLink" class="sheet-link" href="#" target="_blank" rel="noopener">เปิด Google Sheet หลังบ้านที่เชื่อมกับเว็บนี้</a>
      <p id="status" class="status-line muted">ใส่ URL และ Admin Token แล้วกดโหลด</p>
    </section>

    <section class="panel">
      <h2>เปิด / ปิดร้าน</h2>
      <div class="store-grid">
        <div>
          <span id="storeStatus" class="pill">ยังไม่ได้โหลด</span>
          <p id="storeMessageText" class="hint muted">ข้อความร้านจะแสดงตรงนี้</p>
        </div>
        <label>ข้อความที่จะให้ลูกค้าเห็น
          <input id="storeMessageInput" placeholder="เช่น วันนี้ร้านปิด / ของหมด / เปิดรับออเดอร์แล้ว" />
        </label>
        <button id="openStoreBtn" type="button">เปิดร้าน</button>
        <button id="closeStoreBtn" class="danger" type="button">ปิดร้าน</button>
      </div>
      <p class="hint">ถ้ากดปิดร้าน ลูกค้าจะยังเปิดเว็บดูเมนูได้ แต่จะส่งออเดอร์ไม่ได้จนกว่าจะกดเปิดร้านอีกครั้ง</p>
    </section>

    <section class="stats">
      <div class="stat"><span>จำนวนออเดอร์</span><strong id="orderCount">0</strong></div>
      <div class="stat"><span>ยอดขายรวม</span><strong id="totalKip">0 Kip</strong></div>
      <div class="stat"><span>วันที่</span><strong id="summaryDate">-</strong></div>
    </section>

    <section class="panel">
      <h2>ยอดขายแยกตามเมนู</h2>
      <table>
        <thead><tr><th>เมนู</th><th>ขายได้</th><th>ยอดขาย</th></tr></thead>
        <tbody id="salesRows"><tr><td colspan="3" class="muted">ยังไม่มีข้อมูล</td></tr></tbody>
      </table>
    </section>

    <section class="panel">
      <h2>Stock วันนี้</h2>
      <table>
        <thead><tr><th>เมนู</th><th>ขายแล้ว</th><th>คงเหลือ</th><th>สถานะ</th></tr></thead>
        <tbody id="stockRows"><tr><td colspan="4" class="muted">ยังไม่มีข้อมูล</td></tr></tbody>
      </table>
      <p class="hint">วิธีแก้ stock: เปิด Google Sheet แท็บ <strong>Stock</strong> แล้วแก้ช่อง <strong>stockToday</strong> เป็นจำนวนที่ขายได้วันนี้ และช่อง <strong>active</strong> เป็น TRUE/FALSE</p>
    </section>
  </main>

  <script>
    const $ = (selector) => document.querySelector(selector);
    const money = (value) => `${new Intl.NumberFormat("lo-LA").format(Number(value || 0))} Kip`;
    const today = new Date().toISOString().slice(0, 10);

    $("#apiUrl").value = localStorage.getItem("fmkAdminApiUrl") || "";
    $("#adminToken").value = localStorage.getItem("fmkAdminToken") || "";
    $("#dateInput").value = today;

    function escapeHtml(value) {
      return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    function rowsOrEmpty(rows, colspan) {
      return rows.length ? rows.join("") : `<tr><td colspan="${colspan}" class="muted">ยังไม่มีข้อมูล</td></tr>`;
    }

    function getAdminConfig() {
      const apiUrl = $("#apiUrl").value.trim();
      const adminToken = $("#adminToken").value.trim();
      if (!apiUrl || !adminToken) {
        throw new Error("กรุณาใส่ URL และ Admin Token");
      }
      localStorage.setItem("fmkAdminApiUrl", apiUrl);
      localStorage.setItem("fmkAdminToken", adminToken);
      return { apiUrl, adminToken };
    }

    function renderStore(store) {
      const isOpen = store?.isOpen !== false;
      const status = $("#storeStatus");
      const message = store?.message || (isOpen ? "ร้านเปิดรับออเดอร์แล้ว" : "ร้านปิดรับออเดอร์ชั่วคราว");
      status.className = `pill ${isOpen ? "open" : "closed"}`;
      status.textContent = isOpen ? "เปิดร้านอยู่" : "ปิดร้านอยู่";
      $("#storeMessageText").textContent = message;
      $("#storeMessageInput").value = message;
    }

    async function loadSummary() {
      let config;
      try {
        config = getAdminConfig();
      } catch (error) {
        $("#status").textContent = error.message;
        return;
      }

      const date = $("#dateInput").value || today;
      $("#status").textContent = "กำลังโหลดข้อมูล...";

      try {
        const url = new URL(config.apiUrl);
        url.searchParams.set("action", "summary");
        url.searchParams.set("adminToken", config.adminToken);
        url.searchParams.set("date", date);
        url.searchParams.set("t", Date.now());
        const result = await fetch(url.toString(), { cache: "no-store" }).then(response => response.json());
        if (!result.ok) throw new Error(result.message || "โหลดข้อมูลไม่สำเร็จ");

        renderStore(result.store);
        if (result.spreadsheetUrl) {
          $("#sheetLink").href = result.spreadsheetUrl;
          $("#sheetLink").classList.add("is-visible");
        }
        $("#orderCount").textContent = result.orderCount || 0;
        $("#totalKip").textContent = money(result.totalKip);
        $("#summaryDate").textContent = result.date || date;
        $("#salesRows").innerHTML = rowsOrEmpty((result.items || []).map(item => `
          <tr>
            <td>${escapeHtml(item.name)}</td>
            <td>${escapeHtml(item.qty)}</td>
            <td>${money(item.revenueKip)}</td>
          </tr>
        `), 3);

        $("#stockRows").innerHTML = rowsOrEmpty(Object.values(result.stock || {}).map(item => `
          <tr>
            <td>${escapeHtml(item.name)}</td>
            <td>${escapeHtml(item.soldToday)}</td>
            <td>${escapeHtml(item.remaining)}</td>
            <td class="${item.available ? "ok" : "bad"}">${item.available ? "เปิดขาย" : "ขายหมด/ปิดขาย"}</td>
          </tr>
        `), 4);

        $("#status").textContent = "โหลดข้อมูลสำเร็จ";
      } catch (error) {
        $("#status").textContent = error.message || "โหลดข้อมูลไม่สำเร็จ";
      }
    }

    async function updateStore(isOpen) {
      let config;
      try {
        config = getAdminConfig();
      } catch (error) {
        $("#status").textContent = error.message;
        return;
      }

      const message = $("#storeMessageInput").value.trim() || (isOpen ? "ร้านเปิดรับออเดอร์แล้ว" : "ร้านปิดรับออเดอร์ชั่วคราว");
      $("#status").textContent = isOpen ? "กำลังเปิดร้าน..." : "กำลังปิดร้าน...";

      try {
        const result = await fetch(config.apiUrl, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            action: "updateStore",
            adminToken: config.adminToken,
            isOpen,
            message
          })
        }).then(response => response.json());

        if (!result.ok) throw new Error(result.message || "อัปเดตสถานะร้านไม่สำเร็จ");
        renderStore(result.store);
        $("#status").textContent = result.message || "อัปเดตสถานะร้านแล้ว";
      } catch (error) {
        $("#status").textContent = error.message || "อัปเดตสถานะร้านไม่สำเร็จ";
      }
    }

    $("#loadBtn").addEventListener("click", loadSummary);
    $("#openStoreBtn").addEventListener("click", () => updateStore(true));
    $("#closeStoreBtn").addEventListener("click", () => updateStore(false));
  </script>
</body>
</html>
