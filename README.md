
# 📝 Quiz App

A simple and interactive **Quiz Application** built with **React.js**. This app presents multiple-choice questions, allows users to select answers, and provides instant feedback along with explanations.  

**Live DEMO** : [https://reactquiz-harshkhanagwal.netlify.app](https://reactquiz-harshkhanagwal.netlify.app)

## 🚀 Features

- Dynamic question rendering  
- Real-time answer validation  
- Score tracking system  
- Explanation for each question  
- User-friendly UI  

## 📂 Project Setup

### 🔽 Download and Install

1. **Clone the repository**  
   ```sh
   git clone https://github.com/your-repo/quiz-app.git
   cd quiz-app
2. **Install dependencies**
	 ```sh
     npm install 
  3. **Start the development server**
     ```sh
	  npm run dev 
## 🔗 API & Data Source
The app can fetch quiz questions from an API:  
[https://api.jsonserve.com/Uw5CrX](https://api.jsonserve.com/Uw5CrX)
⚠️ However, due to **CORS issues**, I have used a **local JSON file (`data.json`)** that contains the same data as the API. You can modify the app to fetch from the API if needed.

## 🛠️ How to Switch to API
If you want to fetch data from the API instead of using `data.json`, update the `fetchData` function inside `Quiz.js`:
```js
	const fetchData = async () => {
	    try {
	        const res = await fetch('https://api.jsonserve.com/Uw5CrX');
	        const jsonData = await res.json();
	        setQuestions(jsonData.questions);
	    } catch (err) {
	        console.error("Error fetching data:", err);
	    }
	};  
```

## 🎯 How to Play
-   Start the quiz and read the question carefully.
-   Click on an answer to select your choice.
-   If correct, the option turns **green** ✅; if wrong, it turns **red** ❌.
-   Click the **Next** button to proceed to the next question.
-   Each correct answer earns **10 marks**. You need **at least 50 marks** to win.
-   Finish all questions and check your final score!

## 🤝 Contributing
Feel free to **fork this repository** and submit **pull requests** with improvements.

## 📜 License
This project is open-source and free to use.





