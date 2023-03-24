'use strict';

const account1 = {
  owner: 'Shanya Shrivastava',
  movements: [100000, 5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 1111,
  movementsDates: [
    '2021-11-18T21:31:17.178Z',
    '2021-11-18T21:31:17.178Z',
    '2021-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2023-02-28T17:01:17.194Z',
    '2023-03-01T23:36:17.929Z',
    '2023-03-03T10:51:36.790Z',
  ],
  locale: 'en-US',
};

const account2 = {
  owner: 'Vinayak Nawdhar',
  movements: [100000, 200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 2222,
  movementsDates: [
    '2021-11-18T21:31:17.178Z',
    '2021-11-18T21:31:17.178Z',
    '2021-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-05-27T17:01:17.194Z',
    '2023-03-01T23:36:17.929Z',
    '2023-03-03T10:51:36.790Z',
  ],
  locale: 'en-US',
};

const account3 = {
  owner: 'Vedant Sanjay Khandelwal',
  movements: [100000, 200, -200, 340, -300, -20, 50, 400, 10000],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2021-11-18T21:31:17.178Z',
    '2021-11-18T21:31:17.178Z',
    '2021-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-05-27T17:01:17.194Z',
    '2023-03-01T23:36:17.929Z',
    '2023-03-03T10:51:36.790Z',
  ],
  locale: 'en-US',
};

const account4 = {
  owner: 'Sneha R',
  movements: [100000, 430, 1000, 700, 50, 90, -100, 200, 12000],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2021-11-18T21:31:17.178Z',
    '2021-11-18T21:31:17.178Z',
    '2021-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-05-27T17:01:17.194Z',
    '2023-03-01T23:36:17.929Z',
    '2023-03-03T10:51:36.790Z',
  ],
  locale: 'en-US',
};

const account5 = {
  owner: 'Sukhi M',
  movements: [100000, 400, -200, 800, 350, -90, -100, -200, 11000],
  interestRate: 0.8,
  pin: 5555,
  movementsDates: [
    '2021-11-18T21:31:17.178Z',
    '2021-11-18T21:31:17.178Z',
    '2021-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-05-27T17:01:17.194Z',
    '2023-03-01T23:36:17.929Z',
    '2023-03-03T10:51:36.790Z',
  ],
  locale: 'en-US',
};
const account6 = {
  owner: 'Varun Kulkarni',
  movements: [100000, 430, 1000, 700, 50, 90, -200, -1500, 12500],
  interestRate: 1.3,
  pin: 6666,
  movementsDates: [
    '2021-11-18T21:31:17.178Z',
    '2021-11-18T21:31:17.178Z',
    '2021-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-05-27T17:01:17.194Z',
    '2023-03-01T23:36:17.929Z',
    '2023-03-03T10:51:36.790Z',
  ],
  locale: 'en-US',
};
const account7 = {
  owner: 'Srineedhi V S',
  movements: [100000, 430, 1000, 700, -50, 90, 1000, -200, 10000],
  interestRate: 0.9,
  pin: 7777,
  movementsDates: [
    '2021-11-18T21:31:17.178Z',
    '2021-11-18T21:31:17.178Z',
    '2021-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-05-27T17:01:17.194Z',
    '2023-03-01T23:36:17.929Z',
    '2023-03-03T10:51:36.790Z',
  ],
  locale: 'en-US',
};
const account8 = {
  owner: 'Trishala C',
  movements: [100000, 430, 1000, 700, 50, 30, 20, -100, 15000],
  interestRate: 1,
  pin: 8888,
  movementsDates: [
    '2021-11-18T21:31:17.178Z',
    '2021-11-18T21:31:17.178Z',
    '2021-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2023-02-25T17:01:17.194Z',
    '2023-03-01T23:36:17.929Z',
    '2023-03-03T10:51:36.790Z',
  ],
  locale: 'en-US',
};
const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
  account8,
];

// DOM ELEMENTS
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const labelLogo = document.querySelector('.logo');
const labelSlash = document.querySelector('.slash');
const modalContent = document.getElementById("model-content");
const overlay = document.querySelector(".overlay");
const modalWindow = document.querySelector(".modal-window");


