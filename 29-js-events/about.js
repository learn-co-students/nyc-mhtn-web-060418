const makeBoxWhite = id =>
  (document.getElementById(id).style.background = "white");

const displayMessageAndModifyBox = (message, e) => {
  console.log(message);
  makeBoxWhite(e.target.id);
};

var eventDescripters = [
  {
    id: "box-1",
    message:
      "This morning we will learn about events and events listeners"
  },
  {
    id: "box-2",
    message: "Explain when and why to use event listeners"
  },
  {
    id: "box-3",
    message: "Distinguish between event types"
  },
  {
    id: "box-4",
    message:
      "Write event listeners as --> --> stand-alone functions or in-line functions <-- <-- <-- p.s. Please no ()"
  },
  {
    id: "box-5",
    message: "Event bubbling and capturing"
  },
  {
    id: "box-6",
    message: "Use event listeners to manipulate the DOM"
  },
  {
    id: "box-7",
    message: "Synthesize knowledge of forms with event listeners"
  },
  {
    id: "box-8",
    message: "Delegate events using the event.target"
  }
];

eventDescripters.forEach(eventDesc => {
  document
    .getElementById(eventDesc.id)
    .addEventListener("click", e =>
      displayMessageAndModifyBox(eventDesc.message, e)
    );
});
