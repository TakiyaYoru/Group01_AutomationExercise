import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/products')

WebUI.setText(findTestObject('Product/txt_Search_Product'), GlobalVariable.searchKeywordNegative)
WebUI.click(findTestObject('Product/btn_Search'))

WebUI.verifyElementNotPresent(findTestObject('Product/lbl_Product_List'), 5)

WebUI.closeBrowser()