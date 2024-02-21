const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')


describe('Swag Labs', () => {

    //Scenario Login Page
    it('should login success with standard_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
    })
    it('Should Login error with locked_out_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_LOCKED_OUT_USER, process.env.PASSWORD_SAUCEDEMO)
        await LoginPage.validateLockedOutUserError()
    })
    it('Should Login error with problem_user', async() =>{
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_PROBLEM_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
    })
    // it('Should Login error with performance_glitch_user', async() =>{
    //     await LoginPage.open()
    //     await LoginPage.login(process.env.USERNAME_PERFORMANCE_GLITCH_USER, process.env.PASSWORD_SAUCEDEMO)
    //     await HomePage.validateHomePage()
    //     await LoginPage.validateGlitchUser()
    // })
    it('Should Login error with error_user', async() =>{
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_ERROR_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
    })
    it('Should Login error with visual_user', async() =>{
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_VISUAL_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
    })

    //Scenario Homepage
    it('Should Add to Cart', async() =>{
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
        await HomePage.validateAddCart()
    })
    it('Click Shopping Cart', async() =>{
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
        await HomePage.validateCart()
    })
    it('Click Checkout Button', async() =>{
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
        await HomePage.validateCart()
        await HomePage.validateCheckout()
    })
})
