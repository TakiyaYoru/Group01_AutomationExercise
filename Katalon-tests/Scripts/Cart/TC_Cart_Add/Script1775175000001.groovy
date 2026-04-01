import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.util.KeywordUtil
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable
import java.util.Arrays

KeywordUtil.logInfo("[TC_Cart_Add] scenario=${scenario} source=${source} brand=${brand} expected=${expected}")

String mode = (source ?: 'all').toLowerCase()
String brandName = (brand ?: '').trim()

WebUI.openBrowser('')
if (mode == 'brand' && brandName) {
	String encodedBrand = brandName == 'H&M' ? 'H%26M' : brandName.replace(' ', '%20')
	WebUI.navigateToUrl(GlobalVariable.baseUrl + "/brand_products/${encodedBrand}")
} else {
	WebUI.navigateToUrl(GlobalVariable.baseUrl + '/products')
}

TestObject firstAddBtn = new TestObject('firstAddBtn')
firstAddBtn.addProperty('xpath', ConditionType.EQUALS, "(//div[contains(@class,'productinfo')]//a[contains(@class,'add-to-cart')])[1]")
WebUI.scrollToElement(firstAddBtn, 5, FailureHandling.OPTIONAL)
WebUI.waitForElementVisible(firstAddBtn, 8)
WebUI.executeJavaScript('arguments[0].click();', Arrays.asList(WebUI.findWebElement(firstAddBtn, 5)))

WebUI.waitForElementVisible(findTestObject('Cart/btn_View_Cart'), 8)
WebUI.click(findTestObject('Cart/btn_View_Cart'))

TestObject cartRows = new TestObject('cartRows')
cartRows.addProperty('xpath', ConditionType.EQUALS, "//tr[starts-with(@id,'product-')]")
int totalRows = WebUI.findWebElements(cartRows, 8).size()
if ((expected ?: '').toLowerCase() == 'added') {
	assert totalRows > 0 : '[TC_Cart_Add] Expected cart has product but found empty cart'
}

WebUI.closeBrowser()
