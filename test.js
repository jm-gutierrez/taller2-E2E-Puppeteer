var firstName = textoAleatorio(12);
var lastName = textoAleatorio(8);
var username = textoAleatorio(9);
var password = textoAleatorio(6);

describe("Registrar Usuario", () => {
    test("registro de usuario", async () => {
        await page.goto("https://angular-6-registration-login-example.stackblitz.io/register");
        await page.waitForNavigation();
        await page.click("input[formcontrolname=firstName]");
        await page.type("input[formcontrolname=firstName]", firstName);
        await page.click("input[formcontrolname=lastName]");
        await page.type("input[formcontrolname=lastName]", lastName);
        await page.click("input[formcontrolname=username]");
        await page.type("input[formcontrolname=username]", username);
        await page.click("input[formcontrolname=password]");
        await page.type("input[formcontrolname=password]", password);
        await expect(page).toClick('button', {text: 'Register'});
        await page.waitForNavigation();
        await page.click("input[formcontrolname=username]");
        await page.type("input[formcontrolname=username]", username);
        await page.click("input[formcontrolname=password]");
        await page.type("input[formcontrolname=password]", password);
        await expect(page).toClick('button', {text: 'Login'});
        await page.waitForNavigation();
        await expect(page).toMatch('Hi '+firstName+'!')
    }, 20000);
});

function textoAleatorio(size) {
    var result = '';
    var letras = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = letras.size;
    for (var i = 0; i < size; i++) {
        result += letras.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}