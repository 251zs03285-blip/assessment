'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
assessmentButton.addEventListener(
  'click',
  () => {
    const userName = userNameInput.value;
     if (userName.length === 0){
      return;
     }
        // 診断結果表示エリアの作成
        resultDivision.innerText = '';
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivision.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivision.appendChild(paragraph);

  }
);
const answers = [
  '5 クリティカル！大吉です！',
  '10 吉です！ ',
  '15 吉です！',
  '20 吉です！',
  '25 吉です！',
  '30 吉です！',
  '35 中吉です！',
  '40 中吉です！',
  '45 中吉です！',
  '50 中吉です！',
  '55 小吉です！',
  '60 小吉です！',
  '65 小吉です！',
  '70 末吉です',
  '75 末吉です',
  '80 末吉です',
  '85 凶です',
  '90 凶です',
  '95 凶です',
  '100 ファンブル… 大凶です'
];
const answer = answers[Math.floor(Math.random() * answers.length)];