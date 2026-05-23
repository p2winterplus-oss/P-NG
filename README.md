# Mood Playground

เว็บประเมินอารมณ์พนักงานรายวันแบบสนุก ๆ มีคำถาม 10 ข้อ ผลลัพธ์เปลี่ยนธีมตามระดับคะแนน และมีหน้า "หลังบ้าน" สำหรับดูผลในเครื่อง, ค้นหา, ล้างข้อมูล และ export CSV

## วิธีเปิด

เปิดไฟล์ `index.html` ใน browser ได้ทันที หรือ deploy ทั้งโฟลเดอร์นี้ขึ้นบริการ static hosting เช่น Netlify, Vercel หรือ GitHub Pages

## หลังบ้าน

- กดปุ่ม `หลังบ้าน`
- รหัสเริ่มต้นคือ `1234`
- เปลี่ยนรหัสได้ในไฟล์ `app.js` ที่ตัวแปร `ADMIN_PIN`

## Google Sheets กลาง

สร้างชีตกลางไว้แล้วที่:

https://docs.google.com/spreadsheets/d/14Wuc7-6WldiyCyWt_iidjLfyrSipSqG2tyhb-rjMoDc/edit

วิธีเชื่อมเว็บให้ส่งข้อมูลเข้าชีต:

1. เปิด Google Sheet ด้านบน
2. ไปที่ Extensions > Apps Script
3. วางโค้ดจากไฟล์ `google-apps-script.gs`
4. กด Deploy > New deployment
5. เลือก type เป็น Web app
6. ตั้งค่า Execute as เป็น Me
7. ตั้งค่า Who has access เป็น Anyone
8. Copy Web app URL
9. เปิด `app.js` แล้วใส่ URL ที่ตัวแปร `SHEET_WEB_APP_URL`
10. commit และ push ขึ้น GitHub อีกครั้ง

## หมายเหตุสำคัญ

ถ้ายังไม่ได้ใส่ `SHEET_WEB_APP_URL` เว็บจะเก็บผลไว้ใน `localStorage` ของ browser เครื่องนั้น ๆ เหมาะกับเดโมหรือใช้งานภายในแบบง่าย หลังจากใส่ Apps Script URL แล้ว ข้อมูลจะถูกส่งเข้าชีตกลางและยังมีสำเนาในเครื่องผู้ใช้ด้วย
