import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small restaurants and cafes",
    features: ["Up to 500 inventory items", "Basic analytics", "Email support", "Mobile app access", "1 user account"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    description: "Ideal for growing restaurants and small chains",
    features: [
      "Unlimited inventory items",
      "Advanced analytics",
      "Priority support",
      "Mobile app access",
      "Automated ordering",
      "5 user accounts",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large restaurant groups and franchises",
    features: [
      "Unlimited inventory items",
      "Custom reporting",
      "Dedicated account manager",
      "API access",
      "Advanced integrations",
      "Unlimited user accounts",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-sm overflow-hidden ${
                plan.popular ? "ring-2 ring-green-600 relative" : "border border-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 uppercase">
                  Most Popular
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-500">/month</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <a
                  href="#"
                  className={`block w-full py-3 px-4 rounded-md text-center font-medium ${
                    plan.popular
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  } transition-colors`}
                >
                  {plan.cta}
                </a>
              </div>

              <div className="border-t border-gray-100 p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need a custom solution?{" "}
            <a href="#" className="text-green-600 font-medium hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing

