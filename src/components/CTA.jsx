const CTA = () => {
  return (
    <section className="py-20 bg-green-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Inventory Management?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of businesses that have streamlined their operations and increased profitability with Chaya.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition-colors"
            >
              Start Your Free Trial
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-green-700 transition-colors"
            >
              Schedule a Demo
            </a>
          </div>
          <p className="mt-4 text-sm text-green-200">No credit card required. 14-day free trial.</p>
        </div>
      </div>
    </section>
  )
}

export default CTA

