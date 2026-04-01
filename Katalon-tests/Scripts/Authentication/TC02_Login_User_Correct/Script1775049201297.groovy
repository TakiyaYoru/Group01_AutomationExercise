import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.openBrowser('')

WebUI.navigateToUrl(GlobalVariable.baseUrl + '/login')

WebUI.setText(findTestObject('Authentication/txt_Login_Email'), GlobalVariable.validEmail)
WebUI.setText(findTestObject('Authentication/txt_Login_Password'), GlobalVariable.validPassword)

WebUI.click(findTestObject('Authentication/btn_Login'))

WebUI.verifyElementPresent(findTestObject('Authentication/lbl_LoggedInAs'), 10, FailureHandling.STOP_ON_FAILURE)

WebUI.closeBrowser()