import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Connect Your Systems",
    description:
      "Integrate Chaya with your existing Excel sheets and inventory systems in minutes, without disrupting your current workflow.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    number: "02",
    title: "Set Up Automation Rules",
    description:
      "Define your inventory thresholds, reorder points, and approval workflows to match your business needs across all locations.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    number: "03",
    title: "Monitor & Optimize",
    description:
      "Track performance in real-time and use AI-powered insights to continuously improve your inventory management and reduce costs.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Chaya Works</h2>
          <p className="text-lg text-gray-600">
            Getting started with Chaya is simple. Our platform is designed to enhance your existing systems, not replace
            them.
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="inline-block text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-800 transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

