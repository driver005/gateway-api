import localVarRequest from 'request';

export * from './aPIMethodRefundList';
export * from './account';
export * from './accountBacsDebitPaymentsSettings';
export * from './accountBrandingSettings';
export * from './accountBrandingSettingsIcon';
export * from './accountBrandingSettingsLogo';
export * from './accountBusinessProfile';
export * from './accountBusinessProfile1';
export * from './accountBusinessProfileSupportAddress';
export * from './accountCapabilities';
export * from './accountCapabilityFutureRequirements';
export * from './accountCapabilityRequirements';
export * from './accountCardIssuingSettings';
export * from './accountCardPaymentsSettings';
export * from './accountDashboardSettings';
export * from './accountDeclineChargeOn';
export * from './accountFutureRequirements';
export * from './accountLink';
export * from './accountList';
export * from './accountPaymentsSettings';
export * from './accountPayoutSettings';
export * from './accountRequirements';
export * from './accountRequirementsAlternative';
export * from './accountRequirementsError';
export * from './accountSepaDebitPaymentsSettings';
export * from './accountSettings';
export * from './accountSettings1';
export * from './accountTermsOfService';
export * from './accountTosAcceptance';
export * from './accountTreasurySettings';
export * from './accountUnificationAccountController';
export * from './accountholderParams';
export * from './address';
export * from './allPeopleRelationshipSpecs';
export * from './allPricesRecurringParams';
export * from './alternateStatementDescriptors';
export * from './apiErrors';
export * from './apmsSourcesSourceList';
export * from './apmsSourcesSourceList1';
export * from './apmsSourcesSourceTransactionList';
export * from './applePayDomain';
export * from './applePayDomainList';
export * from './application';
export * from './applicationFee';
export * from './applicationFeeAccount';
export * from './applicationFeeApplication';
export * from './applicationFeeBalanceTransaction';
export * from './applicationFeeCharge';
export * from './applicationFeeOriginatingTransaction';
export * from './appsSecret';
export * from './automaticTax';
export * from './automaticTaxParam1';
export * from './balance';
export * from './balanceAmount';
export * from './balanceAmountBySourceType';
export * from './balanceDetail';
export * from './balanceTransaction';
export * from './balanceTransactionSource';
export * from './balanceTransactionSource1';
export * from './balanceTransactionsList';
export * from './bankAccount';
export * from './bankAccountAccount';
export * from './bankAccountCustomer';
export * from './bankConnectionsResourceAccountholder';
export * from './bankConnectionsResourceAccountholderAccount';
export * from './bankConnectionsResourceAccountholderCustomer';
export * from './bankConnectionsResourceBalance';
export * from './bankConnectionsResourceBalanceApiResourceCashBalance';
export * from './bankConnectionsResourceBalanceApiResourceCreditBalance';
export * from './bankConnectionsResourceBalanceRefresh';
export * from './bankConnectionsResourceLinkAccountSessionFilters';
export * from './bankConnectionsResourceLinkedAccountList';
export * from './bankConnectionsResourceLinkedAccountList1';
export * from './bankConnectionsResourceOwnerList';
export * from './bankConnectionsResourceOwnerList1';
export * from './bankConnectionsResourceOwnershipRefresh';
export * from './billingClocksResourceBillingClockList';
export * from './billingDetails';
export * from './billingDetailsAddress1';
export * from './billingPortalConfiguration';
export * from './billingPortalConfigurationApplication';
export * from './billingPortalSession';
export * from './billingPortalSessionConfiguration';
export * from './billingPortalSessionFlow';
export * from './businessProfileSpecsSupportUrlAnyOf';
export * from './capability';
export * from './capabilityAccount';
export * from './card';
export * from './cardAccount';
export * from './cardCustomer';
export * from './cardIssuingAccountTermsOfService';
export * from './cashBalance';
export * from './charge';
export * from './chargeApplication';
export * from './chargeApplicationFee';
export * from './chargeBalanceTransaction';
export * from './chargeCustomer';
export * from './chargeDestination';
export * from './chargeDispute';
export * from './chargeFailureBalanceTransaction';
export * from './chargeFraudDetails';
export * from './chargeFraudDetails1';
export * from './chargeInvoice';
export * from './chargeList';
export * from './chargeOnBehalfOf';
export * from './chargeOutcome';
export * from './chargeOutcome1';
export * from './chargeOutcomeRule';
export * from './chargePaymentIntent';
export * from './chargePaymentMethodDetails';
export * from './chargeReview';
export * from './chargeShipping';
export * from './chargeSource';
export * from './chargeSourceTransfer';
export * from './chargeTransfer';
export * from './chargeTransferData';
export * from './chargeTransferData1';
export * from './chargeTransferDataDestination';
export * from './checkoutAcssDebitMandateOptions';
export * from './checkoutAcssDebitPaymentMethodOptions';
export * from './checkoutAffirmPaymentMethodOptions';
export * from './checkoutAfterpayClearpayPaymentMethodOptions';
export * from './checkoutAlipayPaymentMethodOptions';
export * from './checkoutAuBecsDebitPaymentMethodOptions';
export * from './checkoutBacsDebitPaymentMethodOptions';
export * from './checkoutBancontactPaymentMethodOptions';
export * from './checkoutBoletoPaymentMethodOptions';
export * from './checkoutCardInstallmentsOptions';
export * from './checkoutCardPaymentMethodOptions';
export * from './checkoutCustomerBalanceBankTransferPaymentMethodOptions';
export * from './checkoutCustomerBalancePaymentMethodOptions';
export * from './checkoutEpsPaymentMethodOptions';
export * from './checkoutFpxPaymentMethodOptions';
export * from './checkoutGiropayPaymentMethodOptions';
export * from './checkoutGrabPayPaymentMethodOptions';
export * from './checkoutIdealPaymentMethodOptions';
export * from './checkoutKlarnaPaymentMethodOptions';
export * from './checkoutKonbiniPaymentMethodOptions';
export * from './checkoutOxxoPaymentMethodOptions';
export * from './checkoutP24PaymentMethodOptions';
export * from './checkoutPaynowPaymentMethodOptions';
export * from './checkoutPixPaymentMethodOptions';
export * from './checkoutSepaDebitPaymentMethodOptions';
export * from './checkoutSession';
export * from './checkoutSessionAfterExpiration';
export * from './checkoutSessionConsent';
export * from './checkoutSessionConsentCollection';
export * from './checkoutSessionCustomer';
export * from './checkoutSessionCustomerDetails';
export * from './checkoutSessionInvoice';
export * from './checkoutSessionInvoiceCreation';
export * from './checkoutSessionPaymentIntent';
export * from './checkoutSessionPaymentLink';
export * from './checkoutSessionPaymentMethodOptions';
export * from './checkoutSessionPaymentMethodOptions1';
export * from './checkoutSessionSetupIntent';
export * from './checkoutSessionShippingAddressCollection';
export * from './checkoutSessionShippingCost';
export * from './checkoutSessionShippingDetails';
export * from './checkoutSessionSubscription';
export * from './checkoutSessionTotalDetails';
export * from './checkoutSofortPaymentMethodOptions';
export * from './checkoutUsBankAccountPaymentMethodOptions';
export * from './connectCollectionTransfer';
export * from './connectCollectionTransferDestination';
export * from './countrySpec';
export * from './countrySpecList';
export * from './countrySpecVerificationFieldDetails';
export * from './countrySpecVerificationFields';
export * from './coupon';
export * from './couponAppliesTo';
export * from './couponCurrencyOption';
export * from './couponsResourceCouponList';
export * from './creditNote';
export * from './creditNoteCustomer';
export * from './creditNoteCustomerBalanceTransaction';
export * from './creditNoteInvoice';
export * from './creditNoteLineItem';
export * from './creditNoteLineItemParams';
export * from './creditNoteLinesList';
export * from './creditNoteLinesList1';
export * from './creditNoteRefund';
export * from './creditNoteShippingCost1';
export * from './creditNoteShippingCost2';
export * from './creditNoteTaxAmount';
export * from './creditNoteTaxAmountTaxRate';
export * from './creditNotesList';
export * from './currencyOption';
export * from './currencyOptionCustomUnitAmount';
export * from './customUnitAmount';
export * from './customer';
export * from './customerAcceptance';
export * from './customerAddress';
export * from './customerBalanceCustomerBalanceSettings';
export * from './customerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction';
export * from './customerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionPaymentIntent';
export * from './customerBalanceResourceCashBalanceTransactionResourceFundedTransaction';
export * from './customerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer';
export * from './customerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer';
export * from './customerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction';
export * from './customerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionRefund';
export * from './customerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction';
export * from './customerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionPaymentIntent';
export * from './customerBalanceTransaction';
export * from './customerBalanceTransactionCreditNote';
export * from './customerBalanceTransactionCustomer';
export * from './customerBalanceTransactionInvoice';
export * from './customerBalanceTransactionList';
export * from './customerCashBalance';
export * from './customerCashBalanceTransaction';
export * from './customerCashBalanceTransactionCustomer';
export * from './customerCashBalanceTransactionList';
export * from './customerDefaultSource';
export * from './customerDetailsParam';
export * from './customerDetailsParams';
export * from './customerDiscount';
export * from './customerPaymentMethodResourceList';
export * from './customerResourceCustomerList';
export * from './customerShipping1';
export * from './customerTax';
export * from './customerTaxLocation';
export * from './customerTaxLocation1';
export * from './customerTestClock';
export * from './dataParams';
export * from './deleteCustomersCustomerSourcesId200Response';
export * from './deletedAccount';
export * from './deletedApplePayDomain';
export * from './deletedApplication';
export * from './deletedBankAccount';
export * from './deletedCard';
export * from './deletedCoupon';
export * from './deletedCustomer';
export * from './deletedDiscount';
export * from './deletedDiscountCustomer';
export * from './deletedDiscountPromotionCode';
export * from './deletedExternalAccount';
export * from './deletedInvoice';
export * from './deletedInvoiceitem';
export * from './deletedPaymentSource';
export * from './deletedPerson';
export * from './deletedPlan';
export * from './deletedPrice';
export * from './deletedProduct';
export * from './deletedRadarValueList';
export * from './deletedRadarValueListItem';
export * from './deletedSubscriptionItem';
export * from './deletedTaxId';
export * from './deletedTerminalConfiguration';
export * from './deletedTerminalLocation';
export * from './deletedTerminalReader';
export * from './deletedTestHelpersTestClock';
export * from './deletedWebhookEndpoint';
export * from './discount';
export * from './discountsDataParam';
export * from './discountsResourceDiscountAmount';
export * from './discountsResourceDiscountAmountDiscount';
export * from './dispute';
export * from './disputeCharge';
export * from './disputeEvidence';
export * from './disputeEvidenceCancellationPolicy';
export * from './disputeEvidenceCustomerCommunication';
export * from './disputeEvidenceCustomerSignature';
export * from './disputeEvidenceDetails';
export * from './disputeEvidenceDuplicateChargeDocumentation';
export * from './disputeEvidenceReceipt';
export * from './disputeEvidenceRefundPolicy';
export * from './disputeEvidenceServiceDocumentation';
export * from './disputeEvidenceShippingDocumentation';
export * from './disputeEvidenceUncategorizedFile';
export * from './disputeList';
export * from './disputePaymentIntent';
export * from './emailSent';
export * from './ephemeralKey';
export * from './event';
export * from './eventRequest';
export * from './exchangeRate';
export * from './exchangeRateList';
export * from './externalAccount';
export * from './externalAccountList';
export * from './externalAccountList1';
export * from './fee';
export * from './feeRefund';
export * from './feeRefundBalanceTransaction';
export * from './feeRefundFee';
export * from './feeRefundList';
export * from './feeRefundList1';
export * from './fileFileLinkList';
export * from './fileFileLinkList1';
export * from './fileFileList';
export * from './fileLink';
export * from './fileLinkFile';
export * from './financialConnectionsAccount';
export * from './financialConnectionsAccountAccountHolder';
export * from './financialConnectionsAccountBalance';
export * from './financialConnectionsAccountBalanceRefresh';
export * from './financialConnectionsAccountOwner';
export * from './financialConnectionsAccountOwnership';
export * from './financialConnectionsAccountOwnershipRefresh';
export * from './financialConnectionsSession';
export * from './financialConnectionsSessionAccountHolder';
export * from './financialReportingFinanceReportRunList';
export * from './financialReportingFinanceReportRunRunParameters';
export * from './financialReportingFinanceReportTypeList';
export * from './fundingInstructions';
export * from './fundingInstructionsBankTransfer';
export * from './fundingInstructionsBankTransferFinancialAddress';
export * from './fundingInstructionsBankTransferIbanRecord';
export * from './fundingInstructionsBankTransferSortCodeRecord';
export * from './fundingInstructionsBankTransferSpeiRecord';
export * from './fundingInstructionsBankTransferZenginRecord';
export * from './gelatoDataDocumentReportDateOfBirth';
export * from './gelatoDataDocumentReportExpirationDate';
export * from './gelatoDataDocumentReportIssuedDate';
export * from './gelatoDataIdNumberReportDate';
export * from './gelatoDataVerifiedOutputsDate';
export * from './gelatoDocumentReport';
export * from './gelatoDocumentReportAddress';
export * from './gelatoDocumentReportDob';
export * from './gelatoDocumentReportError';
export * from './gelatoDocumentReportError1';
export * from './gelatoDocumentReportExpirationDate';
export * from './gelatoDocumentReportIssuedDate';
export * from './gelatoIdNumberReport';
export * from './gelatoIdNumberReportDob';
export * from './gelatoIdNumberReportError';
export * from './gelatoIdNumberReportError1';
export * from './gelatoReportDocumentOptions';
export * from './gelatoSelfieReport';
export * from './gelatoSelfieReportError';
export * from './gelatoSelfieReportError1';
export * from './gelatoSessionDocumentOptions';
export * from './gelatoSessionLastError';
export * from './gelatoVerificationReportList';
export * from './gelatoVerificationReportOptions';
export * from './gelatoVerificationSessionList';
export * from './gelatoVerificationSessionOptions';
export * from './gelatoVerifiedOutputs';
export * from './gelatoVerifiedOutputsAddress';
export * from './gelatoVerifiedOutputsDob';
export * from './getAccountsCreatedParameter';
export * from './getCustomersCustomer200Response';
export * from './getInvoicesUpcomingDiscountsParameter';
export * from './getInvoicesUpcomingSubscriptionBillingCycleAnchorParameter';
export * from './getInvoicesUpcomingSubscriptionBillingCycleAnchorParameterAnyOf';
export * from './getInvoicesUpcomingSubscriptionCancelAtParameter';
export * from './getInvoicesUpcomingSubscriptionDefaultTaxRatesParameter';
export * from './getInvoicesUpcomingSubscriptionTrialEndParameter';
export * from './getTerminalConfigurationsConfiguration200Response';
export * from './getTerminalLocationsLocation200Response';
export * from './getTerminalReadersReader200Response';
export * from './identityVerificationReport';
export * from './identityVerificationSession';
export * from './identityVerificationSessionLastError';
export * from './identityVerificationSessionLastVerificationReport';
export * from './identityVerificationSessionRedaction';
export * from './identityVerificationSessionVerifiedOutputs';
export * from './inboundTransfers';
export * from './inboundTransfersPaymentMethodDetailsUsBankAccount';
export * from './individualSpecsMetadata';
export * from './invoice';
export * from './invoiceAccountTaxIdsInner';
export * from './invoiceApplication';
export * from './invoiceCharge';
export * from './invoiceCustomer';
export * from './invoiceCustomerAddress';
export * from './invoiceCustomerShipping';
export * from './invoiceDefaultPaymentMethod';
export * from './invoiceDefaultSource';
export * from './invoiceDiscount';
export * from './invoiceDiscountsInner';
export * from './invoiceFromInvoice';
export * from './invoiceInstallmentsCard';
export * from './invoiceItemPreviewParams';
export * from './invoiceItemPreviewParamsDiscounts';
export * from './invoiceItemPreviewParamsTaxRates';
export * from './invoiceItemThresholdReason';
export * from './invoiceLastFinalizationError';
export * from './invoiceLatestRevision';
export * from './invoiceLineItemPeriod';
export * from './invoiceLinesList';
export * from './invoiceLinesList1';
export * from './invoiceMandateOptionsCard';
export * from './invoiceOnBehalfOf';
export * from './invoicePaymentIntent';
export * from './invoicePaymentMethodOptionsAcssDebit';
export * from './invoicePaymentMethodOptionsAcssDebitMandateOptions';
export * from './invoicePaymentMethodOptionsBancontact';
export * from './invoicePaymentMethodOptionsCard';
export * from './invoicePaymentMethodOptionsCustomerBalance';
export * from './invoicePaymentMethodOptionsCustomerBalanceBankTransfer';
export * from './invoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer';
export * from './invoicePaymentMethodOptionsUsBankAccount';
export * from './invoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions';
export * from './invoiceQuote';
export * from './invoiceRenderingOptions';
export * from './invoiceSettingCustomField';
export * from './invoiceSettingCustomerSetting';
export * from './invoiceSettingCustomerSettingDefaultPaymentMethod';
export * from './invoiceSettingCustomerSettingRenderingOptions';
export * from './invoiceSettingQuoteSetting';
export * from './invoiceSettingRenderingOptions';
export * from './invoiceSettingSubscriptionScheduleSetting';
export * from './invoiceShippingCost';
export * from './invoiceShippingDetails';
export * from './invoiceSubscription';
export * from './invoiceTaxAmount';
export * from './invoiceTestClock';
export * from './invoiceThresholdReason';
export * from './invoiceTransferData';
export * from './invoiceTransferData1';
export * from './invoiceTransferDataDestination';
export * from './invoiceitem';
export * from './invoiceitemCustomer';
export * from './invoiceitemDiscountsInner';
export * from './invoiceitemInvoice';
export * from './invoiceitemPlan';
export * from './invoiceitemPrice';
export * from './invoiceitemSubscription';
export * from './invoiceitemTestClock';
export * from './invoicesFromInvoice';
export * from './invoicesFromInvoiceInvoice';
export * from './invoicesItemsList';
export * from './invoicesLineItemsCreditedItems';
export * from './invoicesLineItemsProrationDetails';
export * from './invoicesLineItemsProrationDetailsCreditedItems';
export * from './invoicesList';
export * from './invoicesPaymentMethodOptions';
export * from './invoicesPaymentMethodOptionsAcssDebit';
export * from './invoicesPaymentMethodOptionsBancontact';
export * from './invoicesPaymentMethodOptionsCard';
export * from './invoicesPaymentMethodOptionsCustomerBalance';
export * from './invoicesPaymentMethodOptionsKonbini';
export * from './invoicesPaymentMethodOptionsUsBankAccount';
export * from './invoicesPaymentSettings';
export * from './invoicesPaymentSettingsPaymentMethodOptions';
export * from './invoicesResourceInvoiceTaxId';
export * from './invoicesShippingCost';
export * from './invoicesShippingCostShippingRate';
export * from './invoicesStatusTransitions';
export * from './issuingAuthorization';
export * from './issuingAuthorizationAmountDetails';
export * from './issuingAuthorizationAmountDetails1';
export * from './issuingAuthorizationCardholder';
export * from './issuingAuthorizationList';
export * from './issuingAuthorizationMerchantData';
export * from './issuingAuthorizationNetworkData';
export * from './issuingAuthorizationNetworkData1';
export * from './issuingAuthorizationPendingRequest';
export * from './issuingAuthorizationPendingRequest1';
export * from './issuingAuthorizationRequest';
export * from './issuingAuthorizationTreasury';
export * from './issuingAuthorizationTreasury1';
export * from './issuingAuthorizationVerificationData';
export * from './issuingCard';
export * from './issuingCardApplePay';
export * from './issuingCardAuthorizationControls';
export * from './issuingCardGooglePay';
export * from './issuingCardList';
export * from './issuingCardReplacedBy';
export * from './issuingCardReplacementFor';
export * from './issuingCardShipping';
export * from './issuingCardShipping1';
export * from './issuingCardShippingCustoms';
export * from './issuingCardShippingCustoms1';
export * from './issuingCardSpendingLimit';
export * from './issuingCardWallets';
export * from './issuingCardWallets1';
export * from './issuingCardholder';
export * from './issuingCardholderAddress';
export * from './issuingCardholderAuthorizationControls';
export * from './issuingCardholderCardIssuing';
export * from './issuingCardholderCardIssuingUserTermsAcceptance';
export * from './issuingCardholderCompany';
export * from './issuingCardholderCompany1';
export * from './issuingCardholderIdDocument';
export * from './issuingCardholderIdDocumentBack';
export * from './issuingCardholderIdDocumentFront';
export * from './issuingCardholderIndividual';
export * from './issuingCardholderIndividual1';
export * from './issuingCardholderIndividualCardIssuing';
export * from './issuingCardholderIndividualDob';
export * from './issuingCardholderIndividualDob1';
export * from './issuingCardholderIndividualVerification';
export * from './issuingCardholderList';
export * from './issuingCardholderRequirements';
export * from './issuingCardholderSpendingControls';
export * from './issuingCardholderSpendingLimit';
export * from './issuingCardholderUserTermsAcceptance';
export * from './issuingCardholderVerification';
export * from './issuingCardholderVerificationDocument';
export * from './issuingDispute';
export * from './issuingDisputeCanceledEvidence';
export * from './issuingDisputeCanceledEvidenceAdditionalDocumentation';
export * from './issuingDisputeDuplicateEvidence';
export * from './issuingDisputeDuplicateEvidenceCardStatement';
export * from './issuingDisputeDuplicateEvidenceCashReceipt';
export * from './issuingDisputeDuplicateEvidenceCheckImage';
export * from './issuingDisputeEvidence';
export * from './issuingDisputeFraudulentEvidence';
export * from './issuingDisputeList';
export * from './issuingDisputeMerchandiseNotAsDescribedEvidence';
export * from './issuingDisputeNotReceivedEvidence';
export * from './issuingDisputeOtherEvidence';
export * from './issuingDisputeServiceNotAsDescribedEvidence';
export * from './issuingDisputeTransaction';
export * from './issuingDisputeTreasury';
export * from './issuingDisputeTreasury1';
export * from './issuingTransaction';
export * from './issuingTransactionAmountDetails';
export * from './issuingTransactionAmountDetails1';
export * from './issuingTransactionAuthorization';
export * from './issuingTransactionBalanceTransaction';
export * from './issuingTransactionCard';
export * from './issuingTransactionCardholder';
export * from './issuingTransactionDispute';
export * from './issuingTransactionFlightData';
export * from './issuingTransactionFlightDataLeg';
export * from './issuingTransactionFuelData';
export * from './issuingTransactionList';
export * from './issuingTransactionLodgingData';
export * from './issuingTransactionPurchaseDetails';
export * from './issuingTransactionPurchaseDetails1';
export * from './issuingTransactionPurchaseDetailsFlight';
export * from './issuingTransactionPurchaseDetailsFuel';
export * from './issuingTransactionPurchaseDetailsLodging';
export * from './issuingTransactionReceiptData';
export * from './issuingTransactionTreasury';
export * from './issuingTransactionTreasury1';
export * from './item';
export * from './itemBillingThresholdsParam';
export * from './itemPrice';
export * from './legalEntityCompany';
export * from './legalEntityCompanyAddressKana';
export * from './legalEntityCompanyAddressKanji';
export * from './legalEntityCompanyOwnershipDeclaration';
export * from './legalEntityCompanyVerification';
export * from './legalEntityCompanyVerification1';
export * from './legalEntityCompanyVerificationDocument';
export * from './legalEntityCompanyVerificationDocumentBack';
export * from './legalEntityCompanyVerificationDocumentFront';
export * from './legalEntityDob';
export * from './legalEntityJapanAddress';
export * from './legalEntityPersonVerification';
export * from './legalEntityPersonVerificationAdditionalDocument';
export * from './legalEntityPersonVerificationDocument';
export * from './legalEntityPersonVerificationDocumentBack';
export * from './legalEntityPersonVerificationDocumentFront';
export * from './legalEntityUboDeclaration';
export * from './level3';
export * from './level3LineItems';
export * from './lineItem';
export * from './lineItemPlan';
export * from './lineItemPrice';
export * from './lineItemProrationDetails';
export * from './lineItemsDiscountAmount';
export * from './lineItemsTaxAmount';
export * from './linkedAccountOptionsUsBankAccount';
export * from './linkedFlowsParam';
export * from './listAccountCapability';
export * from './loginLink';
export * from './mandate';
export * from './mandateAcssDebit';
export * from './mandateAuBecsDebit';
export * from './mandateBacsDebit';
export * from './mandateBlik';
export * from './mandateOptionsOffSessionDetailsBlik';
export * from './mandateOptionsParam';
export * from './mandatePaymentMethod';
export * from './mandatePaymentMethodDetails';
export * from './mandateSepaDebit';
export * from './mandateSingleUse';
export * from './modelError';
export * from './modelFile';
export * from './networks';
export * from './notificationEventData';
export * from './notificationEventList';
export * from './notificationEventRequest';
export * from './notificationWebhookEndpointList';
export * from './oneTimePriceData';
export * from './onlineAcceptance';
export * from './outboundPaymentsPaymentMethodDetails';
export * from './outboundPaymentsPaymentMethodDetailsFinancialAccount';
export * from './outboundPaymentsPaymentMethodDetailsUsBankAccount';
export * from './outboundTransfersPaymentMethodDetails';
export * from './outboundTransfersPaymentMethodDetailsUsBankAccount';
export * from './packageDimensions';
export * from './paymentFlowsAmountDetails';
export * from './paymentFlowsAmountDetailsResourceTip';
export * from './paymentFlowsAutomaticPaymentMethodsPaymentIntent';
export * from './paymentFlowsInstallmentOptions';
export * from './paymentFlowsPaymentIntentList';
export * from './paymentFlowsPaymentMethodList';
export * from './paymentFlowsPrivatePaymentMethodsAlipayDetails';
export * from './paymentFlowsPrivatePaymentMethodsKlarnaDob';
export * from './paymentFlowsSetupIntentList';
export * from './paymentFlowsSetupIntentSetupAttemptList';
export * from './paymentIntent';
export * from './paymentIntentApplication';
export * from './paymentIntentAutomaticPaymentMethods';
export * from './paymentIntentCardProcessing';
export * from './paymentIntentCustomer';
export * from './paymentIntentInvoice';
export * from './paymentIntentLastPaymentError';
export * from './paymentIntentLatestCharge';
export * from './paymentIntentNextAction';
export * from './paymentIntentNextAction1';
export * from './paymentIntentNextActionAlipayHandleRedirect';
export * from './paymentIntentNextActionBoleto';
export * from './paymentIntentNextActionCardAwaitNotification';
export * from './paymentIntentNextActionDisplayBankTransferInstructions';
export * from './paymentIntentNextActionDisplayOxxoDetails';
export * from './paymentIntentNextActionKonbini';
export * from './paymentIntentNextActionKonbiniFamilymart';
export * from './paymentIntentNextActionKonbiniLawson';
export * from './paymentIntentNextActionKonbiniMinistop';
export * from './paymentIntentNextActionKonbiniSeicomart';
export * from './paymentIntentNextActionKonbiniStores';
export * from './paymentIntentNextActionKonbiniStoresFamilymart';
export * from './paymentIntentNextActionKonbiniStoresLawson';
export * from './paymentIntentNextActionKonbiniStoresMinistop';
export * from './paymentIntentNextActionKonbiniStoresSeicomart';
export * from './paymentIntentNextActionPaynowDisplayQrCode';
export * from './paymentIntentNextActionPixDisplayQrCode';
export * from './paymentIntentNextActionPromptpayDisplayQrCode';
export * from './paymentIntentNextActionRedirectToUrl';
export * from './paymentIntentNextActionVerifyWithMicrodeposits';
export * from './paymentIntentNextActionWechatPayDisplayQrCode';
export * from './paymentIntentNextActionWechatPayRedirectToAndroidApp';
export * from './paymentIntentNextActionWechatPayRedirectToIosApp';
export * from './paymentIntentOnBehalfOf';
export * from './paymentIntentPaymentMethod';
export * from './paymentIntentPaymentMethodOptions';
export * from './paymentIntentPaymentMethodOptions1';
export * from './paymentIntentPaymentMethodOptionsAcssDebit';
export * from './paymentIntentPaymentMethodOptionsAuBecsDebit';
export * from './paymentIntentPaymentMethodOptionsCard';
export * from './paymentIntentPaymentMethodOptionsCardInstallments';
export * from './paymentIntentPaymentMethodOptionsCardMandateOptions';
export * from './paymentIntentPaymentMethodOptionsEps';
export * from './paymentIntentPaymentMethodOptionsLink';
export * from './paymentIntentPaymentMethodOptionsMandateOptionsAcssDebit';
export * from './paymentIntentPaymentMethodOptionsSepaDebit';
export * from './paymentIntentPaymentMethodOptionsUsBankAccount';
export * from './paymentIntentProcessing';
export * from './paymentIntentProcessing1';
export * from './paymentIntentProcessingCustomerNotification';
export * from './paymentIntentReview';
export * from './paymentIntentShipping';
export * from './paymentIntentSource';
export * from './paymentIntentTransferData';
export * from './paymentIntentTypeSpecificPaymentMethodOptionsClient';
export * from './paymentLink';
export * from './paymentLinkConsentCollection';
export * from './paymentLinkInvoiceCreation';
export * from './paymentLinkOnBehalfOf';
export * from './paymentLinkPaymentIntentData';
export * from './paymentLinkShippingAddressCollection';
export * from './paymentLinkSubscriptionData';
export * from './paymentLinkTransferData';
export * from './paymentLinksResourceAfterCompletion';
export * from './paymentLinksResourceAutomaticTax';
export * from './paymentLinksResourceCompletionBehaviorConfirmationPage';
export * from './paymentLinksResourceCompletionBehaviorRedirect';
export * from './paymentLinksResourceConsentCollection';
export * from './paymentLinksResourceCustomFields';
export * from './paymentLinksResourceCustomFieldsDropdown';
export * from './paymentLinksResourceCustomFieldsDropdown1';
export * from './paymentLinksResourceCustomFieldsDropdownOption';
export * from './paymentLinksResourceCustomFieldsLabel';
export * from './paymentLinksResourceCustomText';
export * from './paymentLinksResourceCustomTextPosition';
export * from './paymentLinksResourceCustomTextShippingAddress';
export * from './paymentLinksResourceCustomTextSubmit';
export * from './paymentLinksResourceInvoiceCreation';
export * from './paymentLinksResourceInvoiceCreationInvoiceData';
export * from './paymentLinksResourceInvoiceSettings';
export * from './paymentLinksResourceListLineItems';
export * from './paymentLinksResourceListLineItems1';
export * from './paymentLinksResourcePaymentIntentData';
export * from './paymentLinksResourcePaymentLinkList';
export * from './paymentLinksResourcePhoneNumberCollection';
export * from './paymentLinksResourceShippingAddressCollection';
export * from './paymentLinksResourceShippingOption';
export * from './paymentLinksResourceShippingOptionShippingRate';
export * from './paymentLinksResourceSubscriptionData';
export * from './paymentLinksResourceTaxIdCollection';
export * from './paymentLinksResourceTransferData';
export * from './paymentLinksResourceTransferDataDestination';
export * from './paymentMethod';
export * from './paymentMethodAcssDebit';
export * from './paymentMethodAuBecsDebit';
export * from './paymentMethodBacsDebit';
export * from './paymentMethodBoleto';
export * from './paymentMethodCard';
export * from './paymentMethodCardChecks';
export * from './paymentMethodCardChecks1';
export * from './paymentMethodCardNetworks';
export * from './paymentMethodCardThreeDSecureUsage';
export * from './paymentMethodCardWallet';
export * from './paymentMethodCardWallet1';
export * from './paymentMethodCardWalletMasterpass';
export * from './paymentMethodCardWalletMasterpassBillingAddress';
export * from './paymentMethodCardWalletMasterpassShippingAddress';
export * from './paymentMethodCardWalletVisaCheckout';
export * from './paymentMethodCustomer';
export * from './paymentMethodDetails';
export * from './paymentMethodDetailsAchCreditTransfer';
export * from './paymentMethodDetailsAchDebit';
export * from './paymentMethodDetailsAcssDebit';
export * from './paymentMethodDetailsAfterpayClearpay';
export * from './paymentMethodDetailsAuBecsDebit';
export * from './paymentMethodDetailsBacsDebit';
export * from './paymentMethodDetailsBancontact';
export * from './paymentMethodDetailsBancontactGeneratedSepaDebit';
export * from './paymentMethodDetailsBancontactGeneratedSepaDebitMandate';
export * from './paymentMethodDetailsBoleto';
export * from './paymentMethodDetailsCard';
export * from './paymentMethodDetailsCardChecks';
export * from './paymentMethodDetailsCardChecks1';
export * from './paymentMethodDetailsCardInstallments';
export * from './paymentMethodDetailsCardInstallments1';
export * from './paymentMethodDetailsCardInstallmentsPlan';
export * from './paymentMethodDetailsCardInstallmentsPlan1';
export * from './paymentMethodDetailsCardPresent';
export * from './paymentMethodDetailsCardPresentReceipt';
export * from './paymentMethodDetailsCardPresentReceipt1';
export * from './paymentMethodDetailsCardThreeDSecure';
export * from './paymentMethodDetailsCardWallet';
export * from './paymentMethodDetailsCardWallet1';
export * from './paymentMethodDetailsCardWalletMasterpass';
export * from './paymentMethodDetailsCardWalletVisaCheckout';
export * from './paymentMethodDetailsEps';
export * from './paymentMethodDetailsFpx';
export * from './paymentMethodDetailsGiropay';
export * from './paymentMethodDetailsGrabpay';
export * from './paymentMethodDetailsIdeal';
export * from './paymentMethodDetailsInteracPresent';
export * from './paymentMethodDetailsInteracPresentReceipt';
export * from './paymentMethodDetailsInteracPresentReceipt1';
export * from './paymentMethodDetailsKlarna';
export * from './paymentMethodDetailsKonbini';
export * from './paymentMethodDetailsKonbiniStore';
export * from './paymentMethodDetailsKonbiniStore1';
export * from './paymentMethodDetailsMultibanco';
export * from './paymentMethodDetailsOxxo';
export * from './paymentMethodDetailsP24';
export * from './paymentMethodDetailsPaynow';
export * from './paymentMethodDetailsPix';
export * from './paymentMethodDetailsPromptpay';
export * from './paymentMethodDetailsSepaCreditTransfer';
export * from './paymentMethodDetailsSepaDebit';
export * from './paymentMethodDetailsSofort';
export * from './paymentMethodDetailsUsBankAccount';
export * from './paymentMethodDetailsWechatPay';
export * from './paymentMethodEps';
export * from './paymentMethodFpx';
export * from './paymentMethodIdeal';
export * from './paymentMethodKlarna';
export * from './paymentMethodKlarnaDob';
export * from './paymentMethodLink';
export * from './paymentMethodOptionsAffirm';
export * from './paymentMethodOptionsAfterpayClearpay';
export * from './paymentMethodOptionsAlipay';
export * from './paymentMethodOptionsBacsDebit';
export * from './paymentMethodOptionsBancontact';
export * from './paymentMethodOptionsBoleto';
export * from './paymentMethodOptionsCardInstallments';
export * from './paymentMethodOptionsCardInstallmentsPlan';
export * from './paymentMethodOptionsCardMandateOptions';
export * from './paymentMethodOptionsCardPresent';
export * from './paymentMethodOptionsCustomerBalance';
export * from './paymentMethodOptionsCustomerBalanceBankTransfer';
export * from './paymentMethodOptionsCustomerBalanceEuBankAccount';
export * from './paymentMethodOptionsFpx';
export * from './paymentMethodOptionsGiropay';
export * from './paymentMethodOptionsGrabpay';
export * from './paymentMethodOptionsIdeal';
export * from './paymentMethodOptionsKlarna';
export * from './paymentMethodOptionsKonbini';
export * from './paymentMethodOptionsOxxo';
export * from './paymentMethodOptionsP24';
export * from './paymentMethodOptionsPaynow';
export * from './paymentMethodOptionsPix';
export * from './paymentMethodOptionsPromptpay';
export * from './paymentMethodOptionsSofort';
export * from './paymentMethodOptionsWechatPay';
export * from './paymentMethodP24';
export * from './paymentMethodSepaDebit';
export * from './paymentMethodSepaDebitGeneratedFrom';
export * from './paymentMethodSofort';
export * from './paymentMethodUsBankAccount';
export * from './paymentMethodUsBankAccountNetworks';
export * from './paymentPagesCheckoutSessionAfterExpiration';
export * from './paymentPagesCheckoutSessionAfterExpirationRecovery';
export * from './paymentPagesCheckoutSessionAfterExpirationRecovery1';
export * from './paymentPagesCheckoutSessionAutomaticTax';
export * from './paymentPagesCheckoutSessionConsent';
export * from './paymentPagesCheckoutSessionConsentCollection';
export * from './paymentPagesCheckoutSessionCustomFields';
export * from './paymentPagesCheckoutSessionCustomFieldsDropdown';
export * from './paymentPagesCheckoutSessionCustomFieldsDropdown1';
export * from './paymentPagesCheckoutSessionCustomFieldsLabel';
export * from './paymentPagesCheckoutSessionCustomFieldsNumeric';
export * from './paymentPagesCheckoutSessionCustomFieldsNumeric1';
export * from './paymentPagesCheckoutSessionCustomFieldsOption';
export * from './paymentPagesCheckoutSessionCustomFieldsText';
export * from './paymentPagesCheckoutSessionCustomFieldsText1';
export * from './paymentPagesCheckoutSessionCustomText';
export * from './paymentPagesCheckoutSessionCustomTextPosition';
export * from './paymentPagesCheckoutSessionCustomTextShippingAddress';
export * from './paymentPagesCheckoutSessionCustomTextSubmit';
export * from './paymentPagesCheckoutSessionCustomerDetails';
export * from './paymentPagesCheckoutSessionCustomerDetailsAddress';
export * from './paymentPagesCheckoutSessionInvoiceCreation';
export * from './paymentPagesCheckoutSessionInvoiceSettings';
export * from './paymentPagesCheckoutSessionList';
export * from './paymentPagesCheckoutSessionListLineItems';
export * from './paymentPagesCheckoutSessionListLineItems1';
export * from './paymentPagesCheckoutSessionPhoneNumberCollection';
export * from './paymentPagesCheckoutSessionShippingAddressCollection';
export * from './paymentPagesCheckoutSessionShippingCost';
export * from './paymentPagesCheckoutSessionShippingCostShippingRate';
export * from './paymentPagesCheckoutSessionShippingOption';
export * from './paymentPagesCheckoutSessionShippingOptionShippingRate';
export * from './paymentPagesCheckoutSessionTaxId';
export * from './paymentPagesCheckoutSessionTaxIdCollection';
export * from './paymentPagesCheckoutSessionTotalDetails';
export * from './paymentPagesCheckoutSessionTotalDetailsResourceBreakdown';
export * from './paymentSource';
export * from './payout';
export * from './payoutBalanceTransaction';
export * from './payoutDestination';
export * from './payoutFailureBalanceTransaction';
export * from './payoutList';
export * from './payoutOriginalPayout';
export * from './payoutReversedBy';
export * from './period';
export * from './period1';
export * from './person';
export * from './personAddressKana';
export * from './personAddressKanji';
export * from './personFutureRequirements';
export * from './personFutureRequirements1';
export * from './personList';
export * from './personRelationship';
export * from './personRequirements';
export * from './personRequirements1';
export * from './plan';
export * from './planList';
export * from './planProduct';
export * from './planTier';
export * from './planTransformUsage';
export * from './platformEarningList';
export * from './platformTaxFee';
export * from './portalBusinessProfile';
export * from './portalConfigurationList';
export * from './portalCustomerUpdate';
export * from './portalFeatures';
export * from './portalFlowsAfterCompletionHostedConfirmation';
export * from './portalFlowsAfterCompletionRedirect';
export * from './portalFlowsFlow';
export * from './portalFlowsFlowAfterCompletion';
export * from './portalFlowsFlowAfterCompletionHostedConfirmation';
export * from './portalFlowsFlowAfterCompletionRedirect';
export * from './portalFlowsFlowSubscriptionCancel';
export * from './portalFlowsFlowSubscriptionCancel1';
export * from './portalInvoiceList';
export * from './portalLoginPage';
export * from './portalPaymentMethodUpdate';
export * from './portalSubscriptionCancel';
export * from './portalSubscriptionCancellationReason';
export * from './portalSubscriptionPause';
export * from './portalSubscriptionUpdate';
export * from './portalSubscriptionUpdateProduct';
export * from './postCustomersCustomerSourcesId200Response';
export * from './postCustomersRequestAddress';
export * from './postCustomersRequestShipping';
export * from './postFileLinksLinkRequestExpiresAtAnyOf';
export * from './postInvoiceitemsRequestTaxCode';
export * from './price';
export * from './priceList';
export * from './priceProduct';
export * from './priceRecurring';
export * from './priceTier';
export * from './priceTransformQuantity';
export * from './product';
export * from './productDefaultPrice';
export * from './productList';
export * from './productPackageDimensions';
export * from './productTaxCode';
export * from './promotionCode';
export * from './promotionCodeCurrencyOption';
export * from './promotionCodeCustomer';
export * from './promotionCodesResourcePromotionCodeList';
export * from './promotionCodesResourceRestrictions';
export * from './quote';
export * from './quoteApplication';
export * from './quoteCustomer';
export * from './quoteDefaultTaxRatesInner';
export * from './quoteFromQuote';
export * from './quoteInvoice';
export * from './quoteInvoiceSettings';
export * from './quoteSubscription';
export * from './quoteSubscriptionSchedule';
export * from './quoteTestClock';
export * from './quoteTransferData';
export * from './quotesResourceAutomaticTax';
export * from './quotesResourceComputed';
export * from './quotesResourceComputedRecurring';
export * from './quotesResourceFromQuote';
export * from './quotesResourceFromQuoteQuote';
export * from './quotesResourceListLineItems';
export * from './quotesResourceListLineItems1';
export * from './quotesResourceListLineItems2';
export * from './quotesResourceQuoteList';
export * from './quotesResourceRecurring';
export * from './quotesResourceStatusTransitions';
export * from './quotesResourceSubscriptionDataSubscriptionData';
export * from './quotesResourceTotalDetails';
export * from './quotesResourceTotalDetailsResourceBreakdown';
export * from './quotesResourceTransferData';
export * from './quotesResourceUpfront';
export * from './radarEarlyFraudWarning';
export * from './radarEarlyFraudWarningCharge';
export * from './radarEarlyFraudWarningList';
export * from './radarEarlyFraudWarningPaymentIntent';
export * from './radarListListItemList';
export * from './radarListListItemList1';
export * from './radarListListList';
export * from './radarRadarOptions';
export * from './radarReviewList';
export * from './radarReviewResourceLocation';
export * from './radarReviewResourceSession';
export * from './radarValueList';
export * from './radarValueListItem';
export * from './rangeQuerySpecs';
export * from './receivedPaymentMethodDetailsFinancialAccount';
export * from './recurring';
export * from './recurringAdhoc';
export * from './recurringPriceData';
export * from './refund';
export * from './refundCharge';
export * from './refundFailureBalanceTransaction';
export * from './refundList';
export * from './refundList1';
export * from './refundNextAction';
export * from './refundNextActionDisplayDetails';
export * from './refundNextActionDisplayDetails1';
export * from './refundPaymentIntent';
export * from './refundSourceTransferReversal';
export * from './refundTransferReversal';
export * from './reportingReportRun';
export * from './reportingReportRunResult';
export * from './reportingReportType';
export * from './reserveTransaction';
export * from './review';
export * from './reviewCharge';
export * from './reviewIpAddressLocation';
export * from './reviewPaymentIntent';
export * from './reviewSession';
export * from './rule';
export * from './scheduledQueryRun';
export * from './scheduledQueryRunFile';
export * from './schedulesPhaseAutomaticTax';
export * from './scopeParam';
export * from './searchResult';
export * from './searchResult1';
export * from './searchResult2';
export * from './searchResult3';
export * from './searchResult4';
export * from './searchResult5';
export * from './searchResult6';
export * from './secretServiceResourceScope';
export * from './secretServiceResourceSecretList';
export * from './sepaDebitGeneratedFrom';
export * from './sepaDebitGeneratedFromCharge';
export * from './sepaDebitGeneratedFromSetupAttempt';
export * from './setupAttempt';
export * from './setupAttemptApplication';
export * from './setupAttemptCustomer';
export * from './setupAttemptOnBehalfOf';
export * from './setupAttemptPaymentMethod';
export * from './setupAttemptPaymentMethodDetails';
export * from './setupAttemptPaymentMethodDetailsBancontact';
export * from './setupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebit';
export * from './setupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitMandate';
export * from './setupAttemptPaymentMethodDetailsCard';
export * from './setupAttemptPaymentMethodDetailsCardPresent';
export * from './setupAttemptPaymentMethodDetailsCardPresentGeneratedCard';
export * from './setupAttemptPaymentMethodDetailsCardThreeDSecure';
export * from './setupAttemptPaymentMethodDetailsIdeal';
export * from './setupAttemptPaymentMethodDetailsSofort';
export * from './setupAttemptSetupError';
export * from './setupAttemptSetupIntent';
export * from './setupIntent';
export * from './setupIntentApplication';
export * from './setupIntentCustomer';
export * from './setupIntentLastSetupError';
export * from './setupIntentLatestAttempt';
export * from './setupIntentMandate';
export * from './setupIntentNextAction';
export * from './setupIntentNextAction1';
export * from './setupIntentNextActionRedirectToUrl';
export * from './setupIntentNextActionVerifyWithMicrodeposits';
export * from './setupIntentOnBehalfOf';
export * from './setupIntentPaymentMethod';
export * from './setupIntentPaymentMethodOptions';
export * from './setupIntentPaymentMethodOptions1';
export * from './setupIntentPaymentMethodOptionsAcssDebit';
export * from './setupIntentPaymentMethodOptionsBlik';
export * from './setupIntentPaymentMethodOptionsCard';
export * from './setupIntentPaymentMethodOptionsCardMandateOptions';
export * from './setupIntentPaymentMethodOptionsCardMandateOptions1';
export * from './setupIntentPaymentMethodOptionsLink';
export * from './setupIntentPaymentMethodOptionsMandateOptionsAcssDebit';
export * from './setupIntentPaymentMethodOptionsMandateOptionsBlik';
export * from './setupIntentPaymentMethodOptionsSepaDebit';
export * from './setupIntentPaymentMethodOptionsUsBankAccount';
export * from './setupIntentSingleUseMandate';
export * from './setupIntentTypeSpecificPaymentMethodOptionsClient';
export * from './shipping';
export * from './shippingRate';
export * from './shippingRateCurrencyOption';
export * from './shippingRateDeliveryEstimate';
export * from './shippingRateDeliveryEstimate1';
export * from './shippingRateDeliveryEstimateBound';
export * from './shippingRateDeliveryEstimateMaximum';
export * from './shippingRateDeliveryEstimateMinimum';
export * from './shippingRateFixedAmount';
export * from './shippingRateTaxCode';
export * from './shippingResourcesShippingRateList';
export * from './sigmaScheduledQueryRunError';
export * from './sigmaScheduledQueryRunList';
export * from './source';
export * from './sourceCodeVerificationFlow';
export * from './sourceMandateNotification';
export * from './sourceMandateNotificationAcssDebitData';
export * from './sourceMandateNotificationBacsDebitData';
export * from './sourceMandateNotificationSepaDebitData';
export * from './sourceOrder';
export * from './sourceOrderItem';
export * from './sourceOwner';
export * from './sourceOwner1';
export * from './sourceOwnerAddress';
export * from './sourceOwnerVerifiedAddress';
export * from './sourceReceiverFlow';
export * from './sourceRedirectFlow';
export * from './sourceTransaction';
export * from './sourceTransactionAchCreditTransferData';
export * from './sourceTransactionChfCreditTransferData';
export * from './sourceTransactionGbpCreditTransferData';
export * from './sourceTransactionPaperCheckData';
export * from './sourceTransactionSepaCreditTransferData';
export * from './sourceTypeAchCreditTransfer';
export * from './sourceTypeAchDebit';
export * from './sourceTypeAcssDebit';
export * from './sourceTypeAlipay';
export * from './sourceTypeAuBecsDebit';
export * from './sourceTypeBancontact';
export * from './sourceTypeCard';
export * from './sourceTypeCardPresent';
export * from './sourceTypeEps';
export * from './sourceTypeGiropay';
export * from './sourceTypeIdeal';
export * from './sourceTypeKlarna';
export * from './sourceTypeMultibanco';
export * from './sourceTypeP24';
export * from './sourceTypeSepaCreditTransfer';
export * from './sourceTypeSepaDebit';
export * from './sourceTypeSofort';
export * from './sourceTypeThreeDSecure';
export * from './sourceTypeWechat';
export * from './statusTransitionTimestampSpecs';
export * from './statusTransitionTimestampSpecsPostedAt';
export * from './subscription';
export * from './subscriptionApplication';
export * from './subscriptionAutomaticTax';
export * from './subscriptionBillingThresholds';
export * from './subscriptionBillingThresholds1';
export * from './subscriptionCustomer';
export * from './subscriptionDefaultPaymentMethod';
export * from './subscriptionDefaultSource';
export * from './subscriptionDiscount';
export * from './subscriptionItem';
export * from './subscriptionItemBillingThresholds';
export * from './subscriptionItemBillingThresholds1';
export * from './subscriptionItemList';
export * from './subscriptionItemUpdateParams';
export * from './subscriptionItemUpdateParamsBillingThresholds';
export * from './subscriptionItemUpdateParamsTaxRates';
export * from './subscriptionLatestInvoice';
export * from './subscriptionList';
export * from './subscriptionOnBehalfOf';
export * from './subscriptionPauseCollection';
export * from './subscriptionPaymentMethodOptionsCard';
export * from './subscriptionPaymentSettings';
export * from './subscriptionPendingInvoiceItemInterval';
export * from './subscriptionPendingInvoiceItemInterval1';
export * from './subscriptionPendingSetupIntent';
export * from './subscriptionPendingUpdate';
export * from './subscriptionSchedule';
export * from './subscriptionSchedule1';
export * from './subscriptionScheduleAddInvoiceItem';
export * from './subscriptionScheduleAddInvoiceItemPrice';
export * from './subscriptionScheduleApplication';
export * from './subscriptionScheduleConfigurationItem';
export * from './subscriptionScheduleConfigurationItemPlan';
export * from './subscriptionScheduleConfigurationItemPrice';
export * from './subscriptionScheduleCurrentPhase';
export * from './subscriptionScheduleCurrentPhase1';
export * from './subscriptionScheduleCustomer';
export * from './subscriptionSchedulePhaseConfiguration';
export * from './subscriptionSchedulePhaseConfigurationCoupon';
export * from './subscriptionSchedulePhaseConfigurationDefaultPaymentMethod';
export * from './subscriptionSchedulePhaseConfigurationInvoiceSettings';
export * from './subscriptionSchedulePhaseConfigurationOnBehalfOf';
export * from './subscriptionSchedulePhaseConfigurationTransferData';
export * from './subscriptionScheduleSubscription';
export * from './subscriptionScheduleTestClock';
export * from './subscriptionSchedulesResourceDefaultSettings';
export * from './subscriptionSchedulesResourceDefaultSettingsAutomaticTax';
export * from './subscriptionSchedulesResourceDefaultSettingsDefaultPaymentMethod';
export * from './subscriptionSchedulesResourceDefaultSettingsInvoiceSettings';
export * from './subscriptionSchedulesResourceScheduleList';
export * from './subscriptionTestClock';
export * from './subscriptionTransferData';
export * from './subscriptionTransferData1';
export * from './subscriptionTrialSettings';
export * from './subscriptionsItemsSubscriptionItemList';
export * from './subscriptionsResourcePauseCollection';
export * from './subscriptionsResourcePaymentMethodOptions';
export * from './subscriptionsResourcePaymentMethodOptionsAcssDebit';
export * from './subscriptionsResourcePaymentMethodOptionsBancontact';
export * from './subscriptionsResourcePaymentMethodOptionsCard';
export * from './subscriptionsResourcePaymentMethodOptionsCustomerBalance';
export * from './subscriptionsResourcePaymentMethodOptionsKonbini';
export * from './subscriptionsResourcePaymentMethodOptionsUsBankAccount';
export * from './subscriptionsResourcePaymentSettings';
export * from './subscriptionsResourcePaymentSettingsPaymentMethodOptions';
export * from './subscriptionsResourcePendingUpdate';
export * from './subscriptionsSubscriptionList';
export * from './subscriptionsTrialsResourceEndBehavior';
export * from './subscriptionsTrialsResourceTrialSettings';
export * from './taxCode';
export * from './taxDeductedAtSource';
export * from './taxIDsList';
export * from './taxIDsList1';
export * from './taxId';
export * from './taxIdCustomer';
export * from './taxIdVerification';
export * from './taxIdVerification1';
export * from './taxParam';
export * from './taxProductResourceTaxCodeList';
export * from './taxRate';
export * from './taxRatesList';
export * from './terminalConfiguration';
export * from './terminalConfigurationConfigurationList';
export * from './terminalConfigurationConfigurationResourceCurrencySpecificConfig';
export * from './terminalConfigurationConfigurationResourceDeviceTypeSpecificConfig';
export * from './terminalConfigurationConfigurationResourceDeviceTypeSpecificConfigSplashscreen';
export * from './terminalConfigurationConfigurationResourceTipping';
export * from './terminalConnectionToken';
export * from './terminalLocation';
export * from './terminalLocationLocationList';
export * from './terminalReader';
export * from './terminalReaderAction';
export * from './terminalReaderLocation';
export * from './terminalReaderReaderResourceCart';
export * from './terminalReaderReaderResourceLineItem';
export * from './terminalReaderReaderResourceProcessConfig';
export * from './terminalReaderReaderResourceProcessPaymentIntentAction';
export * from './terminalReaderReaderResourceProcessPaymentIntentActionPaymentIntent';
export * from './terminalReaderReaderResourceProcessSetupIntentAction';
export * from './terminalReaderReaderResourceProcessSetupIntentActionSetupIntent';
export * from './terminalReaderReaderResourceReaderAction';
export * from './terminalReaderReaderResourceRefundPaymentAction';
export * from './terminalReaderReaderResourceRefundPaymentActionCharge';
export * from './terminalReaderReaderResourceRefundPaymentActionPaymentIntent';
export * from './terminalReaderReaderResourceRefundPaymentActionRefund';
export * from './terminalReaderReaderResourceSetReaderDisplayAction';
export * from './terminalReaderReaderResourceSetReaderDisplayActionCart';
export * from './terminalReaderReaderResourceTippingConfig';
export * from './terminalReaderRetrieveReader';
export * from './testHelpersTestClock';
export * from './threeDSecureDetails';
export * from './threeDSecureUsage';
export * from './token';
export * from './topup';
export * from './topupBalanceTransaction';
export * from './topupList';
export * from './topupSource';
export * from './transfer';
export * from './transferBalanceTransaction';
export * from './transferData';
export * from './transferDataDestination';
export * from './transferDestination';
export * from './transferDestinationPayment';
export * from './transferList';
export * from './transferReversal';
export * from './transferReversalDestinationPaymentRefund';
export * from './transferReversalList';
export * from './transferReversalList1';
export * from './transferReversalSourceRefund';
export * from './transferReversalTransfer';
export * from './transferSchedule';
export * from './transferSourceTransaction';
export * from './transformQuantity';
export * from './transformUsage';
export * from './treasuryCreditReversal';
export * from './treasuryCreditReversalTransaction';
export * from './treasuryDebitReversal';
export * from './treasuryDebitReversalLinkedFlows';
export * from './treasuryFinancialAccount';
export * from './treasuryFinancialAccountFeatures';
export * from './treasuryFinancialAccountPlatformRestrictions';
export * from './treasuryFinancialAccountsResourceAbaRecord';
export * from './treasuryFinancialAccountsResourceAchToggleSettings';
export * from './treasuryFinancialAccountsResourceBalance';
export * from './treasuryFinancialAccountsResourceClosedStatusDetails';
export * from './treasuryFinancialAccountsResourceFinancialAccountList';
export * from './treasuryFinancialAccountsResourceFinancialAddress';
export * from './treasuryFinancialAccountsResourceFinancialAddressesFeatures';
export * from './treasuryFinancialAccountsResourceInboundTransfers';
export * from './treasuryFinancialAccountsResourceOutboundPayments';
export * from './treasuryFinancialAccountsResourceOutboundTransfers';
export * from './treasuryFinancialAccountsResourcePlatformRestrictions';
export * from './treasuryFinancialAccountsResourceStatusDetails';
export * from './treasuryFinancialAccountsResourceStatusDetailsClosed';
export * from './treasuryFinancialAccountsResourceToggleSettings';
export * from './treasuryFinancialAccountsResourceTogglesSettingStatusDetails';
export * from './treasuryInboundTransfer';
export * from './treasuryInboundTransferFailureDetails';
export * from './treasuryInboundTransferOriginPaymentMethodDetails';
export * from './treasuryInboundTransfersResourceFailureDetails';
export * from './treasuryInboundTransfersResourceInboundTransferList';
export * from './treasuryInboundTransfersResourceInboundTransferResourceLinkedFlows';
export * from './treasuryInboundTransfersResourceInboundTransferResourceStatusTransitions';
export * from './treasuryOutboundPayment';
export * from './treasuryOutboundPaymentDestinationPaymentMethodDetails';
export * from './treasuryOutboundPaymentEndUserDetails';
export * from './treasuryOutboundPaymentReturnedDetails';
export * from './treasuryOutboundPaymentTransaction';
export * from './treasuryOutboundPaymentsResourceOutboundPaymentList';
export * from './treasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails';
export * from './treasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions';
export * from './treasuryOutboundPaymentsResourceReturnedStatus';
export * from './treasuryOutboundTransfer';
export * from './treasuryOutboundTransferReturnedDetails';
export * from './treasuryOutboundTransfersResourceOutboundTransferList';
export * from './treasuryOutboundTransfersResourceReturnedDetails';
export * from './treasuryOutboundTransfersResourceStatusTransitions';
export * from './treasuryReceivedCredit';
export * from './treasuryReceivedCreditReversalDetails';
export * from './treasuryReceivedCreditsResourceCreditReversalList';
export * from './treasuryReceivedCreditsResourceLinkedFlows';
export * from './treasuryReceivedCreditsResourceLinkedFlowsSourceFlowDetails';
export * from './treasuryReceivedCreditsResourceReceivedCreditList';
export * from './treasuryReceivedCreditsResourceReversalDetails';
export * from './treasuryReceivedCreditsResourceSourceFlowsDetails';
export * from './treasuryReceivedCreditsResourceStatusTransitions';
export * from './treasuryReceivedDebit';
export * from './treasuryReceivedDebitReversalDetails';
export * from './treasuryReceivedDebitsResourceDebitReversalLinkedFlows';
export * from './treasuryReceivedDebitsResourceDebitReversalList';
export * from './treasuryReceivedDebitsResourceLinkedFlows';
export * from './treasuryReceivedDebitsResourceReceivedDebitList';
export * from './treasuryReceivedDebitsResourceReversalDetails';
export * from './treasuryReceivedDebitsResourceStatusTransitions';
export * from './treasurySharedResourceBillingDetails';
export * from './treasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails';
export * from './treasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount';
export * from './treasuryTransaction';
export * from './treasuryTransactionEntry';
export * from './treasuryTransactionEntryFlowDetails';
export * from './treasuryTransactionFlowDetails';
export * from './treasuryTransactionsResourceAbstractTransactionResourceStatusTransitions';
export * from './treasuryTransactionsResourceBalanceImpact';
export * from './treasuryTransactionsResourceFlowDetails';
export * from './treasuryTransactionsResourceTransactionEntryList';
export * from './treasuryTransactionsResourceTransactionEntryList1';
export * from './treasuryTransactionsResourceTransactionList';
export * from './usBankAccountNetworks';
export * from './usageEventsResourceUsageRecordSummaryList';
export * from './usageRecord';
export * from './usageRecordSummary';
export * from './verificationSessionRedaction';
export * from './webhookEndpoint';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { APIMethodRefundList } from './aPIMethodRefundList';
import { Account } from './account';
import { AccountBacsDebitPaymentsSettings } from './accountBacsDebitPaymentsSettings';
import { AccountBrandingSettings } from './accountBrandingSettings';
import { AccountBrandingSettingsIcon } from './accountBrandingSettingsIcon';
import { AccountBrandingSettingsLogo } from './accountBrandingSettingsLogo';
import { AccountBusinessProfile } from './accountBusinessProfile';
import { AccountBusinessProfile1 } from './accountBusinessProfile1';
import { AccountBusinessProfileSupportAddress } from './accountBusinessProfileSupportAddress';
import { AccountCapabilities } from './accountCapabilities';
import { AccountCapabilityFutureRequirements } from './accountCapabilityFutureRequirements';
import { AccountCapabilityRequirements } from './accountCapabilityRequirements';
import { AccountCardIssuingSettings } from './accountCardIssuingSettings';
import { AccountCardPaymentsSettings } from './accountCardPaymentsSettings';
import { AccountDashboardSettings } from './accountDashboardSettings';
import { AccountDeclineChargeOn } from './accountDeclineChargeOn';
import { AccountFutureRequirements } from './accountFutureRequirements';
import { AccountLink } from './accountLink';
import { AccountList } from './accountList';
import { AccountPaymentsSettings } from './accountPaymentsSettings';
import { AccountPayoutSettings } from './accountPayoutSettings';
import { AccountRequirements } from './accountRequirements';
import { AccountRequirementsAlternative } from './accountRequirementsAlternative';
import { AccountRequirementsError } from './accountRequirementsError';
import { AccountSepaDebitPaymentsSettings } from './accountSepaDebitPaymentsSettings';
import { AccountSettings } from './accountSettings';
import { AccountSettings1 } from './accountSettings1';
import { AccountTermsOfService } from './accountTermsOfService';
import { AccountTosAcceptance } from './accountTosAcceptance';
import { AccountTreasurySettings } from './accountTreasurySettings';
import { AccountUnificationAccountController } from './accountUnificationAccountController';
import { AccountholderParams } from './accountholderParams';
import { Address } from './address';
import { AllPeopleRelationshipSpecs } from './allPeopleRelationshipSpecs';
import { AllPricesRecurringParams } from './allPricesRecurringParams';
import { AlternateStatementDescriptors } from './alternateStatementDescriptors';
import { ApiErrors } from './apiErrors';
import { ApmsSourcesSourceList } from './apmsSourcesSourceList';
import { ApmsSourcesSourceList1 } from './apmsSourcesSourceList1';
import { ApmsSourcesSourceTransactionList } from './apmsSourcesSourceTransactionList';
import { ApplePayDomain } from './applePayDomain';
import { ApplePayDomainList } from './applePayDomainList';
import { Application } from './application';
import { ApplicationFee } from './applicationFee';
import { ApplicationFeeAccount } from './applicationFeeAccount';
import { ApplicationFeeApplication } from './applicationFeeApplication';
import { ApplicationFeeBalanceTransaction } from './applicationFeeBalanceTransaction';
import { ApplicationFeeCharge } from './applicationFeeCharge';
import { ApplicationFeeOriginatingTransaction } from './applicationFeeOriginatingTransaction';
import { AppsSecret } from './appsSecret';
import { AutomaticTax } from './automaticTax';
import { AutomaticTaxParam1 } from './automaticTaxParam1';
import { Balance } from './balance';
import { BalanceAmount } from './balanceAmount';
import { BalanceAmountBySourceType } from './balanceAmountBySourceType';
import { BalanceDetail } from './balanceDetail';
import { BalanceTransaction } from './balanceTransaction';
import { BalanceTransactionSource } from './balanceTransactionSource';
import { BalanceTransactionSource1 } from './balanceTransactionSource1';
import { BalanceTransactionsList } from './balanceTransactionsList';
import { BankAccount } from './bankAccount';
import { BankAccountAccount } from './bankAccountAccount';
import { BankAccountCustomer } from './bankAccountCustomer';
import { BankConnectionsResourceAccountholder } from './bankConnectionsResourceAccountholder';
import { BankConnectionsResourceAccountholderAccount } from './bankConnectionsResourceAccountholderAccount';
import { BankConnectionsResourceAccountholderCustomer } from './bankConnectionsResourceAccountholderCustomer';
import { BankConnectionsResourceBalance } from './bankConnectionsResourceBalance';
import { BankConnectionsResourceBalanceApiResourceCashBalance } from './bankConnectionsResourceBalanceApiResourceCashBalance';
import { BankConnectionsResourceBalanceApiResourceCreditBalance } from './bankConnectionsResourceBalanceApiResourceCreditBalance';
import { BankConnectionsResourceBalanceRefresh } from './bankConnectionsResourceBalanceRefresh';
import { BankConnectionsResourceLinkAccountSessionFilters } from './bankConnectionsResourceLinkAccountSessionFilters';
import { BankConnectionsResourceLinkedAccountList } from './bankConnectionsResourceLinkedAccountList';
import { BankConnectionsResourceLinkedAccountList1 } from './bankConnectionsResourceLinkedAccountList1';
import { BankConnectionsResourceOwnerList } from './bankConnectionsResourceOwnerList';
import { BankConnectionsResourceOwnerList1 } from './bankConnectionsResourceOwnerList1';
import { BankConnectionsResourceOwnershipRefresh } from './bankConnectionsResourceOwnershipRefresh';
import { BillingClocksResourceBillingClockList } from './billingClocksResourceBillingClockList';
import { BillingDetails } from './billingDetails';
import { BillingDetailsAddress1 } from './billingDetailsAddress1';
import { BillingPortalConfiguration } from './billingPortalConfiguration';
import { BillingPortalConfigurationApplication } from './billingPortalConfigurationApplication';
import { BillingPortalSession } from './billingPortalSession';
import { BillingPortalSessionConfiguration } from './billingPortalSessionConfiguration';
import { BillingPortalSessionFlow } from './billingPortalSessionFlow';
import { BusinessProfileSpecsSupportUrlAnyOf } from './businessProfileSpecsSupportUrlAnyOf';
import { Capability } from './capability';
import { CapabilityAccount } from './capabilityAccount';
import { Card } from './card';
import { CardAccount } from './cardAccount';
import { CardCustomer } from './cardCustomer';
import { CardIssuingAccountTermsOfService } from './cardIssuingAccountTermsOfService';
import { CashBalance } from './cashBalance';
import { Charge } from './charge';
import { ChargeApplication } from './chargeApplication';
import { ChargeApplicationFee } from './chargeApplicationFee';
import { ChargeBalanceTransaction } from './chargeBalanceTransaction';
import { ChargeCustomer } from './chargeCustomer';
import { ChargeDestination } from './chargeDestination';
import { ChargeDispute } from './chargeDispute';
import { ChargeFailureBalanceTransaction } from './chargeFailureBalanceTransaction';
import { ChargeFraudDetails } from './chargeFraudDetails';
import { ChargeFraudDetails1 } from './chargeFraudDetails1';
import { ChargeInvoice } from './chargeInvoice';
import { ChargeList } from './chargeList';
import { ChargeOnBehalfOf } from './chargeOnBehalfOf';
import { ChargeOutcome } from './chargeOutcome';
import { ChargeOutcome1 } from './chargeOutcome1';
import { ChargeOutcomeRule } from './chargeOutcomeRule';
import { ChargePaymentIntent } from './chargePaymentIntent';
import { ChargePaymentMethodDetails } from './chargePaymentMethodDetails';
import { ChargeReview } from './chargeReview';
import { ChargeShipping } from './chargeShipping';
import { ChargeSource } from './chargeSource';
import { ChargeSourceTransfer } from './chargeSourceTransfer';
import { ChargeTransfer } from './chargeTransfer';
import { ChargeTransferData } from './chargeTransferData';
import { ChargeTransferData1 } from './chargeTransferData1';
import { ChargeTransferDataDestination } from './chargeTransferDataDestination';
import { CheckoutAcssDebitMandateOptions } from './checkoutAcssDebitMandateOptions';
import { CheckoutAcssDebitPaymentMethodOptions } from './checkoutAcssDebitPaymentMethodOptions';
import { CheckoutAffirmPaymentMethodOptions } from './checkoutAffirmPaymentMethodOptions';
import { CheckoutAfterpayClearpayPaymentMethodOptions } from './checkoutAfterpayClearpayPaymentMethodOptions';
import { CheckoutAlipayPaymentMethodOptions } from './checkoutAlipayPaymentMethodOptions';
import { CheckoutAuBecsDebitPaymentMethodOptions } from './checkoutAuBecsDebitPaymentMethodOptions';
import { CheckoutBacsDebitPaymentMethodOptions } from './checkoutBacsDebitPaymentMethodOptions';
import { CheckoutBancontactPaymentMethodOptions } from './checkoutBancontactPaymentMethodOptions';
import { CheckoutBoletoPaymentMethodOptions } from './checkoutBoletoPaymentMethodOptions';
import { CheckoutCardInstallmentsOptions } from './checkoutCardInstallmentsOptions';
import { CheckoutCardPaymentMethodOptions } from './checkoutCardPaymentMethodOptions';
import { CheckoutCustomerBalanceBankTransferPaymentMethodOptions } from './checkoutCustomerBalanceBankTransferPaymentMethodOptions';
import { CheckoutCustomerBalancePaymentMethodOptions } from './checkoutCustomerBalancePaymentMethodOptions';
import { CheckoutEpsPaymentMethodOptions } from './checkoutEpsPaymentMethodOptions';
import { CheckoutFpxPaymentMethodOptions } from './checkoutFpxPaymentMethodOptions';
import { CheckoutGiropayPaymentMethodOptions } from './checkoutGiropayPaymentMethodOptions';
import { CheckoutGrabPayPaymentMethodOptions } from './checkoutGrabPayPaymentMethodOptions';
import { CheckoutIdealPaymentMethodOptions } from './checkoutIdealPaymentMethodOptions';
import { CheckoutKlarnaPaymentMethodOptions } from './checkoutKlarnaPaymentMethodOptions';
import { CheckoutKonbiniPaymentMethodOptions } from './checkoutKonbiniPaymentMethodOptions';
import { CheckoutOxxoPaymentMethodOptions } from './checkoutOxxoPaymentMethodOptions';
import { CheckoutP24PaymentMethodOptions } from './checkoutP24PaymentMethodOptions';
import { CheckoutPaynowPaymentMethodOptions } from './checkoutPaynowPaymentMethodOptions';
import { CheckoutPixPaymentMethodOptions } from './checkoutPixPaymentMethodOptions';
import { CheckoutSepaDebitPaymentMethodOptions } from './checkoutSepaDebitPaymentMethodOptions';
import { CheckoutSession } from './checkoutSession';
import { CheckoutSessionAfterExpiration } from './checkoutSessionAfterExpiration';
import { CheckoutSessionConsent } from './checkoutSessionConsent';
import { CheckoutSessionConsentCollection } from './checkoutSessionConsentCollection';
import { CheckoutSessionCustomer } from './checkoutSessionCustomer';
import { CheckoutSessionCustomerDetails } from './checkoutSessionCustomerDetails';
import { CheckoutSessionInvoice } from './checkoutSessionInvoice';
import { CheckoutSessionInvoiceCreation } from './checkoutSessionInvoiceCreation';
import { CheckoutSessionPaymentIntent } from './checkoutSessionPaymentIntent';
import { CheckoutSessionPaymentLink } from './checkoutSessionPaymentLink';
import { CheckoutSessionPaymentMethodOptions } from './checkoutSessionPaymentMethodOptions';
import { CheckoutSessionPaymentMethodOptions1 } from './checkoutSessionPaymentMethodOptions1';
import { CheckoutSessionSetupIntent } from './checkoutSessionSetupIntent';
import { CheckoutSessionShippingAddressCollection } from './checkoutSessionShippingAddressCollection';
import { CheckoutSessionShippingCost } from './checkoutSessionShippingCost';
import { CheckoutSessionShippingDetails } from './checkoutSessionShippingDetails';
import { CheckoutSessionSubscription } from './checkoutSessionSubscription';
import { CheckoutSessionTotalDetails } from './checkoutSessionTotalDetails';
import { CheckoutSofortPaymentMethodOptions } from './checkoutSofortPaymentMethodOptions';
import { CheckoutUsBankAccountPaymentMethodOptions } from './checkoutUsBankAccountPaymentMethodOptions';
import { ConnectCollectionTransfer } from './connectCollectionTransfer';
import { ConnectCollectionTransferDestination } from './connectCollectionTransferDestination';
import { CountrySpec } from './countrySpec';
import { CountrySpecList } from './countrySpecList';
import { CountrySpecVerificationFieldDetails } from './countrySpecVerificationFieldDetails';
import { CountrySpecVerificationFields } from './countrySpecVerificationFields';
import { Coupon } from './coupon';
import { CouponAppliesTo } from './couponAppliesTo';
import { CouponCurrencyOption } from './couponCurrencyOption';
import { CouponsResourceCouponList } from './couponsResourceCouponList';
import { CreditNote } from './creditNote';
import { CreditNoteCustomer } from './creditNoteCustomer';
import { CreditNoteCustomerBalanceTransaction } from './creditNoteCustomerBalanceTransaction';
import { CreditNoteInvoice } from './creditNoteInvoice';
import { CreditNoteLineItem } from './creditNoteLineItem';
import { CreditNoteLineItemParams } from './creditNoteLineItemParams';
import { CreditNoteLinesList } from './creditNoteLinesList';
import { CreditNoteLinesList1 } from './creditNoteLinesList1';
import { CreditNoteRefund } from './creditNoteRefund';
import { CreditNoteShippingCost1 } from './creditNoteShippingCost1';
import { CreditNoteShippingCost2 } from './creditNoteShippingCost2';
import { CreditNoteTaxAmount } from './creditNoteTaxAmount';
import { CreditNoteTaxAmountTaxRate } from './creditNoteTaxAmountTaxRate';
import { CreditNotesList } from './creditNotesList';
import { CurrencyOption } from './currencyOption';
import { CurrencyOptionCustomUnitAmount } from './currencyOptionCustomUnitAmount';
import { CustomUnitAmount } from './customUnitAmount';
import { Customer } from './customer';
import { CustomerAcceptance } from './customerAcceptance';
import { CustomerAddress } from './customerAddress';
import { CustomerBalanceCustomerBalanceSettings } from './customerBalanceCustomerBalanceSettings';
import { CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction } from './customerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction';
import { CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionPaymentIntent } from './customerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionPaymentIntent';
import { CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction } from './customerBalanceResourceCashBalanceTransactionResourceFundedTransaction';
import { CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer } from './customerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer';
import { CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer } from './customerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer';
import { CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction } from './customerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction';
import { CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionRefund } from './customerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionRefund';
import { CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction } from './customerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction';
import { CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionPaymentIntent } from './customerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionPaymentIntent';
import { CustomerBalanceTransaction } from './customerBalanceTransaction';
import { CustomerBalanceTransactionCreditNote } from './customerBalanceTransactionCreditNote';
import { CustomerBalanceTransactionCustomer } from './customerBalanceTransactionCustomer';
import { CustomerBalanceTransactionInvoice } from './customerBalanceTransactionInvoice';
import { CustomerBalanceTransactionList } from './customerBalanceTransactionList';
import { CustomerCashBalance } from './customerCashBalance';
import { CustomerCashBalanceTransaction } from './customerCashBalanceTransaction';
import { CustomerCashBalanceTransactionCustomer } from './customerCashBalanceTransactionCustomer';
import { CustomerCashBalanceTransactionList } from './customerCashBalanceTransactionList';
import { CustomerDefaultSource } from './customerDefaultSource';
import { CustomerDetailsParam } from './customerDetailsParam';
import { CustomerDetailsParams } from './customerDetailsParams';
import { CustomerDiscount } from './customerDiscount';
import { CustomerPaymentMethodResourceList } from './customerPaymentMethodResourceList';
import { CustomerResourceCustomerList } from './customerResourceCustomerList';
import { CustomerShipping1 } from './customerShipping1';
import { CustomerTax } from './customerTax';
import { CustomerTaxLocation } from './customerTaxLocation';
import { CustomerTaxLocation1 } from './customerTaxLocation1';
import { CustomerTestClock } from './customerTestClock';
import { DataParams } from './dataParams';
import { DeleteCustomersCustomerSourcesId200Response } from './deleteCustomersCustomerSourcesId200Response';
import { DeletedAccount } from './deletedAccount';
import { DeletedApplePayDomain } from './deletedApplePayDomain';
import { DeletedApplication } from './deletedApplication';
import { DeletedBankAccount } from './deletedBankAccount';
import { DeletedCard } from './deletedCard';
import { DeletedCoupon } from './deletedCoupon';
import { DeletedCustomer } from './deletedCustomer';
import { DeletedDiscount } from './deletedDiscount';
import { DeletedDiscountCustomer } from './deletedDiscountCustomer';
import { DeletedDiscountPromotionCode } from './deletedDiscountPromotionCode';
import { DeletedExternalAccount } from './deletedExternalAccount';
import { DeletedInvoice } from './deletedInvoice';
import { DeletedInvoiceitem } from './deletedInvoiceitem';
import { DeletedPaymentSource } from './deletedPaymentSource';
import { DeletedPerson } from './deletedPerson';
import { DeletedPlan } from './deletedPlan';
import { DeletedPrice } from './deletedPrice';
import { DeletedProduct } from './deletedProduct';
import { DeletedRadarValueList } from './deletedRadarValueList';
import { DeletedRadarValueListItem } from './deletedRadarValueListItem';
import { DeletedSubscriptionItem } from './deletedSubscriptionItem';
import { DeletedTaxId } from './deletedTaxId';
import { DeletedTerminalConfiguration } from './deletedTerminalConfiguration';
import { DeletedTerminalLocation } from './deletedTerminalLocation';
import { DeletedTerminalReader } from './deletedTerminalReader';
import { DeletedTestHelpersTestClock } from './deletedTestHelpersTestClock';
import { DeletedWebhookEndpoint } from './deletedWebhookEndpoint';
import { Discount } from './discount';
import { DiscountsDataParam } from './discountsDataParam';
import { DiscountsResourceDiscountAmount } from './discountsResourceDiscountAmount';
import { DiscountsResourceDiscountAmountDiscount } from './discountsResourceDiscountAmountDiscount';
import { Dispute } from './dispute';
import { DisputeCharge } from './disputeCharge';
import { DisputeEvidence } from './disputeEvidence';
import { DisputeEvidenceCancellationPolicy } from './disputeEvidenceCancellationPolicy';
import { DisputeEvidenceCustomerCommunication } from './disputeEvidenceCustomerCommunication';
import { DisputeEvidenceCustomerSignature } from './disputeEvidenceCustomerSignature';
import { DisputeEvidenceDetails } from './disputeEvidenceDetails';
import { DisputeEvidenceDuplicateChargeDocumentation } from './disputeEvidenceDuplicateChargeDocumentation';
import { DisputeEvidenceReceipt } from './disputeEvidenceReceipt';
import { DisputeEvidenceRefundPolicy } from './disputeEvidenceRefundPolicy';
import { DisputeEvidenceServiceDocumentation } from './disputeEvidenceServiceDocumentation';
import { DisputeEvidenceShippingDocumentation } from './disputeEvidenceShippingDocumentation';
import { DisputeEvidenceUncategorizedFile } from './disputeEvidenceUncategorizedFile';
import { DisputeList } from './disputeList';
import { DisputePaymentIntent } from './disputePaymentIntent';
import { EmailSent } from './emailSent';
import { EphemeralKey } from './ephemeralKey';
import { Event } from './event';
import { EventRequest } from './eventRequest';
import { ExchangeRate } from './exchangeRate';
import { ExchangeRateList } from './exchangeRateList';
import { ExternalAccount } from './externalAccount';
import { ExternalAccountList } from './externalAccountList';
import { ExternalAccountList1 } from './externalAccountList1';
import { Fee } from './fee';
import { FeeRefund } from './feeRefund';
import { FeeRefundBalanceTransaction } from './feeRefundBalanceTransaction';
import { FeeRefundFee } from './feeRefundFee';
import { FeeRefundList } from './feeRefundList';
import { FeeRefundList1 } from './feeRefundList1';
import { FileFileLinkList } from './fileFileLinkList';
import { FileFileLinkList1 } from './fileFileLinkList1';
import { FileFileList } from './fileFileList';
import { FileLink } from './fileLink';
import { FileLinkFile } from './fileLinkFile';
import { FinancialConnectionsAccount } from './financialConnectionsAccount';
import { FinancialConnectionsAccountAccountHolder } from './financialConnectionsAccountAccountHolder';
import { FinancialConnectionsAccountBalance } from './financialConnectionsAccountBalance';
import { FinancialConnectionsAccountBalanceRefresh } from './financialConnectionsAccountBalanceRefresh';
import { FinancialConnectionsAccountOwner } from './financialConnectionsAccountOwner';
import { FinancialConnectionsAccountOwnership } from './financialConnectionsAccountOwnership';
import { FinancialConnectionsAccountOwnershipRefresh } from './financialConnectionsAccountOwnershipRefresh';
import { FinancialConnectionsSession } from './financialConnectionsSession';
import { FinancialConnectionsSessionAccountHolder } from './financialConnectionsSessionAccountHolder';
import { FinancialReportingFinanceReportRunList } from './financialReportingFinanceReportRunList';
import { FinancialReportingFinanceReportRunRunParameters } from './financialReportingFinanceReportRunRunParameters';
import { FinancialReportingFinanceReportTypeList } from './financialReportingFinanceReportTypeList';
import { FundingInstructions } from './fundingInstructions';
import { FundingInstructionsBankTransfer } from './fundingInstructionsBankTransfer';
import { FundingInstructionsBankTransferFinancialAddress } from './fundingInstructionsBankTransferFinancialAddress';
import { FundingInstructionsBankTransferIbanRecord } from './fundingInstructionsBankTransferIbanRecord';
import { FundingInstructionsBankTransferSortCodeRecord } from './fundingInstructionsBankTransferSortCodeRecord';
import { FundingInstructionsBankTransferSpeiRecord } from './fundingInstructionsBankTransferSpeiRecord';
import { FundingInstructionsBankTransferZenginRecord } from './fundingInstructionsBankTransferZenginRecord';
import { GelatoDataDocumentReportDateOfBirth } from './gelatoDataDocumentReportDateOfBirth';
import { GelatoDataDocumentReportExpirationDate } from './gelatoDataDocumentReportExpirationDate';
import { GelatoDataDocumentReportIssuedDate } from './gelatoDataDocumentReportIssuedDate';
import { GelatoDataIdNumberReportDate } from './gelatoDataIdNumberReportDate';
import { GelatoDataVerifiedOutputsDate } from './gelatoDataVerifiedOutputsDate';
import { GelatoDocumentReport } from './gelatoDocumentReport';
import { GelatoDocumentReportAddress } from './gelatoDocumentReportAddress';
import { GelatoDocumentReportDob } from './gelatoDocumentReportDob';
import { GelatoDocumentReportError } from './gelatoDocumentReportError';
import { GelatoDocumentReportError1 } from './gelatoDocumentReportError1';
import { GelatoDocumentReportExpirationDate } from './gelatoDocumentReportExpirationDate';
import { GelatoDocumentReportIssuedDate } from './gelatoDocumentReportIssuedDate';
import { GelatoIdNumberReport } from './gelatoIdNumberReport';
import { GelatoIdNumberReportDob } from './gelatoIdNumberReportDob';
import { GelatoIdNumberReportError } from './gelatoIdNumberReportError';
import { GelatoIdNumberReportError1 } from './gelatoIdNumberReportError1';
import { GelatoReportDocumentOptions } from './gelatoReportDocumentOptions';
import { GelatoSelfieReport } from './gelatoSelfieReport';
import { GelatoSelfieReportError } from './gelatoSelfieReportError';
import { GelatoSelfieReportError1 } from './gelatoSelfieReportError1';
import { GelatoSessionDocumentOptions } from './gelatoSessionDocumentOptions';
import { GelatoSessionLastError } from './gelatoSessionLastError';
import { GelatoVerificationReportList } from './gelatoVerificationReportList';
import { GelatoVerificationReportOptions } from './gelatoVerificationReportOptions';
import { GelatoVerificationSessionList } from './gelatoVerificationSessionList';
import { GelatoVerificationSessionOptions } from './gelatoVerificationSessionOptions';
import { GelatoVerifiedOutputs } from './gelatoVerifiedOutputs';
import { GelatoVerifiedOutputsAddress } from './gelatoVerifiedOutputsAddress';
import { GelatoVerifiedOutputsDob } from './gelatoVerifiedOutputsDob';
import { GetAccountsCreatedParameter } from './getAccountsCreatedParameter';
import { GetCustomersCustomer200Response } from './getCustomersCustomer200Response';
import { GetInvoicesUpcomingDiscountsParameter } from './getInvoicesUpcomingDiscountsParameter';
import { GetInvoicesUpcomingSubscriptionBillingCycleAnchorParameter } from './getInvoicesUpcomingSubscriptionBillingCycleAnchorParameter';
import { GetInvoicesUpcomingSubscriptionBillingCycleAnchorParameterAnyOf } from './getInvoicesUpcomingSubscriptionBillingCycleAnchorParameterAnyOf';
import { GetInvoicesUpcomingSubscriptionCancelAtParameter } from './getInvoicesUpcomingSubscriptionCancelAtParameter';
import { GetInvoicesUpcomingSubscriptionDefaultTaxRatesParameter } from './getInvoicesUpcomingSubscriptionDefaultTaxRatesParameter';
import { GetInvoicesUpcomingSubscriptionTrialEndParameter } from './getInvoicesUpcomingSubscriptionTrialEndParameter';
import { GetTerminalConfigurationsConfiguration200Response } from './getTerminalConfigurationsConfiguration200Response';
import { GetTerminalLocationsLocation200Response } from './getTerminalLocationsLocation200Response';
import { GetTerminalReadersReader200Response } from './getTerminalReadersReader200Response';
import { IdentityVerificationReport } from './identityVerificationReport';
import { IdentityVerificationSession } from './identityVerificationSession';
import { IdentityVerificationSessionLastError } from './identityVerificationSessionLastError';
import { IdentityVerificationSessionLastVerificationReport } from './identityVerificationSessionLastVerificationReport';
import { IdentityVerificationSessionRedaction } from './identityVerificationSessionRedaction';
import { IdentityVerificationSessionVerifiedOutputs } from './identityVerificationSessionVerifiedOutputs';
import { InboundTransfers } from './inboundTransfers';
import { InboundTransfersPaymentMethodDetailsUsBankAccount } from './inboundTransfersPaymentMethodDetailsUsBankAccount';
import { IndividualSpecsMetadata } from './individualSpecsMetadata';
import { Invoice } from './invoice';
import { InvoiceAccountTaxIdsInner } from './invoiceAccountTaxIdsInner';
import { InvoiceApplication } from './invoiceApplication';
import { InvoiceCharge } from './invoiceCharge';
import { InvoiceCustomer } from './invoiceCustomer';
import { InvoiceCustomerAddress } from './invoiceCustomerAddress';
import { InvoiceCustomerShipping } from './invoiceCustomerShipping';
import { InvoiceDefaultPaymentMethod } from './invoiceDefaultPaymentMethod';
import { InvoiceDefaultSource } from './invoiceDefaultSource';
import { InvoiceDiscount } from './invoiceDiscount';
import { InvoiceDiscountsInner } from './invoiceDiscountsInner';
import { InvoiceFromInvoice } from './invoiceFromInvoice';
import { InvoiceInstallmentsCard } from './invoiceInstallmentsCard';
import { InvoiceItemPreviewParams } from './invoiceItemPreviewParams';
import { InvoiceItemPreviewParamsDiscounts } from './invoiceItemPreviewParamsDiscounts';
import { InvoiceItemPreviewParamsTaxRates } from './invoiceItemPreviewParamsTaxRates';
import { InvoiceItemThresholdReason } from './invoiceItemThresholdReason';
import { InvoiceLastFinalizationError } from './invoiceLastFinalizationError';
import { InvoiceLatestRevision } from './invoiceLatestRevision';
import { InvoiceLineItemPeriod } from './invoiceLineItemPeriod';
import { InvoiceLinesList } from './invoiceLinesList';
import { InvoiceLinesList1 } from './invoiceLinesList1';
import { InvoiceMandateOptionsCard } from './invoiceMandateOptionsCard';
import { InvoiceOnBehalfOf } from './invoiceOnBehalfOf';
import { InvoicePaymentIntent } from './invoicePaymentIntent';
import { InvoicePaymentMethodOptionsAcssDebit } from './invoicePaymentMethodOptionsAcssDebit';
import { InvoicePaymentMethodOptionsAcssDebitMandateOptions } from './invoicePaymentMethodOptionsAcssDebitMandateOptions';
import { InvoicePaymentMethodOptionsBancontact } from './invoicePaymentMethodOptionsBancontact';
import { InvoicePaymentMethodOptionsCard } from './invoicePaymentMethodOptionsCard';
import { InvoicePaymentMethodOptionsCustomerBalance } from './invoicePaymentMethodOptionsCustomerBalance';
import { InvoicePaymentMethodOptionsCustomerBalanceBankTransfer } from './invoicePaymentMethodOptionsCustomerBalanceBankTransfer';
import { InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer } from './invoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer';
import { InvoicePaymentMethodOptionsUsBankAccount } from './invoicePaymentMethodOptionsUsBankAccount';
import { InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions } from './invoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions';
import { InvoiceQuote } from './invoiceQuote';
import { InvoiceRenderingOptions } from './invoiceRenderingOptions';
import { InvoiceSettingCustomField } from './invoiceSettingCustomField';
import { InvoiceSettingCustomerSetting } from './invoiceSettingCustomerSetting';
import { InvoiceSettingCustomerSettingDefaultPaymentMethod } from './invoiceSettingCustomerSettingDefaultPaymentMethod';
import { InvoiceSettingCustomerSettingRenderingOptions } from './invoiceSettingCustomerSettingRenderingOptions';
import { InvoiceSettingQuoteSetting } from './invoiceSettingQuoteSetting';
import { InvoiceSettingRenderingOptions } from './invoiceSettingRenderingOptions';
import { InvoiceSettingSubscriptionScheduleSetting } from './invoiceSettingSubscriptionScheduleSetting';
import { InvoiceShippingCost } from './invoiceShippingCost';
import { InvoiceShippingDetails } from './invoiceShippingDetails';
import { InvoiceSubscription } from './invoiceSubscription';
import { InvoiceTaxAmount } from './invoiceTaxAmount';
import { InvoiceTestClock } from './invoiceTestClock';
import { InvoiceThresholdReason } from './invoiceThresholdReason';
import { InvoiceTransferData } from './invoiceTransferData';
import { InvoiceTransferData1 } from './invoiceTransferData1';
import { InvoiceTransferDataDestination } from './invoiceTransferDataDestination';
import { Invoiceitem } from './invoiceitem';
import { InvoiceitemCustomer } from './invoiceitemCustomer';
import { InvoiceitemDiscountsInner } from './invoiceitemDiscountsInner';
import { InvoiceitemInvoice } from './invoiceitemInvoice';
import { InvoiceitemPlan } from './invoiceitemPlan';
import { InvoiceitemPrice } from './invoiceitemPrice';
import { InvoiceitemSubscription } from './invoiceitemSubscription';
import { InvoiceitemTestClock } from './invoiceitemTestClock';
import { InvoicesFromInvoice } from './invoicesFromInvoice';
import { InvoicesFromInvoiceInvoice } from './invoicesFromInvoiceInvoice';
import { InvoicesItemsList } from './invoicesItemsList';
import { InvoicesLineItemsCreditedItems } from './invoicesLineItemsCreditedItems';
import { InvoicesLineItemsProrationDetails } from './invoicesLineItemsProrationDetails';
import { InvoicesLineItemsProrationDetailsCreditedItems } from './invoicesLineItemsProrationDetailsCreditedItems';
import { InvoicesList } from './invoicesList';
import { InvoicesPaymentMethodOptions } from './invoicesPaymentMethodOptions';
import { InvoicesPaymentMethodOptionsAcssDebit } from './invoicesPaymentMethodOptionsAcssDebit';
import { InvoicesPaymentMethodOptionsBancontact } from './invoicesPaymentMethodOptionsBancontact';
import { InvoicesPaymentMethodOptionsCard } from './invoicesPaymentMethodOptionsCard';
import { InvoicesPaymentMethodOptionsCustomerBalance } from './invoicesPaymentMethodOptionsCustomerBalance';
import { InvoicesPaymentMethodOptionsKonbini } from './invoicesPaymentMethodOptionsKonbini';
import { InvoicesPaymentMethodOptionsUsBankAccount } from './invoicesPaymentMethodOptionsUsBankAccount';
import { InvoicesPaymentSettings } from './invoicesPaymentSettings';
import { InvoicesPaymentSettingsPaymentMethodOptions } from './invoicesPaymentSettingsPaymentMethodOptions';
import { InvoicesResourceInvoiceTaxId } from './invoicesResourceInvoiceTaxId';
import { InvoicesShippingCost } from './invoicesShippingCost';
import { InvoicesShippingCostShippingRate } from './invoicesShippingCostShippingRate';
import { InvoicesStatusTransitions } from './invoicesStatusTransitions';
import { IssuingAuthorization } from './issuingAuthorization';
import { IssuingAuthorizationAmountDetails } from './issuingAuthorizationAmountDetails';
import { IssuingAuthorizationAmountDetails1 } from './issuingAuthorizationAmountDetails1';
import { IssuingAuthorizationCardholder } from './issuingAuthorizationCardholder';
import { IssuingAuthorizationList } from './issuingAuthorizationList';
import { IssuingAuthorizationMerchantData } from './issuingAuthorizationMerchantData';
import { IssuingAuthorizationNetworkData } from './issuingAuthorizationNetworkData';
import { IssuingAuthorizationNetworkData1 } from './issuingAuthorizationNetworkData1';
import { IssuingAuthorizationPendingRequest } from './issuingAuthorizationPendingRequest';
import { IssuingAuthorizationPendingRequest1 } from './issuingAuthorizationPendingRequest1';
import { IssuingAuthorizationRequest } from './issuingAuthorizationRequest';
import { IssuingAuthorizationTreasury } from './issuingAuthorizationTreasury';
import { IssuingAuthorizationTreasury1 } from './issuingAuthorizationTreasury1';
import { IssuingAuthorizationVerificationData } from './issuingAuthorizationVerificationData';
import { IssuingCard } from './issuingCard';
import { IssuingCardApplePay } from './issuingCardApplePay';
import { IssuingCardAuthorizationControls } from './issuingCardAuthorizationControls';
import { IssuingCardGooglePay } from './issuingCardGooglePay';
import { IssuingCardList } from './issuingCardList';
import { IssuingCardReplacedBy } from './issuingCardReplacedBy';
import { IssuingCardReplacementFor } from './issuingCardReplacementFor';
import { IssuingCardShipping } from './issuingCardShipping';
import { IssuingCardShipping1 } from './issuingCardShipping1';
import { IssuingCardShippingCustoms } from './issuingCardShippingCustoms';
import { IssuingCardShippingCustoms1 } from './issuingCardShippingCustoms1';
import { IssuingCardSpendingLimit } from './issuingCardSpendingLimit';
import { IssuingCardWallets } from './issuingCardWallets';
import { IssuingCardWallets1 } from './issuingCardWallets1';
import { IssuingCardholder } from './issuingCardholder';
import { IssuingCardholderAddress } from './issuingCardholderAddress';
import { IssuingCardholderAuthorizationControls } from './issuingCardholderAuthorizationControls';
import { IssuingCardholderCardIssuing } from './issuingCardholderCardIssuing';
import { IssuingCardholderCardIssuingUserTermsAcceptance } from './issuingCardholderCardIssuingUserTermsAcceptance';
import { IssuingCardholderCompany } from './issuingCardholderCompany';
import { IssuingCardholderCompany1 } from './issuingCardholderCompany1';
import { IssuingCardholderIdDocument } from './issuingCardholderIdDocument';
import { IssuingCardholderIdDocumentBack } from './issuingCardholderIdDocumentBack';
import { IssuingCardholderIdDocumentFront } from './issuingCardholderIdDocumentFront';
import { IssuingCardholderIndividual } from './issuingCardholderIndividual';
import { IssuingCardholderIndividual1 } from './issuingCardholderIndividual1';
import { IssuingCardholderIndividualCardIssuing } from './issuingCardholderIndividualCardIssuing';
import { IssuingCardholderIndividualDob } from './issuingCardholderIndividualDob';
import { IssuingCardholderIndividualDob1 } from './issuingCardholderIndividualDob1';
import { IssuingCardholderIndividualVerification } from './issuingCardholderIndividualVerification';
import { IssuingCardholderList } from './issuingCardholderList';
import { IssuingCardholderRequirements } from './issuingCardholderRequirements';
import { IssuingCardholderSpendingControls } from './issuingCardholderSpendingControls';
import { IssuingCardholderSpendingLimit } from './issuingCardholderSpendingLimit';
import { IssuingCardholderUserTermsAcceptance } from './issuingCardholderUserTermsAcceptance';
import { IssuingCardholderVerification } from './issuingCardholderVerification';
import { IssuingCardholderVerificationDocument } from './issuingCardholderVerificationDocument';
import { IssuingDispute } from './issuingDispute';
import { IssuingDisputeCanceledEvidence } from './issuingDisputeCanceledEvidence';
import { IssuingDisputeCanceledEvidenceAdditionalDocumentation } from './issuingDisputeCanceledEvidenceAdditionalDocumentation';
import { IssuingDisputeDuplicateEvidence } from './issuingDisputeDuplicateEvidence';
import { IssuingDisputeDuplicateEvidenceCardStatement } from './issuingDisputeDuplicateEvidenceCardStatement';
import { IssuingDisputeDuplicateEvidenceCashReceipt } from './issuingDisputeDuplicateEvidenceCashReceipt';
import { IssuingDisputeDuplicateEvidenceCheckImage } from './issuingDisputeDuplicateEvidenceCheckImage';
import { IssuingDisputeEvidence } from './issuingDisputeEvidence';
import { IssuingDisputeFraudulentEvidence } from './issuingDisputeFraudulentEvidence';
import { IssuingDisputeList } from './issuingDisputeList';
import { IssuingDisputeMerchandiseNotAsDescribedEvidence } from './issuingDisputeMerchandiseNotAsDescribedEvidence';
import { IssuingDisputeNotReceivedEvidence } from './issuingDisputeNotReceivedEvidence';
import { IssuingDisputeOtherEvidence } from './issuingDisputeOtherEvidence';
import { IssuingDisputeServiceNotAsDescribedEvidence } from './issuingDisputeServiceNotAsDescribedEvidence';
import { IssuingDisputeTransaction } from './issuingDisputeTransaction';
import { IssuingDisputeTreasury } from './issuingDisputeTreasury';
import { IssuingDisputeTreasury1 } from './issuingDisputeTreasury1';
import { IssuingTransaction } from './issuingTransaction';
import { IssuingTransactionAmountDetails } from './issuingTransactionAmountDetails';
import { IssuingTransactionAmountDetails1 } from './issuingTransactionAmountDetails1';
import { IssuingTransactionAuthorization } from './issuingTransactionAuthorization';
import { IssuingTransactionBalanceTransaction } from './issuingTransactionBalanceTransaction';
import { IssuingTransactionCard } from './issuingTransactionCard';
import { IssuingTransactionCardholder } from './issuingTransactionCardholder';
import { IssuingTransactionDispute } from './issuingTransactionDispute';
import { IssuingTransactionFlightData } from './issuingTransactionFlightData';
import { IssuingTransactionFlightDataLeg } from './issuingTransactionFlightDataLeg';
import { IssuingTransactionFuelData } from './issuingTransactionFuelData';
import { IssuingTransactionList } from './issuingTransactionList';
import { IssuingTransactionLodgingData } from './issuingTransactionLodgingData';
import { IssuingTransactionPurchaseDetails } from './issuingTransactionPurchaseDetails';
import { IssuingTransactionPurchaseDetails1 } from './issuingTransactionPurchaseDetails1';
import { IssuingTransactionPurchaseDetailsFlight } from './issuingTransactionPurchaseDetailsFlight';
import { IssuingTransactionPurchaseDetailsFuel } from './issuingTransactionPurchaseDetailsFuel';
import { IssuingTransactionPurchaseDetailsLodging } from './issuingTransactionPurchaseDetailsLodging';
import { IssuingTransactionReceiptData } from './issuingTransactionReceiptData';
import { IssuingTransactionTreasury } from './issuingTransactionTreasury';
import { IssuingTransactionTreasury1 } from './issuingTransactionTreasury1';
import { Item } from './item';
import { ItemBillingThresholdsParam } from './itemBillingThresholdsParam';
import { ItemPrice } from './itemPrice';
import { LegalEntityCompany } from './legalEntityCompany';
import { LegalEntityCompanyAddressKana } from './legalEntityCompanyAddressKana';
import { LegalEntityCompanyAddressKanji } from './legalEntityCompanyAddressKanji';
import { LegalEntityCompanyOwnershipDeclaration } from './legalEntityCompanyOwnershipDeclaration';
import { LegalEntityCompanyVerification } from './legalEntityCompanyVerification';
import { LegalEntityCompanyVerification1 } from './legalEntityCompanyVerification1';
import { LegalEntityCompanyVerificationDocument } from './legalEntityCompanyVerificationDocument';
import { LegalEntityCompanyVerificationDocumentBack } from './legalEntityCompanyVerificationDocumentBack';
import { LegalEntityCompanyVerificationDocumentFront } from './legalEntityCompanyVerificationDocumentFront';
import { LegalEntityDob } from './legalEntityDob';
import { LegalEntityJapanAddress } from './legalEntityJapanAddress';
import { LegalEntityPersonVerification } from './legalEntityPersonVerification';
import { LegalEntityPersonVerificationAdditionalDocument } from './legalEntityPersonVerificationAdditionalDocument';
import { LegalEntityPersonVerificationDocument } from './legalEntityPersonVerificationDocument';
import { LegalEntityPersonVerificationDocumentBack } from './legalEntityPersonVerificationDocumentBack';
import { LegalEntityPersonVerificationDocumentFront } from './legalEntityPersonVerificationDocumentFront';
import { LegalEntityUboDeclaration } from './legalEntityUboDeclaration';
import { Level3 } from './level3';
import { Level3LineItems } from './level3LineItems';
import { LineItem } from './lineItem';
import { LineItemPlan } from './lineItemPlan';
import { LineItemPrice } from './lineItemPrice';
import { LineItemProrationDetails } from './lineItemProrationDetails';
import { LineItemsDiscountAmount } from './lineItemsDiscountAmount';
import { LineItemsTaxAmount } from './lineItemsTaxAmount';
import { LinkedAccountOptionsUsBankAccount } from './linkedAccountOptionsUsBankAccount';
import { LinkedFlowsParam } from './linkedFlowsParam';
import { ListAccountCapability } from './listAccountCapability';
import { LoginLink } from './loginLink';
import { Mandate } from './mandate';
import { MandateAcssDebit } from './mandateAcssDebit';
import { MandateAuBecsDebit } from './mandateAuBecsDebit';
import { MandateBacsDebit } from './mandateBacsDebit';
import { MandateBlik } from './mandateBlik';
import { MandateOptionsOffSessionDetailsBlik } from './mandateOptionsOffSessionDetailsBlik';
import { MandateOptionsParam } from './mandateOptionsParam';
import { MandatePaymentMethod } from './mandatePaymentMethod';
import { MandatePaymentMethodDetails } from './mandatePaymentMethodDetails';
import { MandateSepaDebit } from './mandateSepaDebit';
import { MandateSingleUse } from './mandateSingleUse';
import { ModelError } from './modelError';
import { ModelFile } from './modelFile';
import { Networks } from './networks';
import { NotificationEventData } from './notificationEventData';
import { NotificationEventList } from './notificationEventList';
import { NotificationEventRequest } from './notificationEventRequest';
import { NotificationWebhookEndpointList } from './notificationWebhookEndpointList';
import { OneTimePriceData } from './oneTimePriceData';
import { OnlineAcceptance } from './onlineAcceptance';
import { OutboundPaymentsPaymentMethodDetails } from './outboundPaymentsPaymentMethodDetails';
import { OutboundPaymentsPaymentMethodDetailsFinancialAccount } from './outboundPaymentsPaymentMethodDetailsFinancialAccount';
import { OutboundPaymentsPaymentMethodDetailsUsBankAccount } from './outboundPaymentsPaymentMethodDetailsUsBankAccount';
import { OutboundTransfersPaymentMethodDetails } from './outboundTransfersPaymentMethodDetails';
import { OutboundTransfersPaymentMethodDetailsUsBankAccount } from './outboundTransfersPaymentMethodDetailsUsBankAccount';
import { PackageDimensions } from './packageDimensions';
import { PaymentFlowsAmountDetails } from './paymentFlowsAmountDetails';
import { PaymentFlowsAmountDetailsResourceTip } from './paymentFlowsAmountDetailsResourceTip';
import { PaymentFlowsAutomaticPaymentMethodsPaymentIntent } from './paymentFlowsAutomaticPaymentMethodsPaymentIntent';
import { PaymentFlowsInstallmentOptions } from './paymentFlowsInstallmentOptions';
import { PaymentFlowsPaymentIntentList } from './paymentFlowsPaymentIntentList';
import { PaymentFlowsPaymentMethodList } from './paymentFlowsPaymentMethodList';
import { PaymentFlowsPrivatePaymentMethodsAlipayDetails } from './paymentFlowsPrivatePaymentMethodsAlipayDetails';
import { PaymentFlowsPrivatePaymentMethodsKlarnaDob } from './paymentFlowsPrivatePaymentMethodsKlarnaDob';
import { PaymentFlowsSetupIntentList } from './paymentFlowsSetupIntentList';
import { PaymentFlowsSetupIntentSetupAttemptList } from './paymentFlowsSetupIntentSetupAttemptList';
import { PaymentIntent } from './paymentIntent';
import { PaymentIntentApplication } from './paymentIntentApplication';
import { PaymentIntentAutomaticPaymentMethods } from './paymentIntentAutomaticPaymentMethods';
import { PaymentIntentCardProcessing } from './paymentIntentCardProcessing';
import { PaymentIntentCustomer } from './paymentIntentCustomer';
import { PaymentIntentInvoice } from './paymentIntentInvoice';
import { PaymentIntentLastPaymentError } from './paymentIntentLastPaymentError';
import { PaymentIntentLatestCharge } from './paymentIntentLatestCharge';
import { PaymentIntentNextAction } from './paymentIntentNextAction';
import { PaymentIntentNextAction1 } from './paymentIntentNextAction1';
import { PaymentIntentNextActionAlipayHandleRedirect } from './paymentIntentNextActionAlipayHandleRedirect';
import { PaymentIntentNextActionBoleto } from './paymentIntentNextActionBoleto';
import { PaymentIntentNextActionCardAwaitNotification } from './paymentIntentNextActionCardAwaitNotification';
import { PaymentIntentNextActionDisplayBankTransferInstructions } from './paymentIntentNextActionDisplayBankTransferInstructions';
import { PaymentIntentNextActionDisplayOxxoDetails } from './paymentIntentNextActionDisplayOxxoDetails';
import { PaymentIntentNextActionKonbini } from './paymentIntentNextActionKonbini';
import { PaymentIntentNextActionKonbiniFamilymart } from './paymentIntentNextActionKonbiniFamilymart';
import { PaymentIntentNextActionKonbiniLawson } from './paymentIntentNextActionKonbiniLawson';
import { PaymentIntentNextActionKonbiniMinistop } from './paymentIntentNextActionKonbiniMinistop';
import { PaymentIntentNextActionKonbiniSeicomart } from './paymentIntentNextActionKonbiniSeicomart';
import { PaymentIntentNextActionKonbiniStores } from './paymentIntentNextActionKonbiniStores';
import { PaymentIntentNextActionKonbiniStoresFamilymart } from './paymentIntentNextActionKonbiniStoresFamilymart';
import { PaymentIntentNextActionKonbiniStoresLawson } from './paymentIntentNextActionKonbiniStoresLawson';
import { PaymentIntentNextActionKonbiniStoresMinistop } from './paymentIntentNextActionKonbiniStoresMinistop';
import { PaymentIntentNextActionKonbiniStoresSeicomart } from './paymentIntentNextActionKonbiniStoresSeicomart';
import { PaymentIntentNextActionPaynowDisplayQrCode } from './paymentIntentNextActionPaynowDisplayQrCode';
import { PaymentIntentNextActionPixDisplayQrCode } from './paymentIntentNextActionPixDisplayQrCode';
import { PaymentIntentNextActionPromptpayDisplayQrCode } from './paymentIntentNextActionPromptpayDisplayQrCode';
import { PaymentIntentNextActionRedirectToUrl } from './paymentIntentNextActionRedirectToUrl';
import { PaymentIntentNextActionVerifyWithMicrodeposits } from './paymentIntentNextActionVerifyWithMicrodeposits';
import { PaymentIntentNextActionWechatPayDisplayQrCode } from './paymentIntentNextActionWechatPayDisplayQrCode';
import { PaymentIntentNextActionWechatPayRedirectToAndroidApp } from './paymentIntentNextActionWechatPayRedirectToAndroidApp';
import { PaymentIntentNextActionWechatPayRedirectToIosApp } from './paymentIntentNextActionWechatPayRedirectToIosApp';
import { PaymentIntentOnBehalfOf } from './paymentIntentOnBehalfOf';
import { PaymentIntentPaymentMethod } from './paymentIntentPaymentMethod';
import { PaymentIntentPaymentMethodOptions } from './paymentIntentPaymentMethodOptions';
import { PaymentIntentPaymentMethodOptions1 } from './paymentIntentPaymentMethodOptions1';
import { PaymentIntentPaymentMethodOptionsAcssDebit } from './paymentIntentPaymentMethodOptionsAcssDebit';
import { PaymentIntentPaymentMethodOptionsAuBecsDebit } from './paymentIntentPaymentMethodOptionsAuBecsDebit';
import { PaymentIntentPaymentMethodOptionsCard } from './paymentIntentPaymentMethodOptionsCard';
import { PaymentIntentPaymentMethodOptionsCardInstallments } from './paymentIntentPaymentMethodOptionsCardInstallments';
import { PaymentIntentPaymentMethodOptionsCardMandateOptions } from './paymentIntentPaymentMethodOptionsCardMandateOptions';
import { PaymentIntentPaymentMethodOptionsEps } from './paymentIntentPaymentMethodOptionsEps';
import { PaymentIntentPaymentMethodOptionsLink } from './paymentIntentPaymentMethodOptionsLink';
import { PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit } from './paymentIntentPaymentMethodOptionsMandateOptionsAcssDebit';
import { PaymentIntentPaymentMethodOptionsSepaDebit } from './paymentIntentPaymentMethodOptionsSepaDebit';
import { PaymentIntentPaymentMethodOptionsUsBankAccount } from './paymentIntentPaymentMethodOptionsUsBankAccount';
import { PaymentIntentProcessing } from './paymentIntentProcessing';
import { PaymentIntentProcessing1 } from './paymentIntentProcessing1';
import { PaymentIntentProcessingCustomerNotification } from './paymentIntentProcessingCustomerNotification';
import { PaymentIntentReview } from './paymentIntentReview';
import { PaymentIntentShipping } from './paymentIntentShipping';
import { PaymentIntentSource } from './paymentIntentSource';
import { PaymentIntentTransferData } from './paymentIntentTransferData';
import { PaymentIntentTypeSpecificPaymentMethodOptionsClient } from './paymentIntentTypeSpecificPaymentMethodOptionsClient';
import { PaymentLink } from './paymentLink';
import { PaymentLinkConsentCollection } from './paymentLinkConsentCollection';
import { PaymentLinkInvoiceCreation } from './paymentLinkInvoiceCreation';
import { PaymentLinkOnBehalfOf } from './paymentLinkOnBehalfOf';
import { PaymentLinkPaymentIntentData } from './paymentLinkPaymentIntentData';
import { PaymentLinkShippingAddressCollection } from './paymentLinkShippingAddressCollection';
import { PaymentLinkSubscriptionData } from './paymentLinkSubscriptionData';
import { PaymentLinkTransferData } from './paymentLinkTransferData';
import { PaymentLinksResourceAfterCompletion } from './paymentLinksResourceAfterCompletion';
import { PaymentLinksResourceAutomaticTax } from './paymentLinksResourceAutomaticTax';
import { PaymentLinksResourceCompletionBehaviorConfirmationPage } from './paymentLinksResourceCompletionBehaviorConfirmationPage';
import { PaymentLinksResourceCompletionBehaviorRedirect } from './paymentLinksResourceCompletionBehaviorRedirect';
import { PaymentLinksResourceConsentCollection } from './paymentLinksResourceConsentCollection';
import { PaymentLinksResourceCustomFields } from './paymentLinksResourceCustomFields';
import { PaymentLinksResourceCustomFieldsDropdown } from './paymentLinksResourceCustomFieldsDropdown';
import { PaymentLinksResourceCustomFieldsDropdown1 } from './paymentLinksResourceCustomFieldsDropdown1';
import { PaymentLinksResourceCustomFieldsDropdownOption } from './paymentLinksResourceCustomFieldsDropdownOption';
import { PaymentLinksResourceCustomFieldsLabel } from './paymentLinksResourceCustomFieldsLabel';
import { PaymentLinksResourceCustomText } from './paymentLinksResourceCustomText';
import { PaymentLinksResourceCustomTextPosition } from './paymentLinksResourceCustomTextPosition';
import { PaymentLinksResourceCustomTextShippingAddress } from './paymentLinksResourceCustomTextShippingAddress';
import { PaymentLinksResourceCustomTextSubmit } from './paymentLinksResourceCustomTextSubmit';
import { PaymentLinksResourceInvoiceCreation } from './paymentLinksResourceInvoiceCreation';
import { PaymentLinksResourceInvoiceCreationInvoiceData } from './paymentLinksResourceInvoiceCreationInvoiceData';
import { PaymentLinksResourceInvoiceSettings } from './paymentLinksResourceInvoiceSettings';
import { PaymentLinksResourceListLineItems } from './paymentLinksResourceListLineItems';
import { PaymentLinksResourceListLineItems1 } from './paymentLinksResourceListLineItems1';
import { PaymentLinksResourcePaymentIntentData } from './paymentLinksResourcePaymentIntentData';
import { PaymentLinksResourcePaymentLinkList } from './paymentLinksResourcePaymentLinkList';
import { PaymentLinksResourcePhoneNumberCollection } from './paymentLinksResourcePhoneNumberCollection';
import { PaymentLinksResourceShippingAddressCollection } from './paymentLinksResourceShippingAddressCollection';
import { PaymentLinksResourceShippingOption } from './paymentLinksResourceShippingOption';
import { PaymentLinksResourceShippingOptionShippingRate } from './paymentLinksResourceShippingOptionShippingRate';
import { PaymentLinksResourceSubscriptionData } from './paymentLinksResourceSubscriptionData';
import { PaymentLinksResourceTaxIdCollection } from './paymentLinksResourceTaxIdCollection';
import { PaymentLinksResourceTransferData } from './paymentLinksResourceTransferData';
import { PaymentLinksResourceTransferDataDestination } from './paymentLinksResourceTransferDataDestination';
import { PaymentMethod } from './paymentMethod';
import { PaymentMethodAcssDebit } from './paymentMethodAcssDebit';
import { PaymentMethodAuBecsDebit } from './paymentMethodAuBecsDebit';
import { PaymentMethodBacsDebit } from './paymentMethodBacsDebit';
import { PaymentMethodBoleto } from './paymentMethodBoleto';
import { PaymentMethodCard } from './paymentMethodCard';
import { PaymentMethodCardChecks } from './paymentMethodCardChecks';
import { PaymentMethodCardChecks1 } from './paymentMethodCardChecks1';
import { PaymentMethodCardNetworks } from './paymentMethodCardNetworks';
import { PaymentMethodCardThreeDSecureUsage } from './paymentMethodCardThreeDSecureUsage';
import { PaymentMethodCardWallet } from './paymentMethodCardWallet';
import { PaymentMethodCardWallet1 } from './paymentMethodCardWallet1';
import { PaymentMethodCardWalletMasterpass } from './paymentMethodCardWalletMasterpass';
import { PaymentMethodCardWalletMasterpassBillingAddress } from './paymentMethodCardWalletMasterpassBillingAddress';
import { PaymentMethodCardWalletMasterpassShippingAddress } from './paymentMethodCardWalletMasterpassShippingAddress';
import { PaymentMethodCardWalletVisaCheckout } from './paymentMethodCardWalletVisaCheckout';
import { PaymentMethodCustomer } from './paymentMethodCustomer';
import { PaymentMethodDetails } from './paymentMethodDetails';
import { PaymentMethodDetailsAchCreditTransfer } from './paymentMethodDetailsAchCreditTransfer';
import { PaymentMethodDetailsAchDebit } from './paymentMethodDetailsAchDebit';
import { PaymentMethodDetailsAcssDebit } from './paymentMethodDetailsAcssDebit';
import { PaymentMethodDetailsAfterpayClearpay } from './paymentMethodDetailsAfterpayClearpay';
import { PaymentMethodDetailsAuBecsDebit } from './paymentMethodDetailsAuBecsDebit';
import { PaymentMethodDetailsBacsDebit } from './paymentMethodDetailsBacsDebit';
import { PaymentMethodDetailsBancontact } from './paymentMethodDetailsBancontact';
import { PaymentMethodDetailsBancontactGeneratedSepaDebit } from './paymentMethodDetailsBancontactGeneratedSepaDebit';
import { PaymentMethodDetailsBancontactGeneratedSepaDebitMandate } from './paymentMethodDetailsBancontactGeneratedSepaDebitMandate';
import { PaymentMethodDetailsBoleto } from './paymentMethodDetailsBoleto';
import { PaymentMethodDetailsCard } from './paymentMethodDetailsCard';
import { PaymentMethodDetailsCardChecks } from './paymentMethodDetailsCardChecks';
import { PaymentMethodDetailsCardChecks1 } from './paymentMethodDetailsCardChecks1';
import { PaymentMethodDetailsCardInstallments } from './paymentMethodDetailsCardInstallments';
import { PaymentMethodDetailsCardInstallments1 } from './paymentMethodDetailsCardInstallments1';
import { PaymentMethodDetailsCardInstallmentsPlan } from './paymentMethodDetailsCardInstallmentsPlan';
import { PaymentMethodDetailsCardInstallmentsPlan1 } from './paymentMethodDetailsCardInstallmentsPlan1';
import { PaymentMethodDetailsCardPresent } from './paymentMethodDetailsCardPresent';
import { PaymentMethodDetailsCardPresentReceipt } from './paymentMethodDetailsCardPresentReceipt';
import { PaymentMethodDetailsCardPresentReceipt1 } from './paymentMethodDetailsCardPresentReceipt1';
import { PaymentMethodDetailsCardThreeDSecure } from './paymentMethodDetailsCardThreeDSecure';
import { PaymentMethodDetailsCardWallet } from './paymentMethodDetailsCardWallet';
import { PaymentMethodDetailsCardWallet1 } from './paymentMethodDetailsCardWallet1';
import { PaymentMethodDetailsCardWalletMasterpass } from './paymentMethodDetailsCardWalletMasterpass';
import { PaymentMethodDetailsCardWalletVisaCheckout } from './paymentMethodDetailsCardWalletVisaCheckout';
import { PaymentMethodDetailsEps } from './paymentMethodDetailsEps';
import { PaymentMethodDetailsFpx } from './paymentMethodDetailsFpx';
import { PaymentMethodDetailsGiropay } from './paymentMethodDetailsGiropay';
import { PaymentMethodDetailsGrabpay } from './paymentMethodDetailsGrabpay';
import { PaymentMethodDetailsIdeal } from './paymentMethodDetailsIdeal';
import { PaymentMethodDetailsInteracPresent } from './paymentMethodDetailsInteracPresent';
import { PaymentMethodDetailsInteracPresentReceipt } from './paymentMethodDetailsInteracPresentReceipt';
import { PaymentMethodDetailsInteracPresentReceipt1 } from './paymentMethodDetailsInteracPresentReceipt1';
import { PaymentMethodDetailsKlarna } from './paymentMethodDetailsKlarna';
import { PaymentMethodDetailsKonbini } from './paymentMethodDetailsKonbini';
import { PaymentMethodDetailsKonbiniStore } from './paymentMethodDetailsKonbiniStore';
import { PaymentMethodDetailsKonbiniStore1 } from './paymentMethodDetailsKonbiniStore1';
import { PaymentMethodDetailsMultibanco } from './paymentMethodDetailsMultibanco';
import { PaymentMethodDetailsOxxo } from './paymentMethodDetailsOxxo';
import { PaymentMethodDetailsP24 } from './paymentMethodDetailsP24';
import { PaymentMethodDetailsPaynow } from './paymentMethodDetailsPaynow';
import { PaymentMethodDetailsPix } from './paymentMethodDetailsPix';
import { PaymentMethodDetailsPromptpay } from './paymentMethodDetailsPromptpay';
import { PaymentMethodDetailsSepaCreditTransfer } from './paymentMethodDetailsSepaCreditTransfer';
import { PaymentMethodDetailsSepaDebit } from './paymentMethodDetailsSepaDebit';
import { PaymentMethodDetailsSofort } from './paymentMethodDetailsSofort';
import { PaymentMethodDetailsUsBankAccount } from './paymentMethodDetailsUsBankAccount';
import { PaymentMethodDetailsWechatPay } from './paymentMethodDetailsWechatPay';
import { PaymentMethodEps } from './paymentMethodEps';
import { PaymentMethodFpx } from './paymentMethodFpx';
import { PaymentMethodIdeal } from './paymentMethodIdeal';
import { PaymentMethodKlarna } from './paymentMethodKlarna';
import { PaymentMethodKlarnaDob } from './paymentMethodKlarnaDob';
import { PaymentMethodLink } from './paymentMethodLink';
import { PaymentMethodOptionsAffirm } from './paymentMethodOptionsAffirm';
import { PaymentMethodOptionsAfterpayClearpay } from './paymentMethodOptionsAfterpayClearpay';
import { PaymentMethodOptionsAlipay } from './paymentMethodOptionsAlipay';
import { PaymentMethodOptionsBacsDebit } from './paymentMethodOptionsBacsDebit';
import { PaymentMethodOptionsBancontact } from './paymentMethodOptionsBancontact';
import { PaymentMethodOptionsBoleto } from './paymentMethodOptionsBoleto';
import { PaymentMethodOptionsCardInstallments } from './paymentMethodOptionsCardInstallments';
import { PaymentMethodOptionsCardInstallmentsPlan } from './paymentMethodOptionsCardInstallmentsPlan';
import { PaymentMethodOptionsCardMandateOptions } from './paymentMethodOptionsCardMandateOptions';
import { PaymentMethodOptionsCardPresent } from './paymentMethodOptionsCardPresent';
import { PaymentMethodOptionsCustomerBalance } from './paymentMethodOptionsCustomerBalance';
import { PaymentMethodOptionsCustomerBalanceBankTransfer } from './paymentMethodOptionsCustomerBalanceBankTransfer';
import { PaymentMethodOptionsCustomerBalanceEuBankAccount } from './paymentMethodOptionsCustomerBalanceEuBankAccount';
import { PaymentMethodOptionsFpx } from './paymentMethodOptionsFpx';
import { PaymentMethodOptionsGiropay } from './paymentMethodOptionsGiropay';
import { PaymentMethodOptionsGrabpay } from './paymentMethodOptionsGrabpay';
import { PaymentMethodOptionsIdeal } from './paymentMethodOptionsIdeal';
import { PaymentMethodOptionsKlarna } from './paymentMethodOptionsKlarna';
import { PaymentMethodOptionsKonbini } from './paymentMethodOptionsKonbini';
import { PaymentMethodOptionsOxxo } from './paymentMethodOptionsOxxo';
import { PaymentMethodOptionsP24 } from './paymentMethodOptionsP24';
import { PaymentMethodOptionsPaynow } from './paymentMethodOptionsPaynow';
import { PaymentMethodOptionsPix } from './paymentMethodOptionsPix';
import { PaymentMethodOptionsPromptpay } from './paymentMethodOptionsPromptpay';
import { PaymentMethodOptionsSofort } from './paymentMethodOptionsSofort';
import { PaymentMethodOptionsWechatPay } from './paymentMethodOptionsWechatPay';
import { PaymentMethodP24 } from './paymentMethodP24';
import { PaymentMethodSepaDebit } from './paymentMethodSepaDebit';
import { PaymentMethodSepaDebitGeneratedFrom } from './paymentMethodSepaDebitGeneratedFrom';
import { PaymentMethodSofort } from './paymentMethodSofort';
import { PaymentMethodUsBankAccount } from './paymentMethodUsBankAccount';
import { PaymentMethodUsBankAccountNetworks } from './paymentMethodUsBankAccountNetworks';
import { PaymentPagesCheckoutSessionAfterExpiration } from './paymentPagesCheckoutSessionAfterExpiration';
import { PaymentPagesCheckoutSessionAfterExpirationRecovery } from './paymentPagesCheckoutSessionAfterExpirationRecovery';
import { PaymentPagesCheckoutSessionAfterExpirationRecovery1 } from './paymentPagesCheckoutSessionAfterExpirationRecovery1';
import { PaymentPagesCheckoutSessionAutomaticTax } from './paymentPagesCheckoutSessionAutomaticTax';
import { PaymentPagesCheckoutSessionConsent } from './paymentPagesCheckoutSessionConsent';
import { PaymentPagesCheckoutSessionConsentCollection } from './paymentPagesCheckoutSessionConsentCollection';
import { PaymentPagesCheckoutSessionCustomFields } from './paymentPagesCheckoutSessionCustomFields';
import { PaymentPagesCheckoutSessionCustomFieldsDropdown } from './paymentPagesCheckoutSessionCustomFieldsDropdown';
import { PaymentPagesCheckoutSessionCustomFieldsDropdown1 } from './paymentPagesCheckoutSessionCustomFieldsDropdown1';
import { PaymentPagesCheckoutSessionCustomFieldsLabel } from './paymentPagesCheckoutSessionCustomFieldsLabel';
import { PaymentPagesCheckoutSessionCustomFieldsNumeric } from './paymentPagesCheckoutSessionCustomFieldsNumeric';
import { PaymentPagesCheckoutSessionCustomFieldsNumeric1 } from './paymentPagesCheckoutSessionCustomFieldsNumeric1';
import { PaymentPagesCheckoutSessionCustomFieldsOption } from './paymentPagesCheckoutSessionCustomFieldsOption';
import { PaymentPagesCheckoutSessionCustomFieldsText } from './paymentPagesCheckoutSessionCustomFieldsText';
import { PaymentPagesCheckoutSessionCustomFieldsText1 } from './paymentPagesCheckoutSessionCustomFieldsText1';
import { PaymentPagesCheckoutSessionCustomText } from './paymentPagesCheckoutSessionCustomText';
import { PaymentPagesCheckoutSessionCustomTextPosition } from './paymentPagesCheckoutSessionCustomTextPosition';
import { PaymentPagesCheckoutSessionCustomTextShippingAddress } from './paymentPagesCheckoutSessionCustomTextShippingAddress';
import { PaymentPagesCheckoutSessionCustomTextSubmit } from './paymentPagesCheckoutSessionCustomTextSubmit';
import { PaymentPagesCheckoutSessionCustomerDetails } from './paymentPagesCheckoutSessionCustomerDetails';
import { PaymentPagesCheckoutSessionCustomerDetailsAddress } from './paymentPagesCheckoutSessionCustomerDetailsAddress';
import { PaymentPagesCheckoutSessionInvoiceCreation } from './paymentPagesCheckoutSessionInvoiceCreation';
import { PaymentPagesCheckoutSessionInvoiceSettings } from './paymentPagesCheckoutSessionInvoiceSettings';
import { PaymentPagesCheckoutSessionList } from './paymentPagesCheckoutSessionList';
import { PaymentPagesCheckoutSessionListLineItems } from './paymentPagesCheckoutSessionListLineItems';
import { PaymentPagesCheckoutSessionListLineItems1 } from './paymentPagesCheckoutSessionListLineItems1';
import { PaymentPagesCheckoutSessionPhoneNumberCollection } from './paymentPagesCheckoutSessionPhoneNumberCollection';
import { PaymentPagesCheckoutSessionShippingAddressCollection } from './paymentPagesCheckoutSessionShippingAddressCollection';
import { PaymentPagesCheckoutSessionShippingCost } from './paymentPagesCheckoutSessionShippingCost';
import { PaymentPagesCheckoutSessionShippingCostShippingRate } from './paymentPagesCheckoutSessionShippingCostShippingRate';
import { PaymentPagesCheckoutSessionShippingOption } from './paymentPagesCheckoutSessionShippingOption';
import { PaymentPagesCheckoutSessionShippingOptionShippingRate } from './paymentPagesCheckoutSessionShippingOptionShippingRate';
import { PaymentPagesCheckoutSessionTaxId } from './paymentPagesCheckoutSessionTaxId';
import { PaymentPagesCheckoutSessionTaxIdCollection } from './paymentPagesCheckoutSessionTaxIdCollection';
import { PaymentPagesCheckoutSessionTotalDetails } from './paymentPagesCheckoutSessionTotalDetails';
import { PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown } from './paymentPagesCheckoutSessionTotalDetailsResourceBreakdown';
import { PaymentSource } from './paymentSource';
import { Payout } from './payout';
import { PayoutBalanceTransaction } from './payoutBalanceTransaction';
import { PayoutDestination } from './payoutDestination';
import { PayoutFailureBalanceTransaction } from './payoutFailureBalanceTransaction';
import { PayoutList } from './payoutList';
import { PayoutOriginalPayout } from './payoutOriginalPayout';
import { PayoutReversedBy } from './payoutReversedBy';
import { Period } from './period';
import { Period1 } from './period1';
import { Person } from './person';
import { PersonAddressKana } from './personAddressKana';
import { PersonAddressKanji } from './personAddressKanji';
import { PersonFutureRequirements } from './personFutureRequirements';
import { PersonFutureRequirements1 } from './personFutureRequirements1';
import { PersonList } from './personList';
import { PersonRelationship } from './personRelationship';
import { PersonRequirements } from './personRequirements';
import { PersonRequirements1 } from './personRequirements1';
import { Plan } from './plan';
import { PlanList } from './planList';
import { PlanProduct } from './planProduct';
import { PlanTier } from './planTier';
import { PlanTransformUsage } from './planTransformUsage';
import { PlatformEarningList } from './platformEarningList';
import { PlatformTaxFee } from './platformTaxFee';
import { PortalBusinessProfile } from './portalBusinessProfile';
import { PortalConfigurationList } from './portalConfigurationList';
import { PortalCustomerUpdate } from './portalCustomerUpdate';
import { PortalFeatures } from './portalFeatures';
import { PortalFlowsAfterCompletionHostedConfirmation } from './portalFlowsAfterCompletionHostedConfirmation';
import { PortalFlowsAfterCompletionRedirect } from './portalFlowsAfterCompletionRedirect';
import { PortalFlowsFlow } from './portalFlowsFlow';
import { PortalFlowsFlowAfterCompletion } from './portalFlowsFlowAfterCompletion';
import { PortalFlowsFlowAfterCompletionHostedConfirmation } from './portalFlowsFlowAfterCompletionHostedConfirmation';
import { PortalFlowsFlowAfterCompletionRedirect } from './portalFlowsFlowAfterCompletionRedirect';
import { PortalFlowsFlowSubscriptionCancel } from './portalFlowsFlowSubscriptionCancel';
import { PortalFlowsFlowSubscriptionCancel1 } from './portalFlowsFlowSubscriptionCancel1';
import { PortalInvoiceList } from './portalInvoiceList';
import { PortalLoginPage } from './portalLoginPage';
import { PortalPaymentMethodUpdate } from './portalPaymentMethodUpdate';
import { PortalSubscriptionCancel } from './portalSubscriptionCancel';
import { PortalSubscriptionCancellationReason } from './portalSubscriptionCancellationReason';
import { PortalSubscriptionPause } from './portalSubscriptionPause';
import { PortalSubscriptionUpdate } from './portalSubscriptionUpdate';
import { PortalSubscriptionUpdateProduct } from './portalSubscriptionUpdateProduct';
import { PostCustomersCustomerSourcesId200Response } from './postCustomersCustomerSourcesId200Response';
import { PostCustomersRequestAddress } from './postCustomersRequestAddress';
import { PostCustomersRequestShipping } from './postCustomersRequestShipping';
import { PostFileLinksLinkRequestExpiresAtAnyOf } from './postFileLinksLinkRequestExpiresAtAnyOf';
import { PostInvoiceitemsRequestTaxCode } from './postInvoiceitemsRequestTaxCode';
import { Price } from './price';
import { PriceList } from './priceList';
import { PriceProduct } from './priceProduct';
import { PriceRecurring } from './priceRecurring';
import { PriceTier } from './priceTier';
import { PriceTransformQuantity } from './priceTransformQuantity';
import { Product } from './product';
import { ProductDefaultPrice } from './productDefaultPrice';
import { ProductList } from './productList';
import { ProductPackageDimensions } from './productPackageDimensions';
import { ProductTaxCode } from './productTaxCode';
import { PromotionCode } from './promotionCode';
import { PromotionCodeCurrencyOption } from './promotionCodeCurrencyOption';
import { PromotionCodeCustomer } from './promotionCodeCustomer';
import { PromotionCodesResourcePromotionCodeList } from './promotionCodesResourcePromotionCodeList';
import { PromotionCodesResourceRestrictions } from './promotionCodesResourceRestrictions';
import { Quote } from './quote';
import { QuoteApplication } from './quoteApplication';
import { QuoteCustomer } from './quoteCustomer';
import { QuoteDefaultTaxRatesInner } from './quoteDefaultTaxRatesInner';
import { QuoteFromQuote } from './quoteFromQuote';
import { QuoteInvoice } from './quoteInvoice';
import { QuoteInvoiceSettings } from './quoteInvoiceSettings';
import { QuoteSubscription } from './quoteSubscription';
import { QuoteSubscriptionSchedule } from './quoteSubscriptionSchedule';
import { QuoteTestClock } from './quoteTestClock';
import { QuoteTransferData } from './quoteTransferData';
import { QuotesResourceAutomaticTax } from './quotesResourceAutomaticTax';
import { QuotesResourceComputed } from './quotesResourceComputed';
import { QuotesResourceComputedRecurring } from './quotesResourceComputedRecurring';
import { QuotesResourceFromQuote } from './quotesResourceFromQuote';
import { QuotesResourceFromQuoteQuote } from './quotesResourceFromQuoteQuote';
import { QuotesResourceListLineItems } from './quotesResourceListLineItems';
import { QuotesResourceListLineItems1 } from './quotesResourceListLineItems1';
import { QuotesResourceListLineItems2 } from './quotesResourceListLineItems2';
import { QuotesResourceQuoteList } from './quotesResourceQuoteList';
import { QuotesResourceRecurring } from './quotesResourceRecurring';
import { QuotesResourceStatusTransitions } from './quotesResourceStatusTransitions';
import { QuotesResourceSubscriptionDataSubscriptionData } from './quotesResourceSubscriptionDataSubscriptionData';
import { QuotesResourceTotalDetails } from './quotesResourceTotalDetails';
import { QuotesResourceTotalDetailsResourceBreakdown } from './quotesResourceTotalDetailsResourceBreakdown';
import { QuotesResourceTransferData } from './quotesResourceTransferData';
import { QuotesResourceUpfront } from './quotesResourceUpfront';
import { RadarEarlyFraudWarning } from './radarEarlyFraudWarning';
import { RadarEarlyFraudWarningCharge } from './radarEarlyFraudWarningCharge';
import { RadarEarlyFraudWarningList } from './radarEarlyFraudWarningList';
import { RadarEarlyFraudWarningPaymentIntent } from './radarEarlyFraudWarningPaymentIntent';
import { RadarListListItemList } from './radarListListItemList';
import { RadarListListItemList1 } from './radarListListItemList1';
import { RadarListListList } from './radarListListList';
import { RadarRadarOptions } from './radarRadarOptions';
import { RadarReviewList } from './radarReviewList';
import { RadarReviewResourceLocation } from './radarReviewResourceLocation';
import { RadarReviewResourceSession } from './radarReviewResourceSession';
import { RadarValueList } from './radarValueList';
import { RadarValueListItem } from './radarValueListItem';
import { RangeQuerySpecs } from './rangeQuerySpecs';
import { ReceivedPaymentMethodDetailsFinancialAccount } from './receivedPaymentMethodDetailsFinancialAccount';
import { Recurring } from './recurring';
import { RecurringAdhoc } from './recurringAdhoc';
import { RecurringPriceData } from './recurringPriceData';
import { Refund } from './refund';
import { RefundCharge } from './refundCharge';
import { RefundFailureBalanceTransaction } from './refundFailureBalanceTransaction';
import { RefundList } from './refundList';
import { RefundList1 } from './refundList1';
import { RefundNextAction } from './refundNextAction';
import { RefundNextActionDisplayDetails } from './refundNextActionDisplayDetails';
import { RefundNextActionDisplayDetails1 } from './refundNextActionDisplayDetails1';
import { RefundPaymentIntent } from './refundPaymentIntent';
import { RefundSourceTransferReversal } from './refundSourceTransferReversal';
import { RefundTransferReversal } from './refundTransferReversal';
import { ReportingReportRun } from './reportingReportRun';
import { ReportingReportRunResult } from './reportingReportRunResult';
import { ReportingReportType } from './reportingReportType';
import { ReserveTransaction } from './reserveTransaction';
import { Review } from './review';
import { ReviewCharge } from './reviewCharge';
import { ReviewIpAddressLocation } from './reviewIpAddressLocation';
import { ReviewPaymentIntent } from './reviewPaymentIntent';
import { ReviewSession } from './reviewSession';
import { Rule } from './rule';
import { ScheduledQueryRun } from './scheduledQueryRun';
import { ScheduledQueryRunFile } from './scheduledQueryRunFile';
import { SchedulesPhaseAutomaticTax } from './schedulesPhaseAutomaticTax';
import { ScopeParam } from './scopeParam';
import { SearchResult } from './searchResult';
import { SearchResult1 } from './searchResult1';
import { SearchResult2 } from './searchResult2';
import { SearchResult3 } from './searchResult3';
import { SearchResult4 } from './searchResult4';
import { SearchResult5 } from './searchResult5';
import { SearchResult6 } from './searchResult6';
import { SecretServiceResourceScope } from './secretServiceResourceScope';
import { SecretServiceResourceSecretList } from './secretServiceResourceSecretList';
import { SepaDebitGeneratedFrom } from './sepaDebitGeneratedFrom';
import { SepaDebitGeneratedFromCharge } from './sepaDebitGeneratedFromCharge';
import { SepaDebitGeneratedFromSetupAttempt } from './sepaDebitGeneratedFromSetupAttempt';
import { SetupAttempt } from './setupAttempt';
import { SetupAttemptApplication } from './setupAttemptApplication';
import { SetupAttemptCustomer } from './setupAttemptCustomer';
import { SetupAttemptOnBehalfOf } from './setupAttemptOnBehalfOf';
import { SetupAttemptPaymentMethod } from './setupAttemptPaymentMethod';
import { SetupAttemptPaymentMethodDetails } from './setupAttemptPaymentMethodDetails';
import { SetupAttemptPaymentMethodDetailsBancontact } from './setupAttemptPaymentMethodDetailsBancontact';
import { SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebit } from './setupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebit';
import { SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitMandate } from './setupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitMandate';
import { SetupAttemptPaymentMethodDetailsCard } from './setupAttemptPaymentMethodDetailsCard';
import { SetupAttemptPaymentMethodDetailsCardPresent } from './setupAttemptPaymentMethodDetailsCardPresent';
import { SetupAttemptPaymentMethodDetailsCardPresentGeneratedCard } from './setupAttemptPaymentMethodDetailsCardPresentGeneratedCard';
import { SetupAttemptPaymentMethodDetailsCardThreeDSecure } from './setupAttemptPaymentMethodDetailsCardThreeDSecure';
import { SetupAttemptPaymentMethodDetailsIdeal } from './setupAttemptPaymentMethodDetailsIdeal';
import { SetupAttemptPaymentMethodDetailsSofort } from './setupAttemptPaymentMethodDetailsSofort';
import { SetupAttemptSetupError } from './setupAttemptSetupError';
import { SetupAttemptSetupIntent } from './setupAttemptSetupIntent';
import { SetupIntent } from './setupIntent';
import { SetupIntentApplication } from './setupIntentApplication';
import { SetupIntentCustomer } from './setupIntentCustomer';
import { SetupIntentLastSetupError } from './setupIntentLastSetupError';
import { SetupIntentLatestAttempt } from './setupIntentLatestAttempt';
import { SetupIntentMandate } from './setupIntentMandate';
import { SetupIntentNextAction } from './setupIntentNextAction';
import { SetupIntentNextAction1 } from './setupIntentNextAction1';
import { SetupIntentNextActionRedirectToUrl } from './setupIntentNextActionRedirectToUrl';
import { SetupIntentNextActionVerifyWithMicrodeposits } from './setupIntentNextActionVerifyWithMicrodeposits';
import { SetupIntentOnBehalfOf } from './setupIntentOnBehalfOf';
import { SetupIntentPaymentMethod } from './setupIntentPaymentMethod';
import { SetupIntentPaymentMethodOptions } from './setupIntentPaymentMethodOptions';
import { SetupIntentPaymentMethodOptions1 } from './setupIntentPaymentMethodOptions1';
import { SetupIntentPaymentMethodOptionsAcssDebit } from './setupIntentPaymentMethodOptionsAcssDebit';
import { SetupIntentPaymentMethodOptionsBlik } from './setupIntentPaymentMethodOptionsBlik';
import { SetupIntentPaymentMethodOptionsCard } from './setupIntentPaymentMethodOptionsCard';
import { SetupIntentPaymentMethodOptionsCardMandateOptions } from './setupIntentPaymentMethodOptionsCardMandateOptions';
import { SetupIntentPaymentMethodOptionsCardMandateOptions1 } from './setupIntentPaymentMethodOptionsCardMandateOptions1';
import { SetupIntentPaymentMethodOptionsLink } from './setupIntentPaymentMethodOptionsLink';
import { SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit } from './setupIntentPaymentMethodOptionsMandateOptionsAcssDebit';
import { SetupIntentPaymentMethodOptionsMandateOptionsBlik } from './setupIntentPaymentMethodOptionsMandateOptionsBlik';
import { SetupIntentPaymentMethodOptionsSepaDebit } from './setupIntentPaymentMethodOptionsSepaDebit';
import { SetupIntentPaymentMethodOptionsUsBankAccount } from './setupIntentPaymentMethodOptionsUsBankAccount';
import { SetupIntentSingleUseMandate } from './setupIntentSingleUseMandate';
import { SetupIntentTypeSpecificPaymentMethodOptionsClient } from './setupIntentTypeSpecificPaymentMethodOptionsClient';
import { Shipping } from './shipping';
import { ShippingRate } from './shippingRate';
import { ShippingRateCurrencyOption } from './shippingRateCurrencyOption';
import { ShippingRateDeliveryEstimate } from './shippingRateDeliveryEstimate';
import { ShippingRateDeliveryEstimate1 } from './shippingRateDeliveryEstimate1';
import { ShippingRateDeliveryEstimateBound } from './shippingRateDeliveryEstimateBound';
import { ShippingRateDeliveryEstimateMaximum } from './shippingRateDeliveryEstimateMaximum';
import { ShippingRateDeliveryEstimateMinimum } from './shippingRateDeliveryEstimateMinimum';
import { ShippingRateFixedAmount } from './shippingRateFixedAmount';
import { ShippingRateTaxCode } from './shippingRateTaxCode';
import { ShippingResourcesShippingRateList } from './shippingResourcesShippingRateList';
import { SigmaScheduledQueryRunError } from './sigmaScheduledQueryRunError';
import { SigmaScheduledQueryRunList } from './sigmaScheduledQueryRunList';
import { Source } from './source';
import { SourceCodeVerificationFlow } from './sourceCodeVerificationFlow';
import { SourceMandateNotification } from './sourceMandateNotification';
import { SourceMandateNotificationAcssDebitData } from './sourceMandateNotificationAcssDebitData';
import { SourceMandateNotificationBacsDebitData } from './sourceMandateNotificationBacsDebitData';
import { SourceMandateNotificationSepaDebitData } from './sourceMandateNotificationSepaDebitData';
import { SourceOrder } from './sourceOrder';
import { SourceOrderItem } from './sourceOrderItem';
import { SourceOwner } from './sourceOwner';
import { SourceOwner1 } from './sourceOwner1';
import { SourceOwnerAddress } from './sourceOwnerAddress';
import { SourceOwnerVerifiedAddress } from './sourceOwnerVerifiedAddress';
import { SourceReceiverFlow } from './sourceReceiverFlow';
import { SourceRedirectFlow } from './sourceRedirectFlow';
import { SourceTransaction } from './sourceTransaction';
import { SourceTransactionAchCreditTransferData } from './sourceTransactionAchCreditTransferData';
import { SourceTransactionChfCreditTransferData } from './sourceTransactionChfCreditTransferData';
import { SourceTransactionGbpCreditTransferData } from './sourceTransactionGbpCreditTransferData';
import { SourceTransactionPaperCheckData } from './sourceTransactionPaperCheckData';
import { SourceTransactionSepaCreditTransferData } from './sourceTransactionSepaCreditTransferData';
import { SourceTypeAchCreditTransfer } from './sourceTypeAchCreditTransfer';
import { SourceTypeAchDebit } from './sourceTypeAchDebit';
import { SourceTypeAcssDebit } from './sourceTypeAcssDebit';
import { SourceTypeAlipay } from './sourceTypeAlipay';
import { SourceTypeAuBecsDebit } from './sourceTypeAuBecsDebit';
import { SourceTypeBancontact } from './sourceTypeBancontact';
import { SourceTypeCard } from './sourceTypeCard';
import { SourceTypeCardPresent } from './sourceTypeCardPresent';
import { SourceTypeEps } from './sourceTypeEps';
import { SourceTypeGiropay } from './sourceTypeGiropay';
import { SourceTypeIdeal } from './sourceTypeIdeal';
import { SourceTypeKlarna } from './sourceTypeKlarna';
import { SourceTypeMultibanco } from './sourceTypeMultibanco';
import { SourceTypeP24 } from './sourceTypeP24';
import { SourceTypeSepaCreditTransfer } from './sourceTypeSepaCreditTransfer';
import { SourceTypeSepaDebit } from './sourceTypeSepaDebit';
import { SourceTypeSofort } from './sourceTypeSofort';
import { SourceTypeThreeDSecure } from './sourceTypeThreeDSecure';
import { SourceTypeWechat } from './sourceTypeWechat';
import { StatusTransitionTimestampSpecs } from './statusTransitionTimestampSpecs';
import { StatusTransitionTimestampSpecsPostedAt } from './statusTransitionTimestampSpecsPostedAt';
import { Subscription } from './subscription';
import { SubscriptionApplication } from './subscriptionApplication';
import { SubscriptionAutomaticTax } from './subscriptionAutomaticTax';
import { SubscriptionBillingThresholds } from './subscriptionBillingThresholds';
import { SubscriptionBillingThresholds1 } from './subscriptionBillingThresholds1';
import { SubscriptionCustomer } from './subscriptionCustomer';
import { SubscriptionDefaultPaymentMethod } from './subscriptionDefaultPaymentMethod';
import { SubscriptionDefaultSource } from './subscriptionDefaultSource';
import { SubscriptionDiscount } from './subscriptionDiscount';
import { SubscriptionItem } from './subscriptionItem';
import { SubscriptionItemBillingThresholds } from './subscriptionItemBillingThresholds';
import { SubscriptionItemBillingThresholds1 } from './subscriptionItemBillingThresholds1';
import { SubscriptionItemList } from './subscriptionItemList';
import { SubscriptionItemUpdateParams } from './subscriptionItemUpdateParams';
import { SubscriptionItemUpdateParamsBillingThresholds } from './subscriptionItemUpdateParamsBillingThresholds';
import { SubscriptionItemUpdateParamsTaxRates } from './subscriptionItemUpdateParamsTaxRates';
import { SubscriptionLatestInvoice } from './subscriptionLatestInvoice';
import { SubscriptionList } from './subscriptionList';
import { SubscriptionOnBehalfOf } from './subscriptionOnBehalfOf';
import { SubscriptionPauseCollection } from './subscriptionPauseCollection';
import { SubscriptionPaymentMethodOptionsCard } from './subscriptionPaymentMethodOptionsCard';
import { SubscriptionPaymentSettings } from './subscriptionPaymentSettings';
import { SubscriptionPendingInvoiceItemInterval } from './subscriptionPendingInvoiceItemInterval';
import { SubscriptionPendingInvoiceItemInterval1 } from './subscriptionPendingInvoiceItemInterval1';
import { SubscriptionPendingSetupIntent } from './subscriptionPendingSetupIntent';
import { SubscriptionPendingUpdate } from './subscriptionPendingUpdate';
import { SubscriptionSchedule } from './subscriptionSchedule';
import { SubscriptionSchedule1 } from './subscriptionSchedule1';
import { SubscriptionScheduleAddInvoiceItem } from './subscriptionScheduleAddInvoiceItem';
import { SubscriptionScheduleAddInvoiceItemPrice } from './subscriptionScheduleAddInvoiceItemPrice';
import { SubscriptionScheduleApplication } from './subscriptionScheduleApplication';
import { SubscriptionScheduleConfigurationItem } from './subscriptionScheduleConfigurationItem';
import { SubscriptionScheduleConfigurationItemPlan } from './subscriptionScheduleConfigurationItemPlan';
import { SubscriptionScheduleConfigurationItemPrice } from './subscriptionScheduleConfigurationItemPrice';
import { SubscriptionScheduleCurrentPhase } from './subscriptionScheduleCurrentPhase';
import { SubscriptionScheduleCurrentPhase1 } from './subscriptionScheduleCurrentPhase1';
import { SubscriptionScheduleCustomer } from './subscriptionScheduleCustomer';
import { SubscriptionSchedulePhaseConfiguration } from './subscriptionSchedulePhaseConfiguration';
import { SubscriptionSchedulePhaseConfigurationCoupon } from './subscriptionSchedulePhaseConfigurationCoupon';
import { SubscriptionSchedulePhaseConfigurationDefaultPaymentMethod } from './subscriptionSchedulePhaseConfigurationDefaultPaymentMethod';
import { SubscriptionSchedulePhaseConfigurationInvoiceSettings } from './subscriptionSchedulePhaseConfigurationInvoiceSettings';
import { SubscriptionSchedulePhaseConfigurationOnBehalfOf } from './subscriptionSchedulePhaseConfigurationOnBehalfOf';
import { SubscriptionSchedulePhaseConfigurationTransferData } from './subscriptionSchedulePhaseConfigurationTransferData';
import { SubscriptionScheduleSubscription } from './subscriptionScheduleSubscription';
import { SubscriptionScheduleTestClock } from './subscriptionScheduleTestClock';
import { SubscriptionSchedulesResourceDefaultSettings } from './subscriptionSchedulesResourceDefaultSettings';
import { SubscriptionSchedulesResourceDefaultSettingsAutomaticTax } from './subscriptionSchedulesResourceDefaultSettingsAutomaticTax';
import { SubscriptionSchedulesResourceDefaultSettingsDefaultPaymentMethod } from './subscriptionSchedulesResourceDefaultSettingsDefaultPaymentMethod';
import { SubscriptionSchedulesResourceDefaultSettingsInvoiceSettings } from './subscriptionSchedulesResourceDefaultSettingsInvoiceSettings';
import { SubscriptionSchedulesResourceScheduleList } from './subscriptionSchedulesResourceScheduleList';
import { SubscriptionTestClock } from './subscriptionTestClock';
import { SubscriptionTransferData } from './subscriptionTransferData';
import { SubscriptionTransferData1 } from './subscriptionTransferData1';
import { SubscriptionTrialSettings } from './subscriptionTrialSettings';
import { SubscriptionsItemsSubscriptionItemList } from './subscriptionsItemsSubscriptionItemList';
import { SubscriptionsResourcePauseCollection } from './subscriptionsResourcePauseCollection';
import { SubscriptionsResourcePaymentMethodOptions } from './subscriptionsResourcePaymentMethodOptions';
import { SubscriptionsResourcePaymentMethodOptionsAcssDebit } from './subscriptionsResourcePaymentMethodOptionsAcssDebit';
import { SubscriptionsResourcePaymentMethodOptionsBancontact } from './subscriptionsResourcePaymentMethodOptionsBancontact';
import { SubscriptionsResourcePaymentMethodOptionsCard } from './subscriptionsResourcePaymentMethodOptionsCard';
import { SubscriptionsResourcePaymentMethodOptionsCustomerBalance } from './subscriptionsResourcePaymentMethodOptionsCustomerBalance';
import { SubscriptionsResourcePaymentMethodOptionsKonbini } from './subscriptionsResourcePaymentMethodOptionsKonbini';
import { SubscriptionsResourcePaymentMethodOptionsUsBankAccount } from './subscriptionsResourcePaymentMethodOptionsUsBankAccount';
import { SubscriptionsResourcePaymentSettings } from './subscriptionsResourcePaymentSettings';
import { SubscriptionsResourcePaymentSettingsPaymentMethodOptions } from './subscriptionsResourcePaymentSettingsPaymentMethodOptions';
import { SubscriptionsResourcePendingUpdate } from './subscriptionsResourcePendingUpdate';
import { SubscriptionsSubscriptionList } from './subscriptionsSubscriptionList';
import { SubscriptionsTrialsResourceEndBehavior } from './subscriptionsTrialsResourceEndBehavior';
import { SubscriptionsTrialsResourceTrialSettings } from './subscriptionsTrialsResourceTrialSettings';
import { TaxCode } from './taxCode';
import { TaxDeductedAtSource } from './taxDeductedAtSource';
import { TaxIDsList } from './taxIDsList';
import { TaxIDsList1 } from './taxIDsList1';
import { TaxId } from './taxId';
import { TaxIdCustomer } from './taxIdCustomer';
import { TaxIdVerification } from './taxIdVerification';
import { TaxIdVerification1 } from './taxIdVerification1';
import { TaxParam } from './taxParam';
import { TaxProductResourceTaxCodeList } from './taxProductResourceTaxCodeList';
import { TaxRate } from './taxRate';
import { TaxRatesList } from './taxRatesList';
import { TerminalConfiguration } from './terminalConfiguration';
import { TerminalConfigurationConfigurationList } from './terminalConfigurationConfigurationList';
import { TerminalConfigurationConfigurationResourceCurrencySpecificConfig } from './terminalConfigurationConfigurationResourceCurrencySpecificConfig';
import { TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig } from './terminalConfigurationConfigurationResourceDeviceTypeSpecificConfig';
import { TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfigSplashscreen } from './terminalConfigurationConfigurationResourceDeviceTypeSpecificConfigSplashscreen';
import { TerminalConfigurationConfigurationResourceTipping } from './terminalConfigurationConfigurationResourceTipping';
import { TerminalConnectionToken } from './terminalConnectionToken';
import { TerminalLocation } from './terminalLocation';
import { TerminalLocationLocationList } from './terminalLocationLocationList';
import { TerminalReader } from './terminalReader';
import { TerminalReaderAction } from './terminalReaderAction';
import { TerminalReaderLocation } from './terminalReaderLocation';
import { TerminalReaderReaderResourceCart } from './terminalReaderReaderResourceCart';
import { TerminalReaderReaderResourceLineItem } from './terminalReaderReaderResourceLineItem';
import { TerminalReaderReaderResourceProcessConfig } from './terminalReaderReaderResourceProcessConfig';
import { TerminalReaderReaderResourceProcessPaymentIntentAction } from './terminalReaderReaderResourceProcessPaymentIntentAction';
import { TerminalReaderReaderResourceProcessPaymentIntentActionPaymentIntent } from './terminalReaderReaderResourceProcessPaymentIntentActionPaymentIntent';
import { TerminalReaderReaderResourceProcessSetupIntentAction } from './terminalReaderReaderResourceProcessSetupIntentAction';
import { TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent } from './terminalReaderReaderResourceProcessSetupIntentActionSetupIntent';
import { TerminalReaderReaderResourceReaderAction } from './terminalReaderReaderResourceReaderAction';
import { TerminalReaderReaderResourceRefundPaymentAction } from './terminalReaderReaderResourceRefundPaymentAction';
import { TerminalReaderReaderResourceRefundPaymentActionCharge } from './terminalReaderReaderResourceRefundPaymentActionCharge';
import { TerminalReaderReaderResourceRefundPaymentActionPaymentIntent } from './terminalReaderReaderResourceRefundPaymentActionPaymentIntent';
import { TerminalReaderReaderResourceRefundPaymentActionRefund } from './terminalReaderReaderResourceRefundPaymentActionRefund';
import { TerminalReaderReaderResourceSetReaderDisplayAction } from './terminalReaderReaderResourceSetReaderDisplayAction';
import { TerminalReaderReaderResourceSetReaderDisplayActionCart } from './terminalReaderReaderResourceSetReaderDisplayActionCart';
import { TerminalReaderReaderResourceTippingConfig } from './terminalReaderReaderResourceTippingConfig';
import { TerminalReaderRetrieveReader } from './terminalReaderRetrieveReader';
import { TestHelpersTestClock } from './testHelpersTestClock';
import { ThreeDSecureDetails } from './threeDSecureDetails';
import { ThreeDSecureUsage } from './threeDSecureUsage';
import { Token } from './token';
import { Topup } from './topup';
import { TopupBalanceTransaction } from './topupBalanceTransaction';
import { TopupList } from './topupList';
import { TopupSource } from './topupSource';
import { Transfer } from './transfer';
import { TransferBalanceTransaction } from './transferBalanceTransaction';
import { TransferData } from './transferData';
import { TransferDataDestination } from './transferDataDestination';
import { TransferDestination } from './transferDestination';
import { TransferDestinationPayment } from './transferDestinationPayment';
import { TransferList } from './transferList';
import { TransferReversal } from './transferReversal';
import { TransferReversalDestinationPaymentRefund } from './transferReversalDestinationPaymentRefund';
import { TransferReversalList } from './transferReversalList';
import { TransferReversalList1 } from './transferReversalList1';
import { TransferReversalSourceRefund } from './transferReversalSourceRefund';
import { TransferReversalTransfer } from './transferReversalTransfer';
import { TransferSchedule } from './transferSchedule';
import { TransferSourceTransaction } from './transferSourceTransaction';
import { TransformQuantity } from './transformQuantity';
import { TransformUsage } from './transformUsage';
import { TreasuryCreditReversal } from './treasuryCreditReversal';
import { TreasuryCreditReversalTransaction } from './treasuryCreditReversalTransaction';
import { TreasuryDebitReversal } from './treasuryDebitReversal';
import { TreasuryDebitReversalLinkedFlows } from './treasuryDebitReversalLinkedFlows';
import { TreasuryFinancialAccount } from './treasuryFinancialAccount';
import { TreasuryFinancialAccountFeatures } from './treasuryFinancialAccountFeatures';
import { TreasuryFinancialAccountPlatformRestrictions } from './treasuryFinancialAccountPlatformRestrictions';
import { TreasuryFinancialAccountsResourceAbaRecord } from './treasuryFinancialAccountsResourceAbaRecord';
import { TreasuryFinancialAccountsResourceAchToggleSettings } from './treasuryFinancialAccountsResourceAchToggleSettings';
import { TreasuryFinancialAccountsResourceBalance } from './treasuryFinancialAccountsResourceBalance';
import { TreasuryFinancialAccountsResourceClosedStatusDetails } from './treasuryFinancialAccountsResourceClosedStatusDetails';
import { TreasuryFinancialAccountsResourceFinancialAccountList } from './treasuryFinancialAccountsResourceFinancialAccountList';
import { TreasuryFinancialAccountsResourceFinancialAddress } from './treasuryFinancialAccountsResourceFinancialAddress';
import { TreasuryFinancialAccountsResourceFinancialAddressesFeatures } from './treasuryFinancialAccountsResourceFinancialAddressesFeatures';
import { TreasuryFinancialAccountsResourceInboundTransfers } from './treasuryFinancialAccountsResourceInboundTransfers';
import { TreasuryFinancialAccountsResourceOutboundPayments } from './treasuryFinancialAccountsResourceOutboundPayments';
import { TreasuryFinancialAccountsResourceOutboundTransfers } from './treasuryFinancialAccountsResourceOutboundTransfers';
import { TreasuryFinancialAccountsResourcePlatformRestrictions } from './treasuryFinancialAccountsResourcePlatformRestrictions';
import { TreasuryFinancialAccountsResourceStatusDetails } from './treasuryFinancialAccountsResourceStatusDetails';
import { TreasuryFinancialAccountsResourceStatusDetailsClosed } from './treasuryFinancialAccountsResourceStatusDetailsClosed';
import { TreasuryFinancialAccountsResourceToggleSettings } from './treasuryFinancialAccountsResourceToggleSettings';
import { TreasuryFinancialAccountsResourceTogglesSettingStatusDetails } from './treasuryFinancialAccountsResourceTogglesSettingStatusDetails';
import { TreasuryInboundTransfer } from './treasuryInboundTransfer';
import { TreasuryInboundTransferFailureDetails } from './treasuryInboundTransferFailureDetails';
import { TreasuryInboundTransferOriginPaymentMethodDetails } from './treasuryInboundTransferOriginPaymentMethodDetails';
import { TreasuryInboundTransfersResourceFailureDetails } from './treasuryInboundTransfersResourceFailureDetails';
import { TreasuryInboundTransfersResourceInboundTransferList } from './treasuryInboundTransfersResourceInboundTransferList';
import { TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows } from './treasuryInboundTransfersResourceInboundTransferResourceLinkedFlows';
import { TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions } from './treasuryInboundTransfersResourceInboundTransferResourceStatusTransitions';
import { TreasuryOutboundPayment } from './treasuryOutboundPayment';
import { TreasuryOutboundPaymentDestinationPaymentMethodDetails } from './treasuryOutboundPaymentDestinationPaymentMethodDetails';
import { TreasuryOutboundPaymentEndUserDetails } from './treasuryOutboundPaymentEndUserDetails';
import { TreasuryOutboundPaymentReturnedDetails } from './treasuryOutboundPaymentReturnedDetails';
import { TreasuryOutboundPaymentTransaction } from './treasuryOutboundPaymentTransaction';
import { TreasuryOutboundPaymentsResourceOutboundPaymentList } from './treasuryOutboundPaymentsResourceOutboundPaymentList';
import { TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails } from './treasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails';
import { TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions } from './treasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions';
import { TreasuryOutboundPaymentsResourceReturnedStatus } from './treasuryOutboundPaymentsResourceReturnedStatus';
import { TreasuryOutboundTransfer } from './treasuryOutboundTransfer';
import { TreasuryOutboundTransferReturnedDetails } from './treasuryOutboundTransferReturnedDetails';
import { TreasuryOutboundTransfersResourceOutboundTransferList } from './treasuryOutboundTransfersResourceOutboundTransferList';
import { TreasuryOutboundTransfersResourceReturnedDetails } from './treasuryOutboundTransfersResourceReturnedDetails';
import { TreasuryOutboundTransfersResourceStatusTransitions } from './treasuryOutboundTransfersResourceStatusTransitions';
import { TreasuryReceivedCredit } from './treasuryReceivedCredit';
import { TreasuryReceivedCreditReversalDetails } from './treasuryReceivedCreditReversalDetails';
import { TreasuryReceivedCreditsResourceCreditReversalList } from './treasuryReceivedCreditsResourceCreditReversalList';
import { TreasuryReceivedCreditsResourceLinkedFlows } from './treasuryReceivedCreditsResourceLinkedFlows';
import { TreasuryReceivedCreditsResourceLinkedFlowsSourceFlowDetails } from './treasuryReceivedCreditsResourceLinkedFlowsSourceFlowDetails';
import { TreasuryReceivedCreditsResourceReceivedCreditList } from './treasuryReceivedCreditsResourceReceivedCreditList';
import { TreasuryReceivedCreditsResourceReversalDetails } from './treasuryReceivedCreditsResourceReversalDetails';
import { TreasuryReceivedCreditsResourceSourceFlowsDetails } from './treasuryReceivedCreditsResourceSourceFlowsDetails';
import { TreasuryReceivedCreditsResourceStatusTransitions } from './treasuryReceivedCreditsResourceStatusTransitions';
import { TreasuryReceivedDebit } from './treasuryReceivedDebit';
import { TreasuryReceivedDebitReversalDetails } from './treasuryReceivedDebitReversalDetails';
import { TreasuryReceivedDebitsResourceDebitReversalLinkedFlows } from './treasuryReceivedDebitsResourceDebitReversalLinkedFlows';
import { TreasuryReceivedDebitsResourceDebitReversalList } from './treasuryReceivedDebitsResourceDebitReversalList';
import { TreasuryReceivedDebitsResourceLinkedFlows } from './treasuryReceivedDebitsResourceLinkedFlows';
import { TreasuryReceivedDebitsResourceReceivedDebitList } from './treasuryReceivedDebitsResourceReceivedDebitList';
import { TreasuryReceivedDebitsResourceReversalDetails } from './treasuryReceivedDebitsResourceReversalDetails';
import { TreasuryReceivedDebitsResourceStatusTransitions } from './treasuryReceivedDebitsResourceStatusTransitions';
import { TreasurySharedResourceBillingDetails } from './treasurySharedResourceBillingDetails';
import { TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails } from './treasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails';
import { TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount } from './treasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount';
import { TreasuryTransaction } from './treasuryTransaction';
import { TreasuryTransactionEntry } from './treasuryTransactionEntry';
import { TreasuryTransactionEntryFlowDetails } from './treasuryTransactionEntryFlowDetails';
import { TreasuryTransactionFlowDetails } from './treasuryTransactionFlowDetails';
import { TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions } from './treasuryTransactionsResourceAbstractTransactionResourceStatusTransitions';
import { TreasuryTransactionsResourceBalanceImpact } from './treasuryTransactionsResourceBalanceImpact';
import { TreasuryTransactionsResourceFlowDetails } from './treasuryTransactionsResourceFlowDetails';
import { TreasuryTransactionsResourceTransactionEntryList } from './treasuryTransactionsResourceTransactionEntryList';
import { TreasuryTransactionsResourceTransactionEntryList1 } from './treasuryTransactionsResourceTransactionEntryList1';
import { TreasuryTransactionsResourceTransactionList } from './treasuryTransactionsResourceTransactionList';
import { UsBankAccountNetworks } from './usBankAccountNetworks';
import { UsageEventsResourceUsageRecordSummaryList } from './usageEventsResourceUsageRecordSummaryList';
import { UsageRecord } from './usageRecord';
import { UsageRecordSummary } from './usageRecordSummary';
import { VerificationSessionRedaction } from './verificationSessionRedaction';
import { WebhookEndpoint } from './webhookEndpoint';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "APIMethodRefundList.ObjectEnum": APIMethodRefundList.ObjectEnum,
        "Account.BusinessTypeEnum": Account.BusinessTypeEnum,
        "Account.ObjectEnum": Account.ObjectEnum,
        "Account.TypeEnum": Account.TypeEnum,
        "AccountBrandingSettingsIcon.ObjectEnum": AccountBrandingSettingsIcon.ObjectEnum,
        "AccountBrandingSettingsIcon.PurposeEnum": AccountBrandingSettingsIcon.PurposeEnum,
        "AccountBrandingSettingsLogo.ObjectEnum": AccountBrandingSettingsLogo.ObjectEnum,
        "AccountBrandingSettingsLogo.PurposeEnum": AccountBrandingSettingsLogo.PurposeEnum,
        "AccountCapabilities.AcssDebitPaymentsEnum": AccountCapabilities.AcssDebitPaymentsEnum,
        "AccountCapabilities.AffirmPaymentsEnum": AccountCapabilities.AffirmPaymentsEnum,
        "AccountCapabilities.AfterpayClearpayPaymentsEnum": AccountCapabilities.AfterpayClearpayPaymentsEnum,
        "AccountCapabilities.AuBecsDebitPaymentsEnum": AccountCapabilities.AuBecsDebitPaymentsEnum,
        "AccountCapabilities.BacsDebitPaymentsEnum": AccountCapabilities.BacsDebitPaymentsEnum,
        "AccountCapabilities.BancontactPaymentsEnum": AccountCapabilities.BancontactPaymentsEnum,
        "AccountCapabilities.BankTransferPaymentsEnum": AccountCapabilities.BankTransferPaymentsEnum,
        "AccountCapabilities.BlikPaymentsEnum": AccountCapabilities.BlikPaymentsEnum,
        "AccountCapabilities.BoletoPaymentsEnum": AccountCapabilities.BoletoPaymentsEnum,
        "AccountCapabilities.CardIssuingEnum": AccountCapabilities.CardIssuingEnum,
        "AccountCapabilities.CardPaymentsEnum": AccountCapabilities.CardPaymentsEnum,
        "AccountCapabilities.CartesBancairesPaymentsEnum": AccountCapabilities.CartesBancairesPaymentsEnum,
        "AccountCapabilities.EpsPaymentsEnum": AccountCapabilities.EpsPaymentsEnum,
        "AccountCapabilities.FpxPaymentsEnum": AccountCapabilities.FpxPaymentsEnum,
        "AccountCapabilities.GiropayPaymentsEnum": AccountCapabilities.GiropayPaymentsEnum,
        "AccountCapabilities.GrabpayPaymentsEnum": AccountCapabilities.GrabpayPaymentsEnum,
        "AccountCapabilities.IdealPaymentsEnum": AccountCapabilities.IdealPaymentsEnum,
        "AccountCapabilities.IndiaInternationalPaymentsEnum": AccountCapabilities.IndiaInternationalPaymentsEnum,
        "AccountCapabilities.JcbPaymentsEnum": AccountCapabilities.JcbPaymentsEnum,
        "AccountCapabilities.KlarnaPaymentsEnum": AccountCapabilities.KlarnaPaymentsEnum,
        "AccountCapabilities.KonbiniPaymentsEnum": AccountCapabilities.KonbiniPaymentsEnum,
        "AccountCapabilities.LegacyPaymentsEnum": AccountCapabilities.LegacyPaymentsEnum,
        "AccountCapabilities.LinkPaymentsEnum": AccountCapabilities.LinkPaymentsEnum,
        "AccountCapabilities.OxxoPaymentsEnum": AccountCapabilities.OxxoPaymentsEnum,
        "AccountCapabilities.P24PaymentsEnum": AccountCapabilities.P24PaymentsEnum,
        "AccountCapabilities.PaynowPaymentsEnum": AccountCapabilities.PaynowPaymentsEnum,
        "AccountCapabilities.PromptpayPaymentsEnum": AccountCapabilities.PromptpayPaymentsEnum,
        "AccountCapabilities.SepaDebitPaymentsEnum": AccountCapabilities.SepaDebitPaymentsEnum,
        "AccountCapabilities.SofortPaymentsEnum": AccountCapabilities.SofortPaymentsEnum,
        "AccountCapabilities.TaxReportingUs1099KEnum": AccountCapabilities.TaxReportingUs1099KEnum,
        "AccountCapabilities.TaxReportingUs1099MiscEnum": AccountCapabilities.TaxReportingUs1099MiscEnum,
        "AccountCapabilities.TransfersEnum": AccountCapabilities.TransfersEnum,
        "AccountCapabilities.TreasuryEnum": AccountCapabilities.TreasuryEnum,
        "AccountCapabilities.UsBankAccountAchPaymentsEnum": AccountCapabilities.UsBankAccountAchPaymentsEnum,
        "AccountLink.ObjectEnum": AccountLink.ObjectEnum,
        "AccountList.ObjectEnum": AccountList.ObjectEnum,
        "AccountRequirementsError.CodeEnum": AccountRequirementsError.CodeEnum,
        "AccountUnificationAccountController.TypeEnum": AccountUnificationAccountController.TypeEnum,
        "AllPricesRecurringParams.IntervalEnum": AllPricesRecurringParams.IntervalEnum,
        "AllPricesRecurringParams.UsageTypeEnum": AllPricesRecurringParams.UsageTypeEnum,
        "ApiErrors.TypeEnum": ApiErrors.TypeEnum,
        "ApmsSourcesSourceList.ObjectEnum": ApmsSourcesSourceList.ObjectEnum,
        "ApmsSourcesSourceList1.ObjectEnum": ApmsSourcesSourceList1.ObjectEnum,
        "ApmsSourcesSourceTransactionList.ObjectEnum": ApmsSourcesSourceTransactionList.ObjectEnum,
        "ApplePayDomain.ObjectEnum": ApplePayDomain.ObjectEnum,
        "ApplePayDomainList.ObjectEnum": ApplePayDomainList.ObjectEnum,
        "Application.ObjectEnum": Application.ObjectEnum,
        "ApplicationFee.ObjectEnum": ApplicationFee.ObjectEnum,
        "ApplicationFeeAccount.BusinessTypeEnum": ApplicationFeeAccount.BusinessTypeEnum,
        "ApplicationFeeAccount.ObjectEnum": ApplicationFeeAccount.ObjectEnum,
        "ApplicationFeeAccount.TypeEnum": ApplicationFeeAccount.TypeEnum,
        "ApplicationFeeApplication.ObjectEnum": ApplicationFeeApplication.ObjectEnum,
        "ApplicationFeeBalanceTransaction.ObjectEnum": ApplicationFeeBalanceTransaction.ObjectEnum,
        "ApplicationFeeBalanceTransaction.TypeEnum": ApplicationFeeBalanceTransaction.TypeEnum,
        "ApplicationFeeCharge.ObjectEnum": ApplicationFeeCharge.ObjectEnum,
        "ApplicationFeeCharge.StatusEnum": ApplicationFeeCharge.StatusEnum,
        "ApplicationFeeOriginatingTransaction.ObjectEnum": ApplicationFeeOriginatingTransaction.ObjectEnum,
        "ApplicationFeeOriginatingTransaction.StatusEnum": ApplicationFeeOriginatingTransaction.StatusEnum,
        "AppsSecret.ObjectEnum": AppsSecret.ObjectEnum,
        "AutomaticTax.StatusEnum": AutomaticTax.StatusEnum,
        "Balance.ObjectEnum": Balance.ObjectEnum,
        "BalanceTransaction.ObjectEnum": BalanceTransaction.ObjectEnum,
        "BalanceTransaction.TypeEnum": BalanceTransaction.TypeEnum,
        "BalanceTransactionSource.ObjectEnum": BalanceTransactionSource.ObjectEnum,
        "BalanceTransactionSource.StatusEnum": BalanceTransactionSource.StatusEnum,
        "BalanceTransactionSource.ReasonEnum": BalanceTransactionSource.ReasonEnum,
        "BalanceTransactionSource.AuthorizationMethodEnum": BalanceTransactionSource.AuthorizationMethodEnum,
        "BalanceTransactionSource.WalletEnum": BalanceTransactionSource.WalletEnum,
        "BalanceTransactionSource1.ObjectEnum": BalanceTransactionSource1.ObjectEnum,
        "BalanceTransactionSource1.StatusEnum": BalanceTransactionSource1.StatusEnum,
        "BalanceTransactionSource1.ReasonEnum": BalanceTransactionSource1.ReasonEnum,
        "BalanceTransactionSource1.AuthorizationMethodEnum": BalanceTransactionSource1.AuthorizationMethodEnum,
        "BalanceTransactionSource1.WalletEnum": BalanceTransactionSource1.WalletEnum,
        "BalanceTransactionsList.ObjectEnum": BalanceTransactionsList.ObjectEnum,
        "BankAccount.AvailablePayoutMethodsEnum": BankAccount.AvailablePayoutMethodsEnum,
        "BankAccount.ObjectEnum": BankAccount.ObjectEnum,
        "BankAccountAccount.BusinessTypeEnum": BankAccountAccount.BusinessTypeEnum,
        "BankAccountAccount.ObjectEnum": BankAccountAccount.ObjectEnum,
        "BankAccountAccount.TypeEnum": BankAccountAccount.TypeEnum,
        "BankAccountCustomer.ObjectEnum": BankAccountCustomer.ObjectEnum,
        "BankAccountCustomer.TaxExemptEnum": BankAccountCustomer.TaxExemptEnum,
        "BankAccountCustomer.DeletedEnum": BankAccountCustomer.DeletedEnum,
        "BankConnectionsResourceAccountholder.TypeEnum": BankConnectionsResourceAccountholder.TypeEnum,
        "BankConnectionsResourceAccountholderAccount.BusinessTypeEnum": BankConnectionsResourceAccountholderAccount.BusinessTypeEnum,
        "BankConnectionsResourceAccountholderAccount.ObjectEnum": BankConnectionsResourceAccountholderAccount.ObjectEnum,
        "BankConnectionsResourceAccountholderAccount.TypeEnum": BankConnectionsResourceAccountholderAccount.TypeEnum,
        "BankConnectionsResourceAccountholderCustomer.ObjectEnum": BankConnectionsResourceAccountholderCustomer.ObjectEnum,
        "BankConnectionsResourceAccountholderCustomer.TaxExemptEnum": BankConnectionsResourceAccountholderCustomer.TaxExemptEnum,
        "BankConnectionsResourceBalance.TypeEnum": BankConnectionsResourceBalance.TypeEnum,
        "BankConnectionsResourceBalanceRefresh.StatusEnum": BankConnectionsResourceBalanceRefresh.StatusEnum,
        "BankConnectionsResourceLinkedAccountList.ObjectEnum": BankConnectionsResourceLinkedAccountList.ObjectEnum,
        "BankConnectionsResourceLinkedAccountList1.ObjectEnum": BankConnectionsResourceLinkedAccountList1.ObjectEnum,
        "BankConnectionsResourceOwnerList.ObjectEnum": BankConnectionsResourceOwnerList.ObjectEnum,
        "BankConnectionsResourceOwnerList1.ObjectEnum": BankConnectionsResourceOwnerList1.ObjectEnum,
        "BankConnectionsResourceOwnershipRefresh.StatusEnum": BankConnectionsResourceOwnershipRefresh.StatusEnum,
        "BillingClocksResourceBillingClockList.ObjectEnum": BillingClocksResourceBillingClockList.ObjectEnum,
        "BillingPortalConfiguration.ObjectEnum": BillingPortalConfiguration.ObjectEnum,
        "BillingPortalConfigurationApplication.ObjectEnum": BillingPortalConfigurationApplication.ObjectEnum,
        "BillingPortalConfigurationApplication.DeletedEnum": BillingPortalConfigurationApplication.DeletedEnum,
        "BillingPortalSession.LocaleEnum": BillingPortalSession.LocaleEnum,
        "BillingPortalSession.ObjectEnum": BillingPortalSession.ObjectEnum,
        "BillingPortalSessionConfiguration.ObjectEnum": BillingPortalSessionConfiguration.ObjectEnum,
        "BillingPortalSessionFlow.TypeEnum": BillingPortalSessionFlow.TypeEnum,
        "BusinessProfileSpecsSupportUrlAnyOf": BusinessProfileSpecsSupportUrlAnyOf,
        "Capability.ObjectEnum": Capability.ObjectEnum,
        "Capability.StatusEnum": Capability.StatusEnum,
        "CapabilityAccount.BusinessTypeEnum": CapabilityAccount.BusinessTypeEnum,
        "CapabilityAccount.ObjectEnum": CapabilityAccount.ObjectEnum,
        "CapabilityAccount.TypeEnum": CapabilityAccount.TypeEnum,
        "Card.AvailablePayoutMethodsEnum": Card.AvailablePayoutMethodsEnum,
        "Card.ObjectEnum": Card.ObjectEnum,
        "CardAccount.BusinessTypeEnum": CardAccount.BusinessTypeEnum,
        "CardAccount.ObjectEnum": CardAccount.ObjectEnum,
        "CardAccount.TypeEnum": CardAccount.TypeEnum,
        "CardCustomer.ObjectEnum": CardCustomer.ObjectEnum,
        "CardCustomer.TaxExemptEnum": CardCustomer.TaxExemptEnum,
        "CardCustomer.DeletedEnum": CardCustomer.DeletedEnum,
        "CashBalance.ObjectEnum": CashBalance.ObjectEnum,
        "Charge.ObjectEnum": Charge.ObjectEnum,
        "Charge.StatusEnum": Charge.StatusEnum,
        "ChargeApplication.ObjectEnum": ChargeApplication.ObjectEnum,
        "ChargeApplicationFee.ObjectEnum": ChargeApplicationFee.ObjectEnum,
        "ChargeBalanceTransaction.ObjectEnum": ChargeBalanceTransaction.ObjectEnum,
        "ChargeBalanceTransaction.TypeEnum": ChargeBalanceTransaction.TypeEnum,
        "ChargeCustomer.ObjectEnum": ChargeCustomer.ObjectEnum,
        "ChargeCustomer.TaxExemptEnum": ChargeCustomer.TaxExemptEnum,
        "ChargeCustomer.DeletedEnum": ChargeCustomer.DeletedEnum,
        "ChargeDestination.BusinessTypeEnum": ChargeDestination.BusinessTypeEnum,
        "ChargeDestination.ObjectEnum": ChargeDestination.ObjectEnum,
        "ChargeDestination.TypeEnum": ChargeDestination.TypeEnum,
        "ChargeDispute.ObjectEnum": ChargeDispute.ObjectEnum,
        "ChargeDispute.StatusEnum": ChargeDispute.StatusEnum,
        "ChargeFailureBalanceTransaction.ObjectEnum": ChargeFailureBalanceTransaction.ObjectEnum,
        "ChargeFailureBalanceTransaction.TypeEnum": ChargeFailureBalanceTransaction.TypeEnum,
        "ChargeInvoice.BillingReasonEnum": ChargeInvoice.BillingReasonEnum,
        "ChargeInvoice.CollectionMethodEnum": ChargeInvoice.CollectionMethodEnum,
        "ChargeInvoice.CustomerTaxExemptEnum": ChargeInvoice.CustomerTaxExemptEnum,
        "ChargeInvoice.ObjectEnum": ChargeInvoice.ObjectEnum,
        "ChargeInvoice.StatusEnum": ChargeInvoice.StatusEnum,
        "ChargeList.ObjectEnum": ChargeList.ObjectEnum,
        "ChargeOnBehalfOf.BusinessTypeEnum": ChargeOnBehalfOf.BusinessTypeEnum,
        "ChargeOnBehalfOf.ObjectEnum": ChargeOnBehalfOf.ObjectEnum,
        "ChargeOnBehalfOf.TypeEnum": ChargeOnBehalfOf.TypeEnum,
        "ChargePaymentIntent.CancellationReasonEnum": ChargePaymentIntent.CancellationReasonEnum,
        "ChargePaymentIntent.CaptureMethodEnum": ChargePaymentIntent.CaptureMethodEnum,
        "ChargePaymentIntent.ConfirmationMethodEnum": ChargePaymentIntent.ConfirmationMethodEnum,
        "ChargePaymentIntent.ObjectEnum": ChargePaymentIntent.ObjectEnum,
        "ChargePaymentIntent.SetupFutureUsageEnum": ChargePaymentIntent.SetupFutureUsageEnum,
        "ChargePaymentIntent.StatusEnum": ChargePaymentIntent.StatusEnum,
        "ChargeReview.ClosedReasonEnum": ChargeReview.ClosedReasonEnum,
        "ChargeReview.ObjectEnum": ChargeReview.ObjectEnum,
        "ChargeReview.OpenedReasonEnum": ChargeReview.OpenedReasonEnum,
        "ChargeSource.BusinessTypeEnum": ChargeSource.BusinessTypeEnum,
        "ChargeSource.ObjectEnum": ChargeSource.ObjectEnum,
        "ChargeSource.TypeEnum": ChargeSource.TypeEnum,
        "ChargeSource.AvailablePayoutMethodsEnum": ChargeSource.AvailablePayoutMethodsEnum,
        "ChargeSourceTransfer.ObjectEnum": ChargeSourceTransfer.ObjectEnum,
        "ChargeTransfer.ObjectEnum": ChargeTransfer.ObjectEnum,
        "ChargeTransferDataDestination.BusinessTypeEnum": ChargeTransferDataDestination.BusinessTypeEnum,
        "ChargeTransferDataDestination.ObjectEnum": ChargeTransferDataDestination.ObjectEnum,
        "ChargeTransferDataDestination.TypeEnum": ChargeTransferDataDestination.TypeEnum,
        "CheckoutAcssDebitMandateOptions.DefaultForEnum": CheckoutAcssDebitMandateOptions.DefaultForEnum,
        "CheckoutAcssDebitMandateOptions.PaymentScheduleEnum": CheckoutAcssDebitMandateOptions.PaymentScheduleEnum,
        "CheckoutAcssDebitMandateOptions.TransactionTypeEnum": CheckoutAcssDebitMandateOptions.TransactionTypeEnum,
        "CheckoutAcssDebitPaymentMethodOptions.CurrencyEnum": CheckoutAcssDebitPaymentMethodOptions.CurrencyEnum,
        "CheckoutAcssDebitPaymentMethodOptions.SetupFutureUsageEnum": CheckoutAcssDebitPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutAcssDebitPaymentMethodOptions.VerificationMethodEnum": CheckoutAcssDebitPaymentMethodOptions.VerificationMethodEnum,
        "CheckoutAffirmPaymentMethodOptions.SetupFutureUsageEnum": CheckoutAffirmPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutAfterpayClearpayPaymentMethodOptions.SetupFutureUsageEnum": CheckoutAfterpayClearpayPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutAlipayPaymentMethodOptions.SetupFutureUsageEnum": CheckoutAlipayPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutAuBecsDebitPaymentMethodOptions.SetupFutureUsageEnum": CheckoutAuBecsDebitPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutBacsDebitPaymentMethodOptions.SetupFutureUsageEnum": CheckoutBacsDebitPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutBancontactPaymentMethodOptions.SetupFutureUsageEnum": CheckoutBancontactPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutBoletoPaymentMethodOptions.SetupFutureUsageEnum": CheckoutBoletoPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutCardPaymentMethodOptions.SetupFutureUsageEnum": CheckoutCardPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutCustomerBalanceBankTransferPaymentMethodOptions.RequestedAddressTypesEnum": CheckoutCustomerBalanceBankTransferPaymentMethodOptions.RequestedAddressTypesEnum,
        "CheckoutCustomerBalanceBankTransferPaymentMethodOptions.TypeEnum": CheckoutCustomerBalanceBankTransferPaymentMethodOptions.TypeEnum,
        "CheckoutCustomerBalancePaymentMethodOptions.FundingTypeEnum": CheckoutCustomerBalancePaymentMethodOptions.FundingTypeEnum,
        "CheckoutCustomerBalancePaymentMethodOptions.SetupFutureUsageEnum": CheckoutCustomerBalancePaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutEpsPaymentMethodOptions.SetupFutureUsageEnum": CheckoutEpsPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutFpxPaymentMethodOptions.SetupFutureUsageEnum": CheckoutFpxPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutGiropayPaymentMethodOptions.SetupFutureUsageEnum": CheckoutGiropayPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutGrabPayPaymentMethodOptions.SetupFutureUsageEnum": CheckoutGrabPayPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutIdealPaymentMethodOptions.SetupFutureUsageEnum": CheckoutIdealPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutKlarnaPaymentMethodOptions.SetupFutureUsageEnum": CheckoutKlarnaPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutKonbiniPaymentMethodOptions.SetupFutureUsageEnum": CheckoutKonbiniPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutOxxoPaymentMethodOptions.SetupFutureUsageEnum": CheckoutOxxoPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutP24PaymentMethodOptions.SetupFutureUsageEnum": CheckoutP24PaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutPaynowPaymentMethodOptions.SetupFutureUsageEnum": CheckoutPaynowPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutSepaDebitPaymentMethodOptions.SetupFutureUsageEnum": CheckoutSepaDebitPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutSession.BillingAddressCollectionEnum": CheckoutSession.BillingAddressCollectionEnum,
        "CheckoutSession.CustomerCreationEnum": CheckoutSession.CustomerCreationEnum,
        "CheckoutSession.LocaleEnum": CheckoutSession.LocaleEnum,
        "CheckoutSession.ModeEnum": CheckoutSession.ModeEnum,
        "CheckoutSession.ObjectEnum": CheckoutSession.ObjectEnum,
        "CheckoutSession.PaymentMethodCollectionEnum": CheckoutSession.PaymentMethodCollectionEnum,
        "CheckoutSession.PaymentStatusEnum": CheckoutSession.PaymentStatusEnum,
        "CheckoutSession.StatusEnum": CheckoutSession.StatusEnum,
        "CheckoutSession.SubmitTypeEnum": CheckoutSession.SubmitTypeEnum,
        "CheckoutSessionConsent.PromotionsEnum": CheckoutSessionConsent.PromotionsEnum,
        "CheckoutSessionConsent.TermsOfServiceEnum": CheckoutSessionConsent.TermsOfServiceEnum,
        "CheckoutSessionConsentCollection.PromotionsEnum": CheckoutSessionConsentCollection.PromotionsEnum,
        "CheckoutSessionConsentCollection.TermsOfServiceEnum": CheckoutSessionConsentCollection.TermsOfServiceEnum,
        "CheckoutSessionCustomer.ObjectEnum": CheckoutSessionCustomer.ObjectEnum,
        "CheckoutSessionCustomer.TaxExemptEnum": CheckoutSessionCustomer.TaxExemptEnum,
        "CheckoutSessionCustomer.DeletedEnum": CheckoutSessionCustomer.DeletedEnum,
        "CheckoutSessionCustomerDetails.TaxExemptEnum": CheckoutSessionCustomerDetails.TaxExemptEnum,
        "CheckoutSessionInvoice.BillingReasonEnum": CheckoutSessionInvoice.BillingReasonEnum,
        "CheckoutSessionInvoice.CollectionMethodEnum": CheckoutSessionInvoice.CollectionMethodEnum,
        "CheckoutSessionInvoice.CustomerTaxExemptEnum": CheckoutSessionInvoice.CustomerTaxExemptEnum,
        "CheckoutSessionInvoice.ObjectEnum": CheckoutSessionInvoice.ObjectEnum,
        "CheckoutSessionInvoice.StatusEnum": CheckoutSessionInvoice.StatusEnum,
        "CheckoutSessionPaymentIntent.CancellationReasonEnum": CheckoutSessionPaymentIntent.CancellationReasonEnum,
        "CheckoutSessionPaymentIntent.CaptureMethodEnum": CheckoutSessionPaymentIntent.CaptureMethodEnum,
        "CheckoutSessionPaymentIntent.ConfirmationMethodEnum": CheckoutSessionPaymentIntent.ConfirmationMethodEnum,
        "CheckoutSessionPaymentIntent.ObjectEnum": CheckoutSessionPaymentIntent.ObjectEnum,
        "CheckoutSessionPaymentIntent.SetupFutureUsageEnum": CheckoutSessionPaymentIntent.SetupFutureUsageEnum,
        "CheckoutSessionPaymentIntent.StatusEnum": CheckoutSessionPaymentIntent.StatusEnum,
        "CheckoutSessionPaymentLink.BillingAddressCollectionEnum": CheckoutSessionPaymentLink.BillingAddressCollectionEnum,
        "CheckoutSessionPaymentLink.CustomerCreationEnum": CheckoutSessionPaymentLink.CustomerCreationEnum,
        "CheckoutSessionPaymentLink.ObjectEnum": CheckoutSessionPaymentLink.ObjectEnum,
        "CheckoutSessionPaymentLink.PaymentMethodCollectionEnum": CheckoutSessionPaymentLink.PaymentMethodCollectionEnum,
        "CheckoutSessionPaymentLink.PaymentMethodTypesEnum": CheckoutSessionPaymentLink.PaymentMethodTypesEnum,
        "CheckoutSessionPaymentLink.SubmitTypeEnum": CheckoutSessionPaymentLink.SubmitTypeEnum,
        "CheckoutSessionSetupIntent.CancellationReasonEnum": CheckoutSessionSetupIntent.CancellationReasonEnum,
        "CheckoutSessionSetupIntent.FlowDirectionsEnum": CheckoutSessionSetupIntent.FlowDirectionsEnum,
        "CheckoutSessionSetupIntent.ObjectEnum": CheckoutSessionSetupIntent.ObjectEnum,
        "CheckoutSessionSetupIntent.StatusEnum": CheckoutSessionSetupIntent.StatusEnum,
        "CheckoutSessionShippingAddressCollection.AllowedCountriesEnum": CheckoutSessionShippingAddressCollection.AllowedCountriesEnum,
        "CheckoutSessionSubscription.CollectionMethodEnum": CheckoutSessionSubscription.CollectionMethodEnum,
        "CheckoutSessionSubscription.ObjectEnum": CheckoutSessionSubscription.ObjectEnum,
        "CheckoutSessionSubscription.StatusEnum": CheckoutSessionSubscription.StatusEnum,
        "CheckoutSofortPaymentMethodOptions.SetupFutureUsageEnum": CheckoutSofortPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutUsBankAccountPaymentMethodOptions.SetupFutureUsageEnum": CheckoutUsBankAccountPaymentMethodOptions.SetupFutureUsageEnum,
        "CheckoutUsBankAccountPaymentMethodOptions.VerificationMethodEnum": CheckoutUsBankAccountPaymentMethodOptions.VerificationMethodEnum,
        "ConnectCollectionTransfer.ObjectEnum": ConnectCollectionTransfer.ObjectEnum,
        "ConnectCollectionTransferDestination.BusinessTypeEnum": ConnectCollectionTransferDestination.BusinessTypeEnum,
        "ConnectCollectionTransferDestination.ObjectEnum": ConnectCollectionTransferDestination.ObjectEnum,
        "ConnectCollectionTransferDestination.TypeEnum": ConnectCollectionTransferDestination.TypeEnum,
        "CountrySpec.ObjectEnum": CountrySpec.ObjectEnum,
        "CountrySpecList.ObjectEnum": CountrySpecList.ObjectEnum,
        "Coupon.DurationEnum": Coupon.DurationEnum,
        "Coupon.ObjectEnum": Coupon.ObjectEnum,
        "CouponsResourceCouponList.ObjectEnum": CouponsResourceCouponList.ObjectEnum,
        "CreditNote.ObjectEnum": CreditNote.ObjectEnum,
        "CreditNote.ReasonEnum": CreditNote.ReasonEnum,
        "CreditNote.StatusEnum": CreditNote.StatusEnum,
        "CreditNote.TypeEnum": CreditNote.TypeEnum,
        "CreditNoteCustomer.ObjectEnum": CreditNoteCustomer.ObjectEnum,
        "CreditNoteCustomer.TaxExemptEnum": CreditNoteCustomer.TaxExemptEnum,
        "CreditNoteCustomer.DeletedEnum": CreditNoteCustomer.DeletedEnum,
        "CreditNoteCustomerBalanceTransaction.ObjectEnum": CreditNoteCustomerBalanceTransaction.ObjectEnum,
        "CreditNoteCustomerBalanceTransaction.TypeEnum": CreditNoteCustomerBalanceTransaction.TypeEnum,
        "CreditNoteInvoice.BillingReasonEnum": CreditNoteInvoice.BillingReasonEnum,
        "CreditNoteInvoice.CollectionMethodEnum": CreditNoteInvoice.CollectionMethodEnum,
        "CreditNoteInvoice.CustomerTaxExemptEnum": CreditNoteInvoice.CustomerTaxExemptEnum,
        "CreditNoteInvoice.ObjectEnum": CreditNoteInvoice.ObjectEnum,
        "CreditNoteInvoice.StatusEnum": CreditNoteInvoice.StatusEnum,
        "CreditNoteLineItem.ObjectEnum": CreditNoteLineItem.ObjectEnum,
        "CreditNoteLineItem.TypeEnum": CreditNoteLineItem.TypeEnum,
        "CreditNoteLineItemParams.TypeEnum": CreditNoteLineItemParams.TypeEnum,
        "CreditNoteLinesList.ObjectEnum": CreditNoteLinesList.ObjectEnum,
        "CreditNoteLinesList1.ObjectEnum": CreditNoteLinesList1.ObjectEnum,
        "CreditNoteRefund.ObjectEnum": CreditNoteRefund.ObjectEnum,
        "CreditNoteRefund.ReasonEnum": CreditNoteRefund.ReasonEnum,
        "CreditNoteTaxAmountTaxRate.ObjectEnum": CreditNoteTaxAmountTaxRate.ObjectEnum,
        "CreditNoteTaxAmountTaxRate.TaxTypeEnum": CreditNoteTaxAmountTaxRate.TaxTypeEnum,
        "CreditNotesList.ObjectEnum": CreditNotesList.ObjectEnum,
        "CurrencyOption.TaxBehaviorEnum": CurrencyOption.TaxBehaviorEnum,
        "Customer.ObjectEnum": Customer.ObjectEnum,
        "Customer.TaxExemptEnum": Customer.TaxExemptEnum,
        "CustomerAcceptance.TypeEnum": CustomerAcceptance.TypeEnum,
        "CustomerBalanceCustomerBalanceSettings.ReconciliationModeEnum": CustomerBalanceCustomerBalanceSettings.ReconciliationModeEnum,
        "CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionPaymentIntent.CancellationReasonEnum": CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionPaymentIntent.CancellationReasonEnum,
        "CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionPaymentIntent.CaptureMethodEnum": CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionPaymentIntent.CaptureMethodEnum,
        "CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionPaymentIntent.ConfirmationMethodEnum": CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionPaymentIntent.ConfirmationMethodEnum,
        "CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionPaymentIntent.ObjectEnum": CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionPaymentIntent.ObjectEnum,
        "CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionPaymentIntent.SetupFutureUsageEnum": CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionPaymentIntent.SetupFutureUsageEnum,
        "CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionPaymentIntent.StatusEnum": CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionPaymentIntent.StatusEnum,
        "CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer.TypeEnum": CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer.TypeEnum,
        "CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionRefund.ObjectEnum": CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionRefund.ObjectEnum,
        "CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionRefund.ReasonEnum": CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionRefund.ReasonEnum,
        "CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionPaymentIntent.CancellationReasonEnum": CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionPaymentIntent.CancellationReasonEnum,
        "CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionPaymentIntent.CaptureMethodEnum": CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionPaymentIntent.CaptureMethodEnum,
        "CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionPaymentIntent.ConfirmationMethodEnum": CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionPaymentIntent.ConfirmationMethodEnum,
        "CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionPaymentIntent.ObjectEnum": CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionPaymentIntent.ObjectEnum,
        "CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionPaymentIntent.SetupFutureUsageEnum": CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionPaymentIntent.SetupFutureUsageEnum,
        "CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionPaymentIntent.StatusEnum": CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionPaymentIntent.StatusEnum,
        "CustomerBalanceTransaction.ObjectEnum": CustomerBalanceTransaction.ObjectEnum,
        "CustomerBalanceTransaction.TypeEnum": CustomerBalanceTransaction.TypeEnum,
        "CustomerBalanceTransactionCreditNote.ObjectEnum": CustomerBalanceTransactionCreditNote.ObjectEnum,
        "CustomerBalanceTransactionCreditNote.ReasonEnum": CustomerBalanceTransactionCreditNote.ReasonEnum,
        "CustomerBalanceTransactionCreditNote.StatusEnum": CustomerBalanceTransactionCreditNote.StatusEnum,
        "CustomerBalanceTransactionCreditNote.TypeEnum": CustomerBalanceTransactionCreditNote.TypeEnum,
        "CustomerBalanceTransactionCustomer.ObjectEnum": CustomerBalanceTransactionCustomer.ObjectEnum,
        "CustomerBalanceTransactionCustomer.TaxExemptEnum": CustomerBalanceTransactionCustomer.TaxExemptEnum,
        "CustomerBalanceTransactionInvoice.BillingReasonEnum": CustomerBalanceTransactionInvoice.BillingReasonEnum,
        "CustomerBalanceTransactionInvoice.CollectionMethodEnum": CustomerBalanceTransactionInvoice.CollectionMethodEnum,
        "CustomerBalanceTransactionInvoice.CustomerTaxExemptEnum": CustomerBalanceTransactionInvoice.CustomerTaxExemptEnum,
        "CustomerBalanceTransactionInvoice.ObjectEnum": CustomerBalanceTransactionInvoice.ObjectEnum,
        "CustomerBalanceTransactionInvoice.StatusEnum": CustomerBalanceTransactionInvoice.StatusEnum,
        "CustomerBalanceTransactionList.ObjectEnum": CustomerBalanceTransactionList.ObjectEnum,
        "CustomerCashBalance.ObjectEnum": CustomerCashBalance.ObjectEnum,
        "CustomerCashBalanceTransaction.ObjectEnum": CustomerCashBalanceTransaction.ObjectEnum,
        "CustomerCashBalanceTransaction.TypeEnum": CustomerCashBalanceTransaction.TypeEnum,
        "CustomerCashBalanceTransactionCustomer.ObjectEnum": CustomerCashBalanceTransactionCustomer.ObjectEnum,
        "CustomerCashBalanceTransactionCustomer.TaxExemptEnum": CustomerCashBalanceTransactionCustomer.TaxExemptEnum,
        "CustomerCashBalanceTransactionList.ObjectEnum": CustomerCashBalanceTransactionList.ObjectEnum,
        "CustomerDefaultSource.BusinessTypeEnum": CustomerDefaultSource.BusinessTypeEnum,
        "CustomerDefaultSource.ObjectEnum": CustomerDefaultSource.ObjectEnum,
        "CustomerDefaultSource.TypeEnum": CustomerDefaultSource.TypeEnum,
        "CustomerDefaultSource.AvailablePayoutMethodsEnum": CustomerDefaultSource.AvailablePayoutMethodsEnum,
        "CustomerDetailsParam.TaxExemptEnum": CustomerDetailsParam.TaxExemptEnum,
        "CustomerDiscount.ObjectEnum": CustomerDiscount.ObjectEnum,
        "CustomerPaymentMethodResourceList.ObjectEnum": CustomerPaymentMethodResourceList.ObjectEnum,
        "CustomerResourceCustomerList.ObjectEnum": CustomerResourceCustomerList.ObjectEnum,
        "CustomerTax.AutomaticTaxEnum": CustomerTax.AutomaticTaxEnum,
        "CustomerTaxLocation.SourceEnum": CustomerTaxLocation.SourceEnum,
        "CustomerTaxLocation1.SourceEnum": CustomerTaxLocation1.SourceEnum,
        "CustomerTestClock.ObjectEnum": CustomerTestClock.ObjectEnum,
        "CustomerTestClock.StatusEnum": CustomerTestClock.StatusEnum,
        "DataParams.TypeEnum": DataParams.TypeEnum,
        "DeleteCustomersCustomerSourcesId200Response.BusinessTypeEnum": DeleteCustomersCustomerSourcesId200Response.BusinessTypeEnum,
        "DeleteCustomersCustomerSourcesId200Response.ObjectEnum": DeleteCustomersCustomerSourcesId200Response.ObjectEnum,
        "DeleteCustomersCustomerSourcesId200Response.TypeEnum": DeleteCustomersCustomerSourcesId200Response.TypeEnum,
        "DeleteCustomersCustomerSourcesId200Response.AvailablePayoutMethodsEnum": DeleteCustomersCustomerSourcesId200Response.AvailablePayoutMethodsEnum,
        "DeleteCustomersCustomerSourcesId200Response.DeletedEnum": DeleteCustomersCustomerSourcesId200Response.DeletedEnum,
        "DeletedAccount.DeletedEnum": DeletedAccount.DeletedEnum,
        "DeletedAccount.ObjectEnum": DeletedAccount.ObjectEnum,
        "DeletedApplePayDomain.DeletedEnum": DeletedApplePayDomain.DeletedEnum,
        "DeletedApplePayDomain.ObjectEnum": DeletedApplePayDomain.ObjectEnum,
        "DeletedApplication.DeletedEnum": DeletedApplication.DeletedEnum,
        "DeletedApplication.ObjectEnum": DeletedApplication.ObjectEnum,
        "DeletedBankAccount.DeletedEnum": DeletedBankAccount.DeletedEnum,
        "DeletedBankAccount.ObjectEnum": DeletedBankAccount.ObjectEnum,
        "DeletedCard.DeletedEnum": DeletedCard.DeletedEnum,
        "DeletedCard.ObjectEnum": DeletedCard.ObjectEnum,
        "DeletedCoupon.DeletedEnum": DeletedCoupon.DeletedEnum,
        "DeletedCoupon.ObjectEnum": DeletedCoupon.ObjectEnum,
        "DeletedCustomer.DeletedEnum": DeletedCustomer.DeletedEnum,
        "DeletedCustomer.ObjectEnum": DeletedCustomer.ObjectEnum,
        "DeletedDiscount.DeletedEnum": DeletedDiscount.DeletedEnum,
        "DeletedDiscount.ObjectEnum": DeletedDiscount.ObjectEnum,
        "DeletedDiscountCustomer.ObjectEnum": DeletedDiscountCustomer.ObjectEnum,
        "DeletedDiscountCustomer.TaxExemptEnum": DeletedDiscountCustomer.TaxExemptEnum,
        "DeletedDiscountCustomer.DeletedEnum": DeletedDiscountCustomer.DeletedEnum,
        "DeletedDiscountPromotionCode.ObjectEnum": DeletedDiscountPromotionCode.ObjectEnum,
        "DeletedExternalAccount.DeletedEnum": DeletedExternalAccount.DeletedEnum,
        "DeletedExternalAccount.ObjectEnum": DeletedExternalAccount.ObjectEnum,
        "DeletedInvoice.DeletedEnum": DeletedInvoice.DeletedEnum,
        "DeletedInvoice.ObjectEnum": DeletedInvoice.ObjectEnum,
        "DeletedInvoiceitem.DeletedEnum": DeletedInvoiceitem.DeletedEnum,
        "DeletedInvoiceitem.ObjectEnum": DeletedInvoiceitem.ObjectEnum,
        "DeletedPaymentSource.DeletedEnum": DeletedPaymentSource.DeletedEnum,
        "DeletedPaymentSource.ObjectEnum": DeletedPaymentSource.ObjectEnum,
        "DeletedPerson.DeletedEnum": DeletedPerson.DeletedEnum,
        "DeletedPerson.ObjectEnum": DeletedPerson.ObjectEnum,
        "DeletedPlan.DeletedEnum": DeletedPlan.DeletedEnum,
        "DeletedPlan.ObjectEnum": DeletedPlan.ObjectEnum,
        "DeletedPrice.DeletedEnum": DeletedPrice.DeletedEnum,
        "DeletedPrice.ObjectEnum": DeletedPrice.ObjectEnum,
        "DeletedProduct.DeletedEnum": DeletedProduct.DeletedEnum,
        "DeletedProduct.ObjectEnum": DeletedProduct.ObjectEnum,
        "DeletedRadarValueList.DeletedEnum": DeletedRadarValueList.DeletedEnum,
        "DeletedRadarValueList.ObjectEnum": DeletedRadarValueList.ObjectEnum,
        "DeletedRadarValueListItem.DeletedEnum": DeletedRadarValueListItem.DeletedEnum,
        "DeletedRadarValueListItem.ObjectEnum": DeletedRadarValueListItem.ObjectEnum,
        "DeletedSubscriptionItem.DeletedEnum": DeletedSubscriptionItem.DeletedEnum,
        "DeletedSubscriptionItem.ObjectEnum": DeletedSubscriptionItem.ObjectEnum,
        "DeletedTaxId.DeletedEnum": DeletedTaxId.DeletedEnum,
        "DeletedTaxId.ObjectEnum": DeletedTaxId.ObjectEnum,
        "DeletedTerminalConfiguration.DeletedEnum": DeletedTerminalConfiguration.DeletedEnum,
        "DeletedTerminalConfiguration.ObjectEnum": DeletedTerminalConfiguration.ObjectEnum,
        "DeletedTerminalLocation.DeletedEnum": DeletedTerminalLocation.DeletedEnum,
        "DeletedTerminalLocation.ObjectEnum": DeletedTerminalLocation.ObjectEnum,
        "DeletedTerminalReader.DeletedEnum": DeletedTerminalReader.DeletedEnum,
        "DeletedTerminalReader.ObjectEnum": DeletedTerminalReader.ObjectEnum,
        "DeletedTestHelpersTestClock.DeletedEnum": DeletedTestHelpersTestClock.DeletedEnum,
        "DeletedTestHelpersTestClock.ObjectEnum": DeletedTestHelpersTestClock.ObjectEnum,
        "DeletedWebhookEndpoint.DeletedEnum": DeletedWebhookEndpoint.DeletedEnum,
        "DeletedWebhookEndpoint.ObjectEnum": DeletedWebhookEndpoint.ObjectEnum,
        "Discount.ObjectEnum": Discount.ObjectEnum,
        "DiscountsResourceDiscountAmountDiscount.ObjectEnum": DiscountsResourceDiscountAmountDiscount.ObjectEnum,
        "DiscountsResourceDiscountAmountDiscount.DeletedEnum": DiscountsResourceDiscountAmountDiscount.DeletedEnum,
        "Dispute.ObjectEnum": Dispute.ObjectEnum,
        "Dispute.StatusEnum": Dispute.StatusEnum,
        "DisputeCharge.ObjectEnum": DisputeCharge.ObjectEnum,
        "DisputeCharge.StatusEnum": DisputeCharge.StatusEnum,
        "DisputeEvidenceCancellationPolicy.ObjectEnum": DisputeEvidenceCancellationPolicy.ObjectEnum,
        "DisputeEvidenceCancellationPolicy.PurposeEnum": DisputeEvidenceCancellationPolicy.PurposeEnum,
        "DisputeEvidenceCustomerCommunication.ObjectEnum": DisputeEvidenceCustomerCommunication.ObjectEnum,
        "DisputeEvidenceCustomerCommunication.PurposeEnum": DisputeEvidenceCustomerCommunication.PurposeEnum,
        "DisputeEvidenceCustomerSignature.ObjectEnum": DisputeEvidenceCustomerSignature.ObjectEnum,
        "DisputeEvidenceCustomerSignature.PurposeEnum": DisputeEvidenceCustomerSignature.PurposeEnum,
        "DisputeEvidenceDuplicateChargeDocumentation.ObjectEnum": DisputeEvidenceDuplicateChargeDocumentation.ObjectEnum,
        "DisputeEvidenceDuplicateChargeDocumentation.PurposeEnum": DisputeEvidenceDuplicateChargeDocumentation.PurposeEnum,
        "DisputeEvidenceReceipt.ObjectEnum": DisputeEvidenceReceipt.ObjectEnum,
        "DisputeEvidenceReceipt.PurposeEnum": DisputeEvidenceReceipt.PurposeEnum,
        "DisputeEvidenceRefundPolicy.ObjectEnum": DisputeEvidenceRefundPolicy.ObjectEnum,
        "DisputeEvidenceRefundPolicy.PurposeEnum": DisputeEvidenceRefundPolicy.PurposeEnum,
        "DisputeEvidenceServiceDocumentation.ObjectEnum": DisputeEvidenceServiceDocumentation.ObjectEnum,
        "DisputeEvidenceServiceDocumentation.PurposeEnum": DisputeEvidenceServiceDocumentation.PurposeEnum,
        "DisputeEvidenceShippingDocumentation.ObjectEnum": DisputeEvidenceShippingDocumentation.ObjectEnum,
        "DisputeEvidenceShippingDocumentation.PurposeEnum": DisputeEvidenceShippingDocumentation.PurposeEnum,
        "DisputeEvidenceUncategorizedFile.ObjectEnum": DisputeEvidenceUncategorizedFile.ObjectEnum,
        "DisputeEvidenceUncategorizedFile.PurposeEnum": DisputeEvidenceUncategorizedFile.PurposeEnum,
        "DisputeList.ObjectEnum": DisputeList.ObjectEnum,
        "DisputePaymentIntent.CancellationReasonEnum": DisputePaymentIntent.CancellationReasonEnum,
        "DisputePaymentIntent.CaptureMethodEnum": DisputePaymentIntent.CaptureMethodEnum,
        "DisputePaymentIntent.ConfirmationMethodEnum": DisputePaymentIntent.ConfirmationMethodEnum,
        "DisputePaymentIntent.ObjectEnum": DisputePaymentIntent.ObjectEnum,
        "DisputePaymentIntent.SetupFutureUsageEnum": DisputePaymentIntent.SetupFutureUsageEnum,
        "DisputePaymentIntent.StatusEnum": DisputePaymentIntent.StatusEnum,
        "EphemeralKey.ObjectEnum": EphemeralKey.ObjectEnum,
        "Event.ObjectEnum": Event.ObjectEnum,
        "ExchangeRate.ObjectEnum": ExchangeRate.ObjectEnum,
        "ExchangeRateList.ObjectEnum": ExchangeRateList.ObjectEnum,
        "ExternalAccount.AvailablePayoutMethodsEnum": ExternalAccount.AvailablePayoutMethodsEnum,
        "ExternalAccount.ObjectEnum": ExternalAccount.ObjectEnum,
        "ExternalAccountList.ObjectEnum": ExternalAccountList.ObjectEnum,
        "ExternalAccountList1.ObjectEnum": ExternalAccountList1.ObjectEnum,
        "FeeRefund.ObjectEnum": FeeRefund.ObjectEnum,
        "FeeRefundBalanceTransaction.ObjectEnum": FeeRefundBalanceTransaction.ObjectEnum,
        "FeeRefundBalanceTransaction.TypeEnum": FeeRefundBalanceTransaction.TypeEnum,
        "FeeRefundFee.ObjectEnum": FeeRefundFee.ObjectEnum,
        "FeeRefundList.ObjectEnum": FeeRefundList.ObjectEnum,
        "FeeRefundList1.ObjectEnum": FeeRefundList1.ObjectEnum,
        "FileFileLinkList.ObjectEnum": FileFileLinkList.ObjectEnum,
        "FileFileLinkList1.ObjectEnum": FileFileLinkList1.ObjectEnum,
        "FileFileList.ObjectEnum": FileFileList.ObjectEnum,
        "FileLink.ObjectEnum": FileLink.ObjectEnum,
        "FileLinkFile.ObjectEnum": FileLinkFile.ObjectEnum,
        "FileLinkFile.PurposeEnum": FileLinkFile.PurposeEnum,
        "FinancialConnectionsAccount.CategoryEnum": FinancialConnectionsAccount.CategoryEnum,
        "FinancialConnectionsAccount.ObjectEnum": FinancialConnectionsAccount.ObjectEnum,
        "FinancialConnectionsAccount.PermissionsEnum": FinancialConnectionsAccount.PermissionsEnum,
        "FinancialConnectionsAccount.StatusEnum": FinancialConnectionsAccount.StatusEnum,
        "FinancialConnectionsAccount.SubcategoryEnum": FinancialConnectionsAccount.SubcategoryEnum,
        "FinancialConnectionsAccount.SupportedPaymentMethodTypesEnum": FinancialConnectionsAccount.SupportedPaymentMethodTypesEnum,
        "FinancialConnectionsAccountAccountHolder.TypeEnum": FinancialConnectionsAccountAccountHolder.TypeEnum,
        "FinancialConnectionsAccountBalance.TypeEnum": FinancialConnectionsAccountBalance.TypeEnum,
        "FinancialConnectionsAccountBalanceRefresh.StatusEnum": FinancialConnectionsAccountBalanceRefresh.StatusEnum,
        "FinancialConnectionsAccountOwner.ObjectEnum": FinancialConnectionsAccountOwner.ObjectEnum,
        "FinancialConnectionsAccountOwnership.ObjectEnum": FinancialConnectionsAccountOwnership.ObjectEnum,
        "FinancialConnectionsAccountOwnershipRefresh.StatusEnum": FinancialConnectionsAccountOwnershipRefresh.StatusEnum,
        "FinancialConnectionsSession.ObjectEnum": FinancialConnectionsSession.ObjectEnum,
        "FinancialConnectionsSession.PermissionsEnum": FinancialConnectionsSession.PermissionsEnum,
        "FinancialConnectionsSessionAccountHolder.TypeEnum": FinancialConnectionsSessionAccountHolder.TypeEnum,
        "FinancialReportingFinanceReportRunList.ObjectEnum": FinancialReportingFinanceReportRunList.ObjectEnum,
        "FinancialReportingFinanceReportTypeList.ObjectEnum": FinancialReportingFinanceReportTypeList.ObjectEnum,
        "FundingInstructions.FundingTypeEnum": FundingInstructions.FundingTypeEnum,
        "FundingInstructions.ObjectEnum": FundingInstructions.ObjectEnum,
        "FundingInstructionsBankTransfer.TypeEnum": FundingInstructionsBankTransfer.TypeEnum,
        "FundingInstructionsBankTransferFinancialAddress.SupportedNetworksEnum": FundingInstructionsBankTransferFinancialAddress.SupportedNetworksEnum,
        "FundingInstructionsBankTransferFinancialAddress.TypeEnum": FundingInstructionsBankTransferFinancialAddress.TypeEnum,
        "GelatoDocumentReport.StatusEnum": GelatoDocumentReport.StatusEnum,
        "GelatoDocumentReport.TypeEnum": GelatoDocumentReport.TypeEnum,
        "GelatoDocumentReportError.CodeEnum": GelatoDocumentReportError.CodeEnum,
        "GelatoDocumentReportError1.CodeEnum": GelatoDocumentReportError1.CodeEnum,
        "GelatoIdNumberReport.IdNumberTypeEnum": GelatoIdNumberReport.IdNumberTypeEnum,
        "GelatoIdNumberReport.StatusEnum": GelatoIdNumberReport.StatusEnum,
        "GelatoIdNumberReportError.CodeEnum": GelatoIdNumberReportError.CodeEnum,
        "GelatoIdNumberReportError1.CodeEnum": GelatoIdNumberReportError1.CodeEnum,
        "GelatoReportDocumentOptions.AllowedTypesEnum": GelatoReportDocumentOptions.AllowedTypesEnum,
        "GelatoSelfieReport.StatusEnum": GelatoSelfieReport.StatusEnum,
        "GelatoSelfieReportError.CodeEnum": GelatoSelfieReportError.CodeEnum,
        "GelatoSelfieReportError1.CodeEnum": GelatoSelfieReportError1.CodeEnum,
        "GelatoSessionDocumentOptions.AllowedTypesEnum": GelatoSessionDocumentOptions.AllowedTypesEnum,
        "GelatoSessionLastError.CodeEnum": GelatoSessionLastError.CodeEnum,
        "GelatoVerificationReportList.ObjectEnum": GelatoVerificationReportList.ObjectEnum,
        "GelatoVerificationSessionList.ObjectEnum": GelatoVerificationSessionList.ObjectEnum,
        "GelatoVerifiedOutputs.IdNumberTypeEnum": GelatoVerifiedOutputs.IdNumberTypeEnum,
        "GetCustomersCustomer200Response.ObjectEnum": GetCustomersCustomer200Response.ObjectEnum,
        "GetCustomersCustomer200Response.TaxExemptEnum": GetCustomersCustomer200Response.TaxExemptEnum,
        "GetCustomersCustomer200Response.DeletedEnum": GetCustomersCustomer200Response.DeletedEnum,
        "GetInvoicesUpcomingSubscriptionBillingCycleAnchorParameterAnyOf": GetInvoicesUpcomingSubscriptionBillingCycleAnchorParameterAnyOf,
        "GetTerminalConfigurationsConfiguration200Response.ObjectEnum": GetTerminalConfigurationsConfiguration200Response.ObjectEnum,
        "GetTerminalConfigurationsConfiguration200Response.DeletedEnum": GetTerminalConfigurationsConfiguration200Response.DeletedEnum,
        "GetTerminalLocationsLocation200Response.ObjectEnum": GetTerminalLocationsLocation200Response.ObjectEnum,
        "GetTerminalLocationsLocation200Response.DeletedEnum": GetTerminalLocationsLocation200Response.DeletedEnum,
        "GetTerminalReadersReader200Response.DeviceTypeEnum": GetTerminalReadersReader200Response.DeviceTypeEnum,
        "GetTerminalReadersReader200Response.ObjectEnum": GetTerminalReadersReader200Response.ObjectEnum,
        "GetTerminalReadersReader200Response.DeletedEnum": GetTerminalReadersReader200Response.DeletedEnum,
        "IdentityVerificationReport.ObjectEnum": IdentityVerificationReport.ObjectEnum,
        "IdentityVerificationReport.TypeEnum": IdentityVerificationReport.TypeEnum,
        "IdentityVerificationSession.ObjectEnum": IdentityVerificationSession.ObjectEnum,
        "IdentityVerificationSession.StatusEnum": IdentityVerificationSession.StatusEnum,
        "IdentityVerificationSession.TypeEnum": IdentityVerificationSession.TypeEnum,
        "IdentityVerificationSessionLastError.CodeEnum": IdentityVerificationSessionLastError.CodeEnum,
        "IdentityVerificationSessionLastVerificationReport.ObjectEnum": IdentityVerificationSessionLastVerificationReport.ObjectEnum,
        "IdentityVerificationSessionLastVerificationReport.TypeEnum": IdentityVerificationSessionLastVerificationReport.TypeEnum,
        "IdentityVerificationSessionRedaction.StatusEnum": IdentityVerificationSessionRedaction.StatusEnum,
        "IdentityVerificationSessionVerifiedOutputs.IdNumberTypeEnum": IdentityVerificationSessionVerifiedOutputs.IdNumberTypeEnum,
        "InboundTransfers.TypeEnum": InboundTransfers.TypeEnum,
        "InboundTransfersPaymentMethodDetailsUsBankAccount.AccountHolderTypeEnum": InboundTransfersPaymentMethodDetailsUsBankAccount.AccountHolderTypeEnum,
        "InboundTransfersPaymentMethodDetailsUsBankAccount.AccountTypeEnum": InboundTransfersPaymentMethodDetailsUsBankAccount.AccountTypeEnum,
        "InboundTransfersPaymentMethodDetailsUsBankAccount.NetworkEnum": InboundTransfersPaymentMethodDetailsUsBankAccount.NetworkEnum,
        "Invoice.BillingReasonEnum": Invoice.BillingReasonEnum,
        "Invoice.CollectionMethodEnum": Invoice.CollectionMethodEnum,
        "Invoice.CustomerTaxExemptEnum": Invoice.CustomerTaxExemptEnum,
        "Invoice.ObjectEnum": Invoice.ObjectEnum,
        "Invoice.StatusEnum": Invoice.StatusEnum,
        "InvoiceAccountTaxIdsInner.ObjectEnum": InvoiceAccountTaxIdsInner.ObjectEnum,
        "InvoiceAccountTaxIdsInner.TypeEnum": InvoiceAccountTaxIdsInner.TypeEnum,
        "InvoiceAccountTaxIdsInner.DeletedEnum": InvoiceAccountTaxIdsInner.DeletedEnum,
        "InvoiceApplication.ObjectEnum": InvoiceApplication.ObjectEnum,
        "InvoiceApplication.DeletedEnum": InvoiceApplication.DeletedEnum,
        "InvoiceCharge.ObjectEnum": InvoiceCharge.ObjectEnum,
        "InvoiceCharge.StatusEnum": InvoiceCharge.StatusEnum,
        "InvoiceCustomer.ObjectEnum": InvoiceCustomer.ObjectEnum,
        "InvoiceCustomer.TaxExemptEnum": InvoiceCustomer.TaxExemptEnum,
        "InvoiceCustomer.DeletedEnum": InvoiceCustomer.DeletedEnum,
        "InvoiceDefaultPaymentMethod.ObjectEnum": InvoiceDefaultPaymentMethod.ObjectEnum,
        "InvoiceDefaultPaymentMethod.TypeEnum": InvoiceDefaultPaymentMethod.TypeEnum,
        "InvoiceDefaultSource.BusinessTypeEnum": InvoiceDefaultSource.BusinessTypeEnum,
        "InvoiceDefaultSource.ObjectEnum": InvoiceDefaultSource.ObjectEnum,
        "InvoiceDefaultSource.TypeEnum": InvoiceDefaultSource.TypeEnum,
        "InvoiceDefaultSource.AvailablePayoutMethodsEnum": InvoiceDefaultSource.AvailablePayoutMethodsEnum,
        "InvoiceDiscount.ObjectEnum": InvoiceDiscount.ObjectEnum,
        "InvoiceDiscountsInner.ObjectEnum": InvoiceDiscountsInner.ObjectEnum,
        "InvoiceDiscountsInner.DeletedEnum": InvoiceDiscountsInner.DeletedEnum,
        "InvoiceItemPreviewParams.TaxBehaviorEnum": InvoiceItemPreviewParams.TaxBehaviorEnum,
        "InvoiceLastFinalizationError.TypeEnum": InvoiceLastFinalizationError.TypeEnum,
        "InvoiceLatestRevision.BillingReasonEnum": InvoiceLatestRevision.BillingReasonEnum,
        "InvoiceLatestRevision.CollectionMethodEnum": InvoiceLatestRevision.CollectionMethodEnum,
        "InvoiceLatestRevision.CustomerTaxExemptEnum": InvoiceLatestRevision.CustomerTaxExemptEnum,
        "InvoiceLatestRevision.ObjectEnum": InvoiceLatestRevision.ObjectEnum,
        "InvoiceLatestRevision.StatusEnum": InvoiceLatestRevision.StatusEnum,
        "InvoiceLinesList.ObjectEnum": InvoiceLinesList.ObjectEnum,
        "InvoiceLinesList1.ObjectEnum": InvoiceLinesList1.ObjectEnum,
        "InvoiceMandateOptionsCard.AmountTypeEnum": InvoiceMandateOptionsCard.AmountTypeEnum,
        "InvoiceOnBehalfOf.BusinessTypeEnum": InvoiceOnBehalfOf.BusinessTypeEnum,
        "InvoiceOnBehalfOf.ObjectEnum": InvoiceOnBehalfOf.ObjectEnum,
        "InvoiceOnBehalfOf.TypeEnum": InvoiceOnBehalfOf.TypeEnum,
        "InvoicePaymentIntent.CancellationReasonEnum": InvoicePaymentIntent.CancellationReasonEnum,
        "InvoicePaymentIntent.CaptureMethodEnum": InvoicePaymentIntent.CaptureMethodEnum,
        "InvoicePaymentIntent.ConfirmationMethodEnum": InvoicePaymentIntent.ConfirmationMethodEnum,
        "InvoicePaymentIntent.ObjectEnum": InvoicePaymentIntent.ObjectEnum,
        "InvoicePaymentIntent.SetupFutureUsageEnum": InvoicePaymentIntent.SetupFutureUsageEnum,
        "InvoicePaymentIntent.StatusEnum": InvoicePaymentIntent.StatusEnum,
        "InvoicePaymentMethodOptionsAcssDebit.VerificationMethodEnum": InvoicePaymentMethodOptionsAcssDebit.VerificationMethodEnum,
        "InvoicePaymentMethodOptionsAcssDebitMandateOptions.TransactionTypeEnum": InvoicePaymentMethodOptionsAcssDebitMandateOptions.TransactionTypeEnum,
        "InvoicePaymentMethodOptionsBancontact.PreferredLanguageEnum": InvoicePaymentMethodOptionsBancontact.PreferredLanguageEnum,
        "InvoicePaymentMethodOptionsCard.RequestThreeDSecureEnum": InvoicePaymentMethodOptionsCard.RequestThreeDSecureEnum,
        "InvoicePaymentMethodOptionsCustomerBalance.FundingTypeEnum": InvoicePaymentMethodOptionsCustomerBalance.FundingTypeEnum,
        "InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer.CountryEnum": InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer.CountryEnum,
        "InvoicePaymentMethodOptionsUsBankAccount.VerificationMethodEnum": InvoicePaymentMethodOptionsUsBankAccount.VerificationMethodEnum,
        "InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions.PermissionsEnum": InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions.PermissionsEnum,
        "InvoiceQuote.CollectionMethodEnum": InvoiceQuote.CollectionMethodEnum,
        "InvoiceQuote.ObjectEnum": InvoiceQuote.ObjectEnum,
        "InvoiceQuote.StatusEnum": InvoiceQuote.StatusEnum,
        "InvoiceSettingCustomerSettingDefaultPaymentMethod.ObjectEnum": InvoiceSettingCustomerSettingDefaultPaymentMethod.ObjectEnum,
        "InvoiceSettingCustomerSettingDefaultPaymentMethod.TypeEnum": InvoiceSettingCustomerSettingDefaultPaymentMethod.TypeEnum,
        "InvoiceSubscription.CollectionMethodEnum": InvoiceSubscription.CollectionMethodEnum,
        "InvoiceSubscription.ObjectEnum": InvoiceSubscription.ObjectEnum,
        "InvoiceSubscription.StatusEnum": InvoiceSubscription.StatusEnum,
        "InvoiceTestClock.ObjectEnum": InvoiceTestClock.ObjectEnum,
        "InvoiceTestClock.StatusEnum": InvoiceTestClock.StatusEnum,
        "InvoiceTransferDataDestination.BusinessTypeEnum": InvoiceTransferDataDestination.BusinessTypeEnum,
        "InvoiceTransferDataDestination.ObjectEnum": InvoiceTransferDataDestination.ObjectEnum,
        "InvoiceTransferDataDestination.TypeEnum": InvoiceTransferDataDestination.TypeEnum,
        "Invoiceitem.ObjectEnum": Invoiceitem.ObjectEnum,
        "InvoiceitemCustomer.ObjectEnum": InvoiceitemCustomer.ObjectEnum,
        "InvoiceitemCustomer.TaxExemptEnum": InvoiceitemCustomer.TaxExemptEnum,
        "InvoiceitemCustomer.DeletedEnum": InvoiceitemCustomer.DeletedEnum,
        "InvoiceitemDiscountsInner.ObjectEnum": InvoiceitemDiscountsInner.ObjectEnum,
        "InvoiceitemInvoice.BillingReasonEnum": InvoiceitemInvoice.BillingReasonEnum,
        "InvoiceitemInvoice.CollectionMethodEnum": InvoiceitemInvoice.CollectionMethodEnum,
        "InvoiceitemInvoice.CustomerTaxExemptEnum": InvoiceitemInvoice.CustomerTaxExemptEnum,
        "InvoiceitemInvoice.ObjectEnum": InvoiceitemInvoice.ObjectEnum,
        "InvoiceitemInvoice.StatusEnum": InvoiceitemInvoice.StatusEnum,
        "InvoiceitemPlan.AggregateUsageEnum": InvoiceitemPlan.AggregateUsageEnum,
        "InvoiceitemPlan.BillingSchemeEnum": InvoiceitemPlan.BillingSchemeEnum,
        "InvoiceitemPlan.IntervalEnum": InvoiceitemPlan.IntervalEnum,
        "InvoiceitemPlan.ObjectEnum": InvoiceitemPlan.ObjectEnum,
        "InvoiceitemPlan.TiersModeEnum": InvoiceitemPlan.TiersModeEnum,
        "InvoiceitemPlan.UsageTypeEnum": InvoiceitemPlan.UsageTypeEnum,
        "InvoiceitemPrice.BillingSchemeEnum": InvoiceitemPrice.BillingSchemeEnum,
        "InvoiceitemPrice.ObjectEnum": InvoiceitemPrice.ObjectEnum,
        "InvoiceitemPrice.TaxBehaviorEnum": InvoiceitemPrice.TaxBehaviorEnum,
        "InvoiceitemPrice.TiersModeEnum": InvoiceitemPrice.TiersModeEnum,
        "InvoiceitemPrice.TypeEnum": InvoiceitemPrice.TypeEnum,
        "InvoiceitemSubscription.CollectionMethodEnum": InvoiceitemSubscription.CollectionMethodEnum,
        "InvoiceitemSubscription.ObjectEnum": InvoiceitemSubscription.ObjectEnum,
        "InvoiceitemSubscription.StatusEnum": InvoiceitemSubscription.StatusEnum,
        "InvoiceitemTestClock.ObjectEnum": InvoiceitemTestClock.ObjectEnum,
        "InvoiceitemTestClock.StatusEnum": InvoiceitemTestClock.StatusEnum,
        "InvoicesFromInvoiceInvoice.BillingReasonEnum": InvoicesFromInvoiceInvoice.BillingReasonEnum,
        "InvoicesFromInvoiceInvoice.CollectionMethodEnum": InvoicesFromInvoiceInvoice.CollectionMethodEnum,
        "InvoicesFromInvoiceInvoice.CustomerTaxExemptEnum": InvoicesFromInvoiceInvoice.CustomerTaxExemptEnum,
        "InvoicesFromInvoiceInvoice.ObjectEnum": InvoicesFromInvoiceInvoice.ObjectEnum,
        "InvoicesFromInvoiceInvoice.StatusEnum": InvoicesFromInvoiceInvoice.StatusEnum,
        "InvoicesItemsList.ObjectEnum": InvoicesItemsList.ObjectEnum,
        "InvoicesList.ObjectEnum": InvoicesList.ObjectEnum,
        "InvoicesPaymentMethodOptionsAcssDebit.VerificationMethodEnum": InvoicesPaymentMethodOptionsAcssDebit.VerificationMethodEnum,
        "InvoicesPaymentMethodOptionsBancontact.PreferredLanguageEnum": InvoicesPaymentMethodOptionsBancontact.PreferredLanguageEnum,
        "InvoicesPaymentMethodOptionsCard.RequestThreeDSecureEnum": InvoicesPaymentMethodOptionsCard.RequestThreeDSecureEnum,
        "InvoicesPaymentMethodOptionsCustomerBalance.FundingTypeEnum": InvoicesPaymentMethodOptionsCustomerBalance.FundingTypeEnum,
        "InvoicesPaymentMethodOptionsUsBankAccount.VerificationMethodEnum": InvoicesPaymentMethodOptionsUsBankAccount.VerificationMethodEnum,
        "InvoicesPaymentSettings.PaymentMethodTypesEnum": InvoicesPaymentSettings.PaymentMethodTypesEnum,
        "InvoicesResourceInvoiceTaxId.TypeEnum": InvoicesResourceInvoiceTaxId.TypeEnum,
        "InvoicesShippingCostShippingRate.ObjectEnum": InvoicesShippingCostShippingRate.ObjectEnum,
        "InvoicesShippingCostShippingRate.TaxBehaviorEnum": InvoicesShippingCostShippingRate.TaxBehaviorEnum,
        "InvoicesShippingCostShippingRate.TypeEnum": InvoicesShippingCostShippingRate.TypeEnum,
        "IssuingAuthorization.AuthorizationMethodEnum": IssuingAuthorization.AuthorizationMethodEnum,
        "IssuingAuthorization.ObjectEnum": IssuingAuthorization.ObjectEnum,
        "IssuingAuthorization.StatusEnum": IssuingAuthorization.StatusEnum,
        "IssuingAuthorizationCardholder.ObjectEnum": IssuingAuthorizationCardholder.ObjectEnum,
        "IssuingAuthorizationCardholder.StatusEnum": IssuingAuthorizationCardholder.StatusEnum,
        "IssuingAuthorizationCardholder.TypeEnum": IssuingAuthorizationCardholder.TypeEnum,
        "IssuingAuthorizationList.ObjectEnum": IssuingAuthorizationList.ObjectEnum,
        "IssuingAuthorizationRequest.ReasonEnum": IssuingAuthorizationRequest.ReasonEnum,
        "IssuingAuthorizationVerificationData.AddressLine1CheckEnum": IssuingAuthorizationVerificationData.AddressLine1CheckEnum,
        "IssuingAuthorizationVerificationData.AddressPostalCodeCheckEnum": IssuingAuthorizationVerificationData.AddressPostalCodeCheckEnum,
        "IssuingAuthorizationVerificationData.CvcCheckEnum": IssuingAuthorizationVerificationData.CvcCheckEnum,
        "IssuingAuthorizationVerificationData.ExpiryCheckEnum": IssuingAuthorizationVerificationData.ExpiryCheckEnum,
        "IssuingCard.CancellationReasonEnum": IssuingCard.CancellationReasonEnum,
        "IssuingCard.ObjectEnum": IssuingCard.ObjectEnum,
        "IssuingCard.ReplacementReasonEnum": IssuingCard.ReplacementReasonEnum,
        "IssuingCard.StatusEnum": IssuingCard.StatusEnum,
        "IssuingCard.TypeEnum": IssuingCard.TypeEnum,
        "IssuingCardApplePay.IneligibleReasonEnum": IssuingCardApplePay.IneligibleReasonEnum,
        "IssuingCardAuthorizationControls.AllowedCategoriesEnum": IssuingCardAuthorizationControls.AllowedCategoriesEnum,
        "IssuingCardAuthorizationControls.BlockedCategoriesEnum": IssuingCardAuthorizationControls.BlockedCategoriesEnum,
        "IssuingCardGooglePay.IneligibleReasonEnum": IssuingCardGooglePay.IneligibleReasonEnum,
        "IssuingCardList.ObjectEnum": IssuingCardList.ObjectEnum,
        "IssuingCardReplacedBy.CancellationReasonEnum": IssuingCardReplacedBy.CancellationReasonEnum,
        "IssuingCardReplacedBy.ObjectEnum": IssuingCardReplacedBy.ObjectEnum,
        "IssuingCardReplacedBy.ReplacementReasonEnum": IssuingCardReplacedBy.ReplacementReasonEnum,
        "IssuingCardReplacedBy.StatusEnum": IssuingCardReplacedBy.StatusEnum,
        "IssuingCardReplacedBy.TypeEnum": IssuingCardReplacedBy.TypeEnum,
        "IssuingCardReplacementFor.CancellationReasonEnum": IssuingCardReplacementFor.CancellationReasonEnum,
        "IssuingCardReplacementFor.ObjectEnum": IssuingCardReplacementFor.ObjectEnum,
        "IssuingCardReplacementFor.ReplacementReasonEnum": IssuingCardReplacementFor.ReplacementReasonEnum,
        "IssuingCardReplacementFor.StatusEnum": IssuingCardReplacementFor.StatusEnum,
        "IssuingCardReplacementFor.TypeEnum": IssuingCardReplacementFor.TypeEnum,
        "IssuingCardShipping.CarrierEnum": IssuingCardShipping.CarrierEnum,
        "IssuingCardShipping.ServiceEnum": IssuingCardShipping.ServiceEnum,
        "IssuingCardShipping.StatusEnum": IssuingCardShipping.StatusEnum,
        "IssuingCardShipping.TypeEnum": IssuingCardShipping.TypeEnum,
        "IssuingCardShipping1.CarrierEnum": IssuingCardShipping1.CarrierEnum,
        "IssuingCardShipping1.ServiceEnum": IssuingCardShipping1.ServiceEnum,
        "IssuingCardShipping1.StatusEnum": IssuingCardShipping1.StatusEnum,
        "IssuingCardShipping1.TypeEnum": IssuingCardShipping1.TypeEnum,
        "IssuingCardSpendingLimit.CategoriesEnum": IssuingCardSpendingLimit.CategoriesEnum,
        "IssuingCardSpendingLimit.IntervalEnum": IssuingCardSpendingLimit.IntervalEnum,
        "IssuingCardholder.ObjectEnum": IssuingCardholder.ObjectEnum,
        "IssuingCardholder.StatusEnum": IssuingCardholder.StatusEnum,
        "IssuingCardholder.TypeEnum": IssuingCardholder.TypeEnum,
        "IssuingCardholderAuthorizationControls.AllowedCategoriesEnum": IssuingCardholderAuthorizationControls.AllowedCategoriesEnum,
        "IssuingCardholderAuthorizationControls.BlockedCategoriesEnum": IssuingCardholderAuthorizationControls.BlockedCategoriesEnum,
        "IssuingCardholderIdDocumentBack.ObjectEnum": IssuingCardholderIdDocumentBack.ObjectEnum,
        "IssuingCardholderIdDocumentBack.PurposeEnum": IssuingCardholderIdDocumentBack.PurposeEnum,
        "IssuingCardholderIdDocumentFront.ObjectEnum": IssuingCardholderIdDocumentFront.ObjectEnum,
        "IssuingCardholderIdDocumentFront.PurposeEnum": IssuingCardholderIdDocumentFront.PurposeEnum,
        "IssuingCardholderList.ObjectEnum": IssuingCardholderList.ObjectEnum,
        "IssuingCardholderRequirements.DisabledReasonEnum": IssuingCardholderRequirements.DisabledReasonEnum,
        "IssuingCardholderRequirements.PastDueEnum": IssuingCardholderRequirements.PastDueEnum,
        "IssuingCardholderSpendingControls.AllowedCategoriesEnum": IssuingCardholderSpendingControls.AllowedCategoriesEnum,
        "IssuingCardholderSpendingControls.BlockedCategoriesEnum": IssuingCardholderSpendingControls.BlockedCategoriesEnum,
        "IssuingCardholderSpendingLimit.CategoriesEnum": IssuingCardholderSpendingLimit.CategoriesEnum,
        "IssuingCardholderSpendingLimit.IntervalEnum": IssuingCardholderSpendingLimit.IntervalEnum,
        "IssuingDispute.ObjectEnum": IssuingDispute.ObjectEnum,
        "IssuingDispute.StatusEnum": IssuingDispute.StatusEnum,
        "IssuingDisputeCanceledEvidence.ProductTypeEnum": IssuingDisputeCanceledEvidence.ProductTypeEnum,
        "IssuingDisputeCanceledEvidence.ReturnStatusEnum": IssuingDisputeCanceledEvidence.ReturnStatusEnum,
        "IssuingDisputeCanceledEvidenceAdditionalDocumentation.ObjectEnum": IssuingDisputeCanceledEvidenceAdditionalDocumentation.ObjectEnum,
        "IssuingDisputeCanceledEvidenceAdditionalDocumentation.PurposeEnum": IssuingDisputeCanceledEvidenceAdditionalDocumentation.PurposeEnum,
        "IssuingDisputeDuplicateEvidenceCardStatement.ObjectEnum": IssuingDisputeDuplicateEvidenceCardStatement.ObjectEnum,
        "IssuingDisputeDuplicateEvidenceCardStatement.PurposeEnum": IssuingDisputeDuplicateEvidenceCardStatement.PurposeEnum,
        "IssuingDisputeDuplicateEvidenceCashReceipt.ObjectEnum": IssuingDisputeDuplicateEvidenceCashReceipt.ObjectEnum,
        "IssuingDisputeDuplicateEvidenceCashReceipt.PurposeEnum": IssuingDisputeDuplicateEvidenceCashReceipt.PurposeEnum,
        "IssuingDisputeDuplicateEvidenceCheckImage.ObjectEnum": IssuingDisputeDuplicateEvidenceCheckImage.ObjectEnum,
        "IssuingDisputeDuplicateEvidenceCheckImage.PurposeEnum": IssuingDisputeDuplicateEvidenceCheckImage.PurposeEnum,
        "IssuingDisputeEvidence.ReasonEnum": IssuingDisputeEvidence.ReasonEnum,
        "IssuingDisputeList.ObjectEnum": IssuingDisputeList.ObjectEnum,
        "IssuingDisputeMerchandiseNotAsDescribedEvidence.ReturnStatusEnum": IssuingDisputeMerchandiseNotAsDescribedEvidence.ReturnStatusEnum,
        "IssuingDisputeNotReceivedEvidence.ProductTypeEnum": IssuingDisputeNotReceivedEvidence.ProductTypeEnum,
        "IssuingDisputeOtherEvidence.ProductTypeEnum": IssuingDisputeOtherEvidence.ProductTypeEnum,
        "IssuingDisputeTransaction.ObjectEnum": IssuingDisputeTransaction.ObjectEnum,
        "IssuingDisputeTransaction.TypeEnum": IssuingDisputeTransaction.TypeEnum,
        "IssuingDisputeTransaction.WalletEnum": IssuingDisputeTransaction.WalletEnum,
        "IssuingTransaction.ObjectEnum": IssuingTransaction.ObjectEnum,
        "IssuingTransaction.TypeEnum": IssuingTransaction.TypeEnum,
        "IssuingTransaction.WalletEnum": IssuingTransaction.WalletEnum,
        "IssuingTransactionAuthorization.AuthorizationMethodEnum": IssuingTransactionAuthorization.AuthorizationMethodEnum,
        "IssuingTransactionAuthorization.ObjectEnum": IssuingTransactionAuthorization.ObjectEnum,
        "IssuingTransactionAuthorization.StatusEnum": IssuingTransactionAuthorization.StatusEnum,
        "IssuingTransactionBalanceTransaction.ObjectEnum": IssuingTransactionBalanceTransaction.ObjectEnum,
        "IssuingTransactionBalanceTransaction.TypeEnum": IssuingTransactionBalanceTransaction.TypeEnum,
        "IssuingTransactionCard.CancellationReasonEnum": IssuingTransactionCard.CancellationReasonEnum,
        "IssuingTransactionCard.ObjectEnum": IssuingTransactionCard.ObjectEnum,
        "IssuingTransactionCard.ReplacementReasonEnum": IssuingTransactionCard.ReplacementReasonEnum,
        "IssuingTransactionCard.StatusEnum": IssuingTransactionCard.StatusEnum,
        "IssuingTransactionCard.TypeEnum": IssuingTransactionCard.TypeEnum,
        "IssuingTransactionCardholder.ObjectEnum": IssuingTransactionCardholder.ObjectEnum,
        "IssuingTransactionCardholder.StatusEnum": IssuingTransactionCardholder.StatusEnum,
        "IssuingTransactionCardholder.TypeEnum": IssuingTransactionCardholder.TypeEnum,
        "IssuingTransactionDispute.ObjectEnum": IssuingTransactionDispute.ObjectEnum,
        "IssuingTransactionDispute.StatusEnum": IssuingTransactionDispute.StatusEnum,
        "IssuingTransactionList.ObjectEnum": IssuingTransactionList.ObjectEnum,
        "Item.ObjectEnum": Item.ObjectEnum,
        "ItemPrice.BillingSchemeEnum": ItemPrice.BillingSchemeEnum,
        "ItemPrice.ObjectEnum": ItemPrice.ObjectEnum,
        "ItemPrice.TaxBehaviorEnum": ItemPrice.TaxBehaviorEnum,
        "ItemPrice.TiersModeEnum": ItemPrice.TiersModeEnum,
        "ItemPrice.TypeEnum": ItemPrice.TypeEnum,
        "LegalEntityCompany.StructureEnum": LegalEntityCompany.StructureEnum,
        "LegalEntityCompanyVerificationDocumentBack.ObjectEnum": LegalEntityCompanyVerificationDocumentBack.ObjectEnum,
        "LegalEntityCompanyVerificationDocumentBack.PurposeEnum": LegalEntityCompanyVerificationDocumentBack.PurposeEnum,
        "LegalEntityCompanyVerificationDocumentFront.ObjectEnum": LegalEntityCompanyVerificationDocumentFront.ObjectEnum,
        "LegalEntityCompanyVerificationDocumentFront.PurposeEnum": LegalEntityCompanyVerificationDocumentFront.PurposeEnum,
        "LegalEntityPersonVerificationDocumentBack.ObjectEnum": LegalEntityPersonVerificationDocumentBack.ObjectEnum,
        "LegalEntityPersonVerificationDocumentBack.PurposeEnum": LegalEntityPersonVerificationDocumentBack.PurposeEnum,
        "LegalEntityPersonVerificationDocumentFront.ObjectEnum": LegalEntityPersonVerificationDocumentFront.ObjectEnum,
        "LegalEntityPersonVerificationDocumentFront.PurposeEnum": LegalEntityPersonVerificationDocumentFront.PurposeEnum,
        "LineItem.ObjectEnum": LineItem.ObjectEnum,
        "LineItem.TypeEnum": LineItem.TypeEnum,
        "LineItemPlan.AggregateUsageEnum": LineItemPlan.AggregateUsageEnum,
        "LineItemPlan.BillingSchemeEnum": LineItemPlan.BillingSchemeEnum,
        "LineItemPlan.IntervalEnum": LineItemPlan.IntervalEnum,
        "LineItemPlan.ObjectEnum": LineItemPlan.ObjectEnum,
        "LineItemPlan.TiersModeEnum": LineItemPlan.TiersModeEnum,
        "LineItemPlan.UsageTypeEnum": LineItemPlan.UsageTypeEnum,
        "LineItemPrice.BillingSchemeEnum": LineItemPrice.BillingSchemeEnum,
        "LineItemPrice.ObjectEnum": LineItemPrice.ObjectEnum,
        "LineItemPrice.TaxBehaviorEnum": LineItemPrice.TaxBehaviorEnum,
        "LineItemPrice.TiersModeEnum": LineItemPrice.TiersModeEnum,
        "LineItemPrice.TypeEnum": LineItemPrice.TypeEnum,
        "LinkedAccountOptionsUsBankAccount.PermissionsEnum": LinkedAccountOptionsUsBankAccount.PermissionsEnum,
        "LinkedFlowsParam.SourceFlowTypeEnum": LinkedFlowsParam.SourceFlowTypeEnum,
        "ListAccountCapability.ObjectEnum": ListAccountCapability.ObjectEnum,
        "LoginLink.ObjectEnum": LoginLink.ObjectEnum,
        "Mandate.ObjectEnum": Mandate.ObjectEnum,
        "Mandate.StatusEnum": Mandate.StatusEnum,
        "Mandate.TypeEnum": Mandate.TypeEnum,
        "MandateAcssDebit.DefaultForEnum": MandateAcssDebit.DefaultForEnum,
        "MandateAcssDebit.PaymentScheduleEnum": MandateAcssDebit.PaymentScheduleEnum,
        "MandateAcssDebit.TransactionTypeEnum": MandateAcssDebit.TransactionTypeEnum,
        "MandateBacsDebit.NetworkStatusEnum": MandateBacsDebit.NetworkStatusEnum,
        "MandateBlik.TypeEnum": MandateBlik.TypeEnum,
        "MandateOptionsOffSessionDetailsBlik.IntervalEnum": MandateOptionsOffSessionDetailsBlik.IntervalEnum,
        "MandateOptionsParam.DefaultForEnum": MandateOptionsParam.DefaultForEnum,
        "MandateOptionsParam.PaymentScheduleEnum": MandateOptionsParam.PaymentScheduleEnum,
        "MandateOptionsParam.TransactionTypeEnum": MandateOptionsParam.TransactionTypeEnum,
        "MandatePaymentMethod.ObjectEnum": MandatePaymentMethod.ObjectEnum,
        "MandatePaymentMethod.TypeEnum": MandatePaymentMethod.TypeEnum,
        "ModelFile.ObjectEnum": ModelFile.ObjectEnum,
        "ModelFile.PurposeEnum": ModelFile.PurposeEnum,
        "NotificationEventList.ObjectEnum": NotificationEventList.ObjectEnum,
        "NotificationWebhookEndpointList.ObjectEnum": NotificationWebhookEndpointList.ObjectEnum,
        "OneTimePriceData.TaxBehaviorEnum": OneTimePriceData.TaxBehaviorEnum,
        "OutboundPaymentsPaymentMethodDetails.TypeEnum": OutboundPaymentsPaymentMethodDetails.TypeEnum,
        "OutboundPaymentsPaymentMethodDetailsFinancialAccount.NetworkEnum": OutboundPaymentsPaymentMethodDetailsFinancialAccount.NetworkEnum,
        "OutboundPaymentsPaymentMethodDetailsUsBankAccount.AccountHolderTypeEnum": OutboundPaymentsPaymentMethodDetailsUsBankAccount.AccountHolderTypeEnum,
        "OutboundPaymentsPaymentMethodDetailsUsBankAccount.AccountTypeEnum": OutboundPaymentsPaymentMethodDetailsUsBankAccount.AccountTypeEnum,
        "OutboundPaymentsPaymentMethodDetailsUsBankAccount.NetworkEnum": OutboundPaymentsPaymentMethodDetailsUsBankAccount.NetworkEnum,
        "OutboundTransfersPaymentMethodDetails.TypeEnum": OutboundTransfersPaymentMethodDetails.TypeEnum,
        "OutboundTransfersPaymentMethodDetailsUsBankAccount.AccountHolderTypeEnum": OutboundTransfersPaymentMethodDetailsUsBankAccount.AccountHolderTypeEnum,
        "OutboundTransfersPaymentMethodDetailsUsBankAccount.AccountTypeEnum": OutboundTransfersPaymentMethodDetailsUsBankAccount.AccountTypeEnum,
        "OutboundTransfersPaymentMethodDetailsUsBankAccount.NetworkEnum": OutboundTransfersPaymentMethodDetailsUsBankAccount.NetworkEnum,
        "PaymentFlowsPaymentIntentList.ObjectEnum": PaymentFlowsPaymentIntentList.ObjectEnum,
        "PaymentFlowsPaymentMethodList.ObjectEnum": PaymentFlowsPaymentMethodList.ObjectEnum,
        "PaymentFlowsSetupIntentList.ObjectEnum": PaymentFlowsSetupIntentList.ObjectEnum,
        "PaymentFlowsSetupIntentSetupAttemptList.ObjectEnum": PaymentFlowsSetupIntentSetupAttemptList.ObjectEnum,
        "PaymentIntent.CancellationReasonEnum": PaymentIntent.CancellationReasonEnum,
        "PaymentIntent.CaptureMethodEnum": PaymentIntent.CaptureMethodEnum,
        "PaymentIntent.ConfirmationMethodEnum": PaymentIntent.ConfirmationMethodEnum,
        "PaymentIntent.ObjectEnum": PaymentIntent.ObjectEnum,
        "PaymentIntent.SetupFutureUsageEnum": PaymentIntent.SetupFutureUsageEnum,
        "PaymentIntent.StatusEnum": PaymentIntent.StatusEnum,
        "PaymentIntentApplication.ObjectEnum": PaymentIntentApplication.ObjectEnum,
        "PaymentIntentCustomer.ObjectEnum": PaymentIntentCustomer.ObjectEnum,
        "PaymentIntentCustomer.TaxExemptEnum": PaymentIntentCustomer.TaxExemptEnum,
        "PaymentIntentCustomer.DeletedEnum": PaymentIntentCustomer.DeletedEnum,
        "PaymentIntentInvoice.BillingReasonEnum": PaymentIntentInvoice.BillingReasonEnum,
        "PaymentIntentInvoice.CollectionMethodEnum": PaymentIntentInvoice.CollectionMethodEnum,
        "PaymentIntentInvoice.CustomerTaxExemptEnum": PaymentIntentInvoice.CustomerTaxExemptEnum,
        "PaymentIntentInvoice.ObjectEnum": PaymentIntentInvoice.ObjectEnum,
        "PaymentIntentInvoice.StatusEnum": PaymentIntentInvoice.StatusEnum,
        "PaymentIntentLastPaymentError.TypeEnum": PaymentIntentLastPaymentError.TypeEnum,
        "PaymentIntentLatestCharge.ObjectEnum": PaymentIntentLatestCharge.ObjectEnum,
        "PaymentIntentLatestCharge.StatusEnum": PaymentIntentLatestCharge.StatusEnum,
        "PaymentIntentNextActionDisplayBankTransferInstructions.TypeEnum": PaymentIntentNextActionDisplayBankTransferInstructions.TypeEnum,
        "PaymentIntentNextActionVerifyWithMicrodeposits.MicrodepositTypeEnum": PaymentIntentNextActionVerifyWithMicrodeposits.MicrodepositTypeEnum,
        "PaymentIntentOnBehalfOf.BusinessTypeEnum": PaymentIntentOnBehalfOf.BusinessTypeEnum,
        "PaymentIntentOnBehalfOf.ObjectEnum": PaymentIntentOnBehalfOf.ObjectEnum,
        "PaymentIntentOnBehalfOf.TypeEnum": PaymentIntentOnBehalfOf.TypeEnum,
        "PaymentIntentPaymentMethod.ObjectEnum": PaymentIntentPaymentMethod.ObjectEnum,
        "PaymentIntentPaymentMethod.TypeEnum": PaymentIntentPaymentMethod.TypeEnum,
        "PaymentIntentPaymentMethodOptionsAcssDebit.SetupFutureUsageEnum": PaymentIntentPaymentMethodOptionsAcssDebit.SetupFutureUsageEnum,
        "PaymentIntentPaymentMethodOptionsAcssDebit.VerificationMethodEnum": PaymentIntentPaymentMethodOptionsAcssDebit.VerificationMethodEnum,
        "PaymentIntentPaymentMethodOptionsAuBecsDebit.SetupFutureUsageEnum": PaymentIntentPaymentMethodOptionsAuBecsDebit.SetupFutureUsageEnum,
        "PaymentIntentPaymentMethodOptionsCard.CaptureMethodEnum": PaymentIntentPaymentMethodOptionsCard.CaptureMethodEnum,
        "PaymentIntentPaymentMethodOptionsCard.NetworkEnum": PaymentIntentPaymentMethodOptionsCard.NetworkEnum,
        "PaymentIntentPaymentMethodOptionsCard.RequestThreeDSecureEnum": PaymentIntentPaymentMethodOptionsCard.RequestThreeDSecureEnum,
        "PaymentIntentPaymentMethodOptionsCard.SetupFutureUsageEnum": PaymentIntentPaymentMethodOptionsCard.SetupFutureUsageEnum,
        "PaymentIntentPaymentMethodOptionsCardMandateOptions.AmountTypeEnum": PaymentIntentPaymentMethodOptionsCardMandateOptions.AmountTypeEnum,
        "PaymentIntentPaymentMethodOptionsCardMandateOptions.IntervalEnum": PaymentIntentPaymentMethodOptionsCardMandateOptions.IntervalEnum,
        "PaymentIntentPaymentMethodOptionsCardMandateOptions.SupportedTypesEnum": PaymentIntentPaymentMethodOptionsCardMandateOptions.SupportedTypesEnum,
        "PaymentIntentPaymentMethodOptionsEps.SetupFutureUsageEnum": PaymentIntentPaymentMethodOptionsEps.SetupFutureUsageEnum,
        "PaymentIntentPaymentMethodOptionsLink.CaptureMethodEnum": PaymentIntentPaymentMethodOptionsLink.CaptureMethodEnum,
        "PaymentIntentPaymentMethodOptionsLink.SetupFutureUsageEnum": PaymentIntentPaymentMethodOptionsLink.SetupFutureUsageEnum,
        "PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit.PaymentScheduleEnum": PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit.PaymentScheduleEnum,
        "PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit.TransactionTypeEnum": PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit.TransactionTypeEnum,
        "PaymentIntentPaymentMethodOptionsSepaDebit.SetupFutureUsageEnum": PaymentIntentPaymentMethodOptionsSepaDebit.SetupFutureUsageEnum,
        "PaymentIntentPaymentMethodOptionsUsBankAccount.SetupFutureUsageEnum": PaymentIntentPaymentMethodOptionsUsBankAccount.SetupFutureUsageEnum,
        "PaymentIntentPaymentMethodOptionsUsBankAccount.VerificationMethodEnum": PaymentIntentPaymentMethodOptionsUsBankAccount.VerificationMethodEnum,
        "PaymentIntentProcessing.TypeEnum": PaymentIntentProcessing.TypeEnum,
        "PaymentIntentProcessing1.TypeEnum": PaymentIntentProcessing1.TypeEnum,
        "PaymentIntentReview.ClosedReasonEnum": PaymentIntentReview.ClosedReasonEnum,
        "PaymentIntentReview.ObjectEnum": PaymentIntentReview.ObjectEnum,
        "PaymentIntentReview.OpenedReasonEnum": PaymentIntentReview.OpenedReasonEnum,
        "PaymentIntentSource.BusinessTypeEnum": PaymentIntentSource.BusinessTypeEnum,
        "PaymentIntentSource.ObjectEnum": PaymentIntentSource.ObjectEnum,
        "PaymentIntentSource.TypeEnum": PaymentIntentSource.TypeEnum,
        "PaymentIntentSource.AvailablePayoutMethodsEnum": PaymentIntentSource.AvailablePayoutMethodsEnum,
        "PaymentIntentSource.DeletedEnum": PaymentIntentSource.DeletedEnum,
        "PaymentIntentTypeSpecificPaymentMethodOptionsClient.CaptureMethodEnum": PaymentIntentTypeSpecificPaymentMethodOptionsClient.CaptureMethodEnum,
        "PaymentIntentTypeSpecificPaymentMethodOptionsClient.SetupFutureUsageEnum": PaymentIntentTypeSpecificPaymentMethodOptionsClient.SetupFutureUsageEnum,
        "PaymentIntentTypeSpecificPaymentMethodOptionsClient.VerificationMethodEnum": PaymentIntentTypeSpecificPaymentMethodOptionsClient.VerificationMethodEnum,
        "PaymentLink.BillingAddressCollectionEnum": PaymentLink.BillingAddressCollectionEnum,
        "PaymentLink.CustomerCreationEnum": PaymentLink.CustomerCreationEnum,
        "PaymentLink.ObjectEnum": PaymentLink.ObjectEnum,
        "PaymentLink.PaymentMethodCollectionEnum": PaymentLink.PaymentMethodCollectionEnum,
        "PaymentLink.PaymentMethodTypesEnum": PaymentLink.PaymentMethodTypesEnum,
        "PaymentLink.SubmitTypeEnum": PaymentLink.SubmitTypeEnum,
        "PaymentLinkConsentCollection.PromotionsEnum": PaymentLinkConsentCollection.PromotionsEnum,
        "PaymentLinkConsentCollection.TermsOfServiceEnum": PaymentLinkConsentCollection.TermsOfServiceEnum,
        "PaymentLinkOnBehalfOf.BusinessTypeEnum": PaymentLinkOnBehalfOf.BusinessTypeEnum,
        "PaymentLinkOnBehalfOf.ObjectEnum": PaymentLinkOnBehalfOf.ObjectEnum,
        "PaymentLinkOnBehalfOf.TypeEnum": PaymentLinkOnBehalfOf.TypeEnum,
        "PaymentLinkPaymentIntentData.CaptureMethodEnum": PaymentLinkPaymentIntentData.CaptureMethodEnum,
        "PaymentLinkPaymentIntentData.SetupFutureUsageEnum": PaymentLinkPaymentIntentData.SetupFutureUsageEnum,
        "PaymentLinkShippingAddressCollection.AllowedCountriesEnum": PaymentLinkShippingAddressCollection.AllowedCountriesEnum,
        "PaymentLinksResourceAfterCompletion.TypeEnum": PaymentLinksResourceAfterCompletion.TypeEnum,
        "PaymentLinksResourceConsentCollection.PromotionsEnum": PaymentLinksResourceConsentCollection.PromotionsEnum,
        "PaymentLinksResourceConsentCollection.TermsOfServiceEnum": PaymentLinksResourceConsentCollection.TermsOfServiceEnum,
        "PaymentLinksResourceCustomFields.TypeEnum": PaymentLinksResourceCustomFields.TypeEnum,
        "PaymentLinksResourceCustomFieldsLabel.TypeEnum": PaymentLinksResourceCustomFieldsLabel.TypeEnum,
        "PaymentLinksResourceListLineItems.ObjectEnum": PaymentLinksResourceListLineItems.ObjectEnum,
        "PaymentLinksResourceListLineItems1.ObjectEnum": PaymentLinksResourceListLineItems1.ObjectEnum,
        "PaymentLinksResourcePaymentIntentData.CaptureMethodEnum": PaymentLinksResourcePaymentIntentData.CaptureMethodEnum,
        "PaymentLinksResourcePaymentIntentData.SetupFutureUsageEnum": PaymentLinksResourcePaymentIntentData.SetupFutureUsageEnum,
        "PaymentLinksResourcePaymentLinkList.ObjectEnum": PaymentLinksResourcePaymentLinkList.ObjectEnum,
        "PaymentLinksResourceShippingAddressCollection.AllowedCountriesEnum": PaymentLinksResourceShippingAddressCollection.AllowedCountriesEnum,
        "PaymentLinksResourceShippingOptionShippingRate.ObjectEnum": PaymentLinksResourceShippingOptionShippingRate.ObjectEnum,
        "PaymentLinksResourceShippingOptionShippingRate.TaxBehaviorEnum": PaymentLinksResourceShippingOptionShippingRate.TaxBehaviorEnum,
        "PaymentLinksResourceShippingOptionShippingRate.TypeEnum": PaymentLinksResourceShippingOptionShippingRate.TypeEnum,
        "PaymentLinksResourceTransferDataDestination.BusinessTypeEnum": PaymentLinksResourceTransferDataDestination.BusinessTypeEnum,
        "PaymentLinksResourceTransferDataDestination.ObjectEnum": PaymentLinksResourceTransferDataDestination.ObjectEnum,
        "PaymentLinksResourceTransferDataDestination.TypeEnum": PaymentLinksResourceTransferDataDestination.TypeEnum,
        "PaymentMethod.ObjectEnum": PaymentMethod.ObjectEnum,
        "PaymentMethod.TypeEnum": PaymentMethod.TypeEnum,
        "PaymentMethodCardWallet.TypeEnum": PaymentMethodCardWallet.TypeEnum,
        "PaymentMethodCardWallet1.TypeEnum": PaymentMethodCardWallet1.TypeEnum,
        "PaymentMethodCustomer.ObjectEnum": PaymentMethodCustomer.ObjectEnum,
        "PaymentMethodCustomer.TaxExemptEnum": PaymentMethodCustomer.TaxExemptEnum,
        "PaymentMethodDetailsAchDebit.AccountHolderTypeEnum": PaymentMethodDetailsAchDebit.AccountHolderTypeEnum,
        "PaymentMethodDetailsBancontact.PreferredLanguageEnum": PaymentMethodDetailsBancontact.PreferredLanguageEnum,
        "PaymentMethodDetailsBancontactGeneratedSepaDebit.ObjectEnum": PaymentMethodDetailsBancontactGeneratedSepaDebit.ObjectEnum,
        "PaymentMethodDetailsBancontactGeneratedSepaDebit.TypeEnum": PaymentMethodDetailsBancontactGeneratedSepaDebit.TypeEnum,
        "PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.ObjectEnum": PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.ObjectEnum,
        "PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.StatusEnum": PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.StatusEnum,
        "PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.TypeEnum": PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.TypeEnum,
        "PaymentMethodDetailsCardInstallmentsPlan.IntervalEnum": PaymentMethodDetailsCardInstallmentsPlan.IntervalEnum,
        "PaymentMethodDetailsCardInstallmentsPlan.TypeEnum": PaymentMethodDetailsCardInstallmentsPlan.TypeEnum,
        "PaymentMethodDetailsCardInstallmentsPlan1.IntervalEnum": PaymentMethodDetailsCardInstallmentsPlan1.IntervalEnum,
        "PaymentMethodDetailsCardInstallmentsPlan1.TypeEnum": PaymentMethodDetailsCardInstallmentsPlan1.TypeEnum,
        "PaymentMethodDetailsCardPresent.ReadMethodEnum": PaymentMethodDetailsCardPresent.ReadMethodEnum,
        "PaymentMethodDetailsCardPresentReceipt.AccountTypeEnum": PaymentMethodDetailsCardPresentReceipt.AccountTypeEnum,
        "PaymentMethodDetailsCardPresentReceipt1.AccountTypeEnum": PaymentMethodDetailsCardPresentReceipt1.AccountTypeEnum,
        "PaymentMethodDetailsCardThreeDSecure.AuthenticationFlowEnum": PaymentMethodDetailsCardThreeDSecure.AuthenticationFlowEnum,
        "PaymentMethodDetailsCardThreeDSecure.ResultEnum": PaymentMethodDetailsCardThreeDSecure.ResultEnum,
        "PaymentMethodDetailsCardThreeDSecure.ResultReasonEnum": PaymentMethodDetailsCardThreeDSecure.ResultReasonEnum,
        "PaymentMethodDetailsCardThreeDSecure.VersionEnum": PaymentMethodDetailsCardThreeDSecure.VersionEnum,
        "PaymentMethodDetailsCardWallet.TypeEnum": PaymentMethodDetailsCardWallet.TypeEnum,
        "PaymentMethodDetailsCardWallet1.TypeEnum": PaymentMethodDetailsCardWallet1.TypeEnum,
        "PaymentMethodDetailsEps.BankEnum": PaymentMethodDetailsEps.BankEnum,
        "PaymentMethodDetailsFpx.AccountHolderTypeEnum": PaymentMethodDetailsFpx.AccountHolderTypeEnum,
        "PaymentMethodDetailsFpx.BankEnum": PaymentMethodDetailsFpx.BankEnum,
        "PaymentMethodDetailsIdeal.BankEnum": PaymentMethodDetailsIdeal.BankEnum,
        "PaymentMethodDetailsIdeal.BicEnum": PaymentMethodDetailsIdeal.BicEnum,
        "PaymentMethodDetailsInteracPresent.ReadMethodEnum": PaymentMethodDetailsInteracPresent.ReadMethodEnum,
        "PaymentMethodDetailsInteracPresentReceipt.AccountTypeEnum": PaymentMethodDetailsInteracPresentReceipt.AccountTypeEnum,
        "PaymentMethodDetailsInteracPresentReceipt1.AccountTypeEnum": PaymentMethodDetailsInteracPresentReceipt1.AccountTypeEnum,
        "PaymentMethodDetailsKonbiniStore.ChainEnum": PaymentMethodDetailsKonbiniStore.ChainEnum,
        "PaymentMethodDetailsKonbiniStore1.ChainEnum": PaymentMethodDetailsKonbiniStore1.ChainEnum,
        "PaymentMethodDetailsP24.BankEnum": PaymentMethodDetailsP24.BankEnum,
        "PaymentMethodDetailsSofort.PreferredLanguageEnum": PaymentMethodDetailsSofort.PreferredLanguageEnum,
        "PaymentMethodDetailsUsBankAccount.AccountHolderTypeEnum": PaymentMethodDetailsUsBankAccount.AccountHolderTypeEnum,
        "PaymentMethodDetailsUsBankAccount.AccountTypeEnum": PaymentMethodDetailsUsBankAccount.AccountTypeEnum,
        "PaymentMethodEps.BankEnum": PaymentMethodEps.BankEnum,
        "PaymentMethodFpx.AccountHolderTypeEnum": PaymentMethodFpx.AccountHolderTypeEnum,
        "PaymentMethodFpx.BankEnum": PaymentMethodFpx.BankEnum,
        "PaymentMethodIdeal.BankEnum": PaymentMethodIdeal.BankEnum,
        "PaymentMethodIdeal.BicEnum": PaymentMethodIdeal.BicEnum,
        "PaymentMethodOptionsAffirm.CaptureMethodEnum": PaymentMethodOptionsAffirm.CaptureMethodEnum,
        "PaymentMethodOptionsAffirm.SetupFutureUsageEnum": PaymentMethodOptionsAffirm.SetupFutureUsageEnum,
        "PaymentMethodOptionsAfterpayClearpay.CaptureMethodEnum": PaymentMethodOptionsAfterpayClearpay.CaptureMethodEnum,
        "PaymentMethodOptionsAfterpayClearpay.SetupFutureUsageEnum": PaymentMethodOptionsAfterpayClearpay.SetupFutureUsageEnum,
        "PaymentMethodOptionsAlipay.SetupFutureUsageEnum": PaymentMethodOptionsAlipay.SetupFutureUsageEnum,
        "PaymentMethodOptionsBacsDebit.SetupFutureUsageEnum": PaymentMethodOptionsBacsDebit.SetupFutureUsageEnum,
        "PaymentMethodOptionsBancontact.PreferredLanguageEnum": PaymentMethodOptionsBancontact.PreferredLanguageEnum,
        "PaymentMethodOptionsBancontact.SetupFutureUsageEnum": PaymentMethodOptionsBancontact.SetupFutureUsageEnum,
        "PaymentMethodOptionsBoleto.SetupFutureUsageEnum": PaymentMethodOptionsBoleto.SetupFutureUsageEnum,
        "PaymentMethodOptionsCardInstallmentsPlan.IntervalEnum": PaymentMethodOptionsCardInstallmentsPlan.IntervalEnum,
        "PaymentMethodOptionsCardInstallmentsPlan.TypeEnum": PaymentMethodOptionsCardInstallmentsPlan.TypeEnum,
        "PaymentMethodOptionsCardMandateOptions.AmountTypeEnum": PaymentMethodOptionsCardMandateOptions.AmountTypeEnum,
        "PaymentMethodOptionsCardMandateOptions.IntervalEnum": PaymentMethodOptionsCardMandateOptions.IntervalEnum,
        "PaymentMethodOptionsCardMandateOptions.SupportedTypesEnum": PaymentMethodOptionsCardMandateOptions.SupportedTypesEnum,
        "PaymentMethodOptionsCustomerBalance.FundingTypeEnum": PaymentMethodOptionsCustomerBalance.FundingTypeEnum,
        "PaymentMethodOptionsCustomerBalance.SetupFutureUsageEnum": PaymentMethodOptionsCustomerBalance.SetupFutureUsageEnum,
        "PaymentMethodOptionsCustomerBalanceBankTransfer.RequestedAddressTypesEnum": PaymentMethodOptionsCustomerBalanceBankTransfer.RequestedAddressTypesEnum,
        "PaymentMethodOptionsCustomerBalanceBankTransfer.TypeEnum": PaymentMethodOptionsCustomerBalanceBankTransfer.TypeEnum,
        "PaymentMethodOptionsCustomerBalanceEuBankAccount.CountryEnum": PaymentMethodOptionsCustomerBalanceEuBankAccount.CountryEnum,
        "PaymentMethodOptionsFpx.SetupFutureUsageEnum": PaymentMethodOptionsFpx.SetupFutureUsageEnum,
        "PaymentMethodOptionsGiropay.SetupFutureUsageEnum": PaymentMethodOptionsGiropay.SetupFutureUsageEnum,
        "PaymentMethodOptionsGrabpay.SetupFutureUsageEnum": PaymentMethodOptionsGrabpay.SetupFutureUsageEnum,
        "PaymentMethodOptionsIdeal.SetupFutureUsageEnum": PaymentMethodOptionsIdeal.SetupFutureUsageEnum,
        "PaymentMethodOptionsKlarna.CaptureMethodEnum": PaymentMethodOptionsKlarna.CaptureMethodEnum,
        "PaymentMethodOptionsKlarna.SetupFutureUsageEnum": PaymentMethodOptionsKlarna.SetupFutureUsageEnum,
        "PaymentMethodOptionsKonbini.SetupFutureUsageEnum": PaymentMethodOptionsKonbini.SetupFutureUsageEnum,
        "PaymentMethodOptionsOxxo.SetupFutureUsageEnum": PaymentMethodOptionsOxxo.SetupFutureUsageEnum,
        "PaymentMethodOptionsP24.SetupFutureUsageEnum": PaymentMethodOptionsP24.SetupFutureUsageEnum,
        "PaymentMethodOptionsPaynow.SetupFutureUsageEnum": PaymentMethodOptionsPaynow.SetupFutureUsageEnum,
        "PaymentMethodOptionsPix.SetupFutureUsageEnum": PaymentMethodOptionsPix.SetupFutureUsageEnum,
        "PaymentMethodOptionsPromptpay.SetupFutureUsageEnum": PaymentMethodOptionsPromptpay.SetupFutureUsageEnum,
        "PaymentMethodOptionsSofort.PreferredLanguageEnum": PaymentMethodOptionsSofort.PreferredLanguageEnum,
        "PaymentMethodOptionsSofort.SetupFutureUsageEnum": PaymentMethodOptionsSofort.SetupFutureUsageEnum,
        "PaymentMethodOptionsWechatPay.ClientEnum": PaymentMethodOptionsWechatPay.ClientEnum,
        "PaymentMethodOptionsWechatPay.SetupFutureUsageEnum": PaymentMethodOptionsWechatPay.SetupFutureUsageEnum,
        "PaymentMethodP24.BankEnum": PaymentMethodP24.BankEnum,
        "PaymentMethodUsBankAccount.AccountHolderTypeEnum": PaymentMethodUsBankAccount.AccountHolderTypeEnum,
        "PaymentMethodUsBankAccount.AccountTypeEnum": PaymentMethodUsBankAccount.AccountTypeEnum,
        "PaymentMethodUsBankAccountNetworks.SupportedEnum": PaymentMethodUsBankAccountNetworks.SupportedEnum,
        "PaymentPagesCheckoutSessionAutomaticTax.StatusEnum": PaymentPagesCheckoutSessionAutomaticTax.StatusEnum,
        "PaymentPagesCheckoutSessionConsent.PromotionsEnum": PaymentPagesCheckoutSessionConsent.PromotionsEnum,
        "PaymentPagesCheckoutSessionConsent.TermsOfServiceEnum": PaymentPagesCheckoutSessionConsent.TermsOfServiceEnum,
        "PaymentPagesCheckoutSessionConsentCollection.PromotionsEnum": PaymentPagesCheckoutSessionConsentCollection.PromotionsEnum,
        "PaymentPagesCheckoutSessionConsentCollection.TermsOfServiceEnum": PaymentPagesCheckoutSessionConsentCollection.TermsOfServiceEnum,
        "PaymentPagesCheckoutSessionCustomFields.TypeEnum": PaymentPagesCheckoutSessionCustomFields.TypeEnum,
        "PaymentPagesCheckoutSessionCustomFieldsLabel.TypeEnum": PaymentPagesCheckoutSessionCustomFieldsLabel.TypeEnum,
        "PaymentPagesCheckoutSessionCustomerDetails.TaxExemptEnum": PaymentPagesCheckoutSessionCustomerDetails.TaxExemptEnum,
        "PaymentPagesCheckoutSessionList.ObjectEnum": PaymentPagesCheckoutSessionList.ObjectEnum,
        "PaymentPagesCheckoutSessionListLineItems.ObjectEnum": PaymentPagesCheckoutSessionListLineItems.ObjectEnum,
        "PaymentPagesCheckoutSessionListLineItems1.ObjectEnum": PaymentPagesCheckoutSessionListLineItems1.ObjectEnum,
        "PaymentPagesCheckoutSessionShippingAddressCollection.AllowedCountriesEnum": PaymentPagesCheckoutSessionShippingAddressCollection.AllowedCountriesEnum,
        "PaymentPagesCheckoutSessionShippingCostShippingRate.ObjectEnum": PaymentPagesCheckoutSessionShippingCostShippingRate.ObjectEnum,
        "PaymentPagesCheckoutSessionShippingCostShippingRate.TaxBehaviorEnum": PaymentPagesCheckoutSessionShippingCostShippingRate.TaxBehaviorEnum,
        "PaymentPagesCheckoutSessionShippingCostShippingRate.TypeEnum": PaymentPagesCheckoutSessionShippingCostShippingRate.TypeEnum,
        "PaymentPagesCheckoutSessionShippingOptionShippingRate.ObjectEnum": PaymentPagesCheckoutSessionShippingOptionShippingRate.ObjectEnum,
        "PaymentPagesCheckoutSessionShippingOptionShippingRate.TaxBehaviorEnum": PaymentPagesCheckoutSessionShippingOptionShippingRate.TaxBehaviorEnum,
        "PaymentPagesCheckoutSessionShippingOptionShippingRate.TypeEnum": PaymentPagesCheckoutSessionShippingOptionShippingRate.TypeEnum,
        "PaymentPagesCheckoutSessionTaxId.TypeEnum": PaymentPagesCheckoutSessionTaxId.TypeEnum,
        "PaymentSource.BusinessTypeEnum": PaymentSource.BusinessTypeEnum,
        "PaymentSource.ObjectEnum": PaymentSource.ObjectEnum,
        "PaymentSource.TypeEnum": PaymentSource.TypeEnum,
        "PaymentSource.AvailablePayoutMethodsEnum": PaymentSource.AvailablePayoutMethodsEnum,
        "Payout.ObjectEnum": Payout.ObjectEnum,
        "Payout.TypeEnum": Payout.TypeEnum,
        "PayoutBalanceTransaction.ObjectEnum": PayoutBalanceTransaction.ObjectEnum,
        "PayoutBalanceTransaction.TypeEnum": PayoutBalanceTransaction.TypeEnum,
        "PayoutDestination.AvailablePayoutMethodsEnum": PayoutDestination.AvailablePayoutMethodsEnum,
        "PayoutDestination.ObjectEnum": PayoutDestination.ObjectEnum,
        "PayoutDestination.DeletedEnum": PayoutDestination.DeletedEnum,
        "PayoutFailureBalanceTransaction.ObjectEnum": PayoutFailureBalanceTransaction.ObjectEnum,
        "PayoutFailureBalanceTransaction.TypeEnum": PayoutFailureBalanceTransaction.TypeEnum,
        "PayoutList.ObjectEnum": PayoutList.ObjectEnum,
        "PayoutOriginalPayout.ObjectEnum": PayoutOriginalPayout.ObjectEnum,
        "PayoutOriginalPayout.TypeEnum": PayoutOriginalPayout.TypeEnum,
        "PayoutReversedBy.ObjectEnum": PayoutReversedBy.ObjectEnum,
        "PayoutReversedBy.TypeEnum": PayoutReversedBy.TypeEnum,
        "Person.ObjectEnum": Person.ObjectEnum,
        "Person.PoliticalExposureEnum": Person.PoliticalExposureEnum,
        "PersonList.ObjectEnum": PersonList.ObjectEnum,
        "Plan.AggregateUsageEnum": Plan.AggregateUsageEnum,
        "Plan.BillingSchemeEnum": Plan.BillingSchemeEnum,
        "Plan.IntervalEnum": Plan.IntervalEnum,
        "Plan.ObjectEnum": Plan.ObjectEnum,
        "Plan.TiersModeEnum": Plan.TiersModeEnum,
        "Plan.UsageTypeEnum": Plan.UsageTypeEnum,
        "PlanList.ObjectEnum": PlanList.ObjectEnum,
        "PlanProduct.ObjectEnum": PlanProduct.ObjectEnum,
        "PlanProduct.TypeEnum": PlanProduct.TypeEnum,
        "PlanProduct.DeletedEnum": PlanProduct.DeletedEnum,
        "PlanTransformUsage.RoundEnum": PlanTransformUsage.RoundEnum,
        "PlatformEarningList.ObjectEnum": PlatformEarningList.ObjectEnum,
        "PlatformTaxFee.ObjectEnum": PlatformTaxFee.ObjectEnum,
        "PortalConfigurationList.ObjectEnum": PortalConfigurationList.ObjectEnum,
        "PortalCustomerUpdate.AllowedUpdatesEnum": PortalCustomerUpdate.AllowedUpdatesEnum,
        "PortalFlowsFlow.TypeEnum": PortalFlowsFlow.TypeEnum,
        "PortalFlowsFlowAfterCompletion.TypeEnum": PortalFlowsFlowAfterCompletion.TypeEnum,
        "PortalSubscriptionCancel.ModeEnum": PortalSubscriptionCancel.ModeEnum,
        "PortalSubscriptionCancel.ProrationBehaviorEnum": PortalSubscriptionCancel.ProrationBehaviorEnum,
        "PortalSubscriptionCancellationReason.OptionsEnum": PortalSubscriptionCancellationReason.OptionsEnum,
        "PortalSubscriptionUpdate.DefaultAllowedUpdatesEnum": PortalSubscriptionUpdate.DefaultAllowedUpdatesEnum,
        "PortalSubscriptionUpdate.ProrationBehaviorEnum": PortalSubscriptionUpdate.ProrationBehaviorEnum,
        "PostCustomersCustomerSourcesId200Response.AvailablePayoutMethodsEnum": PostCustomersCustomerSourcesId200Response.AvailablePayoutMethodsEnum,
        "PostCustomersCustomerSourcesId200Response.ObjectEnum": PostCustomersCustomerSourcesId200Response.ObjectEnum,
        "PostCustomersCustomerSourcesId200Response.TypeEnum": PostCustomersCustomerSourcesId200Response.TypeEnum,
        "PostFileLinksLinkRequestExpiresAtAnyOf": PostFileLinksLinkRequestExpiresAtAnyOf,
        "Price.BillingSchemeEnum": Price.BillingSchemeEnum,
        "Price.ObjectEnum": Price.ObjectEnum,
        "Price.TaxBehaviorEnum": Price.TaxBehaviorEnum,
        "Price.TiersModeEnum": Price.TiersModeEnum,
        "Price.TypeEnum": Price.TypeEnum,
        "PriceList.ObjectEnum": PriceList.ObjectEnum,
        "PriceProduct.ObjectEnum": PriceProduct.ObjectEnum,
        "PriceProduct.TypeEnum": PriceProduct.TypeEnum,
        "PriceProduct.DeletedEnum": PriceProduct.DeletedEnum,
        "PriceRecurring.AggregateUsageEnum": PriceRecurring.AggregateUsageEnum,
        "PriceRecurring.IntervalEnum": PriceRecurring.IntervalEnum,
        "PriceRecurring.UsageTypeEnum": PriceRecurring.UsageTypeEnum,
        "PriceTransformQuantity.RoundEnum": PriceTransformQuantity.RoundEnum,
        "Product.ObjectEnum": Product.ObjectEnum,
        "Product.TypeEnum": Product.TypeEnum,
        "ProductDefaultPrice.BillingSchemeEnum": ProductDefaultPrice.BillingSchemeEnum,
        "ProductDefaultPrice.ObjectEnum": ProductDefaultPrice.ObjectEnum,
        "ProductDefaultPrice.TaxBehaviorEnum": ProductDefaultPrice.TaxBehaviorEnum,
        "ProductDefaultPrice.TiersModeEnum": ProductDefaultPrice.TiersModeEnum,
        "ProductDefaultPrice.TypeEnum": ProductDefaultPrice.TypeEnum,
        "ProductList.ObjectEnum": ProductList.ObjectEnum,
        "ProductTaxCode.ObjectEnum": ProductTaxCode.ObjectEnum,
        "PromotionCode.ObjectEnum": PromotionCode.ObjectEnum,
        "PromotionCodeCustomer.ObjectEnum": PromotionCodeCustomer.ObjectEnum,
        "PromotionCodeCustomer.TaxExemptEnum": PromotionCodeCustomer.TaxExemptEnum,
        "PromotionCodeCustomer.DeletedEnum": PromotionCodeCustomer.DeletedEnum,
        "PromotionCodesResourcePromotionCodeList.ObjectEnum": PromotionCodesResourcePromotionCodeList.ObjectEnum,
        "Quote.CollectionMethodEnum": Quote.CollectionMethodEnum,
        "Quote.ObjectEnum": Quote.ObjectEnum,
        "Quote.StatusEnum": Quote.StatusEnum,
        "QuoteApplication.ObjectEnum": QuoteApplication.ObjectEnum,
        "QuoteApplication.DeletedEnum": QuoteApplication.DeletedEnum,
        "QuoteCustomer.ObjectEnum": QuoteCustomer.ObjectEnum,
        "QuoteCustomer.TaxExemptEnum": QuoteCustomer.TaxExemptEnum,
        "QuoteCustomer.DeletedEnum": QuoteCustomer.DeletedEnum,
        "QuoteDefaultTaxRatesInner.ObjectEnum": QuoteDefaultTaxRatesInner.ObjectEnum,
        "QuoteDefaultTaxRatesInner.TaxTypeEnum": QuoteDefaultTaxRatesInner.TaxTypeEnum,
        "QuoteInvoice.BillingReasonEnum": QuoteInvoice.BillingReasonEnum,
        "QuoteInvoice.CollectionMethodEnum": QuoteInvoice.CollectionMethodEnum,
        "QuoteInvoice.CustomerTaxExemptEnum": QuoteInvoice.CustomerTaxExemptEnum,
        "QuoteInvoice.ObjectEnum": QuoteInvoice.ObjectEnum,
        "QuoteInvoice.StatusEnum": QuoteInvoice.StatusEnum,
        "QuoteInvoice.DeletedEnum": QuoteInvoice.DeletedEnum,
        "QuoteSubscription.CollectionMethodEnum": QuoteSubscription.CollectionMethodEnum,
        "QuoteSubscription.ObjectEnum": QuoteSubscription.ObjectEnum,
        "QuoteSubscription.StatusEnum": QuoteSubscription.StatusEnum,
        "QuoteSubscriptionSchedule.EndBehaviorEnum": QuoteSubscriptionSchedule.EndBehaviorEnum,
        "QuoteSubscriptionSchedule.ObjectEnum": QuoteSubscriptionSchedule.ObjectEnum,
        "QuoteSubscriptionSchedule.StatusEnum": QuoteSubscriptionSchedule.StatusEnum,
        "QuoteTestClock.ObjectEnum": QuoteTestClock.ObjectEnum,
        "QuoteTestClock.StatusEnum": QuoteTestClock.StatusEnum,
        "QuotesResourceAutomaticTax.StatusEnum": QuotesResourceAutomaticTax.StatusEnum,
        "QuotesResourceComputedRecurring.IntervalEnum": QuotesResourceComputedRecurring.IntervalEnum,
        "QuotesResourceFromQuoteQuote.CollectionMethodEnum": QuotesResourceFromQuoteQuote.CollectionMethodEnum,
        "QuotesResourceFromQuoteQuote.ObjectEnum": QuotesResourceFromQuoteQuote.ObjectEnum,
        "QuotesResourceFromQuoteQuote.StatusEnum": QuotesResourceFromQuoteQuote.StatusEnum,
        "QuotesResourceListLineItems.ObjectEnum": QuotesResourceListLineItems.ObjectEnum,
        "QuotesResourceListLineItems1.ObjectEnum": QuotesResourceListLineItems1.ObjectEnum,
        "QuotesResourceListLineItems2.ObjectEnum": QuotesResourceListLineItems2.ObjectEnum,
        "QuotesResourceQuoteList.ObjectEnum": QuotesResourceQuoteList.ObjectEnum,
        "QuotesResourceRecurring.IntervalEnum": QuotesResourceRecurring.IntervalEnum,
        "RadarEarlyFraudWarning.ObjectEnum": RadarEarlyFraudWarning.ObjectEnum,
        "RadarEarlyFraudWarningCharge.ObjectEnum": RadarEarlyFraudWarningCharge.ObjectEnum,
        "RadarEarlyFraudWarningCharge.StatusEnum": RadarEarlyFraudWarningCharge.StatusEnum,
        "RadarEarlyFraudWarningList.ObjectEnum": RadarEarlyFraudWarningList.ObjectEnum,
        "RadarEarlyFraudWarningPaymentIntent.CancellationReasonEnum": RadarEarlyFraudWarningPaymentIntent.CancellationReasonEnum,
        "RadarEarlyFraudWarningPaymentIntent.CaptureMethodEnum": RadarEarlyFraudWarningPaymentIntent.CaptureMethodEnum,
        "RadarEarlyFraudWarningPaymentIntent.ConfirmationMethodEnum": RadarEarlyFraudWarningPaymentIntent.ConfirmationMethodEnum,
        "RadarEarlyFraudWarningPaymentIntent.ObjectEnum": RadarEarlyFraudWarningPaymentIntent.ObjectEnum,
        "RadarEarlyFraudWarningPaymentIntent.SetupFutureUsageEnum": RadarEarlyFraudWarningPaymentIntent.SetupFutureUsageEnum,
        "RadarEarlyFraudWarningPaymentIntent.StatusEnum": RadarEarlyFraudWarningPaymentIntent.StatusEnum,
        "RadarListListItemList.ObjectEnum": RadarListListItemList.ObjectEnum,
        "RadarListListItemList1.ObjectEnum": RadarListListItemList1.ObjectEnum,
        "RadarListListList.ObjectEnum": RadarListListList.ObjectEnum,
        "RadarReviewList.ObjectEnum": RadarReviewList.ObjectEnum,
        "RadarValueList.ItemTypeEnum": RadarValueList.ItemTypeEnum,
        "RadarValueList.ObjectEnum": RadarValueList.ObjectEnum,
        "RadarValueListItem.ObjectEnum": RadarValueListItem.ObjectEnum,
        "ReceivedPaymentMethodDetailsFinancialAccount.NetworkEnum": ReceivedPaymentMethodDetailsFinancialAccount.NetworkEnum,
        "Recurring.AggregateUsageEnum": Recurring.AggregateUsageEnum,
        "Recurring.IntervalEnum": Recurring.IntervalEnum,
        "Recurring.UsageTypeEnum": Recurring.UsageTypeEnum,
        "RecurringAdhoc.IntervalEnum": RecurringAdhoc.IntervalEnum,
        "RecurringPriceData.TaxBehaviorEnum": RecurringPriceData.TaxBehaviorEnum,
        "Refund.ObjectEnum": Refund.ObjectEnum,
        "Refund.ReasonEnum": Refund.ReasonEnum,
        "RefundCharge.ObjectEnum": RefundCharge.ObjectEnum,
        "RefundCharge.StatusEnum": RefundCharge.StatusEnum,
        "RefundFailureBalanceTransaction.ObjectEnum": RefundFailureBalanceTransaction.ObjectEnum,
        "RefundFailureBalanceTransaction.TypeEnum": RefundFailureBalanceTransaction.TypeEnum,
        "RefundList.ObjectEnum": RefundList.ObjectEnum,
        "RefundList1.ObjectEnum": RefundList1.ObjectEnum,
        "RefundPaymentIntent.CancellationReasonEnum": RefundPaymentIntent.CancellationReasonEnum,
        "RefundPaymentIntent.CaptureMethodEnum": RefundPaymentIntent.CaptureMethodEnum,
        "RefundPaymentIntent.ConfirmationMethodEnum": RefundPaymentIntent.ConfirmationMethodEnum,
        "RefundPaymentIntent.ObjectEnum": RefundPaymentIntent.ObjectEnum,
        "RefundPaymentIntent.SetupFutureUsageEnum": RefundPaymentIntent.SetupFutureUsageEnum,
        "RefundPaymentIntent.StatusEnum": RefundPaymentIntent.StatusEnum,
        "RefundSourceTransferReversal.ObjectEnum": RefundSourceTransferReversal.ObjectEnum,
        "RefundTransferReversal.ObjectEnum": RefundTransferReversal.ObjectEnum,
        "ReportingReportRun.ObjectEnum": ReportingReportRun.ObjectEnum,
        "ReportingReportRunResult.ObjectEnum": ReportingReportRunResult.ObjectEnum,
        "ReportingReportRunResult.PurposeEnum": ReportingReportRunResult.PurposeEnum,
        "ReportingReportType.ObjectEnum": ReportingReportType.ObjectEnum,
        "ReserveTransaction.ObjectEnum": ReserveTransaction.ObjectEnum,
        "Review.ClosedReasonEnum": Review.ClosedReasonEnum,
        "Review.ObjectEnum": Review.ObjectEnum,
        "Review.OpenedReasonEnum": Review.OpenedReasonEnum,
        "ReviewCharge.ObjectEnum": ReviewCharge.ObjectEnum,
        "ReviewCharge.StatusEnum": ReviewCharge.StatusEnum,
        "ReviewPaymentIntent.CancellationReasonEnum": ReviewPaymentIntent.CancellationReasonEnum,
        "ReviewPaymentIntent.CaptureMethodEnum": ReviewPaymentIntent.CaptureMethodEnum,
        "ReviewPaymentIntent.ConfirmationMethodEnum": ReviewPaymentIntent.ConfirmationMethodEnum,
        "ReviewPaymentIntent.ObjectEnum": ReviewPaymentIntent.ObjectEnum,
        "ReviewPaymentIntent.SetupFutureUsageEnum": ReviewPaymentIntent.SetupFutureUsageEnum,
        "ReviewPaymentIntent.StatusEnum": ReviewPaymentIntent.StatusEnum,
        "ScheduledQueryRun.ObjectEnum": ScheduledQueryRun.ObjectEnum,
        "ScheduledQueryRunFile.ObjectEnum": ScheduledQueryRunFile.ObjectEnum,
        "ScheduledQueryRunFile.PurposeEnum": ScheduledQueryRunFile.PurposeEnum,
        "ScopeParam.TypeEnum": ScopeParam.TypeEnum,
        "SearchResult.ObjectEnum": SearchResult.ObjectEnum,
        "SearchResult1.ObjectEnum": SearchResult1.ObjectEnum,
        "SearchResult2.ObjectEnum": SearchResult2.ObjectEnum,
        "SearchResult3.ObjectEnum": SearchResult3.ObjectEnum,
        "SearchResult4.ObjectEnum": SearchResult4.ObjectEnum,
        "SearchResult5.ObjectEnum": SearchResult5.ObjectEnum,
        "SearchResult6.ObjectEnum": SearchResult6.ObjectEnum,
        "SecretServiceResourceScope.TypeEnum": SecretServiceResourceScope.TypeEnum,
        "SecretServiceResourceSecretList.ObjectEnum": SecretServiceResourceSecretList.ObjectEnum,
        "SepaDebitGeneratedFromCharge.ObjectEnum": SepaDebitGeneratedFromCharge.ObjectEnum,
        "SepaDebitGeneratedFromCharge.StatusEnum": SepaDebitGeneratedFromCharge.StatusEnum,
        "SepaDebitGeneratedFromSetupAttempt.FlowDirectionsEnum": SepaDebitGeneratedFromSetupAttempt.FlowDirectionsEnum,
        "SepaDebitGeneratedFromSetupAttempt.ObjectEnum": SepaDebitGeneratedFromSetupAttempt.ObjectEnum,
        "SetupAttempt.FlowDirectionsEnum": SetupAttempt.FlowDirectionsEnum,
        "SetupAttempt.ObjectEnum": SetupAttempt.ObjectEnum,
        "SetupAttemptApplication.ObjectEnum": SetupAttemptApplication.ObjectEnum,
        "SetupAttemptCustomer.ObjectEnum": SetupAttemptCustomer.ObjectEnum,
        "SetupAttemptCustomer.TaxExemptEnum": SetupAttemptCustomer.TaxExemptEnum,
        "SetupAttemptCustomer.DeletedEnum": SetupAttemptCustomer.DeletedEnum,
        "SetupAttemptOnBehalfOf.BusinessTypeEnum": SetupAttemptOnBehalfOf.BusinessTypeEnum,
        "SetupAttemptOnBehalfOf.ObjectEnum": SetupAttemptOnBehalfOf.ObjectEnum,
        "SetupAttemptOnBehalfOf.TypeEnum": SetupAttemptOnBehalfOf.TypeEnum,
        "SetupAttemptPaymentMethod.ObjectEnum": SetupAttemptPaymentMethod.ObjectEnum,
        "SetupAttemptPaymentMethod.TypeEnum": SetupAttemptPaymentMethod.TypeEnum,
        "SetupAttemptPaymentMethodDetailsBancontact.PreferredLanguageEnum": SetupAttemptPaymentMethodDetailsBancontact.PreferredLanguageEnum,
        "SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebit.ObjectEnum": SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebit.ObjectEnum,
        "SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebit.TypeEnum": SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebit.TypeEnum,
        "SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitMandate.ObjectEnum": SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitMandate.ObjectEnum,
        "SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitMandate.StatusEnum": SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitMandate.StatusEnum,
        "SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitMandate.TypeEnum": SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitMandate.TypeEnum,
        "SetupAttemptPaymentMethodDetailsCardPresentGeneratedCard.ObjectEnum": SetupAttemptPaymentMethodDetailsCardPresentGeneratedCard.ObjectEnum,
        "SetupAttemptPaymentMethodDetailsCardPresentGeneratedCard.TypeEnum": SetupAttemptPaymentMethodDetailsCardPresentGeneratedCard.TypeEnum,
        "SetupAttemptPaymentMethodDetailsCardThreeDSecure.AuthenticationFlowEnum": SetupAttemptPaymentMethodDetailsCardThreeDSecure.AuthenticationFlowEnum,
        "SetupAttemptPaymentMethodDetailsCardThreeDSecure.ResultEnum": SetupAttemptPaymentMethodDetailsCardThreeDSecure.ResultEnum,
        "SetupAttemptPaymentMethodDetailsCardThreeDSecure.ResultReasonEnum": SetupAttemptPaymentMethodDetailsCardThreeDSecure.ResultReasonEnum,
        "SetupAttemptPaymentMethodDetailsCardThreeDSecure.VersionEnum": SetupAttemptPaymentMethodDetailsCardThreeDSecure.VersionEnum,
        "SetupAttemptPaymentMethodDetailsIdeal.BankEnum": SetupAttemptPaymentMethodDetailsIdeal.BankEnum,
        "SetupAttemptPaymentMethodDetailsIdeal.BicEnum": SetupAttemptPaymentMethodDetailsIdeal.BicEnum,
        "SetupAttemptPaymentMethodDetailsSofort.PreferredLanguageEnum": SetupAttemptPaymentMethodDetailsSofort.PreferredLanguageEnum,
        "SetupAttemptSetupError.TypeEnum": SetupAttemptSetupError.TypeEnum,
        "SetupAttemptSetupIntent.CancellationReasonEnum": SetupAttemptSetupIntent.CancellationReasonEnum,
        "SetupAttemptSetupIntent.FlowDirectionsEnum": SetupAttemptSetupIntent.FlowDirectionsEnum,
        "SetupAttemptSetupIntent.ObjectEnum": SetupAttemptSetupIntent.ObjectEnum,
        "SetupAttemptSetupIntent.StatusEnum": SetupAttemptSetupIntent.StatusEnum,
        "SetupIntent.CancellationReasonEnum": SetupIntent.CancellationReasonEnum,
        "SetupIntent.FlowDirectionsEnum": SetupIntent.FlowDirectionsEnum,
        "SetupIntent.ObjectEnum": SetupIntent.ObjectEnum,
        "SetupIntent.StatusEnum": SetupIntent.StatusEnum,
        "SetupIntentApplication.ObjectEnum": SetupIntentApplication.ObjectEnum,
        "SetupIntentCustomer.ObjectEnum": SetupIntentCustomer.ObjectEnum,
        "SetupIntentCustomer.TaxExemptEnum": SetupIntentCustomer.TaxExemptEnum,
        "SetupIntentCustomer.DeletedEnum": SetupIntentCustomer.DeletedEnum,
        "SetupIntentLastSetupError.TypeEnum": SetupIntentLastSetupError.TypeEnum,
        "SetupIntentLatestAttempt.FlowDirectionsEnum": SetupIntentLatestAttempt.FlowDirectionsEnum,
        "SetupIntentLatestAttempt.ObjectEnum": SetupIntentLatestAttempt.ObjectEnum,
        "SetupIntentMandate.ObjectEnum": SetupIntentMandate.ObjectEnum,
        "SetupIntentMandate.StatusEnum": SetupIntentMandate.StatusEnum,
        "SetupIntentMandate.TypeEnum": SetupIntentMandate.TypeEnum,
        "SetupIntentNextActionVerifyWithMicrodeposits.MicrodepositTypeEnum": SetupIntentNextActionVerifyWithMicrodeposits.MicrodepositTypeEnum,
        "SetupIntentOnBehalfOf.BusinessTypeEnum": SetupIntentOnBehalfOf.BusinessTypeEnum,
        "SetupIntentOnBehalfOf.ObjectEnum": SetupIntentOnBehalfOf.ObjectEnum,
        "SetupIntentOnBehalfOf.TypeEnum": SetupIntentOnBehalfOf.TypeEnum,
        "SetupIntentPaymentMethod.ObjectEnum": SetupIntentPaymentMethod.ObjectEnum,
        "SetupIntentPaymentMethod.TypeEnum": SetupIntentPaymentMethod.TypeEnum,
        "SetupIntentPaymentMethodOptionsAcssDebit.CurrencyEnum": SetupIntentPaymentMethodOptionsAcssDebit.CurrencyEnum,
        "SetupIntentPaymentMethodOptionsAcssDebit.VerificationMethodEnum": SetupIntentPaymentMethodOptionsAcssDebit.VerificationMethodEnum,
        "SetupIntentPaymentMethodOptionsCard.NetworkEnum": SetupIntentPaymentMethodOptionsCard.NetworkEnum,
        "SetupIntentPaymentMethodOptionsCard.RequestThreeDSecureEnum": SetupIntentPaymentMethodOptionsCard.RequestThreeDSecureEnum,
        "SetupIntentPaymentMethodOptionsCardMandateOptions.AmountTypeEnum": SetupIntentPaymentMethodOptionsCardMandateOptions.AmountTypeEnum,
        "SetupIntentPaymentMethodOptionsCardMandateOptions.IntervalEnum": SetupIntentPaymentMethodOptionsCardMandateOptions.IntervalEnum,
        "SetupIntentPaymentMethodOptionsCardMandateOptions.SupportedTypesEnum": SetupIntentPaymentMethodOptionsCardMandateOptions.SupportedTypesEnum,
        "SetupIntentPaymentMethodOptionsCardMandateOptions1.AmountTypeEnum": SetupIntentPaymentMethodOptionsCardMandateOptions1.AmountTypeEnum,
        "SetupIntentPaymentMethodOptionsCardMandateOptions1.IntervalEnum": SetupIntentPaymentMethodOptionsCardMandateOptions1.IntervalEnum,
        "SetupIntentPaymentMethodOptionsCardMandateOptions1.SupportedTypesEnum": SetupIntentPaymentMethodOptionsCardMandateOptions1.SupportedTypesEnum,
        "SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit.DefaultForEnum": SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit.DefaultForEnum,
        "SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit.PaymentScheduleEnum": SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit.PaymentScheduleEnum,
        "SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit.TransactionTypeEnum": SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit.TransactionTypeEnum,
        "SetupIntentPaymentMethodOptionsMandateOptionsBlik.TypeEnum": SetupIntentPaymentMethodOptionsMandateOptionsBlik.TypeEnum,
        "SetupIntentPaymentMethodOptionsUsBankAccount.VerificationMethodEnum": SetupIntentPaymentMethodOptionsUsBankAccount.VerificationMethodEnum,
        "SetupIntentSingleUseMandate.ObjectEnum": SetupIntentSingleUseMandate.ObjectEnum,
        "SetupIntentSingleUseMandate.StatusEnum": SetupIntentSingleUseMandate.StatusEnum,
        "SetupIntentSingleUseMandate.TypeEnum": SetupIntentSingleUseMandate.TypeEnum,
        "SetupIntentTypeSpecificPaymentMethodOptionsClient.VerificationMethodEnum": SetupIntentTypeSpecificPaymentMethodOptionsClient.VerificationMethodEnum,
        "ShippingRate.ObjectEnum": ShippingRate.ObjectEnum,
        "ShippingRate.TaxBehaviorEnum": ShippingRate.TaxBehaviorEnum,
        "ShippingRate.TypeEnum": ShippingRate.TypeEnum,
        "ShippingRateCurrencyOption.TaxBehaviorEnum": ShippingRateCurrencyOption.TaxBehaviorEnum,
        "ShippingRateDeliveryEstimateBound.UnitEnum": ShippingRateDeliveryEstimateBound.UnitEnum,
        "ShippingRateDeliveryEstimateMaximum.UnitEnum": ShippingRateDeliveryEstimateMaximum.UnitEnum,
        "ShippingRateDeliveryEstimateMinimum.UnitEnum": ShippingRateDeliveryEstimateMinimum.UnitEnum,
        "ShippingRateTaxCode.ObjectEnum": ShippingRateTaxCode.ObjectEnum,
        "ShippingResourcesShippingRateList.ObjectEnum": ShippingResourcesShippingRateList.ObjectEnum,
        "SigmaScheduledQueryRunList.ObjectEnum": SigmaScheduledQueryRunList.ObjectEnum,
        "Source.ObjectEnum": Source.ObjectEnum,
        "Source.TypeEnum": Source.TypeEnum,
        "SourceMandateNotification.ObjectEnum": SourceMandateNotification.ObjectEnum,
        "SourceTransaction.ObjectEnum": SourceTransaction.ObjectEnum,
        "SourceTransaction.TypeEnum": SourceTransaction.TypeEnum,
        "Subscription.CollectionMethodEnum": Subscription.CollectionMethodEnum,
        "Subscription.ObjectEnum": Subscription.ObjectEnum,
        "Subscription.StatusEnum": Subscription.StatusEnum,
        "SubscriptionApplication.ObjectEnum": SubscriptionApplication.ObjectEnum,
        "SubscriptionApplication.DeletedEnum": SubscriptionApplication.DeletedEnum,
        "SubscriptionCustomer.ObjectEnum": SubscriptionCustomer.ObjectEnum,
        "SubscriptionCustomer.TaxExemptEnum": SubscriptionCustomer.TaxExemptEnum,
        "SubscriptionCustomer.DeletedEnum": SubscriptionCustomer.DeletedEnum,
        "SubscriptionDefaultPaymentMethod.ObjectEnum": SubscriptionDefaultPaymentMethod.ObjectEnum,
        "SubscriptionDefaultPaymentMethod.TypeEnum": SubscriptionDefaultPaymentMethod.TypeEnum,
        "SubscriptionDefaultSource.BusinessTypeEnum": SubscriptionDefaultSource.BusinessTypeEnum,
        "SubscriptionDefaultSource.ObjectEnum": SubscriptionDefaultSource.ObjectEnum,
        "SubscriptionDefaultSource.TypeEnum": SubscriptionDefaultSource.TypeEnum,
        "SubscriptionDefaultSource.AvailablePayoutMethodsEnum": SubscriptionDefaultSource.AvailablePayoutMethodsEnum,
        "SubscriptionDiscount.ObjectEnum": SubscriptionDiscount.ObjectEnum,
        "SubscriptionItem.ObjectEnum": SubscriptionItem.ObjectEnum,
        "SubscriptionItemList.ObjectEnum": SubscriptionItemList.ObjectEnum,
        "SubscriptionLatestInvoice.BillingReasonEnum": SubscriptionLatestInvoice.BillingReasonEnum,
        "SubscriptionLatestInvoice.CollectionMethodEnum": SubscriptionLatestInvoice.CollectionMethodEnum,
        "SubscriptionLatestInvoice.CustomerTaxExemptEnum": SubscriptionLatestInvoice.CustomerTaxExemptEnum,
        "SubscriptionLatestInvoice.ObjectEnum": SubscriptionLatestInvoice.ObjectEnum,
        "SubscriptionLatestInvoice.StatusEnum": SubscriptionLatestInvoice.StatusEnum,
        "SubscriptionList.ObjectEnum": SubscriptionList.ObjectEnum,
        "SubscriptionOnBehalfOf.BusinessTypeEnum": SubscriptionOnBehalfOf.BusinessTypeEnum,
        "SubscriptionOnBehalfOf.ObjectEnum": SubscriptionOnBehalfOf.ObjectEnum,
        "SubscriptionOnBehalfOf.TypeEnum": SubscriptionOnBehalfOf.TypeEnum,
        "SubscriptionPauseCollection.BehaviorEnum": SubscriptionPauseCollection.BehaviorEnum,
        "SubscriptionPaymentMethodOptionsCard.NetworkEnum": SubscriptionPaymentMethodOptionsCard.NetworkEnum,
        "SubscriptionPaymentMethodOptionsCard.RequestThreeDSecureEnum": SubscriptionPaymentMethodOptionsCard.RequestThreeDSecureEnum,
        "SubscriptionPaymentSettings.PaymentMethodTypesEnum": SubscriptionPaymentSettings.PaymentMethodTypesEnum,
        "SubscriptionPaymentSettings.SaveDefaultPaymentMethodEnum": SubscriptionPaymentSettings.SaveDefaultPaymentMethodEnum,
        "SubscriptionPendingInvoiceItemInterval.IntervalEnum": SubscriptionPendingInvoiceItemInterval.IntervalEnum,
        "SubscriptionPendingInvoiceItemInterval1.IntervalEnum": SubscriptionPendingInvoiceItemInterval1.IntervalEnum,
        "SubscriptionPendingSetupIntent.CancellationReasonEnum": SubscriptionPendingSetupIntent.CancellationReasonEnum,
        "SubscriptionPendingSetupIntent.FlowDirectionsEnum": SubscriptionPendingSetupIntent.FlowDirectionsEnum,
        "SubscriptionPendingSetupIntent.ObjectEnum": SubscriptionPendingSetupIntent.ObjectEnum,
        "SubscriptionPendingSetupIntent.StatusEnum": SubscriptionPendingSetupIntent.StatusEnum,
        "SubscriptionSchedule.EndBehaviorEnum": SubscriptionSchedule.EndBehaviorEnum,
        "SubscriptionSchedule.ObjectEnum": SubscriptionSchedule.ObjectEnum,
        "SubscriptionSchedule.StatusEnum": SubscriptionSchedule.StatusEnum,
        "SubscriptionSchedule1.EndBehaviorEnum": SubscriptionSchedule1.EndBehaviorEnum,
        "SubscriptionSchedule1.ObjectEnum": SubscriptionSchedule1.ObjectEnum,
        "SubscriptionSchedule1.StatusEnum": SubscriptionSchedule1.StatusEnum,
        "SubscriptionScheduleAddInvoiceItemPrice.BillingSchemeEnum": SubscriptionScheduleAddInvoiceItemPrice.BillingSchemeEnum,
        "SubscriptionScheduleAddInvoiceItemPrice.ObjectEnum": SubscriptionScheduleAddInvoiceItemPrice.ObjectEnum,
        "SubscriptionScheduleAddInvoiceItemPrice.TaxBehaviorEnum": SubscriptionScheduleAddInvoiceItemPrice.TaxBehaviorEnum,
        "SubscriptionScheduleAddInvoiceItemPrice.TiersModeEnum": SubscriptionScheduleAddInvoiceItemPrice.TiersModeEnum,
        "SubscriptionScheduleAddInvoiceItemPrice.TypeEnum": SubscriptionScheduleAddInvoiceItemPrice.TypeEnum,
        "SubscriptionScheduleAddInvoiceItemPrice.DeletedEnum": SubscriptionScheduleAddInvoiceItemPrice.DeletedEnum,
        "SubscriptionScheduleApplication.ObjectEnum": SubscriptionScheduleApplication.ObjectEnum,
        "SubscriptionScheduleApplication.DeletedEnum": SubscriptionScheduleApplication.DeletedEnum,
        "SubscriptionScheduleConfigurationItemPlan.AggregateUsageEnum": SubscriptionScheduleConfigurationItemPlan.AggregateUsageEnum,
        "SubscriptionScheduleConfigurationItemPlan.BillingSchemeEnum": SubscriptionScheduleConfigurationItemPlan.BillingSchemeEnum,
        "SubscriptionScheduleConfigurationItemPlan.IntervalEnum": SubscriptionScheduleConfigurationItemPlan.IntervalEnum,
        "SubscriptionScheduleConfigurationItemPlan.ObjectEnum": SubscriptionScheduleConfigurationItemPlan.ObjectEnum,
        "SubscriptionScheduleConfigurationItemPlan.TiersModeEnum": SubscriptionScheduleConfigurationItemPlan.TiersModeEnum,
        "SubscriptionScheduleConfigurationItemPlan.UsageTypeEnum": SubscriptionScheduleConfigurationItemPlan.UsageTypeEnum,
        "SubscriptionScheduleConfigurationItemPlan.DeletedEnum": SubscriptionScheduleConfigurationItemPlan.DeletedEnum,
        "SubscriptionScheduleConfigurationItemPrice.BillingSchemeEnum": SubscriptionScheduleConfigurationItemPrice.BillingSchemeEnum,
        "SubscriptionScheduleConfigurationItemPrice.ObjectEnum": SubscriptionScheduleConfigurationItemPrice.ObjectEnum,
        "SubscriptionScheduleConfigurationItemPrice.TaxBehaviorEnum": SubscriptionScheduleConfigurationItemPrice.TaxBehaviorEnum,
        "SubscriptionScheduleConfigurationItemPrice.TiersModeEnum": SubscriptionScheduleConfigurationItemPrice.TiersModeEnum,
        "SubscriptionScheduleConfigurationItemPrice.TypeEnum": SubscriptionScheduleConfigurationItemPrice.TypeEnum,
        "SubscriptionScheduleConfigurationItemPrice.DeletedEnum": SubscriptionScheduleConfigurationItemPrice.DeletedEnum,
        "SubscriptionScheduleCustomer.ObjectEnum": SubscriptionScheduleCustomer.ObjectEnum,
        "SubscriptionScheduleCustomer.TaxExemptEnum": SubscriptionScheduleCustomer.TaxExemptEnum,
        "SubscriptionScheduleCustomer.DeletedEnum": SubscriptionScheduleCustomer.DeletedEnum,
        "SubscriptionSchedulePhaseConfiguration.BillingCycleAnchorEnum": SubscriptionSchedulePhaseConfiguration.BillingCycleAnchorEnum,
        "SubscriptionSchedulePhaseConfiguration.CollectionMethodEnum": SubscriptionSchedulePhaseConfiguration.CollectionMethodEnum,
        "SubscriptionSchedulePhaseConfiguration.ProrationBehaviorEnum": SubscriptionSchedulePhaseConfiguration.ProrationBehaviorEnum,
        "SubscriptionSchedulePhaseConfigurationCoupon.DurationEnum": SubscriptionSchedulePhaseConfigurationCoupon.DurationEnum,
        "SubscriptionSchedulePhaseConfigurationCoupon.ObjectEnum": SubscriptionSchedulePhaseConfigurationCoupon.ObjectEnum,
        "SubscriptionSchedulePhaseConfigurationCoupon.DeletedEnum": SubscriptionSchedulePhaseConfigurationCoupon.DeletedEnum,
        "SubscriptionSchedulePhaseConfigurationDefaultPaymentMethod.ObjectEnum": SubscriptionSchedulePhaseConfigurationDefaultPaymentMethod.ObjectEnum,
        "SubscriptionSchedulePhaseConfigurationDefaultPaymentMethod.TypeEnum": SubscriptionSchedulePhaseConfigurationDefaultPaymentMethod.TypeEnum,
        "SubscriptionSchedulePhaseConfigurationOnBehalfOf.BusinessTypeEnum": SubscriptionSchedulePhaseConfigurationOnBehalfOf.BusinessTypeEnum,
        "SubscriptionSchedulePhaseConfigurationOnBehalfOf.ObjectEnum": SubscriptionSchedulePhaseConfigurationOnBehalfOf.ObjectEnum,
        "SubscriptionSchedulePhaseConfigurationOnBehalfOf.TypeEnum": SubscriptionSchedulePhaseConfigurationOnBehalfOf.TypeEnum,
        "SubscriptionScheduleSubscription.CollectionMethodEnum": SubscriptionScheduleSubscription.CollectionMethodEnum,
        "SubscriptionScheduleSubscription.ObjectEnum": SubscriptionScheduleSubscription.ObjectEnum,
        "SubscriptionScheduleSubscription.StatusEnum": SubscriptionScheduleSubscription.StatusEnum,
        "SubscriptionScheduleTestClock.ObjectEnum": SubscriptionScheduleTestClock.ObjectEnum,
        "SubscriptionScheduleTestClock.StatusEnum": SubscriptionScheduleTestClock.StatusEnum,
        "SubscriptionSchedulesResourceDefaultSettings.BillingCycleAnchorEnum": SubscriptionSchedulesResourceDefaultSettings.BillingCycleAnchorEnum,
        "SubscriptionSchedulesResourceDefaultSettings.CollectionMethodEnum": SubscriptionSchedulesResourceDefaultSettings.CollectionMethodEnum,
        "SubscriptionSchedulesResourceDefaultSettingsDefaultPaymentMethod.ObjectEnum": SubscriptionSchedulesResourceDefaultSettingsDefaultPaymentMethod.ObjectEnum,
        "SubscriptionSchedulesResourceDefaultSettingsDefaultPaymentMethod.TypeEnum": SubscriptionSchedulesResourceDefaultSettingsDefaultPaymentMethod.TypeEnum,
        "SubscriptionSchedulesResourceScheduleList.ObjectEnum": SubscriptionSchedulesResourceScheduleList.ObjectEnum,
        "SubscriptionTestClock.ObjectEnum": SubscriptionTestClock.ObjectEnum,
        "SubscriptionTestClock.StatusEnum": SubscriptionTestClock.StatusEnum,
        "SubscriptionsItemsSubscriptionItemList.ObjectEnum": SubscriptionsItemsSubscriptionItemList.ObjectEnum,
        "SubscriptionsResourcePauseCollection.BehaviorEnum": SubscriptionsResourcePauseCollection.BehaviorEnum,
        "SubscriptionsResourcePaymentMethodOptionsAcssDebit.VerificationMethodEnum": SubscriptionsResourcePaymentMethodOptionsAcssDebit.VerificationMethodEnum,
        "SubscriptionsResourcePaymentMethodOptionsBancontact.PreferredLanguageEnum": SubscriptionsResourcePaymentMethodOptionsBancontact.PreferredLanguageEnum,
        "SubscriptionsResourcePaymentMethodOptionsCard.NetworkEnum": SubscriptionsResourcePaymentMethodOptionsCard.NetworkEnum,
        "SubscriptionsResourcePaymentMethodOptionsCard.RequestThreeDSecureEnum": SubscriptionsResourcePaymentMethodOptionsCard.RequestThreeDSecureEnum,
        "SubscriptionsResourcePaymentMethodOptionsCustomerBalance.FundingTypeEnum": SubscriptionsResourcePaymentMethodOptionsCustomerBalance.FundingTypeEnum,
        "SubscriptionsResourcePaymentMethodOptionsUsBankAccount.VerificationMethodEnum": SubscriptionsResourcePaymentMethodOptionsUsBankAccount.VerificationMethodEnum,
        "SubscriptionsResourcePaymentSettings.PaymentMethodTypesEnum": SubscriptionsResourcePaymentSettings.PaymentMethodTypesEnum,
        "SubscriptionsResourcePaymentSettings.SaveDefaultPaymentMethodEnum": SubscriptionsResourcePaymentSettings.SaveDefaultPaymentMethodEnum,
        "SubscriptionsSubscriptionList.ObjectEnum": SubscriptionsSubscriptionList.ObjectEnum,
        "SubscriptionsTrialsResourceEndBehavior.MissingPaymentMethodEnum": SubscriptionsTrialsResourceEndBehavior.MissingPaymentMethodEnum,
        "TaxCode.ObjectEnum": TaxCode.ObjectEnum,
        "TaxDeductedAtSource.ObjectEnum": TaxDeductedAtSource.ObjectEnum,
        "TaxIDsList.ObjectEnum": TaxIDsList.ObjectEnum,
        "TaxIDsList1.ObjectEnum": TaxIDsList1.ObjectEnum,
        "TaxId.ObjectEnum": TaxId.ObjectEnum,
        "TaxId.TypeEnum": TaxId.TypeEnum,
        "TaxIdCustomer.ObjectEnum": TaxIdCustomer.ObjectEnum,
        "TaxIdCustomer.TaxExemptEnum": TaxIdCustomer.TaxExemptEnum,
        "TaxIdVerification.StatusEnum": TaxIdVerification.StatusEnum,
        "TaxIdVerification1.StatusEnum": TaxIdVerification1.StatusEnum,
        "TaxProductResourceTaxCodeList.ObjectEnum": TaxProductResourceTaxCodeList.ObjectEnum,
        "TaxRate.ObjectEnum": TaxRate.ObjectEnum,
        "TaxRate.TaxTypeEnum": TaxRate.TaxTypeEnum,
        "TaxRatesList.ObjectEnum": TaxRatesList.ObjectEnum,
        "TerminalConfiguration.ObjectEnum": TerminalConfiguration.ObjectEnum,
        "TerminalConfigurationConfigurationList.ObjectEnum": TerminalConfigurationConfigurationList.ObjectEnum,
        "TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfigSplashscreen.ObjectEnum": TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfigSplashscreen.ObjectEnum,
        "TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfigSplashscreen.PurposeEnum": TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfigSplashscreen.PurposeEnum,
        "TerminalConnectionToken.ObjectEnum": TerminalConnectionToken.ObjectEnum,
        "TerminalLocation.ObjectEnum": TerminalLocation.ObjectEnum,
        "TerminalLocationLocationList.ObjectEnum": TerminalLocationLocationList.ObjectEnum,
        "TerminalReader.DeviceTypeEnum": TerminalReader.DeviceTypeEnum,
        "TerminalReader.ObjectEnum": TerminalReader.ObjectEnum,
        "TerminalReaderAction.StatusEnum": TerminalReaderAction.StatusEnum,
        "TerminalReaderAction.TypeEnum": TerminalReaderAction.TypeEnum,
        "TerminalReaderLocation.ObjectEnum": TerminalReaderLocation.ObjectEnum,
        "TerminalReaderReaderResourceProcessPaymentIntentActionPaymentIntent.CancellationReasonEnum": TerminalReaderReaderResourceProcessPaymentIntentActionPaymentIntent.CancellationReasonEnum,
        "TerminalReaderReaderResourceProcessPaymentIntentActionPaymentIntent.CaptureMethodEnum": TerminalReaderReaderResourceProcessPaymentIntentActionPaymentIntent.CaptureMethodEnum,
        "TerminalReaderReaderResourceProcessPaymentIntentActionPaymentIntent.ConfirmationMethodEnum": TerminalReaderReaderResourceProcessPaymentIntentActionPaymentIntent.ConfirmationMethodEnum,
        "TerminalReaderReaderResourceProcessPaymentIntentActionPaymentIntent.ObjectEnum": TerminalReaderReaderResourceProcessPaymentIntentActionPaymentIntent.ObjectEnum,
        "TerminalReaderReaderResourceProcessPaymentIntentActionPaymentIntent.SetupFutureUsageEnum": TerminalReaderReaderResourceProcessPaymentIntentActionPaymentIntent.SetupFutureUsageEnum,
        "TerminalReaderReaderResourceProcessPaymentIntentActionPaymentIntent.StatusEnum": TerminalReaderReaderResourceProcessPaymentIntentActionPaymentIntent.StatusEnum,
        "TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent.CancellationReasonEnum": TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent.CancellationReasonEnum,
        "TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent.FlowDirectionsEnum": TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent.FlowDirectionsEnum,
        "TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent.ObjectEnum": TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent.ObjectEnum,
        "TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent.StatusEnum": TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent.StatusEnum,
        "TerminalReaderReaderResourceReaderAction.StatusEnum": TerminalReaderReaderResourceReaderAction.StatusEnum,
        "TerminalReaderReaderResourceReaderAction.TypeEnum": TerminalReaderReaderResourceReaderAction.TypeEnum,
        "TerminalReaderReaderResourceRefundPaymentAction.ReasonEnum": TerminalReaderReaderResourceRefundPaymentAction.ReasonEnum,
        "TerminalReaderReaderResourceRefundPaymentActionCharge.ObjectEnum": TerminalReaderReaderResourceRefundPaymentActionCharge.ObjectEnum,
        "TerminalReaderReaderResourceRefundPaymentActionCharge.StatusEnum": TerminalReaderReaderResourceRefundPaymentActionCharge.StatusEnum,
        "TerminalReaderReaderResourceRefundPaymentActionPaymentIntent.CancellationReasonEnum": TerminalReaderReaderResourceRefundPaymentActionPaymentIntent.CancellationReasonEnum,
        "TerminalReaderReaderResourceRefundPaymentActionPaymentIntent.CaptureMethodEnum": TerminalReaderReaderResourceRefundPaymentActionPaymentIntent.CaptureMethodEnum,
        "TerminalReaderReaderResourceRefundPaymentActionPaymentIntent.ConfirmationMethodEnum": TerminalReaderReaderResourceRefundPaymentActionPaymentIntent.ConfirmationMethodEnum,
        "TerminalReaderReaderResourceRefundPaymentActionPaymentIntent.ObjectEnum": TerminalReaderReaderResourceRefundPaymentActionPaymentIntent.ObjectEnum,
        "TerminalReaderReaderResourceRefundPaymentActionPaymentIntent.SetupFutureUsageEnum": TerminalReaderReaderResourceRefundPaymentActionPaymentIntent.SetupFutureUsageEnum,
        "TerminalReaderReaderResourceRefundPaymentActionPaymentIntent.StatusEnum": TerminalReaderReaderResourceRefundPaymentActionPaymentIntent.StatusEnum,
        "TerminalReaderReaderResourceRefundPaymentActionRefund.ObjectEnum": TerminalReaderReaderResourceRefundPaymentActionRefund.ObjectEnum,
        "TerminalReaderReaderResourceRefundPaymentActionRefund.ReasonEnum": TerminalReaderReaderResourceRefundPaymentActionRefund.ReasonEnum,
        "TerminalReaderReaderResourceSetReaderDisplayAction.TypeEnum": TerminalReaderReaderResourceSetReaderDisplayAction.TypeEnum,
        "TerminalReaderRetrieveReader.ObjectEnum": TerminalReaderRetrieveReader.ObjectEnum,
        "TestHelpersTestClock.ObjectEnum": TestHelpersTestClock.ObjectEnum,
        "TestHelpersTestClock.StatusEnum": TestHelpersTestClock.StatusEnum,
        "ThreeDSecureDetails.AuthenticationFlowEnum": ThreeDSecureDetails.AuthenticationFlowEnum,
        "ThreeDSecureDetails.ResultEnum": ThreeDSecureDetails.ResultEnum,
        "ThreeDSecureDetails.ResultReasonEnum": ThreeDSecureDetails.ResultReasonEnum,
        "ThreeDSecureDetails.VersionEnum": ThreeDSecureDetails.VersionEnum,
        "Token.ObjectEnum": Token.ObjectEnum,
        "Topup.ObjectEnum": Topup.ObjectEnum,
        "Topup.StatusEnum": Topup.StatusEnum,
        "TopupBalanceTransaction.ObjectEnum": TopupBalanceTransaction.ObjectEnum,
        "TopupBalanceTransaction.TypeEnum": TopupBalanceTransaction.TypeEnum,
        "TopupList.ObjectEnum": TopupList.ObjectEnum,
        "TopupSource.ObjectEnum": TopupSource.ObjectEnum,
        "TopupSource.TypeEnum": TopupSource.TypeEnum,
        "Transfer.ObjectEnum": Transfer.ObjectEnum,
        "TransferBalanceTransaction.ObjectEnum": TransferBalanceTransaction.ObjectEnum,
        "TransferBalanceTransaction.TypeEnum": TransferBalanceTransaction.TypeEnum,
        "TransferDataDestination.BusinessTypeEnum": TransferDataDestination.BusinessTypeEnum,
        "TransferDataDestination.ObjectEnum": TransferDataDestination.ObjectEnum,
        "TransferDataDestination.TypeEnum": TransferDataDestination.TypeEnum,
        "TransferDestination.BusinessTypeEnum": TransferDestination.BusinessTypeEnum,
        "TransferDestination.ObjectEnum": TransferDestination.ObjectEnum,
        "TransferDestination.TypeEnum": TransferDestination.TypeEnum,
        "TransferDestinationPayment.ObjectEnum": TransferDestinationPayment.ObjectEnum,
        "TransferDestinationPayment.StatusEnum": TransferDestinationPayment.StatusEnum,
        "TransferList.ObjectEnum": TransferList.ObjectEnum,
        "TransferReversal.ObjectEnum": TransferReversal.ObjectEnum,
        "TransferReversalDestinationPaymentRefund.ObjectEnum": TransferReversalDestinationPaymentRefund.ObjectEnum,
        "TransferReversalDestinationPaymentRefund.ReasonEnum": TransferReversalDestinationPaymentRefund.ReasonEnum,
        "TransferReversalList.ObjectEnum": TransferReversalList.ObjectEnum,
        "TransferReversalList1.ObjectEnum": TransferReversalList1.ObjectEnum,
        "TransferReversalSourceRefund.ObjectEnum": TransferReversalSourceRefund.ObjectEnum,
        "TransferReversalSourceRefund.ReasonEnum": TransferReversalSourceRefund.ReasonEnum,
        "TransferReversalTransfer.ObjectEnum": TransferReversalTransfer.ObjectEnum,
        "TransferSourceTransaction.ObjectEnum": TransferSourceTransaction.ObjectEnum,
        "TransferSourceTransaction.StatusEnum": TransferSourceTransaction.StatusEnum,
        "TransformQuantity.RoundEnum": TransformQuantity.RoundEnum,
        "TransformUsage.RoundEnum": TransformUsage.RoundEnum,
        "TreasuryCreditReversal.NetworkEnum": TreasuryCreditReversal.NetworkEnum,
        "TreasuryCreditReversal.ObjectEnum": TreasuryCreditReversal.ObjectEnum,
        "TreasuryCreditReversal.StatusEnum": TreasuryCreditReversal.StatusEnum,
        "TreasuryCreditReversalTransaction.FlowTypeEnum": TreasuryCreditReversalTransaction.FlowTypeEnum,
        "TreasuryCreditReversalTransaction.ObjectEnum": TreasuryCreditReversalTransaction.ObjectEnum,
        "TreasuryCreditReversalTransaction.StatusEnum": TreasuryCreditReversalTransaction.StatusEnum,
        "TreasuryDebitReversal.NetworkEnum": TreasuryDebitReversal.NetworkEnum,
        "TreasuryDebitReversal.ObjectEnum": TreasuryDebitReversal.ObjectEnum,
        "TreasuryDebitReversal.StatusEnum": TreasuryDebitReversal.StatusEnum,
        "TreasuryFinancialAccount.ActiveFeaturesEnum": TreasuryFinancialAccount.ActiveFeaturesEnum,
        "TreasuryFinancialAccount.ObjectEnum": TreasuryFinancialAccount.ObjectEnum,
        "TreasuryFinancialAccount.PendingFeaturesEnum": TreasuryFinancialAccount.PendingFeaturesEnum,
        "TreasuryFinancialAccount.RestrictedFeaturesEnum": TreasuryFinancialAccount.RestrictedFeaturesEnum,
        "TreasuryFinancialAccount.StatusEnum": TreasuryFinancialAccount.StatusEnum,
        "TreasuryFinancialAccountFeatures.ObjectEnum": TreasuryFinancialAccountFeatures.ObjectEnum,
        "TreasuryFinancialAccountPlatformRestrictions.InboundFlowsEnum": TreasuryFinancialAccountPlatformRestrictions.InboundFlowsEnum,
        "TreasuryFinancialAccountPlatformRestrictions.OutboundFlowsEnum": TreasuryFinancialAccountPlatformRestrictions.OutboundFlowsEnum,
        "TreasuryFinancialAccountsResourceAchToggleSettings.StatusEnum": TreasuryFinancialAccountsResourceAchToggleSettings.StatusEnum,
        "TreasuryFinancialAccountsResourceClosedStatusDetails.ReasonsEnum": TreasuryFinancialAccountsResourceClosedStatusDetails.ReasonsEnum,
        "TreasuryFinancialAccountsResourceFinancialAccountList.ObjectEnum": TreasuryFinancialAccountsResourceFinancialAccountList.ObjectEnum,
        "TreasuryFinancialAccountsResourceFinancialAddress.SupportedNetworksEnum": TreasuryFinancialAccountsResourceFinancialAddress.SupportedNetworksEnum,
        "TreasuryFinancialAccountsResourceFinancialAddress.TypeEnum": TreasuryFinancialAccountsResourceFinancialAddress.TypeEnum,
        "TreasuryFinancialAccountsResourcePlatformRestrictions.InboundFlowsEnum": TreasuryFinancialAccountsResourcePlatformRestrictions.InboundFlowsEnum,
        "TreasuryFinancialAccountsResourcePlatformRestrictions.OutboundFlowsEnum": TreasuryFinancialAccountsResourcePlatformRestrictions.OutboundFlowsEnum,
        "TreasuryFinancialAccountsResourceStatusDetailsClosed.ReasonsEnum": TreasuryFinancialAccountsResourceStatusDetailsClosed.ReasonsEnum,
        "TreasuryFinancialAccountsResourceToggleSettings.StatusEnum": TreasuryFinancialAccountsResourceToggleSettings.StatusEnum,
        "TreasuryFinancialAccountsResourceTogglesSettingStatusDetails.CodeEnum": TreasuryFinancialAccountsResourceTogglesSettingStatusDetails.CodeEnum,
        "TreasuryFinancialAccountsResourceTogglesSettingStatusDetails.ResolutionEnum": TreasuryFinancialAccountsResourceTogglesSettingStatusDetails.ResolutionEnum,
        "TreasuryFinancialAccountsResourceTogglesSettingStatusDetails.RestrictionEnum": TreasuryFinancialAccountsResourceTogglesSettingStatusDetails.RestrictionEnum,
        "TreasuryInboundTransfer.ObjectEnum": TreasuryInboundTransfer.ObjectEnum,
        "TreasuryInboundTransfer.StatusEnum": TreasuryInboundTransfer.StatusEnum,
        "TreasuryInboundTransferFailureDetails.CodeEnum": TreasuryInboundTransferFailureDetails.CodeEnum,
        "TreasuryInboundTransferOriginPaymentMethodDetails.TypeEnum": TreasuryInboundTransferOriginPaymentMethodDetails.TypeEnum,
        "TreasuryInboundTransfersResourceFailureDetails.CodeEnum": TreasuryInboundTransfersResourceFailureDetails.CodeEnum,
        "TreasuryInboundTransfersResourceInboundTransferList.ObjectEnum": TreasuryInboundTransfersResourceInboundTransferList.ObjectEnum,
        "TreasuryOutboundPayment.ObjectEnum": TreasuryOutboundPayment.ObjectEnum,
        "TreasuryOutboundPayment.StatusEnum": TreasuryOutboundPayment.StatusEnum,
        "TreasuryOutboundPaymentDestinationPaymentMethodDetails.TypeEnum": TreasuryOutboundPaymentDestinationPaymentMethodDetails.TypeEnum,
        "TreasuryOutboundPaymentReturnedDetails.CodeEnum": TreasuryOutboundPaymentReturnedDetails.CodeEnum,
        "TreasuryOutboundPaymentTransaction.FlowTypeEnum": TreasuryOutboundPaymentTransaction.FlowTypeEnum,
        "TreasuryOutboundPaymentTransaction.ObjectEnum": TreasuryOutboundPaymentTransaction.ObjectEnum,
        "TreasuryOutboundPaymentTransaction.StatusEnum": TreasuryOutboundPaymentTransaction.StatusEnum,
        "TreasuryOutboundPaymentsResourceOutboundPaymentList.ObjectEnum": TreasuryOutboundPaymentsResourceOutboundPaymentList.ObjectEnum,
        "TreasuryOutboundPaymentsResourceReturnedStatus.CodeEnum": TreasuryOutboundPaymentsResourceReturnedStatus.CodeEnum,
        "TreasuryOutboundTransfer.ObjectEnum": TreasuryOutboundTransfer.ObjectEnum,
        "TreasuryOutboundTransfer.StatusEnum": TreasuryOutboundTransfer.StatusEnum,
        "TreasuryOutboundTransferReturnedDetails.CodeEnum": TreasuryOutboundTransferReturnedDetails.CodeEnum,
        "TreasuryOutboundTransfersResourceOutboundTransferList.ObjectEnum": TreasuryOutboundTransfersResourceOutboundTransferList.ObjectEnum,
        "TreasuryOutboundTransfersResourceReturnedDetails.CodeEnum": TreasuryOutboundTransfersResourceReturnedDetails.CodeEnum,
        "TreasuryReceivedCredit.FailureCodeEnum": TreasuryReceivedCredit.FailureCodeEnum,
        "TreasuryReceivedCredit.NetworkEnum": TreasuryReceivedCredit.NetworkEnum,
        "TreasuryReceivedCredit.ObjectEnum": TreasuryReceivedCredit.ObjectEnum,
        "TreasuryReceivedCredit.StatusEnum": TreasuryReceivedCredit.StatusEnum,
        "TreasuryReceivedCreditReversalDetails.RestrictedReasonEnum": TreasuryReceivedCreditReversalDetails.RestrictedReasonEnum,
        "TreasuryReceivedCreditsResourceCreditReversalList.ObjectEnum": TreasuryReceivedCreditsResourceCreditReversalList.ObjectEnum,
        "TreasuryReceivedCreditsResourceLinkedFlowsSourceFlowDetails.TypeEnum": TreasuryReceivedCreditsResourceLinkedFlowsSourceFlowDetails.TypeEnum,
        "TreasuryReceivedCreditsResourceReceivedCreditList.ObjectEnum": TreasuryReceivedCreditsResourceReceivedCreditList.ObjectEnum,
        "TreasuryReceivedCreditsResourceReversalDetails.RestrictedReasonEnum": TreasuryReceivedCreditsResourceReversalDetails.RestrictedReasonEnum,
        "TreasuryReceivedCreditsResourceSourceFlowsDetails.TypeEnum": TreasuryReceivedCreditsResourceSourceFlowsDetails.TypeEnum,
        "TreasuryReceivedDebit.FailureCodeEnum": TreasuryReceivedDebit.FailureCodeEnum,
        "TreasuryReceivedDebit.NetworkEnum": TreasuryReceivedDebit.NetworkEnum,
        "TreasuryReceivedDebit.ObjectEnum": TreasuryReceivedDebit.ObjectEnum,
        "TreasuryReceivedDebit.StatusEnum": TreasuryReceivedDebit.StatusEnum,
        "TreasuryReceivedDebitReversalDetails.RestrictedReasonEnum": TreasuryReceivedDebitReversalDetails.RestrictedReasonEnum,
        "TreasuryReceivedDebitsResourceDebitReversalList.ObjectEnum": TreasuryReceivedDebitsResourceDebitReversalList.ObjectEnum,
        "TreasuryReceivedDebitsResourceReceivedDebitList.ObjectEnum": TreasuryReceivedDebitsResourceReceivedDebitList.ObjectEnum,
        "TreasuryReceivedDebitsResourceReversalDetails.RestrictedReasonEnum": TreasuryReceivedDebitsResourceReversalDetails.RestrictedReasonEnum,
        "TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails.BalanceEnum": TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails.BalanceEnum,
        "TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails.TypeEnum": TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails.TypeEnum,
        "TreasuryTransaction.FlowTypeEnum": TreasuryTransaction.FlowTypeEnum,
        "TreasuryTransaction.ObjectEnum": TreasuryTransaction.ObjectEnum,
        "TreasuryTransaction.StatusEnum": TreasuryTransaction.StatusEnum,
        "TreasuryTransactionEntry.FlowTypeEnum": TreasuryTransactionEntry.FlowTypeEnum,
        "TreasuryTransactionEntry.ObjectEnum": TreasuryTransactionEntry.ObjectEnum,
        "TreasuryTransactionEntry.TypeEnum": TreasuryTransactionEntry.TypeEnum,
        "TreasuryTransactionEntryFlowDetails.TypeEnum": TreasuryTransactionEntryFlowDetails.TypeEnum,
        "TreasuryTransactionFlowDetails.TypeEnum": TreasuryTransactionFlowDetails.TypeEnum,
        "TreasuryTransactionsResourceFlowDetails.TypeEnum": TreasuryTransactionsResourceFlowDetails.TypeEnum,
        "TreasuryTransactionsResourceTransactionEntryList.ObjectEnum": TreasuryTransactionsResourceTransactionEntryList.ObjectEnum,
        "TreasuryTransactionsResourceTransactionEntryList1.ObjectEnum": TreasuryTransactionsResourceTransactionEntryList1.ObjectEnum,
        "TreasuryTransactionsResourceTransactionList.ObjectEnum": TreasuryTransactionsResourceTransactionList.ObjectEnum,
        "UsBankAccountNetworks.SupportedEnum": UsBankAccountNetworks.SupportedEnum,
        "UsageEventsResourceUsageRecordSummaryList.ObjectEnum": UsageEventsResourceUsageRecordSummaryList.ObjectEnum,
        "UsageRecord.ObjectEnum": UsageRecord.ObjectEnum,
        "UsageRecordSummary.ObjectEnum": UsageRecordSummary.ObjectEnum,
        "VerificationSessionRedaction.StatusEnum": VerificationSessionRedaction.StatusEnum,
        "WebhookEndpoint.ObjectEnum": WebhookEndpoint.ObjectEnum,
}

let typeMap: {[index: string]: any} = {
    "APIMethodRefundList": APIMethodRefundList,
    "Account": Account,
    "AccountBacsDebitPaymentsSettings": AccountBacsDebitPaymentsSettings,
    "AccountBrandingSettings": AccountBrandingSettings,
    "AccountBrandingSettingsIcon": AccountBrandingSettingsIcon,
    "AccountBrandingSettingsLogo": AccountBrandingSettingsLogo,
    "AccountBusinessProfile": AccountBusinessProfile,
    "AccountBusinessProfile1": AccountBusinessProfile1,
    "AccountBusinessProfileSupportAddress": AccountBusinessProfileSupportAddress,
    "AccountCapabilities": AccountCapabilities,
    "AccountCapabilityFutureRequirements": AccountCapabilityFutureRequirements,
    "AccountCapabilityRequirements": AccountCapabilityRequirements,
    "AccountCardIssuingSettings": AccountCardIssuingSettings,
    "AccountCardPaymentsSettings": AccountCardPaymentsSettings,
    "AccountDashboardSettings": AccountDashboardSettings,
    "AccountDeclineChargeOn": AccountDeclineChargeOn,
    "AccountFutureRequirements": AccountFutureRequirements,
    "AccountLink": AccountLink,
    "AccountList": AccountList,
    "AccountPaymentsSettings": AccountPaymentsSettings,
    "AccountPayoutSettings": AccountPayoutSettings,
    "AccountRequirements": AccountRequirements,
    "AccountRequirementsAlternative": AccountRequirementsAlternative,
    "AccountRequirementsError": AccountRequirementsError,
    "AccountSepaDebitPaymentsSettings": AccountSepaDebitPaymentsSettings,
    "AccountSettings": AccountSettings,
    "AccountSettings1": AccountSettings1,
    "AccountTermsOfService": AccountTermsOfService,
    "AccountTosAcceptance": AccountTosAcceptance,
    "AccountTreasurySettings": AccountTreasurySettings,
    "AccountUnificationAccountController": AccountUnificationAccountController,
    "AccountholderParams": AccountholderParams,
    "Address": Address,
    "AllPeopleRelationshipSpecs": AllPeopleRelationshipSpecs,
    "AllPricesRecurringParams": AllPricesRecurringParams,
    "AlternateStatementDescriptors": AlternateStatementDescriptors,
    "ApiErrors": ApiErrors,
    "ApmsSourcesSourceList": ApmsSourcesSourceList,
    "ApmsSourcesSourceList1": ApmsSourcesSourceList1,
    "ApmsSourcesSourceTransactionList": ApmsSourcesSourceTransactionList,
    "ApplePayDomain": ApplePayDomain,
    "ApplePayDomainList": ApplePayDomainList,
    "Application": Application,
    "ApplicationFee": ApplicationFee,
    "ApplicationFeeAccount": ApplicationFeeAccount,
    "ApplicationFeeApplication": ApplicationFeeApplication,
    "ApplicationFeeBalanceTransaction": ApplicationFeeBalanceTransaction,
    "ApplicationFeeCharge": ApplicationFeeCharge,
    "ApplicationFeeOriginatingTransaction": ApplicationFeeOriginatingTransaction,
    "AppsSecret": AppsSecret,
    "AutomaticTax": AutomaticTax,
    "AutomaticTaxParam1": AutomaticTaxParam1,
    "Balance": Balance,
    "BalanceAmount": BalanceAmount,
    "BalanceAmountBySourceType": BalanceAmountBySourceType,
    "BalanceDetail": BalanceDetail,
    "BalanceTransaction": BalanceTransaction,
    "BalanceTransactionSource": BalanceTransactionSource,
    "BalanceTransactionSource1": BalanceTransactionSource1,
    "BalanceTransactionsList": BalanceTransactionsList,
    "BankAccount": BankAccount,
    "BankAccountAccount": BankAccountAccount,
    "BankAccountCustomer": BankAccountCustomer,
    "BankConnectionsResourceAccountholder": BankConnectionsResourceAccountholder,
    "BankConnectionsResourceAccountholderAccount": BankConnectionsResourceAccountholderAccount,
    "BankConnectionsResourceAccountholderCustomer": BankConnectionsResourceAccountholderCustomer,
    "BankConnectionsResourceBalance": BankConnectionsResourceBalance,
    "BankConnectionsResourceBalanceApiResourceCashBalance": BankConnectionsResourceBalanceApiResourceCashBalance,
    "BankConnectionsResourceBalanceApiResourceCreditBalance": BankConnectionsResourceBalanceApiResourceCreditBalance,
    "BankConnectionsResourceBalanceRefresh": BankConnectionsResourceBalanceRefresh,
    "BankConnectionsResourceLinkAccountSessionFilters": BankConnectionsResourceLinkAccountSessionFilters,
    "BankConnectionsResourceLinkedAccountList": BankConnectionsResourceLinkedAccountList,
    "BankConnectionsResourceLinkedAccountList1": BankConnectionsResourceLinkedAccountList1,
    "BankConnectionsResourceOwnerList": BankConnectionsResourceOwnerList,
    "BankConnectionsResourceOwnerList1": BankConnectionsResourceOwnerList1,
    "BankConnectionsResourceOwnershipRefresh": BankConnectionsResourceOwnershipRefresh,
    "BillingClocksResourceBillingClockList": BillingClocksResourceBillingClockList,
    "BillingDetails": BillingDetails,
    "BillingDetailsAddress1": BillingDetailsAddress1,
    "BillingPortalConfiguration": BillingPortalConfiguration,
    "BillingPortalConfigurationApplication": BillingPortalConfigurationApplication,
    "BillingPortalSession": BillingPortalSession,
    "BillingPortalSessionConfiguration": BillingPortalSessionConfiguration,
    "BillingPortalSessionFlow": BillingPortalSessionFlow,
    "Capability": Capability,
    "CapabilityAccount": CapabilityAccount,
    "Card": Card,
    "CardAccount": CardAccount,
    "CardCustomer": CardCustomer,
    "CardIssuingAccountTermsOfService": CardIssuingAccountTermsOfService,
    "CashBalance": CashBalance,
    "Charge": Charge,
    "ChargeApplication": ChargeApplication,
    "ChargeApplicationFee": ChargeApplicationFee,
    "ChargeBalanceTransaction": ChargeBalanceTransaction,
    "ChargeCustomer": ChargeCustomer,
    "ChargeDestination": ChargeDestination,
    "ChargeDispute": ChargeDispute,
    "ChargeFailureBalanceTransaction": ChargeFailureBalanceTransaction,
    "ChargeFraudDetails": ChargeFraudDetails,
    "ChargeFraudDetails1": ChargeFraudDetails1,
    "ChargeInvoice": ChargeInvoice,
    "ChargeList": ChargeList,
    "ChargeOnBehalfOf": ChargeOnBehalfOf,
    "ChargeOutcome": ChargeOutcome,
    "ChargeOutcome1": ChargeOutcome1,
    "ChargeOutcomeRule": ChargeOutcomeRule,
    "ChargePaymentIntent": ChargePaymentIntent,
    "ChargePaymentMethodDetails": ChargePaymentMethodDetails,
    "ChargeReview": ChargeReview,
    "ChargeShipping": ChargeShipping,
    "ChargeSource": ChargeSource,
    "ChargeSourceTransfer": ChargeSourceTransfer,
    "ChargeTransfer": ChargeTransfer,
    "ChargeTransferData": ChargeTransferData,
    "ChargeTransferData1": ChargeTransferData1,
    "ChargeTransferDataDestination": ChargeTransferDataDestination,
    "CheckoutAcssDebitMandateOptions": CheckoutAcssDebitMandateOptions,
    "CheckoutAcssDebitPaymentMethodOptions": CheckoutAcssDebitPaymentMethodOptions,
    "CheckoutAffirmPaymentMethodOptions": CheckoutAffirmPaymentMethodOptions,
    "CheckoutAfterpayClearpayPaymentMethodOptions": CheckoutAfterpayClearpayPaymentMethodOptions,
    "CheckoutAlipayPaymentMethodOptions": CheckoutAlipayPaymentMethodOptions,
    "CheckoutAuBecsDebitPaymentMethodOptions": CheckoutAuBecsDebitPaymentMethodOptions,
    "CheckoutBacsDebitPaymentMethodOptions": CheckoutBacsDebitPaymentMethodOptions,
    "CheckoutBancontactPaymentMethodOptions": CheckoutBancontactPaymentMethodOptions,
    "CheckoutBoletoPaymentMethodOptions": CheckoutBoletoPaymentMethodOptions,
    "CheckoutCardInstallmentsOptions": CheckoutCardInstallmentsOptions,
    "CheckoutCardPaymentMethodOptions": CheckoutCardPaymentMethodOptions,
    "CheckoutCustomerBalanceBankTransferPaymentMethodOptions": CheckoutCustomerBalanceBankTransferPaymentMethodOptions,
    "CheckoutCustomerBalancePaymentMethodOptions": CheckoutCustomerBalancePaymentMethodOptions,
    "CheckoutEpsPaymentMethodOptions": CheckoutEpsPaymentMethodOptions,
    "CheckoutFpxPaymentMethodOptions": CheckoutFpxPaymentMethodOptions,
    "CheckoutGiropayPaymentMethodOptions": CheckoutGiropayPaymentMethodOptions,
    "CheckoutGrabPayPaymentMethodOptions": CheckoutGrabPayPaymentMethodOptions,
    "CheckoutIdealPaymentMethodOptions": CheckoutIdealPaymentMethodOptions,
    "CheckoutKlarnaPaymentMethodOptions": CheckoutKlarnaPaymentMethodOptions,
    "CheckoutKonbiniPaymentMethodOptions": CheckoutKonbiniPaymentMethodOptions,
    "CheckoutOxxoPaymentMethodOptions": CheckoutOxxoPaymentMethodOptions,
    "CheckoutP24PaymentMethodOptions": CheckoutP24PaymentMethodOptions,
    "CheckoutPaynowPaymentMethodOptions": CheckoutPaynowPaymentMethodOptions,
    "CheckoutPixPaymentMethodOptions": CheckoutPixPaymentMethodOptions,
    "CheckoutSepaDebitPaymentMethodOptions": CheckoutSepaDebitPaymentMethodOptions,
    "CheckoutSession": CheckoutSession,
    "CheckoutSessionAfterExpiration": CheckoutSessionAfterExpiration,
    "CheckoutSessionConsent": CheckoutSessionConsent,
    "CheckoutSessionConsentCollection": CheckoutSessionConsentCollection,
    "CheckoutSessionCustomer": CheckoutSessionCustomer,
    "CheckoutSessionCustomerDetails": CheckoutSessionCustomerDetails,
    "CheckoutSessionInvoice": CheckoutSessionInvoice,
    "CheckoutSessionInvoiceCreation": CheckoutSessionInvoiceCreation,
    "CheckoutSessionPaymentIntent": CheckoutSessionPaymentIntent,
    "CheckoutSessionPaymentLink": CheckoutSessionPaymentLink,
    "CheckoutSessionPaymentMethodOptions": CheckoutSessionPaymentMethodOptions,
    "CheckoutSessionPaymentMethodOptions1": CheckoutSessionPaymentMethodOptions1,
    "CheckoutSessionSetupIntent": CheckoutSessionSetupIntent,
    "CheckoutSessionShippingAddressCollection": CheckoutSessionShippingAddressCollection,
    "CheckoutSessionShippingCost": CheckoutSessionShippingCost,
    "CheckoutSessionShippingDetails": CheckoutSessionShippingDetails,
    "CheckoutSessionSubscription": CheckoutSessionSubscription,
    "CheckoutSessionTotalDetails": CheckoutSessionTotalDetails,
    "CheckoutSofortPaymentMethodOptions": CheckoutSofortPaymentMethodOptions,
    "CheckoutUsBankAccountPaymentMethodOptions": CheckoutUsBankAccountPaymentMethodOptions,
    "ConnectCollectionTransfer": ConnectCollectionTransfer,
    "ConnectCollectionTransferDestination": ConnectCollectionTransferDestination,
    "CountrySpec": CountrySpec,
    "CountrySpecList": CountrySpecList,
    "CountrySpecVerificationFieldDetails": CountrySpecVerificationFieldDetails,
    "CountrySpecVerificationFields": CountrySpecVerificationFields,
    "Coupon": Coupon,
    "CouponAppliesTo": CouponAppliesTo,
    "CouponCurrencyOption": CouponCurrencyOption,
    "CouponsResourceCouponList": CouponsResourceCouponList,
    "CreditNote": CreditNote,
    "CreditNoteCustomer": CreditNoteCustomer,
    "CreditNoteCustomerBalanceTransaction": CreditNoteCustomerBalanceTransaction,
    "CreditNoteInvoice": CreditNoteInvoice,
    "CreditNoteLineItem": CreditNoteLineItem,
    "CreditNoteLineItemParams": CreditNoteLineItemParams,
    "CreditNoteLinesList": CreditNoteLinesList,
    "CreditNoteLinesList1": CreditNoteLinesList1,
    "CreditNoteRefund": CreditNoteRefund,
    "CreditNoteShippingCost1": CreditNoteShippingCost1,
    "CreditNoteShippingCost2": CreditNoteShippingCost2,
    "CreditNoteTaxAmount": CreditNoteTaxAmount,
    "CreditNoteTaxAmountTaxRate": CreditNoteTaxAmountTaxRate,
    "CreditNotesList": CreditNotesList,
    "CurrencyOption": CurrencyOption,
    "CurrencyOptionCustomUnitAmount": CurrencyOptionCustomUnitAmount,
    "CustomUnitAmount": CustomUnitAmount,
    "Customer": Customer,
    "CustomerAcceptance": CustomerAcceptance,
    "CustomerAddress": CustomerAddress,
    "CustomerBalanceCustomerBalanceSettings": CustomerBalanceCustomerBalanceSettings,
    "CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction": CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction,
    "CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionPaymentIntent": CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionPaymentIntent,
    "CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction": CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction,
    "CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer": CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer,
    "CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer": CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer,
    "CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction": CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction,
    "CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionRefund": CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionRefund,
    "CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction": CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction,
    "CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionPaymentIntent": CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionPaymentIntent,
    "CustomerBalanceTransaction": CustomerBalanceTransaction,
    "CustomerBalanceTransactionCreditNote": CustomerBalanceTransactionCreditNote,
    "CustomerBalanceTransactionCustomer": CustomerBalanceTransactionCustomer,
    "CustomerBalanceTransactionInvoice": CustomerBalanceTransactionInvoice,
    "CustomerBalanceTransactionList": CustomerBalanceTransactionList,
    "CustomerCashBalance": CustomerCashBalance,
    "CustomerCashBalanceTransaction": CustomerCashBalanceTransaction,
    "CustomerCashBalanceTransactionCustomer": CustomerCashBalanceTransactionCustomer,
    "CustomerCashBalanceTransactionList": CustomerCashBalanceTransactionList,
    "CustomerDefaultSource": CustomerDefaultSource,
    "CustomerDetailsParam": CustomerDetailsParam,
    "CustomerDetailsParams": CustomerDetailsParams,
    "CustomerDiscount": CustomerDiscount,
    "CustomerPaymentMethodResourceList": CustomerPaymentMethodResourceList,
    "CustomerResourceCustomerList": CustomerResourceCustomerList,
    "CustomerShipping1": CustomerShipping1,
    "CustomerTax": CustomerTax,
    "CustomerTaxLocation": CustomerTaxLocation,
    "CustomerTaxLocation1": CustomerTaxLocation1,
    "CustomerTestClock": CustomerTestClock,
    "DataParams": DataParams,
    "DeleteCustomersCustomerSourcesId200Response": DeleteCustomersCustomerSourcesId200Response,
    "DeletedAccount": DeletedAccount,
    "DeletedApplePayDomain": DeletedApplePayDomain,
    "DeletedApplication": DeletedApplication,
    "DeletedBankAccount": DeletedBankAccount,
    "DeletedCard": DeletedCard,
    "DeletedCoupon": DeletedCoupon,
    "DeletedCustomer": DeletedCustomer,
    "DeletedDiscount": DeletedDiscount,
    "DeletedDiscountCustomer": DeletedDiscountCustomer,
    "DeletedDiscountPromotionCode": DeletedDiscountPromotionCode,
    "DeletedExternalAccount": DeletedExternalAccount,
    "DeletedInvoice": DeletedInvoice,
    "DeletedInvoiceitem": DeletedInvoiceitem,
    "DeletedPaymentSource": DeletedPaymentSource,
    "DeletedPerson": DeletedPerson,
    "DeletedPlan": DeletedPlan,
    "DeletedPrice": DeletedPrice,
    "DeletedProduct": DeletedProduct,
    "DeletedRadarValueList": DeletedRadarValueList,
    "DeletedRadarValueListItem": DeletedRadarValueListItem,
    "DeletedSubscriptionItem": DeletedSubscriptionItem,
    "DeletedTaxId": DeletedTaxId,
    "DeletedTerminalConfiguration": DeletedTerminalConfiguration,
    "DeletedTerminalLocation": DeletedTerminalLocation,
    "DeletedTerminalReader": DeletedTerminalReader,
    "DeletedTestHelpersTestClock": DeletedTestHelpersTestClock,
    "DeletedWebhookEndpoint": DeletedWebhookEndpoint,
    "Discount": Discount,
    "DiscountsDataParam": DiscountsDataParam,
    "DiscountsResourceDiscountAmount": DiscountsResourceDiscountAmount,
    "DiscountsResourceDiscountAmountDiscount": DiscountsResourceDiscountAmountDiscount,
    "Dispute": Dispute,
    "DisputeCharge": DisputeCharge,
    "DisputeEvidence": DisputeEvidence,
    "DisputeEvidenceCancellationPolicy": DisputeEvidenceCancellationPolicy,
    "DisputeEvidenceCustomerCommunication": DisputeEvidenceCustomerCommunication,
    "DisputeEvidenceCustomerSignature": DisputeEvidenceCustomerSignature,
    "DisputeEvidenceDetails": DisputeEvidenceDetails,
    "DisputeEvidenceDuplicateChargeDocumentation": DisputeEvidenceDuplicateChargeDocumentation,
    "DisputeEvidenceReceipt": DisputeEvidenceReceipt,
    "DisputeEvidenceRefundPolicy": DisputeEvidenceRefundPolicy,
    "DisputeEvidenceServiceDocumentation": DisputeEvidenceServiceDocumentation,
    "DisputeEvidenceShippingDocumentation": DisputeEvidenceShippingDocumentation,
    "DisputeEvidenceUncategorizedFile": DisputeEvidenceUncategorizedFile,
    "DisputeList": DisputeList,
    "DisputePaymentIntent": DisputePaymentIntent,
    "EmailSent": EmailSent,
    "EphemeralKey": EphemeralKey,
    "Event": Event,
    "EventRequest": EventRequest,
    "ExchangeRate": ExchangeRate,
    "ExchangeRateList": ExchangeRateList,
    "ExternalAccount": ExternalAccount,
    "ExternalAccountList": ExternalAccountList,
    "ExternalAccountList1": ExternalAccountList1,
    "Fee": Fee,
    "FeeRefund": FeeRefund,
    "FeeRefundBalanceTransaction": FeeRefundBalanceTransaction,
    "FeeRefundFee": FeeRefundFee,
    "FeeRefundList": FeeRefundList,
    "FeeRefundList1": FeeRefundList1,
    "FileFileLinkList": FileFileLinkList,
    "FileFileLinkList1": FileFileLinkList1,
    "FileFileList": FileFileList,
    "FileLink": FileLink,
    "FileLinkFile": FileLinkFile,
    "FinancialConnectionsAccount": FinancialConnectionsAccount,
    "FinancialConnectionsAccountAccountHolder": FinancialConnectionsAccountAccountHolder,
    "FinancialConnectionsAccountBalance": FinancialConnectionsAccountBalance,
    "FinancialConnectionsAccountBalanceRefresh": FinancialConnectionsAccountBalanceRefresh,
    "FinancialConnectionsAccountOwner": FinancialConnectionsAccountOwner,
    "FinancialConnectionsAccountOwnership": FinancialConnectionsAccountOwnership,
    "FinancialConnectionsAccountOwnershipRefresh": FinancialConnectionsAccountOwnershipRefresh,
    "FinancialConnectionsSession": FinancialConnectionsSession,
    "FinancialConnectionsSessionAccountHolder": FinancialConnectionsSessionAccountHolder,
    "FinancialReportingFinanceReportRunList": FinancialReportingFinanceReportRunList,
    "FinancialReportingFinanceReportRunRunParameters": FinancialReportingFinanceReportRunRunParameters,
    "FinancialReportingFinanceReportTypeList": FinancialReportingFinanceReportTypeList,
    "FundingInstructions": FundingInstructions,
    "FundingInstructionsBankTransfer": FundingInstructionsBankTransfer,
    "FundingInstructionsBankTransferFinancialAddress": FundingInstructionsBankTransferFinancialAddress,
    "FundingInstructionsBankTransferIbanRecord": FundingInstructionsBankTransferIbanRecord,
    "FundingInstructionsBankTransferSortCodeRecord": FundingInstructionsBankTransferSortCodeRecord,
    "FundingInstructionsBankTransferSpeiRecord": FundingInstructionsBankTransferSpeiRecord,
    "FundingInstructionsBankTransferZenginRecord": FundingInstructionsBankTransferZenginRecord,
    "GelatoDataDocumentReportDateOfBirth": GelatoDataDocumentReportDateOfBirth,
    "GelatoDataDocumentReportExpirationDate": GelatoDataDocumentReportExpirationDate,
    "GelatoDataDocumentReportIssuedDate": GelatoDataDocumentReportIssuedDate,
    "GelatoDataIdNumberReportDate": GelatoDataIdNumberReportDate,
    "GelatoDataVerifiedOutputsDate": GelatoDataVerifiedOutputsDate,
    "GelatoDocumentReport": GelatoDocumentReport,
    "GelatoDocumentReportAddress": GelatoDocumentReportAddress,
    "GelatoDocumentReportDob": GelatoDocumentReportDob,
    "GelatoDocumentReportError": GelatoDocumentReportError,
    "GelatoDocumentReportError1": GelatoDocumentReportError1,
    "GelatoDocumentReportExpirationDate": GelatoDocumentReportExpirationDate,
    "GelatoDocumentReportIssuedDate": GelatoDocumentReportIssuedDate,
    "GelatoIdNumberReport": GelatoIdNumberReport,
    "GelatoIdNumberReportDob": GelatoIdNumberReportDob,
    "GelatoIdNumberReportError": GelatoIdNumberReportError,
    "GelatoIdNumberReportError1": GelatoIdNumberReportError1,
    "GelatoReportDocumentOptions": GelatoReportDocumentOptions,
    "GelatoSelfieReport": GelatoSelfieReport,
    "GelatoSelfieReportError": GelatoSelfieReportError,
    "GelatoSelfieReportError1": GelatoSelfieReportError1,
    "GelatoSessionDocumentOptions": GelatoSessionDocumentOptions,
    "GelatoSessionLastError": GelatoSessionLastError,
    "GelatoVerificationReportList": GelatoVerificationReportList,
    "GelatoVerificationReportOptions": GelatoVerificationReportOptions,
    "GelatoVerificationSessionList": GelatoVerificationSessionList,
    "GelatoVerificationSessionOptions": GelatoVerificationSessionOptions,
    "GelatoVerifiedOutputs": GelatoVerifiedOutputs,
    "GelatoVerifiedOutputsAddress": GelatoVerifiedOutputsAddress,
    "GelatoVerifiedOutputsDob": GelatoVerifiedOutputsDob,
    "GetAccountsCreatedParameter": GetAccountsCreatedParameter,
    "GetCustomersCustomer200Response": GetCustomersCustomer200Response,
    "GetInvoicesUpcomingDiscountsParameter": GetInvoicesUpcomingDiscountsParameter,
    "GetInvoicesUpcomingSubscriptionBillingCycleAnchorParameter": GetInvoicesUpcomingSubscriptionBillingCycleAnchorParameter,
    "GetInvoicesUpcomingSubscriptionCancelAtParameter": GetInvoicesUpcomingSubscriptionCancelAtParameter,
    "GetInvoicesUpcomingSubscriptionDefaultTaxRatesParameter": GetInvoicesUpcomingSubscriptionDefaultTaxRatesParameter,
    "GetInvoicesUpcomingSubscriptionTrialEndParameter": GetInvoicesUpcomingSubscriptionTrialEndParameter,
    "GetTerminalConfigurationsConfiguration200Response": GetTerminalConfigurationsConfiguration200Response,
    "GetTerminalLocationsLocation200Response": GetTerminalLocationsLocation200Response,
    "GetTerminalReadersReader200Response": GetTerminalReadersReader200Response,
    "IdentityVerificationReport": IdentityVerificationReport,
    "IdentityVerificationSession": IdentityVerificationSession,
    "IdentityVerificationSessionLastError": IdentityVerificationSessionLastError,
    "IdentityVerificationSessionLastVerificationReport": IdentityVerificationSessionLastVerificationReport,
    "IdentityVerificationSessionRedaction": IdentityVerificationSessionRedaction,
    "IdentityVerificationSessionVerifiedOutputs": IdentityVerificationSessionVerifiedOutputs,
    "InboundTransfers": InboundTransfers,
    "InboundTransfersPaymentMethodDetailsUsBankAccount": InboundTransfersPaymentMethodDetailsUsBankAccount,
    "IndividualSpecsMetadata": IndividualSpecsMetadata,
    "Invoice": Invoice,
    "InvoiceAccountTaxIdsInner": InvoiceAccountTaxIdsInner,
    "InvoiceApplication": InvoiceApplication,
    "InvoiceCharge": InvoiceCharge,
    "InvoiceCustomer": InvoiceCustomer,
    "InvoiceCustomerAddress": InvoiceCustomerAddress,
    "InvoiceCustomerShipping": InvoiceCustomerShipping,
    "InvoiceDefaultPaymentMethod": InvoiceDefaultPaymentMethod,
    "InvoiceDefaultSource": InvoiceDefaultSource,
    "InvoiceDiscount": InvoiceDiscount,
    "InvoiceDiscountsInner": InvoiceDiscountsInner,
    "InvoiceFromInvoice": InvoiceFromInvoice,
    "InvoiceInstallmentsCard": InvoiceInstallmentsCard,
    "InvoiceItemPreviewParams": InvoiceItemPreviewParams,
    "InvoiceItemPreviewParamsDiscounts": InvoiceItemPreviewParamsDiscounts,
    "InvoiceItemPreviewParamsTaxRates": InvoiceItemPreviewParamsTaxRates,
    "InvoiceItemThresholdReason": InvoiceItemThresholdReason,
    "InvoiceLastFinalizationError": InvoiceLastFinalizationError,
    "InvoiceLatestRevision": InvoiceLatestRevision,
    "InvoiceLineItemPeriod": InvoiceLineItemPeriod,
    "InvoiceLinesList": InvoiceLinesList,
    "InvoiceLinesList1": InvoiceLinesList1,
    "InvoiceMandateOptionsCard": InvoiceMandateOptionsCard,
    "InvoiceOnBehalfOf": InvoiceOnBehalfOf,
    "InvoicePaymentIntent": InvoicePaymentIntent,
    "InvoicePaymentMethodOptionsAcssDebit": InvoicePaymentMethodOptionsAcssDebit,
    "InvoicePaymentMethodOptionsAcssDebitMandateOptions": InvoicePaymentMethodOptionsAcssDebitMandateOptions,
    "InvoicePaymentMethodOptionsBancontact": InvoicePaymentMethodOptionsBancontact,
    "InvoicePaymentMethodOptionsCard": InvoicePaymentMethodOptionsCard,
    "InvoicePaymentMethodOptionsCustomerBalance": InvoicePaymentMethodOptionsCustomerBalance,
    "InvoicePaymentMethodOptionsCustomerBalanceBankTransfer": InvoicePaymentMethodOptionsCustomerBalanceBankTransfer,
    "InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer": InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer,
    "InvoicePaymentMethodOptionsUsBankAccount": InvoicePaymentMethodOptionsUsBankAccount,
    "InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions": InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions,
    "InvoiceQuote": InvoiceQuote,
    "InvoiceRenderingOptions": InvoiceRenderingOptions,
    "InvoiceSettingCustomField": InvoiceSettingCustomField,
    "InvoiceSettingCustomerSetting": InvoiceSettingCustomerSetting,
    "InvoiceSettingCustomerSettingDefaultPaymentMethod": InvoiceSettingCustomerSettingDefaultPaymentMethod,
    "InvoiceSettingCustomerSettingRenderingOptions": InvoiceSettingCustomerSettingRenderingOptions,
    "InvoiceSettingQuoteSetting": InvoiceSettingQuoteSetting,
    "InvoiceSettingRenderingOptions": InvoiceSettingRenderingOptions,
    "InvoiceSettingSubscriptionScheduleSetting": InvoiceSettingSubscriptionScheduleSetting,
    "InvoiceShippingCost": InvoiceShippingCost,
    "InvoiceShippingDetails": InvoiceShippingDetails,
    "InvoiceSubscription": InvoiceSubscription,
    "InvoiceTaxAmount": InvoiceTaxAmount,
    "InvoiceTestClock": InvoiceTestClock,
    "InvoiceThresholdReason": InvoiceThresholdReason,
    "InvoiceTransferData": InvoiceTransferData,
    "InvoiceTransferData1": InvoiceTransferData1,
    "InvoiceTransferDataDestination": InvoiceTransferDataDestination,
    "Invoiceitem": Invoiceitem,
    "InvoiceitemCustomer": InvoiceitemCustomer,
    "InvoiceitemDiscountsInner": InvoiceitemDiscountsInner,
    "InvoiceitemInvoice": InvoiceitemInvoice,
    "InvoiceitemPlan": InvoiceitemPlan,
    "InvoiceitemPrice": InvoiceitemPrice,
    "InvoiceitemSubscription": InvoiceitemSubscription,
    "InvoiceitemTestClock": InvoiceitemTestClock,
    "InvoicesFromInvoice": InvoicesFromInvoice,
    "InvoicesFromInvoiceInvoice": InvoicesFromInvoiceInvoice,
    "InvoicesItemsList": InvoicesItemsList,
    "InvoicesLineItemsCreditedItems": InvoicesLineItemsCreditedItems,
    "InvoicesLineItemsProrationDetails": InvoicesLineItemsProrationDetails,
    "InvoicesLineItemsProrationDetailsCreditedItems": InvoicesLineItemsProrationDetailsCreditedItems,
    "InvoicesList": InvoicesList,
    "InvoicesPaymentMethodOptions": InvoicesPaymentMethodOptions,
    "InvoicesPaymentMethodOptionsAcssDebit": InvoicesPaymentMethodOptionsAcssDebit,
    "InvoicesPaymentMethodOptionsBancontact": InvoicesPaymentMethodOptionsBancontact,
    "InvoicesPaymentMethodOptionsCard": InvoicesPaymentMethodOptionsCard,
    "InvoicesPaymentMethodOptionsCustomerBalance": InvoicesPaymentMethodOptionsCustomerBalance,
    "InvoicesPaymentMethodOptionsKonbini": InvoicesPaymentMethodOptionsKonbini,
    "InvoicesPaymentMethodOptionsUsBankAccount": InvoicesPaymentMethodOptionsUsBankAccount,
    "InvoicesPaymentSettings": InvoicesPaymentSettings,
    "InvoicesPaymentSettingsPaymentMethodOptions": InvoicesPaymentSettingsPaymentMethodOptions,
    "InvoicesResourceInvoiceTaxId": InvoicesResourceInvoiceTaxId,
    "InvoicesShippingCost": InvoicesShippingCost,
    "InvoicesShippingCostShippingRate": InvoicesShippingCostShippingRate,
    "InvoicesStatusTransitions": InvoicesStatusTransitions,
    "IssuingAuthorization": IssuingAuthorization,
    "IssuingAuthorizationAmountDetails": IssuingAuthorizationAmountDetails,
    "IssuingAuthorizationAmountDetails1": IssuingAuthorizationAmountDetails1,
    "IssuingAuthorizationCardholder": IssuingAuthorizationCardholder,
    "IssuingAuthorizationList": IssuingAuthorizationList,
    "IssuingAuthorizationMerchantData": IssuingAuthorizationMerchantData,
    "IssuingAuthorizationNetworkData": IssuingAuthorizationNetworkData,
    "IssuingAuthorizationNetworkData1": IssuingAuthorizationNetworkData1,
    "IssuingAuthorizationPendingRequest": IssuingAuthorizationPendingRequest,
    "IssuingAuthorizationPendingRequest1": IssuingAuthorizationPendingRequest1,
    "IssuingAuthorizationRequest": IssuingAuthorizationRequest,
    "IssuingAuthorizationTreasury": IssuingAuthorizationTreasury,
    "IssuingAuthorizationTreasury1": IssuingAuthorizationTreasury1,
    "IssuingAuthorizationVerificationData": IssuingAuthorizationVerificationData,
    "IssuingCard": IssuingCard,
    "IssuingCardApplePay": IssuingCardApplePay,
    "IssuingCardAuthorizationControls": IssuingCardAuthorizationControls,
    "IssuingCardGooglePay": IssuingCardGooglePay,
    "IssuingCardList": IssuingCardList,
    "IssuingCardReplacedBy": IssuingCardReplacedBy,
    "IssuingCardReplacementFor": IssuingCardReplacementFor,
    "IssuingCardShipping": IssuingCardShipping,
    "IssuingCardShipping1": IssuingCardShipping1,
    "IssuingCardShippingCustoms": IssuingCardShippingCustoms,
    "IssuingCardShippingCustoms1": IssuingCardShippingCustoms1,
    "IssuingCardSpendingLimit": IssuingCardSpendingLimit,
    "IssuingCardWallets": IssuingCardWallets,
    "IssuingCardWallets1": IssuingCardWallets1,
    "IssuingCardholder": IssuingCardholder,
    "IssuingCardholderAddress": IssuingCardholderAddress,
    "IssuingCardholderAuthorizationControls": IssuingCardholderAuthorizationControls,
    "IssuingCardholderCardIssuing": IssuingCardholderCardIssuing,
    "IssuingCardholderCardIssuingUserTermsAcceptance": IssuingCardholderCardIssuingUserTermsAcceptance,
    "IssuingCardholderCompany": IssuingCardholderCompany,
    "IssuingCardholderCompany1": IssuingCardholderCompany1,
    "IssuingCardholderIdDocument": IssuingCardholderIdDocument,
    "IssuingCardholderIdDocumentBack": IssuingCardholderIdDocumentBack,
    "IssuingCardholderIdDocumentFront": IssuingCardholderIdDocumentFront,
    "IssuingCardholderIndividual": IssuingCardholderIndividual,
    "IssuingCardholderIndividual1": IssuingCardholderIndividual1,
    "IssuingCardholderIndividualCardIssuing": IssuingCardholderIndividualCardIssuing,
    "IssuingCardholderIndividualDob": IssuingCardholderIndividualDob,
    "IssuingCardholderIndividualDob1": IssuingCardholderIndividualDob1,
    "IssuingCardholderIndividualVerification": IssuingCardholderIndividualVerification,
    "IssuingCardholderList": IssuingCardholderList,
    "IssuingCardholderRequirements": IssuingCardholderRequirements,
    "IssuingCardholderSpendingControls": IssuingCardholderSpendingControls,
    "IssuingCardholderSpendingLimit": IssuingCardholderSpendingLimit,
    "IssuingCardholderUserTermsAcceptance": IssuingCardholderUserTermsAcceptance,
    "IssuingCardholderVerification": IssuingCardholderVerification,
    "IssuingCardholderVerificationDocument": IssuingCardholderVerificationDocument,
    "IssuingDispute": IssuingDispute,
    "IssuingDisputeCanceledEvidence": IssuingDisputeCanceledEvidence,
    "IssuingDisputeCanceledEvidenceAdditionalDocumentation": IssuingDisputeCanceledEvidenceAdditionalDocumentation,
    "IssuingDisputeDuplicateEvidence": IssuingDisputeDuplicateEvidence,
    "IssuingDisputeDuplicateEvidenceCardStatement": IssuingDisputeDuplicateEvidenceCardStatement,
    "IssuingDisputeDuplicateEvidenceCashReceipt": IssuingDisputeDuplicateEvidenceCashReceipt,
    "IssuingDisputeDuplicateEvidenceCheckImage": IssuingDisputeDuplicateEvidenceCheckImage,
    "IssuingDisputeEvidence": IssuingDisputeEvidence,
    "IssuingDisputeFraudulentEvidence": IssuingDisputeFraudulentEvidence,
    "IssuingDisputeList": IssuingDisputeList,
    "IssuingDisputeMerchandiseNotAsDescribedEvidence": IssuingDisputeMerchandiseNotAsDescribedEvidence,
    "IssuingDisputeNotReceivedEvidence": IssuingDisputeNotReceivedEvidence,
    "IssuingDisputeOtherEvidence": IssuingDisputeOtherEvidence,
    "IssuingDisputeServiceNotAsDescribedEvidence": IssuingDisputeServiceNotAsDescribedEvidence,
    "IssuingDisputeTransaction": IssuingDisputeTransaction,
    "IssuingDisputeTreasury": IssuingDisputeTreasury,
    "IssuingDisputeTreasury1": IssuingDisputeTreasury1,
    "IssuingTransaction": IssuingTransaction,
    "IssuingTransactionAmountDetails": IssuingTransactionAmountDetails,
    "IssuingTransactionAmountDetails1": IssuingTransactionAmountDetails1,
    "IssuingTransactionAuthorization": IssuingTransactionAuthorization,
    "IssuingTransactionBalanceTransaction": IssuingTransactionBalanceTransaction,
    "IssuingTransactionCard": IssuingTransactionCard,
    "IssuingTransactionCardholder": IssuingTransactionCardholder,
    "IssuingTransactionDispute": IssuingTransactionDispute,
    "IssuingTransactionFlightData": IssuingTransactionFlightData,
    "IssuingTransactionFlightDataLeg": IssuingTransactionFlightDataLeg,
    "IssuingTransactionFuelData": IssuingTransactionFuelData,
    "IssuingTransactionList": IssuingTransactionList,
    "IssuingTransactionLodgingData": IssuingTransactionLodgingData,
    "IssuingTransactionPurchaseDetails": IssuingTransactionPurchaseDetails,
    "IssuingTransactionPurchaseDetails1": IssuingTransactionPurchaseDetails1,
    "IssuingTransactionPurchaseDetailsFlight": IssuingTransactionPurchaseDetailsFlight,
    "IssuingTransactionPurchaseDetailsFuel": IssuingTransactionPurchaseDetailsFuel,
    "IssuingTransactionPurchaseDetailsLodging": IssuingTransactionPurchaseDetailsLodging,
    "IssuingTransactionReceiptData": IssuingTransactionReceiptData,
    "IssuingTransactionTreasury": IssuingTransactionTreasury,
    "IssuingTransactionTreasury1": IssuingTransactionTreasury1,
    "Item": Item,
    "ItemBillingThresholdsParam": ItemBillingThresholdsParam,
    "ItemPrice": ItemPrice,
    "LegalEntityCompany": LegalEntityCompany,
    "LegalEntityCompanyAddressKana": LegalEntityCompanyAddressKana,
    "LegalEntityCompanyAddressKanji": LegalEntityCompanyAddressKanji,
    "LegalEntityCompanyOwnershipDeclaration": LegalEntityCompanyOwnershipDeclaration,
    "LegalEntityCompanyVerification": LegalEntityCompanyVerification,
    "LegalEntityCompanyVerification1": LegalEntityCompanyVerification1,
    "LegalEntityCompanyVerificationDocument": LegalEntityCompanyVerificationDocument,
    "LegalEntityCompanyVerificationDocumentBack": LegalEntityCompanyVerificationDocumentBack,
    "LegalEntityCompanyVerificationDocumentFront": LegalEntityCompanyVerificationDocumentFront,
    "LegalEntityDob": LegalEntityDob,
    "LegalEntityJapanAddress": LegalEntityJapanAddress,
    "LegalEntityPersonVerification": LegalEntityPersonVerification,
    "LegalEntityPersonVerificationAdditionalDocument": LegalEntityPersonVerificationAdditionalDocument,
    "LegalEntityPersonVerificationDocument": LegalEntityPersonVerificationDocument,
    "LegalEntityPersonVerificationDocumentBack": LegalEntityPersonVerificationDocumentBack,
    "LegalEntityPersonVerificationDocumentFront": LegalEntityPersonVerificationDocumentFront,
    "LegalEntityUboDeclaration": LegalEntityUboDeclaration,
    "Level3": Level3,
    "Level3LineItems": Level3LineItems,
    "LineItem": LineItem,
    "LineItemPlan": LineItemPlan,
    "LineItemPrice": LineItemPrice,
    "LineItemProrationDetails": LineItemProrationDetails,
    "LineItemsDiscountAmount": LineItemsDiscountAmount,
    "LineItemsTaxAmount": LineItemsTaxAmount,
    "LinkedAccountOptionsUsBankAccount": LinkedAccountOptionsUsBankAccount,
    "LinkedFlowsParam": LinkedFlowsParam,
    "ListAccountCapability": ListAccountCapability,
    "LoginLink": LoginLink,
    "Mandate": Mandate,
    "MandateAcssDebit": MandateAcssDebit,
    "MandateAuBecsDebit": MandateAuBecsDebit,
    "MandateBacsDebit": MandateBacsDebit,
    "MandateBlik": MandateBlik,
    "MandateOptionsOffSessionDetailsBlik": MandateOptionsOffSessionDetailsBlik,
    "MandateOptionsParam": MandateOptionsParam,
    "MandatePaymentMethod": MandatePaymentMethod,
    "MandatePaymentMethodDetails": MandatePaymentMethodDetails,
    "MandateSepaDebit": MandateSepaDebit,
    "MandateSingleUse": MandateSingleUse,
    "ModelError": ModelError,
    "ModelFile": ModelFile,
    "Networks": Networks,
    "NotificationEventData": NotificationEventData,
    "NotificationEventList": NotificationEventList,
    "NotificationEventRequest": NotificationEventRequest,
    "NotificationWebhookEndpointList": NotificationWebhookEndpointList,
    "OneTimePriceData": OneTimePriceData,
    "OnlineAcceptance": OnlineAcceptance,
    "OutboundPaymentsPaymentMethodDetails": OutboundPaymentsPaymentMethodDetails,
    "OutboundPaymentsPaymentMethodDetailsFinancialAccount": OutboundPaymentsPaymentMethodDetailsFinancialAccount,
    "OutboundPaymentsPaymentMethodDetailsUsBankAccount": OutboundPaymentsPaymentMethodDetailsUsBankAccount,
    "OutboundTransfersPaymentMethodDetails": OutboundTransfersPaymentMethodDetails,
    "OutboundTransfersPaymentMethodDetailsUsBankAccount": OutboundTransfersPaymentMethodDetailsUsBankAccount,
    "PackageDimensions": PackageDimensions,
    "PaymentFlowsAmountDetails": PaymentFlowsAmountDetails,
    "PaymentFlowsAmountDetailsResourceTip": PaymentFlowsAmountDetailsResourceTip,
    "PaymentFlowsAutomaticPaymentMethodsPaymentIntent": PaymentFlowsAutomaticPaymentMethodsPaymentIntent,
    "PaymentFlowsInstallmentOptions": PaymentFlowsInstallmentOptions,
    "PaymentFlowsPaymentIntentList": PaymentFlowsPaymentIntentList,
    "PaymentFlowsPaymentMethodList": PaymentFlowsPaymentMethodList,
    "PaymentFlowsPrivatePaymentMethodsAlipayDetails": PaymentFlowsPrivatePaymentMethodsAlipayDetails,
    "PaymentFlowsPrivatePaymentMethodsKlarnaDob": PaymentFlowsPrivatePaymentMethodsKlarnaDob,
    "PaymentFlowsSetupIntentList": PaymentFlowsSetupIntentList,
    "PaymentFlowsSetupIntentSetupAttemptList": PaymentFlowsSetupIntentSetupAttemptList,
    "PaymentIntent": PaymentIntent,
    "PaymentIntentApplication": PaymentIntentApplication,
    "PaymentIntentAutomaticPaymentMethods": PaymentIntentAutomaticPaymentMethods,
    "PaymentIntentCardProcessing": PaymentIntentCardProcessing,
    "PaymentIntentCustomer": PaymentIntentCustomer,
    "PaymentIntentInvoice": PaymentIntentInvoice,
    "PaymentIntentLastPaymentError": PaymentIntentLastPaymentError,
    "PaymentIntentLatestCharge": PaymentIntentLatestCharge,
    "PaymentIntentNextAction": PaymentIntentNextAction,
    "PaymentIntentNextAction1": PaymentIntentNextAction1,
    "PaymentIntentNextActionAlipayHandleRedirect": PaymentIntentNextActionAlipayHandleRedirect,
    "PaymentIntentNextActionBoleto": PaymentIntentNextActionBoleto,
    "PaymentIntentNextActionCardAwaitNotification": PaymentIntentNextActionCardAwaitNotification,
    "PaymentIntentNextActionDisplayBankTransferInstructions": PaymentIntentNextActionDisplayBankTransferInstructions,
    "PaymentIntentNextActionDisplayOxxoDetails": PaymentIntentNextActionDisplayOxxoDetails,
    "PaymentIntentNextActionKonbini": PaymentIntentNextActionKonbini,
    "PaymentIntentNextActionKonbiniFamilymart": PaymentIntentNextActionKonbiniFamilymart,
    "PaymentIntentNextActionKonbiniLawson": PaymentIntentNextActionKonbiniLawson,
    "PaymentIntentNextActionKonbiniMinistop": PaymentIntentNextActionKonbiniMinistop,
    "PaymentIntentNextActionKonbiniSeicomart": PaymentIntentNextActionKonbiniSeicomart,
    "PaymentIntentNextActionKonbiniStores": PaymentIntentNextActionKonbiniStores,
    "PaymentIntentNextActionKonbiniStoresFamilymart": PaymentIntentNextActionKonbiniStoresFamilymart,
    "PaymentIntentNextActionKonbiniStoresLawson": PaymentIntentNextActionKonbiniStoresLawson,
    "PaymentIntentNextActionKonbiniStoresMinistop": PaymentIntentNextActionKonbiniStoresMinistop,
    "PaymentIntentNextActionKonbiniStoresSeicomart": PaymentIntentNextActionKonbiniStoresSeicomart,
    "PaymentIntentNextActionPaynowDisplayQrCode": PaymentIntentNextActionPaynowDisplayQrCode,
    "PaymentIntentNextActionPixDisplayQrCode": PaymentIntentNextActionPixDisplayQrCode,
    "PaymentIntentNextActionPromptpayDisplayQrCode": PaymentIntentNextActionPromptpayDisplayQrCode,
    "PaymentIntentNextActionRedirectToUrl": PaymentIntentNextActionRedirectToUrl,
    "PaymentIntentNextActionVerifyWithMicrodeposits": PaymentIntentNextActionVerifyWithMicrodeposits,
    "PaymentIntentNextActionWechatPayDisplayQrCode": PaymentIntentNextActionWechatPayDisplayQrCode,
    "PaymentIntentNextActionWechatPayRedirectToAndroidApp": PaymentIntentNextActionWechatPayRedirectToAndroidApp,
    "PaymentIntentNextActionWechatPayRedirectToIosApp": PaymentIntentNextActionWechatPayRedirectToIosApp,
    "PaymentIntentOnBehalfOf": PaymentIntentOnBehalfOf,
    "PaymentIntentPaymentMethod": PaymentIntentPaymentMethod,
    "PaymentIntentPaymentMethodOptions": PaymentIntentPaymentMethodOptions,
    "PaymentIntentPaymentMethodOptions1": PaymentIntentPaymentMethodOptions1,
    "PaymentIntentPaymentMethodOptionsAcssDebit": PaymentIntentPaymentMethodOptionsAcssDebit,
    "PaymentIntentPaymentMethodOptionsAuBecsDebit": PaymentIntentPaymentMethodOptionsAuBecsDebit,
    "PaymentIntentPaymentMethodOptionsCard": PaymentIntentPaymentMethodOptionsCard,
    "PaymentIntentPaymentMethodOptionsCardInstallments": PaymentIntentPaymentMethodOptionsCardInstallments,
    "PaymentIntentPaymentMethodOptionsCardMandateOptions": PaymentIntentPaymentMethodOptionsCardMandateOptions,
    "PaymentIntentPaymentMethodOptionsEps": PaymentIntentPaymentMethodOptionsEps,
    "PaymentIntentPaymentMethodOptionsLink": PaymentIntentPaymentMethodOptionsLink,
    "PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit": PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit,
    "PaymentIntentPaymentMethodOptionsSepaDebit": PaymentIntentPaymentMethodOptionsSepaDebit,
    "PaymentIntentPaymentMethodOptionsUsBankAccount": PaymentIntentPaymentMethodOptionsUsBankAccount,
    "PaymentIntentProcessing": PaymentIntentProcessing,
    "PaymentIntentProcessing1": PaymentIntentProcessing1,
    "PaymentIntentProcessingCustomerNotification": PaymentIntentProcessingCustomerNotification,
    "PaymentIntentReview": PaymentIntentReview,
    "PaymentIntentShipping": PaymentIntentShipping,
    "PaymentIntentSource": PaymentIntentSource,
    "PaymentIntentTransferData": PaymentIntentTransferData,
    "PaymentIntentTypeSpecificPaymentMethodOptionsClient": PaymentIntentTypeSpecificPaymentMethodOptionsClient,
    "PaymentLink": PaymentLink,
    "PaymentLinkConsentCollection": PaymentLinkConsentCollection,
    "PaymentLinkInvoiceCreation": PaymentLinkInvoiceCreation,
    "PaymentLinkOnBehalfOf": PaymentLinkOnBehalfOf,
    "PaymentLinkPaymentIntentData": PaymentLinkPaymentIntentData,
    "PaymentLinkShippingAddressCollection": PaymentLinkShippingAddressCollection,
    "PaymentLinkSubscriptionData": PaymentLinkSubscriptionData,
    "PaymentLinkTransferData": PaymentLinkTransferData,
    "PaymentLinksResourceAfterCompletion": PaymentLinksResourceAfterCompletion,
    "PaymentLinksResourceAutomaticTax": PaymentLinksResourceAutomaticTax,
    "PaymentLinksResourceCompletionBehaviorConfirmationPage": PaymentLinksResourceCompletionBehaviorConfirmationPage,
    "PaymentLinksResourceCompletionBehaviorRedirect": PaymentLinksResourceCompletionBehaviorRedirect,
    "PaymentLinksResourceConsentCollection": PaymentLinksResourceConsentCollection,
    "PaymentLinksResourceCustomFields": PaymentLinksResourceCustomFields,
    "PaymentLinksResourceCustomFieldsDropdown": PaymentLinksResourceCustomFieldsDropdown,
    "PaymentLinksResourceCustomFieldsDropdown1": PaymentLinksResourceCustomFieldsDropdown1,
    "PaymentLinksResourceCustomFieldsDropdownOption": PaymentLinksResourceCustomFieldsDropdownOption,
    "PaymentLinksResourceCustomFieldsLabel": PaymentLinksResourceCustomFieldsLabel,
    "PaymentLinksResourceCustomText": PaymentLinksResourceCustomText,
    "PaymentLinksResourceCustomTextPosition": PaymentLinksResourceCustomTextPosition,
    "PaymentLinksResourceCustomTextShippingAddress": PaymentLinksResourceCustomTextShippingAddress,
    "PaymentLinksResourceCustomTextSubmit": PaymentLinksResourceCustomTextSubmit,
    "PaymentLinksResourceInvoiceCreation": PaymentLinksResourceInvoiceCreation,
    "PaymentLinksResourceInvoiceCreationInvoiceData": PaymentLinksResourceInvoiceCreationInvoiceData,
    "PaymentLinksResourceInvoiceSettings": PaymentLinksResourceInvoiceSettings,
    "PaymentLinksResourceListLineItems": PaymentLinksResourceListLineItems,
    "PaymentLinksResourceListLineItems1": PaymentLinksResourceListLineItems1,
    "PaymentLinksResourcePaymentIntentData": PaymentLinksResourcePaymentIntentData,
    "PaymentLinksResourcePaymentLinkList": PaymentLinksResourcePaymentLinkList,
    "PaymentLinksResourcePhoneNumberCollection": PaymentLinksResourcePhoneNumberCollection,
    "PaymentLinksResourceShippingAddressCollection": PaymentLinksResourceShippingAddressCollection,
    "PaymentLinksResourceShippingOption": PaymentLinksResourceShippingOption,
    "PaymentLinksResourceShippingOptionShippingRate": PaymentLinksResourceShippingOptionShippingRate,
    "PaymentLinksResourceSubscriptionData": PaymentLinksResourceSubscriptionData,
    "PaymentLinksResourceTaxIdCollection": PaymentLinksResourceTaxIdCollection,
    "PaymentLinksResourceTransferData": PaymentLinksResourceTransferData,
    "PaymentLinksResourceTransferDataDestination": PaymentLinksResourceTransferDataDestination,
    "PaymentMethod": PaymentMethod,
    "PaymentMethodAcssDebit": PaymentMethodAcssDebit,
    "PaymentMethodAuBecsDebit": PaymentMethodAuBecsDebit,
    "PaymentMethodBacsDebit": PaymentMethodBacsDebit,
    "PaymentMethodBoleto": PaymentMethodBoleto,
    "PaymentMethodCard": PaymentMethodCard,
    "PaymentMethodCardChecks": PaymentMethodCardChecks,
    "PaymentMethodCardChecks1": PaymentMethodCardChecks1,
    "PaymentMethodCardNetworks": PaymentMethodCardNetworks,
    "PaymentMethodCardThreeDSecureUsage": PaymentMethodCardThreeDSecureUsage,
    "PaymentMethodCardWallet": PaymentMethodCardWallet,
    "PaymentMethodCardWallet1": PaymentMethodCardWallet1,
    "PaymentMethodCardWalletMasterpass": PaymentMethodCardWalletMasterpass,
    "PaymentMethodCardWalletMasterpassBillingAddress": PaymentMethodCardWalletMasterpassBillingAddress,
    "PaymentMethodCardWalletMasterpassShippingAddress": PaymentMethodCardWalletMasterpassShippingAddress,
    "PaymentMethodCardWalletVisaCheckout": PaymentMethodCardWalletVisaCheckout,
    "PaymentMethodCustomer": PaymentMethodCustomer,
    "PaymentMethodDetails": PaymentMethodDetails,
    "PaymentMethodDetailsAchCreditTransfer": PaymentMethodDetailsAchCreditTransfer,
    "PaymentMethodDetailsAchDebit": PaymentMethodDetailsAchDebit,
    "PaymentMethodDetailsAcssDebit": PaymentMethodDetailsAcssDebit,
    "PaymentMethodDetailsAfterpayClearpay": PaymentMethodDetailsAfterpayClearpay,
    "PaymentMethodDetailsAuBecsDebit": PaymentMethodDetailsAuBecsDebit,
    "PaymentMethodDetailsBacsDebit": PaymentMethodDetailsBacsDebit,
    "PaymentMethodDetailsBancontact": PaymentMethodDetailsBancontact,
    "PaymentMethodDetailsBancontactGeneratedSepaDebit": PaymentMethodDetailsBancontactGeneratedSepaDebit,
    "PaymentMethodDetailsBancontactGeneratedSepaDebitMandate": PaymentMethodDetailsBancontactGeneratedSepaDebitMandate,
    "PaymentMethodDetailsBoleto": PaymentMethodDetailsBoleto,
    "PaymentMethodDetailsCard": PaymentMethodDetailsCard,
    "PaymentMethodDetailsCardChecks": PaymentMethodDetailsCardChecks,
    "PaymentMethodDetailsCardChecks1": PaymentMethodDetailsCardChecks1,
    "PaymentMethodDetailsCardInstallments": PaymentMethodDetailsCardInstallments,
    "PaymentMethodDetailsCardInstallments1": PaymentMethodDetailsCardInstallments1,
    "PaymentMethodDetailsCardInstallmentsPlan": PaymentMethodDetailsCardInstallmentsPlan,
    "PaymentMethodDetailsCardInstallmentsPlan1": PaymentMethodDetailsCardInstallmentsPlan1,
    "PaymentMethodDetailsCardPresent": PaymentMethodDetailsCardPresent,
    "PaymentMethodDetailsCardPresentReceipt": PaymentMethodDetailsCardPresentReceipt,
    "PaymentMethodDetailsCardPresentReceipt1": PaymentMethodDetailsCardPresentReceipt1,
    "PaymentMethodDetailsCardThreeDSecure": PaymentMethodDetailsCardThreeDSecure,
    "PaymentMethodDetailsCardWallet": PaymentMethodDetailsCardWallet,
    "PaymentMethodDetailsCardWallet1": PaymentMethodDetailsCardWallet1,
    "PaymentMethodDetailsCardWalletMasterpass": PaymentMethodDetailsCardWalletMasterpass,
    "PaymentMethodDetailsCardWalletVisaCheckout": PaymentMethodDetailsCardWalletVisaCheckout,
    "PaymentMethodDetailsEps": PaymentMethodDetailsEps,
    "PaymentMethodDetailsFpx": PaymentMethodDetailsFpx,
    "PaymentMethodDetailsGiropay": PaymentMethodDetailsGiropay,
    "PaymentMethodDetailsGrabpay": PaymentMethodDetailsGrabpay,
    "PaymentMethodDetailsIdeal": PaymentMethodDetailsIdeal,
    "PaymentMethodDetailsInteracPresent": PaymentMethodDetailsInteracPresent,
    "PaymentMethodDetailsInteracPresentReceipt": PaymentMethodDetailsInteracPresentReceipt,
    "PaymentMethodDetailsInteracPresentReceipt1": PaymentMethodDetailsInteracPresentReceipt1,
    "PaymentMethodDetailsKlarna": PaymentMethodDetailsKlarna,
    "PaymentMethodDetailsKonbini": PaymentMethodDetailsKonbini,
    "PaymentMethodDetailsKonbiniStore": PaymentMethodDetailsKonbiniStore,
    "PaymentMethodDetailsKonbiniStore1": PaymentMethodDetailsKonbiniStore1,
    "PaymentMethodDetailsMultibanco": PaymentMethodDetailsMultibanco,
    "PaymentMethodDetailsOxxo": PaymentMethodDetailsOxxo,
    "PaymentMethodDetailsP24": PaymentMethodDetailsP24,
    "PaymentMethodDetailsPaynow": PaymentMethodDetailsPaynow,
    "PaymentMethodDetailsPix": PaymentMethodDetailsPix,
    "PaymentMethodDetailsPromptpay": PaymentMethodDetailsPromptpay,
    "PaymentMethodDetailsSepaCreditTransfer": PaymentMethodDetailsSepaCreditTransfer,
    "PaymentMethodDetailsSepaDebit": PaymentMethodDetailsSepaDebit,
    "PaymentMethodDetailsSofort": PaymentMethodDetailsSofort,
    "PaymentMethodDetailsUsBankAccount": PaymentMethodDetailsUsBankAccount,
    "PaymentMethodDetailsWechatPay": PaymentMethodDetailsWechatPay,
    "PaymentMethodEps": PaymentMethodEps,
    "PaymentMethodFpx": PaymentMethodFpx,
    "PaymentMethodIdeal": PaymentMethodIdeal,
    "PaymentMethodKlarna": PaymentMethodKlarna,
    "PaymentMethodKlarnaDob": PaymentMethodKlarnaDob,
    "PaymentMethodLink": PaymentMethodLink,
    "PaymentMethodOptionsAffirm": PaymentMethodOptionsAffirm,
    "PaymentMethodOptionsAfterpayClearpay": PaymentMethodOptionsAfterpayClearpay,
    "PaymentMethodOptionsAlipay": PaymentMethodOptionsAlipay,
    "PaymentMethodOptionsBacsDebit": PaymentMethodOptionsBacsDebit,
    "PaymentMethodOptionsBancontact": PaymentMethodOptionsBancontact,
    "PaymentMethodOptionsBoleto": PaymentMethodOptionsBoleto,
    "PaymentMethodOptionsCardInstallments": PaymentMethodOptionsCardInstallments,
    "PaymentMethodOptionsCardInstallmentsPlan": PaymentMethodOptionsCardInstallmentsPlan,
    "PaymentMethodOptionsCardMandateOptions": PaymentMethodOptionsCardMandateOptions,
    "PaymentMethodOptionsCardPresent": PaymentMethodOptionsCardPresent,
    "PaymentMethodOptionsCustomerBalance": PaymentMethodOptionsCustomerBalance,
    "PaymentMethodOptionsCustomerBalanceBankTransfer": PaymentMethodOptionsCustomerBalanceBankTransfer,
    "PaymentMethodOptionsCustomerBalanceEuBankAccount": PaymentMethodOptionsCustomerBalanceEuBankAccount,
    "PaymentMethodOptionsFpx": PaymentMethodOptionsFpx,
    "PaymentMethodOptionsGiropay": PaymentMethodOptionsGiropay,
    "PaymentMethodOptionsGrabpay": PaymentMethodOptionsGrabpay,
    "PaymentMethodOptionsIdeal": PaymentMethodOptionsIdeal,
    "PaymentMethodOptionsKlarna": PaymentMethodOptionsKlarna,
    "PaymentMethodOptionsKonbini": PaymentMethodOptionsKonbini,
    "PaymentMethodOptionsOxxo": PaymentMethodOptionsOxxo,
    "PaymentMethodOptionsP24": PaymentMethodOptionsP24,
    "PaymentMethodOptionsPaynow": PaymentMethodOptionsPaynow,
    "PaymentMethodOptionsPix": PaymentMethodOptionsPix,
    "PaymentMethodOptionsPromptpay": PaymentMethodOptionsPromptpay,
    "PaymentMethodOptionsSofort": PaymentMethodOptionsSofort,
    "PaymentMethodOptionsWechatPay": PaymentMethodOptionsWechatPay,
    "PaymentMethodP24": PaymentMethodP24,
    "PaymentMethodSepaDebit": PaymentMethodSepaDebit,
    "PaymentMethodSepaDebitGeneratedFrom": PaymentMethodSepaDebitGeneratedFrom,
    "PaymentMethodSofort": PaymentMethodSofort,
    "PaymentMethodUsBankAccount": PaymentMethodUsBankAccount,
    "PaymentMethodUsBankAccountNetworks": PaymentMethodUsBankAccountNetworks,
    "PaymentPagesCheckoutSessionAfterExpiration": PaymentPagesCheckoutSessionAfterExpiration,
    "PaymentPagesCheckoutSessionAfterExpirationRecovery": PaymentPagesCheckoutSessionAfterExpirationRecovery,
    "PaymentPagesCheckoutSessionAfterExpirationRecovery1": PaymentPagesCheckoutSessionAfterExpirationRecovery1,
    "PaymentPagesCheckoutSessionAutomaticTax": PaymentPagesCheckoutSessionAutomaticTax,
    "PaymentPagesCheckoutSessionConsent": PaymentPagesCheckoutSessionConsent,
    "PaymentPagesCheckoutSessionConsentCollection": PaymentPagesCheckoutSessionConsentCollection,
    "PaymentPagesCheckoutSessionCustomFields": PaymentPagesCheckoutSessionCustomFields,
    "PaymentPagesCheckoutSessionCustomFieldsDropdown": PaymentPagesCheckoutSessionCustomFieldsDropdown,
    "PaymentPagesCheckoutSessionCustomFieldsDropdown1": PaymentPagesCheckoutSessionCustomFieldsDropdown1,
    "PaymentPagesCheckoutSessionCustomFieldsLabel": PaymentPagesCheckoutSessionCustomFieldsLabel,
    "PaymentPagesCheckoutSessionCustomFieldsNumeric": PaymentPagesCheckoutSessionCustomFieldsNumeric,
    "PaymentPagesCheckoutSessionCustomFieldsNumeric1": PaymentPagesCheckoutSessionCustomFieldsNumeric1,
    "PaymentPagesCheckoutSessionCustomFieldsOption": PaymentPagesCheckoutSessionCustomFieldsOption,
    "PaymentPagesCheckoutSessionCustomFieldsText": PaymentPagesCheckoutSessionCustomFieldsText,
    "PaymentPagesCheckoutSessionCustomFieldsText1": PaymentPagesCheckoutSessionCustomFieldsText1,
    "PaymentPagesCheckoutSessionCustomText": PaymentPagesCheckoutSessionCustomText,
    "PaymentPagesCheckoutSessionCustomTextPosition": PaymentPagesCheckoutSessionCustomTextPosition,
    "PaymentPagesCheckoutSessionCustomTextShippingAddress": PaymentPagesCheckoutSessionCustomTextShippingAddress,
    "PaymentPagesCheckoutSessionCustomTextSubmit": PaymentPagesCheckoutSessionCustomTextSubmit,
    "PaymentPagesCheckoutSessionCustomerDetails": PaymentPagesCheckoutSessionCustomerDetails,
    "PaymentPagesCheckoutSessionCustomerDetailsAddress": PaymentPagesCheckoutSessionCustomerDetailsAddress,
    "PaymentPagesCheckoutSessionInvoiceCreation": PaymentPagesCheckoutSessionInvoiceCreation,
    "PaymentPagesCheckoutSessionInvoiceSettings": PaymentPagesCheckoutSessionInvoiceSettings,
    "PaymentPagesCheckoutSessionList": PaymentPagesCheckoutSessionList,
    "PaymentPagesCheckoutSessionListLineItems": PaymentPagesCheckoutSessionListLineItems,
    "PaymentPagesCheckoutSessionListLineItems1": PaymentPagesCheckoutSessionListLineItems1,
    "PaymentPagesCheckoutSessionPhoneNumberCollection": PaymentPagesCheckoutSessionPhoneNumberCollection,
    "PaymentPagesCheckoutSessionShippingAddressCollection": PaymentPagesCheckoutSessionShippingAddressCollection,
    "PaymentPagesCheckoutSessionShippingCost": PaymentPagesCheckoutSessionShippingCost,
    "PaymentPagesCheckoutSessionShippingCostShippingRate": PaymentPagesCheckoutSessionShippingCostShippingRate,
    "PaymentPagesCheckoutSessionShippingOption": PaymentPagesCheckoutSessionShippingOption,
    "PaymentPagesCheckoutSessionShippingOptionShippingRate": PaymentPagesCheckoutSessionShippingOptionShippingRate,
    "PaymentPagesCheckoutSessionTaxId": PaymentPagesCheckoutSessionTaxId,
    "PaymentPagesCheckoutSessionTaxIdCollection": PaymentPagesCheckoutSessionTaxIdCollection,
    "PaymentPagesCheckoutSessionTotalDetails": PaymentPagesCheckoutSessionTotalDetails,
    "PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown": PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown,
    "PaymentSource": PaymentSource,
    "Payout": Payout,
    "PayoutBalanceTransaction": PayoutBalanceTransaction,
    "PayoutDestination": PayoutDestination,
    "PayoutFailureBalanceTransaction": PayoutFailureBalanceTransaction,
    "PayoutList": PayoutList,
    "PayoutOriginalPayout": PayoutOriginalPayout,
    "PayoutReversedBy": PayoutReversedBy,
    "Period": Period,
    "Period1": Period1,
    "Person": Person,
    "PersonAddressKana": PersonAddressKana,
    "PersonAddressKanji": PersonAddressKanji,
    "PersonFutureRequirements": PersonFutureRequirements,
    "PersonFutureRequirements1": PersonFutureRequirements1,
    "PersonList": PersonList,
    "PersonRelationship": PersonRelationship,
    "PersonRequirements": PersonRequirements,
    "PersonRequirements1": PersonRequirements1,
    "Plan": Plan,
    "PlanList": PlanList,
    "PlanProduct": PlanProduct,
    "PlanTier": PlanTier,
    "PlanTransformUsage": PlanTransformUsage,
    "PlatformEarningList": PlatformEarningList,
    "PlatformTaxFee": PlatformTaxFee,
    "PortalBusinessProfile": PortalBusinessProfile,
    "PortalConfigurationList": PortalConfigurationList,
    "PortalCustomerUpdate": PortalCustomerUpdate,
    "PortalFeatures": PortalFeatures,
    "PortalFlowsAfterCompletionHostedConfirmation": PortalFlowsAfterCompletionHostedConfirmation,
    "PortalFlowsAfterCompletionRedirect": PortalFlowsAfterCompletionRedirect,
    "PortalFlowsFlow": PortalFlowsFlow,
    "PortalFlowsFlowAfterCompletion": PortalFlowsFlowAfterCompletion,
    "PortalFlowsFlowAfterCompletionHostedConfirmation": PortalFlowsFlowAfterCompletionHostedConfirmation,
    "PortalFlowsFlowAfterCompletionRedirect": PortalFlowsFlowAfterCompletionRedirect,
    "PortalFlowsFlowSubscriptionCancel": PortalFlowsFlowSubscriptionCancel,
    "PortalFlowsFlowSubscriptionCancel1": PortalFlowsFlowSubscriptionCancel1,
    "PortalInvoiceList": PortalInvoiceList,
    "PortalLoginPage": PortalLoginPage,
    "PortalPaymentMethodUpdate": PortalPaymentMethodUpdate,
    "PortalSubscriptionCancel": PortalSubscriptionCancel,
    "PortalSubscriptionCancellationReason": PortalSubscriptionCancellationReason,
    "PortalSubscriptionPause": PortalSubscriptionPause,
    "PortalSubscriptionUpdate": PortalSubscriptionUpdate,
    "PortalSubscriptionUpdateProduct": PortalSubscriptionUpdateProduct,
    "PostCustomersCustomerSourcesId200Response": PostCustomersCustomerSourcesId200Response,
    "PostCustomersRequestAddress": PostCustomersRequestAddress,
    "PostCustomersRequestShipping": PostCustomersRequestShipping,
    "PostInvoiceitemsRequestTaxCode": PostInvoiceitemsRequestTaxCode,
    "Price": Price,
    "PriceList": PriceList,
    "PriceProduct": PriceProduct,
    "PriceRecurring": PriceRecurring,
    "PriceTier": PriceTier,
    "PriceTransformQuantity": PriceTransformQuantity,
    "Product": Product,
    "ProductDefaultPrice": ProductDefaultPrice,
    "ProductList": ProductList,
    "ProductPackageDimensions": ProductPackageDimensions,
    "ProductTaxCode": ProductTaxCode,
    "PromotionCode": PromotionCode,
    "PromotionCodeCurrencyOption": PromotionCodeCurrencyOption,
    "PromotionCodeCustomer": PromotionCodeCustomer,
    "PromotionCodesResourcePromotionCodeList": PromotionCodesResourcePromotionCodeList,
    "PromotionCodesResourceRestrictions": PromotionCodesResourceRestrictions,
    "Quote": Quote,
    "QuoteApplication": QuoteApplication,
    "QuoteCustomer": QuoteCustomer,
    "QuoteDefaultTaxRatesInner": QuoteDefaultTaxRatesInner,
    "QuoteFromQuote": QuoteFromQuote,
    "QuoteInvoice": QuoteInvoice,
    "QuoteInvoiceSettings": QuoteInvoiceSettings,
    "QuoteSubscription": QuoteSubscription,
    "QuoteSubscriptionSchedule": QuoteSubscriptionSchedule,
    "QuoteTestClock": QuoteTestClock,
    "QuoteTransferData": QuoteTransferData,
    "QuotesResourceAutomaticTax": QuotesResourceAutomaticTax,
    "QuotesResourceComputed": QuotesResourceComputed,
    "QuotesResourceComputedRecurring": QuotesResourceComputedRecurring,
    "QuotesResourceFromQuote": QuotesResourceFromQuote,
    "QuotesResourceFromQuoteQuote": QuotesResourceFromQuoteQuote,
    "QuotesResourceListLineItems": QuotesResourceListLineItems,
    "QuotesResourceListLineItems1": QuotesResourceListLineItems1,
    "QuotesResourceListLineItems2": QuotesResourceListLineItems2,
    "QuotesResourceQuoteList": QuotesResourceQuoteList,
    "QuotesResourceRecurring": QuotesResourceRecurring,
    "QuotesResourceStatusTransitions": QuotesResourceStatusTransitions,
    "QuotesResourceSubscriptionDataSubscriptionData": QuotesResourceSubscriptionDataSubscriptionData,
    "QuotesResourceTotalDetails": QuotesResourceTotalDetails,
    "QuotesResourceTotalDetailsResourceBreakdown": QuotesResourceTotalDetailsResourceBreakdown,
    "QuotesResourceTransferData": QuotesResourceTransferData,
    "QuotesResourceUpfront": QuotesResourceUpfront,
    "RadarEarlyFraudWarning": RadarEarlyFraudWarning,
    "RadarEarlyFraudWarningCharge": RadarEarlyFraudWarningCharge,
    "RadarEarlyFraudWarningList": RadarEarlyFraudWarningList,
    "RadarEarlyFraudWarningPaymentIntent": RadarEarlyFraudWarningPaymentIntent,
    "RadarListListItemList": RadarListListItemList,
    "RadarListListItemList1": RadarListListItemList1,
    "RadarListListList": RadarListListList,
    "RadarRadarOptions": RadarRadarOptions,
    "RadarReviewList": RadarReviewList,
    "RadarReviewResourceLocation": RadarReviewResourceLocation,
    "RadarReviewResourceSession": RadarReviewResourceSession,
    "RadarValueList": RadarValueList,
    "RadarValueListItem": RadarValueListItem,
    "RangeQuerySpecs": RangeQuerySpecs,
    "ReceivedPaymentMethodDetailsFinancialAccount": ReceivedPaymentMethodDetailsFinancialAccount,
    "Recurring": Recurring,
    "RecurringAdhoc": RecurringAdhoc,
    "RecurringPriceData": RecurringPriceData,
    "Refund": Refund,
    "RefundCharge": RefundCharge,
    "RefundFailureBalanceTransaction": RefundFailureBalanceTransaction,
    "RefundList": RefundList,
    "RefundList1": RefundList1,
    "RefundNextAction": RefundNextAction,
    "RefundNextActionDisplayDetails": RefundNextActionDisplayDetails,
    "RefundNextActionDisplayDetails1": RefundNextActionDisplayDetails1,
    "RefundPaymentIntent": RefundPaymentIntent,
    "RefundSourceTransferReversal": RefundSourceTransferReversal,
    "RefundTransferReversal": RefundTransferReversal,
    "ReportingReportRun": ReportingReportRun,
    "ReportingReportRunResult": ReportingReportRunResult,
    "ReportingReportType": ReportingReportType,
    "ReserveTransaction": ReserveTransaction,
    "Review": Review,
    "ReviewCharge": ReviewCharge,
    "ReviewIpAddressLocation": ReviewIpAddressLocation,
    "ReviewPaymentIntent": ReviewPaymentIntent,
    "ReviewSession": ReviewSession,
    "Rule": Rule,
    "ScheduledQueryRun": ScheduledQueryRun,
    "ScheduledQueryRunFile": ScheduledQueryRunFile,
    "SchedulesPhaseAutomaticTax": SchedulesPhaseAutomaticTax,
    "ScopeParam": ScopeParam,
    "SearchResult": SearchResult,
    "SearchResult1": SearchResult1,
    "SearchResult2": SearchResult2,
    "SearchResult3": SearchResult3,
    "SearchResult4": SearchResult4,
    "SearchResult5": SearchResult5,
    "SearchResult6": SearchResult6,
    "SecretServiceResourceScope": SecretServiceResourceScope,
    "SecretServiceResourceSecretList": SecretServiceResourceSecretList,
    "SepaDebitGeneratedFrom": SepaDebitGeneratedFrom,
    "SepaDebitGeneratedFromCharge": SepaDebitGeneratedFromCharge,
    "SepaDebitGeneratedFromSetupAttempt": SepaDebitGeneratedFromSetupAttempt,
    "SetupAttempt": SetupAttempt,
    "SetupAttemptApplication": SetupAttemptApplication,
    "SetupAttemptCustomer": SetupAttemptCustomer,
    "SetupAttemptOnBehalfOf": SetupAttemptOnBehalfOf,
    "SetupAttemptPaymentMethod": SetupAttemptPaymentMethod,
    "SetupAttemptPaymentMethodDetails": SetupAttemptPaymentMethodDetails,
    "SetupAttemptPaymentMethodDetailsBancontact": SetupAttemptPaymentMethodDetailsBancontact,
    "SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebit": SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebit,
    "SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitMandate": SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitMandate,
    "SetupAttemptPaymentMethodDetailsCard": SetupAttemptPaymentMethodDetailsCard,
    "SetupAttemptPaymentMethodDetailsCardPresent": SetupAttemptPaymentMethodDetailsCardPresent,
    "SetupAttemptPaymentMethodDetailsCardPresentGeneratedCard": SetupAttemptPaymentMethodDetailsCardPresentGeneratedCard,
    "SetupAttemptPaymentMethodDetailsCardThreeDSecure": SetupAttemptPaymentMethodDetailsCardThreeDSecure,
    "SetupAttemptPaymentMethodDetailsIdeal": SetupAttemptPaymentMethodDetailsIdeal,
    "SetupAttemptPaymentMethodDetailsSofort": SetupAttemptPaymentMethodDetailsSofort,
    "SetupAttemptSetupError": SetupAttemptSetupError,
    "SetupAttemptSetupIntent": SetupAttemptSetupIntent,
    "SetupIntent": SetupIntent,
    "SetupIntentApplication": SetupIntentApplication,
    "SetupIntentCustomer": SetupIntentCustomer,
    "SetupIntentLastSetupError": SetupIntentLastSetupError,
    "SetupIntentLatestAttempt": SetupIntentLatestAttempt,
    "SetupIntentMandate": SetupIntentMandate,
    "SetupIntentNextAction": SetupIntentNextAction,
    "SetupIntentNextAction1": SetupIntentNextAction1,
    "SetupIntentNextActionRedirectToUrl": SetupIntentNextActionRedirectToUrl,
    "SetupIntentNextActionVerifyWithMicrodeposits": SetupIntentNextActionVerifyWithMicrodeposits,
    "SetupIntentOnBehalfOf": SetupIntentOnBehalfOf,
    "SetupIntentPaymentMethod": SetupIntentPaymentMethod,
    "SetupIntentPaymentMethodOptions": SetupIntentPaymentMethodOptions,
    "SetupIntentPaymentMethodOptions1": SetupIntentPaymentMethodOptions1,
    "SetupIntentPaymentMethodOptionsAcssDebit": SetupIntentPaymentMethodOptionsAcssDebit,
    "SetupIntentPaymentMethodOptionsBlik": SetupIntentPaymentMethodOptionsBlik,
    "SetupIntentPaymentMethodOptionsCard": SetupIntentPaymentMethodOptionsCard,
    "SetupIntentPaymentMethodOptionsCardMandateOptions": SetupIntentPaymentMethodOptionsCardMandateOptions,
    "SetupIntentPaymentMethodOptionsCardMandateOptions1": SetupIntentPaymentMethodOptionsCardMandateOptions1,
    "SetupIntentPaymentMethodOptionsLink": SetupIntentPaymentMethodOptionsLink,
    "SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit": SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit,
    "SetupIntentPaymentMethodOptionsMandateOptionsBlik": SetupIntentPaymentMethodOptionsMandateOptionsBlik,
    "SetupIntentPaymentMethodOptionsSepaDebit": SetupIntentPaymentMethodOptionsSepaDebit,
    "SetupIntentPaymentMethodOptionsUsBankAccount": SetupIntentPaymentMethodOptionsUsBankAccount,
    "SetupIntentSingleUseMandate": SetupIntentSingleUseMandate,
    "SetupIntentTypeSpecificPaymentMethodOptionsClient": SetupIntentTypeSpecificPaymentMethodOptionsClient,
    "Shipping": Shipping,
    "ShippingRate": ShippingRate,
    "ShippingRateCurrencyOption": ShippingRateCurrencyOption,
    "ShippingRateDeliveryEstimate": ShippingRateDeliveryEstimate,
    "ShippingRateDeliveryEstimate1": ShippingRateDeliveryEstimate1,
    "ShippingRateDeliveryEstimateBound": ShippingRateDeliveryEstimateBound,
    "ShippingRateDeliveryEstimateMaximum": ShippingRateDeliveryEstimateMaximum,
    "ShippingRateDeliveryEstimateMinimum": ShippingRateDeliveryEstimateMinimum,
    "ShippingRateFixedAmount": ShippingRateFixedAmount,
    "ShippingRateTaxCode": ShippingRateTaxCode,
    "ShippingResourcesShippingRateList": ShippingResourcesShippingRateList,
    "SigmaScheduledQueryRunError": SigmaScheduledQueryRunError,
    "SigmaScheduledQueryRunList": SigmaScheduledQueryRunList,
    "Source": Source,
    "SourceCodeVerificationFlow": SourceCodeVerificationFlow,
    "SourceMandateNotification": SourceMandateNotification,
    "SourceMandateNotificationAcssDebitData": SourceMandateNotificationAcssDebitData,
    "SourceMandateNotificationBacsDebitData": SourceMandateNotificationBacsDebitData,
    "SourceMandateNotificationSepaDebitData": SourceMandateNotificationSepaDebitData,
    "SourceOrder": SourceOrder,
    "SourceOrderItem": SourceOrderItem,
    "SourceOwner": SourceOwner,
    "SourceOwner1": SourceOwner1,
    "SourceOwnerAddress": SourceOwnerAddress,
    "SourceOwnerVerifiedAddress": SourceOwnerVerifiedAddress,
    "SourceReceiverFlow": SourceReceiverFlow,
    "SourceRedirectFlow": SourceRedirectFlow,
    "SourceTransaction": SourceTransaction,
    "SourceTransactionAchCreditTransferData": SourceTransactionAchCreditTransferData,
    "SourceTransactionChfCreditTransferData": SourceTransactionChfCreditTransferData,
    "SourceTransactionGbpCreditTransferData": SourceTransactionGbpCreditTransferData,
    "SourceTransactionPaperCheckData": SourceTransactionPaperCheckData,
    "SourceTransactionSepaCreditTransferData": SourceTransactionSepaCreditTransferData,
    "SourceTypeAchCreditTransfer": SourceTypeAchCreditTransfer,
    "SourceTypeAchDebit": SourceTypeAchDebit,
    "SourceTypeAcssDebit": SourceTypeAcssDebit,
    "SourceTypeAlipay": SourceTypeAlipay,
    "SourceTypeAuBecsDebit": SourceTypeAuBecsDebit,
    "SourceTypeBancontact": SourceTypeBancontact,
    "SourceTypeCard": SourceTypeCard,
    "SourceTypeCardPresent": SourceTypeCardPresent,
    "SourceTypeEps": SourceTypeEps,
    "SourceTypeGiropay": SourceTypeGiropay,
    "SourceTypeIdeal": SourceTypeIdeal,
    "SourceTypeKlarna": SourceTypeKlarna,
    "SourceTypeMultibanco": SourceTypeMultibanco,
    "SourceTypeP24": SourceTypeP24,
    "SourceTypeSepaCreditTransfer": SourceTypeSepaCreditTransfer,
    "SourceTypeSepaDebit": SourceTypeSepaDebit,
    "SourceTypeSofort": SourceTypeSofort,
    "SourceTypeThreeDSecure": SourceTypeThreeDSecure,
    "SourceTypeWechat": SourceTypeWechat,
    "StatusTransitionTimestampSpecs": StatusTransitionTimestampSpecs,
    "StatusTransitionTimestampSpecsPostedAt": StatusTransitionTimestampSpecsPostedAt,
    "Subscription": Subscription,
    "SubscriptionApplication": SubscriptionApplication,
    "SubscriptionAutomaticTax": SubscriptionAutomaticTax,
    "SubscriptionBillingThresholds": SubscriptionBillingThresholds,
    "SubscriptionBillingThresholds1": SubscriptionBillingThresholds1,
    "SubscriptionCustomer": SubscriptionCustomer,
    "SubscriptionDefaultPaymentMethod": SubscriptionDefaultPaymentMethod,
    "SubscriptionDefaultSource": SubscriptionDefaultSource,
    "SubscriptionDiscount": SubscriptionDiscount,
    "SubscriptionItem": SubscriptionItem,
    "SubscriptionItemBillingThresholds": SubscriptionItemBillingThresholds,
    "SubscriptionItemBillingThresholds1": SubscriptionItemBillingThresholds1,
    "SubscriptionItemList": SubscriptionItemList,
    "SubscriptionItemUpdateParams": SubscriptionItemUpdateParams,
    "SubscriptionItemUpdateParamsBillingThresholds": SubscriptionItemUpdateParamsBillingThresholds,
    "SubscriptionItemUpdateParamsTaxRates": SubscriptionItemUpdateParamsTaxRates,
    "SubscriptionLatestInvoice": SubscriptionLatestInvoice,
    "SubscriptionList": SubscriptionList,
    "SubscriptionOnBehalfOf": SubscriptionOnBehalfOf,
    "SubscriptionPauseCollection": SubscriptionPauseCollection,
    "SubscriptionPaymentMethodOptionsCard": SubscriptionPaymentMethodOptionsCard,
    "SubscriptionPaymentSettings": SubscriptionPaymentSettings,
    "SubscriptionPendingInvoiceItemInterval": SubscriptionPendingInvoiceItemInterval,
    "SubscriptionPendingInvoiceItemInterval1": SubscriptionPendingInvoiceItemInterval1,
    "SubscriptionPendingSetupIntent": SubscriptionPendingSetupIntent,
    "SubscriptionPendingUpdate": SubscriptionPendingUpdate,
    "SubscriptionSchedule": SubscriptionSchedule,
    "SubscriptionSchedule1": SubscriptionSchedule1,
    "SubscriptionScheduleAddInvoiceItem": SubscriptionScheduleAddInvoiceItem,
    "SubscriptionScheduleAddInvoiceItemPrice": SubscriptionScheduleAddInvoiceItemPrice,
    "SubscriptionScheduleApplication": SubscriptionScheduleApplication,
    "SubscriptionScheduleConfigurationItem": SubscriptionScheduleConfigurationItem,
    "SubscriptionScheduleConfigurationItemPlan": SubscriptionScheduleConfigurationItemPlan,
    "SubscriptionScheduleConfigurationItemPrice": SubscriptionScheduleConfigurationItemPrice,
    "SubscriptionScheduleCurrentPhase": SubscriptionScheduleCurrentPhase,
    "SubscriptionScheduleCurrentPhase1": SubscriptionScheduleCurrentPhase1,
    "SubscriptionScheduleCustomer": SubscriptionScheduleCustomer,
    "SubscriptionSchedulePhaseConfiguration": SubscriptionSchedulePhaseConfiguration,
    "SubscriptionSchedulePhaseConfigurationCoupon": SubscriptionSchedulePhaseConfigurationCoupon,
    "SubscriptionSchedulePhaseConfigurationDefaultPaymentMethod": SubscriptionSchedulePhaseConfigurationDefaultPaymentMethod,
    "SubscriptionSchedulePhaseConfigurationInvoiceSettings": SubscriptionSchedulePhaseConfigurationInvoiceSettings,
    "SubscriptionSchedulePhaseConfigurationOnBehalfOf": SubscriptionSchedulePhaseConfigurationOnBehalfOf,
    "SubscriptionSchedulePhaseConfigurationTransferData": SubscriptionSchedulePhaseConfigurationTransferData,
    "SubscriptionScheduleSubscription": SubscriptionScheduleSubscription,
    "SubscriptionScheduleTestClock": SubscriptionScheduleTestClock,
    "SubscriptionSchedulesResourceDefaultSettings": SubscriptionSchedulesResourceDefaultSettings,
    "SubscriptionSchedulesResourceDefaultSettingsAutomaticTax": SubscriptionSchedulesResourceDefaultSettingsAutomaticTax,
    "SubscriptionSchedulesResourceDefaultSettingsDefaultPaymentMethod": SubscriptionSchedulesResourceDefaultSettingsDefaultPaymentMethod,
    "SubscriptionSchedulesResourceDefaultSettingsInvoiceSettings": SubscriptionSchedulesResourceDefaultSettingsInvoiceSettings,
    "SubscriptionSchedulesResourceScheduleList": SubscriptionSchedulesResourceScheduleList,
    "SubscriptionTestClock": SubscriptionTestClock,
    "SubscriptionTransferData": SubscriptionTransferData,
    "SubscriptionTransferData1": SubscriptionTransferData1,
    "SubscriptionTrialSettings": SubscriptionTrialSettings,
    "SubscriptionsItemsSubscriptionItemList": SubscriptionsItemsSubscriptionItemList,
    "SubscriptionsResourcePauseCollection": SubscriptionsResourcePauseCollection,
    "SubscriptionsResourcePaymentMethodOptions": SubscriptionsResourcePaymentMethodOptions,
    "SubscriptionsResourcePaymentMethodOptionsAcssDebit": SubscriptionsResourcePaymentMethodOptionsAcssDebit,
    "SubscriptionsResourcePaymentMethodOptionsBancontact": SubscriptionsResourcePaymentMethodOptionsBancontact,
    "SubscriptionsResourcePaymentMethodOptionsCard": SubscriptionsResourcePaymentMethodOptionsCard,
    "SubscriptionsResourcePaymentMethodOptionsCustomerBalance": SubscriptionsResourcePaymentMethodOptionsCustomerBalance,
    "SubscriptionsResourcePaymentMethodOptionsKonbini": SubscriptionsResourcePaymentMethodOptionsKonbini,
    "SubscriptionsResourcePaymentMethodOptionsUsBankAccount": SubscriptionsResourcePaymentMethodOptionsUsBankAccount,
    "SubscriptionsResourcePaymentSettings": SubscriptionsResourcePaymentSettings,
    "SubscriptionsResourcePaymentSettingsPaymentMethodOptions": SubscriptionsResourcePaymentSettingsPaymentMethodOptions,
    "SubscriptionsResourcePendingUpdate": SubscriptionsResourcePendingUpdate,
    "SubscriptionsSubscriptionList": SubscriptionsSubscriptionList,
    "SubscriptionsTrialsResourceEndBehavior": SubscriptionsTrialsResourceEndBehavior,
    "SubscriptionsTrialsResourceTrialSettings": SubscriptionsTrialsResourceTrialSettings,
    "TaxCode": TaxCode,
    "TaxDeductedAtSource": TaxDeductedAtSource,
    "TaxIDsList": TaxIDsList,
    "TaxIDsList1": TaxIDsList1,
    "TaxId": TaxId,
    "TaxIdCustomer": TaxIdCustomer,
    "TaxIdVerification": TaxIdVerification,
    "TaxIdVerification1": TaxIdVerification1,
    "TaxParam": TaxParam,
    "TaxProductResourceTaxCodeList": TaxProductResourceTaxCodeList,
    "TaxRate": TaxRate,
    "TaxRatesList": TaxRatesList,
    "TerminalConfiguration": TerminalConfiguration,
    "TerminalConfigurationConfigurationList": TerminalConfigurationConfigurationList,
    "TerminalConfigurationConfigurationResourceCurrencySpecificConfig": TerminalConfigurationConfigurationResourceCurrencySpecificConfig,
    "TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig": TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig,
    "TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfigSplashscreen": TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfigSplashscreen,
    "TerminalConfigurationConfigurationResourceTipping": TerminalConfigurationConfigurationResourceTipping,
    "TerminalConnectionToken": TerminalConnectionToken,
    "TerminalLocation": TerminalLocation,
    "TerminalLocationLocationList": TerminalLocationLocationList,
    "TerminalReader": TerminalReader,
    "TerminalReaderAction": TerminalReaderAction,
    "TerminalReaderLocation": TerminalReaderLocation,
    "TerminalReaderReaderResourceCart": TerminalReaderReaderResourceCart,
    "TerminalReaderReaderResourceLineItem": TerminalReaderReaderResourceLineItem,
    "TerminalReaderReaderResourceProcessConfig": TerminalReaderReaderResourceProcessConfig,
    "TerminalReaderReaderResourceProcessPaymentIntentAction": TerminalReaderReaderResourceProcessPaymentIntentAction,
    "TerminalReaderReaderResourceProcessPaymentIntentActionPaymentIntent": TerminalReaderReaderResourceProcessPaymentIntentActionPaymentIntent,
    "TerminalReaderReaderResourceProcessSetupIntentAction": TerminalReaderReaderResourceProcessSetupIntentAction,
    "TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent": TerminalReaderReaderResourceProcessSetupIntentActionSetupIntent,
    "TerminalReaderReaderResourceReaderAction": TerminalReaderReaderResourceReaderAction,
    "TerminalReaderReaderResourceRefundPaymentAction": TerminalReaderReaderResourceRefundPaymentAction,
    "TerminalReaderReaderResourceRefundPaymentActionCharge": TerminalReaderReaderResourceRefundPaymentActionCharge,
    "TerminalReaderReaderResourceRefundPaymentActionPaymentIntent": TerminalReaderReaderResourceRefundPaymentActionPaymentIntent,
    "TerminalReaderReaderResourceRefundPaymentActionRefund": TerminalReaderReaderResourceRefundPaymentActionRefund,
    "TerminalReaderReaderResourceSetReaderDisplayAction": TerminalReaderReaderResourceSetReaderDisplayAction,
    "TerminalReaderReaderResourceSetReaderDisplayActionCart": TerminalReaderReaderResourceSetReaderDisplayActionCart,
    "TerminalReaderReaderResourceTippingConfig": TerminalReaderReaderResourceTippingConfig,
    "TerminalReaderRetrieveReader": TerminalReaderRetrieveReader,
    "TestHelpersTestClock": TestHelpersTestClock,
    "ThreeDSecureDetails": ThreeDSecureDetails,
    "ThreeDSecureUsage": ThreeDSecureUsage,
    "Token": Token,
    "Topup": Topup,
    "TopupBalanceTransaction": TopupBalanceTransaction,
    "TopupList": TopupList,
    "TopupSource": TopupSource,
    "Transfer": Transfer,
    "TransferBalanceTransaction": TransferBalanceTransaction,
    "TransferData": TransferData,
    "TransferDataDestination": TransferDataDestination,
    "TransferDestination": TransferDestination,
    "TransferDestinationPayment": TransferDestinationPayment,
    "TransferList": TransferList,
    "TransferReversal": TransferReversal,
    "TransferReversalDestinationPaymentRefund": TransferReversalDestinationPaymentRefund,
    "TransferReversalList": TransferReversalList,
    "TransferReversalList1": TransferReversalList1,
    "TransferReversalSourceRefund": TransferReversalSourceRefund,
    "TransferReversalTransfer": TransferReversalTransfer,
    "TransferSchedule": TransferSchedule,
    "TransferSourceTransaction": TransferSourceTransaction,
    "TransformQuantity": TransformQuantity,
    "TransformUsage": TransformUsage,
    "TreasuryCreditReversal": TreasuryCreditReversal,
    "TreasuryCreditReversalTransaction": TreasuryCreditReversalTransaction,
    "TreasuryDebitReversal": TreasuryDebitReversal,
    "TreasuryDebitReversalLinkedFlows": TreasuryDebitReversalLinkedFlows,
    "TreasuryFinancialAccount": TreasuryFinancialAccount,
    "TreasuryFinancialAccountFeatures": TreasuryFinancialAccountFeatures,
    "TreasuryFinancialAccountPlatformRestrictions": TreasuryFinancialAccountPlatformRestrictions,
    "TreasuryFinancialAccountsResourceAbaRecord": TreasuryFinancialAccountsResourceAbaRecord,
    "TreasuryFinancialAccountsResourceAchToggleSettings": TreasuryFinancialAccountsResourceAchToggleSettings,
    "TreasuryFinancialAccountsResourceBalance": TreasuryFinancialAccountsResourceBalance,
    "TreasuryFinancialAccountsResourceClosedStatusDetails": TreasuryFinancialAccountsResourceClosedStatusDetails,
    "TreasuryFinancialAccountsResourceFinancialAccountList": TreasuryFinancialAccountsResourceFinancialAccountList,
    "TreasuryFinancialAccountsResourceFinancialAddress": TreasuryFinancialAccountsResourceFinancialAddress,
    "TreasuryFinancialAccountsResourceFinancialAddressesFeatures": TreasuryFinancialAccountsResourceFinancialAddressesFeatures,
    "TreasuryFinancialAccountsResourceInboundTransfers": TreasuryFinancialAccountsResourceInboundTransfers,
    "TreasuryFinancialAccountsResourceOutboundPayments": TreasuryFinancialAccountsResourceOutboundPayments,
    "TreasuryFinancialAccountsResourceOutboundTransfers": TreasuryFinancialAccountsResourceOutboundTransfers,
    "TreasuryFinancialAccountsResourcePlatformRestrictions": TreasuryFinancialAccountsResourcePlatformRestrictions,
    "TreasuryFinancialAccountsResourceStatusDetails": TreasuryFinancialAccountsResourceStatusDetails,
    "TreasuryFinancialAccountsResourceStatusDetailsClosed": TreasuryFinancialAccountsResourceStatusDetailsClosed,
    "TreasuryFinancialAccountsResourceToggleSettings": TreasuryFinancialAccountsResourceToggleSettings,
    "TreasuryFinancialAccountsResourceTogglesSettingStatusDetails": TreasuryFinancialAccountsResourceTogglesSettingStatusDetails,
    "TreasuryInboundTransfer": TreasuryInboundTransfer,
    "TreasuryInboundTransferFailureDetails": TreasuryInboundTransferFailureDetails,
    "TreasuryInboundTransferOriginPaymentMethodDetails": TreasuryInboundTransferOriginPaymentMethodDetails,
    "TreasuryInboundTransfersResourceFailureDetails": TreasuryInboundTransfersResourceFailureDetails,
    "TreasuryInboundTransfersResourceInboundTransferList": TreasuryInboundTransfersResourceInboundTransferList,
    "TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows": TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows,
    "TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions": TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions,
    "TreasuryOutboundPayment": TreasuryOutboundPayment,
    "TreasuryOutboundPaymentDestinationPaymentMethodDetails": TreasuryOutboundPaymentDestinationPaymentMethodDetails,
    "TreasuryOutboundPaymentEndUserDetails": TreasuryOutboundPaymentEndUserDetails,
    "TreasuryOutboundPaymentReturnedDetails": TreasuryOutboundPaymentReturnedDetails,
    "TreasuryOutboundPaymentTransaction": TreasuryOutboundPaymentTransaction,
    "TreasuryOutboundPaymentsResourceOutboundPaymentList": TreasuryOutboundPaymentsResourceOutboundPaymentList,
    "TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails": TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails,
    "TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions": TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions,
    "TreasuryOutboundPaymentsResourceReturnedStatus": TreasuryOutboundPaymentsResourceReturnedStatus,
    "TreasuryOutboundTransfer": TreasuryOutboundTransfer,
    "TreasuryOutboundTransferReturnedDetails": TreasuryOutboundTransferReturnedDetails,
    "TreasuryOutboundTransfersResourceOutboundTransferList": TreasuryOutboundTransfersResourceOutboundTransferList,
    "TreasuryOutboundTransfersResourceReturnedDetails": TreasuryOutboundTransfersResourceReturnedDetails,
    "TreasuryOutboundTransfersResourceStatusTransitions": TreasuryOutboundTransfersResourceStatusTransitions,
    "TreasuryReceivedCredit": TreasuryReceivedCredit,
    "TreasuryReceivedCreditReversalDetails": TreasuryReceivedCreditReversalDetails,
    "TreasuryReceivedCreditsResourceCreditReversalList": TreasuryReceivedCreditsResourceCreditReversalList,
    "TreasuryReceivedCreditsResourceLinkedFlows": TreasuryReceivedCreditsResourceLinkedFlows,
    "TreasuryReceivedCreditsResourceLinkedFlowsSourceFlowDetails": TreasuryReceivedCreditsResourceLinkedFlowsSourceFlowDetails,
    "TreasuryReceivedCreditsResourceReceivedCreditList": TreasuryReceivedCreditsResourceReceivedCreditList,
    "TreasuryReceivedCreditsResourceReversalDetails": TreasuryReceivedCreditsResourceReversalDetails,
    "TreasuryReceivedCreditsResourceSourceFlowsDetails": TreasuryReceivedCreditsResourceSourceFlowsDetails,
    "TreasuryReceivedCreditsResourceStatusTransitions": TreasuryReceivedCreditsResourceStatusTransitions,
    "TreasuryReceivedDebit": TreasuryReceivedDebit,
    "TreasuryReceivedDebitReversalDetails": TreasuryReceivedDebitReversalDetails,
    "TreasuryReceivedDebitsResourceDebitReversalLinkedFlows": TreasuryReceivedDebitsResourceDebitReversalLinkedFlows,
    "TreasuryReceivedDebitsResourceDebitReversalList": TreasuryReceivedDebitsResourceDebitReversalList,
    "TreasuryReceivedDebitsResourceLinkedFlows": TreasuryReceivedDebitsResourceLinkedFlows,
    "TreasuryReceivedDebitsResourceReceivedDebitList": TreasuryReceivedDebitsResourceReceivedDebitList,
    "TreasuryReceivedDebitsResourceReversalDetails": TreasuryReceivedDebitsResourceReversalDetails,
    "TreasuryReceivedDebitsResourceStatusTransitions": TreasuryReceivedDebitsResourceStatusTransitions,
    "TreasurySharedResourceBillingDetails": TreasurySharedResourceBillingDetails,
    "TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails": TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails,
    "TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount": TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount,
    "TreasuryTransaction": TreasuryTransaction,
    "TreasuryTransactionEntry": TreasuryTransactionEntry,
    "TreasuryTransactionEntryFlowDetails": TreasuryTransactionEntryFlowDetails,
    "TreasuryTransactionFlowDetails": TreasuryTransactionFlowDetails,
    "TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions": TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions,
    "TreasuryTransactionsResourceBalanceImpact": TreasuryTransactionsResourceBalanceImpact,
    "TreasuryTransactionsResourceFlowDetails": TreasuryTransactionsResourceFlowDetails,
    "TreasuryTransactionsResourceTransactionEntryList": TreasuryTransactionsResourceTransactionEntryList,
    "TreasuryTransactionsResourceTransactionEntryList1": TreasuryTransactionsResourceTransactionEntryList1,
    "TreasuryTransactionsResourceTransactionList": TreasuryTransactionsResourceTransactionList,
    "UsBankAccountNetworks": UsBankAccountNetworks,
    "UsageEventsResourceUsageRecordSummaryList": UsageEventsResourceUsageRecordSummaryList,
    "UsageRecord": UsageRecord,
    "UsageRecordSummary": UsageRecordSummary,
    "VerificationSessionRedaction": VerificationSessionRedaction,
    "WebhookEndpoint": WebhookEndpoint,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
