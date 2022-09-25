module.exports = {
  "Go to Card": function (browser) {
    browser
      .windowMaximize()
      .url("https://gymbeam.cz/")
      .waitForElementVisible("body", 1000);

    browser.expect.element("body").to.be.present;
    browser.expect.title().to.contain("GymBeam");

    browser.click(".minicart-wrapper a");

    browser.expect.url().to.contain("https://gymbeam.cz/checkout/cart/");

    browser.useXpath();
    browser.expect.elements("div").count.to.not.equal(1);
    module.exports.command = function (selector) {
      this.execute(
        function (selector) {
          document.querySelector(selector).scrollIntoView();
        },
        [`"//*[@id="maincontent"]/div[4]/div/div[2]/p[2]/a"`]
      ).click(`"//*[@id="maincontent"]/div[4]/div/div[2]/p[2]/a"`);
    };

    browser.expect.url().to.contain("https://gymbeam.cz/");

    browser.end();
  },
};
