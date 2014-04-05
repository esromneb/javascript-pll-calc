
(function (window) {

    function constructor() {


        var publicInterface = {

                get: function (hzin, hzout, mulmin, mulmax, divmin, divmax) {

                    hzin = parseFloat(hzin);
                    hzout = parseFloat(hzout);
                    mulmin = parseInt(mulmin);
                    mulmax = parseInt(mulmax);
                    divmin = parseInt(divmin);
                    divmax = parseInt(divmax);

                    var i,j;
                    var results = [];

                    console.log("searching...");

                    for( i = mulmin; i <= mulmax; i++ )
                    {
                        for( j = divmin; j <= divmax; j++ )
                        {
                            if( hzout == (hzin*i/j) )
                            {
                                console.log("mul: " + i + " div: " + j);
                            }
                        }
                    }

                    console.log("done!");

            }
        };

        return publicInterface;
    }


    window.JSPLL = constructor();

}(window));
