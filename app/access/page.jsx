'use client'

import { useState } from 'react'

export default function Access() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    content: '',
    type: 'inquiry',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // フォーム送信処理（実装例）
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        content: '',
        type: 'inquiry',
      })
    }, 3000)
  }

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

        {/* お問い合わせフォーム */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-sake-dark mb-6">お問い合わせ</h2>
          <div className="bg-white border-2 border-sake-dark rounded-lg p-8">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                ✓ お問い合わせいただきありがとうございます。
                確認次第、ご連絡させていただきます。
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    氏名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sake-dark"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sake-dark"
                    placeholder="example@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  電話番号 (任意)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sake-dark"
                  placeholder="025-XXX-XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ご用件 <span className="text-red-500">*</span>
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sake-dark"
                >
                  <option value="inquiry">お問い合わせ</option>
                  <option value="visit">見学予約</option>
                  <option value="business">事業提携</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sake-dark resize-none"
                  placeholder="お問い合わせ内容をご入力ください"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-sake-dark hover:bg-sake-brown text-sake-cream px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                送信する
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
