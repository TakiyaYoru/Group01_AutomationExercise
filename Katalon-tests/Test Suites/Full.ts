<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description>Run full regression: Authentication + Product + Cart + Checkout</description>
   <name>Full</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>10</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>

   <testCaseLink>
      <guid>full-auth-login</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Authentication/TC_Login</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>full-auth-login-data</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Authentication/login-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>full-auth-login-data</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>5ee8f6a5-f8c4-4e4f-8fe9-fb3ef1f696a9</variableId></variableLink>
      <variableLink><testDataLinkId>full-auth-login-data</testDataLinkId><type>DATA_COLUMN</type><value>email</value><variableId>8f73dfc4-e1f6-430c-a4f5-362f9f8e98d0</variableId></variableLink>
      <variableLink><testDataLinkId>full-auth-login-data</testDataLinkId><type>DATA_COLUMN</type><value>password</value><variableId>c738c65f-0e4f-4de8-a0af-c2f7921b77f9</variableId></variableLink>
      <variableLink><testDataLinkId>full-auth-login-data</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>45dd6a63-0786-4d64-b8ba-836193a9fbf0</variableId></variableLink>
   </testCaseLink>

   <testCaseLink>
      <guid>full-auth-register</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Authentication/TC_Register</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>full-auth-register-data</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Authentication/register-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>full-auth-register-data</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>1e59f7b6-b049-4f12-b8d5-f9a5f52abd30</variableId></variableLink>
      <variableLink><testDataLinkId>full-auth-register-data</testDataLinkId><type>DATA_COLUMN</type><value>name</value><variableId>4ab16fa0-ee80-4ee8-8e9f-8db9ac855164</variableId></variableLink>
      <variableLink><testDataLinkId>full-auth-register-data</testDataLinkId><type>DATA_COLUMN</type><value>email</value><variableId>6ab56a79-e393-4121-b1f8-3808f7d9376a</variableId></variableLink>
      <variableLink><testDataLinkId>full-auth-register-data</testDataLinkId><type>DATA_COLUMN</type><value>password</value><variableId>3a9329b8-fde4-4b52-9735-6e6e79b8d7d6</variableId></variableLink>
      <variableLink><testDataLinkId>full-auth-register-data</testDataLinkId><type>DATA_COLUMN</type><value>firstName</value><variableId>aad89e7f-34d0-4379-9d84-56986f0f9f9e</variableId></variableLink>
      <variableLink><testDataLinkId>full-auth-register-data</testDataLinkId><type>DATA_COLUMN</type><value>lastName</value><variableId>f84d4ef5-575f-4f3e-bd08-0f6d26a452b3</variableId></variableLink>
      <variableLink><testDataLinkId>full-auth-register-data</testDataLinkId><type>DATA_COLUMN</type><value>address</value><variableId>b18f9f75-9131-4f11-b11c-b8152fda8e7e</variableId></variableLink>
      <variableLink><testDataLinkId>full-auth-register-data</testDataLinkId><type>DATA_COLUMN</type><value>state</value><variableId>9fa70c08-c3d3-4d07-a5d7-4caa787bc06b</variableId></variableLink>
      <variableLink><testDataLinkId>full-auth-register-data</testDataLinkId><type>DATA_COLUMN</type><value>city</value><variableId>62fb9128-f8c3-4a8e-9956-5ced1dbcc407</variableId></variableLink>
      <variableLink><testDataLinkId>full-auth-register-data</testDataLinkId><type>DATA_COLUMN</type><value>zipcode</value><variableId>f157b58e-7ab1-423b-8f92-9a873f639ee2</variableId></variableLink>
      <variableLink><testDataLinkId>full-auth-register-data</testDataLinkId><type>DATA_COLUMN</type><value>mobile</value><variableId>c0054fb5-50fe-4ac4-982c-ccf5b88d80d1</variableId></variableLink>
      <variableLink><testDataLinkId>full-auth-register-data</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>5cfd7dce-72fd-4d74-a978-5f3894f6b285</variableId></variableLink>
   </testCaseLink>

   <testCaseLink>
      <guid>full-auth-logout</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Authentication/TC_Logout</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>

   <testCaseLink>
      <guid>full-auth-delete</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Authentication/TC_Delete_Account_Cluster</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>

   <testCaseLink>
      <guid>full-product-search</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Product/TC_Product_Search</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>full-product-search-data</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Product/search-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>full-product-search-data</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>5d72c58f-6f73-44ef-9f16-f831f4ed898f</variableId></variableLink>
      <variableLink><testDataLinkId>full-product-search-data</testDataLinkId><type>DATA_COLUMN</type><value>keyword</value><variableId>4ea0ec38-b688-4ee7-8ecc-1124f5e59c7b</variableId></variableLink>
      <variableLink><testDataLinkId>full-product-search-data</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>6c67f572-19d3-404d-bff6-572dac620e2f</variableId></variableLink>
   </testCaseLink>

   <testCaseLink>
      <guid>full-product-filter</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Product/TC_Product_Filter</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>full-product-filter-data</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Product/filter-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>full-product-filter-data</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>c86480b8-f673-4cf0-b6f4-c5ec527918c9</variableId></variableLink>
      <variableLink><testDataLinkId>full-product-filter-data</testDataLinkId><type>DATA_COLUMN</type><value>filterType</value><variableId>b7f48ef7-c7ea-476b-8718-7fba2bdb40ad</variableId></variableLink>
      <variableLink><testDataLinkId>full-product-filter-data</testDataLinkId><type>DATA_COLUMN</type><value>parent</value><variableId>5aab8f2a-98f6-4f24-ae1d-4ccb0f8a6d46</variableId></variableLink>
      <variableLink><testDataLinkId>full-product-filter-data</testDataLinkId><type>DATA_COLUMN</type><value>child</value><variableId>4ca7f7fd-fec0-4553-b0d6-58b9482d1aad</variableId></variableLink>
      <variableLink><testDataLinkId>full-product-filter-data</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>671226a5-b35c-41b1-bce2-41165f5f7234</variableId></variableLink>
   </testCaseLink>

   <testCaseLink>
      <guid>full-product-detail</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Product/TC_Product_Detail</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>

   <testCaseLink>
      <guid>full-cart-add</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Cart/TC_Cart_Add</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>full-cart-add-data</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Cart/add-cart-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>full-cart-add-data</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>be8121b1-b0f0-4279-bf6f-ae6582192a1a</variableId></variableLink>
      <variableLink><testDataLinkId>full-cart-add-data</testDataLinkId><type>DATA_COLUMN</type><value>source</value><variableId>d4d8e893-437e-4267-8f5f-26f9ca3768a7</variableId></variableLink>
      <variableLink><testDataLinkId>full-cart-add-data</testDataLinkId><type>DATA_COLUMN</type><value>brand</value><variableId>af3024f1-a0e6-4973-a4bf-594f7338b16a</variableId></variableLink>
      <variableLink><testDataLinkId>full-cart-add-data</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>42dbf62c-7dce-4f4f-bbf4-34d066d0f689</variableId></variableLink>
   </testCaseLink>

   <testCaseLink>
      <guid>full-cart-quantity</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Cart/TC_Cart_Quantity</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>full-cart-quantity-data</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Cart/quantity-cart-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>full-cart-quantity-data</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>7019b5fc-83dc-4f69-b2e7-1aa920637f23</variableId></variableLink>
      <variableLink><testDataLinkId>full-cart-quantity-data</testDataLinkId><type>DATA_COLUMN</type><value>quantity</value><variableId>ec5f8f67-a8ec-4931-af36-f9e19d2f1450</variableId></variableLink>
      <variableLink><testDataLinkId>full-cart-quantity-data</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>bf5d0f8a-7c36-4a91-b4b7-10a2d6fd122c</variableId></variableLink>
   </testCaseLink>

   <testCaseLink>
      <guid>full-cart-remove</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Cart/TC_Cart_Remove</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>full-cart-remove-data</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Cart/remove-cart-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>full-cart-remove-data</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>a633ceb6-b453-45f8-9ce7-5a307d4ceb80</variableId></variableLink>
      <variableLink><testDataLinkId>full-cart-remove-data</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>23fd380a-1fb5-4f6a-a385-a87d33192e8f</variableId></variableLink>
   </testCaseLink>

   <testCaseLink>
      <guid>full-cart-persistence</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Cart/TC_Cart_Persistence</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>full-cart-persistence-data</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Cart/persistence-cart-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>full-cart-persistence-data</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>2b935ee7-52dd-4068-951c-0dd6e3ea6737</variableId></variableLink>
      <variableLink><testDataLinkId>full-cart-persistence-data</testDataLinkId><type>DATA_COLUMN</type><value>email</value><variableId>6a6ebf31-f0d6-4356-8348-fd4a404868c1</variableId></variableLink>
      <variableLink><testDataLinkId>full-cart-persistence-data</testDataLinkId><type>DATA_COLUMN</type><value>password</value><variableId>25e9c740-fba6-4b9e-b388-238056f784ba</variableId></variableLink>
      <variableLink><testDataLinkId>full-cart-persistence-data</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>dd75f85f-95bf-4b8d-adf1-f0868fef32c8</variableId></variableLink>
   </testCaseLink>

   <testCaseLink>
      <guid>full-checkout-flow</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Check_Out/TC_Checkout_Flow</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>full-checkout-flow-data</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Checkout/checkout-flow-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>full-checkout-flow-data</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>ea4139d0-c7c5-4f67-a836-2738f03f16f5</variableId></variableLink>
      <variableLink><testDataLinkId>full-checkout-flow-data</testDataLinkId><type>DATA_COLUMN</type><value>email</value><variableId>1ce2a090-21f0-4f2b-983b-c5f730f534c0</variableId></variableLink>
      <variableLink><testDataLinkId>full-checkout-flow-data</testDataLinkId><type>DATA_COLUMN</type><value>password</value><variableId>fbe266b0-e0f2-4429-a319-98edf57fea46</variableId></variableLink>
      <variableLink><testDataLinkId>full-checkout-flow-data</testDataLinkId><type>DATA_COLUMN</type><value>cardName</value><variableId>593261b1-9d4f-49fa-9cf0-4be5df86b5a1</variableId></variableLink>
      <variableLink><testDataLinkId>full-checkout-flow-data</testDataLinkId><type>DATA_COLUMN</type><value>cardNumber</value><variableId>de5776b8-e783-43d9-a37b-e3b82c5fbb7d</variableId></variableLink>
      <variableLink><testDataLinkId>full-checkout-flow-data</testDataLinkId><type>DATA_COLUMN</type><value>cardCvc</value><variableId>17ad0f96-b5f5-4f2c-9980-57790d7ff15d</variableId></variableLink>
      <variableLink><testDataLinkId>full-checkout-flow-data</testDataLinkId><type>DATA_COLUMN</type><value>expMonth</value><variableId>c3587b1b-53cf-4f6d-96dd-d61442495528</variableId></variableLink>
      <variableLink><testDataLinkId>full-checkout-flow-data</testDataLinkId><type>DATA_COLUMN</type><value>expYear</value><variableId>0562a6b8-6ea1-434f-95db-3ce6f9cd4caf</variableId></variableLink>
      <variableLink><testDataLinkId>full-checkout-flow-data</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>8272f6f3-8d7b-4ca0-8bd8-5fdf5f2ad3ad</variableId></variableLink>
   </testCaseLink>

   <testCaseLink>
      <guid>full-checkout-address</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Check_Out/TC_Checkout_Address</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>full-checkout-address-data</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Checkout/checkout-address-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>full-checkout-address-data</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>524fd043-0a99-4f4f-83e8-bf928017a5e0</variableId></variableLink>
      <variableLink><testDataLinkId>full-checkout-address-data</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>8cee1bc3-f3cb-4f01-a56b-4ef0b16f6d36</variableId></variableLink>
   </testCaseLink>

   <testCaseLink>
      <guid>full-checkout-payment</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Check_Out/TC_Checkout_Payment</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>full-checkout-payment-data</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Checkout/checkout-payment-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>full-checkout-payment-data</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>e22f3919-ab1e-4cff-af55-cf4bcdeeaf93</variableId></variableLink>
      <variableLink><testDataLinkId>full-checkout-payment-data</testDataLinkId><type>DATA_COLUMN</type><value>cardNumber</value><variableId>9479f7e9-34cf-40f1-844d-8ef51d3d267a</variableId></variableLink>
      <variableLink><testDataLinkId>full-checkout-payment-data</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>2b5d8548-18c8-421c-9cd7-59f2ca60e5b8</variableId></variableLink>
   </testCaseLink>

   <testCaseLink>
      <guid>full-checkout-invoice</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Check_Out/TC_Checkout_Invoice</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>full-checkout-invoice-data</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Checkout/checkout-invoice-data</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink><testDataLinkId>full-checkout-invoice-data</testDataLinkId><type>DATA_COLUMN</type><value>scenario</value><variableId>045f0268-1a7d-4b5e-9804-bb59cb5f7f5e</variableId></variableLink>
      <variableLink><testDataLinkId>full-checkout-invoice-data</testDataLinkId><type>DATA_COLUMN</type><value>expected</value><variableId>f7f67230-7cf2-4563-a3de-8f57ff4c26ca</variableId></variableLink>
   </testCaseLink>

   <testSuiteGuid>full-regression-suite-guid</testSuiteGuid>
</TestSuiteEntity>
