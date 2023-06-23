const { request } = require("../server");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const charge = async (req, res) => {
  console.log(req.body)

  try {
    const token = await stripe.tokens.create({
        card: {
          number:req.body.cardNumber,
          exp_month:req.body.expMonth,
          exp_year: req.body.expYear,
          cvc:req.body.cvv
        }
    });
    console.log(token)
    await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: token.id
    });
    console.log(token.id)
    res.status(200).json({ message: "Your order is about to be delivered" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  charge
};
