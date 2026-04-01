import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/products')

WebUI.click(findTestObject('Cart/btn_View_Product'))

WebUI.setText(findTestObject('Cart/txt_Product_Quantity'), '4')
WebUI.click(findTestObject('Cart/btn_Add_To_Cart_Detail'))
WebUI.click(findTestObject('Cart/btn_View_Cart'))

WebUI.verifyElementText(findTestObject('Cart/lbl_Cart_Product_Quantity'), '4')

WebUI.closeBrowser()