// Node.js script to generate gallery.json
const fs = require("fs");
const path = require("path");

const photoDir = "./photos";
const output = [];

fs.readdirSync(photoDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if ([".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(ext)) {
    output.push(`${photoDir}/${file}`);
  }
});

fs.writeFileSync("gallery.json", JSON.stringify(output, null, 2));
console.log("✅ gallery.json created with", output.length, "images.");
