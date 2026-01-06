import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">💧</span>
              <span className="font-bold text-xl text-white">Ejetar Água</span>
            </div>
            <p className="text-sm text-gray-400">
              Ferramenta gratuita para ejetar água do alto-falante do seu celular.
            </p>
          </div>

          {/* Guias */}
          <div>
            <h3 className="text-white font-semibold mb-4">Guias</h3>
            <ul className="space-y-2">
              <li><Link href="/guias/celular-molhado" className="text-sm hover:text-primary transition">Celular Molhado</Link></li>
              <li><Link href="/guias/iphone" className="text-sm hover:text-primary transition">iPhone</Link></li>
              <li><Link href="/guias/android" className="text-sm hover:text-primary transition">Android</Link></li>
              <li><Link href="/guias/alto-falante" className="text-sm hover:text-primary transition">Alto-Falante</Link></li>
            </ul>
          </div>

          {/* Mais Recursos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><Link href="/guias/som-ejecao-agua" className="text-sm hover:text-primary transition">Som de Ejeção</Link></li>
              <li><Link href="/guias/prevencao" className="text-sm hover:text-primary transition">Prevenção</Link></li>
              <li><Link href="/guias/solucoes" className="text-sm hover:text-primary transition">Soluções</Link></li>
              <li><Link href="/guias/problemas" className="text-sm hover:text-primary transition">Problemas Comuns</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li><Link href="/guias" className="text-sm hover:text-primary transition">Todos os Guias</Link></li>
              <li><Link href="/" className="text-sm hover:text-primary transition">Ferramenta</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Ejetar Água. Todos os direitos reservados.</p>
          <p className="mt-2">
            <strong>Aviso:</strong> Esta ferramenta não substitui assistência técnica profissional. Em caso de danos graves, procure um técnico especializado.
          </p>
        </div>
      </div>
    </footer>
  )
}
