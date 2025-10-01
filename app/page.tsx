"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Calendar, Clock, ArrowRight, Twitter, Linkedin } from "lucide-react"
import { useRouter } from "next/navigation"

// Team data
const teamMembers = [
  	{
		id: "berkay-duzgun",
		name: "Berkay Düzgün",
		role: "CEO",
		bio: "Ölçeklenebilir mimari ve yeni teknolojiler konusunda uzmanlaşan teknoloji eksperi. Teknik yeniliklerimizi ileriye taşıyor.",
		email: "berkay@corexis.com",
		image: "/berkay.jpeg",
	},
	{
		id: "berke-duzgun",
		name: "Berke Düzgün",
		role: "Danışman",
		bio: "Stratejik planlama ve iş geliştirme alanında 10+ yıllık deneyime sahip vizyoner lider. Yenilikçi çözümler oluşturma konusunda tutkulu.",
		email: "berke@corexis.com",
		image: "/berke.jpeg",
	},
  	{
		id: "berke-duzgun-2",
		name: "Berke Düzgün",
		role: "Danışman",
		bio: "Stratejik planlama ve iş geliştirme alanında 10+ yıllık deneyime sahip vizyoner lider. Yenilikçi çözümler oluşturma konusunda tutkulu.",
		email: "berke@corexis.com",
		image: "/berke.jpeg",
	},

]

// Blog posts data for the updates section
const blogPosts = [
	{
		id: "future-of-remote-collaboration",
		title: "The Future of Remote Collaboration: Trends and Technologies",
		excerpt:
			"Explore how emerging technologies are reshaping the way teams collaborate remotely, from AI-powered tools to immersive virtual workspaces.",
		coverImage: "/blog-remote-collaboration.jpg",
		author: "Berke Düzgün",
		date: "2024-01-15",
		readTime: "5 min read",
		category: "Technology",
	},
	{
		id: "building-scalable-systems",
		title: "Building Scalable Systems: Lessons from the Trenches",
		excerpt:
			"Learn key principles and best practices for designing systems that can handle massive scale, based on real-world experience and proven methodologies.",
		coverImage: "/blog-scalable-systems.jpg",
		author: "Berkay Düzgün",
		date: "2024-01-10",
		readTime: "8 min read",
		category: "Engineering",
	},
	{
		id: "design-thinking-innovation",
		title: "Design Thinking: A Catalyst for Innovation",
		excerpt:
			"Discover how design thinking methodology can transform your approach to problem-solving and drive meaningful innovation in your organization.",
		coverImage: "/blog-design-thinking.jpg",
		author: "Emily Rodriguez",
		date: "2024-01-05",
		readTime: "6 min read",
		category: "Design",
	},
	{
		id: "performance-optimization-guide",
		title: "Web Performance Optimization: A Complete Guide",
		excerpt:
			"Master the art of web performance optimization with practical techniques, tools, and strategies to make your applications lightning fast.",
		coverImage: "/blog-performance-optimization.jpg",
		author: "David Kim",
		date: "2023-12-28",
		readTime: "10 min read",
		category: "Development",
	},
	{
		id: "digital-marketing-trends-2024",
		title: "Digital Marketing Trends That Will Define 2024",
		excerpt:
			"Stay ahead of the curve with insights into the latest digital marketing trends, from AI-driven personalization to emerging social platforms.",
		coverImage: "/blog-marketing-trends.jpg",
		author: "Lisa Thompson",
		date: "2023-12-20",
		readTime: "7 min read",
		category: "Marketing",
	},
	{
		id: "operational-excellence-framework",
		title: "Building an Operational Excellence Framework",
		excerpt:
			"Learn how to create and implement a comprehensive operational excellence framework that drives efficiency and continuous improvement.",
		coverImage: "/blog-operational-excellence.jpg",
		author: "James Wilson",
		date: "2023-12-15",
		readTime: "9 min read",
		category: "Operations",
	},
]

