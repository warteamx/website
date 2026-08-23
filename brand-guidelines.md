# Brand Guidelines: Software Lab

## Brand Identity & Personality
The brand represents a personal software laboratory built for experimenting with new technologies.
It balances a sleek modern foundation with energetic sparks of creativity.

- **Creative:** Bold choices, unexpected accents, and a playground mentality.
- **Contrast:** Extreme darks and lights paired with blinding neon accents.
- **Expressive:** Functional emojis guide user experience and add character.

## 🎨 Color Palette & Themes

### Dark Theme (Core)
| Element | Color Code | Description |
| :--- | :--- | :--- |
| Primary Background | `#232526` to `#414345` | Deep dark mode gradient canvas |
| Container Background | `rgba(0, 0, 0, 0.6)` | Translucent obsidian black panel |
| Card / Item Background | `rgba(255, 255, 255, 0.05)` | Frosted glass highlight |
| Base Text (Primary) | `#FFFFFF` | Maximum legibility |
| Muted Text (Secondary) | `#B3B3B3` | Secondary details and headings |
| Body Text (Alternating) | `#E0E0E0` | Paragraph readability |

### Light Theme (Compatible Flip)
| Element | Color Code | Description |
| :--- | :--- | :--- |
| Primary Background | `#F5F7FA` to `#E4E8F0` | Crisp cool light gradient |
| Container Background | `rgba(255, 255, 255, 0.85)` | Frosted white panel |
| Card / Item Background | `rgba(0, 0, 0, 0.03)` | Gentle nested tint |
| Base Text (Primary) | `#111215` | Strong contrast text |
| Muted Text (Secondary) | `#60646C` | Neutral support text |
| Body Text (Alternating) | `#2D3139` | Long-form readability |

## ⚡ Neon Accent System
Use these accents consistently in both themes.

- **Neon Electric Blue** `#7ECFFF`
  - Usage: Primary actions, nav links, buttons.
  - Tint: `rgba(126, 207, 255, 0.1)` idle and `0.2` hover.

- **Neon Fuchsia / Pink** `#F102CE`
  - Usage: Framing, focus points, glow indicators.
  - Shadow: `0 2px 8px 0 rgba(241, 2, 206, 0.2)`
  - Hover: `0 6px 20px 0 rgba(241, 2, 206, 0.3)` + `translateY(-2px)`

- **⚡ Cyber Lime** `#39FF14` glow `rgba(57, 255, 20, 0.25)`
- **🔥 Radioactive Orange** `#FF5722` glow `rgba(255, 87, 34, 0.25)`
- **👾 Acid Purple** `#A020F0` glow `rgba(160, 32, 240, 0.25)`

## 🧪 Typography & Layout Rules
- **Font:** `'Segoe UI', Arial, sans-serif`
- **Cards:** `border-radius: 12px` to `16px`, semi-transparent backgrounds, subtle blur.
- **Micro-animations:** `transition: all 0.2s` for responsive, snappy interactions.

## Implementation Notes for AI Agents
- Keep styles centralized in `/css.css`.
- Use CSS variables for theme tokens (`:root` + `[data-theme="light"]`).
- Keep accent colors stable across themes for brand recognition.
- Add light/dark toggle support with persisted `localStorage` preference.
- Use expressive but functional emojis in navigation and section labels.
