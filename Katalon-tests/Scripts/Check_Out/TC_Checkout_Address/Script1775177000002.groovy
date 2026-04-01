import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.util.KeywordUtil
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable
import java.util.Arrays

TestObject byXpath(String id, String xpath) {
	TestObject t = new TestObject(id)
	t.addProperty('xpath', ConditionType.EQUALS, xpath)
	return t
}

KeywordUtil.logInfo("[TC_Checkout_Address] scenario=${scenario}")

WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/login')
WebUI.setText(findTestObject('Authentication/txt_Login_Email'), GlobalVariable.validEmail)
WebUI.setText(findTestObject('Authentication/txt_Login_Password'), GlobalVariable.validPassword)
WebUI.click(findTestObject('Authentication/btn_Login'))

WebUI.navigateToUrl(GlobalVariable.baseUrl + '/products')
TestObject firstAddBtn = new TestObject('firstAddBtn')
firstAddBtn.addProperty('xpath', ConditionType.EQUALS, "(//div[contains(@class,'productinfo')]//a[contains(@class,'add-to-cart')])[1]")
WebUI.scrollToElement(firstAddBtn, 5, FailureHandling.OPTIONAL)
WebUI.waitForElementVisible(firstAddBtn, 8)
WebUI.executeJavaScript('arguments[0].click();', Arrays.asList(WebUI.findWebElement(firstAddBtn, 5)))

WebUI.waitForElementVisible(findTestObject('Cart/btn_View_Cart'), 8)
WebUI.click(findTestObject('Cart/btn_View_Cart'))
WebUI.click(findTestObject('Checkout/btn_Proceed_To_Checkout'))

boolean deliveryVisible = WebUI.verifyElementPresent(findTestObject('Checkout/lbl_Delivery_Address'), 6, FailureHandling.OPTIONAL)
if (!deliveryVisible) {
	deliveryVisible = WebUI.verifyElementPresent(byXpath('deliveryBlock', "//ul[@id='address_delivery']"), 6, FailureHandling.OPTIONAL)
}

boolean billingVisible = WebUI.verifyElementPresent(findTestObject('Checkout/lbl_Billing_Address'), 6, FailureHandling.OPTIONAL)
if (!billingVisible) {
	billingVisible = WebUI.verifyElementPresent(byXpath('billingBlock', "//ul[@id='address_invoice']"), 6, FailureHandling.OPTIONAL)
}

assert deliveryVisible && billingVisible : '[TC_Checkout_Address] Address section not visible on checkout page'

WebUI.closeBrowser()
