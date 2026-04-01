import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.openBrowser('')

WebUI.navigateToUrl(GlobalVariable.baseUrl + '/products')

// Click Category Women
WebUI.click(findTestObject('Product/btn_Category_Women'))

// Click Sub Category Dress
WebUI.click(findTestObject('Product/btn_Category_Dress'))

// Verify product list hiển thị
WebUI.verifyElementPresent(findTestObject('Product/lbl_Product_List'), 10)

WebUI.closeBrowser()