const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@',
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리 // 고민..
4. 로그인 버튼을 클릭시 조건처리

*/
const idLower = document.querySelector('#userEmail');
const pwLower = document.querySelector('#userPassword');

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}




// // querySelector

const userEmail = document.querySelector('#userEmail');
const submit = document.querySelector('.btn-login');


function handleSubmit(e){
    const userEmail = document.getElementById('userEmail').value
    const userPassword = document.getElementById('userPassword').value
    // if(!userEmail) {
    //   alert('메일을 입력하세요');
    //   // e.preventDefault();
    //   return false;
    // }

    if(!emailReg(userEmail)) {
      alert('정확한 메일 형식을 입력하세요');
      // e.preventDefault();
      return false;
    }

    // if(!userPassword) {
    //   alert('비밀번호를 입력하세요');
    //   // e.preventDefault();
    //   return false;
    // }

    if(!pwReg(userPassword)) {
      alert('비밀번호는 문자,숫자,특수기호를 포함하여 6자이상 16자이내로 입력하세요');
      // e.preventDefault();
      return false;
    }

    if(userEmail === user.id && userPassword === user.pw){
      window.location.href = 'welcome.html'
    } else{
      alert('아예 다시 입력해주세요')
    }
    e.preventDefault();
}

document.getElementById('btnLogin').addEventListener( 'click', function(e){
  if(!handleSubmit(e)) {
    e.preventDefault();
  }
})






