import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.openBrowser('')

// login
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/login')
WebUI.setText(findTestObject('Authentication/txt_Login_Email'), GlobalVariable.validEmail)
WebUI.setText(findTestObject('Authentication/txt_Login_Password'), GlobalVariable.validPassword)
WebUI.click(findTestObject('Authentication/btn_Login'))

// add product
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/products')
WebUI.scrollToElement(findTestObject('Cart/card_First_Product'), 5)
WebUI.mouseOver(findTestObject('Cart/card_First_Product'))
WebUI.jsClick(findTestObject('Cart/btn_Add_To_Cart_First_Product'))

WebUI.click(findTestObject('Cart/btn_View_Cart'))

// checkout
WebUI.click(findTestObject('Checkout/btn_Proceed_To_Checkout'))

// sau khi click Proceed To Checkout
WebUI.verifyElementPresent(findTestObject('Checkout/lbl_Delivery_Address'), 10)
WebUI.verifyElementPresent(findTestObject('Checkout/lbl_Billing_Address'), 10)

// place order
WebUI.click(findTestObject('Checkout/btn_Place_Order'))

// payment
WebUI.setText(findTestObject('Checkout/txt_Card_Number'), '123') // sai

WebUI.click(findTestObject('Checkout/btn_Pay_Confirm'))

WebUI.verifyElementPresent(findTestObject('Checkout/lbl_Payment_Error'), 5)


WebUI.closeBrowser()