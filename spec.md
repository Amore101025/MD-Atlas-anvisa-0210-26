# Technical Specification: ANVISA Regulatory Guide & AI Assistant

**Version:** 1.0.0  
**Date:** October 26, 2023  
**Framework:** React 19 (ESM)  
**Styling:** Tailwind CSS + Dynamic Theming Engine  
**AI Engine:** Google Gemini API (`@google/genai`)

---

## 1. Executive Summary

The **ANVISA Regulatory Guide** is a high-fidelity Single Page Application (SPA) designed to democratize access to complex medical device regulations for the Brazilian market (specifically RDC 751/2022). Unlike traditional static documentation portals, this application combines a rigorous regulatory knowledge base with a unique, gamified "WOW UI" experience and a context-aware AI Assistant.

The application serves two primary user needs:
1.  **Static Knowledge Acquisition**: Structured factsheets, step-by-step roadmaps, and Q&A sections regarding classification, BGMP, and registration pathways.
2.  **Dynamic Query Resolution**: An integrated AI chatbot powered by Google's Gemini models to answer specific edge-case questions.

A key differentiator is the visual experience. The application features a "Jackpot" style selector that allows users to skin the interface in the aesthetic of 20 famous painters (e.g., Van Gogh, Warhol, Monet), enhancing user engagement through visual delight.

---

## 2. System Architecture

### 2.1 Technology Stack

The application is built on a modern, build-less architecture leveraging ES Modules directly in the browser.

*   **Core Library**: React 19 & React DOM 19 (via `esm.sh` CDN).
*   **Language**: TypeScript (Transpiled on-the-fly or pre-compiled types).
*   **Styling**: 
    *   **Tailwind CSS**: Used for layout, spacing, and utility classes via the CDN script injection.
    *   **Inline Style Injection**: Used for the Dynamic Theming Engine to override CSS variables with Javascript-state-driven hex codes.
*   **Icons**: `lucide-react` for consistent, vector-based iconography.
*   **Markdown Rendering**: `marked` library for safely rendering rich text responses from the AI.
*   **AI SDK**: `@google/genai` (v0.1.2) for direct communication with Google's Gemini API endpoints.

### 2.2 Component Hierarchy

```
root
├── index.html (Entry point, Import Maps, Tailwind Config)
├── index.tsx (React Root Mount)
└── App.tsx (Main Controller, State Manager, Theming Engine)
    ├── SectionCard.tsx (Accordion component for Factsheets)
    ├── StepGuide.tsx (Vertical timeline component for Roadmap)
    └── AIAssistant.tsx (Floating Chat Widget, Gemini Integration)
```

### 2.3 State Management

The application relies on React's `useState` and `useEffect` hooks for local state management. There is no external state store (Redux/Zustand) required due to the flat hierarchy.

**Global State (App.tsx):**
*   `apiKey`: Stores the user's ephemeral Google API key.
*   `currentStyle`: Stores the active `PainterStyle` object.
*   `lang`: Current language selection ('en' | 'zh').
*   `activeTab`: Navigation state ('overview' | 'steps' | 'qa').
*   `isJackpotSpinning`: Boolean flag to lock UI during style transitions.

---

## 3. User Interface & "WOW UI" Design

### 3.1 The Dynamic Theming Engine

The "WOW UI" is not merely a CSS class toggle; it is a Javascript-driven injection system. Instead of relying solely on Tailwind's `dark:` classes, the application defines a `PainterStyle` interface that dictates the entire color palette.

**Interface Definition:**
```typescript
interface PainterStyle {
  id: string;
  name: string;      // Display name (e.g., "Van Gogh")
  bg: string;        // Main background color (Hex)
  cardBg: string;    // Component background color (Hex)
  textColor: string; // Primary text color (Hex)
  accentColor: string; // Primary action/highlight color (Hex)
  borderColor: string; // Border definition (Hex)
  fontFamily?: string; // Optional font override
}
```

When a style is selected, `App.tsx` applies these values to a wrapper `div` style object. CSS transitions (`transition-all duration-500`) are applied globally to ensure that when the palette shifts from "Monet" (Pastel Greens) to "Rothko" (Deep Reds), the colors morph smoothly rather than snapping.

