// ใส่ Google Maps Platform API Key ตรงนี้เพื่อใช้ฐานข้อมูลค้นหาสถานที่จาก Google Maps จริง ๆ
// ต้องเปิดใช้งาน Places API (New) และจำกัด key ให้ปลอดภัยก่อนใช้งานจริง
window.FAI_MAI_KHUA_CONFIG = {
  googleMapsApiKey: "",
  searchProvider: "auto", // auto = ใช้ Google ถ้ามี key, ถ้าไม่มีจะใช้ระบบ fallback

  // ระบบ stock / ยอดขายรายวัน
  // 1) สร้าง Google Apps Script จากไฟล์ google-apps-script-stock-backend.gs
  // 2) Deploy เป็น Web app
  // 3) วาง URL ตรง stockApiUrl แล้วอัปไฟล์ขึ้น GitHub
  stockApiUrl: "",
  stockApiToken: "fai-mai-khua-order",
  stockRefreshMs: 45000
};