const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnCreateAcc = document.querySelector('.create-account');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const closeBtn = document.querySelector(".close-btn");
const createAccSubmit = document.querySelector(".submit-btn-create-account");
const btnLogOut = document.querySelector(".log-out");

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// My Code Starts Here
const calcDaysBetween = function (day) {
  const daysElapsed = +new Date() - +day;
  return Math.trunc(Math.abs(daysElapsed / (1000 * 60 * 60 * 24)));
};

const displayMovements = function (account, sort = false) {
  const movements = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;
    containerMovements.innerHTML = '';
    if(movements.length === 0){
      const html = `
            <div class="movements__row">
              No transactions Yet!
            </div>
            `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    }else{
      const movementsDate = account.movementsDates;
      movements.forEach(function (movement, index) {
        const type = movement > 0 ? 'deposit' : 'withdrawal';
        const day = new Date(movementsDate[index]);
        let toBeDisplayed;
        const dayBetween = calcDaysBetween(day);
        switch (dayBetween) {
          case 0:
            toBeDisplayed = 'Today';
            break;
          case 1:
            toBeDisplayed = 'Yesterday';
            break;
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
            toBeDisplayed = `${dayBetween} Days Ago`;
            break;
          default:
            toBeDisplayed = new Intl.DateTimeFormat('en-IN').format(day);
        }
        const html = `
            <div class="movements__row">
              <div class="movements__type movements__type--${type}">${
          index + 1
        } ${type}</div>
        <div class="movements__date">${toBeDisplayed}</div>
              <div class="movements__value">${movement.toFixed(2)}  &#8377;</div>
            </div>
            `;
    
        containerMovements.insertAdjacentHTML('afterbegin', html);
      });
    }

};

let state;

const getInitials = function (account) {
  account['username'] = account.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
};

accounts.map(account => {
  getInitials(account);
});

const getDeposits = function (accounts) {
  accounts.map(function (account) {
    account.deposit = account.movements.filter(mov => mov > 0);
  });
};
getDeposits(accounts);

const getWithdrawals = function (accounts) {
  accounts.map(function (account) {
    account.withdrawal = account.movements.filter(mov => mov < 0);
  });
};
getWithdrawals(accounts);

const calBalance = function (accounts) {
  accounts.map(function (account) {
    account.balance = account.movements.reduce(function (acc, mov) {
      return acc + mov;
    }, 0);
  });
};
calBalance(accounts);

const displayAll = function (account) {
  displayMovements(account);

  labelBalance.innerHTML = `${new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(account.balance)}`;

  labelSumIn.innerHTML = `${account.deposit.reduce(
    (acc, deposit) => acc + deposit,
    0
  )} &#8377;`;

  labelSumOut.innerHTML = `${Math.abs(
    account.withdrawal.reduce((acc, deposit) => acc + deposit, 0)
  )} &#8377;`;

  labelWelcome.textContent = `Hey, ${account.owner}`;

  labelSumInterest.innerHTML = `${(
    (account.balance * account.interestRate) /
    100
  ).toFixed(2)}  &#8377;`;

  let now = new Date();
  const option = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  labelDate.textContent = new Intl.DateTimeFormat('en-IN', option).format(now);

  labelSlash.style.opacity = '0';
  btnCreateAcc.style.opacity = '0';
};

const calAll = function (accounts) {
  calBalance(accounts);
  getDeposits(accounts);
  getWithdrawals(accounts);
};

const ticktimer = function () {
  let time = 300;
  const timer = setInterval(function () {
    if (time === 0) {
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = '0';
      labelSlash.style.opacity = '1';
      btnCreateAcc.style.opacity = '1';
      clearInterval(timer);
    }
    labelTimer.textContent = `${Math.trunc(time / 60)
      .toString()
      .padStart(2, 0)}:${(time % 60).toString().padStart(2, 0)}`;
    time--;
  }, 1000);
  return timer;
};

containerApp.style.opacity = '0';

