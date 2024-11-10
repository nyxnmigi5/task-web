"use client" //브라우저로 프로그램을 돌림

import {HeartPulseIcon, SendIcon } from "lucide-react";

export default function Home() {
  return (
    // flex justify-center 가로 items-center 세로 정렬 w-full 가로 전체 h-[100dvh] 세로 전체
    <div className="flex justify-center items-center w-full h-[100dvh] bg-gray-300">  
      <div className="max-w-sm w-full h-[100dvh] bg-white">
        {/* 
          1. like와 dm을 <div>로 묶기
          2. className에 border
        */}
        <div className="flex justify-between items-center px-3 h-[3.5dvh]">
          <span className="font-bold">Instagram</span>
          <div className="flex items-center gap-1.5">
            <button onClick={() => like()}>
              <HeartPulseIcon className="w-6 h-6"/>
            </button>
            <button onClick={() => dm()}>
              <SendIcon className="w-6 h-6"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function like(){
  // console.log("likeButton is pushed")
  alert("Like!!")
}

function dm(){
  // console.log("dmButton is pushed")
  alert("dm!!")
}