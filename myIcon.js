if(location.href.toLowerCase().search("andaudio") >= 0){
  var headID = document.getElementsByTagName("head")[0];         
  var iconNode = document.createElement('link');
  iconNode.rel = 'icon';
  iconNode.href = 'http://icons.iconarchive.com/icons/kyo-tux/phuzion/24/Device-Headphones-icon.png';
  headID.appendChild(iconNode);
}
else if(location.href.toLowerCase().search("tw.stock.yahoo") >= 0){
  var headID = document.getElementsByTagName("head")[0];         
  var iconNode = document.createElement('link');
  iconNode.rel = 'icon';
  iconNode.href = 'http://www.iconfinder.com/ajax/download/ico/?id=61484&s=24';
  headID.appendChild(iconNode);
}
else if(location.href.toLowerCase().search("jerry5chang.tonidoid.com") >= 0){
  var headID = document.getElementsByTagName("head")[0];         
  var iconNode = document.createElement('link');
  iconNode.rel = 'icon';
  iconNode.href = 'http://www.iconfinder.com/ajax/download/ico/?id=62947&s=40';
  headID.appendChild(iconNode);
}
else if(location.href.toLowerCase().search("jerry5home.tonidoid.com") >= 0){
  var headID = document.getElementsByTagName("head")[0];         
  var iconNode = document.createElement('link');
  iconNode.rel = 'icon';
  iconNode.href = 'http://www.iconfinder.com/ajax/download/ico/?id=62874&s=40';
  headID.appendChild(iconNode);
}
else if(location.href.toLowerCase().search("114.32.219.217") >= 0){
  var headID = document.getElementsByTagName("link");         
  headID[1].href = 'http://www.iconarchive.com/download/i52301/emey87/sfeers/wifi.ico';
}
