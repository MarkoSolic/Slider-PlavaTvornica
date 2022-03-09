$(document).ready(() => {
  $(".next").on("click", () => {
    moveRight();
  });
  $(".prev").on("click", () => {
    moveLeft();
  });

  const moveRight = () => {
    let slideWidthTop = $(".top li:last-child ").width();
    let slideWidthBottom = $(".bottom li:last-child").width();
    $(".next").prop("disabled", true);

    $(".top li:last-child").animate(
      {
        width: -slideWidthTop,
      },
      300,

      () => {
        $(".top li:last-child").prependTo(".top .items");
      }
    );

    $(".top li:last-child ").animate(
      {
        width: slideWidthTop,
      },
      300
    );

    $(".bottom li:last-child").animate(
      {
        width: -slideWidthBottom,
      },
      300,
      () => {
        $(".bottom li:last-child").prependTo(".bottom .items");
      }
    );
    $(".bottom li:last-child ").animate(
      {
        width: slideWidthBottom,
      },
      300,
      () => {
        $(".next").prop("disabled", false);
      }
    );
  };
});

const moveLeft = () => {
  $(".prev").prop("disabled", true);

  $(".top li:first-child").hide("slow", () => {
    $(".top li:first-child").appendTo(".top .items").fadeIn("slow");
  });

  $(".bottom li:first-child").hide("slow", () => {
    $(".bottom li:first-child").appendTo(".bottom .items").fadeIn("slow");
    $(".prev").prop("disabled", false);
  });
};
