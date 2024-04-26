# Lazy Loading React Components on Page Scroll using Intersection Observer API

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

To implement lazy loading for React components, follow these steps:

1. Import the `RenderOnViewportEntry` component from the `helper/RenderOnView` file.

2. Wrap the components you want to lazy load inside the `RenderOnViewportEntry` component.

3. Specify the `threshold` property to control when the lazy-loaded component should start loading. The default value is `0`.

4. Customize the styles and content of the lazy-loaded components as needed.

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

Implementing lazy loading for React components using the Intersection Observer API can significantly improve the performance of web applications by loading components only when they become visible to the user. This approach helps reduce initial page load times and enhances the overall user experience.
