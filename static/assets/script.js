document.addEventListener("DOMContentLoaded", function () {
      const copyButton = document.getElementById("copyButton");

      // Initialize popover
      const popover = bootstrap.Popover.getOrCreateInstance(copyButton);

      copyButton.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          popover.show();

          setTimeout(() => {
            popover.hide();
          }, 1500);
        } catch (err) {
          alert("Copy failed: " + err.message);
        }
      });
    });
