'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-sake-dark text-sake-cream shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className="font-bold text-2xl">
          mysite
        </Link>

        {/* デスクトップナビゲーション */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="hover:text-white transition">
            会社概要
          </Link>
          <Link href="/philosophy" className="hover:text-white transition">
            思いを語る
          </Link>
          <Link href="/access" className="hover:text-white transition">
            アクセス
          </Link>
          <a
            href="https://example-shop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sake-brown hover:bg-opacity-80 px-4 py-2 rounded transition"
          >
            ショップ
          </a>
        </div>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden text-sake-cream text-2xl"
          onClick={toggleMobileMenu}
          aria-label="メニュー"
        >
          ☰
        </button>
      </nav>

      {/* モバイルナビゲーション */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sake-brown text-sake-cream">
          <div className="flex flex-col gap-4 px-4 py-4">
            <Link
              href="/about"
              className="hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              会社概要
            </Link>
            <Link
              href="/philosophy"
              className="hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              思いを語る
            </Link>
            <Link
              href="/access"
              className="hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              アクセス
            </Link>
            <a
              href="https://example-shop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sake-dark hover:bg-opacity-80 px-4 py-2 rounded transition inline-block"
            >
              ショップ
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
