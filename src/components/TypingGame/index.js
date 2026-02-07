import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';

const TypingGame = () => {
  const codeSnippets = [
    "function fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}",
    "const quickSort = (arr) => {\n  if (arr.length <= 1) return arr;\n  const pivot = arr[0];\n  const left = arr.slice(1).filter(x => x < pivot);\n  const right = arr.slice(1).filter(x => x >= pivot);\n  return [...quickSort(left), pivot, ...quickSort(right)];\n};",
    "class TreeNode {\n  constructor(val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}",
    "async function fetchData(url) {\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}",
    "const debounce = (func, delay) => {\n  let timeoutId;\n  return (...args) => {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => func.apply(this, args), delay);\n  };\n};"
  ];

  const [currentSnippet, setCurrentSnippet] = useState('');
  const [typedText, setTypedText] = useState('');
  const [isGameActive, setIsGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [startTime, setStartTime] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [totalChars, setTotalChars] = useState(0);
  
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  const startGame = () => {
    const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    setCurrentSnippet(snippet);
    setTypedText('');
    setIsGameActive(true);
    setTimeLeft(60);
    setStartTime(Date.now());
    setCorrectChars(0);
    setTotalChars(0);
    setWpm(0);
    setAccuracy(100);
    
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const endGame = () => {
    setIsGameActive(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    const timeElapsed = (Date.now() - startTime) / 1000 / 60;
    const finalWpm = Math.round((correctChars / 5) / timeElapsed);
    const finalAccuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 100;
    
    setTimeout(() => {
      alert(`🎉 挑战结束！\n\n⚡ 速度: ${finalWpm} WPM\n🎯 准确率: ${finalAccuracy}%\n\n${finalWpm >= 40 ? '🏆 优秀！' : finalWpm >= 25 ? '👍 不错！' : '💪 继续加油！'}`);
    }, 100);
  };

  const handleInputChange = (e) => {
    if (!isGameActive) return;
    
    const typed = e.target.value;
    setTypedText(typed);
    
    let correct = 0;
    for (let i = 0; i < typed.length; i++) {
      if (typed[i] === currentSnippet[i]) {
        correct++;
      }
    }
    
    setCorrectChars(correct);
    setTotalChars(typed.length);
    
    const timeElapsed = (Date.now() - startTime) / 1000 / 60;
    const currentWpm = timeElapsed > 0 ? Math.round((correct / 5) / timeElapsed) : 0;
    const currentAccuracy = typed.length > 0 ? Math.round((correct / typed.length) * 100) : 100;
    
    setWpm(currentWpm);
    setAccuracy(currentAccuracy);
    
    if (typed === currentSnippet) {
      endGame();
      setTimeout(() => {
        alert('🎉 完美！你完成了整个代码片段！');
      }, 100);
    }
  };

  const highlightText = () => {
    if (!currentSnippet) return '点击开始按钮开始挑战！';
    
    return currentSnippet.split('').map((char, index) => {
      let className = '';
      let displayChar = char;
      
      if (char === '\n') {
        displayChar = '\n';
      }
      
      if (index < typedText.length) {
        if (typedText[index] === char) {
          className = styles.correct;
        } else {
          className = styles.incorrect;
        }
      } else if (index === typedText.length) {
        className = styles.current;
      }
      
      if (char === '\n') {
        return <br key={index} />;
      }
      
      return (
        <span key={index} className={className}>
          {displayChar}
        </span>
      );
    });
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>⌨️ 编程打字挑战</h3>
      <div className={styles.gameArea}>
        <div className={styles.codeDisplay}>
          {highlightText()}
        </div>
        <input
          ref={inputRef}
          type="text"
          value={typedText}
          onChange={handleInputChange}
          placeholder="在这里输入代码..."
          className={styles.input}
          disabled={!isGameActive}
        />
        <div className={styles.controls}>
          <button
            onClick={isGameActive ? endGame : startGame}
            className={styles.startBtn}
          >
            {isGameActive ? '🔄 重新开始' : '🚀 开始挑战'}
          </button>
          <div className={styles.stats}>
            <span>速度: {wpm} WPM</span>
            <span>准确率: {accuracy}%</span>
            <span>时间: {timeLeft}s</span>
          </div>
        </div>
      </div>
      <p className={styles.tip}>💡 提示：专注于准确性，速度会随着练习自然提升</p>
    </div>
  );
};

export default TypingGame;