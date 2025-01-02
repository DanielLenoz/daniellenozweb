import Link from 'next/link'
import { GoHomeFill } from 'react-icons/go'
import { MdLibraryBooks } from 'react-icons/md'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

interface RoutesProps {
  setVisibleLeft: (visible: boolean) => void;
  desktop: boolean;
}

export const Routes: React.FC<RoutesProps> = ({ setVisibleLeft, desktop }) => {
  const navLinks = [
    {
      href: '/',
      icon: <GoHomeFill />,
      text: 'Home',
    },
    {
      href: '/Certificados',
      icon: <RiVerifiedBadgeFill />,
      text: 'Certificados',
    },
    {
      href: '/Blogs',
      icon: <MdLibraryBooks />,
      text: 'Blogs',
    },
  ]

  return (
    <>
      {navLinks.map(({ href, icon, text }) => (
        <li key={text}>
          <Link
            className="flex items-center gap-1 border-b-2 border-transparent transition ease-in-out hover:border-slate-400"
            href={href}
            onClick={() => setVisibleLeft(false)}
          >
            {desktop ? true : icon}
            {text}
          </Link>
        </li>
      ))}
    </>
  )
}
