"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Check, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { products } from "@/src/stripe-config";

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [user, setUser] = useState<any>(null);
  const [subscription, setSubscription] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);

    if (user) {
      // Fetch user's current subscription
      const { data: subData } = await supabase
        .from('stripe_user_subscriptions')
        .select('*')
        .maybeSingle();
      
      setSubscription(subData);
    }
  };

  const handleCheckout = async (priceId: string, mode: 'payment' | 'subscription') => {
    if (!user) {
      router.push('/auth/login');
      return;
    }

    setLoading(priceId);
    setError("");

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push('/auth/login');
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price_id: priceId,
          mode,
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}/pricing`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during checkout');
    } finally {
      setLoading(null);
    }
  };

  const isSubscribed = subscription && ['active', 'trialing'].includes(subscription.subscription_status);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-8 w-8 text-fuchsia-500" />
            <span className="text-2xl font-bold">RiseUp</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Get access to premium features and support your mental health journey
          </p>
        </div>

        {error && (
          <Alert className="bg-red-900/20 border-red-800 text-red-400 mb-8 max-w-md mx-auto">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {isSubscribed && (
          <Alert className="bg-green-900/20 border-green-800 text-green-400 mb-8 max-w-md mx-auto">
            <AlertDescription>
              You currently have an active subscription. Thank you for being a member!
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="bg-zinc-900 border-zinc-800 relative">
            <CardHeader>
              <CardTitle className="text-white">Free</CardTitle>
              <CardDescription className="text-zinc-400">
                Get started with basic features
              </CardDescription>
              <div className="text-3xl font-bold text-white">
                $0<span className="text-lg font-normal text-zinc-400">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-zinc-300">Access to basic resources</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-zinc-300">Community support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-zinc-300">Limited AI friend interactions</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white"
                disabled
              >
                Current Plan
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plans */}
          {products.map((product) => (
            <Card key={product.priceId} className="bg-zinc-900 border-zinc-800 relative">
              {product.mode === 'subscription' && (
                <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-fuchsia-600 text-white">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-white">{product.name}</CardTitle>
                <CardDescription className="text-zinc-400">
                  {product.description}
                </CardDescription>
                <div className="text-3xl font-bold text-white">
                  ${product.price}
                  {product.mode === 'subscription' && (
                    <span className="text-lg font-normal text-zinc-400">
                      /{product.interval}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-zinc-300">Unlimited AI friend conversations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-zinc-300">Priority expert consultations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-zinc-300">Advanced mood tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-zinc-300">Personalized recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-zinc-300">24/7 crisis support</span>
                  </li>
                </ul>
                <Button
                  onClick={() => handleCheckout(product.priceId, product.mode)}
                  disabled={loading === product.priceId || (isSubscribed && product.mode === 'subscription')}
                  className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
                >
                  {loading === product.priceId ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : isSubscribed && product.mode === 'subscription' ? (
                    'Already Subscribed'
                  ) : (
                    `Get ${product.name}`
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-zinc-400">
            All plans include our core features and community support.{" "}
            <a href="/contact" className="text-fuchsia-400 hover:text-fuchsia-300">
              Contact us
            </a>{" "}
            if you have questions.
          </p>
        </div>
      </div>
    </div>
  );
}