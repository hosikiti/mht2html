import quotedPrintable from "npm:quoted-printable";
import encodingJapanese from "npm:encoding-japanese";

const HTML_START_TAG = "<!DOCTYPE html>";
const HTML_END_TAG = "</html>";

const main = async () => {
  if (Deno.args.length == 0) {
    console.error("file path is missing");
    return;
  }
  const filePath = Deno.args[0];
  const text = await Deno.readTextFile(filePath);

  // Extracts HTML
  const htmlStart = text.indexOf(HTML_START_TAG);
  const htmlEnd = text.indexOf(HTML_END_TAG);
  const rawHtml = text.substring(htmlStart, htmlEnd + HTML_END_TAG.length);

  // MHT's body is encoded by quoted-printable
  const decoded = quotedPrintable.decode(rawHtml);
  // Converts to UTF-8
  const utf8data = encodingJapanese.convert(decoded, {
    to: "UNICODE",
  });
  // Replace HTML charset to UTF-8 to avoid garbled characters
  const html = utf8data.replace("Shift_JIS", "utf-8");
  console.log(html);
};

main();
