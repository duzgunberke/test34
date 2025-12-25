"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Twitter, 
  Linkedin, 
  Facebook,
  MapPin,
  Phone,
  Mail,
  Instagram // Add this import
} from "lucide-react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useRouter, useParams } from "next/navigation"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  coverImage: string
  author: string
  date: string
  readTime: string
  category: string
  content: string
  gallery?: {
    image: string
    caption: string
  }[]
}

interface NavItem {
  id: string
  label: string
}

const navigationItems: NavItem[] = [
  { id: "about", label: "Hakkımızda" },
  { id: "team", label: "Ekibimiz" },
  { id: "updates", label: "Güncellemeler" },
  { id: "sponsors", label: "Sponsorlarımız" }, // Add this line
  { id: "contact", label: "İletişim" }
]

const blogPosts: BlogPost[] = [
  {
    id: "nasaspaceappschallenge",
    title: "NASA Space Apps Challenge: 48 Saatlik Uzay Macerası",
    excerpt:
      "Geçtiğimiz hafta sonu Corexis ekibiyle birlikte Konya Kapsül'de bir maceranın içindeydik. NASA Space Apps Challenge 2025 - dünyanın en büyük hackathonu. 40'a yakın üniversiteli takım, 48 saat boyunca uzay ve Dünya için çözümler üretmeye çalışıyordu.",
    coverImage: "/kapakresmiblogbir.jpg",
    author: "Berkay Düzgün",
    date: "2025-10-5",
    readTime: "6 dk okuma",
    category: "Teknoloji | Yarışma",
    content: `
      <h1>48 Saat, Sıfır Uyku, Sonsuz Deneyim: NASA Space Apps 2025</h1>

      <p>Geçtiğimiz hafta sonu Corexis ekibiyle birlikte Konya Kapsül'de bir maceranın içindeydik. NASA Space Apps Challenge 2025 - dünyanın en büyük hackathonu. 40'a yakın üniversiteli takım, 48 saat boyunca uzay ve Dünya için çözümler üretmeye çalışıyordu. Biz de onlardan biriydik.</p>

      <h2>Neden NASA Space Apps?</h2>
      <p>Açıkcası, Corexis'i kurarken hedefimiz belliydi: sadece yazılım geliştirmek değil, gerçek problemlere gerçek çözümler üretmek. NASA Space Apps Challenge tam da bu felsefenin hayata geçebileceği bir ortam sunuyordu. Uzay teknolojileri, veri analizi, sürdürülebilirlik... Hepsi bir arada.</p>
      
      <p>Ayrıca bu yarışma sadece kod yazmak değildi. İş modeli, sunum, ekip çalışması - gerçek bir startup deneyiminin hızlandırılmış versiyonu gibiydi.</p>

      <h2>LEO İş Modeli Tasarımcısı: Projemiz</h2>
      <p>48 saat içinde ne yaptık peki?</p>
      
      <p><strong>LEO İş Modeli Tasarımcısı</strong> adını verdiğimiz platformumuzu geliştirdik. Amacımız basitti: Uzayda giderek artan çöp ve çarpışma risklerini hesaplayabilen, aynı zamanda bunu sürdürülebilir bir iş modeline dönüştürebilen bir sistem.</p>
      
      <p>Uyduların ve istasyonların yörünge verilerini analiz ettik. Potansiyel çarpışma risklerini hesapladık. Ama asıl önemlisi - bunu nasıl ekonomik bir modele çevirebileceğimizi gösterdik.</p>
      
      <p>Çünkü uzay artık sadece NASA'nın, SpaceX'in veya devasa bütçelerin işi değil. Gelecekte uzay ekonomisinde küçük oyuncular da yer alacak. Biz de onlara bir araç sunmak istedik.</p>

      <h2>48 Saatin Hikayesi</h2>
      <p>Söylemesi kolay: "48 saat çalıştık." Ama işin içinde olunca her şey farklı.</p>
      
      <p>İlk gece saat 03:00'te hala kod yazıyorduk. Sabah 06:00'da ilk prototip çalışmaya başladı. Öğleden sonra ekip olarak sunum stratejimizi belirledik. Gece yarısı son rötuşları yaptık.</p>
      
      <p>Arada kahve molalarında diğer takımlarla sohbet ettik. Onların projelerini dinledik, biz anlattık. Jüri sunumunda elimizden geleni yaptık.</p>
      
      <p>Ve sonuç? <strong>3. olduk.</strong></p>
    
      <h2>Deneyim Ne Öğretti?</h2>
      <p><strong>Hız önemli.</strong> Fikri olabildiğince hızlı prototipe dönüştürmek, test etmek, düzeltmek. Startup dünyasının ta kendisi.</p>
      
      <p><strong>Ekip her şey.</strong> Herkesin farklı becerilerini birleştirdiğimizde ortaya çıkan sonuç, tek başımıza yapabileceğimizin çok ötesindeydi.</p>
      
      <p><strong>Sunum yetenek kadar önemli.</strong> Kodu yazmak yetmiyor, onu anlatabilmek, değerini gösterebilmek gerekiyor. Jüriye neden önemli olduğunu aktarmak, yatırımcıya pitch yapmak gibi.</p>
      
      <p><strong>Networking gerçek.</strong> Hackathon boyunca tanıştığımız insanlar, fikir alışverişleri... Bunlar belki yarışmanın kendisinden bile değerliydi.</p>

      <h2>Peki Şimdi Ne Olacak?</h2>
      <p>LEO İş Modeli Tasarımcısı projesi bizim için bitmedi. Tam tersine, daha yeni başladı.</p>
      
      <p>Şu an projeyi geliştirmeye devam ediyoruz. Gerçek uydu verilerini daha iyi entegre etmeyi, kullanıcı arayüzünü iyileştirmeyi ve belki de gelecekte gerçek bir ürün olarak piyasaya sürmeyi planlıyoruz.</p>
      
      <p>Corexis için bu yarışma sadece bir başarı hikayesi değildi. Vizyonumuzu test etme, ekibimizin gücünü görme ve en önemlisi - bu işin gerçekten yapılabilir olduğunu kanıtlama fırsatıydı.</p>

      <h2>Teşekkürler</h2>
      <p>Kapsül ekibine, Future In Space & Space Network'e etkinliği mükemmel organize ettikleri için teşekkür ediyoruz. Jüriye yapıcı geri bildirimleri için, rakip takımlara motivasyonları için teşekkür ediyoruz.</p>
      
      <p>Ve tabii ki Corexis ekibine - bu macerayı birlikte yaşadığımız için.</p>
      
      <p><strong>Bu sadece başlangıç. Uzay bizim için uzak değil, hedef. 🚀</strong></p>

      <hr />

      <p><em>Corexis ekibi olarak NASA Space Apps Challenge gibi etkinliklere katılmaya, kendimizi geliştirmeye ve geleceğin teknolojilerini üretmeye devam edeceğiz. Bizi takip etmeye devam edin!</em></p>
    `,
    gallery: [
      {
        image: "/nasa/nasa1.jpg",
        caption: "Jüri sunumu sırasında"
      },
      {
        image: "/nasa/nasa2.jpg",
        caption: "Jüri sunumu sırasında"
      },
      {
        image: "/nasa/nasa3.jpg",
        caption: "Jüri sunumu sırasında"
      },
      {
        image: "/nasa/nasa4.jpg",
        caption: "Jüri sunumu sırasında"
      },
      {
        image: "/nasa/nasa5.jpg",
        caption: "LEO İş Modeli Tasarımcısı demo ekranı"
      },
      {
        image: "/nasa/nasa6.jpg",
        caption: "Ödül töreni"
      }
    ]
  },
  {
    id: "nasaspaceappschallengeglobal",
    title: "NASA Space Apps Corexis'in Uluslararası Başarısı",
    excerpt:
      "Geçtiğimiz günlerde Corexis ekibi olarak büyük bir başarıya imza attık. NASA Space Apps Challenge 2025'te geliştirdiğimiz projemiz, 300 binden fazla çalışma arasından seçilerek global adaylar arasında gösterildi. Dünyanın en büyük hackathonunda böyle bir aşamaya gelmek bizim için büyük bir gurur.",
    coverImage: "/kapakresmiblogiki.png",
    author: "Berkay Düzgün",
    date: "2025-11-9",
    readTime: "8 dk okuma",
    category: "Teknoloji | Yarışma",
    content: `
      <h1>Global Finalistler Arasındayız: NASA Space Apps Challenge 2025</h1>

      <p>Ocak ayının başında gelen e-posta, tüm ekibi ayağa kaldırdı. NASA Space Apps Challenge 2025 global finalistleri açıklandı - ve Corexis, dünya çapında bu listeye giren takımlardan biri oldu. Ekim ayında Konya Kapsül'de yaşadığımız 48 saatlik maraton, şimdi küresel bir yarışa dönüştü.</p>

      <h2>Yerel Başarıdan Global Sahneye</h2>
      <p>Konya'da 40'a yakın takım arasında 3. olmuştuk. Güzeldi, heyecan vericiydi, başarılıydık. Ama açıkcası, o gece bittiğinde içimizde bir soru vardı: "Peki ya sonrası?"</p>
      
      <p>Sonrası geldi. Ve nasıl geldi.</p>
      
      <p>LEO İş Modeli Tasarımcısı projemiz, o hafta sonundan sonra rafta kalmadı. Tam tersine, her gün üzerine kafa yorduk. Kodu iyileştirdik, kullanıcı arayüzünü geliştirdik, iş modelini daha da somutlaştırdık. Çünkü bu proje bizim için sadece bir yarışma çalışması değildi - gerçek bir vizyondu.</p>
      
      <p>Ve NASA bunu gördü.</p>

      <h2>Dünya Çapında Bir Yarış</h2>
      <p>NASA Space Apps Challenge, her yıl 150'den fazla ülkede, 450'den fazla şehirde düzenleniyor. Binlerce takım, on binlerce katılımcı. Ve bunların arasından seçilen global finalistler, artık sadece yerel kahramanlar değil - dünya çapında tanınan projeler.</p>
      
      <p>Bizim için bu ne anlama geliyor?</p>
      
      <p>Artık sadece Konya'da değil, dünyada ses getirdiğimiz anlamına geliyor. Uzay çöpü ve sürdürülebilirlik üzerine kurduğumuz fikrin, sadece Türkiye'de değil, küresel ölçekte değer bulduğu anlamına geliyor.</p>
      
      <p>Ve en önemlisi - Corexis'in vizyonunun doğru yolda olduğunu kanıtlıyor.</p>

      <h2>Ne Değişti?</h2>
      <p>Global finalist olmak, sadece bir ödül veya bir başarı hikayesi değil. Sorumluluk demek.</p>
      
      <p>Proje üzerinde çalışırken artık daha dikkatli düşünüyoruz. Çünkü bu sadece bizim projemiz değil - dünya çapında incelenen, değerlendirilen, belki de ilham kaynağı olan bir çalışma.</p>
      
      <p>Aynı zamanda büyük bir fırsat. Dünya çapında uzay teknolojileri, sürdürülebilirlik ve girişimcilik alanlarında çalışan insanlarla bağlantı kuruyoruz. Networkümüz genişledi, vizyonumuz büyüdü.</p>

      <h2>Corexis'in Yolculuğu</h2>
      <p>Bu başarı, Corexis'in kuruluş amacının bir teyidi gibi. Gerçek problemlere gerçek çözümler üretmek. Sadece kod yazmak değil, değer yaratmak. Ekip olarak büyümek, öğrenmek, gelişmek.</p>
      
      <p>Ekim ayında Konya Kapsül'de başlayan yolculuk, şimdi global bir yarışa dönüştü. Ama daha önemlisi - bu yolculuk bitmedi, daha yeni başlıyor.</p>

      <h2>Sırada Ne Var?</h2>
      <p>Global finalist olmak harika. Ama bizim hedefimiz daha büyük.</p>
      
      <p>LEO İş Modeli Tasarımcısı'nı gerçek bir ürün haline getirmek istiyoruz. Uzay ekonomisine somut bir katkı sunmak istiyoruz. Türkiye'den dünyaya uzanan bir teknoloji hikayesi yazmak istiyoruz.</p>
      
      <p>NASA Space Apps'in global ödül töreni yaklaşırken, biz çalışmaya devam ediyoruz. Sonuç ne olursa olsun, bu deneyim bize çok şey öğretti. Ve Corexis'in geleceği için sağlam bir temel oluşturdu.</p>

      <h2>Teşekkürler (Yine)</h2>
      <p>NASA'ya bu fırsatı sunduğu için teşekkür ediyoruz. Kapsül ekibine, Future In Space & Space Network'e destekleri için teşekkür ediyoruz. Rakip takımlara, jüriye, bizi destekleyen herkese teşekkür ediyoruz.</p>
      
      <p>Ve en önemlisi - bizlere inanan, takip eden, arkamızda duran herkese teşekkürler.</p>
      
      <p><strong>Bu sadece başlangıç. Uzay bizim için uzak değil, hedef. 🚀</strong></p>

      <hr />

      <p><em>Corexis ekibi olarak bu yolculukta ilerlemeye, kendimizi geliştirmeye ve geleceğin teknolojilerini üretmeye devam edeceğiz. Bizi takip etmeye devam edin!</em></p>
    `,
    gallery: [
      {
        image: "/kapakresmiblogiki.png",
        caption: "Uluslararası Adayalar Açıklandı"
      },
    ]
  },
  
]

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const [activeSection, setActiveSection] = useState("hero")
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1)

  const postId = params?.id as string
  const post = blogPosts.find((p) => p.id === postId)

  useEffect(() => {
    setIsLoading(false)
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id)
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
    router.push(`/#${sectionId}`)
  }

  const handleShare = (platform: 'twitter' | 'linkedin' | 'facebook') => {
    if (!post) return

    const url = window.location.href
    const title = encodeURIComponent(post.title)
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${title}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    }

    window.open(shareUrls[platform], "_blank", "width=600,height=400")
  }

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (post?.gallery && selectedImageIndex < post.gallery.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1)
    }
  }

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (post?.gallery && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1)
    }
  }

  if (isLoading) {
    return <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white font-sans flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Post Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız blog yazısı mevcut değil.</p>
          <Button 
            onClick={() => router.push("/")} 
            className="bg-blue-600 hover:bg-cyan-500 text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Anasayfaya Dön
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
              <img 
                src="/corexislogopng.png" 
                alt="Corexis Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
              <h1 
                onClick={() => router.push("/")}
                className="text-xl sm:text-2xl font-bold text-gradient-corexis font-serif cursor-pointer"
              >
                Corexis
              </h1>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => router.push(`/#${item.id}`)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 
                      ${activeSection === item.id ? 'text-[#E040FB]' : 'text-gray-700 hover:text-[#E040FB]'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={() => router.push("/#updates")}
              variant="outline"
              size="sm"
              className="border-[#7B1FA2] text-[#7B1FA2] hover:bg-[#7B1FA2] hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Güncellemelere Dön
            </Button>
          </div>
        </div>
      </nav>

      {/* Blog Post Content */}
      <article className="pt-16 mb-20">
        {/* Hero Section with Cover Image */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-8 left-8">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">{post.category}</span>
          </div>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
          <Card className="bg-white shadow-xl border-0">
            <CardContent className="p-8 md:p-12">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>Yazar: {post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>
                    {new Date(post.date).toLocaleDateString("tr-TR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  <span>{post.category}</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm font-medium text-gray-700">Bu yazıyı paylaş:</span>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => handleShare("twitter")}
                    size="sm"
                    variant="outline"
                    className="hover:bg-blue-50 hover:border-blue-300"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => handleShare("linkedin")}
                    size="sm"
                    variant="outline"
                    className="hover:bg-blue-50 hover:border-blue-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => handleShare("facebook")}
                    size="sm"
                    variant="outline"
                    className="hover:bg-blue-50 hover:border-blue-300"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Article Content */}
              <div
                className="prose prose-2xl max-w-none 
                  [&>h1]:text-5xl [&>h1]:font-bold [&>h1]:mb-12 [&>h1]:text-gray-900 [&>h1]:font-serif [&>h1]:leading-tight
                  [&>h2]:text-3xl [&>h2]:font-semibold [&>h2]:mb-8 [&>h2]:mt-16 [&>h2]:text-gray-800 [&>h2]:font-serif
                  [&>p]:text-lg [&>p]:leading-relaxed [&>p]:text-gray-600 [&>p]:mb-8
                  [&>p>strong]:font-bold [&>p>strong]:text-gray-900
                  [&>hr]:my-16 [&>hr]:border-gray-200
                  [&>p>em]:text-gray-500 [&>p>em]:italic
                  [&_a]:text-blue-600 [&_a]:no-underline hover:[&_a]:text-blue-800"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>
        </div>

        {/* Gallery Section */}
        {post?.gallery && post.gallery.length > 0 && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Galeri</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {post.gallery.map((item, index) => (
                    <div 
                      key={index} 
                      className="group relative overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white text-sm p-4">{item.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Image Modal */}
        {selectedImageIndex !== -1 && post?.gallery && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setSelectedImageIndex(-1)}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Navigation Arrows */}
              {selectedImageIndex > 0 && (
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 p-2 text-white hover:text-gray-300 transition-colors"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
              )}
              {selectedImageIndex < post.gallery.length - 1 && (
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 p-2 text-white hover:text-gray-300 transition-colors"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              )}

              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImageIndex(-1)
                }}
                className="absolute top-8 right-8 p-2 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Image */}
              <div className="max-w-7xl w-full flex flex-col items-center">
                <img
                  src={post.gallery[selectedImageIndex].image}
                  alt={post.gallery[selectedImageIndex].caption}
                  className="max-h-[80vh] w-auto object-contain"
                />
                <p className="text-white text-center mt-4 text-lg">
                  {post.gallery[selectedImageIndex].caption}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Remove or hide the Related Posts section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-20 hidden">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-serif">Daha Fazla İçerik Okumak İster Misiniz?</h3>
            <p className="text-gray-600 mb-8">
              Teknoloji, tasarım ve iş stratejileri hakkında uzman ekibimizin daha fazla makalesini keşfedin.
            </p>
            <Button
              onClick={() => router.push("/#updates")}
              className="bg-blue-600 hover:bg-cyan-500 text-white px-8 py-3 text-lg font-medium transition-all duration-300"
            >
              Tüm Makaleleri Gör
            </Button>
          </div>
        </div>
      </article>

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
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-gray-300 hover:text-[#E040FB] transition-colors duration-200 text-sm sm:text-base"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
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

        </div>      </footer>
    </div>
  )
}
