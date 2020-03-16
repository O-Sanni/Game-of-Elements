class Inventions{
    constructor(name, pictureLocation, information){
        this.name=name;
        this.pictureLocation=pictureLocation;
        this.information=information;
        
    }
}
let arrayOfInventions=[];
const computerChoiceOfElements=["Water", "Wind","Water", "Fire"];
let computerScore=0;
let userScore=4;
let dragonPages=3;
let userPages=0;
let dragonWins=0;
let stolenpages=[];

document.getElementById("dragonPages").innerHTML=`Pages ${dragonPages}`;
document.getElementById("userPages").innerHTML=`Pages ${userPages}`;

 function createInventionPages(){
const wheel=new Inventions ("Wheel","/assets/wheel.png","The wheel stands out as the OG of engineering marvels and one of the most famous inventions that influenced numerous other things. This primitive technology made it easier for all of us to travel. From the archeological excavations, the oldest known wheel is from Mesopotamia, around 3500 B.C. As a result of advancement in the new and innovative design of wheels, industrialization could take root.The wheel serves a vital purpose in our lives, and we couldn't imagine the world without them.");
arrayOfInventions.push(wheel);
const compass=new Inventions ("Compass","/assets/compass.png", "Created for spiritual and navigational purposes, the earliest compasses were most likely invented by the Chinese in around 1050 BC. It was made of lodestones, which is a naturally magnetized iron ore.The invention of the electromagnet in 1825 led to the development of the modern compass.The invention of the compass certainly helped modern navigation more than our GPS-needing culture could understand.");
arrayOfInventions.push(compass);
const automobile=new Inventions ("Automobile","/assets/car.png", "Although the foundation to the modern car year was laid in 1886 by German inventor Karl Benz, Cars did not become widely available until the early 20th century. Henry Ford innovated mass-production techniques that became standard, with Ford, General Motors, and Chrysler. However, he certainly wasn't the only person to develop the horseless carriage.The history of the automobile reflects a worldwide evolution. Dozens of spin-off industries blossomed creating thousands of new jobs. Oil and steel became two well-established industries.Vehicle production and sales are one of the major indicators of economic status. Moreover, it influenced the technological advances in petroleum refining, steel making, paint and plate-glass manufacturing, and other industrial processes.")
arrayOfInventions.push(automobile);
const steamEngine=new Inventions ("Steam Engine","/assets/steamEngine.png","Thomas Savery patented the first practical steam engine in 1698. It was one of the greatest inventions made by a man making him one of the people who has changed the world.Later in 1781, James Watt patented an improved steam engine and went on to fuel one of the most momentous technological leaps in human history during the Industrial Revolution.During the 1800s these engines lead to an improvement in transportation, agriculture, and manufacturing industries.Later, the steam engine’s basic principle set the stage for innovations like internal combustion engines and jet turbines, which prompted the rise of cars and aircraft during the 20th century.")
arrayOfInventions.push(steamEngine);
const petrol=new Inventions ("Petrol","/assets/petrol.png", "Without gas, there wouldn't be the first industrial revolution in the automobile industry. Gasoline is a fuel derivative of oil, which is shortly called “gas” in the United States and “petrol,” in other places around the world. To be more specific, petrol is a transparent, petroleum-derived liquid that is used as an essential fuel in internal combustion engines. Petrol is the natural by-product and the invention here we are talking about is the numerous processes to improve the quality. Do you know, gas was initially discarded? During 1859, in Pennsylvania, Edwin Drake dug the first oil well and refined the oil to produce kerosene. Although the distillation produced gas, he discarded it as he was unaware of it. Until 1892, the prominence of gas wasn’t recognized. The first gas pump was manufactured by Sylvanus Bowser On September 5, 1885. The year 1970 gained attention towards environmental protection.")
arrayOfInventions.push(petrol);
const antibiotics=new Inventions ("Antibiotics","/assets/antibiotics.png", "Antibiotics saved millions of lives by killing and inhibiting the growth of harmful bacteria. Louis Pasteur and Robert Koch first described the Antibiosis (phenomena of antibiotic drug) in 1877. In 1928, Alexander Fleming set the first leap in antibiotics by identifying penicillin, the chemical compound with antibiotic properties. Throughout the 20th century, antibiotics spread rapidly and proved to be a major living improvement, fighting nearly every known form of infection and protecting peoples' health. ");
arrayOfInventions.push(antibiotics);
const railways=new Inventions ("Railways","/assets/rails.png","Railways is a mode of transport which can carry a large number of passengers with ease of comfort and/or heavy loads to long distances. Modern trains history is around 200 years old, which revolutionized the way we travel. Distant lands become possible, industries are powered with an infinite amount of raw materials. During 1500 -1800, wagonways were common in Europe, which was used in mining. After the invention of the Steam engine, more researchers were carried out throughout the world for a better design. The commercial appearance of train networks came in the late 1820s, and the pioneer in that field was inventor George Stephenson, with his design 'Rocket', the most famous early railway locomotive. In 1821, Stephenson was appointed as an engineer for the construction of the Stockton and Darlington railway, which was opened as the first public railway in 1825.");
arrayOfInventions.push(railways);
const nail=new Inventions ("Nail","/assets/nail.png","The sophisticated human life would not have been possible without the invention of a small nail. They provide one of the best clues in determining the age of historic buildings. Prior to the invention of nails, wood structures were built by geometrically interlocking adjacent boards. The invention of nails goes back to several thousand years and was possible only after the development of casting and shaping a metal.Around 3400 BC, Bronze nails were found in Egypt. According to the University of Vermont, the hand-wrought nails were a norm until the 1790s and early 1800s. By 1913, 90 percent of nails produced in the U.S. were steel wire nails. Other types of nails include pins, tacks, brads, and spikes with wire nails being popular.")
arrayOfInventions.push(nail);
const tools=new Inventions ("Tools","/assets/tools.png", "The usage of tools started 2.6 million years back in Ethiopia.Anthropologists believe the use of tools became an important step in the evolution of mankind. Earlier materials such as sticks and stones made tools.The invention of machine tools advanced the industrial revolution. Imagine how would we build or maintain previous innovations without a handy hammer.")
arrayOfInventions.push(tools);
const lightBulb=new Inventions("Light Bulb","/assets/lightBulb.png", "The energy we use today at home and office is a bright idea from more than 150 years ago. Pioneered in the early 19th century by Humphry Davy, electric lights developed throughout the 1800s and was one of the most influential, great inventions of all times. Edison and Swan patented the first light bulb in 1879 and 1880. In the mid-1980s, CFLs hit the market. But the drawbacks such as high cost, bulky, low light output, and inconsistent performance made them less prominent. Currently, LEDs offer the best energy savings on the market. However, the invention of the bulb electrified new businesses. It also led to new energy breakthroughs such as power plants, electric transmission lines, home appliances etc.")
arrayOfInventions.push(lightBulb);
const electricity=new Inventions ("Electricity", "/assets/electricity.png","Electricity has become the basic need for day to day life. It's been there around all along but the practical applications to effectively use it was invented. Alessandro Volta discovered the first practical method of generating electricity. 1831 is marked the year of major breakthrough for electricity. A British scientist Michael Faraday discovered the basic principles of electricity generation. The electromagnetic induction discovery revolutionized the energy usage. Street lights were some of the earliest attention gaining equipment. With the rise in electricity usability, now it stands as a backbone of modern industrial society. With increased mobility, human life has become dependent on electricity.")
arrayOfInventions.push(electricity);
const printingPress=new Inventions ("Printing Press","/assets/printingPress.png", "Before the Internet's ability to spread information, the printing press helped information travel around the globe. Developed around 1440 in Mainz, Germany, Johannes Gutenberg’s machine improved on already existing presses. By 1500 Gutenberg presses were operating throughout Western Europe with a production of 20 million copies. By 1600, they had created over 200 million new books.")
arrayOfInventions.push(printingPress);
const transistors=new Inventions ("Transistors","assets/transistors.png", "The transistor is an essential component in nearly every modern electronic gadget. In 1926, Julius Lilienfeld patented a field-effect transistor, but the working device was not feasible. In 1947 John Bardeen, Walter Brattain, and William Shockley developed the first practical device at Bell Laboratories. It then won the trio 1956 Nobel Prize in physics. Transistors have become a fundamental piece of the circuitry in countless electronic devices including televisions, cell phones, and computers making a remarkable impact on technology.")
arrayOfInventions.push(transistors);
const computer=new Inventions ("Computer", "/assets/computer.png", "Major shoutout to the mechanical engineer Charles Babbage for laying the foundation to this remarkable and most reliable invention. In the early 19th century, the 'father of the computer' conceptualized and invented the first mechanical computer. Although there's no single inventor of the modern computer, the principle was proposed by Alan Turing in his seminal 1936 paper. Today, computers stand as the symbolic representation of the modern world.")
arrayOfInventions.push(computer);
const steel=new Inventions ("Steel", "/assets/steel.png","While the early ages used stone, bronze, and iron, it was steel that fired the industrial revolution. As per archaeological excavations, the earliest known production of the metal dates back to 4,000 years. The invention of the Bessemer Process (a technique for creating steel using molten pig iron) paved the way for the mass production of steel, making it one of the biggest industries on the planet. Now steel is used in the creation of everything from bridges to skyscrapers.")
arrayOfInventions.push(steel);
 }