let currentAccount, timer;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    currentAccount => currentAccount.username === inputLoginUsername.value
  );
  if (currentAccount) {
    if (currentAccount.pin == inputLoginPin.value) {
      displayAll(currentAccount);
      containerApp.style.opacity = '1';
    } else {
      alert('Wrong Password 🚫');
      inputLoginPin.value = '';
      return;
    }
  } else {
    alert('Invalid Username 👎');
  }
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
  inputLoginPin.blur();
  if (timer) {
    clearInterval(timer);
  }
  timer = ticktimer();
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const tranferToAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  let balanceToBeTranfered = +inputTransferAmount.value;
  if (
    tranferToAcc &&
    tranferToAcc !== currentAccount &&
    balanceToBeTranfered > 0
  ) {
    if (balanceToBeTranfered <= currentAccount.balance) {
      tranferToAcc.movements.push(balanceToBeTranfered);
      tranferToAcc.movementsDates.push(new Date().toISOString());
      currentAccount.movements.push(-balanceToBeTranfered);
      currentAccount.movementsDates.push(new Date().toISOString());
      calAll(accounts);
      displayAll(currentAccount);
    } else {
      alert('Invalid Amount 👎');
    }
    inputTransferTo.value = '';
    inputTransferAmount.value = '';
    inputTransferAmount.blur();
  } else {
    alert('Enter correct account & amount details!');
    inputTransferTo.value = '';
    inputTransferAmount.value = '';
    inputTransferAmount.blur();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value);
  alert('Wait for the loan approval....⏳');
  setTimeout(() => {
    if (!currentAccount.deposit.some(tran => tran >= 0.1 * loanAmount)) {
      alert('Sorry,Loan Denied!🛑');
    } else {
      alert('Congratulations, Loan Approved!🎉');
      currentAccount.movements.push(loanAmount);
      calAll(accounts);
      currentAccount.movementsDates.push(new Date().toISOString());
      displayAll(currentAccount);
    }
    inputLoanAmount.value = '';
    inputLoanAmount.blur();
  }, 5000);
});

labelLogo.addEventListener('click', function () {
  location.reload();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const accountToBeRemoved = inputCloseUsername.value;
  if (
    accountToBeRemoved === currentAccount.username &&
    inputClosePin.value == currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === accountToBeRemoved
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = '0';
    labelWelcome.textContent = 'Login to get started';
  } else {
    alert('Wrong username or pin!');
  }
  inputClosePin.value = '';
  inputCloseUsername.value = '';
  inputClosePin.blur();
});

btnSort.addEventListener('click', function () {
  state = state ? false : true;
  displayMovements(currentAccount, state);
});

const Close = function(){
    overlay.classList.add('hidden')
    modalWindow.classList.add('hidden')
}
overlay.addEventListener("click",Close);
closeBtn.addEventListener("click",Close);
btnCreateAcc.addEventListener("click",clickedFunction)

function clickedFunction(Content){
  overlay.classList.remove('hidden');
  modalWindow.classList.remove('hidden');
}

document.addEventListener("keydown",function(e){
    if(e.key == "Escape"){
        Close();
    }
});

createAccSubmit.addEventListener("click",function(e){
e.preventDefault();
const elArr = document.querySelectorAll(".create-account-form input");
if(elArr[3].value !== elArr[4].value){
  alert("Password Mismatch ⛔");
  for(let i=3;i<5;i++){
    elArr[i].value = "";
  }
}
else if(elArr[5].value > 6 || elArr[5].value < 1){
  alert("Invalid Interest Rate");
  elArr[5].value = '';
}
else if(accounts.find(el => el.username === elArr[2].value)){
  alert("Username already exists! Try another👎");
  elArr[2].value = '';
}
else{
  accounts.push({
    owner : `${elArr[0].value + " " + elArr[1].value}`,
    username : `${elArr[2].value}`,
    pin : Number(elArr[3].value),
    movements : [],
    interestRate : +(elArr[5].value),
    movementsDates : []
  })
  for(let i=0;i<6;i++){
    elArr[i].value = "";
  }
  calAll(accounts);
  Close();
  alert("Account Successfully Created!🙏");
}

})

btnLogOut.addEventListener("click",function(){
  labelWelcome.textContent = "Log in to get started";
  containerApp.style.opacity = '0';
  labelSlash.style.opacity = '1';
  btnCreateAcc.style.opacity = '1';
})