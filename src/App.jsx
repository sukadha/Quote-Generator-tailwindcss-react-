import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

const App = () => {
  const [quote, setQuote] = useState({
    text: "It's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  });
  const [loading, setLoading] = useState(false);

  // Quotes collection
  const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" },
    { text: "In success, there are no full stops..there are only commas...", author: "Maharshi" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "You learn more from failure than from success.", author: "Unknown" },
    { text: "If you are working on something that you really care about, you don't have to be pushed.", author: "Steve Jobs" },
    { text: "It's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" }
  ];

  const getNewQuote = () => {
    setLoading(true);
    
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      let newQuote;
      do {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        newQuote = quotes[randomIndex];
      } while (newQuote.text === quote.text && quotes.length > 1); // Ensure we don't get the same quote twice
      
      setQuote(newQuote);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    // Set initial quote randomly
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4" style={{backgroundImage: 'url(https://www.shutterstock.com/image-photo/man-meditating-doing-yoga-by-260nw-2274359207.jpg)'}}>
      <div className="max-w-4xl w-full">
        {/* Main Quote Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-8 transform transition-all duration-300 hover:scale-105">
          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-8">
              {quote.text}
            </blockquote>
            <cite className="text-lg md:text-xl text-purple-600 font-medium">
              — {quote.author}
            </cite>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={getNewQuote}
            disabled={loading}
            className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Loading...' : 'New Quote'}
          </button>
        </div>

        {/* Footer */}
        {/* <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            Click "New Quote" to discover inspiring words from great minds
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default App;