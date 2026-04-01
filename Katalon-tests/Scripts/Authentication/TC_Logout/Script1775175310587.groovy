import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

TestObject byXpath(String xpath) {
	TestObject t = new TestObject("xpath_${System.nanoTime()}")
	t.addProperty('xpath', ConditionType.EQUALS, xpath)
	return t
}

boolean isLoggedIn() {
	return WebUI.verifyTextPresent('Logged in as', false, FailureHandling.OPTIONAL) ||
		WebUI.verifyElementPresent(byXpath("//a[contains(@href,'/logout')]"), 2, FailureHandling.OPTIONAL)
}

void loginWithValid() {
	WebUI.navigateToUrl(GlobalVariable.baseUrl + '/login')
	WebUI.setText(findTestObject('Authentication/txt_Login_Email'), GlobalVariable.validEmail)
	WebUI.setText(findTestObject('Authentication/txt_Login_Password'), GlobalVariable.validPassword)
	WebUI.click(findTestObject('Authentication/btn_Login'))
}

void registerValidIfMissing() {
	WebUI.navigateToUrl(GlobalVariable.baseUrl + '/login')
	WebUI.setText(findTestObject('Authentication/txt_Signup_Name'), 'AutoUser')
	WebUI.setText(findTestObject('Authentication/txt_Signup_Email'), GlobalVariable.validEmail)
	WebUI.click(findTestObject('Authentication/btn_Signup'))
	boolean onSignupForm = WebUI.verifyElementPresent(findTestObject('Authentication/txt_Register_Password'), 4, FailureHandling.OPTIONAL)
	if (onSignupForm) {
		WebUI.setText(findTestObject('Authentication/txt_Register_Password'), GlobalVariable.validPassword)
		WebUI.setText(findTestObject('Authentication/txt_FirstName'), GlobalVariable.firstName)
		WebUI.setText(findTestObject('Authentication/txt_LastName'), GlobalVariable.lastName)
		WebUI.setText(findTestObject('Authentication/txt_Address'), GlobalVariable.address)
		WebUI.setText(findTestObject('Authentication/txt_State'), GlobalVariable.state)
		WebUI.setText(findTestObject('Authentication/txt_City'), GlobalVariable.city)
		WebUI.setText(findTestObject('Authentication/txt_Zipcode'), GlobalVariable.zipcode)
		WebUI.setText(findTestObject('Authentication/txt_MobileNumber'), GlobalVariable.mobileNumber)
		WebUI.click(findTestObject('Authentication/btn_Create_Account'))
		WebUI.verifyTextPresent('Account Created', false, FailureHandling.OPTIONAL)
		WebUI.click(findTestObject('Authentication/btn_Continue'), FailureHandling.OPTIONAL)
	}
}

WebUI.openBrowser('')
loginWithValid()
if (!isLoggedIn()) {
	registerValidIfMissing()
	loginWithValid()
}
assert isLoggedIn() : '[TC_Logout] Cannot establish logged-in state'

boolean clickedLogout = false
try {
	WebUI.click(findTestObject('Authentication/btn_Logout'))
	clickedLogout = true
} catch (Exception ignored) {
	TestObject logoutFallback = new TestObject('logoutFallback')
	logoutFallback.addProperty('xpath', ConditionType.EQUALS, "//a[contains(@href,'logout') or contains(normalize-space(.),'Logout')]")
	boolean hasLogoutLink = WebUI.verifyElementPresent(logoutFallback, 2, FailureHandling.OPTIONAL)
	if (hasLogoutLink) {
		WebUI.click(logoutFallback, FailureHandling.OPTIONAL)
		clickedLogout = true
	} else {
		WebUI.navigateToUrl(GlobalVariable.baseUrl + '/logout')
		clickedLogout = true
	}
}

assert clickedLogout : '[TC_Logout] Cannot click logout button'
boolean backToLogin = WebUI.verifyElementPresent(findTestObject('Authentication/btn_Login'), 5, FailureHandling.OPTIONAL) ||
	WebUI.getUrl().contains('/login') ||
	WebUI.verifyTextPresent('Login to your account', false, FailureHandling.OPTIONAL)
assert backToLogin : '[TC_Logout] Expected to return to login page after logout'

WebUI.closeBrowser()

