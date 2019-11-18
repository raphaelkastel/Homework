/* global $*/
import $ from 'jquery';
(function() {
  "use strict";

  const content = $("#content");
  let postam;
  let postmax = 0;
  let postpoint;
  let setpostpoint;
  let clickid;
  function fetchposts(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(rt => {
        postam = 3;
        rt.forEach(element => {
          if (postmax < element.id) {
            postmax = element.id;
          }
        });
        if (!postpoint) {
          postpoint = rt[0].id - 1;
        }
        reset();
        $('<input type="button" id = "back" value="back" />').appendTo(content);
        $('<input type="button" id = "forward" value="forward" />').appendTo(
          content
        );
        setupbf();
        rt.forEach(element => {
          if (postam > 0 && element.id > postpoint) {
            $(`<tr>
                            <td><input type="button" class = "scom" id = "${element.id}" value="Show comments" /></td>
                            <td>${element.id}</td>
                            <td>${element.title}</td>
                            <td>${element.body}</td>
                         </tr>`).appendTo(content);
            postam = postam - 1;
            if (!setpostpoint) {
              setpostpoint = element.id;
            }
          }
        });
        combut();
        if(!setpostpoint){
            setpostpoint = postmax; 
    }
    postpoint = setpostpoint - 1;
        setpostpoint = null;
      });
  }
  function reset() {
    $(
      `<div><input type="button" class = "reset" value="reset" /></div>`
    ).appendTo(content);
    $(".reset").click(function() {
      content.text("");
      fetchUsers();
      postpoint = 0;
    });
  }
  function setup() {
    $(".Uclick").click(function() {
      content.text("");
      clickid = this.id;
        fetchposts(`${clickid}`);
    });
  }
  function setupbf() {
    $("#back").click(function() {
      postpoint = postpoint - 3;
      content.text("");
      fetchposts(`${clickid}`);
    });
    $("#forward").click(function() {
      if (postpoint + 3 >= postmax ) {
        postpoint = postmax - 3;
      } else {
        postpoint = postpoint + 3;
      }
      content.text("");
      fetchposts(clickid);
    });
  }
  function combut() {
    $(".scom").click(function() {
      let id = this.id;
      if (this.value !== "Hide" && this.value !== "Show") {
        this.value = "Hide";

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.id}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
          })
          .then(rt => {
            rt.forEach(element => {
              $(`  
            <tr class = comments${id}>
                                  <td>${element.id}</td>
                                  <td>${element.name}</td>
                                  <td>${element.email}</td>
                                  <td>${element.body}</td>
                               </tr>`).appendTo(content);
            });
          });
      } else if (this.value == "Hide") {
        this.value = "Show";
        $(`.comments${id}`).hide();
      } else if (this.value == "Show") {
        this.value = "Hide";
        $(`.comments${id}`).show();
      }
    });
  }
  function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(rt => {
     
        rt.forEach(element => {
          $(`<tr id = ${element.id}>
                        <td>${element.name}</td>
                        <td>${element.website}</td>
                        <td>${element.company.catchPhrase}</td>
                        <td> ${element.company.bs}</td>
                        <td>${element.company.name}</td>
                     </tr>`)
            .addClass("Uclick")
            .appendTo(content);
        });
        setup();
      });
  }
  fetchUsers();
})();
