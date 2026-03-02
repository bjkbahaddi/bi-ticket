import { createClient } from '@supabase/supabase-js'

// ربط الموقع بقاعدة البيانات باستخدام المفاتيح التي وضعتها
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function HomePage() {
  // سحب الفعاليات من جدول events
  const { data: events } = await supabase.from('events').select('*')

  return (
    <main className="min-h-screen bg-slate-50 p-8" dir="rtl">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">الفعاليات المتاحة</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {events?.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
            <img src={event.image_url} alt={event.title} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
            <p className="text-slate-500 mb-4">{event.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-black text-blue-600">{event.price} ر.س</span>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700">حجز تذكرة</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}