createInventionPages();

function getRandomNumber1_15(){
let randomNumber= Math.floor(Math.random()*15);
//console.log(randomNumber);
return randomNumber;
}

function randomPages(){
 let randomPageNumber1=getRandomNumber1_15();
 let randomPageNumber2=getRandomNumber1_15();
 let randomPageNumber3=getRandomNumber1_15();
 
 //console.log(`${randomPageNumber1}; ${randomPageNumber2}; ${randomPageNumber3} `)
 if (randomPageNumber1 === randomPageNumber2 || randomPageNumber2===randomPageNumber3 || randomPageNumber1===randomPageNumber3)
 {
    randomPages();
 }
 else{
     stolenpages.push(arrayOfInventions[randomPageNumber1]);
     stolenpages.push(arrayOfInventions[randomPageNumber2]);
     stolenpages.push(arrayOfInventions[randomPageNumber3]);
 }
 //console.log(stolenpages);
 //console.log(stolenpages.length);
}
randomPages();

function openGame(){
    window.open("/index.html");
}

function displayRules(){
    document.getElementById("rules").style.animation = "animateRules  3s ease-in-out forwards";
    document.getElementById("elements").style.animation = "animateRules 3s ease-in-out forwards";
}

function win(){
    document.getElementById("coverWin").style.opacity="0.9";
    document.getElementById("coverWin").style.zIndex="1";
    document.getElementById("coverWin").style.backgroundImage="url('/winnerPage.jpg')";
    document.getElementById("coverWin").style.backgroundSize="100%";
    document.getElementById("coverWin").style.backgroundRepeat="no-repeat";
    document.getElementById("coverWin").style.position="fixed";
    document.getElementById("coverWin").style.width="100%";
   document.getElementById("coverWin").style.height="100%";
    document.getElementById("coverWin").style.top="0px";
    document.getElementById("coverWin").style.left="0px";
    document.getElementById("win").style.display="block";
}
function battle(user){ 

    if(userScore===5 || computerScore===5){
          return;
      }
     
     document.getElementById("userChoice").style.opacity="1";
     document.getElementById("dragonChoice").style.opacity="1";
     let userChoice=user;  
     let computerChoice=computerChoiceOfElements[Math.floor(Math.random()*4)];
    document.getElementById("userChoice").src=`/assets/elements/${userChoice}White.gif`;
    document.getElementById("dragonChoice").src=`/assets/elements/${computerChoice}White.gif`;
    
        // console.log("Computer Choice " + computerChoice);
        // console.log("User choice "+ userChoice);
        if (userChoice===computerChoice){
            document.getElementById("winerMiniGame").innerHTML="No winner";
            }
        else if(userChoice==="Wind"){
            if (userChoice==="Wind" && computerChoice==="Water"){
                userScore+=1;
                document.getElementById("userScoreTxt").innerHTML=userScore;
                document.getElementById("winerMiniGame").innerHTML="Guardian wins";
            }
            else if (userChoice==="Wind" && computerChoice==="Fire"){
                userScore+=1;
                computerScore+=1;
                document.getElementById("userScoreTxt").innerHTML=userScore;
                document.getElementById("dragonScoreTxt").innerHTML=computerScore;
                document.getElementById("winerMiniGame").innerHTML="Both Players wins";
            }  
            else if(userChoice==="Wind" && computerChoice==="Earth"){
                document.getElementById("winerMiniGame").innerHTML="No winner";
            }
        }
        else if (userChoice === "Fire"){
            if(userChoice === "Fire" && computerChoice==="Earth"){
                userScore+=1;
                document.getElementById("userScoreTxt").innerHTML=userScore;
                document.getElementById("winerMiniGame").innerHTML="Guardian wins";
            }
            else if(userChoice === "Fire" && computerChoice==="Water"){
                computerScore+=1;
                document.getElementById("dragonScoreTxt").innerHTML=computerScore;
                document.getElementById("winerMiniGame").innerHTML="Dragon wins";
            }
            else if (userChoice==="Fire" && computerChoice==="Wind"){
                userScore+=1;
                computerScore+=1;
                document.getElementById("userScoreTxt").innerHTML=userScore;
                document.getElementById("dragonScoreTxt").innerHTML=computerScore;
                document.getElementById("winerMiniGame").innerHTML="Both Players wins";
            }  
        }
        else if(userChoice==="Earth"){
            if(userChoice==="Earth" && computerChoice==="Fire"){
                computerScore+=1;
                document.getElementById("dragonScoreTxt").innerHTML=computerScore;
                document.getElementById("winerMiniGame").innerHTML="Dragon wins";
            }
            else if(userChoice==="Earth" && computerChoice==="Water"){
                userScore+=1;
                document.getElementById("userScoreTxt").innerHTML=userScore;
                document.getElementById("winerMiniGame").innerHTML="Guardian wins";
            }
            else if(userChoice==="Earth" && computerChoice==="Wind"){
                document.getElementById("winerMiniGame").innerHTML="No winner";
            }
        }
        else if (userChoice==="Water"){
            if(userChoice==="Water" && computerChoice==="Fire"){
                userScore+=1;
                document.getElementById("userScoreTxt").innerHTML=userScore;
                document.getElementById("winerMiniGame").innerHTML="Guardian wins";
            }
            else if(userChoice==="Water" && computerChoice==="Wind"){
                computerScore+=1;
                document.getElementById("dragonScoreTxt").innerHTML=computerScore;
                document.getElementById("winerMiniGame").innerHTML="Dragon wins";
            }
            else if(userChoice==="Water" && computerChoice==="Earth"){
                computerScore+=1;
                document.getElementById("dragonScoreTxt").innerHTML=computerScore;
                document.getElementById("winerMiniGame").innerHTML="Dragon wins";
            }
        }

        
    
        if (userScore===5){        
        dragonPages-=1;
        userPages+=1;
        continueOrQuit("User");
            return;
    }
        else if(computerScore===5){
        continueOrQuit("Computer");
        return;
    }
    
}

