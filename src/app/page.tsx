export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans" dir="rtl">
      {/* Header section - شريط التنقل */}
      <nav className="p-6 bg-white shadow-sm flex justify-between items-center border-b border-slate-100">
        <h1 className="text-3xl font-black text-blue-600 tracking-tighter">bi-ticket</h1>
        <div className="hidden md:flex space-x-8 space-x-reverse font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">الرئيسية</a>
          <a href="#" className="hover:text-blue-600 transition-colors">الفعاليات</a>
          <a href="#" className="hover:text-blue-600 transition-colors">تواصل معنا</a>
        </div>
        <div className="flex gap-3">
          <button className="text-slate-600 font-semibold px-4 py-2 hover:bg-slate-100 rounded-lg transition-all">تسجيل الدخول</button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-blue-700 transition-all">انضم إلينا</button>
        </div>
      </nav>

      {/* Hero section - القسم الرئيسي */}
      <section className="flex flex-col items-center justify-center py-24 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-bold mb-6 animate-fade-in">
          🚀 المنصة رقم #1 لحجز التذاكر في المنطقة
        </div>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.2] text-slate-900">
          تذكرتك لمتعتك القادمة <br/> 
          <span className="text-blue-600">تبدأ بضغطة زر</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed">
          اكتشف أروع الحفلات، الفعاليات الرياضية، والمؤتمرات في مكان واحد. bi-ticket توفر لك تجربة حجز سلسة وآمنة تماماً.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center w-full max-w-md">
          <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            اكتشف جميع الفعاليات
          </button>
          <button className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all">
            أنشئ فعاليتك الآن
          </button>
        </div>
      </section>

      {/* Features section - المميزات */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-24">
        <div className="group bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 text-3xl group-hover:scale-110 transition-transform">⚡</div>
          <h3 className="text-2xl font-bold mb-3">حجز فوري</h3>
          <p className="text-slate-500 leading-relaxed">احصل على تذكرتك عبر بريدك الإلكتروني في أقل من 30 ثانية بعد الدفع.</p>
        </div>
        <div className="group bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all duration-300">
          <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 text-3xl group-hover:scale-110 transition-transform">💳</div>
          <h3 className="text-2xl font-bold mb-3">دفع آمن</h3>
          <p className="text-slate-500 leading-relaxed">ندعم جميع طرق الدفع المحلية والعالمية بأعلى معايير التشفير والأمان.</p>
        </div>
        <div className="group bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300">
          <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 text-3xl group-hover:scale-110 transition-transform">🎟️</div>
          <h3 className="text-2xl font-bold mb-3">تذاكر ذكية</h3>
          <p className="text-slate-500 leading-relaxed">تذاكر برمز QR فريد يسهل عملية الدخول المنظم لكل الفعاليات الكبرى.</p>
        </div>
      </section>

      {/* Footer - التذييل */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <div className="mb-6 text-2xl font-black text-blue-600">bi-ticket</div>
        <p className="text-slate-400">© 2026 bi-ticket. جميع الحقوق محفوظة لمحبي المتعة في العالم العربي.</p>
      </footer>
    </main>
  );
}