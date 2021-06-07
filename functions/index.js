const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const secret_key = 'sk_test_51IfulACPfll26jlLNLtBDphfJoeE7bhAeMOQml5BYYioXboILk0j2xNyZ9k1bP9nrrpmGpCgu66HG6EpZBmlFwr000Ctc3dc1i';
const stripe = require('stripe')(secret_key);

// API


// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json());

// API root
app.get('/', (req, res) => {
  res.status(200).json({ message: 'hello' })
})

app.post('/payments/create', async (req, res) => {
  const { total } = req.query;
  console.log('payment total', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  res.status(201)
    .json({ message: 'created', clientSecret: paymentIntent.client_secret });
})

// Listen command
exports.api = functions.https.onRequest(app);


