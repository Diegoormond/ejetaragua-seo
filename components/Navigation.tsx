'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">💧</span>
              <span className="font-bold text-xl text-primary">Ejetar Água</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition">
              Início
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition flex items-center">
                Guias
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/guias/celular-molhado" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Celular Molhado
                  </Link>
                  <Link href="/guias/iphone" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    iPhone
                  </Link>
                  <Link href="/guias/android" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Android
                  </Link>
                  <Link href="/guias/alto-falante" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Alto-Falante
                  </Link>
                  <Link href="/guias/som-ejecao-agua" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Som de Ejeção
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/guias" className="text-gray-700 hover:text-primary transition">
              Todos os Guias
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Início
            </Link>
            <Link href="/guias" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Todos os Guias
            </Link>
            <div className="pl-3 pt-2 pb-2 text-xs font-semibold text-gray-500 uppercase">
              Categorias
            </div>
            <Link href="/guias/celular-molhado" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              Celular Molhado
            </Link>
            <Link href="/guias/iphone" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              iPhone
            </Link>
            <Link href="/guias/android" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              Android
            </Link>
            <Link href="/guias/alto-falante" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              Alto-Falante
            </Link>
            <Link href="/guias/som-ejecao-agua" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              Som de Ejeção
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
