import type { NextPage } from 'next';
import { trpc } from '../utils/trpc';
import { PageLayout } from '../components/PageLayout';

const Home: NextPage = () => {
  const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

  return (
    <PageLayout>
      <div className='flex flex-col h-full'>
        <div className='h-16 flex justify-center items-center'>
          <h1 className='text-white text-lg'>Cards of the day!</h1>
        </div>
        <div className='flex flex-1'>
          <div className='w-1/5 bg-purple'>
            filter area
          </div>
          <div className='flex-1 bg-white'>
            flash card
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
