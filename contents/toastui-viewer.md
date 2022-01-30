---
date: '2021-07-23'
title: 'NextJS에서 ToastUI Viewer 적용하기'
categories: ['React', 'Toastui', 'Viewer', 'Next']
summary: 'NextJS에서 ToastUI Viewer 적용하는 방법을 알아본다'
thumbnail: './toastui-viewer'
---

[지난 포스트](https://yangseungchan.github.io/toastui-editor/)에 이어서 ToastUI Viewer를 적용해보려고 한다. 여기서 Viewer란 Editor에서 만든 게시글의 내용을 보여주는 도구이다. Editor에서 소개한 방법과 비슷하게 dynamic import를 이용해서 적용하면 된다! 간단하지만 공식문서만 보았을때는 다소 난해한 경험을 겪어서 이것을 읽는 분들은 나처럼 삽질을 하지 않기를 바란다.

Editor에 대한 공식 [Github 문서](https://github.com/nhn/tui.editor/blob/master/docs/ko/viewer.md)에 따르면 크게는 두 가지 방법으로 적용할 수 있다고 나와있다.

### 1. Viewer를 직접 적용

### 2. Editor의 factory를 활용해 적용하는 방법

이번 포스트에서는 리액트 및 NextJS에서 적용하기 쉽게 하기 위해서 **Viewer를 직접 적용하는 방법**으로 할 것이다.(사실 Editor의 factory를 React 컴포넌트로 어떻게 적용하는지 몰라서이다..=_=)

![](https://images.velog.io/images/seungchan__y/post/db4e9daf-f9bd-46eb-8cf9-d0a70110b66b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-23%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.37.43.png)

![](https://images.velog.io/images/seungchan__y/post/fcba455a-5dd1-4500-8003-b4cfa36c9b09/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-23%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.37.58.png)

공식 문서에 따르면 Viewer 모듈과 해당 css 파일을 불러오면 된다고 한다. 그래서 나도 이에 따라 컴포넌트 파일에는 Viewer를 불러오고 Viewer를 불러와야 하는 Page에는 dynamic import를 적용해 봤다.

또한 뷰어에 대한 [공식문서](https://github.com/nhn/tui.editor/blob/master/docs/ko/viewer.md#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0)에 따르면 Viewer는 내용값으로 HTML이 아닌 **MarkDown 만을 받는다고 하니, 주의하도록 하자!!**

### Viewer Component
```
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

const TestView = () => {
  return <Viewer height="600px" initialValue="# hello" />;
};

export default TestView;
```

### Viewer Page
```
import dynamic from 'next/dynamic';

const Viewer = dynamic(() => import('../../../components/TestView/TestView'), {
  ssr: false,
});

const ProfessorStatus = () => {
  return (
    <Viewer />
  );
};

export default ProfessorStatus;
```

이대로 무난하게 잘 되는줄 알았으나... 에러가 발생하고 말았다.

![](https://images.velog.io/images/seungchan__y/post/222e258e-f4db-4201-8044-8f41f90b7a7a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-23%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.54.02.png)

분명 dynamic import를 적용했음에도 에러가 발생한 것 때문에 많이 절망적이었다... 그래도 공식 Github를 살펴보면서 해결의 실마리를 찾을 수 있었다.

우선 이전의 Editor 경우도 **@toast-ui/react-editor** 에서 import 해왔다는 점에서 **@toast-ui/react-editor**를 자세히 살펴보았다. 그리고 Viewer에 대한 코드를 살펴보니 아래 사항을 확인할 수 있었다.



```
import Editor from './editor';
import Viewer from './viewer';

export { Editor, Viewer };
```

이를 통해서 **@toast-ui/react-editor** 모듈에서 Editor와 Viewer 모두 import하는 것이 가능하다는 것을 확인할 수 있다. 이를 바탕으로 Viewer Component를 아래와 같이 수정해 봤다.

### Viewer Component 수정!
```
import Viewer from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

const TestView = () => {
  return <Viewer height="600px" initialValue="# hello" />;
};

export default TestView;
```

그러고 결과를 확인해보면 정상적으로 작동함을 확인할 수 있다!!

![](https://images.velog.io/images/seungchan__y/post/7cc5736e-8d37-4b60-be65-16b581344cec/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-23%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.08.50.png)

공식문서가 React와 NextJS에 대해서 적용하는 법에 대해 친절히 설명해 줬으면 이런 고생들을 하지 않았겠지만.. 이런 고생들을 하면서 많은 것들을 배운 기회가 된 것 같다. 이제 프로젝트 내 게시판 기능 구현에 한 단계 앞으로 나아간 것 같다!



---

## Source

- Toast ui viewer Github

  [<https://github.com/nhn/tui.editor/blob/master/docs/ko/viewer.md>](https://github.com/nhn/tui.editor/blob/master/docs/ko/viewer.md)