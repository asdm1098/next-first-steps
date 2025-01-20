'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import style from './ActiveLink.module.css';

interface Props {
    title: string;
    path: string;
}

export const ActiveLink = ({ title, path }: Props ) => {

  const pathName = usePathname();
  console.log(pathName);

  return (
    <Link 
        className={ `${ style.link } ${ (pathName === path) && style['active-link'] }` } 
        href={ path }>
          { title }
    </Link>
  )
}
