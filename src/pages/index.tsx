import type { NextPage } from 'next';
import { trpc } from '../utils/trpc';
import {PageLayout} from '../components/PageLayout';

const Home: NextPage = () => {
  const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

  return <PageLayout>{"teste"}</PageLayout>;
};

export default Home;
