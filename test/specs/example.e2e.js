// describe("My Login application", () => {
//   it("should login with valid credentials", async () => {
//     await browser.url(`https://the-internet.herokuapp.com/login`);

//     await $("#username").setValue("tomsmith");
//     await $("#password").setValue("SuperSecretPassword!");
//     await $('button[type="submit"]').click();

//     await expect($("#flash")).toBeExisting();
//     await expect($("#flash")).toHaveTextContaining(
//       "You logged into a secure area!"
//     );
//   });
// });




describe("My first test suite", () => {
  it("My step 1", async () => {
    await browser.url("https://www.example.com");
    await browser.pause(1000);

    // modern way
    await expect(browser).toHaveTitleContaining("Example Domain");
    await expect(browser).toHaveUrlContaining("example.com");

    let pageElement = await $("h1");

    await expect(pageElement).toExist();
    await expect(pageElement).toBeDisplayed();
    await expect(pageElement).toHaveTextContaining("Example");
  });

  it("My step 2", async () => {
    await browser.url("https://www.saucedemo.com/");

    let userInput = await $("#user-name");
    let userPass = await $("#password");
    let signInButton = await $("#login-button");
    await userInput.setValue("standard_user");
    await userPass.setValue("secret_sauce");
    await signInButton.click();

    let invContainer = await $("#inventory_container");
    await expect(invContainer).toBeDisplayed();
  });

  it("Checkbo", async () => {
    await browser.url("https://devexpress.github.io/testcafe/example/");

    let selectBox = await $("#preferred-interface");
    await browser.pause(2000);
    await selectBox.selectByVisibleText("JavaScript API");
    await browser.pause(2000);
    let option = await $("option=JavaScript API");
    await browser.pause(2000);
    await expect(option).toBeSelected();
    await browser.pause(2000);
  });

  it("Resize browser size", async () => {
    await browser.setWindowSize(716, 775);
    await browser.pause(2000);
    await browser.url("https://www.example.com");

    let selector = await $("h1");
    await selector.waitForExist();
    await selector.waitForDisplayed();
  });

  it("Device emulation", async () => {
    let mobile = [357, 812];
    let tablet = [1024, 768];
    let desktop = [1650, 1050];

    await browser.setWindowSize(mobile[0], mobile[1]);
    await browser.pause(2000);
    await browser.setWindowSize(tablet[0], tablet[1]);
    await browser.pause(2000);
    await browser.setWindowSize(desktop[0], desktop[1]);
    await browser.pause(2000);
  });

  it.only("Take screenshot", async () => {
    //full page screenshot
    await browser.url("https://www.example.com");
    await browser.saveScreenshot("ss.png");

    let title = await $("h1")
    await title.saveScreenshot("title-screenshot.png");


  })
  
});
