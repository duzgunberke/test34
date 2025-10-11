"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Calendar, Clock, ArrowRight, Twitter, Linkedin, Instagram } from "lucide-react"
import { useRouter } from "next/navigation"

// Team data
const teamMembers = [
  	{
		id: "berkay-duzgun",
		name: "Berkay Düzgün",
		role: "CEO",
		bio: "Merhaba, ben Berkay. ASELSAN Konya’da Elektrik-Elektronik öğrencisiyim. Aynı zamanda Corexis grubunun kurucusu ve Deneyap öğrencisiyim. Bugüne kadar birçok Deneyap şenliğinde takım kaptanı olarak yer aldım ve yönettiğim ekiplerle çeşitli dereceler elde ettim. Bunun yanı sıra, Teknofest’te yazılım ve farklı teknolojik alanlarda defalarca yarışmalara katıldım. Elektrik-elektronik, yazılım geliştirme ve yenilikçi teknolojiler üzerine çalışıyor; özellikle sensör sistemleri, gömülü yazılımlar ve otomasyon odaklı projeler geliştiriyorum. Takım çalışmasına uyumlu, araştırmaya meraklı ve problem çözme odaklı biriyim. Hedefim; teknoloji ve mühendisliği birleştirerek, hem akademik hem de profesyonel hayatta yenilikçi çözümler üreten bir mühendis olmak.",
		image: "/berkay.jpg",
	},
  	{
		id: "erva-evin-iltus",
		name: "Erva Evin İltuş",
		role: "CTO",
		bio: "Merhaba, ben Erva Evin İltuş. Meram Fen Lisesi öğrencisiyim. Aynı zamanda Deneyap öğrencisi ve Corexis grubunun bir üyesiyim. Katıldığım proje şenliklerinde takım arkadaşlarımla birlikte birçok derece elde ettim. Şu anda ağırlıklı olarak proje planlama ve sunum alanlarında görev alıyor, ekip çalışmalarında aktif bir rol üstleniyorum. Hayalim, gelecekte uzay ve havacılık alanında çalışmalar yaparak hem ülkeme hem de dünyaya katkılar sunmak. Bu doğrultuda, araştırmaya, öğrenmeye ve ekip çalışmasına büyük önem veriyorum.",
		image: "/ervaevin.jpg",
	},
	{
		id: "zeynep-ileri",
		name: "Zeynep İleri",
		role: "CTO",
		bio: "Merhaba, ben Zeynep İleri. Geleceği sadece izlemek değil, onu şekillendirmek istiyorum. Şehir Koleji'nde eğitimime devam eden bir öğrenci olarak yapay zeka mühendisliği hedefiyle kendimi sürekli geliştirmeye odaklanıyorum. Teknolojiye olan ilgim, beni algoritmalar, veri bilimi ve makine öğrenimi gibi alanlarda derinleşmeye yönlendirdi. Her gün yeni şeyler öğrenmeye, problem çözme becerilerimi geliştirmeye ve geleceğin teknolojilerine katkı sunacak projelerde yer almaya istekliyim. Amacım, yalnızca bir mühendis olmak değil; aynı zamanda çözüm üreten, fayda sağlayan ve ilham veren bir teknoloji profesyoneli olmak.",
		image: "/zeynepileri.jpg",
	},
	{
		id: "fatma-zisan",
		name: "Fatma Zişan Demir",
		role: "CMO",
		bio: "Merhaba, benim adım Fatma Zişan Demir. Öğrenmeyi, araştırmayı ve kişisel gelişimi seven, çalışkan bir öğrenciyim. Bilime olan ilgim ve azmim, özellikle tıp ve genetik alanlarında bana yardımcı oluyor. Eğitimimin yanında spor faaliyetleriyle de ilgileniyor, böylece takım çalışması ve disiplin becerilerimi geliştiriyorum. Amacım, güçlü bir akademik temel oluşturmak ve bireysel ve toplumsal değer üreten projelerde yer almak. Hırslı, çalışkan ve yeniliklere açık bir kişi olarak bulunduğum her ortamda olumlu katkı sağlamaya gayret ediyorum.",
		image: "/zisan.jpg",
	},
   {
		id: "berke-duzgun",
		name: "Berke Düzgün",
		role: "Advisor",
		bio: "Ben Berke Düzgün. Elektronik ve Haberleşme Mühendisliği altyapısını yazılım geliştirme tutkumla birleştirerek kariyerimi Full Stack Development, MLOps ve yapay zekâ çözümleri üzerine inşa ediyorum. Profesyonel deneyimlerim boyunca; sağlık, finans, seyahat ve etkinlik teknolojileri gibi farklı sektörlerde .NET Core, TypeScript, ASP.NET, Docker, RabbitMQ, DDD ve mikroservis mimarileri ile ölçeklenebilir projeler geliştirdim. Hem frontend hem de backend tarafında üretken çözümler ortaya koyarken; ödeme altyapıları, batch sistemleri ve yapay zekâ tabanlı Ar-Ge projelerine katkı sağladım. Aynı zamanda Viveven girişimini kurarak özel yazılım çözümleri ürettim; burada geliştirdiğimiz ürünlerle (VivEvent, Linayzer, VivModel) kullanıcı odaklı ve yenilikçi uygulamalar ortaya koyduk. Teknik becerilerimin yanında, T3 Vakfı’nda mentorluk yaparak gençlere elektronik ve yazılım alanında rehberlik ettim. Bu süreç, bilgi paylaşımının ve ekip ruhunun ne kadar değerli olduğunu bana bir kez daha gösterdi. Yeni teknolojileri yakından takip ediyor, hem kurumsal hem de girişimsel bakış açısıyla değer üretmeye devam ediyorum.",
		image: "/berke.jpeg",
	},
]

