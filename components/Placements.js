export default function Placements() {
  const stats = [
    { label: "Placement Rate", value: "100%" },
    { label: "Partner Companies", value: "200+" },
    { label: "Highest Package", value: "12 LPA" },
    { label: "Average Package", value: "5.5 LPA" }
  ];

  return (
    <section id="placements" className="section bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-6 text-primary">Your Career, Our Priority</h2>
            <p className="text-gray-500 text-lg mb-8">
              We take pride in our robust placement cell that works tirelessly to connect our talented students with the best in the industry. From portfolio building to mock interviews, we guide you at every step.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-[20px] border border-gray-100">
                  <span className="block text-3xl font-bold text-secondary mb-1">{stat.value}</span>
                  <span className="text-sm font-medium text-gray-500">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <button className="btn btn-primary">Download Placement Report</button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/20 rounded-[40px] blur-xl group-hover:bg-secondary/30 transition-all"></div>
              <img src="/images/placements.png" alt="Successful placements" className="relative rounded-[30px] shadow-premium" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
