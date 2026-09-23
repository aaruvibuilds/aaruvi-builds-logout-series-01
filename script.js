const windowEl = document.querySelector("#window");
const logout = document.querySelector("#logout");
const again = document.querySelector("#again");

let locked = false;

logout.addEventListener("click", () => {
  if (locked) return;

  locked = true;
  windowEl.classList.add("logging-out");

  // Button morphs first, then the dashboard gives way to the exit scene.
  setTimeout(() => {
    windowEl.classList.add("exit-phase");
  }, 500);

  // Land on the clean signed-out state.
  setTimeout(() => {
    windowEl.classList.add("signed");
  }, 2350);
});

again.addEventListener("click", () => {
  if (!locked) return;

  windowEl.classList.remove("signed");

  setTimeout(() => {
    windowEl.classList.remove("exit-phase");
  }, 250);

  setTimeout(() => {
    windowEl.classList.remove("logging-out");
    locked = false;
  }, 850);
});
