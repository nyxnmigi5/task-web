export default function Home() {
  return (
    <div>
      {/* {HTML 태그처럼 쓸 수 있음} */}
      <MyButton name="jimin"/>
      {/* <MyButton/>
      <MyButton/>
      <MyButton/> */}
    </div>
  );
}

// <button>I am button</button>을 생성하는 JS 함수
// function MyButton({
//   name
// }:{
//   name: string
// }){
//   return<button>I am {name}</button>
// }

type TParams = {
  name: string
}

function MyButton(params: TParams){
  return<button>I am {params.name}</button>
}