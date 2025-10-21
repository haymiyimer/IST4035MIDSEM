var key = "2817";
var list = [];
var a = document.getElementById("a");
var s = document.getElementById("s");
var b = document.getElementById("b");
var t = document.getElementById("t");
var c = document.getElementById("c");
function save() {
  localStorage.setItem(key, JSON.stringify(list));
}

function load() {
  var data = localStorage.getItem(key);
  if (data) {
    list = JSON.parse(data);
  }
}

function show() {
  a.innerHTML = "";
  s.innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    var o = list[i];
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(o.title));
    var btn = document.createElement("button");
    btn.textContent = o.saved ? "Remove" : "Save";
    btn.onclick = (function(obj) {
      return function() {
        obj.saved = !obj.saved;
        save();
        show();
      };
    })(o);
    li.appendChild(btn);
    if (o.saved) s.appendChild(li);
    else a.appendChild(li);
  }
  var count = 0;
  for (var j = 0; j < list.length; j++) {
    if (list[j].saved) count++;
  }
  c.textContent = "Saved: " + count;
}

b.onclick = function() {
  var text = t.value;
  if (text == "") return;
  var item = { title: text, saved: false, category: "Internship" };
  list.push(item);
  t.value = "";
  save();
  show();
};

load();
show();