// Original blog posts data kept for reference
const originalBlogPosts = [
	{
		id: "nasaspaceappschallenge",
		title: "NASA Space Apps Challenge: 48 Saatlik Uzay Macerası",
		excerpt:
			"Geçtiğimiz hafta sonu Corexis ekibiyle birlikte Konya Kapsül'de bir maceranın içindeydik. NASA Space Apps Challenge 2025 - dünyanın en büyük hackathonu. 40'a yakın üniversiteli takım, 48 saat boyunca uzay ve Dünya için çözümler üretmeye çalışıyordu. Biz de onlardan biriydik.",
		coverImage: "/kapakresmiblogbir.jpg",
		author: "Berkay Düzgün",
		date: "2025-10-5",
		readTime: "6 dk okuma",
		category: "Teknoloji | Yarışma",
	},
	
]

// Active blog posts (currently empty to hide them)
const blogPosts = originalBlogPosts // Use original posts instead of empty array

export default function HomePage() {
	const [activeSection, setActiveSection] = useState("hero")
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const router = useRouter()

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["hero", "about", "team", "updates", "contact"]
			const scrollPosition = window.scrollY + 100

			for (const section of sections) {
				const element = document.getElementById(section)
				if (element) {
					const { offsetTop, offsetHeight } = element
					if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
						setActiveSection(section)
						break
					}
				}
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	const handleMemberClick = (memberId: string) => {
		router.push(`/team/${memberId}`)
	}

	// Function to handle blog post clicks
	const handleBlogClick = (postId: string) => {
		router.push(`/blog/${postId}`)
	}

	return (
		<div className="min-h-screen bg-white font-sans">
			{/* Fixed Navigation */}
			<nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<div className="flex-shrink-0">
							<h1 className="text-xl sm:text-2xl font-bold text-gradient-corexis font-serif">Corexis</h1>
						</div>

						{/* Desktop Navigation Menu */}
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
								{[
									{ id: "about", label: "Hakkımızda" },
									{ id: "team", label: "Ekibimiz" },
									{ id: "updates", label: "Güncellemeler" },
									{ id: "contact", label: "İletişim" },
								].map((item) => (
									<button
										key={item.id}
										onClick={() => scrollToSection(item.id)}
										className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-[#E040FB] ${
											activeSection === item.id ? "text-[#7B1FA2]" : "text-gray-700"
										}`}
									>
										{item.label}
									</button>
								))}
							</div>
						</div>

						{/* Mobile menu button */}
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
								{[
									{ id: "about", label: "Hakkımızda" },
									{ id: "team", label: "Ekibimiz" },
									{ id: "updates", label: "Güncellemeler" },
									{ id: "contact", label: "İletişim" },
								].map((item) => (
									<button
										key={item.id}
										onClick={() => {
											scrollToSection(item.id)
											setMobileMenuOpen(false)
										}}
										className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-[#E040FB] ${
											activeSection === item.id ? "text-[#7B1FA2] bg-purple-50" : "text-gray-700"
										}`}
									>
										{item.label}
									</button>
								))}
							</div>
						</div>
					)}
				</div>
			</nav>

			{/* Hero Section */}
			<section
				id="hero"
				className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-white relative overflow-hidden"
			>
				<div className="absolute inset-0 bg-gradient-corexis opacity-5"></div>
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif leading-tight animate-fade-in">
						Teknolojiyi Yeniden Tanımlıyor,
						<br />
						<span className="text-gradient-corexis">Geleceği Şekillendiriyoruz.</span>
					</h1>
					<p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
						Yaptığımız her işte mükemmellik ve yenilikçiliğe bağlı olan özel ekibimizle tanışın.
					</p>
					<Button
						onClick={() => scrollToSection("about")}
						className="bg-gradient-corexis-primary hover:bg-gradient-corexis-accent text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-0"
					>
						Bizi Tanıyın
					</Button>
				</div>
			</section>

			{/* About Us Section */}
			<section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">Hakkımızda</h2>
						<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
							Corexis, geleceğin teknolojilerini bugünden şekillendirmeyi amaçlayan yenilikçi bir araştırma ve geliştirme ekibidir. Yapay zekâ, otonom sistemler, savunma ve uzay teknolojileri başta olmak üzere ileri mühendislik alanlarında çözümler geliştirerek, hem ulusal hem de uluslararası ölçekte fark yaratan projeler üretmeyi hedefliyoruz.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
						<div className="order-2 md:order-1">
							<img
								src="/corexishakkımızda.jpg"
								alt="Our team collaborating"
								className="rounded-lg shadow-lg w-full h-auto"
							/>
						</div>
						<div className="space-y-6 order-1 md:order-2">
							<div>
								<h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 font-serif">Hikayemiz</h3>
								<p className="text-gray-600 leading-relaxed text-sm sm:text-base">
									Corexis, teknolojiye olan tutkunun genç ve dinamik bir vizyonla birleşmesiyle doğdu. Başlangıçta küçük bir fikir topluluğu olarak başlayan yolculuğumuz, bugün farklı disiplinlerden gelen yeteneklerin bir araya gelerek yenilikçi projelere imza attığı bir teknoloji merkezine dönüştü. Bizim için her proje, geleceğe bırakılan güçlü bir izdir.
								</p>
							</div>
							<div>
								<h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 font-serif">Önemli Olan Deneyim</h3>
								<p className="text-gray-600 leading-relaxed text-sm sm:text-base">
									Corexis ekibi, farklı mühendislik alanlarından gelen uzmanlıkları bir araya getirerek kısa sürede önemli bir birikim oluşturdu. Savunma ve teknoloji odaklı yarışmalarda, AR-GE projelerinde ve inovasyon odaklı çalışmalarda kazandığımız deneyim, bize yalnızca teknik bir derinlik değil aynı zamanda stratejik bir bakış açısı kazandırdı.
								</p>
							</div>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-6 lg:gap-8">
						<Card className="p-6 lg:p-8 border-l-4 border-l-[#7B1FA2] shadow-lg hover:shadow-xl transition-shadow duration-300">
							<CardContent className="p-0">
								<h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 font-serif">Misyonumuz</h3>
								<p className="text-gray-600 leading-relaxed text-sm sm:text-base">
									Misyonumuz; ileri teknolojileri kullanarak sürdürülebilir, güvenilir ve yenilikçi çözümler üretmek, geliştirdiğimiz projelerle yalnızca bugünün değil yarının ihtiyaçlarına da yanıt verebilmektir. Corexis, teknoloji ve bilimin kesişim noktasında daima daha iyisini üretmeyi amaçlar.
								</p>
							</CardContent>
						</Card>

						<Card className="p-6 lg:p-8 border-l-4 border-l-[#E040FB] shadow-lg hover:shadow-xl transition-shadow duration-300">
							<CardContent className="p-0">
								<h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 font-serif">Hedeflerimiz</h3>
								<p className="text-gray-600 leading-relaxed text-sm sm:text-base">
									Corexis olarak hedefimiz; ulusal ve uluslararası alanda teknoloji geliştiren öncü bir ekip haline gelmek, ürettiğimiz projelerle küresel ölçekte fark yaratmak ve Türkiye’nin teknoloji ekosistemine güçlü bir katkı sunmaktır. Kalıcı iş birlikleri kurarak, genç mühendislerin ve araştırmacıların gelişimini destekleyerek, geleceği birlikte inşa etmeyi amaçlıyoruz.
								</p>
							</CardContent>
						</Card>
					</div>

					<div className="mt-12 lg:mt-16 text-center">
						<div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 max-w-3xl mx-auto">
							<div className="text-center">
								<div className="text-2xl sm:text-3xl font-bold text-[#7B1FA2] mb-2">2+</div>
								<div className="text-gray-600 text-sm sm:text-base">Yıllık Deneyim</div>
							</div>
							<div className="text-center">
								<div className="text-2xl sm:text-3xl font-bold text-[#9C27B0] mb-2">30+</div>
								<div className="text-gray-600 text-sm sm:text-base">Tamamlanan Proje</div>
							</div>
							<div className="text-center">
								<div className="text-2xl sm:text-3xl font-bold text-[#F06292] mb-2">24/7</div>
								<div className="text-gray-600 text-sm sm:text-base">Destek Mevcudiyeti</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section id="team" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">Ekibimiz</h2>
						<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
							Başarımızı yönlendiren yetenekli bireylerle tanışın. Her üye, olağanüstü sonuçlar sunmak için benzersiz uzmanlık ve tutku getiriyor.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
						{teamMembers.map((member) => (
							<Card
								key={member.id}
								className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white border-0 shadow-lg"
								onClick={() => handleMemberClick(member.id)}
							>
								<CardContent className="p-4 sm:p-6">
									<div className="aspect-square relative overflow-hidden rounded-full mx-auto mb-4 sm:mb-6 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
										<img
											src={member.image || "/placeholder.svg"}
											alt={member.name}
											className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
									</div>

									<div className="text-center">
										<h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 font-serif group-hover:text-[#7B1FA2] transition-colors duration-300">
											{member.name}
										</h3>
										<p className="text-[#9C27B0] font-medium mb-3 text-sm sm:text-base">{member.role}</p>
										<p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">{member.bio}</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<div className="text-center mt-8 sm:mt-12">
						<p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-4">Ekip üyelerimiz hakkında daha fazla bilgi edinmek ister misiniz?</p>
						<Button
							onClick={() => scrollToSection("contact")}
							variant="outline"
							className="border-[#7B1FA2] text-[#7B1FA2] hover:bg-[#7B1FA2] hover:text-white transition-all duration-300 px-6 py-2 text-sm sm:text-base"
						>
							İletişime Geçin
						</Button>
					</div>
				</div>
			</section>

			{/* Updates/Blog Section */}
			<section id="updates" className="py-12 sm:py-16 lg:py-20 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">Görüşler ve Güncellemeler</h2>
						<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
							Uzman ekibimizden en son düşünceler, sektör içgörüleri ve güncellemelerle bilgilenmede kalın.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
						{blogPosts.map((post) => (
							<Card
								key={post.id}
								className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden"
								onClick={() => handleBlogClick(post.id)}
							>
								<CardContent className="p-0">
									<div className="aspect-[16/10] relative overflow-hidden">
										<img
											src={post.coverImage || "/placeholder.svg"}
											alt={post.title}
											className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
										/>
										<div className="absolute top-4 left-4">
											<span className="bg-gradient-corexis-primary text-white px-3 py-1 rounded-full text-xs font-medium">
												{post.category}
											</span>
										</div>
										<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									</div>

									<div className="p-4 sm:p-6">
										<h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 font-serif group-hover:text-[#7B1FA2] transition-colors duration-300 line-clamp-2">
											{post.title}
										</h3>
										<p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

										<div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4">
											<div className="flex items-center">
												<Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
												<span>
													{new Date(post.date).toLocaleDateString("tr-TR", {
														year: "numeric",
														month: "long",
														day: "numeric",
													})}
												</span>
											</div>
											<div className="flex items-center">
												<Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
												<span>{post.readTime}</span>
											</div>
										</div>

										<div className="flex items-center justify-between">
											<span className="text-xs sm:text-sm text-gray-600">{post.author}</span>
											<div className="flex items-center text-[#7B1FA2] group-hover:text-[#E040FB] transition-colors duration-200">
												<span className="text-xs sm:text-sm font-medium mr-2">Daha Fazla</span>
												<ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:translate-x-1" />
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<div className="text-center mt-8 sm:mt-12">
						<p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-4">En son görüşlerimizle güncel kalmak ister misiniz?</p>
						<Button
							onClick={() => scrollToSection("contact")}
							className="bg-gradient-corexis hover:bg-gradient-corexis-accent text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-medium transition-all duration-300 border-0"
						>
							Güncellemelere Abone Olun
						</Button>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">İletişime Geçin</h2>
						<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
							Bir sonraki projenizi başlatmaya hazır mısınız veya hizmetlerimiz hakkında sorularınız mı var? Sizden haber almak isteriz.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
						{/* Contact Information */}
						<div className="space-y-6 lg:space-y-8">
							<div>
								<h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 font-serif">Bağlanalım</h3>
								<p className="text-gray-600 leading-relaxed mb-6 lg:mb-8 text-sm sm:text-base">
									İşbirliği yapmak, uzman danışmanlığına ihtiyaç duymak veya hizmetlerimiz hakkında daha fazla bilgi edinmek istiyorsanız, size yardımcı olmak için buradayız. Aşağıdaki kanallardan herhangi biri aracılığıyla ulaşın veya iletişim formunu kullanın.
								</p>
							</div>

							{/* Contact Details */}
							<div className="space-y-4 sm:space-y-6">
								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
										<Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#7B1FA2]" />
									</div>
									<div>
										<h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">E-posta Gönderin</h4>
										<p className="text-gray-600 text-sm sm:text-base">corexisoffical@gmail.com</p>
										<p className="text-xs sm:text-sm text-gray-500">24 saat içinde yanıt vereceğiz</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
		
								</div>

								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
										<svg className="h-5 w-5 sm:h-6 sm:w-6 text-[#9C27B0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Ziyaret Edin</h4>
										<p className="text-gray-600 text-sm sm:text-base">Kapsül Teknoloji Platformu</p>
										<p className="text-gray-600 text-sm sm:text-base">Konya / Meram</p>
										<p className="text-xs sm:text-sm text-gray-500">Sadece randevu ile</p>
									</div>
								</div>
							</div>

							{/* Social Links */}
							<div className="pt-6 lg:pt-8 border-t border-gray-200">
								<h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Bizi Takip Edin</h4>
								<div className="flex space-x-4">
									<a
										href="https://www.linkedin.com/company/corexisoffical/"
										className="w-10 h-10 bg-gradient-corexis-primary text-white rounded-lg flex items-center justify-center hover:bg-gradient-corexis-accent transition-all duration-200"
									>
										<Linkedin className="h-5 w-5" />
									</a>
									<a
										href="mailto:corexisoffical@gmail.com"
										className="w-10 h-10 bg-gradient-corexis-primary text-white rounded-lg flex items-center justify-center hover:bg-gradient-corexis-accent transition-all duration-200"
									>
										<Mail className="h-5 w-5" />
									</a>
									<a
										href="https://www.instagram.com/corexisoffical/"
										className="w-10 h-10 bg-gradient-corexis-primary text-white rounded-lg flex items-center justify-center hover:bg-gradient-corexis-accent transition-all duration-200"
									>
										<Instagram className="h-5 w-5" />
									</a>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<Card className="bg-white shadow-xl border-0 mt-8 lg:mt-0">
							<CardContent className="p-6 sm:p-8">
								<h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 font-serif">Bize Mesaj Gönderin</h3>
								<ContactForm />
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Main Footer Content */}
					<div className="py-12 lg:py-16">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
							{/* Company Info */}
							<div className="col-span-1 md:col-span-2 lg:col-span-2">
								<div className="mb-6">
									<h2 className="text-2xl sm:text-3xl font-bold text-gradient-corexis font-serif mb-4">Corexis</h2>
									<p className="text-gray-300 text-sm sm:text-base leading-relaxed">
										İşbirliği, yenilikçilik ve mükemmelliğe olan bağlılığımızla olağanüstü sonuçlar sunmaya odaklanmış profesyonel ekibiz.
									</p>
								</div>
								<div className="flex space-x-4">
									<a
										href="https://www.linkedin.com/company/corexisoffical/"
										className="w-10 h-10 bg-white/10 hover:bg-gradient-corexis-primary text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
									>
										<Linkedin className="h-5 w-5" />
									</a>
									<a
										href="mailto:corexisoffical@gmail.com"
										className="w-10 h-10 bg-white/10 hover:bg-gradient-corexis-primary text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
									>
										<Mail className="h-5 w-5" />
									</a>
									<a
										href="https://www.instagram.com/corexisoffical/"
										className="w-10 h-10 bg-white/10 hover:bg-gradient-corexis-primary text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
									>
										<Instagram className="h-5 w-5" />
									</a>
								</div>
							</div>

							{/* Quick Links */}
							<div>
								<h3 className="text-lg font-semibold text-white mb-4 font-serif">Hızlı Linkler</h3>
								<ul className="space-y-3">
									{[
										{ label: "Hakkımızda", action: () => scrollToSection("about") },
										{ label: "Ekibimiz", action: () => scrollToSection("team") },
										{ label: "Güncellemeler", action: () => scrollToSection("updates") },
										{ label: "İletişim", action: () => scrollToSection("contact") },
									].map((item) => (
										<li key={item.label}>
											<button
												onClick={item.action}
												className="text-gray-300 hover:text-[#E040FB] transition-colors duration-200 text-sm sm:text-base"
											>
												{item.label}
											</button>
										</li>
									))}
								</ul>
							</div>

							{/* Services - Hidden */}
							<div className="hidden">
								<h3 className="text-lg font-semibold text-white mb-4 font-serif">Hizmetlerimiz</h3>
								<ul className="space-y-3">
									<li><span className="text-gray-300 text-sm sm:text-base">Stratejik Danışmanlık</span></li>
									<li><span className="text-gray-300 text-sm sm:text-base">Teknoloji Çözümleri</span></li>
									<li><span className="text-gray-300 text-sm sm:text-base">İş Geliştirme</span></li>
									<li><span className="text-gray-300 text-sm sm:text-base">Dijital Dönüşüm</span></li>
								</ul>
							</div>

							{/* Contact Info */}
							<div>
								<h3 className="text-lg font-semibold text-white mb-4 font-serif">İletişim Bilgileri</h3>
								<div className="space-y-3">
									<div className="flex items-start space-x-3">
										<Mail className="h-5 w-5 text-[#E040FB] mt-0.5 flex-shrink-0" />
										<div>
											<p className="text-gray-300 text-sm sm:text-base">corexisoffical@gmail.com</p>
										</div>
									</div>
									
									<div className="flex items-start space-x-3">
										<svg className="h-5 w-5 text-[#E040FB] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
										<div>
											<p className="text-gray-300 text-sm sm:text-base">
												Kapsül Teknoloji Platformu<br />
												Konya / Meram
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Newsletter Signup */}
					<div className="border-t border-white/10 py-8">
						<div className="text-center">
							<h3 className="text-xl font-semibold text-white mb-4 font-serif">Bültenimize Abone Olun</h3>
							<p className="text-gray-300 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
								En son haberler, içgörüler ve güncellemeler için e-posta listemize katılın.
							</p>
							<div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
								<input
									type="email"
									placeholder="E-posta adresiniz"
									className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E040FB] focus:border-transparent"
								/>
								<Button className="bg-gradient-corexis-primary hover:bg-gradient-corexis-accent text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 border-0 whitespace-nowrap">
									Abone Ol
								</Button>
							</div>
						</div>
					</div>

					{/* Bottom Footer */}
					<div className="border-t border-white/10 py-6">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
							<div className="text-gray-400 text-sm text-center md:text-left">
								© 2025 Corexis. Tüm hakları saklıdır.
							</div>
							<div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
								<a href="#" className="text-gray-400 hover:text-[#E040FB] transition-colors duration-200">
									Gizlilik Politikası
								</a>
								<a href="#" className="text-gray-400 hover:text-[#E040FB] transition-colors duration-200">
									Kullanım Şartları
								</a>
								<a href="#" className="text-gray-400 hover:text-[#E040FB] transition-colors duration-200">
									Çerez Politikası
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

// ContactForm component for the contact section
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
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
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

	return (
		<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
			{/* Name and Email Row */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
				<div>
					<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
						Ad Soyad *
					</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						value={formData.name}
						onChange={handleInputChange}
						className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B1FA2] focus:border-transparent transition-colors duration-200"
						placeholder="Adınız ve soyadınız"
					/>
				</div>
				<div>
					<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
						E-posta Adresi *
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						value={formData.email}
						onChange={handleInputChange}
						className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B1FA2] focus:border-transparent transition-colors duration-200"
						placeholder="email@ornek.com"
					/>
				</div>
			</div>

			{/* Subject */}
			<div>
				<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
					Konu *
				</label>
				<select
					id="subject"
					name="subject"
					required
					value={formData.subject}
					onChange={handleInputChange}
					className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B1FA2] focus:border-transparent transition-colors duration-200"
				>
					<option value="">Bir konu seçin</option>
					<option value="general">Genel Sorgu</option>
					<option value="collaboration">İşbirliği Fırsatı</option>
					<option value="consultation">Danışmanlık Talebi</option>
					<option value="support">Teknik Destek</option>
					<option value="partnership">Ortaklık Teklifi</option>
					<option value="other">Diğer</option>
				</select>
			</div>

			{/* Message */}
			<div>
				<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
					Mesaj *
				</label>
				<textarea
					id="message"
					name="message"
					required
					rows={5}
					value={formData.message}
					onChange={handleInputChange}
					className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B1FA2] focus:border-transparent transition-colors duration-200 resize-vertical"
					placeholder="Projeniz, sorularınız veya size nasıl yardımcı olabileceğimiz hakkında bize anlatın..."
				/>
			</div>

			{/* Submit Button */}
			<div>
				<Button
					type="submit"
					disabled={isSubmitting}
					className="w-full bg-gradient-corexis hover:bg-gradient-corexis-accent text-white py-2 sm:py-3 text-sm sm:text-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border-0"
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
			</div>

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
					<p className="text-red-700 text-xs sm:text-sm mt-1">Lütfen tekrar deneyin veya doğrudan corexisoffical@gmail.com adresinden bize ulaşın</p>
				</div>
			)}

			{/* Privacy Notice */}
			<p className="text-xs sm:text-sm text-gray-500 text-center">
				Bu formu göndererek gizlilik politikamızı kabul etmiş olursunuz. Bilgilerinizi asla üçüncü taraflarla paylaşmayacağız.
			</p>
		</form>
	)
}
