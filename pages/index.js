import Gap from '../src/components/atoms/gap';
import HomeLayout from '../src/components/layouts/HomeLayout';
import { Headline } from '../src/components/moleculs';

export default function Home() {
  return (
    <>
      <HomeLayout title="ETN News">
        <h2 className="heading-2">
          <strong>Today</strong> Headlines
        </h2>
        <Gap height={23} />
        <Headline />
      </HomeLayout>
    </>
  );
}
