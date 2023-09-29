import { useState , useEffect} from "react";

function LearningPage(){
    const data = [        {
        "Word": "Apple",
        "Letter": "A",
        "Photo": "https://example.com/apple.jpg",
        "Definition": "A fruit with red or green skin, white flesh, and a core with seeds."
      },
      {
        "Word": "Banana",
        "Letter": "B",
        "Photo": "https://example.com/banana.jpg",
        "Definition": "A long, curved fruit with yellow skin and soft, sweet flesh."
      },
      {
        "Word": "Cat",
        "Letter": "C",
        "Photo": "https://example.com/cat.jpg",
        "Definition": "A small domesticated mammal with fur, sharp claws, and a whiskered face."
      },
      {
        "Word": "Dog",
        "Letter": "D",
        "Photo": "https://example.com/dog.jpg",
        "Definition": "A domesticated canine animal known for its loyalty and companionship."
      },
      {
        "Word": "Elephant",
        "Letter": "E",
        "Photo": "https://example.com/elephant.jpg",
        "Definition": "A large, gray mammal with a trunk, big ears, and tusks."
      },
      {
        "Word": "Fish",
        "Letter": "F",
        "Photo": "https://example.com/fish.jpg",
        "Definition": "An aquatic animal with fins and gills that lives in water."
      },
      {
        "Word": "Giraffe",
        "Letter": "G",
        "Photo": "https://example.com/giraffe.jpg",
        "Definition": "A tall, long-necked animal with spots on its body."
      },
      {
        "Word": "Horse",
        "Letter": "H",
        "Photo": "https://example.com/horse.jpg",
        "Definition": "A large, four-legged animal often used for riding and work."
      },
      {
        "Word": "Ice Cream",
        "Letter": "I",
        "Photo": "https://example.com/ice-cream.jpg",
        "Definition": "A frozen dessert made from dairy products and sweet flavors."
      },
      {
        "Word": "Jellyfish",
        "Letter": "J",
        "Photo": "https://example.com/jellyfish.jpg",
        "Definition": "A gelatinous, transparent sea creature with trailing tentacles."
      },
      {
        "Word": "Kangaroo",
        "Letter": "K",
        "Photo": "https://example.com/kangaroo.jpg",
        "Definition": "A marsupial with a long tail, strong hind legs, and a pouch."
      },
      {
        "Word": "Lion",
        "Letter": "L",
        "Photo": "https://example.com/lion.jpg",
        "Definition": "A large, carnivorous feline known for its mane."
      },
      {
        "Word": "Monkey",
        "Letter": "M",
        "Photo": "https://example.com/monkey.jpg",
        "Definition": "A primate with a tail that often lives in trees."
      },
      {
        "Word": "Nest",
        "Letter": "N",
        "Photo": "https://example.com/nest.jpg",
        "Definition": "A structure built by birds to lay eggs and raise their young."
      },
      {
        "Word": "Octopus",
        "Letter": "O",
        "Photo": "https://example.com/octopus.jpg",
        "Definition": "A marine animal with eight arms and a soft body."
      },
      {
        "Word": "Penguin",
        "Letter": "P",
        "Photo": "https://example.com/penguin.jpg",
        "Definition": "A flightless bird found in cold regions, often with a black and white coloration."
      },
      {
        "Word": "Queen",
        "Letter": "Q",
        "Photo": "https://example.com/queen.jpg",
        "Definition": "A female ruler or leader."
      },
      {
        "Word": "Rabbit",
        "Letter": "R",
        "Photo": "https://example.com/rabbit.jpg",
        "Definition": "A small mammal with long ears and a fluffy tail."
      },
      {
        "Word": "Sun",
        "Letter": "S",
        "Photo": "https://example.com/sun.jpg",
        "Definition": "The star at the center of our solar system that provides light and heat."
      },
      {
        "Word": "Tiger",
        "Letter": "T",
        "Photo": "https://example.com/tiger.jpg",
        "Definition": "A large, striped feline known for its strength and agility."
      },
      {
        "Word": "Umbrella",
        "Letter": "U",
        "Photo": "https://example.com/umbrella.jpg",
        "Definition": "A device used to protect against rain or sun."
      },
      {
        "Word": "Vase",
        "Letter": "V",
        "Photo": "https://example.com/vase.jpg",
        "Definition": "A decorative container often used to hold flowers."
      },
      {
        "Word": "Whale",
        "Letter": "W",
        "Photo": "https://example.com/whale.jpg",
        "Definition": "A large marine mammal that lives in the oceans."
      },
      {
        "Word": "Xylophone",
        "Letter": "X",
        "Photo": "https://example.com/xylophone.jpg",
        "Definition": "A musical instrument with wooden bars that are struck with mallets."
      },
      {
        "Word": "Yak",
        "Letter": "Y",
        "Photo": "https://example.com/yak.jpg",
        "Definition": "A large, hairy mammal found in mountainous regions."
      },
      {
        "Word": "Zebra",
        "Letter": "Z",
        "Photo": "https://example.com/zebra.jpg",
        "Definition": "A black and white striped mammal found in Africa."
      },
      {
        "Word": "A",
        "Letter": "🤟",
        "Photo": "https://example.com/asl-a.jpg",
        "Definition": "ASL sign for the letter 'A'."
      },
      {
        "Word": "B",
        "Letter": "🅱️",
        "Photo": "https://example.com/asl-b.jpg",
        "Definition": "ASL sign for the letter 'B'."
      },
      {
        "Word": "C",
        "Letter": "🗨️",
        "Photo": "https://example.com/asl-c.jpg",
        "Definition": "ASL sign for the letter 'C'."
      },
      {
        "Word": "D",
        "Letter": "🤞",
        "Photo": "https://example.com/asl-d.jpg",
        "Definition": "ASL sign for the letter 'D'."
      },
      {
        "Word": "E",
        "Letter": "✌️",
        "Photo": "https://example.com/asl-e.jpg",
        "Definition": "ASL sign for the letter 'E'."
      },
      {
        "Word": "F",
        "Letter": "🖖",
        "Photo": "https://example.com/asl-f.jpg",
        "Definition": "ASL sign for the letter 'F'."
      },
      {
        "Word": "G",
        "Letter": "🤙",
        "Photo": "https://example.com/asl-g.jpg",
        "Definition": "ASL sign for the letter 'G'."
      },
      {
        "Word": "H",
        "Letter": "👐",
        "Photo": "https://example.com/asl-h.jpg",
        "Definition": "ASL sign for the letter 'H'."
      },
      {
        "Word": "I",
        "Letter": "🤘",
        "Photo": "https://example.com/asl-i.jpg",
        "Definition": "ASL sign for the letter 'I'."
      },
      {
        "Word": "J",
        "Letter": "🖐️",
        "Photo": "https://example.com/asl-j.jpg",
        "Definition": "ASL sign for the letter 'J'."
      },
      {
        "Word": "K",
        "Letter": "🤟",
        "Photo": "https://example.com/asl-k.jpg",
        "Definition": "ASL sign for the letter 'K'."
      },
      {
        "Word": "L",
        "Letter": "🤞",
        "Photo": "https://example.com/asl-l.jpg",
        "Definition": "ASL sign for the letter 'L'."
      },
      {
        "Word": "M",
        "Letter": "👐",
        "Photo": "https://example.com/asl-m.jpg",
        "Definition": "ASL sign for the letter 'M'."
      },
      {
        "Word": "N",
        "Letter": "🤘",
        "Photo": "https://example.com/asl-n.jpg",
        "Definition": "ASL sign for the letter 'N'."
      },
      {
        "Word": "O",
        "Letter": "🖐️",
        "Photo": "https://example.com/asl-o.jpg",
        "Definition": "ASL sign for the letter 'O'."
      },
      {
        "Word": "P",
        "Letter": "🤟",
        "Photo": "https://example.com/asl-p.jpg",
        "Definition": "ASL sign for the letter 'P'."
      },
      {
        "Word": "Q",
        "Letter": "🤞",
        "Photo": "https://example.com/asl-q.jpg",
        "Definition": "ASL sign for the letter 'Q'."
      },
      {
        "Word": "R",
        "Letter": "🤙",
        "Photo": "https://example.com/asl-r.jpg",
        "Definition": "ASL sign for the letter 'R'."
      },
      {
        "Word": "S",
        "Letter": "👐",
        "Photo": "https://example.com/asl-s.jpg",
        "Definition": "ASL sign for the letter 'S'."
      },
      {
        "Word": "T",
        "Letter": "🤘",
        "Photo": "https://example.com/asl-t.jpg",
        "Definition": "ASL sign for the letter 'T'."
      },
      {
        "Word": "U",
        "Letter": "🖖",
        "Photo": "https://example.com/asl-u.jpg",
        "Definition": "ASL sign for the letter 'U'."
      },
      {
        "Word": "V",
        "Letter": "🤙",
        "Photo": "https://example.com/asl-v.jpg",
        "Definition": "ASL sign for the letter 'V'."
      },
      {
        "Word": "W",
        "Letter": "🤞",
        "Photo": "https://example.com/asl-w.jpg",
        "Definition": "ASL sign for the letter 'W'."
      },
      {
        "Word": "X",
        "Letter": "🤙",
        "Photo": "https://example.com/asl-x.jpg",
        "Definition": "ASL sign for the letter 'X'."
      },
      {
        "Word": "Y",
        "Letter": "🤟",
        "Photo": "https://example.com/asl-y.jpg",
        "Definition": "ASL sign for the letter 'Y'."
      },
      {
        "Word": "Z",
        "Letter": "👐",
        "Photo": "https://example.com/asl-z.jpg",
        "Definition": "ASL sign for the letter 'Z'."
      }]
    return(
        <div>
            <h1>Learning Page</h1>
            <div className="container">
                <div className="row">
                    {data.map((item) => (
                        <div className="col-4" key={item.Word}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item.Word}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{item.Letter}</h6>
                                    <img src={item.Photo} alt={item.Word} />
                                    <p className="card-text">{item.Definition}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LearningPage;