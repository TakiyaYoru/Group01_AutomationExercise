<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description>Checkout cluster: Flow, Address, Payment, Invoice</description>
   <name>Checkout</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>10</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testCaseLink>
      <guid>ff6fbdbe-dfcf-4485-a14c-d03daec932e2</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Check_Out/TC_Checkout_Flow</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>8b747d71-ff80-40ae-933f-f77303ea55aa</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Checkout/checkout-flow-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>8b747d71-ff80-40ae-933f-f77303ea55aa</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>ea4139d0-c7c5-4f67-a836-2738f03f16f5</variableId></variableLink>
      <variableLink><testDataLinkId>8b747d71-ff80-40ae-933f-f77303ea55aa</testDataLinkId><type>DATA_COLUMN</type><value>email</value><variableId>1ce2a090-21f0-4f2b-983b-c5f730f534c0</variableId></variableLink>
      <variableLink><testDataLinkId>8b747d71-ff80-40ae-933f-f77303ea55aa</testDataLinkId><type>DATA_COLUMN</type><value>password</value><variableId>fbe266b0-e0f2-4429-a319-98edf57fea46</variableId></variableLink>
      <variableLink><testDataLinkId>8b747d71-ff80-40ae-933f-f77303ea55aa</testDataLinkId><type>DATA_COLUMN</type><value>cardName</value><variableId>593261b1-9d4f-49fa-9cf0-4be5df86b5a1</variableId></variableLink>
      <variableLink><testDataLinkId>8b747d71-ff80-40ae-933f-f77303ea55aa</testDataLinkId><type>DATA_COLUMN</type><value>cardNumber</value><variableId>de5776b8-e783-43d9-a37b-e3b82c5fbb7d</variableId></variableLink>
      <variableLink><testDataLinkId>8b747d71-ff80-40ae-933f-f77303ea55aa</testDataLinkId><type>DATA_COLUMN</type><value>cardCvc</value><variableId>17ad0f96-b5f5-4f2c-9980-57790d7ff15d</variableId></variableLink>
      <variableLink><testDataLinkId>8b747d71-ff80-40ae-933f-f77303ea55aa</testDataLinkId><type>DATA_COLUMN</type><value>expMonth</value><variableId>c3587b1b-53cf-4f6d-96dd-d61442495528</variableId></variableLink>
      <variableLink><testDataLinkId>8b747d71-ff80-40ae-933f-f77303ea55aa</testDataLinkId><type>DATA_COLUMN</type><value>expYear</value><variableId>0562a6b8-6ea1-434f-95db-3ce6f9cd4caf</variableId></variableLink>
      <variableLink><testDataLinkId>8b747d71-ff80-40ae-933f-f77303ea55aa</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>8272f6f3-8d7b-4ca0-8bd8-5fdf5f2ad3ad</variableId></variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>fd5f3838-bf36-497d-8776-3017841f0d30</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Check_Out/TC_Checkout_Address</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>37af1732-d5d3-4549-ab65-17d47f6450e4</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Checkout/checkout-address-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>37af1732-d5d3-4549-ab65-17d47f6450e4</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>524fd043-0a99-4f4f-83e8-bf928017a5e0</variableId></variableLink>
      <variableLink><testDataLinkId>37af1732-d5d3-4549-ab65-17d47f6450e4</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>8cee1bc3-f3cb-4f01-a56b-4ef0b16f6d36</variableId></variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>874e67b4-f853-43be-87a4-95043f5d6455</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Check_Out/TC_Checkout_Payment</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>0fc78665-c84f-4ef3-908d-c9c44023d5de</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Checkout/checkout-payment-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>0fc78665-c84f-4ef3-908d-c9c44023d5de</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>e22f3919-ab1e-4cff-af55-cf4bcdeeaf93</variableId></variableLink>
      <variableLink><testDataLinkId>0fc78665-c84f-4ef3-908d-c9c44023d5de</testDataLinkId><type>DATA_COLUMN</type><value>cardNumber</value><variableId>9479f7e9-34cf-40f1-844d-8ef51d3d267a</variableId></variableLink>
      <variableLink><testDataLinkId>0fc78665-c84f-4ef3-908d-c9c44023d5de</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>2b5d8548-18c8-421c-9cd7-59f2ca60e5b8</variableId></variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>2bc3f17f-45be-43b2-a695-62f2208f7f98</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Check_Out/TC_Checkout_Invoice</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>a4b2ca32-a89c-4ff1-b38f-94178f04a0e8</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Checkout/checkout-invoice-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>a4b2ca32-a89c-4ff1-b38f-94178f04a0e8</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>045f0268-1a7d-4b5e-9804-bb59cb5f7f5e</variableId></variableLink>
      <variableLink><testDataLinkId>a4b2ca32-a89c-4ff1-b38f-94178f04a0e8</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>f7f67230-7cf2-4563-a3de-8f57ff4c26ca</variableId></variableLink>
   </testCaseLink>
   <testSuiteGuid>c0aa25e6-87db-49cd-9f5c-c6a7d3060d4d</testSuiteGuid>
</TestSuiteEntity>
