"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

// Pricing Tiers Configuration
const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for individuals and hobbyists.",
    features: ["5 AI Agents", "1,000 API Calls/mo", "Community Support", "Basic Analytics"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "For growing teams and startups.",
    features: ["Unlimited AI Agents", "100,000 API Calls/mo", "Priority Support", "Advanced Analytics", "Custom Integrations"],
    popular: true, // Highlights this plan
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs.",
    features: ["Unlimited Everything", "Dedicated Success Manager", "SLA Guarantee", "SSO & Audit Logs", "On-premise Deployment"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <p className="text-slate-400 text-lg">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl border flex flex-col relative ${
                plan.popular
                  ? "bg-slate-900/50 border-indigo-500 shadow-2xl shadow-indigo-500/10"
                  : "bg-slate-900/20 border-slate-800 hover:border-slate-700"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-500 text-white text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-500">/month</span>}
                </div>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className={`p-1 rounded-full ${plan.popular ? "bg-indigo-500/20 text-indigo-400" : "bg-slate-800 text-slate-400"}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/25"
                    : "bg-slate-800 text-white hover:bg-slate-700"
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
