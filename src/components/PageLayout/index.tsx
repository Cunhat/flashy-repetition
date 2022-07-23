import React from 'react';

type PageLayoutProps = {
  children: ReactNode;
};

export const PageLayout: React.FC<PageLayoutProps> = (props) => {
  return (
    <div className='flex flex-col h-screen bg-background'>
      <div className='h-auto p-4'>
        <ul className='flex gap-5 justify-center '>
            <li className='text-white ml-auto'>Daily FlashCards</li>
            <li className='text-white'>Create FlashCards</li>
            <li className='text-white ml-auto'>Settings</li>
        </ul>
      </div>
      <div className='flex-1'>{props.children}</div>
    </div>
  );
};
