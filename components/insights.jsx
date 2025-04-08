import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/insights-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const InsightsSection = () => {
  const preViewStats = statsData.slice(0, 4);
  const preViewFeatures = featuresData.slice(0, 3);
  const preViewTestimonials = testimonialsData.slice(0, 2);

  return (
    <div className="container mx-auto px-1 sm:px-4 lg:px-7 text-center">
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mt-5">
        {preViewStats.map((stat, index) => {
          const isLast = index === preViewStats.length - 1;

          return (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center p-2 md:p-3 lg:p-4 xl:p-5 inset-shadow-sm inset-shadow-white shadow-sm shadow-white rounded-lg bg-blue-100"
            >
              <h2 className="text-2xl font-bold text-blue-600">{stat.value}</h2>
              <p className="text-gray-600">{stat.label}</p>
              {isLast && (
                <Link
                  href="/about#stats"
                  className="px-2 absolute right-0 w-fit h-full bg-black/20 backdrop-blur-lg text-blue-800 flex items-center justify-center text-sm font-medium rounded-r-lg hover:bg-black/30 transition"
                >
                  View All <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              )}
            </div>
          );
        })}
      </section>
      <section className="mt-24">
        <div className="flex flex-col items-center space-y-3 mb-10">
          <h2 className="text-3xl font-bold">
            Explore the features that make managing money effortless
          </h2>
          <Link
            href="/about#features"
            className="text-black/70 hover:text-black flex space-x-1 items-center text-sm font-medium transition-colors"
          >
            View All Features <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {preViewFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col space-y-1 items-center justify-center p-2 md:p-3 lg:p-4 xl:p-5 inset-shadow-sm inset-shadow-white shadow-sm shadow-white rounded-lg bg-blue-100"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8">What to Expect</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {howItWorksData.map((step, index) => (
            <div
              key={index}
              className="flex flex-col space-y-1 items-center justify-center p-2 md:p-3 lg:p-4 xl:p-5 inset-shadow-sm inset-shadow-white shadow-sm shadow-white rounded-lg bg-blue-100"
            >
              <step.icon className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-24">
        <div className="flex flex-col items-center space-y-3 mb-10">
          <h2 className="text-3xl font-bold">
            What our users say about us
          </h2>
          <Link
            href="/about#testimonials"
            className="text-black/70 hover:text-black flex space-x-1 items-center text-sm font-medium transition-colors"
          >
            View All Testimonials <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {preViewTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col space-y-1 items-center justify-center p-2 md:p-3 lg:p-4 xl:p-5 inset-shadow-sm inset-shadow-white shadow-sm shadow-white rounded-lg bg-blue-100"
            >
              <p className="text-gray-600 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col mt-2">
                  <h3 className="text-lg font-semibold leading-5">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-24 pb-20">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Unleash the Power of Smart Finance?
        </h2>
        <p className="mb-8 text-gray-700">
          Join thousands of satisfied users and start your journey towards
          financial freedom today!
        </p>
        <Link
          href="/dashboard"
          className="bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Button
            size="lg"
            variant="outline"
            className="animate-bounce inset-shadow-sm inset-shadow-blue-400 hover:inset-shadow-white shadow-lg shadow-blue-300 text-white hover:text-blue-600 bg-blue-600 hover:bg-white border border-blue-600 hover:border-blue-600"
          >
            Start Free Trial
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default InsightsSection;