export default function HomePage() {
	const [activeSection, setActiveSection] = useState("hero")
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
							<h1 className="text-2xl font-bold text-blue-600 font-serif">Corexis</h1>
						</div>

						{/* Navigation Menu */}
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-8">
								{[
									{ id: "about", label: "Hakkımızda" },
									{ id: "team", label: "Ekibimiz" },
									{ id: "updates", label: "Güncellemeler" },
									{ id: "contact", label: "İletişim" },
								].map((item) => (
									<button
										key={item.id}
										onClick={() => scrollToSection(item.id)}
										className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-cyan-500 ${
											activeSection === item.id ? "text-blue-600" : "text-gray-700"
										}`}
									>
										{item.label}
									</button>
								))}
							</div>
						</div>

						{/* Mobile menu button */}
						<div className="md:hidden">
							<button className="text-gray-700 hover:text-blue-600 p-2">
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section
				id="hero"
				className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
			>
				<div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-5"></div>
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
					<h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-serif leading-tight animate-fade-in">
						İşbirliğini Güçlendiriyor,
						<br />
						<span className="text-blue-600">Başarıyı Yönlendiriyoruz</span>
					</h1>
					<p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
						Yaptığımız her işte mükemmellik ve yenilikçiliğe bağlı olan özel ekibimizle tanışın.
					</p>
					<Button
						onClick={() => scrollToSection("about")}
						className="bg-blue-600 hover:bg-cyan-500 text-white px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
					>
						Bizi Tanıyın
					</Button>
				</div>
			</section>

			{/* About Us Section */}
			<section id="about" className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Hakkımızda</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							İşbirliği, yenilikçilik ve mükemmelliğe olan sarsılmaz bağlılığımız aracılığıyla olağanüstü sonuçlar sunmaya adanmış dinamik bir profesyoneller ekibiyiz.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
						<div>
							<img
								src="/professional-team-collaboration.png"
								alt="Our team collaborating"
								className="rounded-lg shadow-lg w-full h-auto"
							/>
						</div>
						<div className="space-y-6">
							<div>
								<h3 className="text-2xl font-semibold text-gray-900 mb-3 font-serif">Hikayemiz</h3>
								<p className="text-gray-600 leading-relaxed">
									Ekiplerin nasıl işbirliği yaptığını ve hedeflerine nasıl ulaştığını dönüştürme vizyonuyla kurulmuş olan şirketimiz, yenilikçi çözümler ve olağanüstü hizmet sunumu arayan organizasyonlar için güvenilir bir partner haline gelmiştir.
								</p>
							</div>
							<div>
								<h3 className="text-2xl font-semibold text-gray-900 mb-3 font-serif">Önemli Olan Deneyim</h3>
								<p className="text-gray-600 leading-relaxed">
									Farklı sektörlerde{" "}
									<span className="font-semibold text-blue-600">15 yılı</span> aşan birleşik deneyimimizle, ekibimiz üstlendiğimiz her projeye derin uzmanlık ve yeni perspektifler getiriyor.
								</p>
							</div>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						<Card className="p-8 border-l-4 border-l-blue-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
							<CardContent className="p-0">
								<h3 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">Misyonumuz</h3>
								<p className="text-gray-600 leading-relaxed">
									Yenilikçi çözümler sunarak, işbirliğini teşvik ederek ve sürdürülebilir büyüme ve başarıyı yönlendiren olağanüstü sonuçlar sunarak ekipleri ve organizasyonları güçlendirmek.
								</p>
							</CardContent>
						</Card>

						<Card className="p-8 border-l-4 border-l-cyan-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
							<CardContent className="p-0">
								<h3 className="text-2xl font-semibold text-gray-900 mb-4 font-serif">Hedeflerimiz</h3>
								<p className="text-gray-600 leading-relaxed">
									Yaptığımız her işte kalite, dürüstlük ve müşteri memnuniyetine olan bağlılığımızı korurken sürekli yenilik yapmak, uzmanlığımızı genişletmek ve kalıcı ortaklıklar kurmak.
								</p>
							</CardContent>
						</Card>
					</div>

					<div className="mt-16 text-center">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							<div className="text-center">
								<div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
								<div className="text-gray-600">Yıllık Deneyim</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
								<div className="text-gray-600">Tamamlanan Proje</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
								<div className="text-gray-600">Mutlu Müşteri</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
								<div className="text-gray-600">Destek Mevcudiyeti</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section id="team" className="py-20 bg-slate-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Ekibimiz</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Basarımızı yönlendiren yetenekli bireylerle tanışın. Her üye, olağanüstü sonuçlar sunmak için benzersiz uzmanlık ve tutku getiriyor.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{teamMembers.map((member) => (
							<Card
								key={member.id}
								className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white border-0 shadow-lg"
								onClick={() => handleMemberClick(member.id)}
							>
								<CardContent className="p-6">
									<div className="aspect-square relative overflow-hidden rounded-full mx-auto mb-6 w-48 h-48">
										<img
											src={member.image || "/placeholder.svg"}
											alt={member.name}
											className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
									</div>

									<div className="text-center">
										<h3 className="text-xl font-semibold text-gray-900 mb-2 font-serif group-hover:text-blue-600 transition-colors duration-300">
											{member.name}
										</h3>
										<p className="text-blue-600 font-medium mb-3">{member.role}</p>
										<p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{member.bio}</p>

										<div className="flex items-center justify-center text-gray-500 hover:text-cyan-500 transition-colors duration-200">
											<Mail className="h-4 w-4 mr-2" />
											<span className="text-sm">{member.email}</span>
										</div>
									</div>
								</CardContent>
							</Card>
						))}

						<div className="text-center mt-12">
							<p className="text-gray-600 mb-6">Ekip üyelerimiz hakkında daha fazla bilgi edinmek ister misiniz?</p>
							<Button
								onClick={() => scrollToSection("contact")}
								variant="outline"
								className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
							>
								İletişime Geçin
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Updates/Blog Section */}
			<section id="updates" className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Görüşler ve Güncellemeler</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Uzman ekibimizden en son düşünceler, sektör içgörüleri ve güncellemelerle bilgilenmede kalın.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
											<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
												{post.category}
											</span>
										</div>
										<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									</div>

									<div className="p-6">
										<h3 className="text-xl font-semibold text-gray-900 mb-3 font-serif group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
											{post.title}
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

										<div className="flex items-center justify-between text-sm text-gray-500 mb-4">
											<div className="flex items-center">
												<Calendar className="h-4 w-4 mr-2" />
												<span>
													{new Date(post.date).toLocaleDateString("en-US", {
														year: "numeric",
														month: "short",
														day: "numeric",
													})}
												</span>
											</div>
											<div className="flex items-center">
												<Clock className="h-4 w-4 mr-2" />
												<span>{post.readTime}</span>
											</div>
										</div>

										<div className="flex items-center justify-between">
											<span className="text-sm text-gray-600">By {post.author}</span>
											<div className="flex items-center text-blue-600 group-hover:text-cyan-500 transition-colors duration-200">
												<span className="text-sm font-medium mr-2">Read More</span>
												<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<div className="text-center mt-12">
						<p className="text-gray-600 mb-6">En son görüşlerimizle güncel kalmak ister misiniz?</p>
						<Button
							onClick={() => scrollToSection("contact")}
							className="bg-blue-600 hover:bg-cyan-500 text-white px-8 py-3 text-lg font-medium transition-all duration-300"
						>
							Güncellemelere Abone Olun
						</Button>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 bg-slate-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">İletişime Geçin</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Bir sonraki projenizi başlatmaya hazır mısınız veya hizmetlerimiz hakkında sorularınız mı var? Sizden haber almak isteriz.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Information */}
						<div className="space-y-8">
							<div>
								<h3 className="text-2xl font-semibold text-gray-900 mb-6 font-serif">Bağlanalım</h3>
								<p className="text-gray-600 leading-relaxed mb-8">
									İşbirliği yapmak, uzman danışmanlığına ihtiyaç duymak veya hizmetlerimiz hakkında daha fazla bilgi edinmek istiyorsanız, size yardımcı olmak için buradayız. Aşağıdaki kanallardan herhangi biri aracılığıyla ulaşın veya iletişim formunu kullanın.
								</p>
							</div>

							{/* Contact Details */}
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
										<Mail className="h-6 w-6 text-blue-600" />
									</div>
									<div>
										<h4 className="text-lg font-semibold text-gray-900 mb-1">E-posta Gönderin</h4>
										<p className="text-gray-600">hello@corexis.com</p>
										<p className="text-sm text-gray-500">24 saat içinde yanıt vereceğiz</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
										<svg className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="text-lg font-semibold text-gray-900 mb-1">Bizi Arayın</h4>
										<p className="text-gray-600">+90 (212) 555-0123</p>
										<p className="text-sm text-gray-500">Pzt-Cum, 09:00-18:00</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
										<svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
										<h4 className="text-lg font-semibold text-gray-900 mb-1">Ziyaret Edin</h4>
										<p className="text-gray-600">Teknoloji Caddesi No: 123</p>
										<p className="text-gray-600">Levent, İstanbul 34394</p>
										<p className="text-sm text-gray-500">Sadece randevu ile</p>
									</div>
								</div>
							</div>

							{/* Social Links */}
							<div className="pt-8 border-t border-gray-200">
								<h4 className="text-lg font-semibold text-gray-900 mb-4">Bizi Takip Edin</h4>
								<div className="flex space-x-4">
									<a
										href="#"
										className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200"
									>
										<Twitter className="h-5 w-5" />
									</a>
									<a
										href="#"
										className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200"
									>
										<Linkedin className="h-5 w-5" />
									</a>
									<a
										href="#"
										className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200"
									>
										<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z" />
										</svg>
									</a>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<Card className="bg-white shadow-xl border-0">
							<CardContent className="p-8">
								<h3 className="text-2xl font-semibold text-gray-900 mb-6 font-serif">Bize Mesaj Gönderin</h3>
								<ContactForm />
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
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

		// Simulate form submission
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000))
			setSubmitStatus("success")
			setFormData({ name: "", email: "", subject: "", message: "" })
		} catch (error) {
			setSubmitStatus("error")
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			{/* Name and Email Row */}
			<div className="grid md:grid-cols-2 gap-6">
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
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
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
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
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
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
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
					rows={6}
					value={formData.message}
					onChange={handleInputChange}
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical"
					placeholder="Projeniz, sorularınız veya size nasıl yardımcı olabileceğimiz hakkında bize anlatın..."
				/>
			</div>

			{/* Submit Button */}
			<div>
				<Button
					type="submit"
					disabled={isSubmitting}
					className="w-full bg-blue-600 hover:bg-cyan-500 text-white py-3 text-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isSubmitting ? (
						<div className="flex items-center justify-center">
							<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
							Mesaj Gönderiliyor...
						</div>
					) : (
						"Mesaj Gönder"
					)}
				</Button>
			</div>

			{/* Status Messages */}
			{submitStatus === "success" && (
				<div className="p-4 bg-green-50 border border-green-200 rounded-lg">
					<div className="flex items-center">
						<svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
						</svg>
						<p className="text-green-800 font-medium">Mesaj başarıyla gönderildi!</p>
					</div>
					<p className="text-green-700 text-sm mt-1">24 saat içinde size geri döneceğiz.</p>
				</div>
			)}

			{submitStatus === "error" && (
				<div className="p-4 bg-red-50 border border-red-200 rounded-lg">
					<div className="flex items-center">
						<svg className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<p className="text-red-800 font-medium">Mesaj gönderilemedi.</p>
					</div>
					<p className="text-red-700 text-sm mt-1">Lütfen tekrar deneyin veya doğrudan hello@corexis.com adresinden bize ulaşın</p>
				</div>
			)}

			{/* Privacy Notice */}
			<p className="text-sm text-gray-500 text-center">
				Bu formu göndererek gizlilik politikamızı kabul etmiş olursunuz. Bilgilerinizi asla üçüncü taraflarla paylaşmayacağız.
			</p>
		</form>
	)
}
