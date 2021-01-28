function CodeExecution(){
    //strings
    const title = "How to use rest/spread operator";
    
    console.log(title);
    console.log(...title);
    console.log([...title]);
    
    //arrays
    const firstCoursesList = ['NodeJS', 'React', 'React Native'];
    const secondCoursesList = ['Flutter', 'Elixir', 'Python'];
    const completeCoursesList = ['Linux', 'POO', ...firstCoursesList, ...secondCoursesList];
    
    console.log(completeCoursesList);

    //objects
    const user = {
        name: 'Levi Siebra',
        age: 18,
        height: 63
    }
    
    const newAttributeInUser = {
        ...user,
        width: 1.79
    }

    console.log(newAttributeInUser);
}

module.exports = CodeExecution;