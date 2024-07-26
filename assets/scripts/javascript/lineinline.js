var boot = document.getElementById("boot");

function writeline(text) {
    boot.innerHTML += (text + "<br />")
        .replace(/\n/g, "<br />")
        .replace(/  /g, "&nbsp;&nbsp;");
}

function spt(text) {
    var lines = text.split("\n");

    return lines;
}

function readtext(file) {
    return new Promise(function (resolve, reject) {
        $.get(file, function (data) {
            var processedData = data;

            resolve(processedData);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            reject(
                new Error(
                    "Failed to load file: " + textStatus + " - " + errorThrown
                )
            );
        });
    });
}


readtext("../texts/deep_dive_prototype_v4.cpp.txt")
    .then(function (data) {
        writeline(data);
    })
    .catch(function (error) {
        throw error;
    });
