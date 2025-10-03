"use client"

import type React from "react"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Calendar, Building } from "lucide-react"

// Extended team data with experience information
const teamMembers = [
	{
		id: "berkay-duzgun",
		name: "Berkay Düzgün",
		role: "CEO",
		bio: "Merhaba, ben Berkay. ASELSAN Konya’da Elektrik-Elektronik öğrencisiyim. Aynı zamanda Corexis grubunun kurucusu ve Deneyap öğrencisiyim. Bugüne kadar birçok Deneyap şenliğinde takım kaptanı olarak yer aldım ve yönettiğim ekiplerle çeşitli dereceler elde ettim. Bunun yanı sıra, Teknofest’te yazılım ve farklı teknolojik alanlarda defalarca yarışmalara katıldım. Elektrik-elektronik, yazılım geliştirme ve yenilikçi teknolojiler üzerine çalışıyor; özellikle sensör sistemleri, gömülü yazılımlar ve otomasyon odaklı projeler geliştiriyorum. Takım çalışmasına uyumlu, araştırmaya meraklı ve problem çözme odaklı biriyim. Hedefim; teknoloji ve mühendisliği birleştirerek, hem akademik hem de profesyonel hayatta yenilikçi çözümler üreten bir mühendis olmak.",
		email: "berkayduzgun42@gmail.com",
		phone: "+90 541 887 48 64",
		location: "Konya | Türkiye",
		image: "/berkay.jpg",
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
		id: "michael-chen",
		name: "Michael Chen",
		role: "CTO",
		bio: "Technology expert specializing in scalable architecture and emerging technologies. Drives our technical innovation forward with cutting-edge solutions.",
		email: "michael@teamlogo.com",
		phone: "+1 (555) 234-5678",
		location: "Seattle, WA",
		image: "/team-michael-chen.png",
		fullBio:
			"Michael is a seasoned technology leader with expertise in building scalable systems and implementing emerging technologies. He has a proven track record of leading engineering teams and delivering complex technical solutions. His deep understanding of cloud architecture, AI/ML, and modern development practices makes him instrumental in driving our technical strategy forward.",
		experiences: [
			{
				company: "TeamLogo",
				role: "CTO",
				duration: "2021 - Present",
				description:
					"Lead technical strategy and engineering teams. Architected scalable cloud infrastructure serving 1M+ users with 99.9% uptime.",
			},
			{
				company: "CloudTech Solutions",
				role: "Senior Engineering Manager",
				duration: "2018 - 2021",
				description:
					"Managed a team of 15 engineers building enterprise cloud solutions. Implemented DevOps practices that reduced deployment time by 80%.",
			},
			{
				company: "StartupXYZ",
				role: "Lead Developer",
				duration: "2015 - 2018",
				description:
					"Built the core platform from ground up using modern web technologies. Scaled the system to handle 10x traffic growth during rapid expansion.",
			},
		],
	},
	{
		id: "emily-rodriguez",
		name: "Emily Rodriguez",
		role: "Head of Design",
		bio: "Creative director with expertise in user experience and brand identity. Creates compelling visual narratives that resonate with users.",
		email: "emily@teamlogo.com",
		phone: "+1 (555) 345-6789",
		location: "Austin, TX",
		image: "/team-emily-rodriguez.png",
		fullBio:
			"Emily is a creative visionary who leads our design team with passion and expertise. Her background in both digital and traditional design allows her to create cohesive brand experiences across all touchpoints. She believes in human-centered design and has a talent for translating complex ideas into intuitive, beautiful interfaces.",
		experiences: [
			{
				company: "TeamLogo",
				role: "Head of Design",
				duration: "2020 - Present",
				description:
					"Lead design strategy and creative direction for all products. Established design system used across 20+ products, improving consistency by 90%.",
			},
			{
				company: "Design Studio Pro",
				role: "Senior UX Designer",
				duration: "2017 - 2020",
				description:
					"Designed user experiences for B2B SaaS products. Led redesign project that increased user engagement by 60% and reduced support tickets by 40%.",
			},
			{
				company: "Creative Agency Inc.",
				role: "Visual Designer",
				duration: "2014 - 2017",
				description:
					"Created brand identities and marketing materials for diverse clients. Managed multiple projects simultaneously while maintaining high quality standards.",
			},
		],
	},
	{
		id: "david-kim",
		name: "David Kim",
		role: "Lead Developer",
		bio: "Full-stack developer passionate about clean code and performance optimization. Builds robust, scalable solutions that power our platform.",
		email: "david@teamlogo.com",
		phone: "+1 (555) 456-7890",
		location: "New York, NY",
		image: "/team-david-kim.png",
		fullBio:
			"David is a skilled full-stack developer who brings technical excellence to every project. His expertise spans modern web technologies, database optimization, and system architecture. He's passionate about writing clean, maintainable code and mentoring junior developers to help them grow their skills.",
		experiences: [
			{
				company: "TeamLogo",
				role: "Lead Developer",
				duration: "2021 - Present",
				description:
					"Lead development of core platform features. Implemented performance optimizations that improved page load times by 50% and reduced server costs by 30%.",
			},
			{
				company: "WebDev Corp",
				role: "Senior Full-Stack Developer",
				duration: "2018 - 2021",
				description:
					"Developed and maintained multiple web applications using React, Node.js, and PostgreSQL. Mentored 5 junior developers and established code review processes.",
			},
			{
				company: "Freelance",
				role: "Web Developer",
				duration: "2016 - 2018",
				description:
					"Built custom web solutions for small businesses and startups. Delivered 20+ projects on time and within budget while maintaining long-term client relationships.",
			},
		],
	},
	{
		id: "lisa-thompson",
		name: "Lisa Thompson",
		role: "Marketing Director",
		bio: "Strategic marketer with deep expertise in digital campaigns and brand growth. Amplifies our message globally through innovative marketing strategies.",
		email: "lisa@teamlogo.com",
		phone: "+1 (555) 567-8901",
		location: "Los Angeles, CA",
		image: "/team-lisa-thompson.png",
		fullBio:
			"Lisa is a results-driven marketing professional who has built her career on creating compelling campaigns that drive growth. Her expertise in digital marketing, content strategy, and brand development has helped numerous companies achieve their marketing goals. She's passionate about data-driven marketing and staying ahead of industry trends.",
		experiences: [
			{
				company: "TeamLogo",
				role: "Marketing Director",
				duration: "2020 - Present",
				description:
					"Developed and executed marketing strategies that increased brand awareness by 200% and generated 150% growth in qualified leads.",
			},
			{
				company: "Growth Marketing Agency",
				role: "Senior Marketing Manager",
				duration: "2017 - 2020",
				description:
					"Managed marketing campaigns for B2B SaaS clients. Achieved average 40% increase in conversion rates through A/B testing and optimization.",
			},
			{
				company: "Digital Solutions Inc.",
				role: "Marketing Specialist",
				duration: "2015 - 2017",
				description:
					"Executed multi-channel marketing campaigns including email, social media, and content marketing. Increased organic traffic by 300% over 2 years.",
			},
		],
	},
	{
		id: "james-wilson",
		name: "James Wilson",
		role: "Operations Manager",
		bio: "Operations specialist focused on process optimization and team efficiency. Ensures seamless project delivery and operational excellence.",
		email: "james@teamlogo.com",
		phone: "+1 (555) 678-9012",
		location: "Chicago, IL",
		image: "/team-james-wilson.png",
		fullBio:
			"James is an operations expert who ensures our team runs like a well-oiled machine. His background in process improvement and project management helps us deliver exceptional results consistently. He's passionate about creating efficient workflows and fostering a collaborative team environment.",
		experiences: [
			{
				company: "TeamLogo",
				role: "Operations Manager",
				duration: "2021 - Present",
				description:
					"Streamlined operations processes resulting in 35% improvement in project delivery times. Implemented project management tools used by 100+ team members.",
			},
			{
				company: "Efficiency Consulting",
				role: "Senior Operations Consultant",
				duration: "2018 - 2021",
				description:
					"Helped mid-size companies optimize their operations. Led process improvement initiatives that reduced operational costs by average of 25%.",
			},
			{
				company: "Manufacturing Corp",
				role: "Process Improvement Specialist",
				duration: "2015 - 2018",
				description:
					"Analyzed and optimized manufacturing processes. Implemented lean methodologies that increased productivity by 30% and reduced waste by 20%.",
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

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle form submission
		console.log("Form submitted:", formData)
		alert("Message sent successfully!")
		setFormData({ subject: "", name: "", email: "", message: "" })
	}

	const scrollToSection = (sectionId: string) => {
		// Keep existing behavior: navigate back to home or to a root hash.
		if (sectionId === "home") {
			router.push("/")
			return
		}
		router.push(`/#${sectionId}`)
	}

	return (
		<div className="min-h-screen bg-white font-sans">
			{/* Fixed Navigation - aligned with app/page.tsx nav styles and mobile behavior */}
			<nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex-shrink-0">
							{/* Use same logo style as main page */}
							<h1 className="text-xl sm:text-2xl font-bold text-gradient-corexis font-serif cursor-pointer" onClick={() => router.push("/")}>Corexis</h1> 
						</div>

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
									<Phone className="h-4 w-4 mr-3 text-[#7B1FA2]" />
									<span className="text-sm">{member.phone}</span>
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
										className="w-full md:w-auto bg-gradient-corexis-primary hover:bg-gradient-corexis-accent text-white px-8 py-3 text-lg font-medium transition-all duration-300"
									>
										Mesaj Gönder
									</Button>
								</form>
							</CardContent>
						</Card>
					</section>
				</div>
			</div>
		</div>
	)
}
									