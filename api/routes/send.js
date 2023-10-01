const express = require('express')
const router = express.Router()
const fs = require('fs');


router.get('/', async(req, res) => {
    const code = `
    import tensorflowjs as tfjs
    import tensorflow as tf
    
    model = tf.keras.models.load_model("alphabetmodell.h5")
    tfjs_target_dir = "./tfjs_model"
    tfjs.converters.save_keras_model(model, tfjs_target_dir)
    ` 
    res.json({
        message: code,
    })
});

router.get('/:id', async(req, res) => {

    image1= 'https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/a.gif'
    image2= 'https://i.pinimg.com/originals/db/8e/2f/db8e2f51fc24d10b7c296e8c46112b9a.png'
    image3 = 'https://previews.123rf.com/images/ovsianka/ovsianka1912/ovsianka191200013/134573037-finger-spelling-letter-c-in-american-sign-language-on-white-background-asl-concept.jpg'
    correct_answer = image3
    question = 'Which is the letter C'
    
    if(req.params.id == 2){
        image1= 'https://www.dummies.com/wp-content/uploads/196945.image1.jpg'
        image2= 'https://i.ytimg.com/vi/vnGUMYxKwXs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCFyMTrdAXeonxFm3_6CkE6LNq3WA'
        image3 = 'https://i.ytimg.com/vi/56QIi_mrzvo/maxresdefault.jpg'
        correct_answer = image2
        question = 'Which image shows Happy in ASL'
    }

    if(req.params.id == 3){
        image1= 'https://thechive.com/wp-content/uploads/2019/12/person-hilariously-photoshops-animals-onto-random-things-xx-photos-25.jpg?attachment_cache_bust=3136487&quality=85&strip=info&w=400'
        image2= 'https://i.redd.it/1pmsjnk8f1g01.jpg'
        image3 = 'https://awkwardfamilyphotos.com/wp-content/uploads/2020/02/Screen-Shot-2020-02-28-at-2.16.18-PM-774x1024.jpg'
        correct_answer = image1
        question = 'Which image is the funniest'
    }
    if(req.params.id == 4){
        image1= 'https://i.ytimg.com/vi/Qw2LUsS-Ujo/maxresdefault.jpg'
        image2= 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80'
        image3 = 'https://i.redd.it/jeuusd992wd41.jpg'
        correct_answer = image3
        question = 'Which image has the harry potter'
    }

    if(req.params.id == 5){
        image1= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCVnMftmnJZ8Nis5HnBeuahDMftylU9guag&usqp=CAU'
        image2= 'https://laughingsquid.com/wp-content/uploads/2014/10/10727744_802145649852080_105707338_n.jpg'
        image3 = 'https://img-9gag-fun.9cache.com/photo/a3Q5VW5_460s.jpg'
        correct_answer = image3
        question = 'Which image has the cat'
    }

    res.json({
        "image1": image1,
        "image2": image2,
        "image3": image3,
        "answer": correct_answer,
        "question": question
    })
});

router.post('result', async(req, res) => {
    const response = req.body;
    console.log(response);
});

module.exports = router;