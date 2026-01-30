import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.openBrowser('')

WebUI.navigateToUrl(GlobalVariable.baseUrl + '/login')

WebUI.setText(findTestObject('Authentication/txt_Login_Email'), '')
WebUI.setText(findTestObject('Authentication/txt_Login_Password'), '')

WebUI.click(findTestObject('Authentication/btn_Login'))

WebUI.verifyMatch(WebUI.getUrl(), GlobalVariable.baseUrl + '/login', false)
WebUI.verifyElementNotPresent(findTestObject('Authentication/lbl_LoggedInAs'), 3)

WebUI.closeBrowser()