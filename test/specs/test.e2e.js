const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')


describe('Swag Labs', () => {
    it('should login with standard_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
    })
    it('should get login error with locked_out_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_LOCKED_OUT_USER, process.env.PASSWORD_SAUCEDEMO)
        await LoginPage.validateLockedOutUserError()
    })
    it('Should Login error with problem_user', async() =>{
        //TODO : akan dibuatkan scenario negative case
    })
    it('Should Login error with performance_glitch_user', async() =>{
        //TODO : akan dibuatkan scenario negative case
    })
    it('Should Login error with error_user', async() =>{
        //TODO : akan dibuatkan scenario negative case
    })
    it('Should Login error with visual_user', async() =>{
        //TODO : akan dibuatkan scenario negative case
    })
})
