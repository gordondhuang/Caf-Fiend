import * as path from 'path';
import express from 'express';

function aiWork(){
    print("running")
    const CaffineCount = new Map([
        ["redbull", 9.5],
        ["monster", 10],
        ["celsius", 12],
        ["c4", 12.4]
    ]);
    const amountOfCaffeine = document.getElementById('drink-input');

    
    T.recognize('./redBullLogo.jpg', 'eng', {})
        .then(out => {
            const userWord = (out.data.text).replace("\n", "").replace(" ", "")
            const currWord = "";
            for (const i = 0; i < userWord.length; i++){
                currWord = userWord.substring(i,userWord.length)
                if (CaffineCount.includes(currWord)){
                    amountOfCaffeine.textContent = currWord;
                    exit()
                }
            }
        })
}
aiWork();