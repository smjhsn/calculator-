// function create_html_tag(){
//    content = document.getElementById("input_text").value; // getting type content
//    para = document.createElement("p"); //creating "p" tag
//    our_data = document.createTextNode(content); // this command used to prepare the content to use inside dom
//    para.append(our_data); // adding content to "p" tag
//    div = document.getElementById("div1");
//    div.appendChild(para);

// }
        let outputScreen = document.getElementById("output-screen");
        
        function display(num){
            outputScreen.value += num ;

        }
        function equal(){
            try{
                outputScreen.value = eval(outputScreen.value) ;
            }catch(err){
                alert("Invalid Input")
            }
        }

        function Clear(){
            outputScreen.value = "";
        }

        function del(){
          outputScreen.value = outputScreen.value.slice(0,-1);
        }