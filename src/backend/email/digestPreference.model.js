import mongoose from 'mongoose';

const DigestPreferenceSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  optIn: { type: Boolean, default: false },
  interests: [String],
});

export const DigestPreference = mongoose.models.DigestPreference || mongoose.model('DigestPreference', DigestPreferenceSchema);
