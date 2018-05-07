module.exports = {
  twilio: {
    accountSID: process.env.TWILIO_ACCOUNT_SID || 'ACce3f27260613a28b147ba62619bde66b',
    authToken: process.env.TWILIO_AUTH_TOKEN || '653ce7a458bbb0e2dbf82b4adecb0dbe',
    appID: process.env.TWILIO_APP_ID || 'AP9ea2723b94171b4ae06537c3a659ccff',
    callerID: process.env.TWILIO_CALLER_ID || '+61390699412'
  }
};
