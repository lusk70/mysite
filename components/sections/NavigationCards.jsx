import Link from 'next/link'

export default function NavigationCards() {
  const cards = [
    {
      id: 1,
      title: '会社概要',
      description: '企業情報と事業内容についてご紹介します',
      link: '/about',
      icon: '🏢',
    },
    {
      id: 2,
      title: '思いを語る',
      description: '経営陣の想いと企業の価値観をお伝えします',
      link: '/philosophy',
      icon: '💭',
    },
    {
      id: 3,
      title: 'アクセス',
      description: '醸造所への来訪情報をご案内します',
      link: '/access',
      icon: '📍',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-sake-dark">
          詳しく知る
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Link key={card.id} href={card.link}>
              <div className="bg-gradient-to-br from-sake-dark to-sake-brown rounded-lg shadow-lg p-8 text-sake-cream cursor-pointer hover:shadow-2xl hover:scale-105 transition duration-300 transform h-full">
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-sake-cream/90 mb-4">{card.description}</p>
                <span className="inline-block bg-sake-brown hover:bg-opacity-80 px-4 py-2 rounded transition">
                  詳しく見る →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
