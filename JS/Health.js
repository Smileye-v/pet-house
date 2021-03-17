var $tableContent;
var $table;
var $content;
var tabsDoms;
var $head;


function changeDiv2(e) {
    var thisDom = e.target;
    var id = thisDom.getAttribute('href').substring(1);
    for (var j = 0; j < $head.length; j++) {
        $head[j].style.backgroundColor = 'white';
        $head[j].style.color = '#843900';
    }
    thisDom.style.backgroundColor = '#843900';
    thisDom.style.color = 'white';
}

function changeDiv(e) {
    var thisDom = e.target;
    var id = thisDom.getAttribute('href').substring(1);
    for (var i = 0; i < $tableContent.length; i++) {
        $tableContent [i].style.display = 'none';
    }
    for (var j = 0; j < $table.length; j++) {
        $table[j].style.backgroundColor = '#999999';
    }
    document.getElementById(id).style.display = 'block';
    thisDom.style.backgroundColor = '#843900';
}

function changeDiv1(e) {
    var thisDom = e.target;
    var id = thisDom.getAttribute('href').substring(1);
    for (var j = 0; j < $content.length; j++) {
        $content[j].style.display = 'none';
    }
    for (var z = 0; z < tabsDoms.length; z++) {
        tabsDoms[z].style.backgroundColor = '#999999';
    }
    document.getElementById(id).style.display = 'block';
    thisDom.style.backgroundColor = '#843900';
}


$(window).load(function () {
    $head = $('.tab_a');
    for (var l = 0; l < $head.length; l++) {
        $head[l].onclick = changeDiv2;
    }

    $table = $('.table');
    for (var i = 0; i < $table.length; i++) {
        $table[i].onclick = changeDiv;
    }
    $tableContent = $('.tableContent');

    $tabsDoms = $('.tabs');
    for (var j = 0; j < $tabsDoms.length; j++) {
        $tabsDoms[j].onclick = changeDiv1;
    }
    $content = $('.tabsContent');


});



