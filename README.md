# info
* repository is github : https://github.com/largezero/movieql_mine.git
## install setting
* yarn add global nodemon babel-cli
* yarn add graphql graphql-yoga axios
* yarn add babel-node babel-cli babel-preset-env babel-preset-stage-3 --dev
* index.js 수정 , nodemon 시작 추가.
## Server run
* yarn start
* http://localhost:4000/ 에서 graphql playground 확인

## 2021-03-20(토) init
### Note  
  * under-fetch, over-fetch 를 처리해 준다.
  * Rest 로 되어 있는 http query 를 JSON query 로 바꿔준다.
  * yarn global add nodemon // 소스가 변경될때마다 서버자동 반영
  * package.json 에 "scripts": { "start" : "nodemon" } 추가함. 이제 yarn start 로 기동함.
  * yarn add babel-node --dev // import 문 사용을 위해서 설치
  * yarn global add babel-cli // { "start" : "nodemon --exec babel-node" } 로 실행토록 함. 
  * yarn global add babel-cli --ignore-engines // why?
  * localhost:4000 접속함 => 안됨. wsl 에서 ip addr 에 있는 172.28.156.57:4000 으로 접속해서 해결함. why localhost is not able ?
  * By 0.5 Creating the first Query and Resolver

## 2021-03-21(일) finish
### Note  
  * [Person]! => Data type is array, "!" is not null condition
  * resolver 는 기본적으로 View 같은것, 무엇이든지 될 수 있음.
  * mutation sample
  ```
  query {
    movies {
      id
      title
      rating
      summary
      language
      genres
    }
  }
  ```
  ```
  query {
    movies(limit:5,rating:8.5) {
      title
      rating    
    }
  }
  ```




 
