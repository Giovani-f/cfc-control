// import Image from 'next/image'

export default function CallToAction() {
  return (
    <section className="bg-slate-50">
      <div className="">
        <div className="relative isolate items-center justify-center overflow-hidden bg-gray-900 px-6 py-20 sm:px-16 lg:flex lg:gap-x-20 lg:px-24 lg:py-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.3"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={0.5} stopColor="#DA2C43" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto flex max-w-2xl flex-col text-center lg:py-32">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Transforme sua Autoescola. <br /> Comece a usar nossa plataforma
              agora.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Descubra o poder da gestão simplificada com nossa demonstração
              personalizada.
            </p>

            <div className=" mt-16 flex justify-center gap-x-6">
              <a
                className="group inline-flex items-center justify-center rounded-full bg-red-400 px-16 py-5 text-sm font-semibold text-white hover:bg-red-300 hover:text-gray-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-red-300 active:text-gray-700 md:px-20"
                href="/register"
              >
                Solicitar demonstração <span className="ml-2">{'->'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
