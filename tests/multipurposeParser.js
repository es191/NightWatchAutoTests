module.exports = {
  "Parser JS + Nightwatch": function (browser) {
    browser.url("https://gymbeam.cz/proteiny");
    window.addEventListener("DOMContentLoaded", () => {
      const body = document.querySelector("body");
      let textNodes = [];

      function recursy(element) {
        element.childNodes.forEach((node) => {
          if (node.nodeName.match(/^a\d/)) {
            const object = {
              header: node.nodeName,
              content: node.textContent,
            };
            textNodes.push(object);
          } else {
            recursy(node);
          }
        });
      }
      recursy(body);
      console.log(textNodes);

      browser.pause(3000);
    });
  },
};
