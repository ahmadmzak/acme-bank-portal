const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, require: true },
  email: String,
  phone: String,
  address: String,
  accounts: [
    {
      type: { type: String, required: true },
      account_currency: { type: String, required: true },
      account_number: { type: Number, required: true },
      balance: { type: Number, required: true },
      transactions: [
        {
          date: String,
          transaction: String,
          currency: String,
          deposit: Number,
          withdrawal: Number,
          closing: Number
        }
      ]
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
