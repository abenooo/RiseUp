"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function SuccessPage() {
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState<any>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    checkSubscription();
  }, []);

  const checkSubscription = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        // Fetch user's subscription data
        const { data: subData } = await supabase
          .from('stripe_user_subscriptions')
          .select('*')
          .maybeSingle();
        
        setSubscription(subData);
      }
    } catch (error) {
      console.error('Error fetching subscription:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 text-center">
        <CardHeader>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-8 w-8 text-fuchsia-500" />
            <span className="text-2xl font-bold">RiseUp</span>
          </div>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-400" />
          </div>
          <CardTitle className="text-2xl text-white">Payment Successful!</CardTitle>
          <CardDescription className="text-zinc-400">
            Thank you for your purchase. Your payment has been processed successfully.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {loading ? (
            <div className="text-zinc-400">Loading subscription details...</div>
          ) : subscription ? (
            <div className="bg-zinc-800 p-4 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Subscription Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Status:</span>
                  <span className="text-green-400 capitalize">{subscription.subscription_status}</span>
                </div>
                {subscription.current_period_end && (
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Next billing:</span>
                    <span className="text-white">
                      {new Date(subscription.current_period_end * 1000).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p className="text-zinc-300">Your purchase has been completed successfully!</p>
            </div>
          )}

          <div className="space-y-3">
            <Button
              onClick={() => router.push('/dashboard')}
              className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
            >
              Go to Dashboard
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button
              onClick={() => router.push('/')}
              variant="outline"
              className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800"
            >
              Back to Home
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-zinc-400">
              Need help? <a href="/contact" className="text-fuchsia-400 hover:text-fuchsia-300">Contact support</a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}