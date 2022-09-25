module.exports = {
  "To take a screenshot": function (browser) {
    browser
      .windowMaximize()
      .url("https://gymbeam.cz/")
      .waitForElementVisible("body", 3000);

    browser.expect.element("body").to.be.present;
    browser.expect.title().to.contain("GymBeam");
    browser.expect.elements("a").count.to.not.equal(1);

    browser.assert.elementPresent(
      "#widget-homepage-categories > div > a:nth-child(2)"
    );

    browser.click("#widget-homepage-categories > div > a:nth-child(2)");

    browser.expect
      .url()
      .to.contain("https://gymbeam.cz/budovani-svalove-hmoty");

    browser
      .waitForElementVisible("body", 500)
      .deleteCookies()
      .resizeWindow(1920, 1080);

    browser.saveScreenshot("./screenshots/TheFirstScreenshot.png");

    browser.expect.element(
      "#html-body > div.page-wrapper > footer > div > div.footer-cms-wrapper > div:nth-child(1) > div > div > div > ul > li:nth-child(1) > a"
    ).to.be.present;
    browser.click(
      "#html-body > div.page-wrapper > footer > div > div.footer-cms-wrapper > div:nth-child(1) > div > div > div > ul > li:nth-child(1) > a"
    );

    browser.expect.url().to.contain("https://gymbeam.cz/kontakt");
    browser
      .waitForElementVisible("body", 500)
      .deleteCookies()
      .resizeWindow(1920, 1080)
      .saveScreenshot("./screenshots/contactInformation.png");

    browser.end();
  },
};
