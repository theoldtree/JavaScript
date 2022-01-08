# JavaScript

### 1.6 object
```
object가 constant로 선언되어도 object안의 property 값은 수정 가능
```
```
object안의 property값은 별도의 선언문 없이 추가가능하다
```

### 2.8 function
```
object 안에 function 선언이 가능하다
const object = {
    function_name: function(){

    },
}
```
```
function에 정의된 argument갯수만큼 parameter를 받는다.
```

### 2.13 Conditional
```
값의 타입을 알고 싶으면 console.log(typeof 변수)를 입력해본다
```

### 3 HTML
```
tag는 object형태로 관리됨. tag의 프로퍼티들은 tag.prpertyName 으로 추가할 수 있음
```
```
document는 html의 정보를 얻고 변경할 수 있는 default object임
ex) document.getElementById("id_name")
document.getElement~로 element를 가져올 수 있다.
```
```
documnet.querySeletor("~ ~ ~")가 element가져올때 가장 많이 쓰이는 방법임
~ 내용 -> 상위계층부터 채워나감 -> #idName 아니면 .className 아니면 tagName
element가 여러개 발견되면 가장 첫번째만 가져옴(여러개 가져오고 싶으면 querySelectorAll사용)
```
```
태그를 활용하여 class와 id를 지정가능함
ex) <h1 id="id_name" class="class_name"> text </h1>
```
```
element.addEventListner로 다양한 이벤트 추가가 가능하다
ex) element.addEventListner("eventName", functionName)

window는 js에서 기본적으로 제공하는 object
ex) window.addEventListner
```
```
tag.classList.toggle("classNAme") -> classList 안에 특정 class가 포함되어있으면 제거, 없으면 포합시킴
```
```
href property로 링크를 연결할 수 있음
```
```
css에서 display: none으로 보이는 내용을 안보이게 할 수 있다.
```

### 5 Intervals, setClock
```
setInterval(functionname,숫자) : 매 숫자 miliseconds 마다 function을 수행한다.
```
```
date = new Date() -> date object에 여러 함수가 들어있음 get~
```
```
string.padStart(maxLength,"startString") -> 전체 길이와 글자수를 못채웠을때 가장 맨앞에 올 글자
```

### 6 Background
```
creamteElement -> 자바스크립트에서 HTML로 element를 추가할 수 있음
```
```
document.body.appendChild(element) -> 생성한 element를 원하는 위치로 추가함
```
 
