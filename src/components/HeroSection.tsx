export default function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 text-center sm:px-6 lg:px-8 lg:pt-32">
        <h1 className="font-display mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-7xl">
          Gerencie sua{' '}
          <span className="relative whitespace-nowrap text-amber-400">
            Autoescola
          </span>{' '}
          de forma simples
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          Simplifique, otimize e modernize seus processos com nossa plataforma
          de gestão especializada para autoescolas
        </p>
        <div className="mb-24 mt-16 flex justify-center gap-x-6">
          <a
            className="group inline-flex items-center justify-center rounded-full bg-slate-900 px-16 py-5 text-sm font-semibold text-white hover:bg-slate-700 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-800 active:text-slate-300 md:px-20"
            href="/register"
          >
            Solicitar demonstração <span className="ml-2">{'->'}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
