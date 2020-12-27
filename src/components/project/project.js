const project = document.querySelectorAll('.project__wrapper');
console.log(project);

for (let element = 0; element < project.length; element++) {
    const child = project[element];
    console.log(child);
    console.log(child.classList);
    element%2===0 ? child.classList.add('project__wrapper-right'): child.classList.add('project__wrapper-left')
}
