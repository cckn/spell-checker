const dictionary: { lint: string; replace: string }[] = [
  { lint: "쫌", replace: "조금" },
  { lint: "쪼금", replace: "조금" },
  { lint: "쪼금씩", replace: "조금씩" },
  { lint: "쪼금만", replace: "조금만" },

  { lint: "니", replace: "너" },
  { lint: "니가", replace: "너가" },
  { lint: "니는", replace: "너는" },
  { lint: "니를", replace: "너를" },
  { lint: "니한테", replace: "너한테" },

  { lint: "할라고", replace: "하려고" },
  { lint: "할려고", replace: "하려고" },
  { lint: "볼려고", replace: "보려고" },
  { lint: "할라면은", replace: "하려면은" },
  { lint: "할려면은", replace: "하려면은" },

  { lint: "고런", replace: "그런" },
  { lint: "요런", replace: "이런" },

  { lint: "그러고", replace: "그리고" },
  { lint: "그르케", replace: "그렇게" },

  { lint: "이러케", replace: "이렇게" },
  { lint: "이르케", replace: "이렇게" },

  { lint: "하드만", replace: "하더만" },
  { lint: "많드만", replace: "많더만" },
  { lint: "낫드만", replace: "낫더만" },
  { lint: "있드만", replace: "있더만" },

  { lint: "하드라구요", replace: "하더라고요" },
  { lint: "했드라구요", replace: "했더라고요" },
  { lint: "낫드라구요", replace: "낫더라고요" },
  { lint: "있드라구요", replace: "있더라고요" },
];

export { dictionary };
