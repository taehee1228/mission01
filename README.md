# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

정규표현식
const로idLower,pwLower를 만들어 userEamil, userPassword 값을 등록 한 후 emailReg,pwReg함수를 이용해서 정규표현식으로 값을 체크 후 리턴.

메일 체크
비밀번호는 특수문자, 숫자, 영문포함 6자 이내로 체크

handleSubmit 함수
1. const(상수)를 만들어 getElementById로 userEmai와 userPassword라는 id를 가져왔습니다.
2. if문을 사용, 정규표현식 함수(emailReg과 pwReg)를 이용하여 false가 return이 되면 alert 메세지를 띄어주고, return fales; 가 됩니다.
3. if문을 사용, userEmaild이 user.id의 값과 같다면 그리고(&&) userPaddword가 user.pw와 같다면 welcom.html 페이지로 넘어가게 만들고, 그것이 아니라면 alert 메세지를 띄어줍니다.
4. handleSumit에 e.preventDafault 이벤트를 받아서 더 이상 진행되지 않게 만들었습니다.

addEventListener(type,함수)
1. btnLogin id를 찾아서 addEventListner로 클릭 이벤트 발생 시 handleSubmit 함수를 진행하게 만들었습니다. 
2. handleSubmit에 return false가 될 때 e.preventDefault 이벤트를 받아서 더 이상 진행되지 않게 만들어줬습니다.

---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.








