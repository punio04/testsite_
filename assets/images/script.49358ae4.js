/* modules */

document.addEventListener("DOMContentLoaded", () => {
  setUpAccordion();
});

const setUpAccordion = () => {
  const details = document.querySelectorAll(".js-details");
  const isRunning = "running"; // アニメーション実行中のときに付与する予定のカスタムデータ属性の値
  const isOpend = "is-opened"; // アイコン操作用のクラス名

  details.forEach((element) => {
    const summary = element.querySelector(".js-summary");
    const content = element.querySelector(".js-content");

    summary.addEventListener("click", (event) => {
      event.preventDefault();
      if (element.dataset.animStatus === isRunning) {
        return;
      }
      if (element.open) {
        element.classList.toggle(isOpend);
        const closingAnim = content.animate(closingAnimKeyframes(content), animTiming);

        element.dataset.animStatus = isRunning;
        closingAnim.onfinish = () => {
          element.removeAttribute("open");
          element.dataset.animStatus = "";
        };
      } else {
        element.setAttribute("open", "true");
        element.classList.toggle(isOpend);

        const openingAnim = content.animate(openingAnimKeyframes(content), animTiming);
        element.dataset.animStatus = isRunning;
        openingAnim.onfinish = () => {
          element.dataset.animStatus = "";
        };
      }
    });
  });
};

/* アニメーションの時間とイージング */
const animTiming = {
  duration: 400,
  easing: "ease-out",
};

/*　アコーディオンを閉じるときのキーフレーム　*/
const closingAnimKeyframes = (content) => [
  {
    height: content.offsetHeight + "px",
    opacity: 1,
  },
  {
    height: 0,
    opacity: 0,
  },
];

/* アコーディオンを開くときのキーフレーム */
const openingAnimKeyframes = (content) => [
  {
    height: 0,
    opacity: 0,
  },
  {
    height: content.offsetHeight + "px",
    opacity: 1,
  },
];

//
if (document.querySelector("button[type='submit']") != null) {
  if (localStorage.getItem("contactMethod")) {
    localStorage.removeItem("contactMethod");
  }
  const radios = document.querySelectorAll("input[type='radio']");
  radios.forEach(function (elem) {
    elem.addEventListener("click", function () {
      if (localStorage.getItem("contactMethod")) {
        localStorage.removeItem("contactMethod");
      }
      localStorage.setItem("contactMethod", elem.getAttribute("value"));
    });
  });
} else {
  if (localStorage.getItem("contactMethod") === "line") {
    document.querySelector(".line").classList.remove("d-n");
  } else {
    document.querySelector(".mail").classList.remove("d-n");
  }
}
