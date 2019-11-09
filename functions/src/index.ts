import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import * as firebaseHelper from 'firebase-functions-helper';
const firebaseHelper = require('firebase-functions-helper');
import * as express from 'express';
import * as bodyParser from "body-parser";

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
const app = express();
const main = express();

// const contactsCollection = 'contacts';

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

// powerrest is your functions name, and you will pass main as
// a parameter
export const powerrest = functions.https.onRequest(main);



//TODO rewards
app.post('/rewards', async (req, res) => {
  try {
    const contact: any = {
      company_name: req.body['company_name'],
      description: req.body['description'],
      need_to_know: req.body['need_to_know'],
    }

    const newDoc = await firebaseHelper.firestore
      .createNewDocument(db, 'rewards', contact);

    res.status(201).send(`Created a new reward: ${newDoc.id}`);
  } catch (error) {
    res.status(400).send(`Unable to resolve request.`)
  }
})
app.get('/rewards/:rewardId', (req, res) => { //TODO
  firebaseHelper.firestore
    .getDocument(db, 'rewards', req.params.rewardId) //TODO
    .then((doc: any) => res.status(200).send(doc))
    .catch((error: any) => res.status(400).send(`Cannot get reward: ${error}`));
})
app.get('/rewards', (req, res) => {
  firebaseHelper.firestore
    .backup(db, 'rewards')
    .then((data: any) => res.status(200).send(data))
    .catch((error: any) => res.status(400).send(`Cannot get contacts: ${error}`));
})
app.patch('/rewards/:rewardId', async (req, res) => {
  const updatedDoc = await firebaseHelper.firestore
    .updateDocument(db, 'rewards', req.params.rewardId, req.body); //TODO
  res.status(204).send(`Update a new contact: ${updatedDoc}`);
})


//TODO accounts
app.post('/accounts', async (req, res) => {
  try {
    const contact: any = { //TODO
      first_name: req.body['first_name'],
      last_name: req.body['last_name'],
      middle_name: req.body['middle_name'],
      contact_number: req.body['contact_number'],
      address: req.body['address']
    }

    const newDoc = await firebaseHelper.firestore
      .createNewDocument(db, 'accounts', contact); //TODO

    res.status(201).send(`Created a new reward: ${newDoc.id}`); //TODO
  } catch (error) {
    res.status(400).send(`Unable to resolve request.`)
  }
})
app.get('/accounts/:accountId', (req, res) => { //TODO
  firebaseHelper.firestore
    .getDocument(db, 'accounts', req.params.accountId) //TODO
    .then((doc: any) => res.status(200).send(doc))
    .catch((error: any) => res.status(400).send(`Cannot get accounts: ${error}`));
})
app.get('/accounts', (req, res) => { //TODO
  firebaseHelper.firestore
    .backup(db, 'accounts') //TODO
    .then((data: any) => res.status(200).send(data))
    .catch((error: any) => res.status(400).send(`Cannot get contacts: ${error}`));
})
app.patch('/accounts/:accountId', async (req, res) => {
  const updatedDoc = await firebaseHelper.firestore
    .updateDocument(db, 'accounts', req.params.accountId, req.body); //TODO
  res.status(204).send(`Update a new contact: ${updatedDoc}`);
})

//TODO products
app.get('/products', (req, res) => { //TODO
  firebaseHelper.firestore
    .backup(db, 'products') //TODO
    .then((data: any) => res.status(200).send(data))
    .catch((error: any) => res.status(400).send(`Cannot get products: ${error}`));
})


app.post('/products', async (req, res) => {
  try {
    const contact = { //TODO
      age: {
        max: req.body.age['max'],
        min: req.body.age['min']
      },
      coverage: req.body['coverage'],
      description: req.body['description'],
      title: req.body['title']
    }

    const newDoc = await firebaseHelper.firestore
      .createNewDocument(db, 'products', contact); //TODO

    res.status(201).send(`Created a new product: ${newDoc.id}`); //TODO
  } catch (error) {
    res.status(400).send(`Unable to resolve request.`)
  }
})

app.patch('/products/:productId', async (req, res) => {
  const updatedDoc = await firebaseHelper.firestore
    .updateDocument(db, 'products', req.params.productId, req.body); //TODO
  res.status(204).send(`Update a new products: ${updatedDoc}`);
})

//TODO payment
