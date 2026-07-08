import { useState } from 'react';
import { useInViewAnimation } from './hooks/useInViewAnimation';
import { ChevronRight, Trophy, Cpu, Wrench, Flag, Phone, Mail, Target, Users } from 'lucide-react';

function App() {
  const { ref: heroRef, isInView: heroInView } = useInViewAnimation();
  const { ref: aboutRef, isInView: aboutInView } = useInViewAnimation();
  const { ref: awardRef, isInView: awardInView } = useInViewAnimation();

  // Estado para controlar qué pestaña está activa en la sección del Equipo
  const [activeTab, setActiveTab] = useState('QUIENES_SOMOS');

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#C5A365] selection:text-black">
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
          <img src="/PumaLogo.jpeg" alt="Puma Off-Road Logo" className="h-12 w-12 object-cover rounded-md" />
          <span className="font-teko text-2xl tracking-wider font-semibold">PUMA <span className="text-puma-gold">OFF-ROAD</span></span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <a href="#equipo" className="hover:text-puma-gold transition-colors">EL EQUIPO</a>
          <a href="#logros" className="hover:text-puma-gold transition-colors">LOGROS</a>
          <a href="#patrocinadores" className="hover:text-puma-gold transition-colors">PATROCINADORES</a>
          <a href="#contacto" className="px-5 py-2 bg-puma-gold text-black rounded-sm hover:bg-white transition-colors">UNIRSE</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/Puma1.jpeg" alt="Buggy en acción" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mt-20">
          <div className={`inline-flex items-center gap-2 px-4 py-1 border border-puma-gold/50 rounded-full text-puma-gold text-xs font-bold tracking-widest mb-6 ${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <Flag className="w-4 h-4" /> FACULTAD DE INGENIERÍA UNAM
          </div>
          <h1 className={`font-teko text-6xl md:text-8xl lg:text-9xl leading-[0.85] font-bold text-white mb-6 ${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            DOMINA EL <br />
            <span className="text-puma-gold">TERRENO</span>
          </h1>
          <p className={`text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto ${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            Llevamos el conocimiento del aula a la pista. Diseño CAD, manufactura avanzada y desarrollo de sistemas en tiempo real para competir al más alto nivel.
          </p>
          <a href="#equipo" className={`inline-flex w-fit mx-auto bg-puma-gold text-black font-bold px-8 py-4 text-lg hover:bg-white hover:scale-105 transition-all items-center gap-2 ${heroInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            CONOCE EL PROYECTO <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* MARQUEE TEXT */}
      <div className="w-full bg-puma-gold py-3 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee font-teko text-2xl md:text-3xl text-black font-bold tracking-widest flex gap-8">
          <span>• DISEÑO ALL TERRAIN 2026</span>
          <span>• INGENIERÍA UNAM</span>
          <span>• DESARROLLO DE HARDWARE</span>
          <span>• RENDIMIENTO OFF-ROAD</span>
          <span>• DISEÑO ALL TERRAIN 2026</span>
          <span>• INGENIERÍA UNAM</span>
          <span>• DESARROLLO DE HARDWARE</span>
          <span>• RENDIMIENTO OFF-ROAD</span>
        </div>
      </div>

{/* TABS SECTION (Equipo / Visión / Miembros) */}
      <section id="equipo" ref={aboutRef} className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Imagen Fija (Solo pegajosa en escritorio) */}
          <div className={`${aboutInView ? 'animate-fade-in-up' : 'opacity-0'} lg:sticky lg:top-24`} style={{ animationDelay: '0.1s' }}>
            <img src="/Puma2.jpeg" alt="Buggy frente a Biblioteca Central UNAM" className="w-full rounded-lg shadow-[0_0_40px_rgba(197,163,101,0.15)] border border-white/10 object-cover h-[300px] lg:h-[500px]" />
          </div>

          {/* Contenido Interactivo (Lado Derecho) */}
          <div className={`${aboutInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            
            {/* Botones de Pestañas (flex-wrap para celular) */}
            <div className="flex flex-wrap gap-4 md:gap-6 mb-8 border-b border-white/10 pb-2">
              <button 
                onClick={() => setActiveTab('QUIENES_SOMOS')}
                className={`font-teko text-xl md:text-2xl tracking-wide transition-all ${activeTab === 'QUIENES_SOMOS' ? 'text-puma-gold border-b-2 border-puma-gold' : 'text-gray-500 hover:text-white'}`}
              >
                ¿QUIÉNES SOMOS?
              </button>
              <button 
                onClick={() => setActiveTab('VISION')}
                className={`font-teko text-xl md:text-2xl tracking-wide transition-all ${activeTab === 'VISION' ? 'text-puma-gold border-b-2 border-puma-gold' : 'text-gray-500 hover:text-white'}`}
              >
                NUESTRA VISIÓN
              </button>
              <button 
                onClick={() => setActiveTab('MIEMBROS')}
                className={`font-teko text-xl md:text-2xl tracking-wide transition-all ${activeTab === 'MIEMBROS' ? 'text-puma-gold border-b-2 border-puma-gold' : 'text-gray-500 hover:text-white'}`}
              >
                MIEMBROS
              </button>
            </div>

            {/* Contenido Dinámico según la Pestaña Activa */}
            <div className="min-h-[300px]">
              
              {activeTab === 'QUIENES_SOMOS' && (
                <div className="animate-fade-in-up">
                  <h2 className="font-teko text-4xl md:text-6xl mb-6">NUESTRO <span className="text-puma-gold">MOTOR</span></h2>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                    Somos una escudería multidisciplinaria conformada por estudiantes apasionados por el automovilismo deportivo. No solo ensamblamos piezas; calculamos estructuras, programamos telemetría, modelamos en 3D cada componente y superamos los límites de la ingeniería para construir un vehículo capaz de soportar cualquier obstáculo.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#111] p-6 border border-white/5 rounded-sm">
                      <Wrench className="w-8 h-8 text-puma-gold mb-4" />
                      <h3 className="font-bold text-xl mb-2">Diseño y Manufactura</h3>
                      <p className="text-sm text-gray-500">Geometría de suspensión, modelado avanzado y ensamble de precisión.</p>
                    </div>
                    <div className="bg-[#111] p-6 border border-white/5 rounded-sm">
                      <Cpu className="w-8 h-8 text-puma-gold mb-4" />
                      <h3 className="font-bold text-xl mb-2">Sistemas Integrados</h3>
                      <p className="text-sm text-gray-500">Redes de sensores y análisis de datos en tiempo real.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'VISION' && (
                <div className="animate-fade-in-up">
                  <h2 className="font-teko text-4xl md:text-6xl mb-6">MIRANDO AL <span className="text-puma-gold">FUTURO</span></h2>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                    Nuestra visión es consolidar a Puma Off-Road como la escudería de ingeniería más competitiva y avanzada de México. Buscamos trascender en competencias internacionales Baja SAE, demostrando que la manufactura, el talento y la innovación creados en la UNAM están a la altura de los mejores del mundo.
                  </p>
                  
                  <div className="bg-puma-gold/10 p-6 border border-puma-gold/30 rounded-sm flex items-start gap-4">
                    <Target className="w-10 h-10 text-puma-gold shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-puma-gold">Nuestra Meta 2026</h3>
                      <p className="text-gray-300">Implementar sistemas de telemetría de próxima generación y reducir el peso del chasis en un 15% para maximizar el rendimiento en pistas internacionales.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'MIEMBROS' && (
                <div className="animate-fade-in-up">
                  <h2 className="font-teko text-4xl md:text-6xl mb-6">EL <span className="text-puma-gold">TALENTO</span></h2>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                    Detrás de la máquina, hay un equipo de futuros ingenieros dedicando horas de cálculo, soldadura y programación.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Tarjetas de Miembros */}
                    <div className="flex items-center gap-4 bg-[#111] p-4 rounded-sm border border-white/5 hover:border-puma-gold/50 transition-colors">
                      <div className="w-12 h-12 shrink-0 bg-puma-gold/20 rounded-full flex items-center justify-center text-puma-gold">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold">Capitanía</div>
                        <div className="text-xs text-gray-500">Dirección General</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#111] p-4 rounded-sm border border-white/5 hover:border-puma-gold/50 transition-colors">
                      <div className="w-12 h-12 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white">
                        <Wrench className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold">Mecánica</div>
                        <div className="text-xs text-gray-500">Suspensión y Chasis</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#111] p-4 rounded-sm border border-white/5 hover:border-puma-gold/50 transition-colors">
                      <div className="w-12 h-12 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold">Electrónica</div>
                        <div className="text-xs text-gray-500">Telemetría y Software</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#111] p-4 rounded-sm border border-white/5 hover:border-puma-gold/50 transition-colors">
                      <div className="w-12 h-12 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold">Negocios</div>
                        <div className="text-xs text-gray-500">Patrocinios y Costos</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
      
      {/* AWARDS SECTION */}
      <section id="logros" ref={awardRef} className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Trophy className={`w-16 h-16 text-puma-gold mx-auto mb-6 ${awardInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }} />
          <h2 className={`font-teko text-6xl text-white mb-16 ${awardInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            EXCELENCIA EN <span className="text-puma-gold">COMPETICIÓN</span>
          </h2>
          
          <div className={`relative max-w-5xl mx-auto ${awardInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <img src="/Puma3.jpeg" alt="Tercer lugar en diseño" className="w-full rounded-xl shadow-2xl border border-puma-gold/20" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12 text-left rounded-xl">
              <h3 className="font-teko text-5xl md:text-7xl text-puma-gold drop-shadow-lg">3º LUGAR EN DISEÑO</h3>
              <p className="text-xl md:text-2xl font-bold tracking-widest text-white">ALL TERRAIN 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS SECTION */}
      <section id="patrocinadores" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-teko text-4xl md:text-5xl text-black mb-12">ALIADOS Y <span className="text-puma-gold">PATROCINADORES</span></h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            <img src="/polaris.png" alt="Polaris" className="h-10 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/altair.png" alt="Altair" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/infra.png" alt="INFRA" className="h-10 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/grupossc.png" alt="Grupo SSC" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/xpertcad.png" alt="xpertcad" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer id="contacto" className="py-16 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 border-b border-white/10 pb-12 mb-8">
          
          {/* Logo e Institución */}
          <div className="flex items-center gap-4">
            <img src="/PumaLogo.jpeg" alt="Logo Footer" className="h-16 w-16 rounded-md" />
            <div>
              <h4 className="font-teko text-3xl">PUMA OFF-ROAD</h4>
              <p className="text-gray-500 text-sm">Facultad de Ingeniería, UNAM</p>
            </div>
          </div>

          {/* Información de Contacto Extraída */}
          <div className="flex flex-col gap-4 text-gray-400 text-sm font-medium">
            <a href="tel:+525522954829" className="flex items-center gap-3 hover:text-puma-gold transition-colors">
              <Phone className="w-5 h-5 text-puma-gold" /> +52 55 2295 4829
            </a>
            <a href="mailto:fi.bajasae.unam@gmail.com" className="flex items-center gap-3 hover:text-puma-gold transition-colors">
              <Mail className="w-5 h-5 text-puma-gold" /> fi.bajasae.unam@gmail.com
            </a>
            <a href="https://www.instagram.com/pumaoffroad?igsh=Zm1mOGF2M3RodjBq" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-puma-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-puma-gold">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              @pumaoffroad
            </a>
          </div>
          
          {/* Formulario de Patrocinios Funcional con FormSubmit */}
          <form 
            action="https://formsubmit.co/fi.bajasae.unam@gmail.com" 
            method="POST" 
            className="flex flex-col md:flex-row gap-4 w-full lg:w-auto"
          >
            <input type="hidden" name="_subject" value="¡Nuevo interesado en patrocinar a Puma Off-Road!" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_template" value="table" />
            
            <input 
              type="email" 
              name="email" 
              placeholder="Tu correo para patrocinios" 
              required 
              className="bg-[#111] border border-white/20 text-white px-4 py-3 min-w-[250px] focus:outline-none focus:border-puma-gold w-full" 
            />
            <button 
              type="submit" 
              className="bg-puma-gold text-black font-bold px-8 py-3 hover:bg-white transition-colors whitespace-nowrap"
            >
              ENVIAR
            </button>
          </form>

        </div>
        
        <div className="text-center text-gray-600 text-sm font-medium tracking-wide">
          &copy; 2026 Puma Off-Road Team. Todos los derechos reservados.
        </div>
      </footer>

    </div>
  );
}

export default App;