function madebttnslist() {
    if (document.getElementById("madebttns").style.display == "none") {
        document.getElementById("madebttns").style.display = "block";
    } else if (document.getElementById("madebttns").style.display == "block") {
        document.getElementById("madebttns").style.display = "none";
    }
}

var getFaviconApi = "https://api.byi.pw/favicon/?url=";
window.onload = function () {
    favicon.animate(
        [
            "data:image/gif;base64,R0lGODlhFAAUAPQAAAAAAAECAhISEhISEyMNCywTDgE+AAQALgUAPQFOAOTMr+bOsPrnv6TGxKTIxaXIxvzpwcD/+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAgAAACwAAAAAFAAUAAAFgyAgjmRpnmgqGkZiPI8qFoVRJEkUPUhK0DSXjtczFQTAm5BYHBECgeTNsEMgDqUkUvmyWku/AhQYO3ixpIe0QIh5vwLAYtGI/O47gNl6EAgCDBALagUiD3lvCH4BChCOCiOHMXpeUCILDAtpeSJXTSiDkzIkgQyjJAuOmqcjmayvsCUhADs=",
            "data:image/gif;base64,R0lGODlhFAAUAPQAAAAAAAAAAAECAhISEhISEyMNCywTDgE+AAQALgUAPQFOAObOsPrnv6TGxKTIxaXIxvzpwcD/+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUCAAAALAAAAAAUABQAAAWGICCOZGmeaKquwKG4z8MahWK8UfQgqeH7CkXukeCZDILfDUcslpAD5e2gS1hLhV9yqmhYnSRtlCb7XklZZVaG+PIEo4fUoAOYE4IBHPCIZEV9bG4DegN8dYCIbVZ5cTEAcIEjbUYAhgwQDJYADI8ocAsQCyOhoyoMpgChmSl7IoaqqSyzIiEAOw==",
            "data:image/gif;base64,R0lGODlhFAAUAPQAAAAAAAECAhISEhISEyMNCywTDgE+AAQALgUAPQFOAOTMr+bOsPrnv6TIxaXIxvzpwcD/+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUCAAAALAAAAAAUABQAAAV/ICCOZGmeaLkoy2gYieE46PK0RWEUSQJBDkRJcQMQcrnYLygczRwFAZKnZDYBDgghEJjyDEAE4kCCIqVUmVhcOha4SNphTSZ5cwTami2wH/9AAHNiBwICAXYFIll6e4aIJ4wigwhcKZIiY1c1MykoDA8MniY2RaMlDC2nq6yeIQA7"
        ],
        1
    );
};
