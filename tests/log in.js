module.exports = {
  "Log in test": function (browser) {
    browser.windowMaximize();
    browser.url("https://gymbeam.cz/");
    browser.waitForElementVisible("body", 1000);

    browser.expect.element("body").to.be.present;
    browser.expect.title().to.contain("GymBeam");

    browser.useXpath();

    browser.end();
  },
};
