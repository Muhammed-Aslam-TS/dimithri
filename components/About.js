export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img src="/images/hero.png" alt="About Dimithri" className="rounded-[30px] shadow-premium" />
            <div className="absolute -bottom-8 -right-8 bg-secondary p-8 rounded-[20px] shadow-premium text-center font-bold w-[180px]">
              <span className="block text-4xl text-primary leading-none mb-1">15+</span>
              <span className="text-sm">Years of Excellence</span>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8 text-primary">Excellence in Design Education</h2>
            <p className="text-gray-500 mb-6 text-lg">
              Dimithri School of Design is a leading name in design education, committed to nurturing talent and fostering innovation. Our campuses across India provide students with a creative and inspiring environment.
            </p>
            <p className="text-gray-500 mb-8 text-lg">
              With a focus on practical knowledge and industry exposure, we bridge the gap between classroom learning and professional excellence. Our faculty comprises experienced professionals who bring real-world insights to the studio.
            </p>
            <ul className="space-y-3 mb-10">
              <li className="font-semibold text-accent">✓ Industry Oriented Curriculum</li>
              <li className="font-semibold text-accent">✓ 100% Placement Assistance</li>
              <li className="font-semibold text-accent">✓ International Collaborations</li>
              <li className="font-semibold text-accent">✓ State-of-the-art Infrastructure</li>
            </ul>
            <button className="btn btn-primary">Our Journey</button>
          </div>
        </div>
      </div>
    </section>
  )
}
