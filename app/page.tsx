export default function Home() {
  return (
    <div>
      {/* {HTML 태그처럼 쓸 수 있음} */}
      <MyButton name="jimin" nickname="hioCoffee" age={18} today={new Date()}/>
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
  nickname: string
  age: number
  today: Date
}

function MyButton(params: TParams){
  return(
  <div className="bg-red-500 text-3xl w-[100px]" style={{backgroundColor: 'rgb(203 213 225)'}}>
      I am {params.name}. my nickanme is {params.nickname}. my age is {params.age}. {params.today.getDate()}
  </div>
  )
}