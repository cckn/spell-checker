import "./app.css";
import "./source-text.css";

import { txt } from "./txt";

const dictionary: { lint: string; replace: string }[] = [];
dictionary.push({ lint: "쫌", replace: "조금" });
dictionary.push({ lint: "쪼끔", replace: "조금" });
dictionary.push({ lint: "니", replace: "네" });
dictionary.push({ lint: "니가", replace: "네가" });

const template = (line: number, lint: string, replace: string) =>
  `#${line} ${lint} -> (${lint})/(${replace})`;

document.addEventListener("DOMContentLoaded", () => {
  const $src: HTMLTextAreaElement | null = document.querySelector(
    ".textarea__source"
  );
  const $dist: HTMLTextAreaElement | null = document.querySelector(
    ".textarea__dist"
  );

  if ($src && $dist) {
    $src.addEventListener("keyup", (e) => {
      console.log(e);
      console.log($src.innerText);

      $dist.innerHTML = fix($src.value).join("\n");
    });
  }
});

function fix(src: string): string[] {
  const result: string[] = [];
  ("\n" + src)
    .split("\n")
    .map((line) => ` ${line} `)
    .forEach((line, idx) => {
      dictionary.forEach((dic) => {
        const match = line.match(new RegExp(` ${dic.lint} `, "g"));
        match?.forEach(() => {
          result.push(template(idx, dic.lint, dic.replace));
        });
      });
    });
  return result;
}
