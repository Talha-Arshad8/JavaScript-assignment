setInterval(() => {
    date = new Date();
    htime = d.gethours();
    mtime = d.getminutes();
    stime = d.getseconds();
    hrotation = 30 * htime + mtime/2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;
    hand.style.transform = `rotate (${hrotation}deg)`
}, 1000)