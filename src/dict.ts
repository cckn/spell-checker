const dictionary: { lint: string; replace: string }[] = [
  { lint: "쫌", replace: "조금" },
  { lint: "쪼끔", replace: "조금" },
  { lint: "쪼금", replace: "조금" },
  { lint: "쪼끔씩", replace: "조금씩" },
  { lint: "쪼금씩", replace: "조금씩" },
  { lint: "쪼끔만", replace: "조금만" },
  { lint: "쪼금만", replace: "조금만" },

  { lint: "니", replace: "네" },
  { lint: "니가", replace: "네가" },
  { lint: "니는", replace: "너는" },
  { lint: "니를", replace: "너를" },
  { lint: "니한테", replace: "너한테" },

  { lint: "갖고", replace: "가지고" },
  { lint: "갖구", replace: "가지구" },

  { lint: "그래갖구", replace: "그래가지구" },
  { lint: "그래갖고", replace: "그래가지고" },

  { lint: "할라고", replace: "하려고" },
  { lint: "할려고", replace: "하려고" },
  { lint: "할라면은", replace: "하려면은" },
  { lint: "할려면은", replace: "하려면은" },

  { lint: "같애도", replace: "같아도" },
  { lint: "같애서", replace: "같아서" },
  { lint: "같애요", replace: "같아요" },

  { lint: "고런", replace: "그런" },
  { lint: "그러고", replace: "그리고" },
  { lint: "그르케", replace: "그렇게" },
  { lint: "이러케", replace: "이렇게" },
];

export { dictionary };
