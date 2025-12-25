"use client"

import type React from "react"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Calendar, Building } from "lucide-react"

// Extended team data with experience information
const teamMembers = [
	{
		id: "berkay-duzgun",
		name: "Berkay Düzgün",
		role: "CEO",
		bio: "Merhaba, ben Berkay. ASELSAN Konya’da Elektrik-Elektronik öğrencisiyim. Aynı zamanda Corexis grubunun kurucusu ve Deneyap öğrencisiyim. Bugüne kadar birçok Deneyap şenliğinde takım kaptanı olarak yer aldım ve yönettiğim ekiplerle çeşitli dereceler elde ettim. Bunun yanı sıra, Teknofest’te yazılım ve farklı teknolojik alanlarda defalarca yarışmalara katıldım. Elektrik-elektronik, yazılım geliştirme ve yenilikçi teknolojiler üzerine çalışıyor; özellikle sensör sistemleri, gömülü yazılımlar ve otomasyon odaklı projeler geliştiriyorum. Takım çalışmasına uyumlu, araştırmaya meraklı ve problem çözme odaklı biriyim. Hedefim; teknoloji ve mühendisliği birleştirerek, hem akademik hem de profesyonel hayatta yenilikçi çözümler üreten bir mühendis olmak.",
		email: "berkayduzgun42@gmail.com",
		location: "Konya | Türkiye",
		image: "/berkayy.jpeg",
		fullBio:
			"Merhaba, ben Berkay. ASELSAN Konya’da Elektrik-Elektronik öğrencisiyim. Aynı zamanda Corexis grubunun kurucusu ve Deneyap öğrencisiyim. Bugüne kadar birçok Deneyap şenliğinde takım kaptanı olarak yer aldım ve yönettiğim ekiplerle çeşitli dereceler elde ettim. Bunun yanı sıra, Teknofest’te yazılım ve farklı teknolojik alanlarda defalarca yarışmalara katıldım. Elektrik-elektronik, yazılım geliştirme ve yenilikçi teknolojiler üzerine çalışıyor; özellikle sensör sistemleri, gömülü yazılımlar ve otomasyon odaklı projeler geliştiriyorum. Takım çalışmasına uyumlu, araştırmaya meraklı ve problem çözme odaklı biriyim. Hedefim; teknoloji ve mühendisliği birleştirerek, hem akademik hem de profesyonel hayatta yenilikçi çözümler üreten bir mühendis olmak.",
		experiences: [
			{
				company: "Corexis",
				role: "CEO",
				duration: "2025 Temmuz - Halen",
				description:
					"Corexis’in CEO’su olarak, havacılık ve uzay teknolojilerinde yenilikçi çözümler geliştirmeyi hedefleyen genç ve dinamik bir ekibe liderlik ediyorum. Çalışmalarımız uçak, İHA ve uzay araçları tasarımı üzerine yoğunlaşırken; amacım ekibimi sadece yarışmalarda başarıya taşımak değil, aynı zamanda ülkemizin geleceğine katkı sağlayacak sürdürülebilir teknolojiler üretmeye yönlendirmektir. Liderlik anlayışım, takım ruhunu ön planda tutan, disiplinler arası iş birliğini teşvik eden ve vizyonu sürekli ileriye taşıyan bir yaklaşıma dayanıyor. Corexis çatısı altında, Teknofest başta olmak üzere ulusal ve uluslararası yarışmalarda projeler geliştiriyor, yapay zekâdan otonom sistemlere kadar geniş bir alanda inovatif çalışmalar yürütüyorum. Uzun vadeli hedefim, Corexis’i sadece genç bir teknoloji takımı olmaktan çıkarıp, küresel ölçekte rekabet edebilen ve havacılık-uzay ekosisteminde söz sahibi bir oluşuma dönüştürmektir.",
			},
			{
				company: "Aselsan Konya",
				role: "Öğrenci",
				duration: "2022 Eylül - Halen",
				description:
					"Konya’daki Aselsan fabrikasında, mühendislerden elektronik süreçler ve üretim ortamı hakkında bilgi edindim. Fabrikanın işleyişini gözlemleyerek, üretim süreçleri ve teknik ekipmanların kullanımını deneyimledim. Bu süreçte iş ortamı kültürünü ve mühendislik uygulamalarını yakından gözlemleme fırsatı buldum.",
			},
			{
				company: "Aselsan Konya MTAL",
				role: "Öğrenci",
				duration: "2022 Eylül - Halen",
				description:
					"Aselsan Konya MTAL’de elektrik-elektronik, analog ve dijital devreler, mikroişlemciler ve savunma elektroniği konularında uygulamalı eğitim aldım. Proteus ve CAT programları ile devre tasarımı ve baskı devre hazırlama çalışmaları yaptım. Akademik derslerle teknik bilgimi pekiştirirken, hem teorik hem de pratik deneyim kazanarak mühendislik alanındaki yetkinliğimi geliştirdim.",
			},
			{
				company: "Deneyap Türkiye",
				role: "Öğrenci",
				duration: "2024 Eylül - Halen",
				description:
					"Deneyap Türkiye’de teknoloji ve STEM projelerinde aktif rol alıyorum. Elektronik, robotik ve yazılım projeleri üzerinde çalışarak yaratıcı çözüm geliştirme becerilerimi artırıyorum. Proje yönetimi ve takım çalışması süreçlerinde deneyim kazanıyor, teknik sunum ve dokümantasyon becerilerimi geliştiriyorum.",
			},
			{
				company: "Elfatek Elektronik Ltd. Şti. ",
				role: "Stajyer",
				duration: "2025 Temmuz - 2025 Temmuz",
				description:
					"Elfatek’teki kısa stajım süresince elektronik devre tasarımı ve test süreçlerinde görev aldım. Yazılım tabanlı kontrol ve otomasyon projeleriyle çalışarak problem çözme ve teknik dokümantasyon becerilerimi geliştirdim. Profesyonel iş ortamını deneyimleyerek iş disiplinimi ve ekip içi iletişim yeteneklerimi güçlendirdim.",
			},
		],
	},
	{
		id: "erva-evin-iltus",
		name: "Erva Evin İltuş",
		role: "CTO",
		bio: "Merhaba, ben Erva Evin İltuş. Meram Fen Lisesi öğrencisiyim. Aynı zamanda Deneyap öğrencisi ve Corexis grubunun bir üyesiyim. Katıldığım proje şenliklerinde takım arkadaşlarımla birlikte birçok derece elde ettim. Şu anda ağırlıklı olarak proje planlama ve sunum alanlarında görev alıyor, ekip çalışmalarında aktif bir rol üstleniyorum. Hayalim, gelecekte uzay ve havacılık alanında çalışmalar yaparak hem ülkeme hem de dünyaya katkılar sunmak. Bu doğrultuda, araştırmaya, öğrenmeye ve ekip çalışmasına büyük önem veriyorum.",
		email: "ervaevin@gmail.com",
		
		location: "Konya | Türkiye",
		image: "/ervaevin.jpg",
		fullBio:
			"Merhaba, ben Erva Evin İltuş. Meram Fen Lisesi öğrencisiyim. Aynı zamanda Deneyap öğrencisi ve Corexis grubunun bir üyesiyim. Katıldığım proje şenliklerinde takım arkadaşlarımla birlikte birçok derece elde ettim. Şu anda ağırlıklı olarak proje planlama ve sunum alanlarında görev alıyor, ekip çalışmalarında aktif bir rol üstleniyorum. Hayalim, gelecekte uzay ve havacılık alanında çalışmalar yaparak hem ülkeme hem de dünyaya katkılar sunmak. Bu doğrultuda, araştırmaya, öğrenmeye ve ekip çalışmasına büyük önem veriyorum.",
		experiences: [
			{
				company: "Corexis",
				role: "CTO",
				duration: "2025 Temmuz - Halen",
				description:
					"Corexis'te CTO olarak, yeni nesil uzay araçları ve ileri teknoloji sistemlerinin geliştirilmesinden sorumluyum. Şirketin teknoloji vizyonunu belirleyerek, Ar-Ge süreçlerini yönetiyor ve çok disiplinli mühendislik ekipleriyle birlikte ölçeklenebilir ve geleceğe dönük çözümler üretiyoruz. Havacılık, yazılım ve üretim alanındaki uzmanlarla yakın iş birliği içinde çalışarak, uzay teknolojileri alanında sınırları zorlayan projelere liderlik ediyorum.",
			},
			{
				company: "Meram Fen Lisesi",
				role: "Öğrenci",
				duration: "2023 Eylül - Halen",
				description:
					"",
			},
			{
				company: "Deneyap Türkiye",
				role: "Öğrenci",
				duration: "2024 Eylül - Halen",
				description:
					"",
			},
		],
	},
	{
		id: "zeynep-ileri",
		name: "Zeynep İleri",
		role: "CTO",
		bio: "Geleceği sadece izlemek değil, onu şekillendirmek istiyorum. Şehir Koleji'nde eğitimime devam eden bir öğrenci olarak yapay zeka mühendisliği hedefiyle kendimi sürekli geliştirmeye odaklanıyorum. Teknolojiye olan ilgim, beni algoritmalar, veri bilimi ve makine öğrenimi gibi alanlarda derinleşmeye yönlendirdi. Her gün yeni şeyler öğrenmeye, problem çözme becerilerimi geliştirmeye ve geleceğin teknolojilerine katkı sunacak projelerde yer almaya istekliyim. Amacım, yalnızca bir mühendis olmak değil; aynı zamanda çözüm üreten, fayda sağlayan ve ilham veren bir teknoloji profesyoneli olmak.",
		email: "zeynepileri@gmail.com",
		
		location: "Konya | Türkiye",
		image: "/zeynepileri.jpg",
		fullBio:
			"Geleceği sadece izlemek değil, onu şekillendirmek istiyorum. Şehir Koleji'nde eğitimime devam eden bir öğrenci olarak yapay zeka mühendisliği hedefiyle kendimi sürekli geliştirmeye odaklanıyorum. Teknolojiye olan ilgim, beni algoritmalar, veri bilimi ve makine öğrenimi gibi alanlarda derinleşmeye yönlendirdi. Her gün yeni şeyler öğrenmeye, problem çözme becerilerimi geliştirmeye ve geleceğin teknolojilerine katkı sunacak projelerde yer almaya istekliyim. Amacım, yalnızca bir mühendis olmak değil; aynı zamanda çözüm üreten, fayda sağlayan ve ilham veren bir teknoloji profesyoneli olmak.",
		experiences: [
			{
				company: "Corexis",
				role: "CTO",
				duration: "2025 Temmuz - Halen",
				description:
					"Corexis’te CTO olarak, şirketin teknolojik vizyonunu şekillendiriyor ve geliştirdiğimiz projelerin teknik altyapısına yön veriyorum. Ar-Ge süreçlerini koordine ediyor, ekibimizin yapay zekâ, otonom sistemler ve ileri mühendislik çalışmalarında yenilikçi çözümler üretmesini sağlıyorum. Amacım, sadece bugünün ihtiyaçlarına cevap veren değil, geleceğin teknolojilerine de yön verecek sistemler ortaya koymak.",
			},
			{
				company: "Konya Şehir Koleji",
				role: "Öğrenci",
				duration: "2024 Eylül - Halen",
				description:
					"",
			},
			{
				company: "Deneyap Türkiye",
				role: "Öğrenci",
				duration: "2024 Eylül - Halen",
				description:
					"",
			},
		],
	},
	{
		id: "berke-duzgun",
		name: "Berke Düzgün",
		role: "Advisor",
		bio: "Full-stack developer passionate about clean code and performance optimization. Builds robust, scalable solutions that power our platform.",
		email: "duzgunberke@gmail.com",
		
		location: "Konya | Türkiye",
		image: "/berke.jpeg",
		fullBio:"Ben Berke Düzgün. Elektronik ve Haberleşme Mühendisliği altyapısını yazılım geliştirme tutkumla birleştirerek kariyerimi Full Stack Development, MLOps ve yapay zekâ çözümleri üzerine inşa ediyorum. Profesyonel deneyimlerim boyunca; sağlık, finans, seyahat ve etkinlik teknolojileri gibi farklı sektörlerde .NET Core, TypeScript, ASP.NET, Docker, RabbitMQ, DDD ve mikroservis mimarileri ile ölçeklenebilir projeler geliştirdim. Hem frontend hem de backend tarafında üretken çözümler ortaya koyarken; ödeme altyapıları, batch sistemleri ve yapay zekâ tabanlı Ar-Ge projelerine katkı sağladım. Aynı zamanda Viveven girişimini kurarak özel yazılım çözümleri ürettim; burada geliştirdiğimiz ürünlerle (VivEvent, Linayzer, VivModel) kullanıcı odaklı ve yenilikçi uygulamalar ortaya koyduk. Teknik becerilerimin yanında, T3 Vakfı’nda mentorluk yaparak gençlere elektronik ve yazılım alanında rehberlik ettim. Bu süreç, bilgi paylaşımının ve ekip ruhunun ne kadar değerli olduğunu bana bir kez daha gösterdi. Yeni teknolojileri yakından takip ediyor, hem kurumsal hem de girişimsel bakış açısıyla değer üretmeye devam ediyorum.",
		experiences: [
			{
				company: "Corexis",
				role: "Advisor",
				duration: "2025 Temmuz - Halen",
				description:
					"Corexis’te danışman olarak görev alıyorum. Ekip içerisindeki teknik karar süreçlerine, stratejik yönlendirmelere ve ürün geliştirme vizyonuna katkı sağlıyorum. Özellikle yazılım mimarisi, yapay zekâ uygulamaları ve ürün ölçeklendirme konularında bilgi birikimimle ekibe rehberlik ediyorum. Danışmanlık rolüm kapsamında; teknolojik yol haritasının oluşturulmasına destek veriyor, genç ekibin proje yönetimi ve Ar-Ge çalışmalarında mentorluk yapıyorum. Amacım, Corexis’in uzun vadeli hedeflerine ulaşmasında teknik bilgi ve deneyimimle stratejik bir bakış açısı kazandırmak.",
			},
			{
				company: "Innovance Consultancy",
				role: "Software Developer",
				duration: "2024 Şubat - Halen",
				description:
					"I worked as a backend developer in ticket and travel applications, focusing on provider-based operations, backoffice systems, web development, and integrations. I developed both the frontend and backend of the GSYIAD backoffice panel for the Galatasaray Board of Directors. I worked in batch systems and payment infrastructures within SIBS. Additionally, I contributed to R&D projects, working in various areas of artificial intelligence.",
			},
			{
				company: "Acıbadem Technology",
				role: "Software Developer",
				duration: "2023 Şubat - 2024 Şubat",
				description:
					"We develop applications for international hospitals and health chains. (Cerebral Plus)",
			},
			{
				company: "T3 Vakfı ",
				role: "Mentor",
				duration: "2022 Mart - 2022 Aralık",
				description:
					"I helped high school friends to control electronics components using Python language to prepare for a nationwide competition. And as the final product, we created a robot that allows them to avoid obstacles and lift and carry the object in front of them.",
			},
		],
	},
	{
		id: "fatma-zisan",
		name: "Fatma Zişan Demir",
		role: "CMO",
		bio: "Merhaba, benim adım Fatma Zişan Demir. Öğrenmeyi, araştırmayı ve kişisel gelişimi seven, çalışkan bir öğrenciyim. Bilime olan ilgim ve azmim, özellikle tıp ve genetik alanlarında bana yardımcı oluyor. Eğitimimin yanında spor faaliyetleriyle de ilgileniyor, böylece takım çalışması ve disiplin becerilerimi geliştiriyorum. Amacım, güçlü bir akademik temel oluşturmak ve bireysel ve toplumsal değer üreten projelerde yer almak. Hırslı, çalışkan ve yeniliklere açık bir kişi olarak bulunduğum her ortamda olumlu katkı sağlamaya gayret ediyorum.",
		email: "fatmazisandemir@gmail.com",
		location: "Konya | Türkiye",
		image: "/zisan.jpg",
		fullBio:
			"Pazarlama ve iletişim dünyası benim için her zaman keşfedilecek yeni bir alan oldu. Corexis’te CMO olarak çalışırken, strateji ve yaratıcılığı birleştirerek markaların hem dijitalde hem de gerçek hayatta güçlü bir etki bırakmasını sağlamaya odaklanıyorum. Kariyerim boyunca farklı sektörlerde deneyimler edindim; sosyal medya kampanyalarından içerik stratejisine, veri analitiğinden marka yönetimine kadar birçok alanda çalıştım. Bu süreçte öğrendiğim en değerli şey, her deneyimin yeni bir bakış açısı kazandırdığı ve her projede kendimi biraz daha geliştirdiğim oldu. Okul yıllarım da benim için hep ilham kaynağı oldu. Eğitim hayatım boyunca öğrendiklerimi pratikle birleştirerek, markaların hikayelerini etkili bir şekilde anlatmanın yollarını keşfettim. İşimde, yenilikçi fikirleri ve stratejik planlamayı birleştirerek hem markalara hem de insanlara değer katmayı hedefliyorum. Her zaman öğrenmeye açık, meraklı ve yaratıcı bir bakış açısıyla ilerliyorum; çünkü inanıyorum ki pazarlama, sadece satış değil, insanlara dokunabilmekle ilgili.",
		experiences: [
			{
				company: "Corexis",
				role: "CMO",
				duration: "2025 Ekim - Halen",
				description:
					"Corexis’te CMO olarak görev almak, benim için hem büyük bir sorumluluk hem de eşsiz bir fırsat. Pazarlama stratejilerimizi sadece satış odaklı değil, aynı zamanda markamızın değerlerini ve vizyonunu yansıtan bir yol haritası olarak görüyoruz. Ekibimizle birlikte, veri odaklı kararlar alıyor, yaratıcı kampanyalar geliştiriyor ve her adımda hedef kitleyle anlamlı bağlar kurmayı amaçlıyoruz. Benim önceliğim, markamızın hem dijitalde hem de gerçek dünyada güçlü ve kalıcı bir iz bırakmasını sağlamak. Pazarlama benim için sadece bir iş değil; insanlarla bağlantı kurmanın, hikayeler paylaşmanın ve marka deneyimini unutulmaz kılmanın bir yolu. Corexis’te, bu vizyonu hayata geçirmek için her gün ilham verici bir ortamda çalışıyorum",
			},
			{
				company: "Meram Fen Lisesi",
				role: "Öğrenci",
				duration: "2023 Eylül - Halen",
				description:
					"",
			},
		],
	},
]

