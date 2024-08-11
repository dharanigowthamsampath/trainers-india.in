import DOMPurify from "dompurify";

const createDOMPurify = () => {
  if (typeof window === "undefined") {
    const { JSDOM } = require("jsdom");
    const window = new JSDOM("").window;
    const purify = DOMPurify(window);
    return purify;
  } else {
    return DOMPurify;
  }
};

export const purify = createDOMPurify();
