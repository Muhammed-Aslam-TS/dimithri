export default function Testimonials() {
  const reviews = [
    {
      name: "Jessica Ray",
      course: "Interior Design",
      text: "The practical exposure at Dimithri changed my perspective on design. I'm now working with a top firm with a great package!"
    },
    {
      name: "Rahul Nair",
      course: "Fashion Design",
      text: "The faculty here are amazing. They help you find your own style and build a killer portfolio that stands out."
    },
    {
      name: "Ananya Das",
      course: "Visual Communication",
      text: "Studying here was the best decision for my career. The industry visits and workshops are truly world-class."
    },
    {
      name: "Kevin Peterson",
      course: "Interior Design",
      text: "The hands-on approach and focus on modern tools like CAD and 3ds Max gave me a huge edge in the job market."
    }
  ];

  return (
    <section id="testimonials" className="section bg-gray-50 overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Student Success Stories</h2>
          <p className="text-gray-500">Hear from our alumni who are now leading the design industry.</p>
        </div>
        
        <div className="relative group">
          {/* Scrollable Container */}
          <div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide">
            {reviews.map((review, i) => (
              <div 
                key={i} 
                className="min-w-full md:min-w-[450px] snap-center bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="text-secondary text-5xl mb-6">"</div>
                  <p className="text-gray-600 text-lg italic leading-relaxed mb-8">{review.text}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{review.name}</h4>
                    <p className="text-sm text-secondary">{review.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators or Hint */}
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-primary/30 transition-colors"></div>
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
             <div className="w-10 h-10 bg-white/80 backdrop-blur rounded-full shadow-lg flex items-center justify-center text-primary font-bold cursor-pointer pointer-events-auto">←</div>
             <div className="w-10 h-10 bg-white/80 backdrop-blur rounded-full shadow-lg flex items-center justify-center text-primary font-bold cursor-pointer pointer-events-auto">→</div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
