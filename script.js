      function generateScreenshot() {
      const websiteUrl = document.querySelector(".Url").value;
      const screenshotImage = document.querySelector(".ssImage");
      const screenshotContainer = document.querySelector(".result");
      
      if (websiteUrl) {
      screenshotImage.src = `https://screenshot.apinepdev.workers.dev/?url=${websiteUrl}`;
      screenshotContainer.style.display = "block";
      }
      }