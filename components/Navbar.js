import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-[1000] shadow-sm py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-extrabold tracking-tighter text-primary uppercase">
            DIMITHRI<span className="text-secondary">.</span>
          </div>
          
          <ul className={`
            flex gap-8 items-center transition-all duration-400
            ${isOpen ? 'absolute top-full left-0 w-full bg-white flex-col p-8 shadow-lg translate-y-0 z-[-1]' : 'translate-y-[-150%] md:translate-y-0 md:relative md:flex-row md:p-0 md:shadow-none'}
          `}>
            <li><a href="#hero" className="font-medium text-gray-900 hover:text-primary text-[0.9rem]" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#courses" className="font-medium text-gray-900 hover:text-primary text-[0.9rem]" onClick={() => setIsOpen(false)}>Courses</a></li>
            <li><a href="#faculty" className="font-medium text-gray-900 hover:text-primary text-[0.9rem]" onClick={() => setIsOpen(false)}>Faculty</a></li>
            <li><a href="#placements" className="font-medium text-gray-900 hover:text-primary text-[0.9rem]" onClick={() => setIsOpen(false)}>Placements</a></li>
            <li><a href="#advantages" className="font-medium text-gray-900 hover:text-primary text-[0.9rem]" onClick={() => setIsOpen(false)}>Advantages</a></li>
            <li><a href="#about" className="font-medium text-gray-900 hover:text-primary text-[0.9rem]" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#testimonials" className="font-medium text-gray-900 hover:text-primary text-[0.9rem]" onClick={() => setIsOpen(false)}>Testimonials</a></li>
          </ul>
          
          <div className="flex items-center gap-4">
            <button className="btn btn-primary hidden sm:block">Apply Now</button>
            <div className="flex flex-col gap-[5px] cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <span className="w-[25px] h-[3px] bg-primary rounded-sm"></span>
              <span className="w-[25px] h-[3px] bg-primary rounded-sm"></span>
              <span className="w-[25px] h-[3px] bg-primary rounded-sm"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
