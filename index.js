function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}


function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list li');;
   for(var i=0;i<list.length;i++)
   {
     list[i].innerHTML = parseInt(list[i].innerHTML) + parseInt(n)
   }
}

function deepestChild() {
  var list = document.querySelectorAll('#grand-node div');;
   for(var i=0;i<list.length;i++)
   {
     if(i===list.length-1)
     {
       return list[i]
     }
   }
}

