// Script kiểm (README mục 12): node tools/check.js
const fs = require("fs"), path = require("path");
const m = JSON.parse(fs.readFileSync("book/manifest.json", "utf8"));
let errors = 0, warns = 0;
const err = (...a) => { errors++; console.log("LỖI  ", ...a); };
const warn = (...a) => { warns++; console.log("CẢNH BÁO", ...a); };
const chapters = [];
for (const p of m.parts) for (const c of p.chapters) chapters.push({ ...c, file: `book/${p.id}/${c.slug}.md` });
const maxCh = Math.max(...chapters.filter(c => !c.label).map(c => c.num));
const reqHead = ["## Mục tiêu học", "## Tình huống FoodNow", "## Bài tập", "## Sai lầm thường gặp", "## Tóm tắt & tiếp theo"];
for (const c of chapters) {
  if (!fs.existsSync(c.file)) { err("thiếu file", c.file); continue; }
  const t = fs.readFileSync(c.file, "utf8");
  const words = t.split(/\s+/).filter(Boolean).length;
  const isApp = !!c.label, isCase = c.num >= 42 && c.num <= 46;
  if (!isApp && !isCase && (words < 2500 || words > 5500)) warn(`${c.slug}: ${words} từ (ngoài 2.500–5.500)`);
  if ((t.match(/^```/gm) || []).length % 2) err(c.slug, "code fence không cân bằng");
  if (!isApp && !isCase && c.num !== 47) for (const h of reqHead) if (!t.includes(h)) err(c.slug, "thiếu mục", h);
  if (!isApp && !/```mermaid|\n\|.*\|\n\|[-| ]+\|/.test(t)) warn(c.slug, "không có Mermaid/bảng");
  // đường dẫn templates
  for (const mm of t.matchAll(/`(templates\/[A-Za-z0-9_\-./]+)`/g)) { const p = mm[1]; if (!fs.existsSync(p) && !fs.existsSync(p.replace(/\/$/, ""))) err(c.slug, "đường dẫn không tồn tại:", p); }
  // tham chiếu chương
  for (const mm of t.matchAll(/\bCh(\d{1,2})(?:[–-]Ch?(\d{1,2}))?/g)) { for (const n of [mm[1], mm[2]].filter(Boolean)) if (+n < 1 || +n > maxCh) err(c.slug, "tham chiếu chương lạ: Ch" + n); }
}
// đường dẫn trong templates
function walk(d) { return fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]); }
for (const f of walk("templates")) if (f.endsWith(".md")) {
  const t = fs.readFileSync(f, "utf8");
  if (!/Cách dùng cho dự án của bạn/.test(t)) err(f, "thiếu mục 'Cách dùng cho dự án của bạn'");
  if (!/\*\*Tên tài liệu:\*\*/.test(t)) err(f, "thiếu khung 4 dòng đầu");
  for (const mm of t.matchAll(/`(templates\/[A-Za-z0-9_\-./]+\.(?:md|csv))`/g)) if (!fs.existsSync(mm[1])) err(f, "đường dẫn không tồn tại:", mm[1]);
}
// nhân vật/ngày chuẩn: cảnh báo nếu xuất hiện tên lạ thường gặp
const banned = [/T39\s*\(0?2\/10/, /v0\.17\.0/];
for (const c of chapters) { if (!fs.existsSync(c.file)) continue; const t = fs.readFileSync(c.file, "utf8"); for (const b of banned) if (b.test(t)) err(c.slug, "khớp mẫu cấm", b); }
console.log(`Xong: ${errors} lỗi, ${warns} cảnh báo, ${chapters.length} mục.`);
process.exit(errors ? 1 : 0);
