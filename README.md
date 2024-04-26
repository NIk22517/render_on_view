# React Components on Page Scroll using Intersection Observer API

This project demonstrates how to implement showing React components on page scroll using the Intersection Observer API. This ensures that API calls are made only when the component is in the viewport, reducing unnecessary API requests on initial page load.

## Introduction

In modern web applications built with React, showing components on-demand based on user interaction can significantly improve performance by deferring the loading of non-visible components until they are needed. This project provides a solution to implement showing React components on page scroll using the Intersection Observer API. This ensures that API calls are made only when the component is in the viewport, reducing unnecessary API requests on initial page load.

## Installation

To use this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

## Usage

## Usage

To implement showing React components on page scroll, this project provides the `RenderOnViewportEntry` component. This component utilizes the Intersection Observer API to detect when an element enters the viewport. It accepts the following props:

- `renderChild`: The React node to render when the component is in the viewport.
- `threshold`: A number indicating the percentage of the target element's visibility needed to trigger the callback. The default value is `0`. This value is provided directly to the Intersection Observer API as the threshold for triggering the callback function. For example, a threshold of `0.5` will trigger the callback when half of the target element is visible in the viewport.
- `root`: The ID of the element that is used as the viewport when checking visibility of the target element. If not specified, the browser viewport is used.
- `rootMargin`: A margin around the root element's bounding box. This allows you to specify a buffer around the root element to expand or contract the area used for intersection detection.

By wrapping lazy-loaded components with the `RenderOnViewportEntry` component, you can ensure that the components are rendered only when they become visible to the user.

   ```jsx
   import React from "react";
   import FirstComponent from "./FirstComponent";
   import SecondComponent from "./SecondComponent";
   import { RenderOnViewportEntry } from "./helper/RenderOnView";
   import ThirdComponent from "./ThirdComponent";

   function App() {
     return (
       <div
         style={{
           padding: "1rem",
           display: "flex",
           flexDirection: "column",
           gap: "1rem",
         }}
       >
         <div
           style={{
             height: "95vh",
           }}
         >
           <SecondComponent />
         </div>

         <RenderOnViewportEntry
           renderChild={
             <div
               style={{
                 height: "95vh",
                 backgroundColor: "white",
               }}
             >
               <ThirdComponent />
             </div>
           }
           threshold={1}
         />

         <RenderOnViewportEntry
           renderChild={
             <div
               style={{
                 height: "95vh",
                 backgroundColor: "white",
               }}
             >
               <FirstComponent />
             </div>
           }
           threshold={1}
         />
       </div>
     );
   }

   export default App;
   ```

## Conclusion

Implementing showing React components on page scroll using the Intersection Observer API can significantly improve the performance of web applications by loading components only when they become visible to the user. This approach helps reduce initial page load times and enhances the overall user experience by minimizing unnecessary API requests.
