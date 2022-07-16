# 1. package.json 생성
역할 : 노드 프로젝트로 정의  
방법 : npm init -y  

# 2. react, react-dom 설치
역할 : react 라이브러리, react와 dom을 연결  
방법 : npm i react react-dom  

# 3. babel 설치
역할 : transpiler로 es6 이상을 es5형식에 맞게 변환  
방법 : npm i @babel/core @babel/preset-react @babel/preset-env  

3.1 preset-react : jsx를 js로 변환  
3.2 preset-env : es5로 변환  

# 4. webpack 설치
역할 : 모듈 번들러로 웹 파일들을 하나의 파일로 묶어줌  
방법 : npm i -D webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader  

4.1 webpack : 모듈 번들러  
4.2 webpack-cli : 커맨드라인 인터페이스  
4.1 webpack-dev-server : 임시 서버 구동에 필요  
4.2 css-loader, style-loader : css 문법을 js로 변환 및 html의 style 태그에 넣어줌  

# 5. 플러그인 설치
5.1 html-webpack-plugin : html파일에 번들링된 react 코드 삽입, dist폴더에 번들링된 파일 옮겨줌  
5.2 clean-webpack-plugin : 이전 번들링 파일 제거  

# 6. babel, webpack 설정 파일 작성
6.1 babel.config.js or .babelrc : preset 설정등 정의  
6.2 webpack.config.js  
I. 엔트리 포인트 설정  
II. rules에 로더 설정 및 순서 배치(뒤의 요소부터 번들링에 반영)  
III. build 위치 및 개발 서버 셋팅  

# 7. package.json에 script 등록
"start": "webpack serve --progress --mode development"  
"build": "webpack"  

# 8. public/index.html 생성

# 9. [optional] import 경로 간소화
9.1. module resolver 사용
방법 : npm i --save-dev babel-plugin-module-resolver
9.2. webpack - resolve - alias에 경로 지정
9.3. babel plugin 설정
9.4 jsconfig.json 파일 생성 후 baseUrl, inlcude 추가