### 3.2 The Jackpot Mechanism

The Style Jackpot is a gamified feature located in the header.

*   **Trigger**: User clicks the Palette icon.
*   **Logic**:
    *   The app enters a `isJackpotSpinning` state.
    *   A recursive `spin` function is called.
    *   It cycles through the `PAINTER_STYLES` array, selecting a random index.
    *   **Easing**: The speed of the cycle decays exponentially. It starts fast (`50ms`) and adds `rounds * 2` ms to the delay each iteration, simulating a mechanical slot machine slowing down.
    *   **Termination**: After 30 rounds, the loop terminates, settling on the final style.

### 3.3 Localization (I18n)

The application supports English (EN) and Traditional Chinese (ZH).
*   **Implementation**: Conditional rendering based on the `lang` state variable.
*   **Scope**: Covers UI labels (buttons, headers), system prompts sent to the AI, and static content headers. Note that the core regulatory content data (in `data/content.tsx`) is currently structured primarily in English, while the UI shell is fully localized.

---

## 4. Functional Specifications

### 4.1 Authentication & Security

Since this is a client-side application without a backend proxy:
*   **API Key Handling**: The application forces the user to input their Google Gemini API Key upon load.
*   **Storage**: The key is stored in React state memory *only*. It is not persisted to `localStorage` or cookies, ensuring that refreshing the page clears credentials—a security best practice for public kiosk-style apps.
*   **Environment Safety**: The code includes a `try-catch` block around `process.env` access to prevent "process is not defined" errors in strict browser environments.

### 4.2 Content Modules

1.  **Factsheet (Overview)**:
    *   Renders a list of `SectionCard` components.
    *   **Behavior**: Accordion style. Clicking a card expands it to reveal detailed HTML content regarding RDC 751/2022, Risk Classes, and Manufacturer Obligations.
    *   **Visuals**: Icons change color based on the active `PainterStyle`.

2.  **Step-by-Step Roadmap**:
    *   Renders the `StepGuide` component.
    *   **Visuals**: A vertical line connects steps. The nodes on the timeline pulse or change color based on the theme.

3.  **Q&A (Follow-up Questions)**:
    *   Renders a list of 20 comprehensive questions.
    *   **Behavior**: Expand/Collapse logic.

### 4.3 AI Assistant (The "Brain")

The `AIAssistant` component is a self-contained chat widget.

*   **Model Selection**: Users can toggle between:
    *   `gemini-2.5-flash-latest`: Optimized for speed and lower latency.
    *   `gemini-3-flash-preview`: Optimized for complex reasoning and higher quality text generation.
*   **System Instruction**: The prompt sent to the model is dynamically adjusted based on the `lang` state.
    *   *EN*: "You are an expert on ANVISA medical device regulations..."
    *   *ZH*: "您是 ANVISA 醫療器材法規..."
*   **Markdown Support**: Responses from Gemini are parsed using `marked`. This allows the AI to return bullet points, bold text, and lists, which are rendered as proper HTML within the chat bubbles.
*   **Error Handling**: If the API key is invalid or the quota is exceeded, the UI displays a user-friendly error message within the chat stream instead of crashing.

---

## 5. Data Models

### 5.1 Painter Styles Dataset
The application ships with 21 preset styles defined in `data/styles.ts`:
1.  **Default (Modern Minimal)**
2.  **Van Gogh**: Deep blues and star yellows.
3.  **Monet**: Water lily greens and soft whites.
4.  **Picasso**: Cubist pinks and sharp reds.
5.  **Dali**: Surreal browns and melting golds.
6.  **Rembrandt**: Chiaroscuro darks and lights.
7.  **Warhol**: Pop art yellow and hot pink.
8.  **Klimt**: Gold, bronze, and patterns.
9.  **Kahlo**: Deep forest greens and floral reds.
10. **Munch**: Scream blues and sunset oranges.
11. **Matisse**: Cutout blues and vibrant reds.
12. **Hokusai**: Great Wave cyans and foams.
13. **Mondrian**: Primary colors (Red, Blue, Yellow) on white.
14. **Basquiat**: Neo-expressionist black and graffiti white/yellow.
15. **O'Keeffe**: Floral purples and soft pinks.
16. **Hopper**: Melancholic shadows and diner greens.
17. **Renoir**: Impressionist soft oranges and warm whites.
18. **Pollock**: Splatter white, black, and red action.
19. **Kandinsky**: Geometric white and stark contrast.
20. **Rothko**: Color field maroon and red.
21. **Banksy**: Stencil grey and urban black.

