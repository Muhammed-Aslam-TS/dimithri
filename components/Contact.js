export default function Contact() {
  return (
    <section id="contact" className="section bg-accent text-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-lg mb-12">Have questions? We're here to help you design your future.</p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="text-2xl bg-white/10 w-[60px] h-[60px] flex items-center justify-center rounded-full shrink-0">📍</div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Our Location</h4>
                  <p className="text-gray-400">Space 4, Calicut, Kerala - 673001</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="text-2xl bg-white/10 w-[60px] h-[60px] flex items-center justify-center rounded-full shrink-0">📞</div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Call Us</h4>
                  <p className="text-gray-400">+91 97455 00011</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="text-2xl bg-white/10 w-[60px] h-[60px] flex items-center justify-center rounded-full shrink-0">✉️</div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Email Us</h4>
                  <p className="text-gray-400">info@dimithri.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="bg-white p-8 md:p-12 rounded-[30px] text-gray-900 shadow-2xl space-y-6">
              <div>
                <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:border-primary" required />
              </div>
              <div>
                <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:border-primary" required />
              </div>
              <div>
                <input type="tel" placeholder="Phone Number" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:border-primary" required />
              </div>
              <div>
                <select className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:border-primary" required defaultValue="">
                  <option value="" disabled>Select Course</option>
                  <option value="interior">Interior Design</option>
                  <option value="fashion">Fashion Design</option>
                  <option value="viscom">Visual Communication</option>
                </select>
              </div>
              <div>
                <textarea placeholder="Your Message" rows="4" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:border-primary"></textarea>
              </div>
              <button type="submit" className="btn btn-secondary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
