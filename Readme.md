# 🌟 React Overview

---

## 📚 React is a Library

- **Framework**: Follow rules (e.g., Django, Angular).
- **Library**: Small and freehand.

---

## ⚙️ Core React Features

- **State and UI manipulation**
- **JSX**: Write HTML in JavaScript.
- **Component Reusability**
- **Props**
- **Hooks**: `useState`, `useEffect`
- React makes **Single Page Applications**.
- Additional features:
  - React Router
  - State Management (Redux, Context API)
  - Class-based components (legacy code)

⚠️ **Limitations**:

- React has no SEO.
- Browser rendering issues.

---

## 🔗 Next Steps

- Use **Next.js** with React.

---

## 🔑 Hooks Overview

### 🛠️ **Used in Password Generator, Currency Converter**

#### 1. `useCallback(fun, dependencies)`

- A hook that lets you cache a function between different re-renders.
- **Purpose**: Optimize the function for dependencies passed.
- Used to cache a function and optimize it on re-render when elements passed in as dependencies (in the form of an array).

---

#### 2. `useEffect(fun, dependencies)`

- Re-renders only if there are changes in the parameters passed.

---

#### 3. `useRef`

- Used to reference any element.
- Steps:
  - Declare it first.
  - Use it where the reference is required.

---

#### 4. `useId`

- A hook that generates a unique ID to bind an element.

---

## ⚡ Important Notes

- **Remember**: Use `key` in loops in React.
