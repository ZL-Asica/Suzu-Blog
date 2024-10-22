import PostListLayout from '@/components/layout/PostListLayout';
import { getConfig } from '@/services/config/getConfig';
import { getAllPosts } from '@/services/content/posts';
import { PostData } from '@/types';
import { Metadata } from 'next/types';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const config = getConfig();
  return {
    title: `Posts - ${config.title}`,
    description: `Posts page of ${config.title} - ${config.description}`,
    openGraph: {
      title: `Posts - ${config.title}`,
      description: `Posts page of ${config.title} - ${config.description}`,
      type: 'website',
      locale: config.lang,
    },
  };
}

export default async function PostsPage() {
  const posts: PostData[] = await getAllPosts();

  return (
    <div className='container mx-auto p-4'>
      <h1 className='mb-6 text-center text-4xl font-bold'>All Posts</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <PostListLayout posts={posts} />
      </Suspense>
    </div>
  );
}
