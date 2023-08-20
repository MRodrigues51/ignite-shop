import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Stripe secret key not provided in the environment.");
  }

export const stripe: Stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-08-16',
    appInfo: {
        name: 'Ignite Shop',
    }
})