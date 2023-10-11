const questions: { question: string; required?: boolean; maxLength: number }[] =
  [
    {
      question: "Who are your customers?",
      required: true,
      maxLength: 150,
    },
    {
      question:
        "Are there any special requirements like technology, location etc?",
      required: true,
      maxLength: 50,
    },
    {
      question: "What types of customers should be excluded?",
      required: true,
      maxLength: 50,
    },
    {
      question: "What are the positions of your prospects?",
      required: true,
      maxLength: 150,
    },
  ];

export default questions;
