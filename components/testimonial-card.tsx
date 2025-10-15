interface Testimonial {
  id: number
  name: string
  avatar: string
  service: string
  rating: number
  content: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-red-600">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full flex items-center justify-center font-bold text-base shadow-md flex-shrink-0">
          {testimonial.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-gray-900 font-bold text-base mb-1">{testimonial.name}</h4>
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0">
          <span className="text-xs font-medium text-red-600 bg-red-50 px-3 py-1.5 rounded-full border border-red-200">
            {testimonial.service}
          </span>
        </div>
      </div>
      <blockquote className="text-gray-700 text-base leading-relaxed">"{testimonial.content}"</blockquote>
    </article>
  )
}
