"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Calendar, Clock, ArrowRight, Twitter, Linkedin, Star, Zap, Target, Users, Award, TrendingUp, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

// Team data
const teamMembers = [
	{
		id: "berkay-duzgun",
		name: "Berkay Düzgün",
		role: "CEO",
		bio: "Ölçeklenebilir mimari ve yeni teknolojiler konusunda uzmanlaşan teknoloji eksperi. Teknik yeniliklerimizi ileriye taşıyor.",
		image: "/berkay.jpeg",
		skills: ["Liderlik", "Strateji", "Teknoloji"],
		experience: "8+ yıl"
	},
	{
		id: "berke-duzgun",
		name: "Berke Düzgün",
		role: "Danışman",
		bio: "Stratejik planlama ve iş geliştirme alanında 10+ yıllık deneyime sahip vizyoner lider. Yenilikçi çözümler oluşturma konusunda tutkulu.",
		image: "/berke.jpeg",
		skills: ["Danışmanlık", "İş Geliştirme", "Planlama"],
		experience: "10+ yıl"
	},
	{
		id: "berke-duzgun-2",
		name: "Berke Düzgün",
		role: "Danışman",
		bio: "Stratejik planlama ve iş geliştirme alanında 10+ yıllık deneyime sahip vizyoner lider. Yenilikçi çözümler oluşturma konusunda tutkulu.",
		image: "/berke.jpeg",
		skills: ["Danışmanlık", "İş Geliştirme", "Planlama"],
		experience: "10+ yıl"
	},
]

// Blog posts data for the updates section
const blogPosts = [
	{
		id: "yapay-zeka-gunluk-hayat",
		title: "Yapay Zeka Günlük Hayatımızı Nasıl Değiştiriyor?",
		excerpt:
			"Yapay zekanın günlük yaşamımızdaki etkilerini keşfedin: akıllı asistanlardan kişiselleştirilmiş önerilere, sağlıktan eğitime kadar her alanda nasıl devrim yarattığını öğrenin.",
		coverImage: "/blog-yapay-zeka.jpg",
		author: "Ayşe Yılmaz",
		date: "2024-02-10",
		readTime: "6 dk okuma",
		category: "Teknoloji",
		featured: true
	},
	{
		id: "modern-web-gelistirme",
		title: "Modern Web Geliştirme: 2024 Trendleri ve En İyi Uygulamalar",
		excerpt:
			"React, Next.js ve TypeScript ile modern web uygulamaları geliştirmenin inceliklerini keşfedin. Performans, güvenlik ve kullanıcı deneyimi için en iyi stratejileri öğrenin.",
		coverImage: "/blog-web-gelistirme.jpg",
		author: "Mehmet Kaya",
		date: "2024-02-05",
		readTime: "8 dk okuma",
		category: "Yazılım Geliştirme",
		featured: false
	},
	{
		id: "dijital-donusum-stratejileri",
		title: "Şirketler İçin Dijital Dönüşüm Rehberi",
		excerpt:
			"İşletmenizi dijital çağa taşıyın. Başarılı dijital dönüşüm için stratejiler, yaygın tuzaklar ve gerçek dünya örnekleriyle kapsamlı bir rehber.",
		coverImage: "/blog-dijital-donusum.jpg",
		author: "Zeynep Arslan",
		date: "2024-01-28",
		readTime: "7 dk okuma",
		category: "İş Stratejisi",
		featured: false
	},
]

// Features data
const features = [
	{
		icon: <Zap className="h-8 w-8" />,
		title: "Hızlı Çözümler",
		description: "Hızlı ve etkili çözümlerle işlerinizi kolaylaştırıyoruz"
	},
	{
		icon: <Target className="h-8 w-8" />,
		title: "Hedef Odaklı",
		description: "Her projede net hedefler belirliyoruz ve sonuç odaklı çalışıyoruz"
	},
	{
		icon: <Users className="h-8 w-8" />,
		title: "Ekip Çalışması",
		description: "Güçlü ekip ruhuyla birlikte hareket ediyoruz"
	},
	{
		icon: <Award className="h-8 w-8" />,
		title: "Kalite Garantisi",
		description: "Her projede en yüksek kalite standartlarını uygulıyoruz"
	}
]

