'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Practice Areas', href: '/practice-areas' },
  { name: 'Laws', href: '/laws' },
  { name: 'Business Licence Registration', href: '/business-registration' },
  { 
    name: 'Immigration', 
    href: '/immigration',
    subItems: [
      { name: 'UK Immigration', href: '/uk-immigration' },
      { name: 'Canada Immigration', href: '/canada-immigration' },
      { name: 'Australia Immigration', href: '/australia-immigration' },
      { name: 'Europe Immigration', href: '/europe-immigration' },
      { name: 'UAE Immigration', href: '/uae-immigration' },
    ]
  },
  { 
    name: 'Study Abroad', 
    href: '/study-abroad',
    subItems: [
      { name: 'Study in UK', href: '/uk-immigration' },
      { name: 'Study in Canada', href: '/canada-immigration' },
      { name: 'Study in Australia', href: '/australia-immigration' },
      { name: 'Study in Europe', href: '/europe-immigration' },
    ]
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const NavLink = ({ item }: { item: typeof menuItems[0] }) => {
    if (item.subItems) {
      return (
        <div className="relative group">
          <div className="flex items-center text-sm text-gray-600 hover:text-black transition-colors cursor-pointer">
            {item.name} <ChevronDown className="ml-1 h-4 w-4" />
          </div>
          <div className="absolute left-0 top-full mt-2 w-48 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="py-1">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <Link
        href={item.href}
        className="text-sm text-gray-600 hover:text-black transition-colors"
      >
        {item.name}
      </Link>
    )
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/main-logo.png"
                alt="Law Firm Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </Link>
            <Link href="/" className="text-1xl font-bold">Manzoor Ahmad Law Associates</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
           <Link href="/contact"> <Button variant="default" size="sm">Free Consultation</Button> </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[400px]">
              <div className="mt-8 flex flex-col gap-4">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    {item.subItems ? (
                      <>
                        <div className="font-semibold mb-2">{item.name}</div>
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="text-sm text-gray-600 hover:text-black transition-colors block ml-4 mb-2"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
           <Link href="/contact"> <Button className="mt-4">Free Consultation</Button> </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}