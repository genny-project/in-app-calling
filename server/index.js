const config = require( './config' );
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const Twilio = require( 'twilio' );
const ClientCapability = Twilio.jwt.ClientCapability;
const VoiceResponse = Twilio.twiml.VoiceResponse;

const app = express();

/* Allow JSON body parsing */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Handles a request for a calling token */
app.post( '/token', ( req, res ) => {
  const accountSid = config.twilio.accountSID;
  const authToken = config.twilio.authToken;
  const appSid = config.twilio.appID;

  const capability = new ClientCapability({
    accountSid: accountSid,
    authToken: authToken,
  });

  /* Allow outgoing calls */
  capability.addScope(
    new ClientCapability.OutgoingClientScope({ applicationSid: appSid })
  );

  /* Send back the token */
  const token = capability.toJwt();
  res.set('Content-Type', 'application/jwt');
  res.send(token);
});

app.post( '/call', ( req, res ) => {
  const response = new VoiceResponse();
  const dial = response.dial({
    callerId: config.twilio.callerID,
  });

  dial.number( req.query.to );
  res.writeHead( 200, {'Content-Type': 'text/xml' });
  res.end( response.toString());
});

app.listen( 2255, () => {
  console.log( 'In app call server listening on port 2255' );
});
