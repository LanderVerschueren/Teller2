/**
 * Created by Lander Verschueren on 10/12/2014.
 */
var teller = 1;

window.onload = function() {
    document.getElementById('teller').onclick = function() {
        document.getElementById('lblTeller').innerHTML = teller;
        teller++;
    };

    document.getElementById('btnReset').onclick = function() {
        document.getElementById('lblTeller').innerHTML = 0;
        teller = 1;
    };
};
