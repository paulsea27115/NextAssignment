# Nextjs 과제입니다.

> ### day04

- global_layout 구성 짜보기
- search 기능 구현

> ### day 05

- 화면 구현
- 검색, 자세히 보기 기능

> ### day 06

- 서버 API 적용

> ### day 07

- SSG 렌더링 방식 사용
- index 페이지에 적용 시도 - 등록된 모든영화는 다시 요청할 필요 없음
- search 페이지 적용 시도 - query 가져오기 불가(SSG 방식이 빌드때 미리 요청하기 때문), 기존 react 처럼 useEffect으로 클라이언트에서 요청함
- movie 페이지 적용 시도 - getStaticPaths fallback 옵션을 true으로 해줘서 한번 접속 후 그 이후에는 그 페이지의 html이 있기 때문에 기존 SSG 장점을 활용 가능
