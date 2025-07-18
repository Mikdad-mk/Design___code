import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#e0f7fa] via-white to-[#ede7f6] overflow-x-hidden font-sans">

      {/* Grid background overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40" style={{backgroundImage: 'linear-gradient(to right, #e0e0e0 1px, transparent 1px), linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)', backgroundSize: '40px 40px'}} />

      {/* Navigation Bar */}
      <nav className="flex flex-col sm:flex-row justify-between items-center px-2 sm:px-4 md:px-16 pt-2 sm:pt-4 md:pt-0 w-full max-w-[1400px] mx-auto z-20 gap-2 sm:gap-0" style={{ fontFamily: 'var(--font-poppins)' }}>
        <div className="flex items-center gap-2 relative">
          <div className="rotate-[-15deg] shadow-lg select-none flex items-center justify-center mt-4 md:mt-12 relative w-40 md:w-[186px] h-14 md:h-[72px]" style={{ background: '#4C5EFF' }}>
            <svg
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none -top-8 md:-top-12 w-16 md:w-[60px] h-16 md:h-[60px]"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ zIndex: 30 }}
            >
              <path
                d="M30 0 C10 30, 50 30, 30 60"
                stroke="#4C5EFF"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <img src="/design code logo-01-01.svg" alt="Design Code Logo" className="block mx-auto my-auto w-full h-full object-contain scale-150 md:scale-195" />
          </div>
        </div>
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-8 md:gap-12 text-gray-700 text-base sm:text-lg font-light items-center">
          <li className="border-b-2 border-black pb-1">Home</li>
          <li className="hover:text-black cursor-pointer">About</li>
          <li className="hover:text-black cursor-pointer">Service</li>
          <li className="hover:text-black cursor-pointer">Contact us</li>
        </ul>
        <button className="border-2 border-black rounded-full px-4 sm:px-8 py-2 font-semibold text-black bg-white shadow-md hover:bg-gray-100 transition-all relative text-sm sm:text-base" style={{ fontFamily: 'var(--font-poppins)' }}>
          Get started
        </button>
      </nav>

      {/* Headline Section */}
      <section className="relative flex flex-col md:flex-row items-start justify-between px-2 sm:px-4 md:px-16 mt-4 sm:mt-8 md:mt-16 w-full max-w-[1400px] mx-auto z-10 min-h-[320px] md:min-h-[420px]">
        <div className="flex-1 flex flex-col gap-2 sm:gap-4 max-w-full md:max-w-2xl w-full z-10 pt-2 sm:pt-4 md:pt-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium text-black leading-tight mb-2" style={{ fontFamily: 'var(--font-architects)', textAlign: 'left' }}>
            <span className="relative inline-block">
              We’re creative
              <span className="absolute left-0 bottom-3 w-full h-2 bg-yellow-200 -z-10 rounded-md"></span>
            </span>
          </h1>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-1 sm:gap-2 mt-2 w-full md:w-auto">
            <span className="text-5xl sm:text-7xl md:text-8xl drop-shadow-sm" style={{ fontFamily: 'var(--font-archistico)', textAlign: 'left', fontWeight: 'bold', color: '#444', letterSpacing: '-2px', textShadow: '0 1px 0 #fff' }}>Design</span>
            <span className="bg-[#536dfe] text-white text-4xl sm:text-6xl md:text-7xl px-2 sm:px-4 py-1 rounded-lg rotate-[5deg] shadow-lg ml-2" style={{ fontFamily: 'var(--font-archistico)',fontWeight: 'normal', textAlign: 'left' }}>Studio</span>
          </div>
        </div>
        {/* Hand illustration on the right as main visual */}
        <div className="flex-1 flex justify-center items-center relative h-[180px] xs:h-[220px] sm:h-[300px] md:h-full min-w-0 mt-4 sm:mt-6 md:ml-12 md:-mt-24">
          <Image
            src="/hand-01.svg"
            alt="Hand illustration"
            width={900}
            height={900}
            className="object-contain drop-shadow-2xl w-full h-auto max-w-[220px] xs:max-w-[300px] sm:max-w-[400px] md:max-w-[700px] lg:max-w-[900px]"
            priority
          />
        </div>
      </section>

      {/* Precisely positioned floating tags */}
      <div className="absolute z-20" style={{ left: '234.02px', top: '658.05px', transform: 'rotate(-75deg)',backdropFilter: 'blur(4px)', boxShadow: '0 3px 6px -1px rgba(0, 0, 0, 0.25)' }}>
        <div className="px-3 py-3  shadow-lg text-lg font-medium w-40 text-center" style={{ background: '#A695FD', color: 'white' }}>
          UI / UX Design
        </div>
      </div>
      <div className="absolute z-20" style={{ left: '394.02px', top: '643.83px', transform: 'rotate(-100deg)',backdropFilter: 'blur(4px)', boxShadow: '0 3px 6px -1px rgba(0, 0, 0, 0.25)' }}>
        <div className="px-9 py-5   text-lg font-medium  text-center" style={{ background: '#1FE5B7', color: 'white' }}>
          Mobile App
        </div>
      </div>
      <div className="absolute z-20" style={{ left: '530.44px', top: '670.7px', transform: 'rotate(-70deg)' ,backdropFilter: 'blur(4px)', boxShadow: '0 3px 6px -1px rgba(153, 150, 150, 0.25)'}}>
        <div className="px-6 py-3 shadow-lg text-lg  font-medium w-32 text-center" style={{ background: '#FEBA31', color: 'white' }}>
          Web App
        </div>
      </div>

      {/* Technology Stack Bar */}
      <div
        style={{ 
          background: '#FFFFFF',
          backdropFilter: 'blur(4px)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.25)'
        }}
        className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-8 w-[98vw] md:w-[480px] max-w-[98vw] rounded-4xl shadow-xl flex items-center justify-between gap-2 md:gap-4 px-2 md:px-8 py-2 md:py-4 z-30"
      >
        <Image src="/javascript-svgrepo-com.svg" alt="JavaScript" width={32} height={32} className="md:w-10 md:h-10 w-8 h-8" />
        <Image src="/reactjs-svgrepo-com.svg" alt="React" width={32} height={32} className="md:w-10 md:h-10 w-8 h-8" />
        <Image src="/next.svg" alt="Next.js" width={32} height={32} className="md:w-10 md:h-10 w-8 h-8" />
        <Image src="/node-svgrepo-com.svg" alt="Node.js" width={32} height={32} className="md:w-10 md:h-10 w-8 h-8" />
        <Image src="/expo-svgrepo-com.svg" alt="Expo" width={32} height={32} className="md:w-10 md:h-10 w-8 h-8" />
      </div>
    </div>
  );
}
