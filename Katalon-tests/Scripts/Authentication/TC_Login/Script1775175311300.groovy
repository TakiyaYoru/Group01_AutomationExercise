import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.util.KeywordUtil
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

KeywordUtil.logInfo("[TC_Login] scenario=${scenario} email=${email} expected=${expected}")

TestObject byXpath(String xpath) {
	TestObject t = new TestObject("xpath_${System.nanoTime()}")
	t.addProperty('xpath', ConditionType.EQUALS, xpath)
	return t
}

boolean isLoggedIn() {
	boolean hasLoggedText = WebUI.verifyTextPresent('Logged in as', false, FailureHandling.OPTIONAL)
	boolean hasLogout = WebUI.verifyElementPresent(byXpath("//a[contains(@href,'/logout') or contains(normalize-space(.),'Logout')]"), 2, FailureHandling.OPTIONAL)
	return hasLoggedText || hasLogout
}

void ensureAccountExistsAndLogin(String userEmail, String userPassword) {
	WebUI.navigateToUrl(GlobalVariable.baseUrl + '/login')
	WebUI.setText(findTestObject('Authentication/txt_Signup_Name'), 'AutoUser')
	WebUI.setText(findTestObject('Authentication/txt_Signup_Email'), userEmail)
	WebUI.click(findTestObject('Authentication/btn_Signup'))

	boolean onSignupForm = WebUI.verifyElementPresent(findTestObject('Authentication/txt_Register_Password'), 4, FailureHandling.OPTIONAL)
	if (onSignupForm) {
		WebUI.setText(findTestObject('Authentication/txt_Register_Password'), userPassword)
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

	WebUI.navigateToUrl(GlobalVariable.baseUrl + '/login')
	WebUI.setText(findTestObject('Authentication/txt_Login_Email'), userEmail)
	WebUI.setText(findTestObject('Authentication/txt_Login_Password'), userPassword)
	WebUI.click(findTestObject('Authentication/btn_Login'))
}

WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/login')
WebUI.setText(findTestObject('Authentication/txt_Login_Email'), email ?: '')
WebUI.setText(findTestObject('Authentication/txt_Login_Password'), password ?: '')
WebUI.click(findTestObject('Authentication/btn_Login'))

if ((expected ?: '').toLowerCase() == 'success') {
	boolean loggedIn = isLoggedIn()
	if (!loggedIn && email && password) {
		ensureAccountExistsAndLogin(email, password)
		loggedIn = isLoggedIn()
	}

	assert loggedIn : '[TC_Login] Expected success but login state was not detected'
} else {
	boolean hasLoginError = WebUI.verifyTextPresent('Your email or password is incorrect!', false, FailureHandling.OPTIONAL)
	boolean hasRequiredError = WebUI.verifyElementPresent(byXpath("//input[@name='email' and @required]"), 1, FailureHandling.OPTIONAL)
	boolean stillOnLogin = WebUI.getUrl().contains('/login')
	assert hasLoginError || stillOnLogin || hasRequiredError : '[TC_Login] Expected login failure but no failure signal found'
}

WebUI.closeBrowser()

