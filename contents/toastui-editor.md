---
date: '2021-07-21'
title: 'NextJS에서 Toastui Editor 적용하기'
categories: ['React', 'Toastui', 'Editor', 'Next']
summary: 'NextJS에서 Toastui Editor 적용하는 방법을 알아본다'
thumbnail: './toastui-editor'
---

NextJS와 React를 사용하는 프로젝트를 진행하면서 게시글을 작성하고 읽는 기능이 필요해졌다. 이를 위해 찾아본 결과 ToastUI에서 제공하는 [Editor](https://github.com/nhn/tui.editor/tree/master/apps/react-editor)가 있어서 사용해보았다. 그런데 공식문서대로 적용해보았으나 오류(~ is not defined)가 발생하며 적용이 되지 않았다. Github issue에서 이에 관해 찾아보았으나 별로 마땅한 해결책이 나오지 않아 구글링을 시도했다. 역시나, 어느 똑똑하신 분께서 [해결책](https://yoon-dumbo.tistory.com/m/38?category=969772)을 내려주셨다.

이런 문제가 발생한 것은 바로 ToastUI Editor에서는 NextJS에서 적용되는 SSR(Server Side Rendering)을 지원하지 않기 때문이었다. 이러한 충돌을 막기 위해서는 **해당 에디터를 dynamic하게 import할 필요가 있다**. 위 블로그 링크에서 해결책을 확인할 수 있으니, 자세한 설명은 생략하겠다.

![로더 적용 전](https://images.velog.io/images/seungchan__y/post/71681e6c-45f2-4ce8-8424-be590f46a975/%E1%84%85%E1%85%A9%E1%84%83%E1%85%A5%20%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%AB.gif)


그런데 한 가지 문제가 있다. 정상적으로 적용된 에디터 페이지를 들어가보면, 잘 나오는데 에디터만 유독 느리게 나온다. 아마도 런타임에 로드를 해야 되는 것이다 보니 다른 요소들에 비해서 느리게 나오는 것 같다. 이를 완화 시키고자 dynamic import시 **loading** 옵션을 추가했다. Dynamic Import의 loading 옵션에 대한 자세한 설명을 보고싶다면 [공식문서](https://nextjs.org/docs/advanced-features/dynamic-import#with-custom-loading-component)를 참고하기를 바란다.

### **Editor를 Dynamic import로 불러오는 부분**
```
const PostEditor = dynamic(() => import('../PostEditor/PostEditor'), {
  ssr: false,
  loading: () => <EditorLoader />,
});

```

### EditorLoader 컴포넌트

```
import CircularProgress from "@material-ui/core/CircularProgress";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  loaderContainer: {
    height: "600px",
    width: "100%",
    border: `0.5px solid ${theme.palette.grey[400]}`,
    borderRadius: "4px",
  },
  loaderItem: {
    position: "relative",
    top: "50%",
    left: "50%",
  },
}));

const EditorLoader = () => {
  const classes = useStyles();
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.loaderItem}>
        <CircularProgress color="primary" />
      </div>
    </div>
  );
};

export default EditorLoader;

```

EditorLoader의 구성요소 중 하나인 CircularProgress라는 요소는 material-ui에서 제공해주는 컴포넌트인 점을 참고하길 바란다. 꼭 위와 같이 material-ui를 적용할 필요 없이 적용한 editor의 크기로 자기 스타일에 맞는 Loader를 적용하면 된다.

![로더 적용](https://images.velog.io/images/seungchan__y/post/04ba75d0-8af9-4632-9f8c-597d06a4f8b3/%E1%84%85%E1%85%A9%E1%84%83%E1%85%A5%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8B%E1%85%AD%E1%86%BC.gif)


위 사진에서 볼 수 있듯이 loading 옵션을 적용하니 Editor를 가져오는 동안 EditorLoader 컴포넌트가 그 자리를 차지하면서 이전과 다르게 에디터의 로딩을 기다리더라도 이질감은 덜 느껴진다.

원래는 Editor와 Viewer를 같이 다룰려고 하였으나 너무 길어진 관계로 다음글에서 Viewer 적용을 소개하려고 한다.


---

## Source

- Next.js에 toast ui Editor을 같이 사용하는 방법

  [<https://yoon-dumbo.tistory.com/m/38?category=969772>](https://yoon-dumbo.tistory.com/m/38?category=969772)


- Next.js Dynamic Import

  [<https://nextjs.org/docs/advanced-features/dynamic-import#with-custom-loading-component>](https://nextjs.org/docs/advanced-features/dynamic-import#with-custom-loading-component)