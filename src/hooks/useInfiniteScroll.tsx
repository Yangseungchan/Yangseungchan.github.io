import { useRef, MutableRefObject, useMemo, useState, useEffect } from 'react';
import { PostListItemType } from '@typings/PostItem.types';

export interface useInfiniteScrollType {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  postList: PostListItemType[];
}

const NUMBER_OF_ITEMS_PER_PAGE = 10;

const useInfiniteScroll = (
  selectedCategory: string,
  posts: PostListItemType[],
): useInfiniteScrollType => {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);
  const observer: MutableRefObject<IntersectionObserver | null> =
    useRef<IntersectionObserver>(null);
  const [count, setCount] = useState<number>(1);

  const postListByCategory: PostListItemType[] = useMemo<PostListItemType[]>(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }) =>
          selectedCategory === 'All'
            ? true
            : categories.includes(selectedCategory),
      ),
    [selectedCategory, posts],
  );

  // const observer: IntersectionObserver = new IntersectionObserver(
  //   (entries, observer) => {
  //     if (!entries[0].isIntersecting) return;
  //     setCount(value => value + 1);
  //     observer.disconnect();
  //   },
  // );
  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return;
      setCount(value => value + 1);
      observer.unobserve(entries[0].target);
    });
  }, []);

  useEffect(() => {
    setCount(1);
  }, [selectedCategory]);

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0 ||
      observer.current == null
    )
      return;

    observer.current.observe(
      containerRef.current?.children[containerRef.current.children.length - 1],
    );
  }, [count, postListByCategory]);

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  };
};

export default useInfiniteScroll;
