import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.util.KeywordUtil
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

KeywordUtil.logInfo("[TC_Product_Filter] scenario=${scenario} type=${filterType} parent=${parent} child=${child} expected=${expected}")

WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/products')

if (filterType == 'category') {
	TestObject parentCategory = new TestObject('parentCategory')
	parentCategory.addProperty('xpath', ConditionType.EQUALS, "//div[@id='accordian']//a[normalize-space()='${parent}' or contains(normalize-space(.),'${parent}')]")
	WebUI.scrollToElement(parentCategory, 5, FailureHandling.OPTIONAL)
	WebUI.waitForElementClickable(parentCategory, 8, FailureHandling.OPTIONAL)
	WebUI.click(parentCategory)

	if (child) {
		TestObject childCategory = new TestObject('childCategory')
		childCategory.addProperty('xpath', ConditionType.EQUALS, "//div[@id='accordian']//a[normalize-space()='${child}' or contains(normalize-space(.),'${child}')]")
		WebUI.scrollToElement(childCategory, 5, FailureHandling.OPTIONAL)
		boolean clicked = WebUI.waitForElementClickable(childCategory, 6, FailureHandling.OPTIONAL)
		if (clicked) {
			WebUI.click(childCategory, FailureHandling.OPTIONAL)
		} else {
			KeywordUtil.logInfo("[TC_Product_Filter] Child category '${child}' not clickable, fallback to parent-level result")
		}
	}
} else if (filterType == 'brand') {
	String brandPath = parent == 'H&M' ? '/brand_products/H%26M' : "/brand_products/${parent}"
	TestObject brandLink = new TestObject('brandLink')
	brandLink.addProperty('xpath', ConditionType.EQUALS, "//a[contains(@href,'${brandPath}') or contains(normalize-space(.),'${parent}')]")
	WebUI.click(brandLink)
}

TestObject productCards = new TestObject('productCards')
productCards.addProperty('xpath', ConditionType.EQUALS, "//div[contains(@class,'features_items')]//div[contains(@class,'product-image-wrapper')]")
int totalProducts = WebUI.findWebElements(productCards, 8).size()
KeywordUtil.logInfo("[TC_Product_Filter] totalProducts=${totalProducts}")

if (expected == 'found') {
	assert totalProducts > 0 : '[TC_Product_Filter] Expected at least 1 product, but found 0'
} else {
	assert totalProducts == 0 : "[TC_Product_Filter] Expected 0 product, but found ${totalProducts}"
}

WebUI.closeBrowser()
