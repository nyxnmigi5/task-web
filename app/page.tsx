export default function Home() {
  return (
    <div>
      {/* {HTML 태그처럼 쓸 수 있음} */}
      <MyButton/>
    </div>
  );
}

// <button>I am button</button>을 생성하는 JS 함수
function MyButton(){
  return<button>I am a button!!</button>
}