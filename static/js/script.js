
function rps(yourchoice){
    var botchoice,humanchoice;
    botchoice = generaterand(Math.floor(Math.random() * 3));
    humanchoice = yourchoice.id;
    result = winner(humanchoice,botchoice);
    message = finalmessage(result);
    rpsmess(humanchoice,message,botchoice);
}
function generaterand(number){
    //console.log(number);
    return ['rock','paper','scissor'][number];
}

function winner(hc,bc){
    if(hc==bc){
        return [1,1];
    }
    else if(hc=="rock"){
        if(bc=="scissor"){
            return [1,0];
        }
        else{
            return [0,1];
        }
    }
    else if(hc=="paper"){
        if(bc=="scissor"){
            return [0,1];
        }
        else{
            return [1,0];
        }
    }
    else if(hc=="scissor"){
        if(bc=="rock"){
            return [0,1];
        }
        else{
            return [1,0]; 
        }
    }
}

function finalmessage(result){
    if(result[0] == result[1]){
        return ["Its a Tie","black"];
    }
    else if(result[0]>result[1]){
        return ["You won","green"];
    }
    else{
        return ["You lost","red"];
    }
}

function rpsmess(hc,message,bc){
  imagedb = {
      'rock':document.getElementById('rock').src,
      'paper':document.getElementById('paper').src,
      'scissor':document.getElementById('scissor').src
  };
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissor').remove();

  var hd = document.createElement('div');
  var md = document.createElement('div');
  var rd = document.createElement('div');
  var bb = document.createElement('div');

  hd.innerHTML = "<img src='"+imagedb[hc]+"' height='150' width='150'>";
  md.innerHTML = "<h2 style = 'color:"+message[1] +"' >"+message[0]+"</h2>";
  rd.innerHTML = "<img src='"+imagedb[bc]+"' height='150' width='150'>";
  bb.innerHTML = "<button class='btn btn-warning' onclick = 'window.location.reload()'>Reset</button>";

  document.getElementById('flex-box-container2-id').appendChild(hd);
  document.getElementById('flex-box-container2-id').appendChild(md);
  document.getElementById('flex-box-container2-id').appendChild(rd);
  document.getElementById('flex-box-container2-id').appendChild(bb);
}

