# Karthik Jami — Portfolio V5 (image-pack hero)

This revision uses the exact high-resolution transparent image pack supplied in the conversation.

## Hero animation source pack
All of the following images are included under `assets/hero-pack/` and used to build the website hero animation:

1. `01-minimalist_workspace_desk_setup.png`
2. `02-developer_entering_a_modern_workspace.png`
3. `03-tech_developer_pulling_ergonomic_chair.png`
4. `04-character_sits_at_modern_workspace.png`
5. `05-focused_workspace_hero_scene.png`
6. `06-modern_developer_workspace_with_floating_ui_panel.png`
7. `07-developer_at_work_with_floating_tech_tools.png`
8. `08-stylized_developer_productivity_workspace.png`
9. `09-developer_closing_his_laptop.png`
10. `10-end_of_day_desk_departure.png`

## Real media asset
The hero uses a real WebM generated from that full-resolution image pack:

- file: `assets/karthik-hero-imagepack.webm`
- source resolution: 1672 × 941
- frame rate: 30 fps
- duration: 18.67 seconds
- codec: VP9
- alpha metadata: enabled

## Layout
The hero frame is widened and pushed to the right so it fills the marked animation area more closely on desktop.

## Existing portfolio details preserved
- latest Tandem start date: **Nov 2025 – Present**
- smoother V5 scroll behavior
- case studies
- AI workflow section
- GitHub projects
- experience and contact sections


## Right-edge hero refinement

The hero animation now ignores only the normal right-side site container gutter and reaches the browser's right edge on desktop.

- Hero text remains aligned to the normal portfolio container.
- Animation has no border, background, outline, or frame.
- All other site section borders and framing remain unchanged.


## Balanced hero sizing

The right-edge animation remains flush with the browser edge, but is now capped at:
- 980px on large desktop
- 880px on medium desktop

The left headline column has been widened again so the hero text does not collapse into narrow stacked lines.


## Smooth transition rebuild

The hero WebM was rebuilt using premultiplied-alpha crossfades rather than straight RGBA blending.

- 1.0 second hold per state
- 1.0 second eased transition per state
- smootherstep easing
- transparent-edge color stabilization
- no dark-edge flicker caused by straight-alpha blending
