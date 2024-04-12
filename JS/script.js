function main(){

// ! slider ploign
$(document).ready()
{
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        rtl: true,
        margin: 15,
        nav: false,
        loop: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 5
            },
            1000: {
                items: 5
            }
        }
    });
}

// ! set defult content
function setDefult(){
    fetch("/DATA/data.json").then((data)=>{
        return data.json();
    }).then((dataJs)=>{
        const resData=dataJs[0];

        resData.forEach(item => {
            // create element HTML
            var div1=document.createElement("div");
            var div2=document.createElement("div");
            var div3=document.createElement("div");
            var div4=document.createElement("div");
            var title=document.createElement("span");
            var price=document.createElement("span");
            var body=document.createElement("span");
            var hr=document.createElement("hr");

            // set className in Element
            div1.className="col-12";
            if((item.id==1) && (item.body=="NULL")){
                div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
            }                
            else{
                div2.className="d-flex justify-content-between px-3 pt-2";
            }
            
            div3.className="d-flex px-3 pt-3 pb-2";
            div4.className="divider bg-white";
            hr.className="py-0";
            body.style.fontSize="11px";

            // set innerText in Element
            title.innerText=item.title;
            body.innerText=item.body;
            price.innerText=item.Price;

            // append child in Element
            div1.appendChild(div2);
            div2.appendChild(title);
            div2.appendChild(price);

            if(item.body!="NULL"){
                div1.appendChild(div3);
                div3.appendChild(body);
            }

            div1.appendChild(div4);
            if(item.id!==4){
                div4.appendChild(hr);
            }
            

            allItem.appendChild(div1);
        });
    })
}
setDefult();


