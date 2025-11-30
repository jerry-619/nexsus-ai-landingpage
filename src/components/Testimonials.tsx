"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Testimonial Data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechFlow",
    content: "Nexus AI has completely transformed how we handle our customer support. The automation is seamless and the insights are invaluable.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Michael Chen",
    role: "Product Manager at Innovate",
    content: "The best investment we've made this year. It's like having an extra team of developers working 24/7. Highly recommended!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    name: "Emily Davis",
    role: "Founder at StartupX",
    content: "Incredible platform. The ease of use combined with powerful features makes it a must-have for any modern business.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
  },
];

const companies = [
  "Acme Corp", "GlobalTech", "Nebula", "Vertex", "Horizon", "Ascend"
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        {/* Trusted By Strip */}
        <div className="mb-24 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {companies.map((company) => (
              <span key={company} className="text-xl md:text-2xl font-bold text-slate-300">{company}</span>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Loved by Developers & Teams
          </motion.h2>
          <p className="text-slate-400 text-lg">
            Don't just take our word for it. Here's what our community has to say about Nexus AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/30 border border-slate-800 relative"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
              
              {/* User Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full bg-slate-800"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-slate-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
