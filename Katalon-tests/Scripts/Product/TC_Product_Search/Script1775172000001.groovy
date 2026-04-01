import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.util.KeywordUtil
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

KeywordUtil.logInfo("[TC_Product_Search] scenario=${scenario} keyword=${keyword} expected=${expected}")

WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/products')
WebUI.setText(findTestObject('Product/txt_Search_Product'), keyword ?: '')
WebUI.click(findTestObject('Product/btn_Search'))

TestObject productCards = new TestObject('productCards')
productCards.addProperty('xpath', ConditionType.EQUALS, "//div[contains(@class,'features_items')]//div[contains(@class,'product-image-wrapper')]")
int totalProducts = WebUI.findWebElements(productCards, 5).size()
KeywordUtil.logInfo("[TC_Product_Search] totalProducts=${totalProducts}")

if (expected == 'found') {
	assert totalProducts > 0 : '[TC_Product_Search] Expected at least 1 product, but found 0'
} else {
	assert totalProducts == 0 : "[TC_Product_Search] Expected 0 product, but found ${totalProducts}"
}

WebUI.closeBrowser()
