    let msTensCount = 0;
    let msHundredsCount = 0;
    let secondOnesCount = 0;
    let secondTensCount = 0;
    let interval = null;
    document.querySelector('#secondTens').textContent = 0;
    document.querySelector('#secondOnes').textContent = 0;
    document.querySelector('#msHundreds').textContent = 0;
    document.querySelector('#msTens').textContent = 0;


    


let digits = document.querySelector('.digits');
let resetButton = document.createElement('button');
let startButton = document.createElement('button');

    resetButton.textContent = 'Reset'
    resetButton.style.textAlign = 'center';
    resetButton.onclick = () => { 
        startButton.removeAttribute('disabled')
        clearInterval(interval);
       document.querySelector('#secondTens').textContent = 0;
       document.querySelector('#secondOnes').textContent = 0;
       document.querySelector('#msHundreds').textContent = 0;
       document.querySelector('#msTens').textContent = 0;
    }
    digits.insertAdjacentElement('afterend', resetButton);

 startButton.textContent = 'Start'
 startButton.style.textAlign = 'center';
 startButton.onclick = () => {
     startButton.setAttribute('disabled', 'disabled')
    msTens.style.color = 'black';
    msHundreds.style.color = 'black';
    secondOnes.style.color = 'black';
    secondTens.style.color = 'black';
    document.querySelector('#secondOnes').textContent = 0;
    document.querySelector('#msHundreds').textContent = 0;
    document.querySelector('#msTens').textContent = 0;
    document.querySelector('#secondTens').textContent = 0;

     interval = setInterval(() => { 
        let msTens = document.querySelector('#msTens');
        msTens.textContent = msTensCount ++; 

        if (msTensCount === 10) {
            msTensCount = 0;
            msTens.textContent = msTensCount; 

            let msHundreds = document.querySelector('#msHundreds');
            msHundreds.textContent = msHundredsCount ++; 

            if (msHundredsCount === 10) {
                        msHundredsCount = 0;
                        let secondOnes = document.querySelector('#secondOnes');
                        secondOnesCount ++;
                        secondOnes.textContent = secondOnesCount;
                          
                        if (secondOnesCount === 10) {
                            secondOnesCount = 0;
                            secondOnes.textContent = secondOnesCount;
                            let secondTens = document.querySelector('#secondTens');
                            secondTensCount ++;
                            secondTens.textContent = secondTensCount;

                            if (secondTensCount === 1) {
                            clearInterval(interval);
                            document.querySelector('#secondOnes').textContent = 0;
                            document.querySelector('#msHundreds').textContent = 0;
                            document.querySelector('#msTens').textContent = 0;
                            msTens.style.color = 'red';
                            msHundreds.style.color = 'red';
                            secondOnes.style.color = 'red';
                            secondTens.style.color = 'red';
                            msTensCount = 0;
                            msHundredsCount = 0;
                            secondOnesCount = 0;
                            secondTensCount = 0;
                            }
                            
                        }
                    }
        }
     }, 10);
 }
 digits.insertAdjacentElement('afterend', startButton);



