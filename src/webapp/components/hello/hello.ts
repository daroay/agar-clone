import * as $ from "jquery";
import "./hello.scss";

function render(): void {
  $(document).ready(function(): void {
    console.log("render");
    let p = $("<p></p>").text("hello world");
    p.addClass("red");
    $("body").append(p);
  });
}

export default {
  render: render
};
