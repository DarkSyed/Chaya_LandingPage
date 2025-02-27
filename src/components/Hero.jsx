import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-background dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div
        className="absolute inset-0 bg-gradient-to-b from-green-50 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Automate Your Inventory, <span className="gradient-text">Maximize Your Profits</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Chaya helps food service businesses streamline inventory management with powerful automation tools. We
              extend your existing systems to reduce waste, save time, and increase profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white gradient-bg hover:opacity-90 transition-opacity"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Book a Demo
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">No credit card required. 14-day free trial.</p>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img src="/placeholder.svg?height=600&width=800" alt="Chaya dashboard" className="w-full h-auto" />
            </div>

            <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-white">Inventory optimized</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-white">Cost reduced by 13%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
