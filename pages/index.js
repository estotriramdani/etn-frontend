import Gap from '../src/components/atoms/gap';
import HomeLayout from '../src/components/layouts/HomeLayout';
import { Headline } from '../src/components/moleculs';

export default function Home() {
  fetch('https://mern-blog-backend.vercel.app/v1/blog/posts')
    .then((res) => res.json())
    .then((res) => console.log(res));
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
