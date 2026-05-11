export default function Faculty() {
  const members = [
    { name: "Ar. Sarah Johnson", role: "Head of Interior Design", exp: "15+ Years" },
    { name: "Prof. Michael Chen", role: "Creative Director", exp: "12+ Years" },
    { name: "Emma Williams", role: "Fashion Design Lead", exp: "10+ Years" },
    { name: "David Miller", role: "Visual Arts Expert", exp: "8+ Years" }
  ];

  return (
    <section id="faculty" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Meet Our Expert Faculty</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Learn from industry veterans who bring decades of real-world experience into the classroom.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <div key={i} className="bg-white p-6 rounded-[24px] shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                👤
              </div>
              <h4 className="text-xl font-bold mb-1 text-primary">{member.name}</h4>
              <p className="text-secondary font-semibold text-sm mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm">Experience: {member.exp}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 relative rounded-[40px] overflow-hidden shadow-2xl h-[400px]">
          <img src="/images/faculty.png" alt="Faculty collaboration" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center p-12">
            <div className="text-white max-w-lg">
              <h3 className="text-3xl font-bold mb-4">Hands-on Mentorship</h3>
              <p className="text-lg opacity-90">Our faculty members don't just teach; they mentor you to become a leader in the design world.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
