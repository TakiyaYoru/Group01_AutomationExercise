<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description>Cart cluster: Add/Quantity/Remove/Persistence data-driven</description>
   <name>Cart</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>10</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testCaseLink>
      <guid>7e4b20f0-34ce-42cf-b0f7-ea5095f57faf</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Cart/TC_Cart_Add</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>0047ab13-1fe6-4d74-9f4d-a6c9c8d9a0f2</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Cart/add-cart-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>0047ab13-1fe6-4d74-9f4d-a6c9c8d9a0f2</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>be8121b1-b0f0-4279-bf6f-ae6582192a1a</variableId></variableLink>
      <variableLink><testDataLinkId>0047ab13-1fe6-4d74-9f4d-a6c9c8d9a0f2</testDataLinkId><type>DATA_COLUMN</type><value>source</value><variableId>d4d8e893-437e-4267-8f5f-26f9ca3768a7</variableId></variableLink>
      <variableLink><testDataLinkId>0047ab13-1fe6-4d74-9f4d-a6c9c8d9a0f2</testDataLinkId><type>DATA_COLUMN</type><value>brand</value><variableId>af3024f1-a0e6-4973-a4bf-594f7338b16a</variableId></variableLink>
      <variableLink><testDataLinkId>0047ab13-1fe6-4d74-9f4d-a6c9c8d9a0f2</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>42dbf62c-7dce-4f4f-bbf4-34d066d0f689</variableId></variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>1f37f9f8-f43a-4544-bbe8-c7f9f52795f0</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Cart/TC_Cart_Quantity</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>f6cf92f9-f754-455f-a09c-bdf9390f6be3</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Cart/quantity-cart-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>f6cf92f9-f754-455f-a09c-bdf9390f6be3</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>7019b5fc-83dc-4f69-b2e7-1aa920637f23</variableId></variableLink>
      <variableLink><testDataLinkId>f6cf92f9-f754-455f-a09c-bdf9390f6be3</testDataLinkId><type>DATA_COLUMN</type><value>quantity</value><variableId>ec5f8f67-a8ec-4931-af36-f9e19d2f1450</variableId></variableLink>
      <variableLink><testDataLinkId>f6cf92f9-f754-455f-a09c-bdf9390f6be3</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>bf5d0f8a-7c36-4a91-b4b7-10a2d6fd122c</variableId></variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>ba33bc22-6205-4f8e-8f08-52f3c2a53f8b</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Cart/TC_Cart_Remove</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>631f2f58-f363-4bfc-bdb7-a9f7810cf7ef</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Cart/remove-cart-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>631f2f58-f363-4bfc-bdb7-a9f7810cf7ef</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>a633ceb6-b453-45f8-9ce7-5a307d4ceb80</variableId></variableLink>
      <variableLink><testDataLinkId>631f2f58-f363-4bfc-bdb7-a9f7810cf7ef</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>23fd380a-1fb5-4f6a-a385-a87d33192e8f</variableId></variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>8f5eb443-bd5c-45b9-a3e6-dd4cee17f3a0</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Cart/TC_Cart_Persistence</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>e70ec4ea-2ca4-4aa0-a186-f7749e0912fe</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Cart/persistence-cart-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>e70ec4ea-2ca4-4aa0-a186-f7749e0912fe</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>2b935ee7-52dd-4068-951c-0dd6e3ea6737</variableId></variableLink>
      <variableLink><testDataLinkId>e70ec4ea-2ca4-4aa0-a186-f7749e0912fe</testDataLinkId><type>DATA_COLUMN</type><value>email</value><variableId>6a6ebf31-f0d6-4356-8348-fd4a404868c1</variableId></variableLink>
      <variableLink><testDataLinkId>e70ec4ea-2ca4-4aa0-a186-f7749e0912fe</testDataLinkId><type>DATA_COLUMN</type><value>password</value><variableId>25e9c740-fba6-4b9e-b388-238056f784ba</variableId></variableLink>
      <variableLink><testDataLinkId>e70ec4ea-2ca4-4aa0-a186-f7749e0912fe</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>dd75f85f-95bf-4b8d-adf1-f0868fef32c8</variableId></variableLink>
   </testCaseLink>
   <testSuiteGuid>9aa3d849-6d4f-40af-9f46-b14072ab720d</testSuiteGuid>
</TestSuiteEntity>
