module.exports = {
  applicationName: process.env.TWILIO_APPLICATION_NAME || 'Channel 40',
  twilio: {
    accountSID: process.env.TWILIO_ACCOUNT_SID || 'Twilio Account SID',
    authToken: process.env.TWILIO_AUTH_TOKEN || 'Twilio Auth Token',
    appID: process.env.TWILIO_APP_ID || 'AP9ea2723b94171b4ae06537c3a659ccff',
    callerID: process.env.TWILIO_CALLER_ID || '+61390699412'
  }
};
