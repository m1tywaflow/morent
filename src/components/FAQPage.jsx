import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  { question: "How to book a car?", answer: "Just choose a car and fill out the form." },
  { question: "Is there insurance for the cars?", answer: "Yes, all cars are insured." },
  { question: "What are the rental conditions?", answer: "The rental conditions depend on the selected tariff." },
  { question: "Can I return the car earlier?", answer: "Yes, but additional conditions may apply." },
  { question: "How can I contact support?", answer: "You can write to us in chat or call us by phone." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-amber-50 w-full mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 shadow-md rounded-xl overflow-hidden max-w-3xl mx-auto">
            <button
              className="w-full flex justify-between items-center p-4 text-left text-lg font-medium text-white focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <ChevronDown
                className={`w-6 h-6 text-white transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-4 text-gray-300">{faq.answer}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}