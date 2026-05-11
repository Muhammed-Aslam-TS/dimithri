export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[url('/images/hero.png')] bg-center bg-cover text-white pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-black/40"></div>
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">
              Design Your Future at <br />
              <span className="text-secondary">Dimithri Institute</span>
            </h1>
            <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto lg:mx-0">
              Calicut's premier design institute for Interior Design & Fashion. Join the league of elite designers with our industry-endorsed curriculum.
            </p>
            <div className="flex flex-wrap gap-8 md:gap-12 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-secondary">15+</h3>
                <p className="text-sm uppercase tracking-widest">Years</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-secondary">5000+</h3>
                <p className="text-sm uppercase tracking-widest">Alumni</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-secondary">100%</h3>
                <p className="text-sm uppercase tracking-widest">Placement</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-md mx-auto w-full">
            <div className="bg-white p-8 md:p-10 rounded-[30px] text-gray-900 shadow-2xl">
              <h3 className="text-2xl font-bold mb-2 text-primary">Enquire Now</h3>
              <p className="text-gray-500 mb-8 text-[0.95rem]">Get a free counseling session today!</p>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:border-primary" required />
                <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:border-primary" required />
                <input type="tel" placeholder="Phone Number" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:border-primary" required />
                <select className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:border-primary" required defaultValue="">
                  <option value="" disabled>Interested Course</option>
                  <option value="interior">Interior Design</option>
                  <option value="fashion">Fashion Design</option>
                </select>
                <button type="submit" className="btn btn-secondary w-full mt-4">Submit Enquiry</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
