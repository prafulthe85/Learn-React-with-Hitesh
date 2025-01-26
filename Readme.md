React is a Library.
Framework: Follow rules, django, angular
Library: Small and freehand

Core react: state and ui manipulation, jsx(write html in js), component reusability, props, hooks(usestate, useeffect),
React makes single page application,
Using react router, state management, redux, context api, class based componen(legacy code),
React has no seo, browser rendering issue,

Next steps: use next with react

---

Hooks:

# Used in password Generator

useCallback(fun, dependencies)
useCallback: a hook that let you cache a function btwn different re-renders
useCallback basically optimize the function for the dependencies passed
useCallback is used to cache a function, to optimize that function on re-render of elements passed in as dependencies(in form of arr)

useEffect(fun, dependencies)
useEffect just re-render if there is any changes in the parameters passed there

useRef
kisi bhi cheez ka jb hme reference lena hota h tb useRef kaam ata h
Declare it first then use where you want to refer
