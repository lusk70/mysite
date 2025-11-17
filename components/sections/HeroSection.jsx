'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-96 md:h-screen bg-gradient-to-br from-sake-dark to-sake-brown flex items-center justify-center text-center text-sake-cream overflow-hidden">
      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sake-cream rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sake-cream rounded-full mix-blend-screen"></div>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          mysite
        </h1>
        <p className="text-xl md:text-2xl mb-6 font-light">
          日本酒製造を行う街の醸造所
        </p>
        <p className="text-lg md:text-xl mb-8 text-sake-cream/90">
          伝統と革新が融合した日本酒をお届けします
        </p>
        <Link
          href="/about"
          className="inline-block bg-sake-brown hover:bg-opacity-80 text-sake-cream px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
        >
          詳しく知る
        </Link>
      </div>
    </section>
  )
}
