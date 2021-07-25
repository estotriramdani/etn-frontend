import Gap from '../src/components/atoms/gap';
import HomeLayout from '../src/components/layouts/HomeLayout';
import { Headline } from '../src/components/moleculs';

export default function Home({ posts }) {
  const randomNumber = Math.floor(Math.random() * posts.data.length - 1) + 1;
  const post = posts.data[randomNumber];
  const handleSavePost = () => {
    if (window.localStorage.getItem('EtnSavedPost') === null) {
      window.localStorage.setItem('EtnSavedPost', '[]');
    }
    let savedPost = JSON.parse(window.localStorage.getItem('EtnSavedPost'));
    savedPost.push(post);
    window.localStorage.setItem('EtnSavedPost', JSON.stringify(savedPost));
    alert('Post berhasil disimpan!');
  };
  return (
    <>
      <HomeLayout title="ETN News">
        <h2 className="heading-2">
          <strong>Ready</strong> to Read
        </h2>
        <Gap height={23} />
        <Headline
          image={post.image}
          title={post.title}
          body={`${post.body.substr(0, 200)}...`}
          category={post.category}
          slug={post.slug}
          key={post._uid}
          handleSavedPost={handleSavePost}
        />
      </HomeLayout>
    </>
  );
}

export async function getStaticProps(context) {
  const randomNumber = Math.ceil(Math.random(0) * 10);
  const res = await fetch(
    'https://etn-news-api.vercel.app/v1/blog/posts?perPage=1000&currentPage=1'
  );
  const posts = await res.json();
  return { props: { posts } };
}
