function validation(arg) {
    console.log(arg);
    var This_id = arg.getAttribute('data-id');
    console.log(This_id);

    if (This_id == 1) {
        var total = document.getElementById('total1').value;
        var obtained = document.getElementById('obtained1').value;
        var name = document.getElementById('s1').value;

        var error = document.getElementById('err_no_1');

        if (parseInt(obtained) > parseInt(total)) {
            error.classList.add("display_block");
            error.innerHTML = `(Error#1) In Subject: ${name} ,  Error! Obtained is greater than Total.`;
            alert(' Error! Obtained is greater than Total.');
        } else  {
            error.classList.remove("display_block");
        }





    }

    if (This_id == 2) {
        var total = document.getElementById('total2').value;
        var obtained = document.getElementById('obtained2').value;
        var name = document.getElementById('s2').value;
        var error = document.getElementById('err_no_2');

        if (parseInt(obtained) > parseInt(total)) {
            error.classList.add("display_block");
            alert(' Error! Obtained is greater than Total.');
            error.innerHTML = `(Error#2) In Subject: ${name} , Error! Obtained is greater than Total.`;

        } else {

            error.classList.remove("display_block");
        }
    }

    if (This_id == 3) {

        var total = document.getElementById('total3').value;
        var obtained = document.getElementById('obtained3').value;
        var name = document.getElementById('s3').value;
        var error = document.getElementById('err_no_3');



        if (parseInt(obtained) > parseInt(total)) {
            alert(' Error! Obtained is greater than Total.');
            error.classList.add("display_block");
            error.innerHTML = `(Error#3) In Subject: ${name} ,  Error! Obtained is greater than Total.`;

        } else {

            error.classList.remove("display_block");

        }


    }
    if (This_id == 4) {

        var total = document.getElementById('total4').value;
        var obtained = document.getElementById('obtained4').value;
        var name = document.getElementById('s4').value;
        var error = document.getElementById('err_no_4');



        if (parseInt(obtained) > parseInt(total)) {
            alert(' Error! Obtained is greater than Total.');
            error.classList.add("display_block");
            error.innerHTML = `(Error#4) In Subject: ${name} ,  Error! Obtained is greater than Total.`;

        } else {

            error.classList.remove("display_block");

        }
    }
}













