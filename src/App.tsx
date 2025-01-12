import {Component, createEffect} from 'solid-js';
import Button from "./components/button";
import arrayButtons from "./static/buttons";
import {main} from "./logic/main";

const App: Component = () => {
    createEffect(()=>{
        const buttons = [ ...document.querySelectorAll('[data-container="action-button"]') ] as HTMLButtonElement[]

        const callback = main()

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const operation = button.innerText.trim()
                callback(operation)
            })
        })
    })

  void  main()
  return (
      <div  class="h-screen flex items-center justify-center flex-col gap-[25px] bg-slate-900">
          <div class="w-[450px] p-7 rounded-3xl box-shadow-outer bg-slate-800 ">
              <p class="py-5 px-10 bg-slate-700 rounded-full flex justify-end text-xl text-white"
                 data-container="result">0</p>
              <div class="mt-10 grid grid-cols-4 gap-4">
                  {arrayButtons.map((value)=><Button {...value} />)}
              </div>
          </div>
      </div>
  );
};

export default App;
