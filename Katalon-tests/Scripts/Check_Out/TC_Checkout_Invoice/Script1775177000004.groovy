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

void clickSafe(TestObject to, int timeoutSeconds = 8) {
	WebUI.scrollToElement(to, 3, FailureHandling.OPTIONAL)
	WebUI.waitForElementVisible(to, timeoutSeconds, FailureHandling.OPTIONAL)
	try {
		WebUI.click(to)
	} catch (Exception ignored) {
		WebUI.executeJavaScript('arguments[0].click();', Arrays.asList(WebUI.findWebElement(to, timeoutSeconds)))
	}
}

String s = (scenario ?: 'default').toString()
String exp = (expected ?: 'download_available').toString().toLowerCase()
KeywordUtil.logInfo("[TC_Checkout_Invoice] scenario=${s} expected=${exp}")

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
WebUI.waitForPageLoad(10)
if (!WebUI.getUrl().contains('/checkout')) {
	WebUI.navigateToUrl(GlobalVariable.baseUrl + '/checkout')
}
TestObject placeOrderBtn = byXpath('placeOrderBtn', "//a[contains(@href,'/payment') and contains(normalize-space(.),'Place Order')]")
clickSafe(placeOrderBtn, 10)

WebUI.setText(findTestObject('Checkout/txt_Card_Name'), GlobalVariable.cardName)
WebUI.setText(findTestObject('Checkout/txt_Card_Number'), GlobalVariable.cardNumber)
WebUI.setText(findTestObject('Checkout/txt_CVC'), GlobalVariable.cardCVC)
WebUI.setText(findTestObject('Checkout/txt_Expiry_Month'), '12')
WebUI.setText(findTestObject('Checkout/txt_Expiry_Year'), '2030')
TestObject payConfirmBtn = byXpath('payConfirmBtn', "//button[@id='submit' or @data-qa='pay-button' or contains(normalize-space(.),'Pay and Confirm Order')]")
clickSafe(payConfirmBtn, 10)

boolean hasSuccess = WebUI.verifyElementPresent(findTestObject('Checkout/lbl_Order_Success'), 10, FailureHandling.OPTIONAL)
if (!hasSuccess) {
	hasSuccess = WebUI.verifyTextPresent('Order Placed!', false, FailureHandling.OPTIONAL)
}
assert hasSuccess : '[TC_Checkout_Invoice] Expected success but order success was not found'
if (exp == 'download_available') {
	WebUI.verifyElementPresent(findTestObject('Checkout/btn_Download_Invoice'), 10)
	WebUI.click(findTestObject('Checkout/btn_Download_Invoice'), FailureHandling.OPTIONAL)
}

WebUI.closeBrowser()
