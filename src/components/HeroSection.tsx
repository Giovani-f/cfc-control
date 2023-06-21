import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="body-font h-full bg-custom-black pt-10 text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="mb-6 font-bold text-white sm:text-5xl lg:text-5xl">
            Dirija sua Autoescola com facilidade
          </h1>
          <p className="mb-16 leading-relaxed text-white">
            Gerencie seus alunos, instrutores, aulas e horários de forma
            eficiente com nossa plataforma amigável.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex rounded-md border-0 bg-custom-yellow-400 px-6 py-4 text-lg font-medium text-custom-black hover:bg-custom-yellow-500 focus:outline-none lg:px-5">
              Solicitar demonstração {'->'}
            </button>
          </div>
        </div>
        <div className="shadow-lg md:w-1/2 lg:w-full lg:max-w-3xl">
          <Image
            width={768}
            height={549}
            className="rounded object-cover object-center"
            alt="hero"
            src="https://source.unsplash.com/4STq2B24S1k"
          />
        </div>
      </div>
    </section>
  )
}
