function add(a, b) {
  return a + b;
}

function create(id, parent, width, height) {
  let divWrapper = document.createElement("div");
  let canvasElement = document.createElement("canvas");
  parent.appendChild(divWrapper);
  divWrapper.appendChild(canvasElement);

  divWrapper.id = id;
  canvasElement.width = width;
  canvasElement.height = height;

  let ctx = canvasElement.getContext("2d");

  return {
    ctx: ctx,
    id: id,
  };
}

function createReportList(wrapperId) {
  let list = document.createElement("ul");
  list.id = wrapperId + "-reporter";

  let canvasWrapper = document.getElementById("wrapperId");
  canvasWrapper.appendChild(list);

  return list.id;
}

export { add, create, createReportList };
