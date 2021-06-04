var pages = [];
pages['home'] = 'Home';
pages['over'] = 'Over';

document.getElementById('loading').style.display = 'block';
window.onload = function() {
    document.getElementById('loading').style.transition = 'ease-in-out 500ms';
    document.getElementById('loading').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('loading').style.zIndex = '2'
    }, 500);
};

function page(doc) {
    console.log(doc)
    if (document.location.pathname == '/' + doc || (document.location.pathname == '/' && doc == 'home') ) {
        console.log('Blocked')
    } else {
        document.getElementById('supported').scrollTo({top: 0, behavior: 'smooth'});

        document.getElementById('transition').style.visibility = 'visible';
        document.getElementById('transition').style.opacity = '1';
        setTimeout(function() {
            window.history.pushState('', pages[doc] + ' | CBEntertainment', '/' + doc);
        
            document.title = pages[doc] + ' | CBEntertainment';
            document.getElementById("page").innerHTML = '<div data-include="/Pages/' + doc + '.html"></div>';
            setPage();

            document.getElementById('transition').style.visibility = 'hidden';
            document.getElementById('transition').style.opacity = '0';
        }, 500);
    }
};

function setupPage(doc) {
    console.log(doc);
    

}

window.onpopstate = function(event) {
    if(document.location.pathname.slice(-1) == '/') {
        loc = document.location.pathname.slice(1, -1);
    } else {
        loc = document.location.pathname.substring(1);
    };
    if(loc == '') {
        doc = 'home';
    } else {
        doc = loc;
    };
    console.log(doc);

    document.getElementById('supported').scrollTo({top: 0, behavior: 'smooth'});

    document.getElementById('transition').style.visibility = 'visible';
    document.getElementById('transition').style.opacity = '1';
    setTimeout(function() {
        document.title = pages[doc] + ' | CBEntertainment';
        document.getElementById("page").innerHTML = '<div data-include="/Pages/' + doc + '.html"></div>';
        setPage();

        document.getElementById('transition').style.visibility = 'hidden';
        document.getElementById('transition').style.opacity = '0';
    }, 500);
};