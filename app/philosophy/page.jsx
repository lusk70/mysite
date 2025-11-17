export const metadata = {
  title: '思いを語る | mysite',
  description: '経営陣の想いと企業の価値観についてお伝えします',
}

export default function Philosophy() {
  return (
    <div className="min-h-screen bg-white">
      {/* ページヘッダー */}
      <div className="bg-gradient-to-r from-sake-dark to-sake-brown text-sake-cream py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">思いを語る</h1>
          <p className="text-sake-cream/90">日本酒造りへの想い</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* 経営陣メッセージ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sake-dark mb-8">経営陣メッセージ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-sake-dark to-sake-brown rounded-lg h-80 flex items-center justify-center text-6xl">
              👤
            </div>
            <div className="bg-sake-cream rounded-lg p-8">
              <h3 className="text-2xl font-bold text-sake-dark mb-2">
                代表取締役 山田 太郎
              </h3>
              <p className="text-gray-600 mb-4">京都大学卒業後、家業に従事</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                122年前、祖父の代に創業したこの醸造所。
                私たちが大切にしてきたのは、「ただ酒を造る」のではなく、
                「人の心に届く酒を造る」という思いです。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                毎年同じように酒を造っているわけではありません。
                米の出来、水の状態、季節の移ろい...
                自然が私たちに与えてくれる全ての変化を読み取り、
                その年その年の最高の酒を目指しています。
              </p>
              <p className="text-gray-700 leading-relaxed">
                100年後も200年後も、「mysite」が
                人々に愛される酒蔵であり続けるよう、
                日々精進する所存です。
              </p>
            </div>
          </div>
        </section>

        {/* 製造理念 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sake-dark mb-6">製造理念</h2>
          <div className="bg-gradient-to-r from-sake-cream to-white rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-sake-dark mb-4">
              「米と水と愛」
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              日本酒造りの基本は、米、水、麹、酵母。
              この単純明快な材料から、複雑で深い味わいが生まれます。
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              私たちは、地元産の最高級米を選定し、
              南魚沼の雪解け水を使用しています。
              ただし、最も大切なのは、これらを扱う職人の「心」です。
            </p>
            <p className="text-gray-700 leading-relaxed">
              毎日の仕込み、毎晩の寝かせ、毎朝の確認...
              職人の目、耳、鼻、手が感じる全てが、
              最高の日本酒を造るための「愛」なのです。
            </p>
          </div>
        </section>

        {/* こだわりポイント */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sake-dark mb-6">こだわりポイント</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-sake-dark rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-xl font-bold text-sake-dark mb-3">素材選定</h3>
              <p className="text-gray-700">
                毎年最も良い米を見極め、
                南魚沼の軟水を使用します。
                素材の質が全てを決めます。
              </p>
            </div>

            <div className="bg-white border-2 border-sake-dark rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏯</div>
              <h3 className="text-xl font-bold text-sake-dark mb-3">伝統技法</h3>
              <p className="text-gray-700">
                江戸時代から受け継がれた手作りの麹。
                機械では出せない、手の温もりを大切にしています。
              </p>
            </div>

            <div className="bg-white border-2 border-sake-dark rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-sake-dark mb-3">時間をかける</h3>
              <p className="text-gray-700">
                急速発酵ではなく、低温でゆっくり発酵させます。
                時間が深い味わいを生み出します。
              </p>
            </div>

            <div className="bg-white border-2 border-sake-dark rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-bold text-sake-dark mb-3">品質管理</h3>
              <p className="text-gray-700">
                ISO認定の最新検査機器で、
                品質を厳密に管理しています。
              </p>
            </div>
          </div>
        </section>

        {/* 地域への想い */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sake-dark mb-6">地域への想い</h2>
          <div className="bg-sake-cream rounded-lg p-8 md:p-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              南魚沼という地域は、私たちにとって単なる「営業地」ではありません。
              ここは私たちの「ふるさと」であり、「母」です。
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              豊かな自然、清廉な水、そして人情深い人々...
              この地域があったからこそ、122年間続いてきました。
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              私たちは、地域の子どもたちへの醸造文化の教育、
              地域のお祭りへの協力、そして地元産業への支援を
              事業の重要な柱と考えています。
            </p>
            <p className="text-gray-700 leading-relaxed">
              利益を上げることと同じくらい、
              この地域に恩返しをすることが、
              私たちの責任だと思っています。
            </p>
          </div>
        </section>

        {/* 今後のビジョン */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sake-dark mb-6">今後のビジョン</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-sake-dark to-sake-brown text-sake-cream rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-3">世界への挑戦</h3>
              <p className="text-sake-cream/90 leading-relaxed">
                日本酒の素晴らしさを世界に知ってもらうため、
                国際展開を進めています。
                2025年までに、アジア5国での販売を目指します。
              </p>
            </div>

            <div className="bg-gradient-to-r from-sake-brown to-sake-dark text-sake-cream rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-3">次世代育成</h3>
              <p className="text-sake-cream/90 leading-relaxed">
                若き職人たちに、全力で技術と想いを伝えていきます。
                彼らが100年後の「mysite」を支える柱になるよう、
                教育投資を続けていきます。
              </p>
            </div>

            <div className="bg-gradient-to-r from-sake-dark to-sake-brown text-sake-cream rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-3">イノベーション</h3>
              <p className="text-sake-cream/90 leading-relaxed">
                伝統を守りながらも、新しい技術への挑戦を止めません。
                持続可能な製造方法の研究開発、
                そしてSDGsへの貢献を目指します。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
