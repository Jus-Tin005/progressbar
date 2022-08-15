var progressBar = document.querySelector(".progress-bar");
var downloadBtn = document.querySelector(".download-btn");
var setUrl = "https://www.linkedin.com";


downloadBtn.addEventListener("click", ()=> {
        // console.log("JT");

        downloadBtn.setAttribute("disabled",true);



        /* var setWidth = 0;


        // by arrow function
        const progressInc = () => {
                // console.log("going");

                if(setWidth >= 100){
                        clearInterval(setint);
                        window.location.href = setUrl;
                        // setWidth = 0;
                }else {
                        setWidth ++;

                        progressBar.style.width = `${setWidth}%`;
                        progressBar.setAttribute("data-incre",`${setWidth}%`);

                }
        }

        var setint = setInterval(progressInc,100);



 */
        // by regular function

        var setWidth = 0;

        var setInt = setInterval(progressInc,100);  // different invoking


        function progressInc () {
                // console.log("hi")

                if(setWidth >= 100){
                        clearInterval(setInt);
                        setWidth = 0;
                }else {
                        setWidth++;

                        progressBar.style.width = `${setWidth}%`;
                        progressBar.setAttribute("data-incre",`${setWidth}%`);

                }
        }
});

