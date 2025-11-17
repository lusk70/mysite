export const metadata = {
  title: '会社概要 | mysite',
  description: '企業情報と事業内容についてご紹介します',
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* ページヘッダー */}
      <div className="bg-gradient-to-r from-sake-dark to-sake-brown text-sake-cream py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">会社概要</h1>
          <p className="text-sake-cream/90">企業情報とビジョン</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* 企業基本情報 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sake-dark mb-6">企業基本情報</h2>
          <div className="bg-sake-cream rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 font-semibold mb-1">企業名</p>
              <p className="text-lg text-sake-dark mb-4">mysite</p>

              <p className="text-gray-600 font-semibold mb-1">設立年月</p>
              <p className="text-lg text-sake-dark mb-4">明治35年（1902年）</p>

              <p className="text-gray-600 font-semibold mb-1">所在地</p>
              <p className="text-lg text-sake-dark">〒000-0000 新潟県南魚沼市</p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold mb-1">事業内容</p>
              <p className="text-lg text-sake-dark mb-4">日本酒の製造・販売</p>

              <p className="text-gray-600 font-semibold mb-1">代表者名</p>
              <p className="text-lg text-sake-dark mb-4">山田 太郎</p>

              <p className="text-gray-600 font-semibold mb-1">従業員数</p>
              <p className="text-lg text-sake-dark">45名</p>
            </div>
          </div>
        </section>

        {/* 企業理念 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sake-dark mb-6">企業理念</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-sake-dark rounded-lg p-6">
              <h3 className="text-xl font-bold text-sake-brown mb-3">ミッション</h3>
              <p className="text-gray-700">
                伝統の技を守りながら、最高品質の日本酒を通じて、
                お客様に感動と喜びをお届けする。
              </p>
            </div>
            <div className="bg-white border-2 border-sake-dark rounded-lg p-6">
              <h3 className="text-xl font-bold text-sake-brown mb-3">ビジョン</h3>
              <p className="text-gray-700">
                日本酒文化を世界に広め、地域と共に成長し、
                次世代に誇りある企業を残す。
              </p>
            </div>
            <div className="bg-white border-2 border-sake-dark rounded-lg p-6">
              <h3 className="text-xl font-bold text-sake-brown mb-3">バリュー</h3>
              <p className="text-gray-700">
                品質第一、社員を大切に、地域貢献、
                常なる改善と革新。
              </p>
            </div>
          </div>
        </section>

        {/* 事業内容説明 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sake-dark mb-6">事業内容</h2>
          <div className="bg-sake-cream rounded-lg p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              当社は、明治35年の創業以来、122年間にわたって、
              新潟県南魚沼地域の良質な水と地元産の米を使用し、
              伝統的な日本酒製造技術と現代的な管理手法を融合させた
              高品質な日本酒を製造・販売してきました。
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              私たちの日本酒は、国内外の多くのコンクールで受賞を重ね、
              酒好きから愛される逸品として知られています。
            </p>
            <p className="text-gray-700 leading-relaxed">
              品質へのこだわり、職人のプライド、地域への感謝の気持ちを
              大切にしながら、次の時代へ日本酒文化を繋いでいきます。
            </p>
          </div>
        </section>

        {/* 主要商品 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sake-dark mb-6">主要商品</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-sake-dark to-sake-brown flex items-center justify-center text-5xl">
                🍶
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-sake-dark mb-2">純米大吟醸</h3>
                <p className="text-gray-600 text-sm mb-3">
                  最高級の米を丁寧に磨き上げた、香り高い逸品です。
                  特別な日のお供に。
                </p>
                <p className="text-2xl font-bold text-sake-brown">¥3,500</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-sake-dark to-sake-brown flex items-center justify-center text-5xl">
                🍶
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-sake-dark mb-2">本醸造</h3>
                <p className="text-gray-600 text-sm mb-3">
                  伝統の技が光る定番商品。飲み飽きない味わいが特徴です。
                  日常のお供に。
                </p>
                <p className="text-2xl font-bold text-sake-brown">¥2,000</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-sake-dark to-sake-brown flex items-center justify-center text-5xl">
                🍶
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-sake-dark mb-2">生酒</h3>
                <p className="text-gray-600 text-sm mb-3">
                  フレッシュで爽やかな香りと味わい。季節限定品です。
                </p>
                <p className="text-2xl font-bold text-sake-brown">¥2,500</p>
              </div>
            </div>
          </div>
        </section>

        {/* 企業のHistory */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sake-dark mb-6">企業のHistory</h2>
          <div className="relative">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-sake-brown">1902年</div>
                <div className="text-gray-700">創業 - 南魚沼地方で日本酒製造を開始</div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-sake-brown">1950年</div>
                <div className="text-gray-700">全国新酒鑑評会で金賞を受賞</div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-sake-brown">1985年</div>
                <div className="text-gray-700">ISO 9001認定 品質管理システムの導入</div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-sake-brown">2000年</div>
                <div className="text-gray-700">オンラインショップをオープン</div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-sake-brown">2020年</div>
                <div className="text-gray-700">醸造蔵の全面リノベーション完了</div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-sake-brown">現在</div>
                <div className="text-gray-700">次世代への技術継承と新商品開発を推進中</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
