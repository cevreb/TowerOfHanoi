let towers = [[4, 3, 2, 1], [], []];

document.addEventListener("DOMContentLoaded", () => {
  render();
  document.getElementById("resetBtn").addEventListener("click", resetGame);
  document.querySelectorAll(".disk").forEach((disk) => {
    disk.addEventListener("dragstart", (event) => {
      onDragStart(event);
    });
  });
  document.querySelectorAll(".tower").forEach((tower) => {
    tower.addEventListener("drop", (event) => {
      onDrop(event);
    });
    tower.addEventListener("dragover", (event) => {
      allowDrop(event);
    });
  });
});

function render() {
  document.querySelectorAll(".tower").forEach((tower, index) => {
    tower.innerHTML = "";
    towers[index].forEach((disk, diskIndex) => {
      const diskElement = document.createElement("div");
      diskElement.classList.add("disk", `disk-${disk}`);
      diskElement.style.width = `${disk * 30}px`;
      diskElement.style.bottom = `${diskIndex * 25}px`;
      diskElement.draggable = true;
      diskElement.addEventListener("dragstart", (event) => {
        onDragStart(event);
      });
      tower.appendChild(diskElement);
    });
  });
}

let selectedDisk = null;

function onDragStart(event) {
  selectedDisk = parseInt(event.target.classList[1].split("-")[1]);
}

function onDrop(event) {
  event.preventDefault();
  const destinationTowerIndex = parseInt(event.target.id.charAt(5)) - 1;
  moveDisk(destinationTowerIndex);
  checkWin();
}

function allowDrop(event) {
  event.preventDefault();
}

function moveDisk(destinationTowerIndex) {
  if (selectedDisk === null) return;

  const destinationTower = towers[destinationTowerIndex];

  if (isValidMove(destinationTower, selectedDisk)) {
    const sourceTowerIndex = towers.findIndex((tower) =>
      tower.includes(selectedDisk)
    );
    const sourceTower = towers[sourceTowerIndex];

    destinationTower.push(sourceTower.pop());
    render();
  }
}

function isValidMove(destinationTower, diskToMove) {
  if (destinationTower.length === 0) return true;
  return diskToMove < destinationTower[destinationTower.length - 1];
}

function showModal(message) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContent.innerHTML = `
    <h1>${message}</h1>
    <button class="btn" id="closeBtn">Close</button>
  `;

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  document.getElementById("closeBtn").addEventListener("click", () => {
    removeModal();
  });
}

function removeModal() {
  const modal = document.querySelector(".modal");
  if (modal) {
    modal.remove();
  }
}

function checkWin() {
  if (towers[2].length === 4) {
    showModal("You Win!");
  }
}

function resetGame() {
  removeModal();
  towers = [[4, 3, 2, 1], [], []];
  render();
}

function solveGame() {
  const sourceTowerIndex = towers.findIndex((tower) => tower.length > 0);
  const destinationTowerIndex = 2;

  const numberOfDisks = towers[sourceTowerIndex].length;
  hanoiRecursive(
    numberOfDisks,
    sourceTowerIndex,
    destinationTowerIndex,
    towers
  );
  render();
  checkWin();
}

function hanoiRecursive(n, source, destination, towers) {
  if (n > 0) {
    const auxTowerIndex = 3 - source - destination;

    hanoiRecursive(n - 1, source, auxTowerIndex, towers);

    towers[destination].push(towers[source].pop());
    render();

    hanoiRecursive(n - 1, auxTowerIndex, destination, towers);
  }
}

document.getElementById("solveBtn").addEventListener("click", solveGame);
