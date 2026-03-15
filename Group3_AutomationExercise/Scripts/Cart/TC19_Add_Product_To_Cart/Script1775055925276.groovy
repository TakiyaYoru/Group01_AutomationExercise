import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/products')

// Hover vào sản phẩm đầu tiên để hiện nút Add to cart
WebUI.mouseOver(findTestObject('Cart/card_First_Product'))

// Click Add to cart
WebUI.click(findTestObject('Cart/btn_Add_To_Cart_First_Product'))

// Xem giỏ hàng
WebUI.click(findTestObject('Cart/btn_View_Cart'))

// Verify cart
WebUI.verifyElementPresent(findTestObject('Cart/lbl_Cart_Product_Name'), 10)
WebUI.verifyElementText(findTestObject('Cart/lbl_Cart_Product_Quantity'), '1')

WebUI.closeBrowser()