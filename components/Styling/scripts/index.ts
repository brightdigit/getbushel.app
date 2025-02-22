import "./../styles/styles.css";

import Plausible from "plausible-tracker";

const pageID = "7d44e5cdd9bf0241d295591162f4c69ac1de5e09";

const plausible = Plausible({
  domain: "getbushel.app",
});

window.addEventListener("load", () => {
  plausible.trackPageview();
  document.querySelectorAll("form.signup").forEach((element) => {
    const formElement = element as HTMLFormElement;
    const propsString =
      element.getAttribute("data-props")?.replaceAll("'", '"') ?? "{}";
    const props = JSON.parse(propsString) || {};
    props.pageID = pageID;
    if (formElement) {
      formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        plausible.trackEvent("signup", {
          callback: () => {
            formElement.submit();
          },
          props,
        });
        setTimeout(() => {
          formElement.submit();
        }, 500);
      });
    }
  });
});

document.body.style.visibility = "visible";
