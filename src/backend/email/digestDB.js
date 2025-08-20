

import { connect } from './mongo.js';
import { DigestPreference } from './digestPreference.model.js';


async function saveUserDigestPreference(email, optIn, interests) {
  await connect();
  await DigestPreference.findOneAndUpdate(
    { email },
    { email, optIn, interests },
    { upsert: true, new: true }
  );
}


async function getUserDigestPreference(email) {
  await connect();
  const pref = await DigestPreference.findOne({ email });
  return pref || { optIn: false, interests: [] };
}


async function getAllOptedInUsers() {
  await connect();
  return DigestPreference.find({ optIn: true }, { email: 1, interests: 1, _id: 0 });
}


export { saveUserDigestPreference, getUserDigestPreference, getAllOptedInUsers };
