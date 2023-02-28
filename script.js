'use strict';

const account1 = {
  owner: 'Shanya Shrivastava',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 1111,
};

const account2 = {
  owner: 'Vinayak Nawdhar',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 2222,
};

const account3 = {
  owner: 'Vedant Sanjay Khandelwal',
  movements: [200, -200, 340, -300, -20, 50, 400, -460,10000],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sneha R',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Sukhi M',
  movements: [400, -200, 800, 350, -90],
  interestRate: 0.8,
  pin: 5555,
};
const account6 = {
  owner: 'Varun Kulkarni',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1.3,
  pin: 6666,
};
const account7 = {
  owner: 'Srineedhi V S',
  movements: [430, 1000, 700, -50, 90, 1000, -200],
  interestRate: 0.9,
  pin: 7777,
};
const account8 = {
  owner: 'Trishala C',
  movements: [430, 1000, 700, 50, 30, 20, -100, 500],
  interestRate: 1,
  pin: 8888,
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

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// My Code Starts Here

const displayMovements = function (account) {
  const movements = account.movements;
  containerMovements.innerHTML = '';

  movements.map(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__value">${movement}  &#8377;</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const getInitials = function (account) {
  account['username'] = account.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
};

accounts.map(account => {
  getInitials(account);
  // console.log(account.username);
});

const getDeposits = function (accounts) {
  accounts.map(function (account) {
    account.deposit = account.movements.filter(mov => mov > 0);
  });
};
getDeposits(accounts);
// console.log(accounts);

const getWithdrawals = function (accounts) {
  accounts.map(function (account) {
    account.withdrawal = account.movements.filter(mov => mov < 0);
  });
};
getWithdrawals(accounts);
// console.log(accounts);

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
  labelBalance.innerHTML = `${account.balance} &#8377;`;
  labelSumIn.innerHTML = `${account.deposit.reduce(
    (acc, deposit) => acc + deposit,
    0
  )} &#8377;`;
  labelSumOut.innerHTML = `${Math.abs(
    account.withdrawal.reduce((acc, deposit) => acc + deposit, 0)
  )} &#8377;`;
  labelWelcome.textContent = `Hey, ${account.owner}`;
  labelSumInterest.innerHTML = `${
    (account.balance * account.interestRate) / 100
  }  &#8377;`;
};

// displayAll(account1);

containerApp.style.opacity = '0';

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('clicked');
  const currentAccount = accounts.find(
    currentAccount => currentAccount.username === inputLoginUsername.value
  );
  if (currentAccount) {
    if (currentAccount.pin == inputLoginPin.value) {
      displayAll(currentAccount);
      containerApp.style.opacity = '1';
    } else {
      alert('Wrong Password 🚫');
      return;
    }
  } else {
    alert('Invalid Username 👎');
  }
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
  inputLoginPin.blur();
});
