import FeatureBlock from "../components/Feature-block";
import Header from "../components/landing-page";


function LandingPage(){
  console.log("Called Landing Page");
    return(
         <>
    <Header />
    <div className="flex center justify-center m-20">
      <h1 className="text-5xl font-bold">OUR FEATURES</h1>
    </div>
    <div className="flex center justify-center mx-20 my-0">
      <h5 className="text-xl font-light">Start  learning Sign Language with us </h5>
    </div>
    <div className="flex flex-wrap justify-center items-center md:space-x-5">
      <FeatureBlock 
        title="Learn Sign Language"
        icon= "Learnsvg"
        description="Learn Sign Language with our interactive videos"
        href="/learn"
      />
      <FeatureBlock 
        title="Detect Sign Language"
        icon= 'Detectsvg'
        description="Translate Sign Language to Text"
        href="/index2.html"
      />
      <FeatureBlock 
        title="Search the Sign Language"
        icon= "Searchsvg"
        description="Quickly Lookup a sing for a word"
        href="/search-sign"
      />
    </div>
    </>
    )
}

export default LandingPage;