function continueOrQuit(winner){
    if(winner==="User"){
        document.getElementById("continueOrQuit").style.opacity="1";
        document.getElementById("dragonPages").innerHTML=`Pages ${dragonPages}`;
        document.getElementById("userPages").innerHTML=`Pages ${userPages}`;
        document.getElementById("winOrLoose").innerHTML="You win page";
        document.getElementById("stolenPage").style.animation = "animatePages 3s ease-in-out forwards";
        document.getElementById("inventionName").innerHTML=stolenpages[0].name;
        document.getElementById("inventionInfo").innerHTML=stolenpages[0].information;
        document.getElementById( "imgOfInvention").src=stolenpages[0].pictureLocation;
        document.getElementById( "imgOfInvention").alt=stolenpages[0].name;
    
    }
    
     else if(winner==="Computer"){
         dragonWins+=1;
        document.getElementById("continueOrQuit").style.opacity="1";
        document.getElementById("winOrLoose").innerHTML="You loose";
        exitGame();
        
     }   
            
}
function reloadPage(){
    location.reload();
}
function continueGame(){
    if(userPages===3){
        win();
        return
    }
    stolenpages.shift();
    userScore=4;
    computerScore=0;
    document.getElementById("userScoreTxt").innerHTML=userScore;
    document.getElementById("dragonScoreTxt").innerHTML=computerScore;
    document.getElementById("stolenPage").style.animation="animatePagesDis 2s ease-in-out";
    document.getElementById("continueOrQuit").style.opacity="0";
    

}
 function exitGame(){
    document.getElementById("coverLoose").style.opacity="0.9";
    document.getElementById("coverLoose").style.zIndex="1";
    document.getElementById("coverLoose").style.backgroundImage="url('LooseBackground.png')";
    document.getElementById("coverLoose").style.backgroundSize="100%";
    document.getElementById("coverLoose").style.backgroundRepeat="no-repeat";
    document.getElementById("coverLoose").style.position="fixed";
    document.getElementById("coverLoose").style.width="100%";
   document.getElementById("coverLoose").style.height="100%";
    document.getElementById("coverLoose").style.top="0px";
    document.getElementById("coverLoose").style.left="0px";
    document.getElementById("loose").style.display="block";

 }
 

