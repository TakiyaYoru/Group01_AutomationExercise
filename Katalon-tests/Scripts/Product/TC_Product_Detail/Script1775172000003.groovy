import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/products')

WebUI.click(findTestObject('Product/btn_View_Product'))
WebUI.verifyElementPresent(findTestObject('Product/lbl_Product_Name'), 10)
WebUI.verifyElementPresent(findTestObject('Product/lbl_Product_Price'), 10)

WebUI.closeBrowser()
