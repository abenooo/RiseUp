import { serve } from 'std/server'
import Stripe from 'stripe'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, {
  apiVersion: '2023-10-16',
})

serve(async (req) => {
  try {
    const { priceId } = await req.json()

    if (!priceId) {
      return new Response(JSON.stringify({ error: 'Missing priceId' }), { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription', // or 'payment' if you want one-time
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: 'https://yourdomain.com/success',
      cancel_url: 'https://yourdomain.com/cancel',
    })

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
})