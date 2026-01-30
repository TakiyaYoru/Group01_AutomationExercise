import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import java.text.SimpleDateFormat
import java.util.Date

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

String randomEmail = "testuser_" + new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()) + "@gmail.com"

WebUI.openBrowser('')

WebUI.navigateToUrl(GlobalVariable.baseUrl + '/login')

// Signup step 1
WebUI.setText(findTestObject('Authentication/txt_Signup_Name'), GlobalVariable.registerName)
WebUI.setText(findTestObject('Authentication/txt_Signup_Email'), randomEmail)
WebUI.click(findTestObject('Authentication/btn_Signup'))

// Account info
WebUI.click(findTestObject('Authentication/rdo_Title_Mr'))
WebUI.setText(findTestObject('Authentication/txt_Register_Password'), GlobalVariable.registerPassword)

WebUI.selectOptionByValue(findTestObject('Authentication/ddl_Day'), '1', false)
WebUI.selectOptionByValue(findTestObject('Authentication/ddl_Month'), '1', false)
WebUI.selectOptionByValue(findTestObject('Authentication/ddl_Year'), '2000', false)

// Address info
WebUI.setText(findTestObject('Authentication/txt_FirstName'), GlobalVariable.firstName)
WebUI.setText(findTestObject('Authentication/txt_LastName'), GlobalVariable.lastName)
WebUI.setText(findTestObject('Authentication/txt_Address'), GlobalVariable.address)
WebUI.selectOptionByLabel(findTestObject('Authentication/ddl_Country'), 'India', false)
WebUI.setText(findTestObject('Authentication/txt_State'), GlobalVariable.state)
WebUI.setText(findTestObject('Authentication/txt_City'), GlobalVariable.city)
WebUI.setText(findTestObject('Authentication/txt_Zipcode'), GlobalVariable.zipcode)
WebUI.setText(findTestObject('Authentication/txt_MobileNumber'), GlobalVariable.mobileNumber)

// Create account
WebUI.click(findTestObject('Authentication/btn_Create_Account'))

// Verify result
WebUI.verifyElementPresent(findTestObject('Authentication/lbl_Account_Created'), 10)

// Continue
WebUI.click(findTestObject('Authentication/btn_Continue'))


WebUI.closeBrowser()