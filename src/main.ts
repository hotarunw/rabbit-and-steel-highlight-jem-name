const keywords = {
  オパール: "#7f5ff2",
  サファイア: "#64b7f8",
  ルビー: "#ff3c5a",
  ガーネット: "#fde6b6",
  エメラルド: "#39feae",
  Opal: "#7f5ff2",
  Sapphire: "#64b7f8",
  Ruby: "#ff3c5a",
  Garnet: "#fde6b6",
  Emerald: "#39feae",
};

const highlight = () => {
  const elements = [
    ...document.getElementsByTagName("p"),
    ...document.getElementsByTagName("span"),
    ...document.getElementsByTagName("div"),
    ...document.getElementsByTagName("td"),
    ...document.getElementsByTagName("li"),
    ...document.getElementsByTagName("a"),
  ];

  for (const element of elements) {
    if (
      element.innerHTML?.includes("#Emerald_Lakeside") ||
      element.innerHTML?.includes("Emerald_Lakeside.png")
    ) {
      continue; // ハードコーディング
    }
    if (
      [...element.children].some(
        (child) => !["br", "div"].includes(child.tagName.toLowerCase())
      )
    ) {
      continue; // brとdiv以外の子要素がある場合はスキップ
    }

    for (const [keyword, color] of Object.entries(keywords)) {
      if (
        element.textContent?.toLowerCase().includes(keyword.toLowerCase()) &&
        !element.style.backgroundColor // 背景色設定済みの場合はスキップ
      ) {
        element.innerHTML = element.innerHTML.replace(
          new RegExp(keyword, "gi"),
          `<span style="font-weight: bold; background-color: ${color}; color: black;">${keyword}</span>`
        );
      }
    }
  }
};

(async () => {
  console.log("Hello, world!");

  // FIXME: notesで変更が元に戻ることがあるので、5回繰り返す
  for (let i = 0; i < 1; i++) {
    highlight();
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
})();
