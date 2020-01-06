/*global $*/
(function () {
    'use strict';
    const playing = $('#play');
    const videostoplay = $('#videos');
    playing.hide();
    fetch("videos.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(rt => {
            videostoplay.append(`Choose a video: `);
            for (let i = 0; i < rt.length; i++) {
                const elem = Object.values(rt[i]);
                if (elem[1] === "") {
                    elem[1] = elem[4];
                }
                videostoplay.append(`<div class="video" id = ${elem[3]} ><img src="${elem[1]}" alt="img"><div>${elem[0]}</div></div> `);

            }
        })
        .catch(err => {
            console.log(err);
        })
        .then(rt => {
            $(".video").click((e) => {
                playing.empty();

                fetch("videos.json")
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`${response.status} ${response.statusText}`);
                        }
                        return response.json();
                    })
                    .then(rt => {
                        let id = $(e.currentTarget).attr('id');
                        for (let i = 0; i < rt.length; i++) {
                            const elem = Object.values(rt[i]);

                            if (id == rt[i].id) {
                                playing.append(`<object type="application/x-shockwave-flash" style="width:450px; height:366px;" data="//www.youtube.com/v/${elem[2]}?color2=FBE9EC&amp;autoplay=1&amp;version=3">      
                                  <param name="movie" value="//www.youtube.com/v/${elem[2]}?color2=FBE9EC&amp;autoplay=1&amp;version=3" />
                                  <param name="allowFullScreen" value="true" />
                                  <param name="allowscriptaccess" value="always" />
                                  </object>
                            <h1>${elem[0]}</h1>`);

                                playing.show();


                            }

                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            });
        })
}());