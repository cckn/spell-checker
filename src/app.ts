import "./css/app.css";
import "./css/grid.css";
import "./css/toast.css";
import "./css/source-text.css";
import { dictionary } from "./dict";
import { copyToClipboard, toast } from "./utils";

const template = (line: number, lint: string, replace: string) =>
  `#${line} ${lint} -> (${lint})/(${replace})`;

document.addEventListener("DOMContentLoaded", () => {
  dictionary.forEach((dict) => {
    console.log(
      `${" ".repeat(10 - dict.lint.length * 2)}${dict.lint}  ->  ${
        dict.replace
      }`
    );
  });

  const $src: HTMLTextAreaElement | null = document.querySelector(
    ".textarea__source"
  );
  const $dist: HTMLTextAreaElement | null = document.querySelector(
    ".textarea__dist"
  );
  const $text__count: HTMLParagraphElement | null = document.querySelector(
    ".text__count"
  );
  const $btn__copy: HTMLButtonElement | null = document.querySelector(
    ".btn__copy"
  );

  if ($src && $dist && $text__count && $btn__copy) {
    $src.addEventListener("keyup", (e) => {
      const result = fix($src.value);

      $dist.innerHTML = result.join("\n");
      $text__count.innerText = result.length.toString();
    });

    $btn__copy?.addEventListener("click", () => {
      if ($dist) {
        copyToClipboard($dist?.value);
        toast(`${$text__count.innerText} 줄이 복사됐습니다."`, 2000);
      }
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
