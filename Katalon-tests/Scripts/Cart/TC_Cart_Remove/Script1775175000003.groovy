import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.util.KeywordUtil
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable
import java.util.Arrays

KeywordUtil.logInfo("[TC_Cart_Remove] scenario=${scenario} expected=${expected}")

WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/products')

TestObject firstAddBtn = new TestObject('firstAddBtn')
firstAddBtn.addProperty('xpath', ConditionType.EQUALS, "(//div[contains(@class,'productinfo')]//a[contains(@class,'add-to-cart')])[1]")
WebUI.scrollToElement(firstAddBtn, 5, FailureHandling.OPTIONAL)
WebUI.waitForElementVisible(firstAddBtn, 8)
WebUI.executeJavaScript('arguments[0].click();', Arrays.asList(WebUI.findWebElement(firstAddBtn, 5)))
WebUI.waitForElementVisible(findTestObject('Cart/btn_View_Cart'), 8)
WebUI.click(findTestObject('Cart/btn_View_Cart'))

TestObject removeBtn = new TestObject('removeBtn')
removeBtn.addProperty('xpath', ConditionType.EQUALS, "(//a[contains(@class,'cart_quantity_delete')])[1]")
WebUI.click(removeBtn)
WebUI.delay(2)

TestObject cartRows = new TestObject('cartRows')
cartRows.addProperty('xpath', ConditionType.EQUALS, "//tr[starts-with(@id,'product-')]")
int totalRows = WebUI.findWebElements(cartRows, 8).size()
assert totalRows == 0 : "[TC_Cart_Remove] Expected empty cart but found ${totalRows} rows"

WebUI.closeBrowser()
