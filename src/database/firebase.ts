import * as admin from "firebase-admin";

const firebaseConfig: any = {
  type: "service_account",
  project_id: "weather-api-32b72",
  private_key_id: "a02fbad650831541b224696bb5a80646cd01f44a",
  private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY as string,
  client_email:
    "firebase-adminsdk-3hlo4@weather-api-32b72.iam.gserviceaccount.com",
  client_id: "103342717067574127835",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3hlo4%40weather-api-32b72.iam.gserviceaccount.com",
};
admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
  databaseURL: "https://weather-api-32b72-default-rtdb.firebaseio.com",
});

export const Firebase = admin;
