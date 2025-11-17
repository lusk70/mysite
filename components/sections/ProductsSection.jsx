'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: '純米大吟醸',
      description: '最高級の米を丁寧に磨き上げた逸品',
      price: '¥3,500',
    },
    {
      id: 2,
      name: '本醸造',
      description: '伝統の技が光る定番商品',
      price: '¥2,000',
    },
    {
      id: 3,
      name: '生酒',
      description: 'フレッシュな香りと味わい',
      price: '¥2,500',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-sake-cream">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-sake-dark">
          主要商品
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-sake-dark to-sake-brown flex items-center justify-center text-5xl">
                🍶
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-sake-dark mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <p className="text-2xl font-bold text-sake-brown mb-4">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://example-shop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sake-dark hover:bg-sake-brown text-sake-cream px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            ショップを見る
          </a>
        </div>
      </div>
    </section>
  )
}
