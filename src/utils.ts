export function copyToClipboard(val: string) {
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
}

let removeToast: NodeJS.Timeout;

export function toast(string: string, time: number) {
  const toast = document.getElementById("toast");
  if (toast) {
    toast.classList.contains("reveal")
      ? (clearTimeout(removeToast),
        (removeToast = setTimeout(function () {
          document.getElementById("toast")?.classList.remove("reveal");
        }, time)))
      : (removeToast = setTimeout(function () {
          document.getElementById("toast")?.classList.remove("reveal");
        }, time));
    toast.classList.add("reveal"), (toast.innerText = string);
  }
}
