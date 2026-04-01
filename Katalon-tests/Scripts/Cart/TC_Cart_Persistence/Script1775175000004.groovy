import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable
import java.util.Arrays

String loginEmail = (email ?: GlobalVariable.validEmail).toString().trim()
String loginPassword = (password ?: GlobalVariable.validPassword).toString().trim()

WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/products')

TestObject firstAddBtn = new TestObject('firstAddBtn')
firstAddBtn.addProperty('xpath', ConditionType.EQUALS, "(//div[contains(@class,'productinfo')]//a[contains(@class,'add-to-cart')])[1]")
WebUI.scrollToElement(firstAddBtn, 5, FailureHandling.OPTIONAL)
WebUI.waitForElementVisible(firstAddBtn, 8)
WebUI.executeJavaScript('arguments[0].click();', Arrays.asList(WebUI.findWebElement(firstAddBtn, 5)))
WebUI.waitForElementVisible(findTestObject('Cart/btn_View_Cart'), 8)
WebUI.click(findTestObject('Cart/btn_View_Cart'))

WebUI.navigateToUrl(GlobalVariable.baseUrl + '/login')
WebUI.setText(findTestObject('Authentication/txt_Login_Email'), loginEmail)
WebUI.setText(findTestObject('Authentication/txt_Login_Password'), loginPassword)
WebUI.click(findTestObject('Authentication/btn_Login'))

WebUI.navigateToUrl(GlobalVariable.baseUrl + '/view_cart')
TestObject cartRows = new TestObject('cartRows')
cartRows.addProperty('xpath', ConditionType.EQUALS, "//tr[starts-with(@id,'product-')]")
int rows = WebUI.findWebElements(cartRows, 8).size()
assert rows > 0 : '[TC_Cart_Persistence] Expected cart persists after login but cart is empty'

WebUI.closeBrowser()
