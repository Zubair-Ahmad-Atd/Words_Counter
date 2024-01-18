import inquirer from 'inquirer'; 

 let wordsCount = (text:string)=>console.log(text.replace(/\s/g,"").length);

 async function userPara(){ 
    let ans = await inquirer.prompt({ 
        type:"input",
        name:"userAns",
        message:"Enter the Paragraph"
    }) 
    wordsCount(ans.userAns)
}
userPara()