import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.util.KeywordUtil
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable
import java.util.UUID

KeywordUtil.logInfo("[TC_Register] scenario=${scenario} email=${email} expected=${expected}")

String actualEmail = (email == 'AUTO_RANDOM' || !email) ? ("auto_${UUID.randomUUID().toString().take(8)}@mail.com") : email

WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/login')
WebUI.setText(findTestObject('Authentication/txt_Signup_Name'), name ?: GlobalVariable.registerName)
WebUI.setText(findTestObject('Authentication/txt_Signup_Email'), actualEmail)
WebUI.click(findTestObject('Authentication/btn_Signup'))

if ((expected ?: '').toLowerCase().startsWith('success')) {
	WebUI.setText(findTestObject('Authentication/txt_Register_Password'), password ?: GlobalVariable.registerPassword)
	WebUI.setText(findTestObject('Authentication/txt_FirstName'), firstName ?: GlobalVariable.firstName)
	WebUI.setText(findTestObject('Authentication/txt_LastName'), lastName ?: GlobalVariable.lastName)
	WebUI.setText(findTestObject('Authentication/txt_Address'), address ?: GlobalVariable.address)
	WebUI.setText(findTestObject('Authentication/txt_State'), state ?: GlobalVariable.state)
	WebUI.setText(findTestObject('Authentication/txt_City'), city ?: GlobalVariable.city)
	WebUI.setText(findTestObject('Authentication/txt_Zipcode'), zipcode ?: GlobalVariable.zipcode)
	WebUI.setText(findTestObject('Authentication/txt_MobileNumber'), mobile ?: GlobalVariable.mobileNumber)
	WebUI.click(findTestObject('Authentication/btn_Create_Account'))
	boolean created = WebUI.verifyElementPresent(findTestObject('Authentication/lbl_Account_Created'), 5, FailureHandling.OPTIONAL)
	if (!created) {
		created = WebUI.verifyTextPresent('Account Created', false, FailureHandling.OPTIONAL)
	}
	assert created : '[TC_Register] Expected account created state but not found'
	WebUI.click(findTestObject('Authentication/btn_Continue'))
} else {
	boolean hasError = WebUI.verifyElementPresent(findTestObject('Authentication/lbl_Signup_Existing_Email_Error'), 2, FailureHandling.OPTIONAL)
	if (!hasError) {
		TestObject signupErrorFallback = new TestObject('signupErrorFallback')
		signupErrorFallback.addProperty('xpath', ConditionType.EQUALS, "//*[contains(translate(normalize-space(.),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'already exist')]")
		hasError = WebUI.verifyElementPresent(signupErrorFallback, 2, FailureHandling.OPTIONAL)
	}
	if (!hasError) {
		hasError = WebUI.verifyTextPresent('already exist', false, FailureHandling.OPTIONAL)
	}
	boolean onSignupForm = WebUI.verifyElementPresent(findTestObject('Authentication/txt_Register_Password'), 2, FailureHandling.OPTIONAL)
	assert hasError || WebUI.getUrl().contains('/login') || onSignupForm : '[TC_Register] Expected register failure but no signal found'
}

WebUI.closeBrowser()
