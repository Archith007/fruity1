class Game {
          constructor(){
        
          }
        
          getState(){
            var gameStateRef  = database.ref('gameState');
            gameStateRef.on("value",function(data){
               gameState = data.val();
            })
        
          }
        
          update(state){
            database.ref('/').update({
              gameState: state
            });
          }
        
          async start(){
            if(gameState === 0){
              player = new Player();
              var playerCountRef = await database.ref('playerCount').once("value");
              if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
              }
              form = new Form()
              form.display();
            }
        
            car1 = createSprite(100,100);
            car1.scale = 0.2

            car1.addImage("car1",car1_img);
            car2 = createSprite(300,100);
            car2.scale = 0.2

            car2.addImage("car2",car2_img);
            car3 = createSprite(500,100);
            car3.scale = 0.2

            car3.addImage("car3",car3_img);
            car4 = createSprite(700,100);
            car4.scale = 0.2
            car4.addImage("car4",car4_img);

            cars = [car1, car2, car3, car4];
          }
        
          play(){
            form.hide();
        
            Player.getPlayerInfo();
            
            if(allPlayers !== undefined){
              //var display_position = 100;
              image(track, 0,0,displayWidth, displayHeight);
        
              //index of the array
              var index =0;
        
              //x and y position of the cars
              var x =200;
              var y;
        
              for(var plr in allPlayers){
                //add 1 to the index for every loop
                index = index + 1 ;
                x = 200 + (index * 200) + allPlayers[plr].xPos;
                y = displayHeight - allPlayers[plr].distance ;
                //position the cars a little away from each other in x direction
               // x = x + 200;
                //use data form the database to display the cars in y direction
              // y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                textAlign(CENTER);
                textSize(50);
                fill("black")
                text(allPlayers[plr].name, cars[index - 1].x, cars[index - 1].y + 125);
                if (index === player.index){
                  cars[index - 1].shapeColor = "red";

                  if( cars[index - 1].isTouching(obstacles)){
                                                s.play();

                    yVel -= 0.9;

                  }
                }
               
              }
        
            }
        
            
            if(player.distance < 2150){
             
                  if(keyIsDown(37)){
                      xVel -= 0.5;
                  }
                  if(keyIsDown(39)){
                      xVel += 0.5;
                  }
              }
            
          //move the car
          player.distance += yVel;
          yVel *= 0.98;
          player.xPos += xVel;
          xVel *= 0.985;
          player.update();
          //display sprites
          drawSprites();
        }
           
      
        }
