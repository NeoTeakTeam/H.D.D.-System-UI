async function zhprint(docid, waittime = 0.5) {
    var doc = document.getElementById(docid);
    const org = doc.innerHTML;

    const lst = org.split("");

    doc.innerHTML = "";

    await new Promise((resolve) => setTimeout(resolve, waittime * 1000));
    for (var i = 0; i < lst.length; i++) {
        doc.innerHTML += lst[i];
        await new Promise(resolve => setTimeout(resolve, waittime * 1000));
    };
    doc.innerHTML = org;
}