// ! data
function getData(){
    // get btn id
    const allItem=document.getElementById("allItem")
    const btn1=document.getElementById("pishGhaza");
    const btn2=document.getElementById("salad");
    const btn3=document.getElementById("pizza");
    const btn4=document.getElementById("pasta");
    const btn5=document.getElementById("shokhary");
    const btn6=document.getElementById("sandevich");
    const btn7=document.getElementById("stayke");
    const btn8=document.getElementById("cake");
    const btn9=document.getElementById("deser");
    const btn10=document.getElementById("bar-garm");
    const btn11=document.getElementById("bar-sard");
    const btn12=document.getElementById("damnosh");
    const btn13=document.getElementById("maktail");
    const btn14=document.getElementById("shayk");
    const btn15=document.getElementById("sharbat");


    //! get data btn 1
    btn1.addEventListener("click",()=>{
        // ! set lodaing
        allItem.innerHTML=`<div class="spinner-border mx-auto px-3 py-3 mt-5 mb-4 LoadingContent" role="status">
        <span class="visually-hidden" >Loading...</span>
      </div>`;

        setTimeout(() => {
            allItem.innerHTML="";
        
            fetch("/DATA/data.json").then((data)=>{
                return data.json();
            }).then((dataJs)=>{
                const resData=dataJs[0];
    
                resData.forEach(item => {
                    // create element HTML
                    var div1=document.createElement("div");
                    var div2=document.createElement("div");
                    var div3=document.createElement("div");
                    var div4=document.createElement("div");
                    var title=document.createElement("span");
                    var price=document.createElement("span");
                    var body=document.createElement("span");
                    var hr=document.createElement("hr");
    
                    // set className in Element
                    div1.className="col-12";
                    if((item.id==1) && (item.body=="NULL")){
                        div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                    }                
                    else{
                        div2.className="d-flex justify-content-between px-3 pt-2";
                    }
                    
                    div3.className="d-flex px-3 pt-3 pb-2";
                    div4.className="divider bg-white";
                    hr.className="py-0";
                    body.style.fontSize="11px";
    
                    // set innerText in Element
                    title.innerText=item.title;
                    body.innerText=item.body;
                    price.innerText=item.Price;
    
                    // append child in Element
                    div1.appendChild(div2);
                    div2.appendChild(title);
                    div2.appendChild(price);
    
                    if(item.body!="NULL"){
                        div1.appendChild(div3);
                        div3.appendChild(body);
                    }
    
                    div1.appendChild(div4);
                    if(item.id!==4){
                        div4.appendChild(hr);
                    }
                    
        
                    allItem.appendChild(div1);
                });
            })
        }, 1000);
        
    });

    //! get data btn 2
    btn2.addEventListener("click",()=>{
        // ! set lodaing
        allItem.innerHTML=`<div class="spinner-border mx-auto px-3 py-3 mt-5 mb-4 LoadingContent" role="status">
        <span class="visually-hidden" >Loading...</span>
      </div>`;
      
      setTimeout(() => {
        allItem.innerHTML="";
        fetch("/DATA/data.json").then((data)=>{
            return data.json();
        }).then((dataJs)=>{
            const resData=dataJs[1];

            resData.forEach(item => {
                // create element HTML
                var div1=document.createElement("div");
                var div2=document.createElement("div");
                var div3=document.createElement("div");
                var div4=document.createElement("div");
                var title=document.createElement("span");
                var price=document.createElement("span");
                if(item.body!=="NULL"){
                    var body=document.createElement("span");
                }
                var hr=document.createElement("hr");

                // set className in Element
                div1.className="col-12";
                if((item.id==1) && (item.body=="NULL")){
                    div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                }                
                else{
                    div2.className="d-flex justify-content-between px-3 pt-2";
                }
                
                div3.className="d-flex px-3 pt-3 pb-2";
                div4.className="divider bg-white";
                hr.className="py-0";
                body.style.fontSize="11px";

                // set innerText in Element
                title.innerText=item.title;
                body.innerText=item.body;
                price.innerText=item.Price;

                // append child in Element
                div1.appendChild(div2);
                div2.appendChild(title);
                div2.appendChild(price);

                if(item.body!="NULL"){
                    div1.appendChild(div3);
                    div3.appendChild(body);
                }

                div1.appendChild(div4);
                if(item.id!==3){
                    div4.appendChild(hr);
                }
                
    
                allItem.appendChild(div1);
            });
        })
      }, 1000);
        
    });

    //! get data btn 3
    btn3.addEventListener("click",()=>{
         // ! set lodaing
        allItem.innerHTML=`<div class="spinner-border mx-auto px-3 py-3 mt-5 mb-4 LoadingContent" role="status">
        <span class="visually-hidden" >Loading...</span>
      </div>`;

      setTimeout(() => {
          allItem.innerHTML="";
          fetch("/DATA/data.json").then((data)=>{
              return data.json();
          }).then((dataJs)=>{
              const resData=dataJs[2];
  
              resData.forEach(item => {
                  // create element HTML
                  var div1=document.createElement("div");
                  var div2=document.createElement("div");
                  var div3=document.createElement("div");
                  var div4=document.createElement("div");
                  var title=document.createElement("span");
                  var price=document.createElement("span");
                  if(item.body!=="NULL"){
                      var body=document.createElement("span");
                  }
                  var hr=document.createElement("hr");
  
                  // set className in Element
                  div1.className="col-12";
                  if((item.id==1) && (item.body=="NULL")){
                      div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                  }                
                  else{
                      div2.className="d-flex justify-content-between px-3 pt-2";
                  }
                  
                  div3.className="d-flex px-3 pt-3 pb-2";
                  div4.className="divider bg-white";
                  hr.className="py-0";
                  body.style.fontSize="11px";
  
                  // set innerText in Element
                  title.innerText=item.title;
                  body.innerText=item.body;
                  price.innerText=item.Price;
  
                  // append child in Element
                  div1.appendChild(div2);
                  div2.appendChild(title);
                  div2.appendChild(price);
  
                  if(item.body!="NULL"){
                      div1.appendChild(div3);
                      div3.appendChild(body);
                  }
  
                  div1.appendChild(div4);
                  if(item.id!==10){
                      div4.appendChild(hr);
                  }
                  
      
                  allItem.appendChild(div1);
              });
          })
      }, 1000);

    });

    //! get data btn 4
    btn4.addEventListener("click",()=>{
        // ! set lodaing
        allItem.innerHTML=`<div class="spinner-border mx-auto px-3 py-3 mt-5 mb-4 LoadingContent" role="status">
        <span class="visually-hidden" >Loading...</span>
        </div>`;

        setTimeout(() => {
            allItem.innerHTML="";
            fetch("/DATA/data.json").then((data)=>{
                return data.json();
            }).then((dataJs)=>{
                const resData=dataJs[3];
    
                resData.forEach(item => {
                    // create element HTML
                    var div1=document.createElement("div");
                    var div2=document.createElement("div");
                    var div3=document.createElement("div");
                    var div4=document.createElement("div");
                    var title=document.createElement("span");
                    var price=document.createElement("span");
                    if(item.body!=="NULL"){
                        var body=document.createElement("span");
                    }
                    var hr=document.createElement("hr");
    
                    // set className in Element
                    div1.className="col-12";
                    if((item.id==1) && (item.body=="NULL")){
                        div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                    }                
                    else{
                        div2.className="d-flex justify-content-between px-3 pt-2";
                    }
                   
                   div3.className="d-flex px-3 pt-3 pb-2";
                   div4.className="divider bg-white";
                   hr.className="py-0";
                   body.style.fontSize="11px";
    
                   // set innerText in Element
                   title.innerText=item.title;
                   body.innerText=item.body;
                   price.innerText=item.Price;
    
                   // append child in Element
                   div1.appendChild(div2);
                   div2.appendChild(title);
                   div2.appendChild(price);
    
                   if(item.body!="NULL"){
                       div1.appendChild(div3);
                       div3.appendChild(body);
                   }
    
                   div1.appendChild(div4);
                   if(item.id!==8){
                       div4.appendChild(hr);
                   }
                   
       
                   allItem.appendChild(div1);
                });
            })
        }, 1000);

    });

    //! get data btn 5
    btn5.addEventListener("click",()=>{
         // ! set lodaing
        allItem.innerHTML=`<div class="spinner-border mx-auto px-3 py-3 mt-5 mb-4 LoadingContent" role="status">
        <span class="visually-hidden" >Loading...</span>
        </div>`;

        setTimeout(() => {
            allItem.innerHTML="";
            fetch("/DATA/data.json").then((data)=>{
                return data.json();
            }).then((dataJs)=>{
                const resData=dataJs[4];
    
                resData.forEach(item => {
                    // create element HTML
                    var div1=document.createElement("div");
                    var div2=document.createElement("div");
                    var div3=document.createElement("div");
                    var div4=document.createElement("div");
                    var title=document.createElement("span");
                    var price=document.createElement("span");
                    if(item.body!=="NULL"){
                        var body=document.createElement("span");
                    }
                    var hr=document.createElement("hr");
    
                    // set className in Element
                    div1.className="col-12";
                    if((item.id==1) && (item.body=="NULL")){
                        div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                    }                
                    else{
                        div2.className="d-flex justify-content-between px-3 pt-2";
                    }
                    
                    div3.className="d-flex px-3 pt-3 pb-2";
                    div4.className="divider bg-white";
                    hr.className="py-0";
                    body.style.fontSize="11px";
    
                    // set innerText in Element
                    title.innerText=item.title;
                    body.innerText=item.body;
                    price.innerText=item.Price;
    
                    // append child in Element
                    div1.appendChild(div2);
                    div2.appendChild(title);
                    div2.appendChild(price);
    
                    if(item.body!="NULL"){
                        div1.appendChild(div3);
                        div3.appendChild(body);
                    }
    
                    div1.appendChild(div4);
                    if(item.id!==3){
                        div4.appendChild(hr);
                    }
                    
        
                    allItem.appendChild(div1);
                });
            })
        }, 1000);
    });

    //! get data btn 6
    btn6.addEventListener("click",()=>{
         // ! set lodaing
        allItem.innerHTML=`<div class="spinner-border mx-auto px-3 py-3 mt-5 mb-4 LoadingContent" role="status">
        <span class="visually-hidden" >Loading...</span>
        </div>`;
        setTimeout(() => {
            allItem.innerHTML="";
            fetch("/DATA/data.json").then((data)=>{
                return data.json();
            }).then((dataJs)=>{
                const resData=dataJs[5];
    
                resData.forEach(item => {
                    // create element HTML
                    var div1=document.createElement("div");
                    var div2=document.createElement("div");
                    var div3=document.createElement("div");
                    var div4=document.createElement("div");
                    var title=document.createElement("span");
                    var price=document.createElement("span");
                    if(item.body!=="NULL"){
                        var body=document.createElement("span");
                    }
                    var hr=document.createElement("hr");
    
                    // set className in Element
                    div1.className="col-12";
                    if((item.id==1) && (item.body=="NULL")){
                        div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                    }                
                    else{
                        div2.className="d-flex justify-content-between px-3 pt-2";
                    }
                    
                    div3.className="d-flex px-3 pt-3 pb-2";
                    div4.className="divider bg-white";
                    hr.className="py-0";
                    body.style.fontSize="11px";
    
                    // set innerText in Element
                    title.innerText=item.title;
                    body.innerText=item.body;
                    price.innerText=item.Price;
    
                    // append child in Element
                    div1.appendChild(div2);
                    div2.appendChild(title);
                    div2.appendChild(price);
    
                    if(item.body!="NULL"){
                        div1.appendChild(div3);
                        div3.appendChild(body);
                    }
    
                    div1.appendChild(div4);
                    if(item.id!==11){
                        div4.appendChild(hr);
                    }
                    
        
                    allItem.appendChild(div1);
                });
            })
        }, 1000);
    });

    //! get data btn 7
    btn7.addEventListener("click",()=>{
        // ! set lodaing
        allItem.innerHTML=`<div class="spinner-border mx-auto px-3 py-3 mt-5 mb-4 LoadingContent" role="status">
        <span class="visually-hidden" >Loading...</span>
        </div>`;

        setTimeout(() => {
            allItem.innerHTML="";
            fetch("/DATA/data.json").then((data)=>{
                return data.json();
            }).then((dataJs)=>{
                const resData=dataJs[6];
    
                resData.forEach(item => {
                    // create element HTML
                    var div1=document.createElement("div");
                    var div2=document.createElement("div");
                    var div3=document.createElement("div");
                    var div4=document.createElement("div");
                    var title=document.createElement("span");
                    var price=document.createElement("span");
                    if(item.body!=="NULL"){
                        var body=document.createElement("span");
                    }
                    var hr=document.createElement("hr");
    
                    // set className in Element
                    div1.className="col-12";
                    if((item.id==1) && (item.body=="NULL")){
                        div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                    }                
                    else{
                        div2.className="d-flex justify-content-between px-3 pt-2";
                    }
                    
                    div3.className="d-flex px-3 pt-3 pb-2";
                    div4.className="divider bg-white";
                    hr.className="py-0";
                    body.style.fontSize="11px";
    
                    // set innerText in Element
                    title.innerText=item.title;
                    body.innerText=item.body;
                    price.innerText=item.Price;
    
                    // append child in Element
                    div1.appendChild(div2);
                    div2.appendChild(title);
                    div2.appendChild(price);
    
                    if(item.body!="NULL"){
                        div1.appendChild(div3);
                        div3.appendChild(body);
                    }
    
                    div1.appendChild(div4);
                    if(item.id!==5){
                        div4.appendChild(hr);
                    }
                    
        
                    allItem.appendChild(div1);
                });
            })
        }, 1000);
    });

    //! get data btn 8
    btn8.addEventListener("click",()=>{
        // ! set lodaing
        allItem.innerHTML=`<div class="spinner-border mx-auto px-3 py-3 mt-5 mb-4 LoadingContent" role="status">
        <span class="visually-hidden" >Loading...</span>
        </div>`;

        setTimeout(() => {
            allItem.innerHTML="";
            fetch("/DATA/data.json").then((data)=>{
                return data.json();
            }).then((dataJs)=>{
                const resData=dataJs[7];
    
                resData.forEach(item => {
                    // create element HTML
                    var div1=document.createElement("div");
                    var div2=document.createElement("div");
                    var div3=document.createElement("div");
                    var div4=document.createElement("div");
                    var title=document.createElement("span");
                    var price=document.createElement("span");
                    if(item.body!=="NULL"){
                        var body=document.createElement("span");
                    }
                    var hr=document.createElement("hr");
    
                    // set className in Element
                    div1.className="col-12";
                    if((item.id==1) && (item.body=="NULL")){
                        div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                    }                
                    else{
                        div2.className="d-flex justify-content-between px-3 pt-2";
                    }
                    
                    div3.className="d-flex px-3 pt-3 pb-2";
                    div4.className="divider bg-white";
                    hr.className="py-0";
    
                    // set innerText in Element
                    title.innerText=item.title;
                    price.innerText=item.Price;
                    
                    // append child in Element
                    div1.appendChild(div2);
                    div2.appendChild(title);
                    div2.appendChild(price);
                    
                    if(item.body!="NULL"){
                        body.innerText=item.body;
                        div1.appendChild(div3);
                        div3.appendChild(body);
                        body.style.fontSize="11px";
                    }
    
                    div1.appendChild(div4);
                    if(item.id!==6){
                        div4.appendChild(hr);
                    }
                    
        
                    allItem.appendChild(div1);
                });
            })
        }, 1000);
    });

    //! get data btn 9
    btn9.addEventListener("click",()=>{
        // ! set lodaing
        allItem.innerHTML=`<div class="spinner-border mx-auto px-3 py-3 mt-5 mb-4 LoadingContent" role="status">
        <span class="visually-hidden" >Loading...</span>
        </div>`;

        setTimeout(() => {
            allItem.innerHTML="";
            fetch("/DATA/data.json").then((data)=>{
                return data.json();
            }).then((dataJs)=>{
                const resData=dataJs[8];
    
                resData.forEach(item => {
                    // create element HTML
                    var div1=document.createElement("div");
                    var div2=document.createElement("div");
                    var div3=document.createElement("div");
                    var div4=document.createElement("div");
                    var title=document.createElement("span");
                    var price=document.createElement("span");
                    if(item.body!=="NULL"){
                        var body=document.createElement("span");
                    }
                    var hr=document.createElement("hr");
    
                    // set className in Element
                    div1.className="col-12";
                    if((item.id==1) && (item.body=="NULL")){
                        div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                    }                
                    else{
                        div2.className="d-flex justify-content-between px-3 pt-2";
                    }
                    
                    div3.className="d-flex px-3 pt-3 pb-2";
                    div4.className="divider bg-white";
                    hr.className="py-0";
    
                    // set innerText in Element
                    title.innerText=item.title;
                    price.innerText=item.Price;
                    
                    // append child in Element
                    div1.appendChild(div2);
                    div2.appendChild(title);
                    div2.appendChild(price);
                    
                    if(item.body!="NULL"){
                        body.innerText=item.body;
                        div1.appendChild(div3);
                        div3.appendChild(body);
                        body.style.fontSize="11px";
                    }
    
                    div1.appendChild(div4);
                    if(item.id!==2){
                        div4.appendChild(hr);
                    }
                    
        
                    allItem.appendChild(div1);
                });
            })
        }, 1000);
    });

    //! get data btn 10
    btn10.addEventListener("click",()=>{
        // ! set lodaing
        allItem.innerHTML=`<div class="spinner-border mx-auto px-3 py-3 mt-5 mb-4 LoadingContent" role="status">
        <span class="visually-hidden" >Loading...</span>
        </div>`;

        setTimeout(() => {
            allItem.innerHTML="";
            fetch("/DATA/data.json").then((data)=>{
                return data.json();
            }).then((dataJs)=>{
                const resData=dataJs[9];
    
                resData.forEach(item => {
                    // create element HTML
                    var div1=document.createElement("div");
                    var div2=document.createElement("div");
                    var div3=document.createElement("div");
                    var div4=document.createElement("div");
                    var title=document.createElement("span");
                    var price=document.createElement("span");
                    if(item.body!=="NULL"){
                        var body=document.createElement("span");
                    }
                    var hr=document.createElement("hr");
    
                    // set className in Element
                    div1.className="col-12";
                    if((item.id==1) && (item.body=="NULL")){
                        div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                    }                
                    else{
                        div2.className="d-flex justify-content-between px-3 pt-2";
                    }
                    
                    div3.className="d-flex px-3 pt-3 pb-2";
                    div4.className="divider bg-white";
                    hr.className="py-0";
    
                    // set innerText in Element
                    title.innerText=item.title;
                    price.innerText=item.Price;
                    
                    // append child in Element
                    div1.appendChild(div2);
                    div2.appendChild(title);
                    div2.appendChild(price);
                    
                    if(item.body!="NULL"){
                        body.innerText=item.body;
                        div1.appendChild(div3);
                        div3.appendChild(body);
                        body.style.fontSize="11px";
                    }
    
                    div1.appendChild(div4);
                    if(item.id!==15){
                        div4.appendChild(hr);
                    }
                    
        
                    allItem.appendChild(div1);
                });
            })
        }, 1000);
    });

    //! get data btn 11
    btn11.addEventListener("click",()=>{
        // ! set lodaing
        allItem.innerHTML=`<div class="spinner-border mx-auto px-3 py-3 mt-5 mb-4 LoadingContent" role="status">
        <span class="visually-hidden" >Loading...</span>
        </div>`;

        setTimeout(() => {
            allItem.innerHTML="";
            fetch("/DATA/data.json").then((data)=>{
                return data.json();
            }).then((dataJs)=>{
                const resData=dataJs[10];
    
                resData.forEach(item => {
                    // create element HTML
                    var div1=document.createElement("div");
                    var div2=document.createElement("div");
                    var div3=document.createElement("div");
                    var div4=document.createElement("div");
                    var title=document.createElement("span");
                    var price=document.createElement("span");
                    if(item.body!=="NULL"){
                        var body=document.createElement("span");
                    }
                    var hr=document.createElement("hr");
    
                    // set className in Element
                    div1.className="col-12";
                    if((item.id==1) && (item.body=="NULL")){
                        div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                    }                
                    else{
                        div2.className="d-flex justify-content-between px-3 pt-2";
                    }
                    
                    div3.className="d-flex px-3 pt-3 pb-2";
                    div4.className="divider bg-white";
                    hr.className="py-0";
    
                    // set innerText in Element
                    title.innerText=item.title;
                    price.innerText=item.Price;
                    
                    // append child in Element
                    div1.appendChild(div2);
                    div2.appendChild(title);
                    div2.appendChild(price);
                    
                    if(item.body!="NULL"){
                        body.innerText=item.body;
                        div1.appendChild(div3);
                        div3.appendChild(body);
                        body.style.fontSize="11px";
                    }
    
                    div1.appendChild(div4);
                    if(item.id!==7){
                        div4.appendChild(hr);
                    }
                    
        
                    allItem.appendChild(div1);
                });
            })
        }, 1000);
    });

    //! get data btn 12
    btn12.addEventListener("click",()=>{
         // ! set lodaing
        allItem.innerHTML=`<div class="spinner-border mx-auto px-3 py-3 mt-5 mb-4 LoadingContent" role="status">
        <span class="visually-hidden" >Loading...</span>
        </div>`;

        setTimeout(() => {
            allItem.innerHTML="";
            fetch("/DATA/data.json").then((data)=>{
                return data.json();
            }).then((dataJs)=>{
                const resData=dataJs[11];
    
                resData.forEach(item => {
                    // create element HTML
                    var div1=document.createElement("div");
                    var div2=document.createElement("div");
                    var div3=document.createElement("div");
                    var div4=document.createElement("div");
                    var title=document.createElement("span");
                    var price=document.createElement("span");
                    if(item.body!=="NULL"){
                        var body=document.createElement("span");
                    }
                    var hr=document.createElement("hr");
    
                    // set className in Element
                    div1.className="col-12";
                    if((item.id==1) && (item.body=="NULL")){
                        div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                    }                
                    else{
                        div2.className="d-flex justify-content-between px-3 pt-2";
                    }
                    
                    div3.className="d-flex px-3 pt-3 pb-2";
                    div4.className="divider bg-white";
                    hr.className="py-0";
    
                    // set innerText in Element
                    title.innerText=item.title;
                    price.innerText=item.Price;
                    
                    // append child in Element
                    div1.appendChild(div2);
                    div2.appendChild(title);
                    div2.appendChild(price);
                    
                    if(item.body!="NULL"){
                        body.innerText=item.body;
                        div1.appendChild(div3);
                        div3.appendChild(body);
                        body.style.fontSize="11px";
                    }
    
                    div1.appendChild(div4);
                    if(item.id!==7){
                        div4.appendChild(hr);
                    }
                    
        
                    allItem.appendChild(div1);
                });
            })
        }, 1000);
    });

    //! get data btn 13
    btn13.addEventListener("click",()=>{
         // ! set lodaing
        allItem.innerHTML=`<div class="spinner-border mx-auto px-3 py-3 mt-5 mb-4 LoadingContent" role="status">
        <span class="visually-hidden" >Loading...</span>
        </div>`;

        setTimeout(() => {
            allItem.innerHTML="";
            fetch("/DATA/data.json").then((data)=>{
                return data.json();
            }).then((dataJs)=>{
                const resData=dataJs[12];
    
                resData.forEach(item => {
                    // create element HTML
                    var div1=document.createElement("div");
                    var div2=document.createElement("div");
                    var div3=document.createElement("div");
                    var div4=document.createElement("div");
                    var title=document.createElement("span");
                    var price=document.createElement("span");
                    if(item.body!=="NULL"){
                        var body=document.createElement("span");
                    }
                    var hr=document.createElement("hr");
    
                    // set className in Element
                    div1.className="col-12";
                    if((item.id==1) && (item.body=="NULL")){
                        div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                    }                
                    else{
                        div2.className="d-flex justify-content-between px-3 pt-2";
                    }
                    
                    div3.className="d-flex px-3 pt-3 pb-2";
                    div4.className="divider bg-white";
                    hr.className="py-0";
    
                    // set innerText in Element
                    title.innerText=item.title;
                    price.innerText=item.Price;
                    
                    // append child in Element
                    div1.appendChild(div2);
                    div2.appendChild(title);
                    div2.appendChild(price);
                    
                    if(item.body!="NULL"){
                        body.innerText=item.body;
                        div1.appendChild(div3);
                        div3.appendChild(body);
                        body.style.fontSize="11px";
                    }
    
                    div1.appendChild(div4);
                    if(item.id!==8){
                        div4.appendChild(hr);
                    }
                    
        
                    allItem.appendChild(div1);
                });
            })
        }, 1000);
    });

    //! get data btn 14
    btn14.addEventListener("click",()=>{
        // ! set lodaing
        allItem.innerHTML=`<div class="spinner-border mx-auto px-3 py-3 mt-5 mb-4 LoadingContent" role="status">
        <span class="visually-hidden" >Loading...</span>
        </div>`;

        setTimeout(() => {
            allItem.innerHTML="";
            fetch("/DATA/data.json").then((data)=>{
                return data.json();
            }).then((dataJs)=>{
                const resData=dataJs[13];
    
                resData.forEach(item => {
                    // create element HTML
                    var div1=document.createElement("div");
                    var div2=document.createElement("div");
                    var div3=document.createElement("div");
                    var div4=document.createElement("div");
                    var title=document.createElement("span");
                    var price=document.createElement("span");
                    if(item.body!=="NULL"){
                        var body=document.createElement("span");
                    }
                    var hr=document.createElement("hr");
    
                    // set className in Element
                    div1.className="col-12";
                    if((item.id==1) && (item.body=="NULL")){
                        div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                    }                
                    else{
                        div2.className="d-flex justify-content-between px-3 pt-2";
                    }
                    
                    div3.className="d-flex px-3 pt-3 pb-2";
                    div4.className="divider bg-white";
                    hr.className="py-0";
    
                    // set innerText in Element
                    title.innerText=item.title;
                    price.innerText=item.Price;
                    
                    // append child in Element
                    div1.appendChild(div2);
                    div2.appendChild(title);
                    div2.appendChild(price);
                    
                    if(item.body!="NULL"){
                        body.innerText=item.body;
                        div1.appendChild(div3);
                        div3.appendChild(body);
                        body.style.fontSize="11px";
                    }
    
                    div1.appendChild(div4);
                    if(item.id!==10){
                        div4.appendChild(hr);
                    }
                    
        
                    allItem.appendChild(div1);
                });
            })
        }, 1000);
    });

    //! get data btn 15
    btn15.addEventListener("click",()=>{
        // ! set lodaing
        allItem.innerHTML=`<div class="spinner-border mx-auto px-3 py-3 mt-5 mb-4 LoadingContent" role="status">
        <span class="visually-hidden" >Loading...</span>
        </div>`;

        setTimeout(() => {
            allItem.innerHTML="";
            fetch("/DATA/data.json").then((data)=>{
                return data.json();
            }).then((dataJs)=>{
                const resData=dataJs[14];
    
                resData.forEach(item => {
                    // create element HTML
                    var div1=document.createElement("div");
                    var div2=document.createElement("div");
                    var div3=document.createElement("div");
                    var div4=document.createElement("div");
                    var title=document.createElement("span");
                    var price=document.createElement("span");
                    if(item.body!=="NULL"){
                        var body=document.createElement("span");
                    }
                    var hr=document.createElement("hr");
    
                    // set className in Element
                    div1.className="col-12";
                    if((item.id==1) && (item.body=="NULL")){
                        div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                    }                
                    else{
                        div2.className="d-flex justify-content-between px-3 pt-2";
                    }
                    
                    div3.className="d-flex px-3 pt-3 pb-2";
                    div4.className="divider bg-white";
                    hr.className="py-0";
    
                    // set innerText in Element
                    title.innerText=item.title;
                    price.innerText=item.Price;
                    
                    // append child in Element
                    div1.appendChild(div2);
                    div2.appendChild(title);
                    div2.appendChild(price);
                    
                    if(item.body!="NULL"){
                        body.innerText=item.body;
                        div1.appendChild(div3);
                        div3.appendChild(body);
                        body.style.fontSize="11px";
                    }
    
                    div1.appendChild(div4);
                    if(item.id!==3){
                        div4.appendChild(hr);
                    }
                    
        
                    allItem.appendChild(div1);
                });
            })
        }, 1000);
    });


}
getData()






















}
main()