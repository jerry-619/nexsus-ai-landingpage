"use client";

import { motion } from "framer-motion";
import { Bot, BarChart3, Shield, Globe, Users, Headphones } from "lucide-react";

// Feature Data Configuration
const features = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "Automate repetitive tasks with our advanced AI agents that learn from your workflow.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Get deep insights into your business performance with live data visualization.",
  },
  {
    icon: Shield,
    title: "Secure Infrastructure",
    description: "Enterprise-grade security with end-to-end encryption to keep your data safe.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy your AI solutions globally with our distributed edge network.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built for teams. Share workflows, manage permissions, and collaborate in real-time.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated support team is always available to help you resolve any issues.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Powered by Advanced Intelligence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Everything you need to build, deploy, and scale your AI applications with ease.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
