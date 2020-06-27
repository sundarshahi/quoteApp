import React, { useState,useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";

import QuoteCard from "./quote-card";
import { requestQuote } from "../actions/quote-actions";

function QuoteContainer() {
  const quote = useSelector((state) => state.quote);
  const dispatch = useDispatch();

  const [quoteText, setQuoteText] = useState("")
  const [quoteAuthor,setQuoteAuthor]=useState("")
  const [imageUrl, setImageUrl]=useState("")
  const { isLoading, isError } = useSelector((state) => state.status);

  
	const restoreStateFromLocalStorage = () => {
		const state = JSON.parse(localStorage.getItem('quote'));
    setQuoteText(state.quoteText);
    setQuoteAuthor(state.quoteAuthor);
    setImageUrl(state.imageUrl)
	};

  useEffect(() => {
    dispatch(requestQuote());

  }, [dispatch]);

  useEffect(()=>{
    if (!navigator.onLine) {
        restoreStateFromLocalStorage();
    }
  })

  useEffect(() => {
    setQuoteText(quote.quoteText)
    setQuoteAuthor(quote.quoteAuthor)
    setImageUrl(quote.imageUrl)
    const delay = 60 * 60 * 1000;
    const interval=setInterval(() => dispatch(requestQuote()), delay);

    return () => clearInterval(interval);
  }, [quote.quoteText, dispatch, quote.quoteAuthor, quote.imageUrl]);

  useEffect(() => {
    document.body.style.background = `url(${imageUrl})`;
  }, [imageUrl]);

  return (
    <QuoteCard
      quoteText={quoteText}
      quoteAuthor={quoteAuthor}
      isLoading={isLoading}
      onGenerateQuote={() => dispatch(requestQuote())}
      isError={isError}
    />
  );
}

export default QuoteContainer;
