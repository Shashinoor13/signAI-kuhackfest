import { useEffect, useState } from "react";
import { ImgBox, TextBox } from "../components/imgBox";
import MyHeadings from "../../../myApp/src/components/headings";
function Match() {
  const [selectedPairs, setSelectedPairs] = useState(0);
  const [shuffledPairs, setShuffledPairs] = useState([]);
  const [pairStatus, setPairStatus] = useState([]);

  const pairs = [
    { id: 1, imgUrl: "/photos/Thank You.png", text: "Thank You" },
    { id: 2, imgUrl: "/photos/I Love You.jpeg", text: "I Love You" },
    { id: 3, imgUrl: "/photos/Father.jpg", text: "Father" },
    { id: 4, imgUrl: "/photos/No.png", text: "No" },
  ];

  // Function to shuffle the pairs array
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleClick = (id) => {
    if (selectedPairs) {
      if (selectedPairs === id) {
        console.log("paired");
        // Update the pairStatus for the current pair
        const newPairStatus = [...pairStatus];
        newPairStatus[id - 1] = true; // Assuming IDs start from 1
        setPairStatus(newPairStatus);
      } else {
        console.log("not paired");
        // Clear the pairStatus for the current pair
        const newPairStatus = [...pairStatus];
        newPairStatus[id - 1] = false; // Assuming IDs start from 1
        setPairStatus(newPairStatus);
      }
    }
    setSelectedPairs(0);
  };


  useEffect(() => {
    setShuffledPairs(shuffleArray(pairs));
  }, []);

  return (
    <div
      // style={{
      //   display: "flex",
      // }}
      className="custom-page-background"
    >
      <MyHeadings
        myTitle={"Try Matching!"}></MyHeadings>
        <div className="new-match-container custom-margin-top">

        <div>
        {pairs.map((item, index) => (
          <div
            key={index}
            className={`large-custom-margin-left large-custom-margin-right  custom-margin-bottom `}
          >
            <ImgBox
              imgUrl={item.imgUrl}
              onClicked={() => {
                setSelectedPairs(item.id);
                
              }}
            ></ImgBox>
          </div>
        ))}
      </div>

      <div>
        {shuffledPairs.map((item, index) => (
          <div
            key={index}
            className={`large-custom-margin-left custom-margin-bottom border-curve ${
              pairStatus[item.id - 1]
                ? "paired"
                : pairStatus[item.id - 1] === false? "not-paired" : ""
            }`}
          >
            <TextBox
              text={item.text}
              onClicked={() => {
                
                handleClick(item.id);
              }}
            ></TextBox>
          </div>
        ))}
      </div>
        </div>

    </div>
  );
}

export default Match;
