OVERFELT MISSION CONTROL — SPRINT 6.1

Release highlights:
- Fixed iPhone update prompt: now a tappable bottom toast, clear of the status bar/Dynamic Island.
- Update prompt dismisses correctly and disappears after the update reloads.
- One-time cinematic Mission Briefing with a permanent replay button inside unlocked Dad Mode.
- Bundled offline Vegas skyline, Sphere and desert background visuals.
- Improved touch targets, safe-area spacing, scrolling and last-screen memory.
- Cache version upgraded to omc-v6.1.0.

DEPLOYMENT
Upload all files and folders to the root of the GitHub repository, replacing the current files. Keep the assets and icons folders intact. Commit and allow Vercel to deploy.

On the first launch after deployment, tap UPDATE if the old version offers it. iPhone may briefly reload once as the new service worker takes control.
