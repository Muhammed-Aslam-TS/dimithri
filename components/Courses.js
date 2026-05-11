export default function Courses() {
  const courses = [
    {
      title: 'Interior Design',
      duration: '1 Year / 2 Year',
      eligibility: '10th / +2 / Degree',
      image: '/images/course1.png',
      desc: 'Master the art of creating beautiful and functional spaces with our industry-led curriculum.'
    },
    {
      title: 'Fashion Design',
      duration: '1 Year / 3 Year',
      eligibility: '10th / +2',
      image: '/images/course1.png',
      desc: 'Unlock your creative potential and build a career in the dynamic world of fashion.'
    },
    {
      title: 'Visual Communication',
      duration: '1 Year',
      eligibility: 'SSLC / +2',
      image: '/images/course1.png',
      desc: 'Learn the skills to communicate ideas visually through graphic design and digital media.'
    }
  ]

  return (
    <section id="courses" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Premier Programs</h2>
          <p className="text-gray-500 text-lg">Choose the path that ignites your passion</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-[20px] overflow-hidden shadow-premium transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-[250px] overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">{course.title}</h3>
                <div className="flex justify-between mb-6 pb-4 border-b border-gray-100">
                  <p className="font-semibold text-[0.85rem] flex items-center gap-2">
                    <span className="text-secondary text-lg">⏱</span> {course.duration}
                  </p>
                  <p className="font-semibold text-[0.85rem] flex items-center gap-2">
                    <span className="text-secondary text-lg">🎓</span> {course.eligibility}
                  </p>
                </div>
                <p className="text-gray-500 mb-6 text-[0.95rem]">{course.desc}</p>
                <a href="#" className="font-bold text-primary text-base hover:underline">Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
