const data = {
  managers: [
    {
      id: "123",
      name: "Bob Apple",
      pnl: "abc",
      ranking: 10,
    },
    {
      id: "456",
      name: "April May",
      pnl: "lmn",
      ranking: 2, 
    },
    {
      id: "798",
      name: "Chip Indale",
      pnl: "xyz",
      ranking: 5,
    },
  ],
};

const colorMap = {
  abc: 'green',
  lmn: 'blue',
  xyz: 'red',
}

function init() {
  const managerContainer = document.getElementsByClassName('manager-container')[0];
  data.managers.forEach((manager) => {
    const managerElm = document.createElement('li');
    managerElm.classList.add('manager');
    managerElm.style.color = colorMap[manager.pnl];
    managerElm.innerHTML = `
      name: ${manager.name} // ranking: ${manager.ranking}
    `;
    console.log(managerContainer)
    managerContainer.appendChild(managerElm);
  });
}

init();

