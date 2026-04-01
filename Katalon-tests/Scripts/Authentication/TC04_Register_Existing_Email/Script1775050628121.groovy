import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.openBrowser('')

WebUI.navigateToUrl(GlobalVariable.baseUrl + '/login')

WebUI.setText(findTestObject('Authentication/txt_Signup_Name'), GlobalVariable.existingName)
WebUI.setText(findTestObject('Authentication/txt_Signup_Email'), GlobalVariable.existingEmail)

WebUI.click(findTestObject('Authentication/btn_Signup'))

WebUI.verifyElementPresent(findTestObject('Authentication/lbl_Signup_Existing_Email_Error'), 10)

WebUI.closeBrowser()