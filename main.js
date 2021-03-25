var pages = [];
pages['home'] = 'Home';
pages['over'] = 'Over Mij';


function page(doc) {
    if (document.location.pathname != '/' + doc) {;

        window.history.pushState('', pages[doc] + ' | JSLentertainment', '/' + doc);
        
        document.title = pages[doc] + ' | JSLentertainment';
        document.getElementById("page").innerHTML = '<div data-include="/Pages/' + doc + '.html"></div>';
        setPage()
    

    }
}

window.onpopstate = function(event) {
    if(document.location.pathname.slice(-1) == '/') {
        loc = document.location.pathname.slice(0, -1);
    } else {
        loc = document.location.pathname;
    }
    if(loc == '') {
        doc = '/home';
    } else {
        doc = loc;
    }

    console.log(doc);

    document.getElementById('page').style.opacity = '0';

    setTimeout( function() {
        document.getElementById("page").innerHTML = '<div data-include="/Pages' + doc + '.html"></div>'
        setPage()
    }, 500);

    setTimeout( function() {
        document.getElementById('page').style.opacity = 1;
    }, 500);
}