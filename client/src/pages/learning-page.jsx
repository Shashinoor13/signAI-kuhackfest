import { Link } from "react-router-dom";

function LearningPage(){
    const data = [
      {
        "Word": "A",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/a1.jpg",
        "Definition": "ASL sign for the letter 'A'."
      },
      {
        "Word": "B",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/b1.jpg",
        "Definition": "ASL sign for the letter 'B'."
      },
      {
        "Word": "C",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/c1.jpg",
        "Definition": "ASL sign for the letter 'C'."
      },
        {
        "Word": "D",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/d1.jpg",
        "Definition": "ASL sign for the letter 'D'."
      },
        {
        "Word": "E",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/e1.jpg",
        "Definition": "ASL sign for the letter 'E'."
      },
        {
        "Word": "F",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/f1.jpg",
        "Definition": "ASL sign for the letter 'F'."
      },
        {
        "Word": "G",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/g1.jpg",
        "Definition": "ASL sign for the letter 'G'."
      },
        {
        "Word": "H",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/h1.jpg",
        "Definition": "ASL sign for the letter 'H'."
      },
        {
        "Word": "I",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/i1.jpg",
        "Definition": "ASL sign for the letter 'I'."
      },
        {
        "Word": "J",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/j1.jpg",
        "Definition": "ASL sign for the letter 'J'."
      },
        {
        "Word": "K",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/k1.jpg",
        "Definition": "ASL sign for the letter 'K'."
      },
        {
        "Word": "L",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/l1.jpg",
        "Definition": "ASL sign for the letter 'L'."
        },
        {
                    "Word": "M",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/m1.jpg",
        "Definition": "ASL sign for the letter 'M'."
        },
        {
        "Word": "N",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/n1.jpg",
        "Definition": "ASL sign for the letter 'N'."
        },
        {
        "Word": "O",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/o1.jpg",
        "Definition": "ASL sign for the letter 'O'."
        },
        {
        "Word": "P",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/p1.jpg",
        "Definition": "ASL sign for the letter 'P'."
        },
        {
        "Word": "Q",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/q1.jpg",
        "Definition": "ASL sign for the letter 'Q'."
        },
        {
        "Word": "R",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/r1.jpg",
        "Definition": "ASL sign for the letter 'R'."
        },
        {
        "Word": "S",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/s1.jpg",
        "Definition": "ASL sign for the letter 'S'."
        },
        {
        "Word": "T",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/t1.jpg",
        "Definition": "ASL sign for the letter 'T'."
        },
        {
        "Word": "U",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/u1.jpg",
        "Definition": "ASL sign for the letter 'U'."
        },
        {
        "Word": "V",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/v1.jpg",
        "Definition": "ASL sign for the letter 'V'."
        },
        {
        "Word": "W",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/w1.jpg",
        "Definition": "ASL sign for the letter 'W'."
        },
        {
        "Word": "X",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/x1.jpg",
        "Definition": "ASL sign for the letter 'X'."
        },
        {
        "Word": "Y",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/y1.jpg",
        "Definition": "ASL sign for the letter 'Y'."
        },
        {
        "Word": "Z",
        "Photo": "https://www.signingsavvy.com/images/words/alphabet/2/z1.jpg",
        "Definition": "ASL sign for the letter 'Z'."
        }
        ]
    return(
        <div>
            <h1><b>Alphabets</b></h1>
            <div className="container">
                <div className="flex flex-wrap align-center item-center">
                    {data.map((item) => (
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5" key={item}>
                        <a >
                            <img className="rounded-t-lg" src={item.Photo} alt="" />
                        </a>
                        <div className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.Word}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><i><b>meaning</b></i> : {item.Definition}</p>
                            <Link to={`/learn/${item.Word}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Learn
                              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                              </Link>
                        </div>
                    </div>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default LearningPage;