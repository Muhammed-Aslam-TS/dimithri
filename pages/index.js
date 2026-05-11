import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Courses from '../components/Courses'
import Faculty from '../components/Faculty'
import Placements from '../components/Placements'
import Advantages from '../components/Advantages'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dimithri School of Design | Top Interior Design Institute in Calicut</title>
        <meta name="description" content="Join Dimithri School of Design in Calicut for world-class Interior Design and Fashion Design courses. Nurturing creative talent since 2006." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <Hero />
        <Courses />
        <Faculty />
        <Placements />
        <Advantages />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[2000]">
        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-xl cursor-pointer transition-all duration-300 hover:scale-110 bg-[#25d366] text-white" aria-label="WhatsApp">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049c0 2.12.554 4.189 1.605 6.006L0 24l6.117-1.604a11.845 11.845 0 005.932 1.577h.005c6.635 0 12.046-5.411 12.049-12.048 0-3.216-1.252-6.241-3.526-8.514z"/></svg>
        </div>
        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-xl cursor-pointer transition-all duration-300 hover:scale-110 bg-primary text-white" aria-label="Call">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
        </div>
      </div>

      <Footer />

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}
