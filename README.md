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

### HTML
```
document는 html의 정보를 얻고 변경할 수 있는 default object임
ex) document.getElementById("id_name")
document.getElement~로 element를 가져올 수 있다.
```
```
documnet.querySeletor("~ ~ ~")가 element가져올때 가장 많이 쓰이는 방법임
~ 내용 -> 상위계층부터 채워나감 -> .className 아니면 tagName
element가 여러개 발견되면 가장 첫번째만 가져옴(여러개 가져오고 싶으면 querySelectorAll사용)
```
```
태그를 활용하여 class와 id를 지정가능함
ex) <h1 id="id_name" class="class_name"> text </h1>
```
