const fs = require("fs");
const { createCanvas } = require("canvas");

const text = process.argv.slice(2)[0];
function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split(" "),
    line = "",
    lineCount = 0,
    i,
    test,
    metrics;

  for (i = 0; i < words.length; i++) {
    test = words[i];
    metrics = context.measureText(test);
    while (metrics.width > maxWidth) {
      // Determine how much of the word will fit
      test = test.substring(0, test.length - 1);
      metrics = context.measureText(test);
    }
    if (words[i] != test) {
      words.splice(i + 1, 0, words[i].substr(test.length));
      words[i] = test;
    }

    test = line + words[i] + " ";
    metrics = context.measureText(test);

    if (metrics.width > maxWidth && i > 0) {
      context.fillText(line, x, y);
      line = words[i] + " ";
      y += lineHeight;
      lineCount++;
    } else {
      line = test;
    }
  }

  context.fillText(line, x, y);
}

const width = 1024;
const height = 565;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#805AD5";
ctx.fillRect(0, 0, width, height);

ctx.font = "bold 70px Inter";
ctx.fillStyle = "#EDF2F7";

wrapText(ctx, text, 100, 200, 900, 70 + 16);

ctx.font = "bold 32px Inter";
ctx.fillText("hmble.dev", 416, 520);
const buffer = canvas.toBuffer("image/png");

let temp = text.replace("?", "").trim();
temp = temp.replace(/\s/g, "-").toLowerCase();
fs.writeFileSync(`./static/featured/${temp}.png`, buffer);
