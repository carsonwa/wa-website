import Link from 'next/link';

export default function Footer() {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '#' },
        { text: 'Success Stories', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Contact', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: '#' },
        { text: 'Guides', href: '#' },
        { text: 'Webinars', href: '#' },
        { text: 'Help Center', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy', href: '#' },
        { text: 'Terms', href: '#' },
        { text: 'Cookie Policy', href: '#' },
        { text: 'GDPR', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: 'facebook-f', href: '#' },
    { icon: 'twitter', href: '#' },
    { icon: 'instagram', href: '#' },
    { icon: 'youtube', href: '#' }
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-gray-300 hover:text-white">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="mt-4 flex space-x-6">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-gray-300 hover:text-white">
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-gray-300">Email: support@wealthyaffiliate.com</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Wealthy Affiliate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 