export default function HomePage() {
	const [activeSection, setActiveSection] = useState("hero")
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [isVisible, setIsVisible] = useState(false)
	const router = useRouter()

	useEffect(() => {
		setIsVisible(true)
		
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

	const handleBlogClick = (postId: string) => {
		router.push(`/blog/${postId}`)
	}

	return (
		<div className="min-h-screen bg-white font-sans overflow-x-hidden">
			{/* Fixed Navigation with enhanced design */}
			<nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						{/* Logo with enhanced styling */}
						<div className="flex-shrink-0">
							<h1 className="text-xl sm:text-2xl font-bold text-gradient-corexis font-serif tracking-tight">
								Corexis
							</h1>
						</div>

						{/* Desktop Navigation Menu with enhanced styling */}
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-1">
								{[
									{ id: "about", label: "Hakkımızda" },
									{ id: "team", label: "Ekibimiz" },
									{ id: "updates", label: "Güncellemeler" },
									{ id: "contact", label: "İletişim" },
								].map((item) => (
									<button
										key={item.id}
										onClick={() => scrollToSection(item.id)}
										className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-purple-50 hover:text-[#7B1FA2] ${
											activeSection === item.id 
												? "text-[#7B1FA2] bg-purple-50" 
												: "text-gray-700"
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
								className="text-gray-700 hover:text-[#7B1FA2] p-2 rounded-lg transition-colors duration-200"
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

					{/* Enhanced Mobile Navigation Menu */}
					{mobileMenuOpen && (
						<div className="md:hidden animate-in slide-in-from-top duration-300">
							<div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100 rounded-b-xl shadow-lg">
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
										className={`block w-full text-left px-3 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:bg-purple-50 hover:text-[#7B1FA2] ${
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

			{/* Enhanced Hero Section */}
			<section
				id="hero"
				className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden"
			>
				{/* Animated background */}
				<div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
					<div className="absolute inset-0 bg-gradient-corexis opacity-5"></div>
					{/* Floating shapes */}
					<div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
					<div className="absolute top-40 right-10 w-32 h-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
					<div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
				</div>
				
				<div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
					<div className="mb-6">
						<span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-[#7B1FA2] border border-purple-200">
							<Star className="h-4 w-4 mr-2" />
							Yenilikçi Çözümler
						</span>
					</div>
					
					<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 font-serif leading-tight">
						İşbirliğini <span className="text-gradient-corexis">Güçlendiriyor</span>,
						<br />
						<span className="text-gradient-corexis">Başarıyı</span> Yönlendiriyoruz
					</h1>
					
					<p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
						Yaptığımız her işte mükemmellik ve yenilikçiliğe bağlı olan özel ekibimizle, 
						<span className="font-semibold text-[#7B1FA2]"> geleceğin çözümlerini </span>
						bugün hayata geçiriyoruz.
					</p>
					
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
						<Button
							onClick={() => scrollToSection("about")}
							className="bg-gradient-corexis hover:scale-105 text-white px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl border-0 rounded-xl"
						>
							<Zap className="h-5 w-5 mr-2" />
							Bizi Tanıyın
						</Button>
						<Button
							onClick={() => scrollToSection("contact")}
							variant="outline"
							className="border-2 border-[#7B1FA2] text-[#7B1FA2] hover:bg-[#7B1FA2] hover:text-white px-8 py-4 text-lg font-medium transition-all duration-300 rounded-xl"
						>
							İletişime Geçin
							<ArrowRight className="h-5 w-5 ml-2" />
						</Button>
					</div>

					{/* Feature highlights */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
						{features.map((feature, index) => (
							<div 
								key={index}
								className={`text-center transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
							>
								<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 text-[#7B1FA2] mb-3">
									{feature.icon}
								</div>
								<h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1">{feature.title}</h3>
								<p className="text-gray-600 text-xs md:text-sm">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Enhanced About Us Section */}
			<section id="about" className="py-16 lg:py-24 bg-white relative">
				{/* Background decoration */}
				<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-50 to-transparent rounded-full -translate-y-48 translate-x-48 opacity-60"></div>
				
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
					<div className="text-center mb-16">
						<div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-[#7B1FA2] border border-purple-200 mb-6">
							<Users className="h-4 w-4 mr-2" />
							Hakkımızda
						</div>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif">
							Kimiz ve Neler <span className="text-gradient-corexis">Yapıyoruz</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							İşbirliği, yenilikçilik ve mükemmelliğe olan sarsılmaz bağlılığımız aracılığıyla 
							olağanüstü sonuçlar sunmaya adanmış dinamik bir profesyoneller ekibiyiz.
						</p>
					</div>

					{/* Enhanced grid layout */}
					<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
						<div className="relative">
							<div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl opacity-20"></div>
							<img
								src="/professional-team-collaboration.png"
								alt="Our team collaborating"
								className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
							/>
						</div>
						
						<div className="space-y-8">
							<div className="group">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 bg-gradient-corexis rounded-xl flex items-center justify-center mr-4">
										<TrendingUp className="h-6 w-6 text-white" />
									</div>
									<h3 className="text-2xl font-bold text-gray-900 font-serif group-hover:text-[#7B1FA2] transition-colors duration-300">
										Hikayemiz
									</h3>
								</div>
								<p className="text-gray-600 leading-relaxed text-lg">
									Ekiplerin nasıl işbirliği yaptığını ve hedeflerine nasıl ulaştığını dönüştürme vizyonuyla kurulmuş olan şirketimiz, 
									yenilikçi çözümler ve olağanüstü hizmet sunumu arayan organizasyonlar için güvenilir bir partner haline gelmiştir.
								</p>
							</div>
							
							<div className="group">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 bg-gradient-corexis-accent rounded-xl flex items-center justify-center mr-4">
										<Award className="h-6 w-6 text-white" />
									</div>
									<h3 className="text-2xl font-bold text-gray-900 font-serif group-hover:text-[#7B1FA2] transition-colors duration-300">
										Deneyimimiz
									</h3>
								</div>
								<p className="text-gray-600 leading-relaxed text-lg">
									Farklı sektörlerde <span className="font-bold text-[#7B1FA2]">15 yılı</span> aşan birleşik deneyimimizle, 
									ekibimiz üstlendiğimiz her projeye derin uzmanlık ve yeni perspektifler getiriyor.
								</p>
								
								{/* Progress indicators */}
								<div className="mt-6 space-y-3">
									{[
										{ label: "Müşteri Memnuniyeti", percentage: 98 },
										{ label: "Proje Başarı Oranı", percentage: 95 },
										{ label: "Yeniden Çalışma Oranı", percentage: 87 }
									].map((item, index) => (
										<div key={index} className="space-y-2">
											<div className="flex justify-between text-sm">
												<span className="font-medium text-gray-700">{item.label}</span>
												<span className="text-[#7B1FA2] font-bold">{item.percentage}%</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2">
												<div 
													className="bg-gradient-corexis h-2 rounded-full transition-all duration-1000 ease-out"
													style={{ width: `${item.percentage}%` }}
												></div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Enhanced mission and vision cards */}
					<div className="grid md:grid-cols-2 gap-8 mb-16">
						<Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
							<div className="absolute top-0 left-0 w-full h-1 bg-gradient-corexis"></div>
							<CardContent className="p-8">
								<div className="flex items-center mb-6">
									<div className="w-12 h-12 bg-gradient-corexis rounded-xl flex items-center justify-center mr-4">
										<Target className="h-6 w-6 text-white" />
									</div>
									<h3 className="text-2xl font-bold text-gray-900 font-serif">Misyonumuz</h3>
								</div>
								<p className="text-gray-600 leading-relaxed text-lg">
									Yenilikçi çözümler sunarak, işbirliğini teşvik ederek ve sürdürülebilir büyüme ve başarıyı 
									yönlendiren olağanüstü sonuçlar sunarak ekipleri ve organizasyonları güçlendirmek.
								</p>
							</CardContent>
						</Card>

						<Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
							<div className="absolute top-0 left-0 w-full h-1 bg-gradient-corexis-accent"></div>
							<CardContent className="p-8">
								<div className="flex items-center mb-6">
									<div className="w-12 h-12 bg-gradient-corexis-accent rounded-xl flex items-center justify-center mr-4">
										<Zap className="h-6 w-6 text-white" />
									</div>
									<h3 className="text-2xl font-bold text-gray-900 font-serif">Hedeflerimiz</h3>
								</div>
								<p className="text-gray-600 leading-relaxed text-lg">
									Yaptığımız her işte kalite, dürüstlük ve müşteri memnuniyetine olan bağlılığımızı korurken 
									sürekli yenilik yapmak, uzmanlığımızı genişletmek ve kalıcı ortaklıklar kurmak.
								</p>
							</CardContent>
						</Card>
					</div>

					{/* Enhanced statistics */}
					<div className="text-center">
						<h3 className="text-3xl font-bold text-gray-900 mb-12 font-serif">Rakamlarla Başarımız</h3>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							{[
								{ number: "15+", label: "Yıllık Deneyim", color: "#7B1FA2" },
								{ number: "100+", label: "Tamamlanan Proje", color: "#9C27B0" },
								{ number: "50+", label: "Mutlu Müşteri", color: "#E040FB" },
								{ number: "24/7", label: "Destek Hizmeti", color: "#F06292" }
							].map((stat, index) => (
								<div key={index} className="group text-center transform hover:scale-105 transition-all duration-300">
									<div className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 group-hover:shadow-lg transition-all duration-300">
										<div className="text-3xl font-bold" style={{ color: stat.color }}>
											{stat.number}
										</div>
									</div>
									<div className="text-gray-600 font-medium">{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Enhanced Team Section */}
			<section id="team" className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-white relative overflow-hidden">
				{/* Background decoration */}
				<div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-100 to-transparent rounded-full -translate-x-48 translate-y-48 opacity-60"></div>
				
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
					<div className="text-center mb-16">
						<div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/80 text-[#7B1FA2] border border-purple-200 mb-6 backdrop-blur-sm">
							<Users className="h-4 w-4 mr-2" />
							Takımımız
						</div>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif">
							<span className="text-gradient-corexis">Yetenekli</span> Ekibimiz
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Başarımızı yönlendiren yetenekli bireylerle tanışın. Her üye, olağanüstü sonuçlar sunmak için 
							benzersiz uzmanlık ve tutku getiriyor.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{teamMembers.map((member, index) => (
							<Card
								key={member.id}
								className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
								onClick={() => handleMemberClick(member.id)}
							>
								<CardContent className="p-0">
									<div className="relative overflow-hidden">
										<div className="aspect-square relative">
											<img
												src={member.image || "/placeholder.svg"}
												alt={member.name}
												className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
											
											{/* Floating skills tags */}
											<div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
												<div className="flex flex-wrap gap-2">
													{member.skills.map((skill, skillIndex) => (
														<span key={skillIndex} className="px-3 py-1 bg-white/90 text-[#7B1FA2] text-xs font-medium rounded-full backdrop-blur-sm">
															{skill}
														</span>
													))}
												</div>
											</div>
										</div>
									</div>

									<div className="p-6">
										<div className="flex items-center justify-between mb-3">
											<h3 className="text-xl font-bold text-gray-900 font-serif group-hover:text-[#7B1FA2] transition-colors duration-300">
												{member.name}
											</h3>
											<span className="text-sm font-medium text-[#9C27B0] bg-purple-100 px-3 py-1 rounded-full">
												{member.experience}
											</span>
										</div>
										
										<p className="text-[#7B1FA2] font-semibold text-lg mb-3">{member.role}</p>
										<p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{member.bio}</p>
										
										<div className="flex items-center justify-between">
											<div className="flex items-center text-gray-500">
												<Mail className="h-4 w-4 mr-2" />
												<span className="text-sm">İletişim</span>
											</div>
											<div className="flex items-center text-[#7B1FA2] group-hover:text-[#E040FB] transition-colors duration-300">
												<span className="text-sm font-medium mr-2">Profili Gör</span>
												<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<div className="text-center mt-16">
						<p className="text-gray-600 mb-6 text-lg">Ekip üyelerimiz hakkında daha fazla bilgi edinmek ister misiniz?</p>
						<Button
							onClick={() => scrollToSection("contact")}
							className="bg-white/80 border-2 border-[#7B1FA2] text-[#7B1FA2] hover:bg-[#7B1FA2] hover:text-white transition-all duration-300 px-8 py-3 text-lg font-medium rounded-xl backdrop-blur-sm shadow-lg hover:shadow-xl"
						>
							<Users className="h-5 w-5 mr-2" />
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
													{new Date(post.date).toLocaleDateString("en-US", {
														year: "numeric",
														month: "short",
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
											<span className="text-xs sm:text-sm text-gray-600">By {post.author}</span>
											<div className="flex items-center text-[#7B1FA2] group-hover:text-[#E040FB] transition-colors duration-200">
												<span className="text-xs sm:text-sm font-medium mr-2">Read More</span>
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
										<p className="text-gray-600 text-sm sm:text-base">hello@corexis.com</p>
										<p className="text-xs sm:text-sm text-gray-500">24 saat içinde yanıt vereceğiz</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-lg flex items-center justify-center">
										<svg className="h-5 w-5 sm:h-6 sm:w-6 text-[#E040FB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Bizi Arayın</h4>
										<p className="text-gray-600 text-sm sm:text-base">+90 (212) 555-0123</p>
										<p className="text-xs sm:text-sm text-gray-500">Pzt-Cum, 09:00-18:00</p>
									</div>
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
										<p className="text-gray-600 text-sm sm:text-base">Teknoloji Caddesi No: 123</p>
										<p className="text-gray-600 text-sm sm:text-base">Levent, İstanbul 34394</p>
										<p className="text-xs sm:text-sm text-gray-500">Sadece randevu ile</p>
									</div>
								</div>
							</div>

							{/* Social Links */}
							<div className="pt-6 lg:pt-8 border-t border-gray-200">
								<h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Bizi Takip Edin</h4>
								<div className="flex space-x-4">
									<a
										href="#"
										className="w-10 h-10 bg-gradient-corexis-primary text-white rounded-lg flex items-center justify-center hover:bg-gradient-corexis-accent transition-all duration-200"
									>
										<Twitter className="h-5 w-5" />
									</a>
									<a
										href="#"
										className="w-10 h-10 bg-gradient-corexis-primary text-white rounded-lg flex items-center justify-center hover:bg-gradient-corexis-accent transition-all duration-200"
									>
										<Linkedin className="h-5 w-5" />
									</a>
									<a
										href="#"
										className="w-10 h-10 bg-gradient-corexis-primary text-white rounded-lg flex items-center justify-center hover:bg-gradient-corexis-accent transition-all duration-200"
									>
										<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z" />
										</svg>
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
						<div className="border-t border-white/10">
							<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
								<div className="text-gray-400 text-sm text-center md:text-left">
									© 2024 Corexis. Tüm hakları saklıdır.
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
					<p className="text-red-700 text-xs sm:text-sm mt-1">Lütfen tekrar deneyin veya doğrudan hello@corexis.com adresinden bize ulaşın</p>
				</div>
			)}

			{/* Privacy Notice */}
			<p className="text-xs sm:text-sm text-gray-500 text-center">
				Bu formu göndererek gizlilik politikamızı kabul etmiş olursunuz. Bilgilerinizi asla üçüncü taraflarla paylaşmayacağız.
			</p>
		</form>
	)
}
