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
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Visionary leader with 10+ years in strategic planning and business development. Passionate about building innovative solutions that drive meaningful change in organizations worldwide.",
    email: "sarah@teamlogo.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    image: "/team-sarah-johnson.png",
    fullBio:
      "Sarah is a dynamic leader who founded TeamLogo with a vision to revolutionize how teams collaborate and achieve their goals. With over a decade of experience in strategic planning and business development, she has successfully guided numerous organizations through digital transformation initiatives. Her passion for innovation and commitment to excellence has made her a respected voice in the industry. Sarah holds an MBA from Stanford Graduate School of Business and is a frequent speaker at technology conferences worldwide.",
    experiences: [
      {
        company: "TeamLogo",
        role: "CEO & Founder",
        duration: "2020 - Present",
        description:
          "Founded and lead a dynamic team focused on delivering innovative collaboration solutions. Grew the company from startup to 50+ employees with $10M+ in annual revenue.",
      },
      {
        company: "TechVentures Inc.",
        role: "VP of Strategy",
        duration: "2017 - 2020",
        description:
          "Led strategic planning initiatives for a $500M technology company. Developed and executed growth strategies that resulted in 40% revenue increase over 3 years.",
      },
      {
        company: "Innovation Consulting Group",
        role: "Senior Consultant",
        duration: "2014 - 2017",
        description:
          "Provided strategic consulting services to Fortune 500 companies. Specialized in digital transformation and organizational change management.",
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

  const member = teamMembers.find((m) => m.id === params.id)

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Member not found</h1>
          <Button onClick={() => router.push("/")}>Back to Home</Button>
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
    if (sectionId === "home") {
      router.push("/")
      return
    }
    router.push(`/#${sectionId}`)
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Fixed Navigation - Same as main page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <button
                onClick={() => router.push("/")}
                className="text-2xl font-bold text-blue-600 font-serif hover:text-cyan-500 transition-colors"
              >
                TeamLogo
              </button>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: "about", label: "About Us" },
                  { id: "team", label: "Team" },
                  { id: "updates", label: "Updates" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-cyan-500 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

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

      <div className="pt-16 flex min-h-screen">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/3 bg-slate-50 p-8 lg:sticky lg:top-16 lg:h-screen lg:overflow-y-auto">
          <div className="text-center mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 font-serif">{member.name}</h1>
            <p className="text-xl text-blue-600 font-medium mb-4">{member.role}</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-serif">Biography</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{member.fullBio}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-serif">Contact Details</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-3 text-blue-600" />
                  <span className="text-sm">{member.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-3 text-blue-600" />
                  <span className="text-sm">{member.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-3 text-blue-600" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">About Me</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">{member.fullBio}</p>
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about driving innovation and excellence in everything I do. My approach combines
                strategic thinking with hands-on execution to deliver results that make a meaningful impact. I believe
                in the power of collaboration and am always excited to work with talented teams to achieve ambitious
                goals.
              </p>
            </div>
          </section>

          {/* Experiences Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Professional Experience</h2>
            <div className="space-y-6">
              {member.experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-blue-600 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1 font-serif">{exp.role}</h3>
                        <div className="flex items-center text-blue-600 mb-2">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Get in Touch</h2>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or question..."
                      rows={6}
                      required
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full md:w-auto bg-blue-600 hover:bg-cyan-500 text-white px-8 py-3 text-lg font-medium transition-all duration-300"
                  >
                    Send Message
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
