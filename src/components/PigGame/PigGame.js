import React,{useState,useEffect} from 'react'
import '../PigGame/PigGame.css'
export const PigGame = () => {

    let [firstMainScore,,setFirstMainScrore] = useState(0)
    let [secondMainScore, , setSecondMainScrore] = useState(0);


    let [firstCurrentScrore,setFirstCurrentScore] = useState(0)
    let [secondCurrentScrore, setSecondCurrentScore] = useState(0);


    // let [dic,setDic] = useState(false)


    let player1 = document.querySelector('.player--0')
    let player2 = document.querySelector(".player--1");

    let dice_img = document.querySelector(".dice");
    
    let dice;

   let RollingHandler = ()=>{
     dice = Math.trunc(Math.random() * 6 + 1);

      firstCurrentScrore += Number(dice)


     console.log(dice);
    //  dice_img.src = `images/dice-2.png`;

     //    setDic(true);
     //    if(dic){
     //         dice_img.src = `images/dice-${dice}.png`;
     //    }
   }

   useEffect(()=>{
       RollingHandler()

   },[dice,firstCurrentScrore])


    return (
      <div>
        <main>
          <section class="player player--0 player--active">
            <h2 class="name" id="name--0">
              Player 1
            </h2>
            <p class="score" id="score--0">
              {firstMainScore}
            </p>
            <div class="current">
              <p class="current-label">Current</p>
              <p class="current-score " id="current--0">
                {firstCurrentScrore}
              </p>
            </div>
          </section>
          <section class="player player--1">
            <h2 class="name" id="name--1">
              Player 2
            </h2>
            <p class="score" id="score--1">
              {secondMainScore}
            </p>
            <div class="current">
              <p class="current-label">Current</p>
              <p class="current-score" id="current--1">
                {secondCurrentScrore}
              </p>
            </div>
          </section>
          {/* {
            dic ? ( <img src="images/dice-5.png" alt="Playing dice" class="dice" />) : ''
          } */}
          <img src="images/dice-5.png" alt="Playing dice" class="dice" />
          <button class="btn btn--new fs-3">🔄 New game</button>
          <button class="btn btn--roll fs-3 " onClick={RollingHandler}>
            🎲 Roll dice
          </button>
          <button class="btn btn--hold fs-3">📥 Hold</button>
        </main>
      </div>
    );
}
