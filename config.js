// ใส่ Google Maps Platform API Key ตรงนี้เพื่อใช้ฐานข้อมูลค้นหาสถานที่จาก Google Maps จริง ๆ
// ต้องเปิดใช้งาน Places API (New) และจำกัด key ให้ปลอดภัยก่อนใช้งานจริง
window.FAI_MAI_KHUA_CONFIG = {
  googleMapsApiKey: "",
  searchProvider: "auto" // auto = ใช้ Google ถ้ามี key, ถ้าไม่มีจะใช้ระบบ fallback
};
