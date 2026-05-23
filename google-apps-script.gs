const SPREADSHEET_ID = "1bJNBiiy8S5u_F2X3L6YTug5LvxtKU9f0h4qxx55xMe8";
const SHEET_NAME = "Responses";

function doPost(e) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  const payload = JSON.parse(e.postData.contents || "{}");
  const answers = Array.isArray(payload.answers) ? payload.answers : [];

  sheet.appendRow([
    payload.createdAt || new Date().toISOString(),
    payload.name || "",
    payload.age || "",
    payload.score || "",
    payload.level || "",
    payload.levelKey || "",
    answers[0] || "",
    answers[1] || "",
    answers[2] || "",
    answers[3] || "",
    answers[4] || "",
    answers[5] || "",
    answers[6] || "",
    answers[7] || "",
    answers[8] || "",
    answers[9] || "",
    payload.userAgent || "",
    payload.source || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, app: "Mood Playground" }))
    .setMimeType(ContentService.MimeType.JSON);
}
