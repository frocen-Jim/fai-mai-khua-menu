// ใส่ Google Maps Platform API Key ตรงนี้เพื่อใช้ฐานข้อมูลค้นหาสถานที่จาก Google Maps จริง ๆ
// ต้องเปิดใช้งาน Places API (New) และจำกัด key ให้ปลอดภัยก่อนใช้งานจริง
window.FAI_MAI_KHUA_CONFIG = {
  googleMapsApiKey: "",
  searchProvider: "auto", // auto = ใช้ Google ถ้ามี key, ถ้าไม่มีจะใช้ระบบ fallback

  // ระบบ stock / ยอดขายรายวัน
  // 1) สร้าง Google Apps Script จากไฟล์ google-apps-script-stock-backend.gs
  // 2) Deploy เป็น Web app
  // 3) วาง URL ตรง stockApiUrl แล้วอัปไฟล์ขึ้น GitHub
  stockApiUrl: "https://script.google.com/macros/s/AKfycbx3PEEC4lw4sDDYnzB5L--SryIj_o_6wzvFmvn5kBYsNmBjXRNrn4V_yF1LY9AG8h3n/exec",
  stockApiToken: "fai-mai-khua-order",
  stockRefreshMs: 45000
};