export default function MemberProfilePage() {
	const params = useParams()
	const router = useRouter()
	const [formData, setFormData] = useState({
		subject: "",
		name: "",
		email: "",
		message: "",
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

	// Add mobile menu state (for nav similar to app/page.tsx)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const member = teamMembers.find((m) => m.id === params.id)

	if (!member) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-gray-900 mb-4">Üye Bulunamadı!</h1>
					<Button onClick={() => router.push("/")}>Ana Menüye Dön</Button>
				</div>
			</div>
		)
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus("idle")

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			if (!response.ok) {
				throw new Error('Failed to send message')
			}

			setSubmitStatus("success")
			setFormData({ subject: "", name: "", email: "", message: "" })
		} catch (error) {
			console.error('Error sending message:', error)
			setSubmitStatus("error")
		} finally {
			setIsSubmitting(false)
		}
	}

	const scrollToSection = (sectionId: string) => {
		// Keep existing behavior: navigate back to home or to a root hash.
		if (sectionId === "home") {
			router.push("/")
			return
		}
		router.push(`/#${sectionId}`)
	}

	// Update navigationItems array
	const navigationItems = [
		{ id: "about", label: "Hakkımızda" },
		{ id: "team", label: "Ekibimiz" },
		{ id: "updates", label: "Güncellemeler" },
		{ id: "sponsors", label: "Sponsorlarımız" }, // Add this line
		{ id: "contact", label: "İletişim" }
	]

	return (
		<div className="min-h-screen bg-white font-sans">
			{/* Fixed Navigation - aligned with app/page.tsx nav styles and mobile behavior */}
			<nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
							<img 
								src="/corexislogopng.png" 
								alt="Corexis Logo" 
								className="h-8 w-8 sm:h-10 sm:w-10"
							/>
							<h1 className="text-xl sm:text-2xl font-bold text-gradient-corexis font-serif cursor-pointer" onClick={() => router.push("/")}>Corexis</h1>
						</div>

						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-8">
								{navigationItems.map((item) => (
									<button
										key={item.id}
										onClick={() => scrollToSection(item.id)}
										className="px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-[#E040FB] text-gray-700"
									>
										{item.label}
									</button>
								))}
							</div>
						</div>

						<div className="md:hidden">
							<button
								className="text-gray-700 hover:text-[#7B1FA2] p-2"
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							>
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									{mobileMenuOpen ? (
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
									) : (
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
									)}
								</svg>
							</button>
						</div>
					</div>

					{/* Mobile Navigation Menu */}
					{mobileMenuOpen && (
						<div className="md:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
								{navigationItems.map((item) => (
									<button
										key={item.id}
										onClick={() => {
											scrollToSection(item.id)
											setMobileMenuOpen(false)
										}}
										className="block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-[#E040FB] text-gray-700"
									>
										{item.label}
									</button>
								))}
							</div>
						</div>
					)}
				</div>
			</nav>

			<div className="pt-16 flex min-h-screen">
				{/* Left Sidebar */}
				<div className="w-full lg:w-1/3 bg-slate-50 p-8 lg:sticky lg:top-16 lg:h-screen lg:overflow-y-auto">
					<div className="text-center mb-8">
						<div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
							<img
								src={member.image || "/placeholder.svg"}
								alt={member.name}
								className="w-full h-full object-cover"
							/>
						</div>
						<h1 className="text-3xl font-bold text-gray-900 mb-2 font-serif">{member.name}</h1>
						{/* Use team page role color consistent with main page */}
						<p className="text-xl text-[#9C27B0] font-medium mb-4">{member.role}</p>
					</div>

					<div className="space-y-6">
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3 font-serif">Hakkımda</h3>
							<p className="text-gray-600 leading-relaxed text-sm">{member.fullBio}</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3 font-serif">İletişim Bilgileri</h3>
							<div className="space-y-3">
								<div className="flex items-center text-gray-600">
									<Mail className="h-4 w-4 mr-3 text-[#7B1FA2]" />
									<span className="text-sm">{member.email}</span>
								</div>
								<div className="flex items-center text-gray-600">
									<MapPin className="h-4 w-4 mr-3 text-[#7B1FA2]" />
									<span className="text-sm">{member.location}</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Main Content Area */}
				<div className="flex-1 p-8 lg:p-12">
					{/* About Me Section */}
					<section className="mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Hakkımda</h2>
						<div className="prose prose-lg max-w-none">
							<p className="text-gray-600 leading-relaxed mb-6">{member.fullBio}</p>
							<p className="text-gray-600 leading-relaxed"></p>
						</div>
					</section>

					{/* Experiences Section */}
					<section className="mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Deneyimlerim</h2>
						<div className="space-y-6">
							{member.experiences.map((exp, index) => (
								<Card
									key={index}
									className="border-l-4 border-l-[#7B1FA2] shadow-lg hover:shadow-xl transition-shadow duration-300"
								>
									<CardContent className="p-6">
										<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
											<div className="flex-1">
												<h3 className="text-xl font-semibold text-gray-900 mb-1 font-serif">{exp.role}</h3>
												<div className="flex items-center text-[#9C27B0] mb-2">
													<Building className="h-4 w-4 mr-2" />
													<span className="font-medium">{exp.company}</span>
												</div>
											</div>
											<div className="flex items-center text-gray-500 text-sm">
												<Calendar className="h-4 w-4 mr-2 text-[#7B1FA2]" />
												<span>{exp.duration}</span>
											</div>
										</div>
										<p className="text-gray-600 leading-relaxed">{exp.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</section>

					{/* Contact Form */}
					<section>
						<h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">İletişime Geçin</h2>
						<Card className="shadow-lg">
							<CardContent className="p-8">
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<label
												htmlFor="subject"
												className="block text-sm font-medium text-gray-700 mb-2"
											>
												Konu
											</label>
											<Input
												id="subject"
												name="subject"
												value={formData.subject}
												onChange={handleInputChange}
												placeholder="Konu giriniz..."
												required
												className="w-full"
											/>
										</div>
										<div>
											<label
												htmlFor="name"
												className="block text-sm font-medium text-gray-700 mb-2"
											>
												İsminiz
											</label>
											<Input
												id="name"
												name="name"
												value={formData.name}
												onChange={handleInputChange}
												placeholder="İsminizi giriniz..."
												required
												className="w-full"
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Email Adresiniz
										</label>
										<Input
											id="email"
											name="email"
											type="email"
											value={formData.email}
											onChange={handleInputChange}
											placeholder="Mail adresinizi giriniz..."
											required
											className="w-full"
										/>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Mesajınız
										</label>
										<Textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleInputChange}
											placeholder="Mesajınızı giriniz..."
											rows={6}
											required
											className="w-full"
										/>
									</div>

									<Button
										type="submit"
										disabled={isSubmitting}
										className="w-full md:w-auto bg-gradient-corexis-primary hover:bg-gradient-corexis-accent text-white px-8 py-3 text-lg font-medium transition-all duration-300"
									>
										{isSubmitting ? (
											<div className="flex items-center justify-center">
												<div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
												Mesaj Gönderiliyor...
											</div>
										) : (
											"Mesaj Gönder"
										)}
									</Button>

									{/* Status Messages */}
									{submitStatus === "success" && (
										<div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
											<div className="flex items-center">
												<svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
												</svg>
												<p className="text-green-800 font-medium text-sm sm:text-base">Mesaj başarıyla gönderildi!</p>
											</div>
											<p className="text-green-700 text-xs sm:text-sm mt-1">24 saat içinde size geri döneceğiz.</p>
										</div>
									)}

									{submitStatus === "error" && (
										<div className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
											<div className="flex items-center">
												<svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
												<p className="text-red-800 font-medium text-sm sm:text-base">Mesaj gönderilemedi.</p>
											</div>
											<p className="text-red-700 text-xs sm:text-sm mt-1">Lütfen tekrar deneyin veya doğrudan hello@corexis.com adresinden bize ulaşın</p>
										</div>
									)}

									{/* Privacy Notice */}
									<p className="text-xs sm:text-sm text-gray-500 text-center">
										Bu formu göndererek gizlilik politikamızı kabul etmiş olursunuz. Bilgilerinizi asla üçüncü taraflarla paylaşmayacağız.
									</p>
								</form>
							</CardContent>
						</Card>
					</section>
				</div>
			</div>
		</div>
	)
}
