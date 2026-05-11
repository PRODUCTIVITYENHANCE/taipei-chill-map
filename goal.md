# Goal: 台北放空地圖

## Objective

Build a polished first version of a "台北放空地圖" web app using Vite, Tailwind CSS, shadcn/ui, and the map component from:

- https://github.com/AnmolSaini16/mapcn

The app must show the listed chill / wandering locations on a map, match the visual frame direction from the provided reference images, work on desktop and mobile, and pass the validation commands before stopping.

## Read First

Before making implementation choices, inspect these materials:

- `goal.md`
- `desktop.png` - desktop reference frame, 1672 x 941
- `mobile.png` - mobile reference frame, 941 x 1672
- The `mapcn` documentation/source to understand how map data, markers, tooltips/popups, and styling are expected to be added.

## Required Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- mapcn map component or its documented installation path

Use the existing project if one is already present. If the directory does not yet contain an app, scaffold the smallest Vite React TypeScript app needed to complete this goal.

## Product Requirements

Create a usable single-page map experience for people who want to find quiet places around Taipei and nearby day-trip areas.

The first screen should be the actual map experience, not a marketing landing page. It should include:

- A fixed outer visual frame inspired by `desktop.png` and `mobile.png`.
- Responsive layouts that use the desktop frame on wide screens and the mobile frame on small screens.
- A map with all places added as markers or equivalent map points.
- A focused place detail interaction, such as a popup, sheet, drawer, or side panel.
- Search or filtering if it can be added cleanly without delaying the core map.
- Clear place names in Traditional Chinese.
- A calm, polished interface that does not feel like a generic admin dashboard or marketing page.

## Visual Requirements

- Match the overall frame, spacing, and visual mood of `desktop.png` and `mobile.png` as closely as practical.
- Treat the reference images as fixed frame references and, if useful, as actual frame/backdrop assets.
- The map should remain inspectable and interactive inside the frame.
- The layout must not overlap, crop important controls, or resize awkwardly between desktop and mobile.
- Avoid a one-note palette; the UI should feel restrained, natural, and map-focused.
- Use shadcn/ui components where they fit the interaction.
- Use lucide icons for icon buttons when icons are needed.

## Map/Data Requirements

Inspect `mapcn` first and integrate place data using the component's intended data shape or extension pattern.

Create a maintainable data source, preferably something like:

- `src/data/places.ts`

Each place should include at least:

- `id`
- `name`
- `area` or `region`
- `lat`
- `lng`
- a short note or vibe description

If an exact coordinate is ambiguous, choose a reasonable representative coordinate and keep the implementation moving. Only pause for ambiguity if it prevents the app from working.

## Places To Add

Add all of these places to the map:

1. 北投（含忠義站後面一帶）
2. 南港公園
3. 大安森林公園
4. 陽明山前山公園／公車總站
5. 美軍宿舍區（文大光華路）
6. 大佳河濱公園
7. 台北典藏植物園（花博旁）
8. 福隆
9. 觀音山（硬漢嶺）
10. 大湖公園
11. 碧山巖
12. 八里
13. 東和禪寺（Y17 旁）
14. 翠山步道
15. 關渡自然公園
16. 故宮至善園／至德園
17. 舊圓山動物園
18. 三貂嶺
19. 西門町南美咖啡／天后宮
20. 石牌承德路星巴克
21. 社子島頭公園
22. 內湖批發花市
23. 法鼓山農禪寺
24. 擎天崗大草原
25. 北投磺港溪
26. 水金九（水湳洞、金瓜石、九份）
27. 象山
28. 101 觀景台
29. 東北角海岸線
30. 大溝溪生態治水園區
31. 華山大草坪
32. 貓空
33. 軍艦岩
34. 文心藝所
35. 大稻埕
36. 烏來（小火車／瀑布）
37. 文山農場
38. 二子坪
39. 新店溪自行車道／華中露營區
40. 五分港溪
41. 奇岩公園
42. 北投公園
43. 關渡碼頭
44. 淡水河畔
45. 龍山河濱公園
46. 社子島（巷子內）
47. 台北大學
48. 信義路（散步到 101）

## Implementation Checkpoints

Work in checkpoints and keep a short progress log while running the goal.

1. Project setup
   - Confirm whether this directory already contains a frontend app.
   - If not, create a Vite React TypeScript app.
   - Install/configure Tailwind CSS and shadcn/ui.

2. Map integration
   - Inspect `mapcn`.
   - Install or copy the map component using the recommended approach.
   - Render a working map in the app.

3. Place data
   - Create the place data source.
   - Add all 48 places with coordinates and notes.
   - Render every place on the map.

4. Interaction
   - Add marker interaction for place details.
   - Add search/filter/list controls if feasible.
   - Make the current selected place obvious.

5. Visual frame and responsive polish
   - Match `desktop.png` on a desktop viewport.
   - Match `mobile.png` on a mobile viewport.
   - Verify that controls and text do not overlap or overflow.

6. Validation and cleanup
   - Run formatting/lint/build/test commands available in the project.
   - Fix any failures caused by the implementation.
   - Remove unused code and keep the app focused on this goal.

## Validation Commands

Run the commands that exist for the final project. At minimum, try:

```bash
npm run build
```

If available, also run:

```bash
npm run lint
npm test
```

For visual verification, run the app locally and inspect both:

- Desktop viewport around `1672 x 941`
- Mobile viewport around `941 x 1672` or a realistic phone viewport that preserves the mobile design

Use Playwright, Browser, screenshots, or another available visual check to verify that the page is not blank, the map renders, markers are visible, and the layout matches the references closely enough.

## Done When

Stop only when all of these are true:

- The app builds successfully.
- The map renders in the browser.
- All 48 places are present in the data source and visible through the map UI.
- A user can select a place and see its details.
- Desktop and mobile layouts have been visually checked against `desktop.png` and `mobile.png`.
- There are no obvious overlapping controls, cropped important text, or broken responsive states.
- The final response reports what was built, what validation passed, and any remaining limitations.

## Pause If

Pause and ask for guidance only if:

- Required credentials, API keys, or network access are unavailable and there is no local fallback.
- The `mapcn` component cannot be installed or used after trying the documented path and a reasonable fallback.
- A destructive command would be needed.
- A product decision is genuinely blocking and cannot be inferred from this file.

Do not pause for minor coordinate ambiguity, styling judgment calls, or normal implementation decisions. Make a reasonable choice, document it briefly, and keep working.

## Progress Log Format

When reporting progress during a goal run, keep updates compact:

```text
Checkpoint: <current checkpoint>
Done: <what changed>
Verified: <command or visual check>
Next: <next concrete step>
Blocked: <yes/no, reason if yes>
```

## Copyable Goal Starter Prompt

```text
/goal Read ./goal.md first, then complete the 台北放空地圖 objective without stopping until every item in "Done When" is satisfied. Work checkpoint by checkpoint, inspect desktop.png and mobile.png before implementing the frame, inspect the mapcn documentation/source before adding map data, keep changes scoped to this app, run the listed validation commands, visually verify desktop and mobile layouts, and pause only for the conditions listed in "Pause If".
```
