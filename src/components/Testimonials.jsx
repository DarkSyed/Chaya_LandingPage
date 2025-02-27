import { Star } from "lucide-react"

const testimonials = [
  {
    content:
      "Chaya has revolutionized how we manage inventory across our 10 locations. We've saved 15% on our net revenue and countless hours on ordering ingredients for our acai bowls.",
    author: "Abdus Sami",
    role: "Owner, Abdus Sami Palm Berries",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    content:
      "The automation Chaya provides has been a game-changer for our distillery. Their platform seamlessly integrates with our existing systems, making inventory management a breeze.",
    author: "John Doe",
    role: "Operations Manager, John Doe, Weldon Mills Distillery",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    content:
      "As a small business owner on Franklin Street, I was struggling with inventory management. Chaya's solution has not only saved me time but also helped me optimize my purchasing process.",
    author: "Muslim Guy",
    role: "Owner, Muslim Guy, Med Deli",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Local Businesses</h2>
          <p className="text-lg text-gray-600">
            See how Chaya has transformed inventory management for food service businesses in North Carolina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

