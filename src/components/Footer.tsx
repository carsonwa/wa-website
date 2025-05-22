import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 text-center">
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        <Link href="/contact" className="hover:underline">Contact</Link>
        <Link href="/affiliates" className="hover:underline">Affiliates</Link>
        <Link href="/terms" className="hover:underline">Terms</Link>
        <Link href="/privacy" className="hover:underline">Privacy</Link>
      </div>
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://instagram.com/wealthyaffiliatecarson" target="_blank" rel="noopener noreferrer" className="hover:underline">
          @wealthyaffiliatecarson
        </a>
        <a href="https://instagram.com/wealthyaffiliatekyle" target="_blank" rel="noopener noreferrer" className="hover:underline">
          @wealthyaffiliatekyle
        </a>
      </div>
      <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} WealthyAffiliate.com</p>
    </footer>
  );
} 