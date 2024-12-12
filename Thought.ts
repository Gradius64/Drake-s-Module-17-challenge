// define the thought schema
//const mongoose = require('mongoose')
//const { Schema } = mongoose;


  










interface IReaction extends Document {
   
    reactionBody: string;
    username: string;
   



}







   
    reactions : [
        {
            reactionBody: {
                type: String,
                required: true,
                maxlength: 280

            },

            username: {
                type: String,
                required: true

        }

       
        
    
    






    

    
   



    
        
       
    

   

// create virtual property called reaction count

    
    

    }
    ]
