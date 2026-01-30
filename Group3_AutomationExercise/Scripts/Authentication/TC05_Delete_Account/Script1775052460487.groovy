import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import java.text.SimpleDateFormat
import java.util.Date

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

// tạo email random
String randomEmail = "testuser_" + new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()) + "@gmail.com"

WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.baseUrl + '/login')

// ===== SIGNUP =====
WebUI.setText(findTestObject('Authentication/txt_Signup_Name'), GlobalVariable.registerName)
WebUI.setText(findTestObject('Authentication/txt_Signup_Email'), randomEmail)
WebUI.click(findTestObject('Authentication/btn_Signup'))

// ===== ACCOUNT INFO =====
WebUI.click(findTestObject('Authentication/rdo_Title_Mr'))
WebUI.setText(findTestObject('Authentication/txt_Register_Password'), GlobalVariable.registerPassword)

WebUI.selectOptionByIndex(findTestObject('Authentication/ddl_Day'), 1)
WebUI.selectOptionByIndex(findTestObject('Authentication/ddl_Month'), 1)
WebUI.selectOptionByIndex(findTestObject('Authentication/ddl_Year'), 20)

// ===== ADDRESS =====
WebUI.setText(findTestObject('Authentication/txt_FirstName'), GlobalVariable.firstName)
WebUI.setText(findTestObject('Authentication/txt_LastName'), GlobalVariable.lastName)
WebUI.setText(findTestObject('Authentication/txt_Address'), GlobalVariable.address)
WebUI.selectOptionByLabel(findTestObject('Authentication/ddl_Country'), 'India', false)
WebUI.setText(findTestObject('Authentication/txt_State'), GlobalVariable.state)
WebUI.setText(findTestObject('Authentication/txt_City'), GlobalVariable.city)
WebUI.setText(findTestObject('Authentication/txt_Zipcode'), GlobalVariable.zipcode)
WebUI.setText(findTestObject('Authentication/txt_MobileNumber'), GlobalVariable.mobileNumber)

// ===== CREATE ACCOUNT =====
WebUI.click(findTestObject('Authentication/btn_Create_Account'))
WebUI.verifyElementPresent(findTestObject('Authentication/lbl_Account_Created'), 10)

WebUI.click(findTestObject('Authentication/btn_Continue'))

// ===== DELETE ACCOUNT (TC05) =====
WebUI.click(findTestObject('Authentication/btn_Delete_Account'))
WebUI.verifyElementPresent(findTestObject('Authentication/lbl_Account_Deleted'), 10)

WebUI.closeBrowser()