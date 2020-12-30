export const addPositionProject = () =>{

    const project = document.querySelectorAll('.project__wrapper');

    for (let element = 0; element < project.length; element++) {
        const child = project[element];
        element%2===0 ? child.classList.add('project__wrapper-right'): child.classList.add('project__wrapper-left')
    }

}

addPositionProject();