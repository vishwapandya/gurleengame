function story(){
    if(mousePressedOver(next)){
        next.visible=false
        sprite.destroy()
        greeting.destroy()
        storyPage.visible= true
        storyPage.scale = 0.8
        cont.visible = true
    }
}

function rules(){
    if(storyPage.visible===true&&mousePressedOver(cont)){
        storyPage.destroy()
        cont.destroy()
        rulesPage.visible = true
        starting.visible = true
    }
}

function levelstart(){
    if(starting.visible === true&&mousePressedOver(starting)){
        starting.destroy()
        rulesPage.visible = false
       starting.visible=false 
     bg2.visible=true  
    }
}
function level1(){
    if(bg2.visible===true){
        
        plr.visible=true
        plr.velocityY=10
            
            if(plr.y>=400&&bg2.visible===true){
            plr.velocityY=0
            next.visible=true
        next.depth=plr.depth+1
        }
        if(next.visible===true&&mousePressedOver(next)){
            choose.destroy()
            bg2.destroy()
            castle2.visible=true
            choose.depth=castle2.depth+1
            choose.visible=true
            plr.depth=castle2.depth+1
            next.destroy()
            plr.velocityY=0
        }
        if(castle2.visible===true){
            plr.velocityY=0
        }
            if(castle2.visible===true&&keyCode===LEFT_ARROW){
                plr.x = plr.x-3
            }
             else if(castle2.visible===true&&keyCode===RIGHT_ARROW){
                 plr.x = plr.x+3
             }
            else if(castle2.visible===true&&keyCode===UP_ARROW){
                 plr.y = plr.y-3
             }
            else if(castle2.visible===true&&keyCode===DOWN_ARROW){
                 plr.y = plr.y+3
             }
             plr.debug=true
             plr.setCollider("rectangle",0,0,100,50)
             nextlevel.visible = false
             if(plr.collide(boom)){
                 boom.visible=true
             }
             if(plr.collide(crowbar)){
                crowbar.visible=true
            }
            if(plr.collide(axe)){
                axe.visible=true
            }
            if(plr.collide(hammer)){
                hammer.visible=true
            }
            if(plr.collide(aidkit)){
                aidkit.visible=true
            }
            if(plr.collide(jacket)){
                jacket.visible=true
            }
            if(plr.collide(knife1)){
                knife1.visible=true
            }
            if(plr.collide(knife2)){
                knife2.visible=true
            }
            if(plr.collide(knife3)){
                knife3.visible=true
            }
            if(plr.collide(gun1)){
                gun1.visible=true
            }
            if(plr.collide(gun2)){
                gun2.visible=true
            }

            if(boom.visible===true&&crowbar.visible===true&&axe.visible===true&&hammer.visible===true&&aidkit.visible===true&&gun1.visible===true&&gun2.visible===true){
                nextlevel.visible=true
            }
        }
    
       
    }


//make weapons sprite
//they will be visible = false
function level2(){
if(nextlevel.visible===true&&mousePressedOver(nextlevel)){
    castle2.destroy()
    boom.destroy()
    axe.destroy()
    crowbar.destroy()
    hammer.destroy()
    aidkit.destroy()
    jacket.destroy()
    knife1.destroy()
    knife2.destroy()
    knife3.destroy()
    gun1.destroy()
    gun2.destroy()
    nextlevel.destroy()
    plr.visible=false
    plr.scale=0.4
    var wall1=createSprite(830,530,50,30)
    wall1.shapeColor="yellow"
    var wall2=createSprite(80,50,50,30)
    wall2.shapeColor="yellow"
    var wall3=createSprite(40,30,50,30)
    wall3.shapeColor="yellow"
    var wall4=createSprite(30,80,50,30)
    wall4.shapeColor="yellow"
    var wall5=createSprite(100,130,50,30)
    wall5.shapeColor="yellow"
    var wall6=createSprite(230,130,50,30)
    wall6.shapeColor="yellow"
    var wall7=createSprite(500,30,50,30)
    wall7.shapeColor="yellow"
    if(keyCode===32){
        plr.addImage(sittingPlr)
        plr.scale=0.4
    }
    var money=createSprite(900,530)
    money.addImage(moneyImage)
    money.scale=0.5
    police1.visible=true
    police2.visible=true
    police3.visible=true
}
}
