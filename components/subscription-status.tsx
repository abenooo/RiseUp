"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";
import { getProductByPriceId } from "@/src/stripe-config";

interface SubscriptionStatusProps {
  className?: string;
}

export function SubscriptionStatus({ className }: SubscriptionStatusProps) {
  const [subscription, setSubscription] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscription();
  }, []);

  const fetchSubscription = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
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

  if (loading) {
    return (
      <Badge variant="outline" className={className}>
        Loading...
      </Badge>
    );
  }

  if (!subscription || !subscription.subscription_status || subscription.subscription_status === 'not_started') {
    return (
      <Badge variant="outline" className={className}>
        Free Plan
      </Badge>
    );
  }

  const product = subscription.price_id ? getProductByPriceId(subscription.price_id) : null;
  const planName = product?.name || 'Premium Plan';

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'trialing':
        return 'bg-green-600 hover:bg-green-700';
      case 'past_due':
        return 'bg-yellow-600 hover:bg-yellow-700';
      case 'canceled':
      case 'unpaid':
        return 'bg-red-600 hover:bg-red-700';
      default:
        return 'bg-zinc-600 hover:bg-zinc-700';
    }
  };

  return (
    <Badge 
      className={`${getStatusColor(subscription.subscription_status)} text-white ${className}`}
    >
      {planName}
    </Badge>
  );
}