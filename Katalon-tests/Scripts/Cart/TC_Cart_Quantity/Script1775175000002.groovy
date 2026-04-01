import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.util.KeywordUtil
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

KeywordUtil.logInfo("[TC_Cart_Quantity] scenario=${scenario} quantity=${quantity} expected=${expected}")

String qty = (quantity ?: '1').toString().trim()
WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/products')
WebUI.click(findTestObject('Cart/btn_View_Product'))
WebUI.setText(findTestObject('Cart/txt_Product_Quantity'), qty)
WebUI.click(findTestObject('Cart/btn_Add_To_Cart_Detail'))
WebUI.waitForElementVisible(findTestObject('Cart/btn_View_Cart'), 8)
WebUI.click(findTestObject('Cart/btn_View_Cart'))

TestObject firstQty = new TestObject('firstQty')
firstQty.addProperty('xpath', ConditionType.EQUALS, "(//tr[starts-with(@id,'product-')]//td[contains(@class,'cart_quantity')]//button)[1]")
String actualQty = WebUI.getText(firstQty).trim()
assert actualQty == qty : "[TC_Cart_Quantity] Expected quantity ${qty} but found ${actualQty}"

WebUI.closeBrowser()
