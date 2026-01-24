Sentry.onLoad(function () {
  Sentry.init({
    dsn: "https://51bdd86f0ef20db6f8353b6d02d88c64@o4509440993591296.ingest.de.sentry.io/4510029070008400",
    beforeSend(event, hint) {
      // Check if it is an exception, and if so, show the report dialog
      if (event.exception && event.event_id) {
        Sentry.showReportDialog({ eventId: event.event_id });
      }
      return event;
    },
    // Tracing
    tracesSampleRate: 1.0, // Capture 100% of the transactions (cuz im bad and boujee)
    // Session Replay
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0, // If not already sampling the entire session, change to 100% when sampling sessions where errors occur.
  });

  Sentry.lazyLoadIntegration("feedbackIntegration")
    .then((feedbackIntegration) => {
      Sentry.addIntegration(
        feedbackIntegration({
          //Config here or no? Hella confusing docs nowadays
          showBranding: false,
          triggerLabel: "Send Feedback",
          formTitle: "Send Feedback",
          submitButtonLabel: "Send Feedback",
          messagePlaceholder:
            "What doesn't work?\nWhere is room for improvement?",
          successMessageText: "Thank you for your feedback!",
        }),
      );
    })
    .catch(() => {
      // this can happen if e.g. a network error occurs,
      // in this case User Feedback will not be enabled
    });
});

const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("nav ul li a");
const navlinks = document.querySelectorAll("nav ul li");

document.addEventListener("mousemove", (e) => {
  let leftPosition = e.clientX + 4;
  let topPosition = e.clientY + 4;

  cursor.style.left = leftPosition + "px";
  cursor.style.top = topPosition + "px";
});

// Fix it or leave it.

// links.forEach((link) => {
//   link.addEventListener("mouseenter", () => {
//     cursor.classList.add("large");
//   });
// });

// links.forEach((link) => {
//   link.addEventListener("mouseleave", () => {
//     cursor.classList.remove("large");
//   });
// });

document.addEventListener("mouseleave", () => {
  cursor.style.opacity = "0";
});

document.addEventListener("mouseenter", () => {
  cursor.style.opacity = "1";
});

// Animation

navlinks.forEach((li, i) => {
  li.style.animationDelay = 0 + i * 140 + "ms";
});

// const musicList = [
//   "assets/music/SULTAN.mp3",
//   "assets/music/Jammin.mp3",
//   "assets/music/CLUBBED TO DEATH.mp3",
//   "assets/music/Wicked Game.mp3",
//   "assets/music/Banger!.mp3",
// ];

// document.addEventListener("DOMContentLoaded", () => {
//   const audio = document.getElementById("background-music");
//   const playButton = document.getElementById("play-button");
//   const prevButton = document.getElementById("prev-button");
//   const nextButton = document.getElementById("next-button");
//   const volumeSlider = document.getElementById("volume-slider");
//   const progressBar = document.getElementById("progress-bar");
//   const songTitle = document.getElementById("song-title");
//   let isPlaying = false;
//   let currentIndex = Math.floor(Math.random() * musicList.length); // Start with random

//   // Initial setup
//   if (musicList.length > 0) {
//     loadSong(currentIndex);
//   }
//   audio.volume = volumeSlider.value;

//   function loadSong(index) {
//     audio.src = musicList[index];
//     audio.load();
//     songTitle.textContent = musicList[index]
//       .split("/")
//       .pop()
//       .replace(".mp3", "");
//   }

//   playButton.addEventListener("click", () => {
//     if (isPlaying) {
//       audio.pause();
//       playButton.textContent = "▶";
//     } else {
//       audio.play();
//       playButton.textContent = "⏸";
//     }
//     isPlaying = !isPlaying;
//   });

//   prevButton.addEventListener("click", () => {
//     currentIndex = Math.floor(Math.random() * musicList.length);
//     loadSong(currentIndex);
//     if (isPlaying) audio.play();
//   });

//   nextButton.addEventListener("click", () => {
//     currentIndex = Math.floor(Math.random() * musicList.length);
//     loadSong(currentIndex);
//     if (isPlaying) audio.play();
//   });

//   volumeSlider.addEventListener("input", () => {
//     audio.volume = volumeSlider.value;
//   });

//   // Update progress bar
//   audio.addEventListener("timeupdate", () => {
//     if (audio.duration > 0) {
//       const progress = (audio.currentTime / audio.duration) * 100;
//       progressBar.value = progress;
//     }
//   });

//   // Automatisch nächstes Lied nach Ende
//   audio.addEventListener("ended", () => {
//     nextButton.click();
//   });
// });
