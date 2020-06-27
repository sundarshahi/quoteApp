import React from "react";
import PropTypes from "prop-types";

const QuoteCard = ({
  quoteText,
  quoteAuthor,
  isLoading,
  onGenerateQuote,
  isError,
}) => {
  return (
    <div>
      <button
        className="generate-btn"
        disabled={isLoading}
        onClick={onGenerateQuote}
      >
        Generate Quote
      </button>
      {isLoading && <span>Loading.....</span>}

      <hr />
      <div>
        {/* {isError && (
          <div>
            <span>Oops! Something is not right!</span>
          </div>
        )} */}
        {/* {!isError && ( */}
            <div className="notepaper">
              <figure className="quote">
                <blockquote className="curly-quotes">{quoteText}</blockquote>
                <figcaption className="quote-by">— {quoteAuthor}</figcaption>
              </figure>
            </div>
         {/* )} */}
      </div>
    </div>
  );
};

QuoteCard.propTypes = {
  quoteText: PropTypes.string.isRequired,
  quoteAuthor: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onGenerateQuote: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default QuoteCard;
