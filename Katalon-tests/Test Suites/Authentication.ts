<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description>Authentication cluster: Login/Register data-driven + Logout + Delete Account</description>
   <name>Authentication</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>10</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testCaseLink>
      <guid>0fc02f64-d867-4dad-aa04-d8ec96ec3d79</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Authentication/TC_Login</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>c8a3410c-5076-4ca4-9366-f7dbff34af12</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Authentication/login-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>c8a3410c-5076-4ca4-9366-f7dbff34af12</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>5ee8f6a5-f8c4-4e4f-8fe9-fb3ef1f696a9</variableId></variableLink>
      <variableLink><testDataLinkId>c8a3410c-5076-4ca4-9366-f7dbff34af12</testDataLinkId><type>DATA_COLUMN</type><value>email</value><variableId>8f73dfc4-e1f6-430c-a4f5-362f9f8e98d0</variableId></variableLink>
      <variableLink><testDataLinkId>c8a3410c-5076-4ca4-9366-f7dbff34af12</testDataLinkId><type>DATA_COLUMN</type><value>password</value><variableId>c738c65f-0e4f-4de8-a0af-c2f7921b77f9</variableId></variableLink>
      <variableLink><testDataLinkId>c8a3410c-5076-4ca4-9366-f7dbff34af12</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>45dd6a63-0786-4d64-b8ba-836193a9fbf0</variableId></variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>3c9e6a91-34b4-4594-92d2-f4173c5668d5</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Authentication/TC_Register</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>d4ffefb4-4bde-4a8f-94ff-735f97ad5147</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Authentication/register-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>d4ffefb4-4bde-4a8f-94ff-735f97ad5147</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>1e59f7b6-b049-4f12-b8d5-f9a5f52abd30</variableId></variableLink>
      <variableLink><testDataLinkId>d4ffefb4-4bde-4a8f-94ff-735f97ad5147</testDataLinkId><type>DATA_COLUMN</type><value>name</value><variableId>4ab16fa0-ee80-4ee8-8e9f-8db9ac855164</variableId></variableLink>
      <variableLink><testDataLinkId>d4ffefb4-4bde-4a8f-94ff-735f97ad5147</testDataLinkId><type>DATA_COLUMN</type><value>email</value><variableId>6ab56a79-e393-4121-b1f8-3808f7d9376a</variableId></variableLink>
      <variableLink><testDataLinkId>d4ffefb4-4bde-4a8f-94ff-735f97ad5147</testDataLinkId><type>DATA_COLUMN</type><value>password</value><variableId>3a9329b8-fde4-4b52-9735-6e6e79b8d7d6</variableId></variableLink>
      <variableLink><testDataLinkId>d4ffefb4-4bde-4a8f-94ff-735f97ad5147</testDataLinkId><type>DATA_COLUMN</type><value>firstName</value><variableId>aad89e7f-34d0-4379-9d84-56986f0f9f9e</variableId></variableLink>
      <variableLink><testDataLinkId>d4ffefb4-4bde-4a8f-94ff-735f97ad5147</testDataLinkId><type>DATA_COLUMN</type><value>lastName</value><variableId>f84d4ef5-575f-4f3e-bd08-0f6d26a452b3</variableId></variableLink>
      <variableLink><testDataLinkId>d4ffefb4-4bde-4a8f-94ff-735f97ad5147</testDataLinkId><type>DATA_COLUMN</type><value>address</value><variableId>b18f9f75-9131-4f11-b11c-b8152fda8e7e</variableId></variableLink>
      <variableLink><testDataLinkId>d4ffefb4-4bde-4a8f-94ff-735f97ad5147</testDataLinkId><type>DATA_COLUMN</type><value>state</value><variableId>9fa70c08-c3d3-4d07-a5d7-4caa787bc06b</variableId></variableLink>
      <variableLink><testDataLinkId>d4ffefb4-4bde-4a8f-94ff-735f97ad5147</testDataLinkId><type>DATA_COLUMN</type><value>city</value><variableId>62fb9128-f8c3-4a8e-9956-5ced1dbcc407</variableId></variableLink>
      <variableLink><testDataLinkId>d4ffefb4-4bde-4a8f-94ff-735f97ad5147</testDataLinkId><type>DATA_COLUMN</type><value>zipcode</value><variableId>f157b58e-7ab1-423b-8f92-9a873f639ee2</variableId></variableLink>
      <variableLink><testDataLinkId>d4ffefb4-4bde-4a8f-94ff-735f97ad5147</testDataLinkId><type>DATA_COLUMN</type><value>mobile</value><variableId>c0054fb5-50fe-4ac4-982c-ccf5b88d80d1</variableId></variableLink>
      <variableLink><testDataLinkId>d4ffefb4-4bde-4a8f-94ff-735f97ad5147</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>5cfd7dce-72fd-4d74-a978-5f3894f6b285</variableId></variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>f0f4d696-37f0-4b0e-b8ed-b247526887d8</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Authentication/TC_Logout</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>d3bb2ec9-5dc7-4ef1-baae-3827ce4f90cf</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Authentication/TC_Delete_Account_Cluster</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testSuiteGuid>8dc0324e-a12a-4646-b05d-284a097f1fa6</testSuiteGuid>
</TestSuiteEntity>
