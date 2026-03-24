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

WebUI.verifyElementPresent(findTestObject('Cart/lbl_Cart_Product_Name'), 10)

// go login
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/login')
WebUI.setText(findTestObject('Authentication/txt_Login_Email'), GlobalVariable.validEmail)
WebUI.setText(findTestObject('Authentication/txt_Login_Password'), GlobalVariable.validPassword)
WebUI.click(findTestObject('Authentication/btn_Login'))

// back to cart
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/view_cart')
WebUI.verifyElementPresent(findTestObject('Cart/lbl_Cart_Product_Name'), 10)

WebUI.closeBrowser()