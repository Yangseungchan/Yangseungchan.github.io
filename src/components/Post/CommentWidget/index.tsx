import React, { useRef, useEffect } from 'react';

const src = 'https://utteranc.es/client.js';
const repo = 'Yangseungchan/Yangseungchan.github.io'; // 자신 계정의 레포지토리로 설정

interface UtterancesAttributesType {
  src: string;
  repo: string;
  'issue-term': string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
}

const CommentWidget = () => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current === null) return;
    const utterances: HTMLScriptElement = document.createElement('script');

    const attributes: UtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]: [string, string]) => {
      utterances.setAttribute(key, value);
    });

    element.current?.appendChild(utterances);
  }, []);
  return <div ref={element} />;
};

export default CommentWidget;
