module.exports = {
  "Adding product to the card": function (browser) {
    browser
      .windowMaximize()
      .url("https://gymbeam.cz/proteinove-koncentraty")
      .waitForElementVisible("body", 1000);

    browser.expect.element("body").to.be.present;
    browser.expect.title().to.contain("GymBeam");
    browser.expect.elements("a").count.to.not.equal(1);

    browser.click("#product-item-info_5075");

    browser.expect
      .url()
      .to.contain("https://gymbeam.cz/protein-true-whey-gymbeam.html");

    browser.useXpath();
    browser.expect.element(`//*[@id="attribute310"]`).to.be.present;
    browser.expect.element(`//*[@id="attribute307"]`).to.be.present;
    browser.expect.element(`//*[@id="product-addtocart-button"]`).to.be.present;

    browser.click(`//*[@id="attribute310"]/option[2]`);
    browser.click(`//*[@id="attribute307"]/option[11]`);

    exports.command = function ifDoesntWork(selector, callback) {
      let self = this;
      return this.click(
        `//*[@id="product-addtocart-button"]`,
        function (result) {
          if (result.status == 0) {
            // click succeeded, handle callback
            if (typeof callback === "function") {
              callback.call(self, result);
            }
          } else {
            // if click failed
            this.execute(function () {
              if (typeof document.body.click !== "undefined") {
                document.body.click();
              }
            })
              // try clicking again
              .click(`//*[@id="product-addtocart-button"]`, callback);
          }
        }
      );
    };
    browser.end();
  },
};
