
      /*
            the methods under the data object

            getFullYear()
            getMonth()
            getDate()
            getDay()
            getHours()
            getMinutes()
            getSeconds()
            getMilliseconds()


            these are the mehtods . means functions of a object.
            
            the object is the Date()

            getHours() is the method of the Date() object.

            Math.floor(Math.random() * 255)

            */
      function print_time() {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var date = d.getDate();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();

        // month setting

        months = [
          "Januray",
          "Feburary",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "October",
          "November",
          "December",
        ];
        for (let i = 0; i < 12; i++) {
          if (month == i) {
            month = months[i];
          }
        }

        // hour setting

        if (hours > 12) {
          hours -= 12;
        }

        document.body.innerHTML =
          year +
          ":" +
          month +
          ":" +
          date +
          ":" +
          hours +
          ":" +
          minutes +
          ":" +
          seconds;
        /*
        if (minutes == 34) {
          clearInterval(t);
        }*/
      }

      var t = setInterval(print_time, 1000);

      // basically this function is used for making any function call again and again continously after repeated intervals
