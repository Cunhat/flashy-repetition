import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type PageLayoutProps = {};

export const PageLayout = (props: PropsWithChildren<{}>) => {
  return (
    <div className='flex flex-col h-screen bg-background'>
      <div className='h-auto p-4 shadow-3xl'>
        <ul className='flex gap-5 justify-center '>
          <LinkItem path='/' mlAuto>
            Daily FlashCards
          </LinkItem>
          <LinkItem path='/createFlashCard'>Create FlashCards</LinkItem>
          <LinkItem path='/settings' mlAuto>
            Settings
          </LinkItem>
        </ul>
      </div>
      <div className='flex-1'>{props.children}</div>
    </div>
  );
};

const LinkItem = (props: PropsWithChildren<{ path: string; mlAuto?: boolean }>) => {
  const router = useRouter();

  return (
    <li
      className={`text-white p-2 ${props.mlAuto ? 'ml-auto' : ''} ${
        router.pathname === props.path ? 'text-purple bg-onyx2 rounded-xl' : ''
      } hover:text-purple hover:bg-onyx2 rounded-xl cursor-pointer `}
    >
      <Link href={props.path}>
        <a>{props.children}</a>
      </Link>
    </li>
  );
};
