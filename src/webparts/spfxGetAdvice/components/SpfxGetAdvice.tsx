// Before GitHub Copilot Assistance

// import * as React from "react";

// // Style
// import styles from "./SpfxGetAdvice.module.scss";

// // Props
// import type { ISpfxGetAdviceProps } from "./ISpfxGetAdviceProps";

// export default class SpfxGetAdvice extends React.Component<ISpfxGetAdviceProps> {
//   public render(): React.ReactElement<ISpfxGetAdviceProps> {
//     const [advice, setAdvice] = React.useState("");
//     const [count, setCount] = React.useState(0);

//     async function getAdvice(): Promise<void> {
//       // Fetch advice from the API
//       // and set the advice state to the advice received from the API and increment the count state by 1
//       // Use try-catch to handle errors and log the error to the console
//       try {
//         const res = await fetch("https://api.adviceslip.com/advice");
//         const data = await res.json();
//         setAdvice(data.slip.advice);
//         setCount((c) => c + 1);
//       } catch (error) {
//         console.error("Error fetching advice:", error);
//       }
//     }
//     // Call getAdvice when the component mounts
//     // and when the button is clicked

//     React.useEffect(() => {
//       getAdvice().catch((error) => {
//         console.error("Error fetching advice:", error);
//       });
//     }, []);

//     return (
//       <div className={styles.App}>
//         <h1>{advice}</h1>
//         <button onClick={getAdvice} className={styles.button}>
//           Get Advice
//         </button>
//         <p>
//           You have read <strong>{count}</strong> pieces of advice.
//         </p>
//       </div>
//     );
//   }
// }

// After GitHub Copilot Assistance
import * as React from "react";

// Style
import styles from "./SpfxGetAdvice.module.scss";

// Props
import type { ISpfxGetAdviceProps } from "./ISpfxGetAdviceProps";

const SpfxGetAdvice: React.FC<ISpfxGetAdviceProps> = () => {
  const [advice, setAdvice] = React.useState("");
  const [count, setCount] = React.useState(0);

  const getAdvice = async (): Promise<void> => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip.advice);
      setCount((c) => c + 1);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  React.useEffect(() => {
    getAdvice().catch((error) => {
      console.error("Error fetching advice:", error);
    });
  }, []);

  return (
    <div className={styles.App}>
      <h1>{advice}</h1>
      <button onClick={getAdvice} className={styles.button}>
        Get Advice
      </button>
      <p>
        You have read <strong>{count}</strong> pieces of advice.
      </p>
    </div>
  );
};

export default SpfxGetAdvice;
