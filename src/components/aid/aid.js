class Instruction {
    constructor(){
        this.instructionText = [
        'Uzupełnij PIT-OP swoim danymi osobowymi, rok za który składane jest oświadczenia oraz wypełnij rubrykę z miejscem składania oświadczenia ',
        'Uzuopełnij numer KRS następujaco: 0000309499',
        'W rubryce uzupełniającej, jako cel szczwegółowy wpisz: "Sądecki Elektryk"', 
        'Wyraź zgodę w rubryce 12, oraz podpisz oświadczenie',
        'Koniec! PIT-OP możesz także wypełnić korzystająć z aplikacji e-pity dostępnej na stronie Pallotyńskiej Fundacji Misyjnej //Salvatti.pl pod adresem: https://salvatti.pl/'
        ],
        this.iconsItem = document.querySelectorAll('.aid-instruction__step-icons-item')
    }
    addEvent(){
        let objectList = this.iconsItem;


        this.iconsItem.forEach(element => {
            element.addEventListener('click', function(){
            //console.log(element.attributes);
            //console.log(element.getAttribute('data-number'));
            let activeNumber = element.getAttribute('data-number'); 





                objectList.forEach(element => {
                    element.classList.remove('aid-instruction__step-icons-item--active')
                    element.classList.remove('aid-instruction__step-icons-item--passed')
                    if(element.getAttribute('data-number') < activeNumber ){
                        element.classList.add('aid-instruction__step-icons-item--passed')
                    }
                })
                //console.log(element);
                element.classList.add('aid-instruction__step-icons-item--active');
            })
                element.addEventListener('click', function(){
                //console.log('helllo');
            })
        });
    }
}

const tableOfInstruction = new Instruction;
tableOfInstruction.addEvent();





// Create a condition that targets viewports at least 992px wide
const mediaQuery = window.matchMedia('(min-width: 992px)')
function handleTabletChange(e) {
  // Check if the media query is true
    const listText = document.querySelector('.aid-instruction__step-descriptions')
    //onsole.log(listText.childElementCount);
    //console.log(listText.hasChildNodes());
    //console.log(listText.childElementCount);
    //console.log(listText.childElementCount === 0);
    if (e.matches) {
        listText.innerHTML = '';
        // Then log the following message to the console
        const iconsOfStep = document.querySelectorAll('.aid-instruction__step-icons-item')

        iconsOfStep.forEach(element => element.addEventListener('click', function(){
            let numberOfStep = element.getAttribute('data-number');
            let textOfNumber = listText.children[numberOfStep-1];
            //console.log(listText.children);
            for (let i = 0; i < listText.childElementCount; i++) {
                listText.children[i].classList.remove('aid-instruction__step-descriptions-item--active');
                console.log(listText[i]);
            }
            //listText.children[2].classList.remove('aid-instruction__step-descriptions-item--active');
            //listText.children.forEach(element => element.classList.remove('aid-instruction__step-descriptions-item--active'))
            textOfNumber.classList.add('aid-instruction__step-descriptions-item--active')
        }));

        const allList = document.createDocumentFragment();
        for(let i = 0; i < tableOfInstruction.instructionText.length; i++){
            let step = document.createElement('li');
            step.innerHTML= tableOfInstruction.instructionText[i];
            step.classList.add('aid-instruction__step-descriptions-item');
            allList.appendChild(step);

            //console.log(step);
            //console.log(tableOfInstruction.instructionText[i]);
        }
        listText.appendChild(allList);
    }else{
            const iconsOfStep = document.querySelectorAll('.aid-instruction__step-icons-item')
            iconsOfStep.forEach(element => element.addEventListener('click', function(){
                toogleStepDescription(this);
            }));
            
            const toogleStepDescription = (element) => {
                if(!e.matches){
                    //console.log(element.getAttribute('data-number'));
                    let numberOfStep = element.getAttribute('data-number');
                    //console.log('hello from e.matches')
                    console.log(tableOfInstruction.instructionText[numberOfStep-1]);
                    listText.innerHTML = '';

                    let step = document.createElement('li');
                    step.innerHTML= tableOfInstruction.instructionText[numberOfStep-1];
                    step.classList.add('aid-instruction__step-descriptions-item');
                    listText.appendChild(step);
                }
            }

            toogleStepDescription(document.querySelector('.aid-instruction__step-icons-item'));
    }
}
// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)
