import AccessClient from '@/components/AccessClient'

export const metadata = {
  title: 'アクセス | mysite',
  description: 'アクセス情報と地図',
}

export default function Access() {
  return (
    <div className="min-h-screen bg-white">
      {/* ページヘッダー */}
      <div className="bg-gradient-to-r from-sake-dark to-sake-brown text-sake-cream py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">アクセス</h1>
          <p className="text-sake-cream/90">醸造所へのアクセス</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* 基本情報 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sake-dark mb-6">基本情報</h2>
          <div className="bg-sake-cream rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 font-semibold mb-2">企業名</p>
              <p className="text-lg text-sake-dark mb-6">mysite</p>

              <p className="text-gray-600 font-semibold mb-2">住所</p>
              <p className="text-lg text-sake-dark mb-6">
                〒000-0000 新潟県南魚沼市大字中野<br />
                （確実な住所はダミーです）
              </p>

              <p className="text-gray-600 font-semibold mb-2">電話番号</p>
              <p className="text-lg text-sake-dark mb-6">025-XXX-XXXX</p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold mb-2">営業時間</p>
              <p className="text-lg text-sake-dark mb-6">9:00 ～ 17:00</p>

              <p className="text-gray-600 font-semibold mb-2">定休日</p>
              <p className="text-lg text-sake-dark mb-6">日曜日、祝日</p>

              <p className="text-gray-600 font-semibold mb-2">駐車場</p>
              <p className="text-lg text-sake-dark">20台完備</p>
            </div>
          </div>
        </section>

        {/* 地図 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sake-dark mb-6">地図</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl mb-4">📍</p>
              <p className="text-gray-600">
                地図表示エリア<br />
                (Google Mapsの埋め込みをここに配置)
              </p>
            </div>
          </div>
        </section>

        {/* アクセス方法 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sake-dark mb-6">アクセス方法</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 電車 */}
            <div className="bg-white border-2 border-sake-dark rounded-lg p-6">
              <h3 className="text-2xl font-bold text-sake-dark mb-4">🚆 電車でのアクセス</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-semibold text-sake-brown">最寄り駅</p>
                  <p>JR上越線 六日町駅</p>
                </div>
                <div>
                  <p className="font-semibold text-sake-brown">乗車時間</p>
                  <p>東京駅から約2時間30分</p>
                </div>
                <div>
                  <p className="font-semibold text-sake-brown">駅からのアクセス</p>
                  <p>タクシー：約15分<br />バス：約25分</p>
                </div>
              </div>
            </div>

            {/* 車 */}
            <div className="bg-white border-2 border-sake-dark rounded-lg p-6">
              <h3 className="text-2xl font-bold text-sake-dark mb-4">🚗 車でのアクセス</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-semibold text-sake-brown">最寄りIC</p>
                  <p>関越自動車道 大出ICより</p>
                </div>
                <div>
                  <p className="font-semibold text-sake-brown">走行時間</p>
                  <p>東京から約3時間<br />新潟市から約1時間</p>
                </div>
                <div>
                  <p className="font-semibold text-sake-brown">駐車場</p>
                  <p>敷地内に20台完備<br />無料</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 見学受付情報 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sake-dark mb-6">見学受付情報</h2>
          <div className="bg-sake-cream rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 font-semibold mb-2">見学受付</p>
                <p className="text-lg text-sake-dark mb-6">可能</p>

                <p className="text-gray-600 font-semibold mb-2">受付時間</p>
                <p className="text-lg text-sake-dark mb-6">10:00 / 14:00（1日2回）</p>

                <p className="text-gray-600 font-semibold mb-2">所要時間</p>
                <p className="text-lg text-sake-dark">約60分</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold mb-2">人数制限</p>
                <p className="text-lg text-sake-dark mb-6">1回あたり10名まで</p>

                <p className="text-gray-600 font-semibold mb-2">予約方法</p>
                <p className="text-lg text-sake-dark mb-6">1週間前までにお問い合わせください</p>

                <p className="text-gray-600 font-semibold mb-2">料金</p>
                <p className="text-lg text-sake-dark">無料（試飲付き）</p>
              </div>
            </div>
          </div>
        </section>

        {/* クライアント側のお問い合わせフォーム */}
        <AccessClient />
      </div>
    </div>
  )
}
