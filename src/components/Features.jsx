import {
  BarChart3,
  ClipboardCheck,
  Clock,
  TrendingUp,
  Zap,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-6 w-6 text-green-600" />,
    title: "Real-time Analytics",
    description:
      "Get instant insights into your inventory levels, usage patterns, and cost trends across multiple locations.",
    dotColor: "status-indicator-green", // Green dot
  },
  {
    icon: <ClipboardCheck className="h-6 w-6 text-blue-600" />,
    title: "Automated Excel Management",
    description:
      "Our system automates your existing Excel sheets, eliminating manual data entry and reducing errors.",
    dotColor: "status-indicator-blue", // Blue dot
  },
  {
    icon: <Clock className="h-6 w-6 text-green-600" />,
    title: "Time-saving Workflows",
    description:
      "Streamline receiving, counting, and transferring inventory with intuitive digital workflows.",
    dotColor: "status-indicator-green",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-green-600" />,
    title: "Multi-location Management",
    description:
      "Easily manage inventory across multiple locations, perfect for businesses with several branches.",
    dotColor: "status-indicator-green",
  },
  {
    icon: <Zap className="h-6 w-6 text-green-600" />,
    title: "Seamless Integrations",
    description:
      "Chaya works alongside your existing systems, enhancing their capabilities without replacing them.",
    dotColor: "status-indicator-green",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
    title: "Cost Optimization",
    description:
      "Identify cost-saving opportunities and reduce waste with our intelligent inventory tracking.",
    dotColor: "status-indicator-blue",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 bg-background dark:bg-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features to Transform Your Inventory Management
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Chaya combines cutting-edge technology with user-friendly design to
            give you complete control over your inventory across all your
            locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-2 mb-4">
                <span className={`w-3 h-3 rounded-full ${feature.dotColor}`}></span>
                <div className="w-12 h-12 rounded-lg bg-green-50 dark:bg-green-900 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:text-green-800 dark:hover:text-green-300 transition-colors"
          >
            Explore all features
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
