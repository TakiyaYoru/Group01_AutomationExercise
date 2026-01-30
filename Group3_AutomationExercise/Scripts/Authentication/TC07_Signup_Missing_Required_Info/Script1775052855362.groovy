import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/login')

// signup step 1
WebUI.setText(findTestObject('Authentication/txt_Signup_Name'), GlobalVariable.registerName)
WebUI.setText(findTestObject('Authentication/txt_Signup_Email'), "test_missing@gmail.com")
WebUI.click(findTestObject('Authentication/btn_Signup'))

// KHÔNG nhập password
WebUI.click(findTestObject('Authentication/rdo_Title_Mr'))

// bấm create luôn
WebUI.click(findTestObject('Authentication/btn_Create_Account'))

// verify KHÔNG tạo account
WebUI.verifyElementNotPresent(findTestObject('Authentication/lbl_Account_Created'), 3)

WebUI.closeBrowser()