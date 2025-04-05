// import * as React from "react";
// import { cva } from "class-variance-authority";
// import { cn } from "/src/lib/utils.js";

// const buttonVariants = cva(
//   "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90",
//         outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 px-3 rounded-md",
//         lg: "h-11 px-8 rounded-md",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// );

// const Button = React.forwardRef(
//   ({ className, variant, size, ...props }, ref) => {
//     return (
//       <button
//         className={cn(buttonVariants({ variant, size }), className)}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );

// Button.displayName = "Button";
// export default Button;