### 5.2 Regulatory Content
The `comprehensiveQuestions` array contains 20 specific Q&A items covering:
*   RDC 185 vs 751 comparison.
*   Foreign manufacturer restrictions.
*   INMETRO certification requirements.
*   MDSAP acceptance.
*   Software as a Medical Device (SaMD) classification.

---

## 6. Integration Specifics: Google GenAI

The application uses the `@google/genai` SDK v0.1.2.

**Initialization:**
```typescript
const ai = new GoogleGenAI({ apiKey });
```

**Generation Call:**
```typescript
const response = await ai.models.generateContent({
  model: model, // 'gemini-3-flash-preview' or 'gemini-2.5-flash-latest'
  contents: userMessage,
  config: {
    systemInstruction: systemInstruction // Localized string
  }
});
```

**Output Handling:**
The response text is extracted via `response.text`. The application assumes a stateless chat for simplicity (each request is treated largely independently, though the UI stacks the history visually). *Note: For true conversational memory, the `contents` array would need to include previous `model` and `user` turns.*

---

## 7. Performance & Optimization Considerations

1.  **Asset Loading**: The application uses lucide-react which supports tree-shaking, though loaded via ESM in this setup.
2.  **Rendering Efficiency**:
    *   The "Jackpot" animation uses `setTimeout` rather than `requestAnimationFrame`. While simple, it is sufficient for the low-frequency UI update required for the style switcher.
    *   The API Key input screen conditional rendering ensures that the heavy content DOM is not mounted until authentication is provided.
3.  **Tailwind Configuration**:
    *   The `tailwind.config` is injected into the window object via script tag. This allows runtime compilation of classes. While excellent for prototyping, a production build would pre-compile this CSS for faster First Contentful Paint (FCP).
4.  **Typing**: TypeScript interfaces ensure that if a Style object is missing a required color property, the build (or IDE) will flag it, preventing runtime styling crashes.

---

## 8. User Flow

1.  **Landing**: User arrives at `index.html`.
2.  **Auth Gate**: User sees a lock screen styled in the "Default" painter style. They must enter a valid Gemini API Key.
3.  **Dashboard**: Upon validation, the main dashboard renders.
4.  **Exploration**:
    *   User browses "Factsheet" tabs.
    *   User switches to "Step-by-Step" to see the visual timeline.
5.  **Personalization**: User clicks the Palette button. The UI colors cycle rapidly and settle on "Basquiat" (Black/Yellow). The entire mood of the app changes.
6.  **Deep Dive**: User has a question not covered in the static text.
7.  **AI Interaction**:
    *   User opens the floating AI Assistant.
    *   User asks: "Does Class I need BGMP?"
    *   App sends query to Gemini 3 Flash.
    *   AI responds (parsed via Markdown): "**No**, Class I requires a simple GMP declaration..."
8.  **Localization**: User toggles "EN" to "ZH". The UI labels change to Traditional Chinese.

---

## 9. Future Roadmap Recommendations

*   **Chat History Context**: Update the AI integration to pass the full `messages` array to `generateContent` to allow multi-turn conversations (e.g., "Tell me more about that").
*   **Voice Interface**: Integrate the Web Speech API to allow users to ask questions verbally.
*   **PDF Export**: Allow users to download the Step-by-Step guide as a PDF generated based on the current active Painter Style.
*   **Persistent Settings**: Optionally allow saving the API key to `sessionStorage` so it survives a page reload during the same browser session.

