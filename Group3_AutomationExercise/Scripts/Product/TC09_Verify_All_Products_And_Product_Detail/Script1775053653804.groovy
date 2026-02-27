import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.openBrowser('')

WebUI.navigateToUrl(GlobalVariable.baseUrl)

// vào Products
WebUI.click(findTestObject('Product/btn_Products_Menu'))

// click sản phẩm đầu tiên
WebUI.click(findTestObject('Product/btn_View_Product'))

// verify vào detail
WebUI.verifyElementPresent(findTestObject('Product/lbl_Product_Name'), 10)
WebUI.verifyElementPresent(findTestObject('Product/lbl_Product_Price'), 10)

WebUI.closeBrowser()