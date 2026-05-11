export default function Advantages() {
  const points = [
    { title: "Practical Studios", desc: "State-of-the-art design studios for hands-on learning.", icon: "🎨" },
    { title: "Global Curriculum", desc: "Course material designed by international design experts.", icon: "🌐" },
    { title: "Industry Visits", desc: "Regular visits to top design firms and manufacturing units.", icon: "🏢" },
    { title: "Lifelong Support", desc: "Access to our alumni network and career guidance forever.", icon: "🤝" }
  ];

  return (
    <section id="advantages" className="section bg-accent text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Dimithri Advantage</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Why thousands of students choose us every year to start their creative journey.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-[30px] border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-4xl mb-6">{point.icon}</div>
              <h4 className="text-xl font-bold mb-3">{point.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
